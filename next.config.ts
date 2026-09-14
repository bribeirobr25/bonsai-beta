import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { toNextHeaders } from "./src/lib/security-headers";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Lets a browser inside Docker (Playwright MCP) load dev assets and HMR.
  allowedDevOrigins: ["host.docker.internal"],
  // Root layout lives under [locale]; unmatched URLs get a global 404 page.
  experimental: { globalNotFound: true },
  outputFileTracingIncludes: {
    "/[locale]/privacy": ["./src/content/**/*"],
  },
  /**
   * Plan §24.2 and §24.6. Defined here, as data in src/lib/security-headers.ts,
   * rather than in proxy.ts - because a header set in the proxy applies per
   * request and a nonce would force every matched route to dynamic rendering.
   * Static routes keep their headers and their static rendering this way.
   */
  headers: () => Promise.resolve(toNextHeaders()),
  // The framework version is not information a visitor needs.
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
