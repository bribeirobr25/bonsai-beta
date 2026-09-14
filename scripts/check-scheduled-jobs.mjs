#!/usr/bin/env node
/**
 * Gate JOB-1 · "a scheduled job existing in code but absent from the jobs
 * catalogue, or vice versa" must be impossible.
 *
 * Compares vercel.json's `crons` against the table in
 * docs/06-implementation/SCHEDULED-JOBS.md, in both directions. A job with no
 * catalogue row is a cron nobody documented; a catalogue row with no job is a
 * promise nothing keeps - and the second is the dangerous one, because it reads
 * as coverage.
 */
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * This gate reads the project canon under docs/, which is NOT present in this
 * repository — the canon and the implementation plan live in a private
 * repository, and this public mirror carries code only.
 *
 * It exits NON-ZERO rather than skipping quietly. A gate that reports success
 * while verifying nothing is the exact failure the gate registry exists to
 * prevent, and this project has already been bitten by a suite that skipped
 * itself inside a green summary. If you are running this here, the honest
 * answer is "not verifiable in this checkout", not "passed".
 */
function requireCanon(paths) {
  const missing = paths.filter((p) => !existsSync(p));
  if (missing.length) {
    console.error("\n  NOT VERIFIABLE IN THIS CHECKOUT\n");
    console.error("  This gate needs project canon that this repository does not carry:");
    for (const m of missing) console.error(`    ${m}`);
    console.error("\n  It runs in the private canon repository. Nothing here has been verified.\n");
    process.exit(1);
  }
}

requireCanon([
  "docs/06-implementation/SCHEDULED-JOBS.md",
]);

const ROOT = process.cwd();
const CATALOGUE = "docs/06-implementation/SCHEDULED-JOBS.md";

const vercel = JSON.parse(await readFile(join(ROOT, "vercel.json"), "utf8"));
const doc = await readFile(join(ROOT, CATALOGUE), "utf8");

const inCode = new Map(
  (vercel.crons ?? []).map((c) => [c.path, c.schedule]),
);

/** Table rows look like: | `/api/x` | `0 6 * * *` | ... */
const inDoc = new Map();
for (const line of doc.split("\n")) {
  const m = line.match(/^\|\s*`([^`]+)`\s*\|\s*`([^`]+)`/);
  if (m) inDoc.set(m[1], m[2]);
}

const problems = [];
for (const [path, schedule] of inCode) {
  if (!inDoc.has(path)) {
    problems.push(`cron ${path} is in vercel.json but not in ${CATALOGUE}`);
  } else if (inDoc.get(path) !== schedule) {
    problems.push(
      `cron ${path} schedule disagrees: vercel.json "${schedule}" vs catalogue "${inDoc.get(path)}"`,
    );
  }
}
for (const path of inDoc.keys()) {
  if (!inCode.has(path)) {
    problems.push(
      `${CATALOGUE} lists ${path} but vercel.json has no such cron - a documented job that never runs`,
    );
  }
}

if (problems.length) {
  console.error("\nJOB-1 FAILED\n");
  for (const p of problems) console.error(`  ${p}`);
  console.error(
    `\nEvery scheduled job must appear in both places, with the same schedule.\n`,
  );
  process.exit(1);
}
console.log(
  `JOB-1 passed · ${inCode.size} scheduled job(s), code and catalogue agree`,
);
