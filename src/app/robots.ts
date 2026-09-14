import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

/**
 * Per-surface robots policy (plan Phase 1, gate IDX-1).
 *
 * Replaces a blanket `noindex`. The public Website and Knowledge surfaces exist
 * partly to support acquisition, so they must be indexable; everything holding
 * or revealing private data must not be.
 *
 * Two of these are load-bearing rather than housekeeping:
 *
 *   /{locale}/j/**  a Public Journey is reachable by an unguessable token, and
 *                   the owner chose to share it with named people. Indexing it
 *                   would convert "shared with someone" into "published to the
 *                   web" without the owner ever agreeing to that. The header
 *                   X-Robots-Tag: noindex, nofollow is set on the same routes
 *                   in security-headers.ts, because robots.txt is a request and
 *                   a header travels with the response.
 *
 *   /{locale}/app/** private records. Disallowed here and noindex-headered
 *                   there, for the same belt-and-braces reason.
 *
 * `/api/*` and `/auth/*` are disallowed because a crawler following a magic
 * link or an export endpoint is at best noise and at worst a consumed token.
 */
export default function robots(): MetadataRoute.Robots {
  const base = env().NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Private, per-user surfaces.
          "/*/app/",
          "/*/settings",
          "/*/my-tree",
          // Shared records: explicit sharing is not publication.
          "/*/j/",
          // Internal and operational surfaces.
          "/*/admin/",
          "/api/",
          "/auth/",
        ],
      },
    ],
    /**
     * No `sitemap:` line yet, deliberately. Pointing a crawler at
     * /sitemap.xml before that route exists advertises a 404 - and a sitemap
     * is only meaningful once the public Knowledge surfaces exist to list.
     * Added in Phase 2 alongside them.
     */
    host: base,
  };
}
