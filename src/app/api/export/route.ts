import { eq, inArray } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/db";
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
  const profile = await db.query.users.findFirst({ where: eq(users.id, auth.id) });
  if (!profile) return NextResponse.json({ error: "no_profile" }, { status: 404 });

  const treeRows = await db.select().from(trees).where(eq(trees.ownerId, profile.id));
  const treeIds = treeRows.map((t) => t.id);
  const momentRows = treeIds.length
    ? await db.select().from(moments).where(inArray(moments.treeId, treeIds))
    : [];
  const momentIds = momentRows.map((m) => m.id);
  const photoRows = momentIds.length
    ? await db.select().from(photos).where(inArray(photos.momentId, momentIds))
    : [];
  const shareRows = treeIds.length
    ? await db.select().from(shareLinks).where(inArray(shareLinks.treeId, treeIds))
    : [];
  const eventRows = await db.select().from(events).where(eq(events.userId, profile.id));

  const signed: Record<string, string> = {};
  if (photoRows.length) {
    const { data } = await createAdminClient()
      .storage.from(PHOTOS_BUCKET)
      .createSignedUrls(photoRows.map((p) => p.storageKey), SIGNED_URL_TTL_S);
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
      "content-disposition": `attachment; filename="bar-bonsai-export-${stamp}.json"`,
      "cache-control": "no-store",
    },
  });
}
