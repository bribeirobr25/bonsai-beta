#!/usr/bin/env node
/**
 * Gate ENV-1 · "a migration or seed running against Production as the routine
 * QA/staging substrate; a CI job pointing at a remote project".
 *
 * Plan §24.8 replaced assumption A-6 with local / Staging / Production
 * separation, and stated the rule plainly: Production data must not be the
 * routine QA substrate. This check enforces the half that is mechanically
 * checkable - that no CI job and no committed config aims a migration, a
 * reset or a seed at a remote database.
 *
 * What it CANNOT check, stated rather than implied: whether a human runs
 * `supabase db push` against Production from a laptop. That is why the rule
 * also lives in AGENTS.md, and why migrations rehearse on Staging first.
 */
import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const problems = [];

/** A DATABASE_URL is local when it points at loopback. */
const LOCAL_HOST = /(127\.0\.0\.1|localhost|\[::1\])/;

// --- 1. CI workflows must not aim destructive db commands at a remote host ---
const wfDir = join(ROOT, ".github/workflows");
const workflows = await readdir(wfDir).catch(() => []);
for (const name of workflows) {
  const rel = relative(ROOT, join(wfDir, name));
  const text = await readFile(join(wfDir, name), "utf8");
  const lines = text.split("\n");
  for (const [i, line] of lines.entries()) {
    const code = line.replace(/#.*$/, "");
    /**
     * ANY non-local DATABASE_URL in a workflow is a violation, not just one
     * adjacent to a destructive command.
     *
     * The first version of this check tried to be clever: find the nearest
     * preceding DATABASE_URL whenever it saw `db reset` or `db push`. It missed
     * its own sabotage test, because in this workflow `supabase db reset` runs
     * in a step BEFORE the env block, so there was no preceding URL to find.
     * The simple rule is also the correct one - CI must never hold credentials
     * for a real project, whatever it then does with them.
     */
    const url = code.match(/DATABASE_URL:\s*(\S+)/);
    if (url && !LOCAL_HOST.test(url[1])) {
      problems.push(
        `${rel}:${i + 1} configures a non-local DATABASE_URL (${url[1]}) — CI must use a local Supabase instance`,
      );
    }
    // A remote project ref pinned in CI means CI can reach a real project.
    if (/supabase\s+link|--project-ref/.test(code)) {
      problems.push(
        `${rel}:${i + 1} links CI to a remote Supabase project; CI must use a local instance`,
      );
    }
  }
}

// --- 2. no committed env file may point a DATABASE_URL at a remote host ---
for (const name of [".env.example", ".env.local.example"]) {
  const text = await readFile(join(ROOT, name), "utf8").catch(() => null);
  if (!text) continue;
  for (const [i, line] of text.split("\n").entries()) {
    const m = line.match(/^DATABASE_URL=(.+)$/);
    if (m && m[1].trim() && !LOCAL_HOST.test(m[1])) {
      problems.push(
        `${name}:${i + 1} ships a non-local DATABASE_URL — an example file must never point at a real project`,
      );
    }
  }
}

// --- 3. the three-environment rule must be written down where agents read it ---
/**
 * Whitespace is normalised before matching: AGENTS.md wraps prose at ~80
 * columns, so the sentence being looked for is split across two lines and a
 * line-oriented regex misses it. This check failed on its own subject for
 * exactly that reason before the normalisation was added.
 */
const agents = (await readFile(join(ROOT, "AGENTS.md"), "utf8").catch(() => ""))
  .replace(/\s+/g, " ");
if (
  !/Staging/.test(agents) ||
  !/Production\s+(data\s+)?is not the routine QA substrate/i.test(agents)
) {
  problems.push(
    "AGENTS.md does not state the local/Staging/Production rule; the part of ENV-1 that only a human can honour must at least be written where they will read it",
  );
}

if (problems.length) {
  console.error("\nENV-1 FAILED · environment separation\n");
  for (const p of problems) console.error(`  ${p}`);
  console.error(
    "\nLocal Supabase for development and CI. Staging for rehearsal. Production is\nnot the routine QA substrate (plan §24.8).\n",
  );
  process.exit(1);
}
console.log(
  `ENV-1 passed · ${workflows.length} workflow(s) checked, no CI job or example env points at a remote project`,
);
