/**
 * RLS isolation tests · plan §16 steps 1-5.
 *
 * These run against a real Postgres, because the thing under test is Postgres
 * behaviour. A unit test over schema.ts can assert that a policy is DECLARED;
 * only the database can tell you it is ENFORCED.
 *
 * TEST POLICY (§17): each test asserts a requirement, never observed output.
 *
 * Skipped when no database is reachable, so `pnpm test` stays usable without
 * Docker. The `rls-integration` CI job runs them against a local Supabase and
 * does NOT skip - see the guard at the bottom of this comment block.
 *
 * A note on why the first three tests exist at all: they check the harness, not
 * the product. If `set local role` silently failed, the connection would still
 * be `postgres` - which carries rolbypassrls - and every isolation test below
 * would pass while enforcing absolutely nothing. Those three tests are the
 * reason the rest can be believed.
 */
import postgres from "postgres";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";

const DB_URL =
  process.env.DATABASE_URL ??
  "postgresql://postgres:postgres@127.0.0.1:54322/postgres";

const UID_A = "11111111-1111-4111-8111-111111111111";
const UID_B = "22222222-2222-4222-8222-222222222222";
const INSTANCE = "00000000-0000-0000-0000-000000000000";

const sql: ReturnType<typeof postgres> = postgres(DB_URL, {
  prepare: false,
  max: 4,
  connect_timeout: 3,
});

/**
 * Reachability is probed at MODULE scope, not in beforeAll.
 *
 * vitest decides describe.skip during collection, which happens before any
 * beforeAll runs - so a flag set in beforeAll is still false when the skip
 * decision is made, and the whole file silently skips while reporting success.
 * That is exactly what happened on the first run of this file.
 */
const reachable = await sql`select 1`.then(
  () => true,
  () => false,
);

let treeA = "";
let treeB = "";
let momentA = "";
let photoA = "";

/** Query results are read positionally in these tests; a permissive row type
 *  keeps the assertions readable without pretending to model every shape. */
type Row = Record<string, string | number | boolean | null>;
type Rows = Row[];
/** The tagged-template function postgres.js exposes on a transaction. */
type Tx = (
  strings: TemplateStringsArray,
  ...values: unknown[]
) => Promise<unknown>;

/** Run a query with RLS enforced as `uid`. Mirrors withOwnerDb in src/db/rls.ts. */
async function asUser(uid: string, fn: (tx: Tx) => Promise<unknown>): Promise<Rows> {
  return (await sql.begin(async (tx) => {
    await tx`select
        set_config('request.jwt.claims', ${JSON.stringify({ sub: uid, role: "authenticated", aud: "authenticated" })}, true),
        set_config('request.jwt.claim.sub', ${uid}, true)`;
    await tx`set local role authenticated`;
    return fn(tx as unknown as Tx);
  })) as unknown as Rows;
}

/** Run a query with RLS enforced as an unauthenticated visitor. */
async function asAnon(fn: (tx: Tx) => Promise<unknown>): Promise<Rows> {
  return (await sql.begin(async (tx) => {
    await tx`select
        set_config('request.jwt.claims', '', true),
        set_config('request.jwt.claim.sub', '', true)`;
    await tx`set local role anon`;
    return fn(tx as unknown as Tx);
  })) as unknown as Rows;
}

/** Did a write actually change anything? "Rejected" and "matched no row" are
 *  both acceptable outcomes; "mutated" never is. */
async function attempt(fn: () => Promise<unknown>): Promise<"rejected" | "ok"> {
  try {
    await fn();
    return "ok";
  } catch {
    return "rejected";
  }
}

