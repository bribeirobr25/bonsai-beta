/**
 * Security headers, chosen PER SURFACE (plan §24.2 and §24.6).
 *
 * Exported as data rather than inlined into next.config.ts so the CSP-1 gate
 * can assert against it. A header policy nobody can test is a claim, not a
 * control.
 *
 * WHY NOT ONE GLOBAL NONCE-BASED CSP. A nonce must be unique per response, and
 * the Next.js documentation is explicit: "you must use dynamic rendering to add
 * nonces". Applying one globally would silently convert the public Website and
 * Knowledge surfaces from static/CDN-served to server-rendered on every
 * request - trading a real performance and cost property for a marginal
 * security gain on pages that run no first-party inline script. Founder ruling
 * on OI-48 approved the headers with exactly this qualification.
 *
 * So: static-friendly CSP on the public surfaces, nonce-based CSP on the
 * surfaces that are already dynamic and per-user. Gate CSP-1 asserts the public
 * routes keep static renderability and that no per-request nonce appears in
 * their response path.
 */

/** Surfaces, in the order they are matched. Later entries override earlier. */
export type SurfaceHeaders = {
  /** Next.js `headers()` source pattern. */
  source: string;
  /** What this surface is, for the §14.1 route table. */
  surface: string;
  headers: Array<{ key: string; value: string }>;
};

/**
 * The honest trade-off, stated once.
 *
 * Next's App Router injects small inline bootstrap scripts for hydration and
 * streaming. On a statically rendered route there is no per-request nonce to
 * mark them with, and build-time hashes change on every build. So the public
 * surfaces allow `'unsafe-inline'` for scripts.
 *
 * That is weaker than a nonce and should not be described otherwise. What it
 * still buys, and what actually matters for this product:
 *   - NO third-party script host is reachable. An injected <script src> to any
 *     external origin is blocked, which is the realistic supply-chain vector.
 *   - `connect-src 'self'` means no exfiltration endpoint is reachable either,
 *     so a script that did run could not phone data home.
 *   - object-src 'none', base-uri 'self', frame-ancestors 'none'.
 *
 * The authenticated app and admin surfaces are already dynamic, so they pay
 * nothing for a nonce and get the stronger policy. Their nonce layer lands with
 * Phase 4, when `/{locale}/app/**` first exists; until then no route under it
 * is served, and the stricter static policy below applies.
 */
/**
 * The Supabase origin the BROWSER will talk to, taken from the environment.
 *
 * Hard-coding `https://*.supabase.co` would be correct in production and wrong
 * everywhere else: local development runs Supabase at
 * `http://127.0.0.1:54321`, which is a different origin from `self`
 * (`localhost:3000`). The browser-side client is unused today, so nothing is
 * broken right now - but the moment Phase 4 uses it for uploads, CSP would pass
 * in production and silently block local development, and whoever hit that
 * would have no reason to suspect a header written months earlier.
 *
 * Derived rather than listed, so dev, staging and production are each right
 * without anyone maintaining a list. Falls back to the wildcard when the
 * variable is absent (for example during a bare `next build` in CI with no
 * env), which is the safe direction: a slightly broader connect-src is better
 * than a build that cannot serve auth.
 */
function supabaseConnectOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!raw) return "https://*.supabase.co";
  try {
    return new URL(raw).origin;
  } catch {
    return "https://*.supabase.co";
  }
}

