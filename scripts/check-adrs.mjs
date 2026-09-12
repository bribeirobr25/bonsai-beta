#!/usr/bin/env node
/**
 * Architecture Decision Records · Founder ruling OI-46.
 *
 * Bidirectional, like JOB-1 and for the same reason: an index listing a record
 * that does not exist reads as coverage, and a record missing from the index is
 * a decision nobody can find. Both directions fail.
 *
 * Also asserts every record carries a "Triggers to reconsider" section. That is
 * the entire point of the format - canon requires the beta stay REVERSIBLE, and
 * a decision with no named revisit condition is reversible by accident rather
 * than on purpose. An ADR without a trigger is a note.
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const DIR = "docs/06-implementation/adr";
const INDEX = join(DIR, "README.md");

const files = (await readdir(join(ROOT, DIR)))
  .filter((f) => /^\d{3}-.*\.md$/.test(f))
  .sort();
const indexText = await readFile(join(ROOT, INDEX), "utf8");

/** Rows look like: | [001](001-single-nextjs-app.md) | Decision | Status | */
const linked = [...indexText.matchAll(/\|\s*\[(\d{3})\]\(([^)]+)\)\s*\|/g)].map(
  (m) => ({ id: m[1], file: m[2] }),
);

const problems = [];

for (const { id, file } of linked) {
  if (!files.includes(file)) {
    problems.push(`${INDEX} links ${file} (ADR-${id}), which does not exist`);
  }
}
for (const file of files) {
  if (!linked.some((l) => l.file === file)) {
    problems.push(
      `${DIR}/${file} exists but is not listed in the index — a decision nobody can find`,
    );
  }
}

for (const file of files) {
  const text = await readFile(join(ROOT, DIR, file), "utf8");
  if (!/^## Triggers to reconsider/m.test(text)) {
    problems.push(
      `${DIR}/${file} has no "Triggers to reconsider" section — without one it is a note, not an ADR`,
    );
  }
  if (!/^\*\*Status:\*\*/m.test(text)) {
    problems.push(`${DIR}/${file} has no Status line`);
  }
  // A record that claims canon authority has the hierarchy backwards.
  if (!/subordinate to `docs\/01-canon\/`/.test(text)) {
    problems.push(
      `${DIR}/${file} does not state it is subordinate to canon — an ADR records what implementation decided, it does not outrank an authority`,
    );
  }
}

// Numbering must be gapless, so a missing record is visible rather than assumed.
const ids = files.map((f) => Number(f.slice(0, 3)));
for (let i = 0; i < ids.length; i++) {
  if (ids[i] !== i + 1) {
    problems.push(
      `ADR numbering has a gap or duplicate at position ${i + 1}: found ${String(ids[i]).padStart(3, "0")}`,
    );
    break;
  }
}

if (problems.length) {
  console.error("\nADR check FAILED\n");
  for (const p of problems) console.error(`  ${p}`);
  console.error("");
  process.exit(1);
}
console.log(
  `ADR check passed · ${files.length} records, index and files agree, every record has triggers`,
);