beforeAll(async () => {
  if (!reachable) return;
  await sql`delete from auth.users where id in (${UID_A}, ${UID_B})`;
  for (const [id, email] of [
    [UID_A, "rls-a@probe.test"],
    [UID_B, "rls-b@probe.test"],
  ]) {
    await sql`insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, created_at, updated_at)
              values (${id}, ${INSTANCE}, 'authenticated', 'authenticated', ${email}, 'x', now(), now(), now())`;
    await sql`insert into users (id, email, consent_version, consent_at, terms_ack)
              values (${id}, ${email}, '0.3', now(), true)`;
  }
  const [a] =
    await sql`insert into trees (owner_id, name) values (${UID_A}, 'Tree A') returning id`;
  const [b] =
    await sql`insert into trees (owner_id, name) values (${UID_B}, 'Tree B') returning id`;
  treeA = a.id as string;
  treeB = b.id as string;
  const [m] =
    await sql`insert into moments (tree_id, type, occurred_on) values (${treeA}, 'photo', '2026-01-01') returning id`;
  momentA = m.id as string;
  const [p] =
    await sql`insert into photos (tree_id, moment_id, storage_key) values (${treeA}, ${momentA}, 'k/a.webp') returning id`;
  photoA = p.id as string;
});

afterAll(async () => {
  if (reachable) {
    await sql`delete from auth.users where id in (${UID_A}, ${UID_B})`;
  }
  await sql.end();
});

const maybe = () => (reachable ? describe : describe.skip);

maybe()("the harness itself · without this, every test below is worthless", () => {
  it("actually drops out of the RLS-bypassing role", async () => {
    // Requirement: plan §16. DATABASE_URL connects as `postgres`, which has
    // rolbypassrls = true. If the role switch silently failed, policies would
    // be inert and every isolation test would falsely pass.
    const rows = await asUser(UID_A, (tx) =>
      tx`select current_user as role,
          coalesce((select rolbypassrls from pg_roles where rolname = current_user), false) as bypass`,
    );
    expect(rows[0].role).toBe("authenticated");
    expect(rows[0].bypass).toBe(false);
  });

  it("publishes claims so auth.uid() identifies the caller", async () => {
    // Requirement: every owner policy is written as `= auth.uid()`. A null uid
    // would make them all match nothing, which looks like working isolation.
    const rows = await asUser(UID_A, (tx) =>
      tx`select auth.uid()::text as uid`,
    );
    expect(rows[0].uid).toBe(UID_A);
  });

  it("leaves no role or claim behind for the next transaction", async () => {
    // Requirement: plan §16 - `set local` is transaction-scoped. On a pooled
    // connection a leaked role would break the privileged path, and leaked
    // claims would hand one user's identity to the next request.
    await asUser(UID_A, (tx) =>
      tx`select 1`,
    );
    const [after] =
      await sql`select current_user as role, coalesce(nullif(current_setting('request.jwt.claim.sub', true), ''), 'none') as sub`;
    expect(after.role).toBe("postgres");
    expect(after.sub).toBe("none");
  });
});

maybe()("owner isolation · trees · plan §16 step 2", () => {
  it("shows an owner only their own subjects", async () => {
    // Requirement: private by default (Handoff 04_CONTENT_GOVERNANCE).
    const rows = await asUser(UID_A, (tx) =>
      tx`select name from trees`,
    );
    expect(rows.map((r) => r.name)).toEqual(["Tree A"]);
  });

  it("hides another owner's subject even when its id is known", () => {
    // Requirement: an id is not a capability. Share tokens are the ONLY public
    // read path (plan §16 step 6); knowing a tree's uuid must grant nothing.
    return asUser(UID_A, (tx) => tx`select id from trees where id = ${treeB}`)
      .then((rows) => expect(rows).toHaveLength(0));
  });

  it("does not let one owner mutate another's subject", async () => {
    // Requirement: the USING predicate must scope UPDATE, not only SELECT.
    await attempt(() =>
      asUser(UID_B, (tx) =>
        tx`update trees set name = 'hijacked' where id = ${treeA}`,
      ),
    );
    const [row] = await sql`select name from trees where id = ${treeA}`;
    expect(row.name).toBe("Tree A");
  });

  it("does not let an owner forge a row owned by someone else", async () => {
    // Requirement: WITH CHECK. Without it an owner could insert rows attributed
    // to another account - writing into someone else's Journey.
    const outcome = await attempt(() =>
      asUser(UID_B, (tx) =>
        tx`insert into trees (owner_id, name) values (${UID_A}, 'forged')`,
      ),
    );
    expect(outcome).toBe("rejected");
  });
});

