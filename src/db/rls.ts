import "server-only";
import { sql } from "drizzle-orm";
import { db } from "./index";

/**
 * The three separated data paths (plan §16, "RLS-first").
 *
 * WHY THIS FILE EXISTS, and it is not a style preference.
 *
 * `DATABASE_URL` connects as the `postgres` role, and in Supabase that role
 * carries `rolbypassrls = true` (verified against the running database, not
 * assumed). So every `enableRLS()` policy in schema.ts is INERT on that
 * connection: the owner bypasses row-level security. Schema v1 was honest about
 * this - its header said "ownership is enforced in the data-access layer, RLS
 * policies exist as defence in depth".
 *
 * v2 inverts it. RLS becomes THE enforcement layer, which means a query has to
 * arrive at Postgres wearing a role that RLS actually applies to. That is what
 * these helpers do: open a transaction, drop from the bypassing role to
 * `authenticated` or `anon` for the duration, and publish the JWT claims that
 * `auth.uid()` reads.
 *
 *   withOwnerDb   authenticated + auth.uid() = the caller  -> owner policies
 *   withAnonDb    anon, no claims                          -> public policies only
 *   db            privileged, BYPASSES RLS                 -> see the rule below
 *
 * THE RULE: `db` is reachable only from migration, seed, cron and `is_admin`
 * admin modules. A feature query that only works with `db` is a bug, not a
 * shortcut - it means the policy is missing or wrong. CI enforces this with a
 * grep rather than trusting convention (plan §16).
 *
 * `set local` and `set_config(..., true)` are both transaction-scoped, so the
 * role and the claims are released when the transaction ends. That matters on a
 * pooled connection: leaking `role authenticated` onto a connection that later
 * serves a migration would break the privileged path, and leaking claims would
 * hand one user's identity to the next request on that connection.
 */

/** Postgres reads this shape; `auth.uid()` resolves `sub` out of it. */
type JwtClaims = {
  sub: string;
  role: "authenticated";
  /** Present so policies that check it behave as they will in production. */
  aud?: string;
};

/**
 * Run `fn` as the given user, with RLS enforced.
 *
 * Every owner read and write goes through here. The callback receives a
 * transaction, not the root client, so a caller cannot accidentally escape the
 * role by reaching for `db` inside it.
 */
export async function withOwnerDb<T>(
  userId: string,
  fn: (tx: Parameters<Parameters<typeof db.transaction>[0]>[0]) => Promise<T>,
): Promise<T> {
  const claims: JwtClaims = {
    sub: userId,
    role: "authenticated",
    aud: "authenticated",
  };
  return db.transaction(async (tx) => {
    // Claims first, then the role: once the role is dropped to `authenticated`
    // the session may no longer have the privilege to set these.
    //
    // Both set_config calls share one statement deliberately. Each extra
    // statement is a round-trip, and this cost is paid by EVERY authenticated
    // query. Measured against the privileged path: three round-trips cost
    // +0.96 ms, two cost ~+0.65 ms. Cheap to do, pointless to skip.
    await tx.execute(
      sql`select
            set_config('request.jwt.claims', ${JSON.stringify(claims)}, true),
            set_config('request.jwt.claim.sub', ${userId}, true)`,
    );
    await tx.execute(sql`set local role authenticated`);
    return fn(tx);
  });
}

/**
 * Run `fn` as an unauthenticated visitor, with RLS enforced.
 *
 * This is the path every public page read must use. `auth.uid()` is null here,
 * so an owner policy cannot match and a missing public policy shows up as an
 * empty result rather than as leaked rows.
 */
export async function withAnonDb<T>(
  fn: (tx: Parameters<Parameters<typeof db.transaction>[0]>[0]) => Promise<T>,
): Promise<T> {
  return db.transaction(async (tx) => {
    // Explicitly clear claims: on a pooled connection the previous transaction
    // in this session may have set them, and an anon read must never inherit
    // someone's identity.
    await tx.execute(
      sql`select
            set_config('request.jwt.claims', '', true),
            set_config('request.jwt.claim.sub', '', true)`,
    );
    await tx.execute(sql`set local role anon`);
    return fn(tx);
  });
}

/**
 * Assert that the current connection is the one we think it is.
 *
 * Used by the RLS integration tests. Exported because a test that trusts its
 * own setup proves nothing: if `set local role` silently failed, every
 * isolation test would pass while enforcing nothing.
 */
export async function currentDbRole(
  tx: Parameters<Parameters<typeof db.transaction>[0]>[0],
): Promise<{ role: string; uid: string | null; bypassesRls: boolean }> {
  const rows = (await tx.execute(sql`
    select
      current_user as role,
      auth.uid()::text as uid,
      coalesce((select rolbypassrls from pg_roles where rolname = current_user), false) as bypasses_rls
  `)) as unknown as Array<{
    role: string;
    uid: string | null;
    bypasses_rls: boolean;
  }>;
  const row = rows[0];
  return { role: row.role, uid: row.uid, bypassesRls: row.bypasses_rls };
}
