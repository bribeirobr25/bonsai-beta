import { defineConfig } from "vitest/config";

/**
 * The `rls-integration` suite (plan §17 job list, §16 rollout).
 *
 * Requires a reachable Postgres. Tests self-skip when one is absent so a local
 * run without Docker is a no-op rather than a wall of failures - but CI must
 * NOT rely on that, because a suite that skips itself reports green while
 * proving nothing. The CI job asserts a non-zero test count.
 *
 * Sequential by design: these tests share fixture rows and assert on row
 * counts, so parallel files would race each other.
 */
export default defineConfig({
  test: {
    include: ["src/**/*.integration.test.{ts,tsx}"],
    exclude: ["**/node_modules/**"],
    fileParallelism: false,
  },
  resolve: {
    alias: { "@": new URL("./src", import.meta.url).pathname },
  },
});
