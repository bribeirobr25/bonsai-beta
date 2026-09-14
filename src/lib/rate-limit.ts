import "server-only";
import { createHash } from "node:crypto";
import { sql } from "drizzle-orm";
import { headers } from "next/headers";
import { db } from "@/db";
import { type Tier, TIERS } from "./rate-limit-tiers";

/**
 * Fixed-window rate limiting · plan §24.2.
 *
 * PRIVILEGED CONNECTION, and this one is unavoidable rather than convenient:
 * the most important thing to limit is magic-link sending, which happens while
 * the caller is ANONYMOUS. There is no owner path for a request with no
 * identity, so `rate_limits` has RLS enabled with zero policies and is written
 * only from here. Declared in scripts/check-service-role.mjs.
 *
 * Fixed window, not a sliding window or token bucket. A fixed window allows a
 * burst at a boundary - twice the limit across two adjacent windows - and that
 * is an acceptable trade for one atomic SQL statement with no background state.
 * The threat being addressed is somebody hammering an endpoint or bombing a
 * stranger's inbox, not a precisely paced adversary.
 */


/**
 * Bucket keys are hashed, so the table holds no email address and no IP.
 *
 * The table's only job is counting. Storing the identifier in the clear would
 * put personal data in a place nobody would think to audit, and the privacy
 * notice commits to keeping IP-bearing records for at most 14 days. A hash
 * counts just as well.
 *
 * No secret is mixed in on purpose: this is not a pseudonym that has to resist
 * correlation across a dataset, it is a lookup key with a short life, and
 * involving EVENTS_PEPPER here would entangle two unrelated lifecycles.
 */
function bucketKey(tier: Tier, identifier: string): string {
  return createHash("sha256")
    .update(`${tier}:${identifier.toLowerCase()}`, "utf8")
    .digest("hex");
}

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  /** Seconds until the current window resets. */
  resetInSeconds: number;
};

/**
 * Count one hit against a tier and say whether it is allowed.
 *
 * One statement, atomic. The CASE expressions reset the window in place when it
 * has expired, so there is no read-then-write race between two concurrent
 * requests - which is exactly the situation a rate limiter is under.
 *
 * FAILS OPEN. If the database is unreachable the request is allowed, and that
 * is the considered choice: this limiter protects against abuse, and letting a
 * database blip lock every user out of signing in would turn a availability
 * problem into a total outage. Anything where failing open is unacceptable
 * must not rely on this function.
 */
export async function rateLimit(
  tier: Tier,
  identifier: string,
): Promise<RateLimitResult> {
  const { limit, windowSeconds } = TIERS[tier];
  const key = bucketKey(tier, identifier);
  try {
    const rows = (await db.execute(sql`
      insert into rate_limits (bucket, window_started_at, hits)
        values (${key}, now(), 1)
      on conflict (bucket) do update set
        hits = case
          when rate_limits.window_started_at < now() - make_interval(secs => ${windowSeconds})
          then 1 else rate_limits.hits + 1 end,
        window_started_at = case
          when rate_limits.window_started_at < now() - make_interval(secs => ${windowSeconds})
          then now() else rate_limits.window_started_at end
      returning hits,
        greatest(0, ceil(extract(epoch from (
          window_started_at + make_interval(secs => ${windowSeconds}) - now()
        ))))::int as reset_in
    `)) as unknown as Array<{ hits: number; reset_in: number }>;
    const row = rows[0];
    const hits = Number(row?.hits ?? 1);
    return {
      allowed: hits <= limit,
      remaining: Math.max(0, limit - hits),
      resetInSeconds: Number(row?.reset_in ?? windowSeconds),
    };
  } catch (error) {
    console.error("[rate-limit] check failed, allowing request", error);
    return { allowed: true, remaining: limit, resetInSeconds: 0 };
  }
}

/**
 * Best-effort client IP from the proxy headers.
 *
 * Returns a sentinel rather than throwing when no header is present, so a
 * missing header degrades to "everyone shares one bucket" instead of to no
 * limit at all. The value is hashed before storage either way.
 *
 * `x-forwarded-for` is only trustworthy behind a proxy that sets it - which
 * Vercel does, and which is the only deployment target. Taking the FIRST entry
 * is correct there; on a self-hosted setup without a trusted proxy this would
 * be client-controlled and the per-IP tier would be worth nothing.
 */
export async function clientIp(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return h.get("x-real-ip")?.trim() || "unknown";
}

/** Remove buckets whose window ended long ago. Called by the daily cron. */
export async function purgeExpiredRateLimits(): Promise<number> {
  const longest = Math.max(...Object.values(TIERS).map((t) => t.windowSeconds));
  const rows = (await db.execute(sql`
    delete from rate_limits
    where window_started_at < now() - make_interval(secs => ${longest * 2})
    returning 1
  `)) as unknown as unknown[];
  return rows.length;
}

export { TIERS, type Tier };