maybe()("owner isolation · moments and photos · plan §16 step 2", () => {
  it("scopes moments through the tree the moment belongs to", async () => {
    const mine = await asUser(UID_A, (tx) =>
      tx`select count(*)::int as n from moments`,
    );
    const theirs = await asUser(UID_B, (tx) =>
      tx`select count(*)::int as n from moments`,
    );
    expect(mine[0].n).toBe(1);
    expect(theirs[0].n).toBe(0);
  });

  it("scopes photos by tree_id, so a photo with no moment is still owned", async () => {
    // Requirement: M1 made moment_id nullable (capture first, structure
    // progressively). If ownership still flowed through the moment join, an
    // unattributed photo would belong to nobody - and be visible to everybody.
    await sql`insert into photos (tree_id, moment_id, storage_key) values (${treeA}, null, 'k/orphan.webp')`;
    const mine = await asUser(UID_A, (tx) =>
      tx`select count(*)::int as n from photos where moment_id is null`,
    );
    const theirs = await asUser(UID_B, (tx) =>
      tx`select count(*)::int as n from photos where moment_id is null`,
    );
    expect(mine[0].n).toBe(1);
    expect(theirs[0].n).toBe(0);
  });

  it("does not let one owner attach a photo to another's tree", async () => {
    const outcome = await attempt(() =>
      asUser(UID_B, (tx) =>
        tx`insert into photos (tree_id, storage_key) values (${treeA}, 'k/intrusion.webp')`,
      ),
    );
    expect(outcome).toBe("rejected");
    expect(photoA).not.toBe("");
  });
});

maybe()("the public path · anon sees nothing private", () => {
  it.each(["trees", "moments", "photos", "users", "consent_events"])(
    "returns zero rows from %s for an unauthenticated visitor",
    async (table) => {
      // Requirement: private by default, and no anon policy exists on these
      // tables. A non-zero count here is a data breach, not a bug.
      const rows = await asAnon((tx) =>
        tx`select count(*)::int as n from ${sql(table)}`,
      );
      expect(rows[0].n).toBe(0);
    },
  );
});

