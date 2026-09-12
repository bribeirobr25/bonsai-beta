/**
 * Rate-limit behaviour against real Postgres · plan §24.2.
 *
 * The SQL is the implementation, so a mocked test would assert nothing. In
 * particular the atomicity claim - one statement, no read-then-write race -
 * can only be checked by firing concurrent requests at an actual database.
 *
 * TEST POLICY (§17): each assertion cites the requirement it enforces.
 */
import { createHash } from "node:crypto";
import { sql as dsql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { afterAll, beforeEach, describe, expect, it } from "vitest";
import { TIERS } from "./rate-limit-tiers";

const DB_URL =
  process.env.DATABASE_URL ??
  "postgresql://postgres:postgres@127.0.0.1:54322/postgres";
const sql = postgres(DB_URL, { prepare: false, max: 12, connect_timeout: 3 });
const reachable = await sql`select 1`.then(
  () => true,
  () => false,
);

/**
 * Mirrors the statement in rate-limit.ts.
 *
 * Duplicated rather than imported because that module is `server-only` and
 * cannot load in a test runner. The TIERS are imported from the shared module
 * so the NUMBERS cannot drift; the SQL is copied, which is a real risk worth
 * naming: a change to the production statement that broke atomicity would not
 * fail here. The concurrency test below is what would catch it, and it is why
 * that test exists rather than being assumed.
 */
async function hit(tier: keyof typeof TIERS, identifier: string) {
  const { limit, windowSeconds } = TIERS[tier];
  const key = createHash("sha256")
    .update(`${tier}:${identifier.toLowerCase()}`, "utf8")
    .digest("hex");
  const rows = await sql`
    insert into rate_limits (bucket, window_started_at, hits)
      values (${key}, now(), 1)
    on conflict (bucket) do update set
      hits = case
        when rate_limits.window_started_at < now() - make_interval(secs => ${windowSeconds})
        then 1 else rate_limits.hits + 1 end,
      window_started_at = case
        when rate_limits.window_started_at < now() - make_interval(secs => ${windowSeconds})
        then now() else rate_limits.window_started_at end
    returning hits`;
  const hits = Number(rows[0].hits);
  return { allowed: hits <= limit, hits };
}

const maybe = () => (reachable ? describe : describe.skip);

beforeEach(async () => {
  if (reachable) await sql`delete from rate_limits`;
});
afterAll(async () => {
  if (reachable) await sql`delete from rate_limits`;
  await sql.end();
});

maybe()("rate limiting · gate PRIV/§24.2", () => {
  it("allows exactly the tier limit and refuses the next request", async () => {
    // Requirement: authEmail is 3 per 15 minutes. Off-by-one here means either
    // a legitimate user is refused their third link, or a fourth send goes out.
    const results = [];
    for (let i = 0; i < 4; i++) results.push(await hit("authEmail", "a@x.test"));
    expect(results.map((r) => r.allowed)).toEqual([true, true, true, false]);
  });

  it("counts each identifier separately", async () => {
    // Requirement: one person hitting their limit must not lock out anybody
    // else. A shared counter would make the endpoint trivially deniable.
    for (let i = 0; i < 3; i++) await hit("authEmail", "a@x.test");
    const other = await hit("authEmail", "b@x.test");
    expect(other.allowed).toBe(true);
    expect(other.hits).toBe(1);
  });

  it("counts each tier separately", async () => {
    // Requirement: the per-email and per-IP tiers are independent controls.
    // Sharing a bucket would let an exhausted email limit refuse a different
    // person on the same address-family.
    for (let i = 0; i < 3; i++) await hit("authEmail", "same-value");
    const byIp = await hit("authIp", "same-value");
    expect(byIp.allowed).toBe(true);
  });

  it("stores no raw identifier, only a hash", async () => {
    // Requirement: the table's only job is counting. An email address or IP in
    // the clear would put personal data somewhere nobody would audit, and the
    // notice commits to at most 14 days for IP-bearing records.
    await hit("authEmail", "secret-person@example.test");
    const rows = await sql`select bucket from rate_limits`;
    expect(rows).toHaveLength(1);
    expect(rows[0].bucket).not.toContain("secret-person");
    expect(rows[0].bucket).not.toContain("example.test");
    expect(rows[0].bucket).toMatch(/^[0-9a-f]{64}$/);
  });

  it("resets when the window has passed", async () => {
    // Requirement: a fixed window must actually expire, or a limit becomes a
    // permanent ban after enough attempts.
    for (let i = 0; i < 3; i++) await hit("authEmail", "a@x.test");
    expect((await hit("authEmail", "a@x.test")).allowed).toBe(false);
    // Age the window past its expiry.
    await sql`update rate_limits set window_started_at = now() - interval '16 minutes'`;
    const after = await hit("authEmail", "a@x.test");
    expect(after.allowed).toBe(true);
    expect(after.hits).toBe(1);
  });

  it("counts correctly under concurrency, with no lost updates", async () => {
    // Requirement: the atomicity claim. A read-then-write limiter loses
    // increments under exactly this load and silently permits more than the
    // limit - which is the failure mode a limiter exists to prevent, so it
    // cannot be left to inspection. 20 parallel hits must count to 20.
    const results = await Promise.all(
      Array.from({ length: 20 }, () => hit("consent", "burst@x.test")),
    );
    const counts = results.map((r) => r.hits).sort((a, b) => a - b);
    expect(counts).toEqual(Array.from({ length: 20 }, (_, i) => i + 1));
    const [row] = await sql`select hits from rate_limits`;
    expect(Number(row.hits)).toBe(20);
  });

  it("keeps one row per bucket rather than one per request", async () => {
    // Requirement: the table must not grow per request; it is a counter, not a
    // log. A row per attempt would be both a scaling problem and an access log
    // nobody declared.
    for (let i = 0; i < 5; i++) await hit("authIp", "1.2.3.4");
    const [{ n }] = await sql`select count(*)::int as n from rate_limits`;
    expect(n).toBe(1);
  });
});

maybe()("the production execution path, not just the SQL", () => {
  it("returns rows[0].hits through drizzle's db.execute, not a wrapped result", () => {
    /**
     * Requirement: closes the gap between what these tests exercise and what
     * production runs. Every other test here uses postgres.js directly, while
     * rate-limit.ts calls drizzle's `db.execute` - and drizzle's return shape
     * varies by driver. If it returned `{ rows: [...] }` instead of an array,
     * `rows[0].hits` would be undefined, `Number(undefined ?? 1)` would fall
     * back to 1, and EVERY REQUEST WOULD BE ALLOWED while all the SQL tests
     * above still passed. A limiter that silently permits everything is the
     * exact failure this suite exists to prevent.
     */
    const db = drizzle(sql);
    return db
      .execute(dsql`
        insert into rate_limits (bucket, window_started_at, hits)
          values ('drizzle-shape-probe', now(), 1)
        on conflict (bucket) do update set hits = rate_limits.hits + 1
        returning hits,
          greatest(0, ceil(extract(epoch from (
            window_started_at + make_interval(secs => ${900}) - now()
          ))))::int as reset_in
      `)
      .then((rows) => {
        expect(Array.isArray(rows)).toBe(true);
        const row = (rows as unknown as Array<{ hits: number; reset_in: number }>)[0];
        expect(row).toBeDefined();
        expect(Number(row.hits)).toBe(1);
        expect(Number(row.reset_in)).toBeGreaterThan(0);
      });
  });
});

maybe()("rate_limits is server-only", () => {
  it("is unreadable by anon and by an authenticated user", async () => {
    // Requirement: RLS enabled with zero policies. A visitor able to read this
    // table learns which hashed buckets are near their limit - and one able to
    // write it could clear their own counter.
    await hit("authIp", "9.9.9.9");
    for (const role of ["anon", "authenticated"]) {
      const rows = await sql.begin(async (tx) => {
        await tx`select set_config('request.jwt.claims', '', true)`;
        await tx.unsafe(`set local role ${role}`);
        return tx`select count(*)::int as n from rate_limits`;
      });
      expect((rows as unknown as Array<{ n: number }>)[0].n, role).toBe(0);
    }
  });
});
