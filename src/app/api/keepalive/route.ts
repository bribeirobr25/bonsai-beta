import { NextResponse, type NextRequest } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { keepalive } from "@/db/schema";
import { env } from "@/lib/env";
import { purgeExpiredRateLimits } from "@/lib/rate-limit";
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
  /**
   * Piggybacked on the existing daily cron rather than added as a second
   * scheduled job. rate_limits rows are self-expiring by overwrite, so this
   * only removes buckets nobody has touched since - without it the table grows
   * by one row per distinct email and IP, forever. Gate JOB-1 requires every
   * scheduled job be catalogued in one place; adding work to the one job that
   * already exists keeps that catalogue honest and short.
   */
  let purged = -1;
  try {
    purged = await purgeExpiredRateLimits();
  } catch (e) {
    console.error("[cron] rate-limit purge failed", e);
  }
  return NextResponse.json({
    ok: !error,
    at: now.toISOString(),
    api: error ? error.message : "ok",
    rateLimitBucketsPurged: purged,
  });
}
