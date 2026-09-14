#!/usr/bin/env node
/**
 * The mechanical half of the per-unit audit protocol.
 *
 * docs/06-implementation/AUDIT-PROTOCOL-PER-UNIT.md carries the judgement half.
 * This script exists because a document-only gate degrades into a ritual: every
 * check below is here because the corresponding defect ACTUALLY HAPPENED in this
 * project and was caught by reconciling a number rather than by reading output.
 *
 *   test counts moved silently   33 -> 30 (a glob dropped a .tsx file)
 *                                71 -> 62 (a file reported "0 test")
 *   a suite skipped itself       57 integration tests skipped inside a green
 *                                summary, and a commit claimed they passed
 *   gate rows enforced nothing   6 of 18 Phase-1 rows had zero enforcement
 *   docs asserted stale values   counts, versions and paths the code had moved
 *
 * Baseline lives in .audit-baseline.json and is updated deliberately with
 * `--accept`, so a count can only drop when somebody says it may.
 */
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
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
  "docs/06-implementation/BONSAI_FINAL_PHASED_IMPLEMENTATION_PLAN.md",
]);

const ROOT = process.cwd();
const BASELINE = join(ROOT, ".audit-baseline.json");
const accept = process.argv.includes("--accept");

const sh = (cmd) => {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  } catch (e) {
    return (e.stdout ?? "") + (e.stderr ?? "");
  }
};

/** Parse "Tests  N passed (M)" / "N skipped" out of a vitest summary. */
function parseVitest(out) {
  const files = out.match(/Test Files\s+(.+)/)?.[1] ?? "";
  const tests = out.match(/Tests\s+(.+)/)?.[1] ?? "";
  const passed = Number(tests.match(/(\d+)\s+passed/)?.[1] ?? 0);
  const skipped = Number(tests.match(/(\d+)\s+skipped/)?.[1] ?? 0);
  const failed = Number(tests.match(/(\d+)\s+failed/)?.[1] ?? 0);
  const zeroTestFiles = [...out.matchAll(/^\s*❯\s+(\S+)\s+\(0 test\)/gm)].map((m) => m[1]);
  return { passed, skipped, failed, zeroTestFiles, files, tests };
}

const findings = [];
const notes = [];

// ---------------------------------------------------------------- counts
const unit = parseVitest(sh("pnpm test 2>&1"));
const rls = parseVitest(sh("pnpm test:rls 2>&1"));

let baseline = { unit: 0, rls: 0 };
try {
  baseline = JSON.parse(await readFile(BASELINE, "utf8"));
} catch {
  notes.push(`no baseline yet — creating one at ${BASELINE}`);
}

for (const [name, res, base] of [
  ["unit", unit, baseline.unit ?? 0],
  ["rls", rls, baseline.rls ?? 0],
]) {
  if (res.failed > 0) {
    findings.push(`${name}: ${res.failed} test(s) FAILED`);
  }
  if (res.skipped > 0) {
    findings.push(
      `${name}: ${res.skipped} test(s) SKIPPED — a skipped suite reports green while proving nothing. If a tool was unavailable, say so in the commit message rather than claiming the run happened.`,
    );
  }
  for (const f of res.zeroTestFiles) {
    findings.push(
      `${name}: ${f} reported "0 test" — the file loaded but contributed nothing (usually a server-only import; see pnpm check:testability)`,
    );
  }
  if (res.passed < base && !accept) {
    findings.push(
      `${name}: count DROPPED ${base} -> ${res.passed}. Tests do not vanish by accident. Explain it, then re-run with --accept if the drop is intended.`,
    );
  }
}

// ------------------------------------------------- gate rows with no enforcement
const plan = await readFile(
  join(ROOT, "docs/06-implementation/BONSAI_FINAL_PHASED_IMPLEMENTATION_PLAN.md"),
  "utf8",
);
const registry = plan.slice(
  plan.indexOf("### Gate registry status by phase"),
  plan.indexOf("## 18."),
);
const rows = [...registry.matchAll(/^\|\s*`([A-Z0-9-]+)`\s*\|.*\|\s*(P[^|]*)\|/gm)].map((m) => ({
  id: m[1],
  phase: m[2].trim(),
}));
const ids = rows.map((r) => r.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) {
  findings.push(`gate registry has duplicate id(s): ${[...new Set(dupes)].join(", ")}`);
}

