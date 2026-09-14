import { defineConfig } from "vitest/config";

/**
 * Two separate suites, because they need different things to run.
 *
 * `unit` is pure: no database, no network, runs anywhere. It is what `pnpm test`
 * runs and what blocks every commit.
 *
 * `rls-integration` needs a live Postgres and asserts what POSTGRES enforces,
 * not what the schema declares. It is a distinct CI job (plan §17) because
 * bundling the two would mean either the unit suite silently skipping its most
 * important assertions on a machine without Docker, or every contributor
 * needing Docker to run `pnpm test`. Both are worse than two commands.
 *
 * Run it with `pnpm test:rls`.
 */
export default defineConfig({
  test: {
    // .tsx included deliberately: src/lib/markdown.test.tsx renders components,
    // and a `*.test.ts`-only glob silently dropped it - the unit count fell from
    // 33 to 30 with no failure to notice. Globs fail quietly; counts do not.
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["**/node_modules/**", "src/**/*.integration.test.{ts,tsx}"],
  },
  resolve: {
    alias: { "@": new URL("./src", import.meta.url).pathname },
  },
});
