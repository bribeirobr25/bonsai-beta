#!/usr/bin/env node
/**
 * Gate COPY-2 · "a prohibited W3 claim string shipping".
 *
 * Source of truth: the W3 Gate A Beta Copy & Claims Ruling (12 Sep 2026),
 * §2.1 phrase dispositions. Every string below is quoted from that ruling with
 * its verdict and its approved replacement, so nobody has to re-derive brand
 * judgement from a grep result.
 *
 * These are CAUSAL HORTICULTURAL and WELLBEING claims. Shipping one is not a
 * tone problem: it asserts that using this product makes trees healthier or
 * people calmer, at an evidence level of UNVALIDATED. W3 has no authority to
 * make those claims and neither does implementation.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = process.cwd();
/** User-facing copy only. Canon documents QUOTE these strings to prohibit them. */
const SCAN = ["src", "messages"];

const PROHIBITED = [
  {
    phrase: "Support grows stronger trees",
    why: "causal horticultural outcome attributed to social support",
    instead: "Support without the scorekeeping.",
  },
  {
    phrase: "Kindness grows stronger trees",
    why: "direct causal horticultural claim",
    instead: "Encouragement, not evaluation.",
  },
  {
    phrase: "A healthier you",
    why: "personal-wellbeing claim, unvalidated",
    instead: "Your tree. Your journey. Share on your terms.",
  },
  {
    phrase: "A healthier tomorrow",
    why: "unsupported wellbeing/horticultural outcome",
    instead: "Progress and stories, not status.",
  },
  {
    phrase: "healthier tree tomorrow",
    why: "direct horticultural outcome claim",
    instead: "Add a moment today. Look back on it later.",
  },
  {
    phrase: "A calmer, more connected world",
    why: "unsupported societal/wellbeing outcome claim",
    instead: "Trees, journeys and the context around them.",
  },
  {
    phrase: "more mindful life",
    why: "unsupported wellbeing/lifestyle outcome",
    instead: "One tree. Moments worth looking back on.",
  },
  {
    phrase: "Trusted knowledge",
    why: "authority/trust claim above the current evidence level",
    instead: "Structured knowledge. Clear review status.",
  },
  {
    phrase: "A thriving bonsai community",
    why: "density/value claim with no evidence; Community is UNVALIDATED",
    instead: "name the surface without implying scale",
  },
  {
    phrase: "Connect with other bonsai enthusiasts",
    why: "implies available people and network density",
    instead: "Explore circles around bonsai interests and journeys.",
  },
];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(ts|tsx|md|json)$/.test(entry.name)) yield full;
  }
}

const violations = [];
for (const base of SCAN) {
  for await (const file of walk(join(ROOT, base))) {
    const rel = relative(ROOT, file);
    if (/\.test\.tsx?$/.test(rel)) continue; // tests name the strings to forbid them
    if (rel.startsWith("scripts/")) continue;
    const text = await readFile(file, "utf8");
    for (const p of PROHIBITED) {
      if (text.toLowerCase().includes(p.phrase.toLowerCase())) {
        violations.push({ rel, ...p });
      }
    }
  }
}

if (violations.length) {
  console.error("\nCOPY-2 FAILED · prohibited W3 claim in shipped copy\n");
  for (const v of violations) {
    console.error(`  ${v.rel}`);
    console.error(`    "${v.phrase}"`);
    console.error(`    ${v.why}`);
    console.error(`    approved instead: "${v.instead}"`);
  }
  console.error(
    "\nSource: W3 Gate A Beta Copy & Claims Ruling, 12 Sep 2026, §2.1.\n",
  );
  process.exit(1);
}
console.log(
  `COPY-2 passed · ${PROHIBITED.length} prohibited claim strings, none present in shipped copy`,
);
