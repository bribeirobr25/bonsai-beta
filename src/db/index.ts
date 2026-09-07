import "server-only";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/lib/env";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  __barBonsaiSql?: ReturnType<typeof postgres>;
};

// Supabase's pooler runs in transaction mode: prepared statements are off.
const client =
  globalForDb.__barBonsaiSql ??
  postgres(env().DATABASE_URL, { prepare: false, max: 5 });

if (process.env.NODE_ENV !== "production") globalForDb.__barBonsaiSql = client;

export const db = drizzle(client, { schema });
export { schema };
