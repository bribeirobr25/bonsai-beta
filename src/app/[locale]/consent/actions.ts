"use server";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { withOwnerDb } from "@/db/rls";
import { consentEvents, users } from "@/db/schema";
import { redirect } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getAuthUser, getSessionId } from "@/lib/auth/dal";
import { CONSENT_VERSION } from "@/lib/env";
import { track } from "@/lib/events";
import { sanitizeSource } from "@/lib/source";

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
  const source = sanitizeSource(parsed.data.src);
  const cohort = source === "workshop" ? "workshop" : "direct";
  const now = new Date();

  /**
   * Hash the notice text AS RENDERED to this subject, in this locale.
   *
   * A version string alone cannot prove wording. Art. 7(1) requires being able
   * to demonstrate what a person consented to, and the source file can be
   * edited, moved or - as happened here - deleted from the active tree. The
   * hash makes the record self-contained.
   */
  const noticeHash = await hashNotice(locale);

  /**
   * Whole consent transaction on the OWNER path, including the first-time
   * insert. `users_insert_own` exists for exactly this: without it the very
   * first write a new account makes would have had to bypass RLS.
   */
  const profile = await withOwnerDb(auth.id, async (tx) => {
    const existingRows = await tx
      .select()
      .from(users)
      .where(eq(users.id, auth.id))
      .limit(1);
    const existingRow = existingRows[0];
    if (existingRow) {
      await tx
        .update(users)
        .set({
          consentVersion: CONSENT_VERSION,
          consentAt: now,
          termsAck: true,
          researchConsent,
          researchConsentWithdrawnAt: researchConsent
            ? null
            : existingRow.researchConsentWithdrawnAt,
          locale,
        })
        .where(eq(users.id, auth.id));
    } else {
      await tx.insert(users).values({
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

    /**
     * Gate LEDG-1. The ledger row is written in the SAME transaction as the
     * users update, so a consent state can never exist without the evidence of
     * how it was obtained. Append-only: there is no update or delete policy on
     * this table for any role, so re-consent adds a row and never edits one.
     * This is a records obligation, not telemetry - it does not wait on the
     * legitimate-interest legal gate (OI-02 / TEL-1) and is never sent to any
     * processor.
     */
    await tx.insert(consentEvents).values({
      userId: auth.id,
      documentId: "CONTENT-CONSENT",
      documentVersion: CONSENT_VERSION,
      locale,
      documentHash: noticeHash,
      termsAck: true,
      researchConsent,
    });

    const rows = await tx
      .select()
      .from(users)
      .where(eq(users.id, auth.id))
      .limit(1);
    return { row: rows[0]!, isReConsent: Boolean(existingRow) };
  });
  await track({
    name: "signup_completed",
    user: profile.row,
    locale,
    sessionId: await getSessionId(),
    props: { consent_version: CONSENT_VERSION, re_consent: profile.isReConsent },
  });
  redirect({ href: "/my-tree", locale });
}

/**
 * SHA-256 of the privacy notice as shipped for this locale.
 *
 * Reads the same file the consent screen renders, so the hash cannot drift from
 * what the subject actually saw. If the file is unreadable the consent flow must
 * NOT silently record an empty hash - an unverifiable consent record is worse
 * than a failed submission, because it looks like evidence.
 */
async function hashNotice(locale: "de" | "en"): Promise<string> {
  const path = join(process.cwd(), "src", "content", `privacy.${locale}.md`);
  const text = await readFile(path, "utf8");
  return `sha256:${createHash("sha256").update(text, "utf8").digest("hex")}`;
}
