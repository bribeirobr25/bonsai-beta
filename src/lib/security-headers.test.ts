/**
 * Security-header invariants · gates CSP-1, IDX-1, PRIV-*.
 *
 * TEST POLICY (§17): each assertion cites the requirement it enforces.
 *
 * These assert the POLICY DATA, which is what next.config.ts serves. The
 * headers were also verified on the wire against a running production build -
 * a config object that is never passed to Next proves nothing, and that failure
 * actually happened here: the first version carried a `surface` field Next
 * rejected outright, so the build failed rather than serving no headers.
 */
import { describe, expect, it } from "vitest";
import { NO_INDEX } from "./metadata";
import {
  PERMISSIONS_POLICY_VALUE,
  PUBLIC_CONTENT_SECURITY_POLICY as CSP,
  SECURITY_HEADERS,
  toNextHeaders,
} from "./security-headers";

const surface = (name: string) => {
  const found = SECURITY_HEADERS.find((s) => s.surface.includes(name));
  if (!found) throw new Error(`no surface matching ${name}`);
  return new Map(found.headers.map((h) => [h.key, h.value]));
};

describe("CSP per surface · gate CSP-1", () => {
  it("uses no per-request nonce on the public surfaces", () => {
    // Requirement: §24.6. A nonce forces dynamic rendering (Next's own docs:
    // "you must use dynamic rendering to add nonces"), which would convert the
    // public Website and Knowledge from static/CDN to server-rendered per
    // request. If a nonce appears here, that conversion happened silently.
    expect(CSP).not.toMatch(/nonce-/);
  });

  it("allows no third-party script host", () => {
    // Requirement: §24.2 "no third-party script hosts". This is the control
    // that survives allowing 'unsafe-inline' - an injected <script src> to any
    // external origin is still blocked, which is the realistic supply-chain
    // vector.
    const scriptSrc = CSP.split(";")
      .map((d) => d.trim())
      .find((d) => d.startsWith("script-src"));
    expect(scriptSrc).toBeDefined();
    expect(scriptSrc).not.toMatch(/https?:\/\//);
  });

  it("confines connect-src so a running script cannot exfiltrate", () => {
    // Requirement: the notice states usage statistics are first-party and sent
    // to no analytics provider (consent v0.4 §4). An unrestricted connect-src
    // would make that claim unenforceable.
    const connect = CSP.split(";")
      .map((d) => d.trim())
      .find((d) => d.startsWith("connect-src"));
    expect(connect).toMatch(/^connect-src 'self' \S+$/);
    // Exactly two sources: self, and Supabase. No third origin.
    expect(connect?.split(" ")).toHaveLength(3);
  });

  it("derives the Supabase origin from the environment, not a hard-coded host", () => {
    // Requirement: local development runs Supabase on a different origin from
    // `self`. A hard-coded https://*.supabase.co passes in production and
    // silently blocks local dev the moment the browser client is used - a
    // failure that would surface in Phase 4 with no obvious cause.
    const connect =
      CSP.split(";")
        .map((d) => d.trim())
        .find((d) => d.startsWith("connect-src")) ?? "";
    const configured = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (configured) {
      expect(connect).toContain(new URL(configured).origin);
    } else {
      expect(connect).toContain("https://*.supabase.co");
    }
  });

  it("omits upgrade-insecure-requests on a plain-http origin", () => {
    /**
     * Requirement: this directive made the browser rewrite every http
     * subresource to https, so on an http origin every stylesheet, script and
     * font failed with ERR_SSL_PROTOCOL_ERROR and the page rendered unstyled.
     *
     * It passed on localhost (treated as potentially trustworthy, upgrade
     * skipped) and in https production (no-op), and broke the containerised
     * browser, LAN testing by IP, and any http preview host. Found by a real
     * browser, not by this suite - which is why the test exists now.
     */
    const site = process.env.NEXT_PUBLIC_SITE_URL;
    const isHttps = site ? new URL(site).protocol === "https:" : false;
    if (isHttps) {
      expect(CSP).toContain("upgrade-insecure-requests");
    } else {
      expect(CSP).not.toContain("upgrade-insecure-requests");
    }
  });

  it.each(["object-src 'none'", "base-uri 'self'", "frame-ancestors 'none'"])(
    "sets %s",
    (directive) => {
      expect(CSP).toContain(directive);
    },
  );
});

describe("Permissions-Policy · browser-enforced canon rules", () => {
  it("disables geolocation at the browser, not in code", () => {
    // Requirement: "no precise location becomes public by default". An empty
    // allowlist means the browser refuses the Geolocation API outright, so the
    // guarantee holds even if application code later asks for a fix by mistake.
    expect(PERMISSIONS_POLICY_VALUE).toContain("geolocation=()");
    expect(PERMISSIONS_POLICY_VALUE).not.toMatch(/geolocation=\((self|\*)/);
  });

  it("keeps camera closed until a capture route exists", () => {
    // Requirement: Add Moment needs capture, but that route arrives in Phase 4.
    // Granting camera across the whole origin before any surface uses it hands
    // out a capability nothing needs. Widened on the capture route only.
    expect(PERMISSIONS_POLICY_VALUE).toContain("camera=()");
  });
});

describe("deprecated headers stay out", () => {
  it("never sends X-XSS-Protection", () => {
    // Requirement: the governance assessment's correction. It is deprecated,
    // its filter introduced its own vulnerabilities, and CSP supersedes it.
    // Re-adding it would be cargo-culting a header modern browsers ignore.
    const all = SECURITY_HEADERS.flatMap((s) => s.headers.map((h) => h.key));
    expect(all).not.toContain("X-XSS-Protection");
  });
});

describe("private surfaces · gate IDX-1", () => {
  it.each([
    "authenticated app",
    "admin",
    "public journey",
    "api",
    "auth callback",
    "private pages (pre-P4) · settings",
  ])(
    "marks %s noindex at the header level",
    (name) => {
      // Requirement: robots.txt is a request a crawler may ignore; a header
      // travels with the response. Both are set for the same paths.
      expect(surface(name).get("X-Robots-Tag")).toBe("noindex, nofollow");
    },
  );

  it.each(["authenticated app", "admin", "api", "auth callback"])(
    "keeps %s out of shared caches",
    (name) => {
      // Requirement: private data must never be served from a shared cache.
      expect(surface(name).get("Cache-Control")).toMatch(/private, no-store/);
    },
  );

  it("covers the private routes that exist TODAY, not only their P4 locations", () => {
    /**
     * Requirement: the /app/** surface is written for the Phase 4 route map and
     * matches nothing yet, so /settings and /my-tree were receiving the
     * baseline only. The page-level NO_INDEX metadata covered indexing, which
     * is exactly why the missing header was invisible - a meta tag is right up
     * until something does not parse the body.
     */
    const h = surface("pre-P4) · settings");
    expect(h.get("X-Robots-Tag")).toBe("noindex, nofollow");
    expect(h.get("Cache-Control")).toContain("no-store");
  });

  it("never caches or leaks the magic-link exchange", () => {
    // Requirement: a URL under /auth/ carries a ONE-TIME TOKEN. A cached token
    // is a replayable session; a referrer-leaked one reaches a third party; an
    // indexed one gets consumed by a crawler, leaving the real user a dead
    // link. All three have to be closed, not just indexing.
    const h = surface("auth callback");
    expect(h.get("Cache-Control")).toContain("no-store");
    expect(h.get("Referrer-Policy")).toBe("no-referrer");
    expect(h.get("X-Robots-Tag")).toBe("noindex, nofollow");
  });

  it("sends no referrer at all from a shared journey", () => {
    // Requirement: a share token in a Referer header would hand a private
    // record's address to any third-party origin the page touches.
    expect(surface("public journey").get("Referrer-Policy")).toBe("no-referrer");
  });

  it("blocks snippets and image previews, not just indexing", () => {
    // Requirement: a page can be excluded from results and still be cached or
    // snippet-previewed, which for a private record is the same leak by
    // another route.
    const r = NO_INDEX as Record<string, unknown>;
    expect(r.index).toBe(false);
    expect(r.nocache).toBe(true);
    const bot = r.googleBot as Record<string, unknown>;
    expect(bot.noimageindex).toBe(true);
    expect(bot["max-snippet"]).toBe(0);
  });
});

describe("the config Next actually receives", () => {
  it("strips fields Next's header schema rejects", () => {
    // Requirement: not cosmetic. Next fails the BUILD on an unknown field
    // ("invalid field: surface for route"), which is how this was caught. The
    // `surface` label is ours, for the §14.1 table and for these tests.
    for (const entry of toNextHeaders()) {
      expect(Object.keys(entry).sort()).toEqual(["headers", "source"]);
    }
  });

  it("applies the baseline to every surface", () => {
    // Requirement: a surface-specific override must extend the baseline, never
    // replace it. Forgetting to spread BASELINE would silently drop HSTS and
    // the CSP from that surface.
    for (const s of SECURITY_HEADERS) {
      const keys = s.headers.map((h) => h.key);
      expect(keys, s.surface).toContain("Content-Security-Policy");
      expect(keys, s.surface).toContain("Strict-Transport-Security");
      expect(keys, s.surface).toContain("Permissions-Policy");
      expect(keys, s.surface).toContain("X-Frame-Options");
    }
  });
});
