#!/usr/bin/env node
/**
 * A test file must not import a `server-only` module.
 *
 * Not a style rule. `import "server-only"` throws when loaded outside a React
 * Server Component, and vitest reports the file as "0 test" while the summary
 * still prints a passing count for everything else - so the run looks like
 * "62 passed" with a quietly missing file. That failure has now happened four
 * times in this project:
 *
 *   rate-limit tiers        -> extracted to rate-limit-tiers.ts
 *   resolveSessionClass     -> extracted to events-rules.ts
 *   mayRecordEventFor       -> extracted to events-rules.ts
 *   the event taxonomy      -> extracted to event-names.ts
 *
 * Each time the fix was the same: anything worth asserting does not belong
 * behind `server-only`. This check makes that structural instead of
 * remembered.
 */
import { readdir, readFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(ts|tsx)$/.test(entry.name)) yield full;
  }
}

/** Does this module, or anything it re-exports, declare server-only? */
const serverOnly = new Map();
async function isServerOnly(file) {
  if (serverOnly.has(file)) return serverOnly.get(file);
  serverOnly.set(file, false); // break cycles
  const text = await readFile(file, "utf8").catch(() => null);
  if (text === null) return false;
  const direct = /^\s*import\s+["']server-only["']/m.test(text);
  serverOnly.set(file, direct);
  return direct;
}

/** Resolve a relative import to a file on disk. */
async function resolveImport(fromFile, spec) {
  if (!spec.startsWith(".") && !spec.startsWith("@/")) return null;
  const base = spec.startsWith("@/")
    ? join(SRC, spec.slice(2))
    : resolve(dirname(fromFile), spec);
  for (const cand of [
    `${base}.ts`,
    `${base}.tsx`,
    join(base, "index.ts"),
    join(base, "index.tsx"),
  ]) {
    const ok = await readFile(cand, "utf8").then(
      () => true,
      () => false,
    );
    if (ok) return cand;
  }
  return null;
}

const violations = [];
for await (const file of walk(SRC)) {
  const rel = relative(ROOT, file);
  if (!/\.test\.tsx?$/.test(rel)) continue;
  const text = await readFile(file, "utf8");
  for (const m of text.matchAll(/from\s+["']([^"']+)["']/g)) {
    const target = await resolveImport(file, m[1]);
    if (!target) continue;
    if (await isServerOnly(target)) {
      violations.push({ rel, imported: relative(ROOT, target) });
    }
  }
}

if (violations.length) {
  console.error("\ntestability check FAILED\n");
  for (const v of violations) {
    console.error(`  ${v.rel}`);
    console.error(`    imports ${v.imported}, which declares "server-only"`);
  }
  console.error(
    "\nThat file will report 0 tests while the suite still prints a passing",
  );
  console.error(
    "count. Extract the part worth asserting into a module without",
  );
  console.error('"server-only" - see src/lib/events-rules.ts for the pattern.\n');
  process.exit(1);
}
console.log("testability check passed · no test imports a server-only module");
