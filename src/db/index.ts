import "server-only";
/**
 * THE PRIVILEGED CONNECTION. Connects as `postgres`, which carries
 * rolbypassrls - so RLS policies do NOT apply here.
 *
 * Reachable only from migration, seed, cron and admin modules. For anything
 * user-facing use withOwnerDb / withAnonDb from ./rls. The boundary is enforced
 * by scripts/check-service-role.mjs, not by convention.
 */
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/lib/env";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  __bonsaiSql?: ReturnType<typeof postgres>;
};

// Supabase's pooler runs in transaction mode: prepared statements are off.
const client =
  globalForDb.__bonsaiSql ??
  postgres(env().DATABASE_URL, { prepare: false, max: 5 });

if (process.env.NODE_ENV !== "production") globalForDb.__bonsaiSql = client;

export const db = drizzle(client, { schema });
export { schema };
