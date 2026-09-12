#!/usr/bin/env node
/**
 * Gate COPY-1 · "a privacy claim in UI copy with no corresponding passing test".
 *
 * The rule behind it is the one in the Handoff: privacy copy must never exceed
 * the technical guarantee. A notice that promises more than the code delivers
 * is not a documentation problem - it is a false statement to a data subject,
 * and the person who wrote the sentence is usually not the person who would
 * notice it stopped being true.
 *
 * So every privacy claim that appears in shipped copy must be listed here with
 * the test that proves it. Three states, and the middle one is the point:
 *
 *   proven     a named test asserts the guarantee. The check verifies the test
 *              FILE and the test NAME both exist.
 *   unproven   the claim ships and nothing proves it yet, with a reason and the
 *              phase that will. Reported loudly on every run; it does not fail
 *              the build, because the alternative is deleting true sentences
 *              from a privacy notice to make CI green.
 *   unlisted   a claim is in copy with no entry at all. FAILS. This is the
 *              state that matters - it means a promise was added and nobody
 *              decided whether anything backs it.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const COPY = [
  "src/content/privacy.en.md",
  "src/content/privacy.de.md",
  "messages/en.json",
  "messages/de.json",
];

/**
 * Claim registry. `match` is the substring as it appears in copy (either
 * locale); `test` names the file and the test title that proves it.
 */
const CLAIMS = [
  {
    match: "no usage events about you are stored",
    claim: "without research consent, no usage events are stored",
    test: {
      file: "src/lib/events.test.ts",
      name: "records nothing about a person who has not given research consent",
    },
  },
  {
    match: "are not sent to any analytics provider",
    claim: "usage statistics are first-party and reach no third party",
    test: {
      file: "src/lib/security-headers.test.ts",
      name: "confines connect-src so a running script cannot exfiltrate",
    },
  },
  {
    match: "an keinen Analyse-Anbieter übermittelt",
    claim: "usage statistics are first-party (German)",
    test: {
      file: "src/lib/security-headers.test.ts",
      name: "confines connect-src so a running script cannot exfiltrate",
    },
  },
  {
    match: "private unless you share it yourself",
    claim: "a record is private until the owner shares it",
    test: {
      file: "src/db/rls.integration.test.ts",
      name: "shows an owner only their own subjects",
    },
  },
  {
    match: "privat, solange du ihn nicht selbst freigibst",
    claim: "a record is private until the owner shares it (German)",
    test: {
      file: "src/db/rls.integration.test.ts",
      name: "shows an owner only their own subjects",
    },
  },
  {
    match: "Proof of consent",
    claim: "consent is recorded and reproducible",
    test: {
      file: "src/db/schema.invariants.test.ts",
      name: "records the rendered document hash, not just a version string",
    },
  },
  // --- shipping, not yet proven. Each names why and which phase proves it. ---
  {
    match: "within 24 hours",
    claim: "deletion removes account, entries and photos within 24 hours",
    unproven:
      "deleteAccount exists and is immediate, but nothing asserts the storage objects and rows are gone. Needs a test that deletes and then verifies absence — P4, once photos exist to delete.",
  },
  {
    match: "strictly necessary cookies",
    claim: "only strictly necessary cookies are set",
    unproven:
      "no test enumerates the cookies actually set. Asserting it needs a browser context — P10 Gate B hardening.",
  },
  {
    match: "not sold and not used for advertising",
    claim: "data is not sold or used for advertising",
    unproven:
      "a negative about intent, not a mechanism. The enforceable half is LEG-2 (no third-party processor named) and connect-src; both are checked. Listed so the claim is not silently unaccounted for.",
  },
  {
    match: "EU (Frankfurt)",
    claim: "data is held in the EU",
    unproven:
      "region is infrastructure configuration (vercel.json regions fra1, Supabase project region), not application behaviour. Verifiable only against the live project — belongs to Gate C release verification.",
  },
];

async function testExists(file, name) {
  const text = await readFile(join(ROOT, file), "utf8").catch(() => null);
  if (text === null) return { fileFound: false, nameFound: false };
  return { fileFound: true, nameFound: text.includes(name) };
}

const problems = [];
const unproven = [];
const proven = [];

const copyText = {};
for (const rel of COPY) {
  copyText[rel] = await readFile(join(ROOT, rel), "utf8").catch(() => "");
}
const allCopy = Object.values(copyText).join("\n");

for (const entry of CLAIMS) {
  const present = allCopy.includes(entry.match);
  if (!present) continue; // the claim is not currently shipped
  if (entry.unproven) {
    unproven.push(entry);
    continue;
  }
  const { fileFound, nameFound } = await testExists(
    entry.test.file,
    entry.test.name,
  );
  if (!fileFound) {
    problems.push(
      `claim "${entry.claim}" cites ${entry.test.file}, which does not exist`,
    );
  } else if (!nameFound) {
    problems.push(
      `claim "${entry.claim}" cites a test named "${entry.test.name}" in ${entry.test.file}, which no longer contains it`,
    );
  } else {
    proven.push(entry);
  }
}

/**
 * Unlisted-claim detection. Looks for promise-shaped language in privacy copy
 * that no registry entry accounts for. Deliberately a small, specific list
 * rather than a general-purpose claim detector - a vague heuristic here would
 * produce noise nobody reads, which is worse than a short list somebody
 * maintains.
 */
const PROMISE_SHAPES = [
  /\bnever\s+(?:stored|shared|sold|sent|transmitted|retained)\b/i,
  /\bno\s+(?:third[- ]party|external)\s+\w+\s+(?:is|are)\s+used\b/i,
  /\bwe\s+do\s+not\s+(?:store|share|sell|track)\b/i,
  /\bwird\s+niemals\b/i,
];
for (const [rel, text] of Object.entries(copyText)) {
  for (const shape of PROMISE_SHAPES) {
    const m = text.match(shape);
    if (!m) continue;
    const accounted = CLAIMS.some((c) => {
      const i = text.indexOf(c.match);
      return i >= 0 && Math.abs(i - (m.index ?? 0)) < 400;
    });
    if (!accounted) {
      problems.push(
        `${relative(ROOT, join(ROOT, rel))} contains an unregistered privacy promise: "${m[0]}" — add it to CLAIMS in this script with the test that proves it, or with a stated reason it is unproven`,
      );
    }
  }
}

if (problems.length) {
  console.error("\nCOPY-1 FAILED · privacy claim without a corresponding test\n");
  for (const p of problems) console.error(`  ${p}`);
  console.error(
    "\nPrivacy copy must never exceed the technical guarantee.\n",
  );
  process.exit(1);
}

console.log(
  `COPY-1 passed · ${proven.length} claim(s) proven by a named test, ${unproven.length} shipping unproven and listed`,
);
if (unproven.length) {
  console.log("");
  for (const u of unproven) {
    console.log(`  UNPROVEN · ${u.claim}`);
    console.log(`             ${u.unproven}`);
  }
}
