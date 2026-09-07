"use server";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/db";
import { users } from "@/db/schema";
import { redirect } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getAuthUser, getSessionId } from "@/lib/auth/dal";
import { CONSENT_VERSION } from "@/lib/env";
import { track } from "@/lib/events";

const input = z.object({
  locale: z.enum(routing.locales),
  terms: z.literal("on"),
  research: z.enum(["on"]).optional(),
  src: z.string().trim().max(64).optional().or(z.literal("")),
});

export async function submitConsent(formData: FormData) {
  const locale = routing.locales.includes(formData.get("locale") as never)
    ? (formData.get("locale") as "de" | "en")
    : "de";
  const auth = await getAuthUser();
  if (!auth) {
    redirect({ href: "/sign-in", locale });
    return;
  }
  const parsed = input.safeParse({
    locale,
    terms: formData.get("terms") ?? undefined,
    research: formData.get("research") ?? undefined,
    src: formData.get("src") ?? "",
  });
  if (!parsed.success) {
    redirect({ href: "/consent?error=required", locale });
    return;
  }
  const researchConsent = parsed.data.research === "on";
  const source = parsed.data.src || null;
  const cohort = source === "workshop" ? "workshop" : "direct";
  const now = new Date();

  const existing = await db.query.users.findFirst({ where: eq(users.id, auth.id) });
  if (existing) {
    await db
      .update(users)
      .set({
        consentVersion: CONSENT_VERSION,
        consentAt: now,
        termsAck: true,
        researchConsent,
        researchConsentWithdrawnAt: researchConsent ? null : existing.researchConsentWithdrawnAt,
        locale,
      })
      .where(eq(users.id, auth.id));
  } else {
    await db.insert(users).values({
      id: auth.id,
      email: auth.email ?? "",
      locale,
      consentVersion: CONSENT_VERSION,
      consentAt: now,
      termsAck: true,
      researchConsent,
      cohort,
      source,
    });
  }
  const profile = (await db.query.users.findFirst({ where: eq(users.id, auth.id) }))!;
  await track({
    name: "signup_completed",
    user: profile,
    locale,
    sessionId: await getSessionId(),
    props: { consent_version: CONSENT_VERSION, re_consent: Boolean(existing) },
  });
  redirect({ href: "/my-tree", locale });
}
