#!/usr/bin/env node
/**
 * Plan §16: "Service role remains reachable only from migration, seed, cron and
 * is_admin admin modules — enforced by a CI grep, not by convention."
 *
 * This is that grep. It fails the build when a module reaches for the
 * privileged, RLS-bypassing connection without being on the allowlist below.
 *
 * Why an allowlist rather than a ban: four legitimate exceptions exist, each for
 * a reason that cannot be designed away. Naming them here means adding a fifth
 * is a reviewable diff rather than an invisible drift - which is the whole point
 * of the rule.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");

/** Modules permitted to import the privileged connection, with the reason. */
const ALLOWED = new Map([
  [
    "src/db/index.ts",
    "defines the privileged client itself",
  ],
  [
    "src/db/rls.ts",
    "wraps it into the owner and anon paths; this is the file that drops privilege",
  ],
  [
    "src/lib/events.ts",
    "telemetry sink: anonymous events have no auth.uid(), and an account able to write its own events could manufacture evidence",
  ],
  [
    "src/app/api/keepalive/route.ts",
    "cron, explicitly permitted by §16",
  ],
  [
    "src/app/api/export/route.ts",
    "Art. 15 export must include the subject's own events, which they have no owner path to read",
  ],
  [
    "src/lib/rate-limit.ts",
    "rate limiting must work for ANONYMOUS callers - magic-link sending has no auth.uid(), so rate_limits has RLS on with zero policies and is written only from here",
  ],
  [
    "src/app/[locale]/settings/actions.ts",
    "detaching events.user_id on research-consent withdrawal is a data-protection obligation the subject cannot perform themselves",
  ],
]);

/** Anything matching these is a privileged-surface import. */
const PATTERNS = [
  { re: /from\s+["']@\/db["']/, what: 'import { db } from "@/db"' },
  { re: /from\s+["']\.\/index["']/, what: "relative import of the db client" },
  { re: /createAdminClient/, what: "createAdminClient (service-role Supabase)" },
  { re: /SUPABASE_SECRET_KEY|SERVICE_ROLE/, what: "service-role key reference" },
];

/** Files allowed to reference the service-role Supabase client specifically. */
const ADMIN_CLIENT_ALLOWED = new Set([
  "src/lib/supabase/admin.ts",
  "src/lib/env.ts",
  "src/app/api/export/route.ts",
  "src/app/[locale]/settings/actions.ts",
]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(ts|tsx)$/.test(entry.name)) yield full;
  }
}

const violations = [];
for await (const file of walk(SRC)) {
  const rel = relative(ROOT, file);
  if (/\.test\.tsx?$/.test(rel)) continue; // tests assert against the real thing
  const text = await readFile(file, "utf8");
  for (const { re, what } of PATTERNS) {
    if (!re.test(text)) continue;
    const isAdminClient = what.startsWith("createAdminClient") || what.includes("service-role key");
    const permitted = isAdminClient
      ? ADMIN_CLIENT_ALLOWED.has(rel) || ALLOWED.has(rel)
      : ALLOWED.has(rel);
    if (!permitted) violations.push({ rel, what });
  }
}

if (violations.length) {
  console.error("\nservice-role check FAILED\n");
  console.error(
    "These modules reach the privileged, RLS-bypassing path without being on the",
  );
  console.error("allowlist in scripts/check-service-role.mjs:\n");
  for (const v of violations) console.error(`  ${v.rel}\n    ${v.what}`);
  console.error(
    "\nIf the query needs the service role, the policy is probably missing or wrong.",
  );
  console.error(
    "Use withOwnerDb / withAnonDb from src/db/rls.ts. If the exception is genuine,",
  );
  console.error("add it to the allowlist WITH a reason, so review can see it.\n");
  process.exit(1);
}

console.log(
  `service-role check passed · ${ALLOWED.size} documented exceptions, no undeclared privileged access`,
);