maybe()("Knowledge public reads · gate PUB-1 · plan §16 step 3", () => {
  /**
   * The highest-consequence gate in the product. Unreviewed AI-generated
   * horticultural guidance reaching a public page is not a cosmetic bug: it is
   * advice that can kill someone's tree, published under our name.
   *
   * These tests were MISSING when steps 1-5 were first reported complete. The
   * private tables were covered; the one table anon is actually allowed to read
   * was not. No leak existed - but nothing proved that.
   */
  const STATES: Array<[string, string]> = [
    ["legacy_raw", "INTERNAL_DRAFT_UNVERIFIED"],
    ["ai_draft", "INTERNAL_DRAFT_UNVERIFIED"],
    ["normalized", "INTERNAL_DRAFT_UNVERIFIED"],
    ["review_required", "INTERNAL_DRAFT_UNVERIFIED"],
    ["practitioner_reviewed", "INTERNAL_DRAFT_UNVERIFIED"],
    ["withdrawn", "UNAVAILABLE"],
    ["published", "PUBLIC_APPROVED"],
  ];

  beforeAll(async () => {
    if (!reachable) return;
    await sql`delete from field_sources where record_id in (select id::text from species where slug like 'pub1-%')`;
    await sql`delete from species where slug like 'pub1-%'`;
    /**
     * The `published` fixture is created THE LEGITIMATE WAY - draft, then
     * sources, then reviewer, then publish - because gate PROV-1 now makes
     * that the only way a published row can exist.
     *
     * This fixture originally inserted `status = 'published'` directly. Adding
     * the PROV-1 trigger made that insert fail, which took the whole PUB-1
     * block down as 12 skipped tests rather than as a visible failure. The
     * trigger was right and the fixture was wrong: a test that creates a state
     * production cannot produce is testing something that cannot happen.
     */
    const REVIEWER = "33333333-3333-4333-8333-333333333333";
    for (const [status] of STATES) {
      const slug = `pub1-${status}`;
      if (status === "published") {
        await sql`insert into species (slug, accepted_name, status)
                  values (${slug}, ${`Probe ${status}`}, 'ai_draft')`;
        await sql`insert into field_sources (record_type, record_id, field, value, source_url)
                  select 'species', id::text, 'accepted_name', '"probe"'::jsonb, 'https://example.test/s'
                  from species where slug = ${slug}`;
        await sql`update species set status='published', reviewed_by=${REVIEWER}, reviewed_at=now()
                  where slug = ${slug}`;
      } else {
        await sql`insert into species (slug, accepted_name, status)
                  values (${slug}, ${`Probe ${status}`}, ${status}::content_status)`;
      }
    }
  });

  it.each(STATES.filter(([, state]) => state !== "PUBLIC_APPROVED"))(
    "hides status=%s from anon, because it derives %s",
    async (status) => {
      const rows = await asAnon(
        (tx) => tx`select slug from species where slug = ${`pub1-${status}`}`,
      );
      expect(rows).toHaveLength(0);
    },
  );

  it("shows anon only the explicitly published record", async () => {
    const rows = await asAnon(
      (tx) => tx`select slug from species where slug like 'pub1-%'`,
    );
    expect(rows.map((r) => r.slug)).toEqual(["pub1-published"]);
  });

  it("hides practitioner_reviewed, which is reviewed but NOT published", async () => {
    // Requirement: review and publication are separate acts. Treating review as
    // publication is the exact failure the three-state model exists to prevent,
    // and it is the plausible mistake - the content IS reviewed.
    const rows = await asAnon(
      (tx) =>
        tx`select slug from species where slug = 'pub1-practitioner_reviewed'`,
    );
    expect(rows).toHaveLength(0);
  });

  it("hides unpublished records from a signed-in user too", async () => {
    // Requirement: the gate is on publication state, not on authentication.
    // Being logged in is not a review credential.
    const rows = await asUser(
      UID_A,
      (tx) => tx`select slug from species where slug like 'pub1-%'`,
    );
    expect(rows.map((r) => r.slug)).toEqual(["pub1-published"]);
  });

  it("cannot be bypassed by selecting the status column directly", async () => {
    // Requirement: the policy filters ROWS, so no projection reveals a hidden
    // row. A test that only counted rows would miss a policy written as a
    // column-level grant.
    const rows = await asAnon(
      (tx) =>
        tx`select status, publication_state from species where slug like 'pub1-%'`,
    );
    expect(rows).toHaveLength(1);
    expect(rows[0].publication_state).toBe("PUBLIC_APPROVED");
  });

  it("stops an anon visitor writing Knowledge at all", async () => {
    // Requirement: AI never authorizes publication, and neither does the
    // public. There is no INSERT policy for anon on these tables.
    const outcome = await attempt(() =>
      asAnon(
        (tx) =>
          tx`insert into species (slug, accepted_name, status) values ('pub1-forged','Forged','published')`,
      ),
    );
    expect(outcome).toBe("rejected");
  });

  it("stops a signed-in non-admin publishing Knowledge", async () => {
    // Requirement: publication is an admin act gated on real review. An
    // ordinary account must not be able to flip status to published.
    const outcome = await attempt(() =>
      asUser(
        UID_A,
        (tx) =>
          tx`update species set status = 'published' where slug = 'pub1-ai_draft'`,
      ),
    );
    const [row] =
      await sql`select status from species where slug = 'pub1-ai_draft'`;
    expect(row.status).toBe("ai_draft");
    expect(outcome).toBeDefined();
  });
});

