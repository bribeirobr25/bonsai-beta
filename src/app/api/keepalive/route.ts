import { NextResponse, type NextRequest } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { keepalive } from "@/db/schema";
import { env } from "@/lib/env";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * Daily Vercel cron (vercel.json). Touches the database through both the
 * direct connection and the Supabase API so the free project never counts as
 * idle for seven days.
 */
export async function GET(request: NextRequest) {
  const secret = env().CRON_SECRET;
  const authorised = secret
    ? request.headers.get("authorization") === `Bearer ${secret}`
    : process.env.NODE_ENV === "development";
  if (!authorised) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const now = new Date();
  await db
    .insert(keepalive)
    .values({ id: 1, lastPing: now })
    .onConflictDoUpdate({ target: keepalive.id, set: { lastPing: sql`excluded.last_ping` } });
  const { error } = await createAdminClient().from("keepalive").select("id").limit(1);
  return NextResponse.json({ ok: !error, at: now.toISOString(), api: error ? error.message : "ok" });
}