const P1 = rows.filter((r) => /^P1\b|^P1\//.test(r.phase));
const unenforced = [];
for (const { id } of P1) {
  const hits = sh(
    `grep -rl -- '${id}' src scripts .github supabase 2>/dev/null | grep -v node_modules | wc -l`,
  ).trim();
  if (hits === "0") unenforced.push(id);
}
if (unenforced.length) {
  findings.push(
    `Phase-1 gate row(s) with NO enforcement anywhere: ${unenforced.join(", ")} — a registry claiming coverage it does not have is the failure the registry exists to prevent`,
  );
}

// ---------------------------------------------------------- doc links resolve
const brokenLinks = sh(
  `node -e '
const fs=require("fs"),path=require("path");
const glob=(d,out=[])=>{for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);
if(e.isDirectory()){if(!/node_modules|99-archive/.test(p))glob(p,out);}else if(p.endsWith(".md"))out.push(p);}return out;};
let n=0;
for(const f of glob("docs").concat(["AGENTS.md","README.md"])){
 const t=fs.readFileSync(f,"utf8");
 for(const m of t.matchAll(/\\]\\(([^)#][^)]*)\\)/g)){
  const x=m[1].split("#")[0]; if(!x||x.startsWith("http"))continue;
  if(!fs.existsSync(path.normalize(path.join(path.dirname(f),x)))){console.log(f+" -> "+x);n++;}}}
process.exit(n?1:0);' 2>&1`,
).trim();
if (brokenLinks) findings.push(`broken documentation link(s):\n    ${brokenLinks.split("\n").join("\n    ")}`);

// --------------------------------------------------- uncommitted work in src/
const dirtySrc = sh("git status --porcelain -- src supabase scripts 2>/dev/null").trim();
if (dirtySrc) {
  notes.push(`uncommitted changes in src/supabase/scripts — audit the committed state:\n    ${dirtySrc.split("\n").join("\n    ")}`);
}

// ---------------------------------------------------------------- report
const scope = sh("git diff --stat main..HEAD -- src supabase scripts 2>/dev/null").trim().split("\n").at(-1) ?? "";

console.log("\nPER-UNIT AUDIT · mechanical checks\n");
console.log(`  scope vs main    ${scope || "no changes"}`);
console.log(`  unit             ${unit.tests.trim() || "not run"}`);
console.log(`  rls              ${rls.tests.trim() || "not run"}`);
console.log(`  gate rows        ${rows.length} (${P1.length} at P1), ${unenforced.length} unenforced`);
for (const n of notes) console.log(`  note             ${n}`);

if (findings.length) {
  console.error(`\n  FINDINGS (${findings.length})\n`);
  for (const [i, f] of findings.entries()) console.error(`  ${i + 1}. ${f}`);
  console.error(
    "\n  verdict          FAIL — resolve or explain each finding before the next unit.",
  );
  console.error(
    "  The judgement half is not covered here: falsify what you changed, and state\n  what you could not verify. See docs/06-implementation/AUDIT-PROTOCOL-PER-UNIT.md\n",
  );
  process.exit(1);
}

if (accept || baseline.unit === undefined) {
  await writeFile(
    BASELINE,
    `${JSON.stringify({ unit: unit.passed, rls: rls.passed }, null, 2)}\n`,
  );
  console.log(`\n  baseline         updated to unit ${unit.passed} / rls ${rls.passed}`);
}

console.log("\n  verdict          mechanical checks PASS");
console.log(
  "  still required   falsify what you changed; state what you could not verify.\n                   See docs/06-implementation/AUDIT-PROTOCOL-PER-UNIT.md\n",
);