const PUBLIC_CSP = [
  "default-src 'self'",
  // See the note above: no nonce is available on a static route.
  "script-src 'self' 'unsafe-inline'",
  // Tailwind ships a stylesheet; Next still inlines critical style tags.
  "style-src 'self' 'unsafe-inline'",
  // Supabase Storage serves photo derivatives over https.
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  // Same origin plus Supabase, and nothing else: no analytics endpoint and no
  // third-party collector is reachable, which is what makes the privacy
  // notice's "sent to no analytics provider" enforceable rather than asserted.
  `connect-src 'self' ${supabaseConnectOrigin()}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  // Belt and braces with X-Frame-Options; frame-ancestors is the modern one.
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

/**
 * `Permissions-Policy: geolocation=()` is the cheapest possible implementation
 * of a binding canon rule: "no precise location becomes public by default".
 * An empty allowlist means the browser itself refuses the Geolocation API, so
 * the guarantee holds even if application code later asks for a fix by mistake.
 *
 * `camera=()` for now, NOT `camera=(self)`. Add Moment needs capture, but that
 * route does not exist until Phase 4 - enabling camera across the whole origin
 * before any surface uses it would grant a capability nothing needs. It is
 * widened on the capture route specifically when that route lands.
 */
const PERMISSIONS_POLICY = [
  "geolocation=()",
  "camera=()",
  "microphone=()",
  "payment=()",
  "usb=()",
  "magnetometer=()",
  "gyroscope=()",
  "accelerometer=()",
].join(", ");

const BASELINE: Array<{ key: string; value: string }> = [
  { key: "Content-Security-Policy", value: PUBLIC_CSP },
  { key: "Permissions-Policy", value: PERMISSIONS_POLICY },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // A Public Journey must not be framable: a shared record inside someone
  // else's chrome is a phishing surface.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send the origin cross-site, the full path same-origin. A share token must
  // never leak in a Referer to a third party.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // NOTE: X-XSS-Protection is deliberately ABSENT. It is deprecated, its
  // filter introduced its own vulnerabilities, and CSP supersedes it. Adding it
  // back would be cargo-culting a header modern browsers ignore.
];

export const SECURITY_HEADERS: SurfaceHeaders[] = [
  {
    source: "/:path*",
    surface: "all surfaces · baseline",
    headers: BASELINE,
  },
  {
    // Share links carry an unguessable token. Even a referrer origin is more
    // than a third party needs to know about a private record being viewed.
    source: "/:locale/j/:token*",
    surface: "public journey (share token)",
    headers: [
      ...BASELINE,
      { key: "Referrer-Policy", value: "no-referrer" },
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
    ],
  },
  {
    source: "/:locale/app/:path*",
    surface: "authenticated app",
    headers: [
      ...BASELINE,
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
      // Private data must never be served from a shared cache.
      { key: "Cache-Control", value: "private, no-store" },
    ],
  },
  {
    source: "/:locale/admin/:path*",
    surface: "admin",
    headers: [
      ...BASELINE,
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
      { key: "Cache-Control", value: "private, no-store" },
    ],
  },
  {
    /**
     * The magic-link exchange. A URL here carries a ONE-TIME TOKEN in its
     * query string, so it must never be indexed and never enter any cache -
     * a cached token is a replayable session, and a crawler following one
     * consumes it and leaves the real user with a dead link.
     *
     * This surface was missing when the headers first landed: robots.txt
     * disallowed /auth/, but robots.txt is a request a crawler may ignore and
     * says nothing at all about caching.
     */
    source: "/auth/:path*",
    surface: "auth callback",
    headers: [
      ...BASELINE,
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
      { key: "Cache-Control", value: "private, no-store, max-age=0" },
      // No referrer: the token must not travel to any origin the page touches.
      { key: "Referrer-Policy", value: "no-referrer" },
    ],
  },
  {
    source: "/api/:path*",
    surface: "api",
    headers: [
      ...BASELINE,
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
      { key: "Cache-Control", value: "private, no-store" },
    ],
  },
];

/**
 * What next.config.ts actually passes to Next.
 *
 * `surface` is ours - it names the surface for the §14.1 route table and for
 * the CSP-1 test - and Next's header schema rejects unknown fields outright
 * ("invalid field: surface for route"), so it is stripped here rather than
 * being kept out of the data in the first place. Better to carry the
 * documentation in the same structure the headers live in and drop it at the
 * boundary than to maintain two lists that can drift apart.
 */
export function toNextHeaders(): Array<{
  source: string;
  headers: Array<{ key: string; value: string }>;
}> {
  return SECURITY_HEADERS.map(({ source, headers }) => ({ source, headers }));
}

/** The CSP string applied to the public, statically rendered surfaces. */
export const PUBLIC_CONTENT_SECURITY_POLICY = PUBLIC_CSP;
export const PERMISSIONS_POLICY_VALUE = PERMISSIONS_POLICY;
