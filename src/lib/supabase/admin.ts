import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";

/** Service client. Bypasses RLS: use only after the caller has been verified. */
export function createAdminClient() {
  const e = env();
  return createSupabaseClient(e.NEXT_PUBLIC_SUPABASE_URL, e.SUPABASE_SECRET_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export const PHOTOS_BUCKET = "photos";
