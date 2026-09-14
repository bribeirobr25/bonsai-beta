"use server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { withOwnerDb } from "@/db/rls";
import { events, users } from "@/db/schema";
import { redirect } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getSessionId, requireUser } from "@/lib/auth/dal";
import { track } from "@/lib/events";
import { createAdminClient, PHOTOS_BUCKET } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

function asLocale(value: FormDataEntryValue | null): "de" | "en" {
  return routing.locales.includes(value as never) ? (value as "de" | "en") : "de";
}
const localeOf = (formData: FormData) => asLocale(formData.get("locale"));

export async function updateLocale(formData: FormData) {
  const locale = localeOf(formData);
  const target = asLocale(formData.get("newLocale"));
  const { profile } = await requireUser(locale);
  // Owner path: `users_update_own` is what permits this, not the where clause.
  await withOwnerDb(profile.id, (tx) =>
    tx.update(users).set({ locale: target }).where(eq(users.id, profile.id)),
  );
  redirect({ href: "/settings?saved=1", locale: target });
}

/** Withdrawal: stop new events and pseudonymise the existing ones at once. */
export async function setResearchConsent(formData: FormData) {
  const locale = localeOf(formData);
  const grant = formData.get("grant") === "1";
  const { profile } = await requireUser(locale);
  if (grant) {
    await withOwnerDb(profile.id, (tx) =>
      tx
        .update(users)
        .set({
          researchConsent: true,
          researchConsentWithdrawnAt: null,
          consentAt: new Date(),
        })
        .where(eq(users.id, profile.id)),
    );
  } else {
    await withOwnerDb(profile.id, (tx) =>
      tx
        .update(users)
        .set({ researchConsent: false, researchConsentWithdrawnAt: new Date() })
        .where(eq(users.id, profile.id)),
    );
    // PRIVILEGED, deliberately. `events` has RLS enabled and no policies, so
    // there is no owner path to it by design - telemetry is written by the
    // server, never by the account. Detaching user_id on withdrawal is a
    // data-protection obligation the subject cannot perform themselves. See the
    // service-role exception note in src/db/rls.ts.
    await db.update(events).set({ userId: null }).where(eq(events.userId, profile.id));
  }
  redirect({ href: "/settings?saved=1", locale });
}

async function removeAllPhotos(userId: string) {
  const admin = createAdminClient();
  const storage = admin.storage.from(PHOTOS_BUCKET);
  const files: string[] = [];
  const walk = async (prefix: string) => {
    const { data } = await storage.list(prefix, { limit: 1000 });
    for (const item of data ?? []) {
      const path = prefix ? `${prefix}/${item.name}` : item.name;
      if (item.id) files.push(path);
      else await walk(path);
    }
  };
  await walk(userId);
  if (files.length) await storage.remove(files);
  return files.length;
}

/** Hard delete, immediate: storage objects, then the auth user (cascades every row). */
export async function deleteAccount(formData: FormData) {
  const locale = localeOf(formData);
  const { profile } = await requireUser(locale);
  const word = locale === "de" ? "LÖSCHEN" : "DELETE";
  if ((formData.get("confirm") as string | null)?.trim() !== word) {
    redirect({ href: "/settings?error=confirm", locale });
    return;
  }
  await track({ name: "account_deleted", user: profile, locale, sessionId: await getSessionId() });
  await removeAllPhotos(profile.id);
  await db.update(events).set({ userId: null }).where(eq(events.userId, profile.id));
  const admin = createAdminClient();
  const { error } = await admin.auth.admin.deleteUser(profile.id);
  if (error) throw new Error(`deleteUser failed: ${error.message}`);
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect({ href: "/?deleted=1", locale });
}