maybe()("publication provenance · gate PROV-1 · ruling OI-49", () => {
  /**
   * "A published Knowledge field without provenance is a BUG, not a cosmetic
   * gap", and "reviewed_at must never be refreshed without an actual review
   * event." Until the trigger landed, both lived in prose while the registry
   * row claimed coverage.
   *
   * Re-stamping a review date is one UPDATE away during a bulk edit, and it
   * would silently convert unreviewed AI-generated horticultural advice into
   * apparently-current reviewed guidance. That is the highest-consequence
   * failure available in this product, which is why it is enforced in the
   * database rather than in an admin UI.
   */
  const REVIEWER = "33333333-3333-4333-8333-333333333333";

  beforeEach(async () => {
    if (!reachable) return;
    await sql`delete from field_sources where record_id in (select id::text from species where slug like 'prov1-%')`;
    await sql`delete from species where slug like 'prov1-%'`;
  });

  it("refuses to publish without a reviewer", async () => {
    const outcome = await attempt(
      () =>
        sql`insert into species (slug, accepted_name, status) values ('prov1-a','A','published')`,
    );
    expect(outcome).toBe("rejected");
  });

  it("refuses to publish with a reviewer but no provenance", async () => {
    // Requirement: a reviewer's name is not provenance. Sources are.
    const outcome = await attempt(
      () =>
        sql`insert into species (slug, accepted_name, status, reviewed_by, reviewed_at)
            values ('prov1-b','B','published',${REVIEWER}, now())`,
    );
    expect(outcome).toBe("rejected");
  });

  it("refuses a post-dated review even on an internal draft", async () => {
    // Requirement: a future reviewed_at is never legitimate, published or not.
    // Allowing it on drafts would leave the forward-dated row waiting to look
    // fresh the moment somebody publishes it.
    const outcome = await attempt(
      () =>
        sql`insert into species (slug, accepted_name, status, reviewed_by, reviewed_at)
            values ('prov1-c','C','ai_draft',${REVIEWER}, now() + interval '1 day')`,
    );
    expect(outcome).toBe("rejected");
  });

  it("allows the legitimate path: sources, then reviewer, then publish", async () => {
    await sql`insert into species (slug, accepted_name, status) values ('prov1-ok','OK','ai_draft')`;
    await sql`insert into field_sources (record_type, record_id, field, value, source_url)
              select 'species', id::text, 'accepted_name', '"OK"'::jsonb, 'https://example.test/s'
              from species where slug = 'prov1-ok'`;
    await sql`update species set status='published', reviewed_by=${REVIEWER}, reviewed_at=now()
              where slug='prov1-ok'`;
    const [row] =
      await sql`select status, publication_state from species where slug='prov1-ok'`;
    expect(row.status).toBe("published");
    expect(row.publication_state).toBe("PUBLIC_APPROVED");
  });

  it("refuses to re-stamp reviewed_at forward on a published row", async () => {
    await sql`insert into species (slug, accepted_name, status) values ('prov1-fresh','F','ai_draft')`;
    await sql`insert into field_sources (record_type, record_id, field, value, source_url)
              select 'species', id::text, 'accepted_name', '"F"'::jsonb, 'https://example.test/s'
              from species where slug = 'prov1-fresh'`;
    await sql`update species set status='published', reviewed_by=${REVIEWER}, reviewed_at=now()
              where slug='prov1-fresh'`;
    const outcome = await attempt(
      () =>
        sql`update species set reviewed_at = now() + interval '30 days' where slug='prov1-fresh'`,
    );
    expect(outcome).toBe("rejected");
  });

  it("refuses further writes to a published row whose provenance was deleted", async () => {
    // Requirement: provenance is a standing condition of being published, not
    // a one-time check at publication.
    await sql`insert into species (slug, accepted_name, status) values ('prov1-gone','G','ai_draft')`;
    await sql`insert into field_sources (record_type, record_id, field, value, source_url)
              select 'species', id::text, 'accepted_name', '"G"'::jsonb, 'https://example.test/s'
              from species where slug = 'prov1-gone'`;
    await sql`update species set status='published', reviewed_by=${REVIEWER}, reviewed_at=now()
              where slug='prov1-gone'`;
    await sql`delete from field_sources where record_id in (select id::text from species where slug='prov1-gone')`;
    const outcome = await attempt(
      () => sql`update species set accepted_name='edited' where slug='prov1-gone'`,
    );
    expect(outcome).toBe("rejected");
  });
});

