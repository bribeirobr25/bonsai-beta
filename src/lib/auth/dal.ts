import "server-only";
import { eq } from "drizzle-orm";
import { cache } from "react";
import { db } from "@/db";
import { users } from "@/db/schema";
import type { AppLocale } from "@/i18n/routing";
import { redirect } from "@/i18n/navigation";
import { CONSENT_VERSION } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";

/** Verified auth user (server round-trip), memoised per request. */
export const getAuthUser = cache(async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return data.user ?? null;
});

/** Session id claim of the current access token, used as `events.session_id`. */
export const getSessionId = cache(async (): Promise<string | null> => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) return null;
  try {
    const payload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64url").toString("utf8"),
    ) as { session_id?: string };
    return payload.session_id ?? null;
  } catch {
    return null;
  }
});

export const getCurrentUser = cache(async () => {
  const auth = await getAuthUser();
  if (!auth) return null;
  const profile =
    (await db.query.users.findFirst({ where: eq(users.id, auth.id) })) ?? null;
  return { auth, profile };
});

/** Redirects to sign-in without a session, to consent without a current consent record. */
export async function requireUser(locale: AppLocale, next?: string) {
  const current = await getCurrentUser();
  if (!current) {
    redirect({
      href: next ? `/sign-in?next=${encodeURIComponent(next)}` : "/sign-in",
      locale,
    });
  }
  const { auth, profile } = current!;
  if (!profile || profile.consentVersion !== CONSENT_VERSION) {
    redirect({ href: "/consent", locale });
  }
  return { auth, profile: profile! };
}

export function safeNextPath(value: string | null | undefined, fallback: string) {
  if (!value) return fallback;
  if (!value.startsWith("/") || value.startsWith("//") || value.includes("://"))
    return fallback;
  return value;
}
