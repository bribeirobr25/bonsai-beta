import { eq, inArray } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { withOwnerDb } from "@/db/rls";
import { events, moments, photos, shareLinks, trees, users } from "@/db/schema";
import { getAuthUser, getSessionId } from "@/lib/auth/dal";
import { CONSENT_VERSION } from "@/lib/env";
import { track } from "@/lib/events";
import { createAdminClient, PHOTOS_BUCKET } from "@/lib/supabase/admin";

const SIGNED_URL_TTL_S = 24 * 3600;

/** Art. 15 / Art. 20: everything we hold about the caller, as JSON. */
export async function GET() {
  const auth = await getAuthUser();
  if (!auth) return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
  /**
   * Read the subject's own data on the OWNER path (plan §16 step 2). Under RLS
   * these queries return the caller's rows because the policies say so, which
   * makes an Art. 15 export incapable of over-returning: a bug in a where
   * clause can no longer expose somebody else's Journey through the export.
   */
  const own = await withOwnerDb(auth.id, async (tx) => {
    const profileRows = await tx
      .select()
      .from(users)
      .where(eq(users.id, auth.id))
      .limit(1);
    const treeRows = await tx.select().from(trees);
    const treeIds = treeRows.map((t) => t.id);
    const momentRows = treeIds.length
      ? await tx.select().from(moments).where(inArray(moments.treeId, treeIds))
      : [];
    /**
     * Photos are selected by TREE, not by moment.
     *
     * M1 made photos.moment_id nullable for capture-first, and the previous
     * query filtered `inArray(photos.momentId, momentIds)` - so from M1 onward
     * every photo not yet attached to a Moment would have been silently absent
     * from the subject's own data export. That is an Art. 15 completeness
     * failure introduced by a schema change, in the one endpoint whose entire
     * job is completeness, and it would not have surfaced as an error.
     */
    const photoRows = treeIds.length
      ? await tx.select().from(photos).where(inArray(photos.treeId, treeIds))
      : [];
    const shareRows = treeIds.length
      ? await tx.select().from(shareLinks).where(inArray(shareLinks.treeId, treeIds))
      : [];
    return { profile: profileRows[0] ?? null, treeRows, momentRows, photoRows, shareRows };
  });
  const { profile, treeRows, momentRows, photoRows, shareRows } = own;
  if (!profile) return NextResponse.json({ error: "no_profile" }, { status: 404 });

  /**
   * PRIVILEGED, deliberately. `events` has RLS enabled and no policies, so no
   * owner path to it exists by design - telemetry is written and read by the
   * server, never by the account. Art. 15 still requires the subject's own
   * events be included, and they cannot fetch them themselves. Scoped by
   * user_id here, and this is one of the reasons the service-role grep allows
   * an exception list rather than a blanket ban.
   */
  const eventRows = await db.select().from(events).where(eq(events.userId, profile.id));

  const signed: Record<string, string> = {};
  if (photoRows.length) {
    const { data } = await createAdminClient()
      .storage.from(PHOTOS_BUCKET)
      .createSignedUrls(
        photoRows.map((p) => p.normalizedKey ?? p.storageKey),
        SIGNED_URL_TTL_S,
      );
    for (const d of data ?? []) {
      if (d.path && d.signedUrl) signed[d.path] = d.signedUrl;
    }
  }

  await track({ name: "export_requested", user: profile, sessionId: await getSessionId() });

  const body = {
    exported_at: new Date().toISOString(),
    consent_version: CONSENT_VERSION,
    account: {
      id: profile.id,
      email: profile.email,
      locale: profile.locale,
      consent_version: profile.consentVersion,
      consent_at: profile.consentAt,
      terms_ack: profile.termsAck,
      research_consent: profile.researchConsent,
      research_consent_withdrawn_at: profile.researchConsentWithdrawnAt,
      created_at: profile.createdAt,
    },
    trees: treeRows,
    moments: momentRows,
    photos: photoRows.map((p) => ({ ...p, download_url: signed[p.storageKey] ?? null })),
    share_links: shareRows,
    events: eventRows.map((e) => ({ ...e, pseudonym: undefined })),
  };
  const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return new NextResponse(JSON.stringify(body, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "content-disposition": `attachment; filename="bonsai-export-${stamp}.json"`,
      "cache-control": "no-store",
    },
  });
}
