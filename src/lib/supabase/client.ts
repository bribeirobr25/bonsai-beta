"use client";
/**
 * UNUSED TODAY, and deliberately retained. Flagged by the pre-merge audit as
 * having zero importers.
 *
 * The browser-side client is needed in Phase 4, when uploads talk to Supabase
 * Storage from the client. Its existence is also load-bearing for a decision
 * already made: `connect-src` in src/lib/security-headers.ts derives the
 * Supabase origin from the environment precisely so this client works in local
 * development as well as production. Deleting the file would not remove that
 * requirement, only the reminder of it.
 *
 * If Phase 4 ships without needing it, delete it then.
 */
import { createBrowserClient } from "@supabase/ssr";

/** Browser client. Phase 0 does not use it; kept for Phase 1 uploads. */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}
