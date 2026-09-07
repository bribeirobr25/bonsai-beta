import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.{ts,tsx}", "scripts/**/*.test.ts"],
    environment: "node",
    env: { EVENTS_PEPPER: "test-pepper-test-pepper" },
  },
  resolve: {
    alias: { "@": new URL("./src", import.meta.url).pathname, "server-only": new URL("./src/lib/noop.ts", import.meta.url).pathname },
  },
});
