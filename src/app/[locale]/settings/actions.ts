"use server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { events, users } from "@/db/schema";
import { redirect } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getSessionId, requireUser } from "@/lib/auth/dal";
import { track } from "@/lib/events";
import { createAdminClient, PHOTOS_BUCKET } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

function localeOf(formData: FormData): "de" | "en" {
  const v = formData.get("locale");
  return routing.locales.includes(v as never) ? (v as "de" | "en") : "de";
}

export async function updateLocale(formData: FormData) {
  const locale = localeOf(formData);
  const target = localeOf(new Map([["locale", formData.get("newLocale")]]) as unknown as FormData);
  const { profile } = await requireUser(locale);
  await db.update(users).set({ locale: target }).where(eq(users.id, profile.id));
  redirect({ href: "/settings?saved=1", locale: target });
}

/** Withdrawal: stop new events and pseudonymise the existing ones at once. */
export async function setResearchConsent(formData: FormData) {
  const locale = localeOf(formData);
  const grant = formData.get("grant") === "1";
  const { profile } = await requireUser(locale);
  if (grant) {
    await db
      .update(users)
      .set({ researchConsent: true, researchConsentWithdrawnAt: null, consentAt: new Date() })
      .where(eq(users.id, profile.id));
  } else {
    await db
      .update(users)
      .set({ researchConsent: false, researchConsentWithdrawnAt: new Date() })
      .where(eq(users.id, profile.id));
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
