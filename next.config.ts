import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Lets a browser inside Docker (Playwright MCP) load dev assets and HMR.
  allowedDevOrigins: ["host.docker.internal"],
  // Root layout lives under [locale]; unmatched URLs get a global 404 page.
  experimental: { globalNotFound: true },
  outputFileTracingIncludes: {
    "/[locale]/privacy": ["./src/content/**/*"],
  },
};

export default withNextIntl(nextConfig);