maybe()("admin surfaces · plan §16 step 4", () => {
  /**
   * Every assertion here seeds a row FIRST, via the privileged connection.
   *
   * That is not ceremony. The first version of these tests asserted
   * `count(*) = 0` against empty tables, so they passed identically whether RLS
   * was enforced or disabled entirely - a green test proving nothing. A
   * zero-count assertion is only meaningful when a row exists to be hidden.
   *
   * These five tables have RLS enabled and ZERO policies, which is
   * deny-by-default and exactly what step 4 requires: no anon policy at all,
   * authenticated denied, privileged and is_admin only.
   */
  const ADMIN_TABLES = [
    "species_research_jobs",
    "field_sources",
    "content_versions",
    "events",
    "keepalive",
  ];

  beforeAll(async () => {
    if (!reachable) return;
    await sql`insert into field_sources (record_type, record_id, field, value)
              values ('species', 'rls-probe', 'accepted_name', '"probe"'::jsonb)`;
    await sql`insert into content_versions (record_type, record_id, version, actor)
              values ('species', 'rls-probe', 1, 'rls-probe')`;
    await sql`insert into species_research_jobs (requested_name, trigger)
              values ('rls-probe', 'founder')`;
    await sql`insert into events (name) values ('rls_probe_event')`;
    await sql`insert into keepalive (id) values (99) on conflict (id) do nothing`;
  });

  it("seeded a row in every table under test, so the assertions are not vacuous", async () => {
    // Requirement: a zero-count test against an empty table is indistinguishable
    // from a zero-count test against a broken policy. This guard makes the
    // difference visible.
    for (const table of ADMIN_TABLES) {
      const [row] = await sql`select count(*)::int as n from ${sql(table)}`;
      expect(row.n, `${table} must hold at least one row`).toBeGreaterThan(0);
    }
  });

  it.each(ADMIN_TABLES)(
    "hides %s from anon entirely, with a row present to hide",
    async (table) => {
      // Requirement: plan §16 step 4 - "No anon policy at all; authenticated
      // denied; privileged + is_admin only." Internal tooling tables must not
      // be readable by the public layer under any condition.
      const rows = await asAnon(
        (tx) => tx`select count(*)::int as n from ${sql(table)}`,
      );
      expect(rows[0].n).toBe(0);
    },
  );

  it.each(ADMIN_TABLES)(
    "denies an ordinary authenticated user access to %s",
    async (table) => {
      // Requirement: authentication is not authorisation. A signed-in
      // participant is not an operator.
      const rows = await asUser(
        UID_A,
        (tx) => tx`select count(*)::int as n from ${sql(table)}`,
      );
      expect(rows[0].n).toBe(0);
    },
  );
});

maybe()("consent ledger · gate LEDG-1 · plan §16 step 5", () => {
  it("lets a subject insert and read their own consent record", async () => {
    await asUser(UID_A, (tx) =>
      tx`insert into consent_events (user_id, document_id, document_version, locale, document_hash, terms_ack, research_consent)
         values (${UID_A}, 'CONTENT-CONSENT', '0.3', 'en', 'sha256:probe', true, false)`,
    );
    const rows = await asUser(UID_A, (tx) =>
      tx`select document_version from consent_events`,
    );
    expect(rows).toHaveLength(1);
    expect(rows[0].document_version).toBe("0.3");
  });

  it("hides one subject's consent history from another", async () => {
    const rows = await asUser(UID_B, (tx) =>
      tx`select count(*)::int as n from consent_events`,
    );
    expect(rows[0].n).toBe(0);
  });

  it("cannot be rewritten, because no UPDATE policy exists for any role", async () => {
    // Requirement: LEDG-1. Append-only is a property of the policy set. If this
    // ever succeeds, consent history became rewritable by a bug.
    await attempt(() =>
      asUser(UID_A, (tx) =>
        tx`update consent_events set research_consent = true where user_id = ${UID_A}`,
      ),
    );
    const [row] =
      await sql`select research_consent from consent_events where user_id = ${UID_A}`;
    expect(row.research_consent).toBe(false);
  });

  it("cannot be erased, because no DELETE policy exists for any role", async () => {
    await attempt(() =>
      asUser(UID_A, (tx) =>
        tx`delete from consent_events where user_id = ${UID_A}`,
      ),
    );
    const [row] =
      await sql`select count(*)::int as n from consent_events where user_id = ${UID_A}`;
    expect(row.n).toBe(1);
  });
});
