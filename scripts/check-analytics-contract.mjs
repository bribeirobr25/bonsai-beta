#!/usr/bin/env node
/**
 * Gates ANA-1, ANA-2 and TEL-1.
 *
 * ANA-1 · "free text, image bytes, filenames or precise location in an
 *          analytics property". An event property is the one place where
 *          content leaks by accident rather than by decision: someone adds
 *          `props: { note }` to debug something and the note body is now in the
 *          evidence table forever. Quantities must travel as bucketed ranges
 *          defined at the emitter, never raw.
 *
 * ANA-2 · "a validation threshold present in product code". Thresholds belong
 *          to the evidence protocol, not to the product. A KILL/PARK band or a
 *          G1/G2 number compiled into the app means the app is scoring itself,
 *          which is how a product starts optimising for its own metric instead
 *          of recording behaviour. Strategy's F0 bands (n=8, 0/8, 1/8, >=2/8)
 *          are the specific numbers that must stay out.
 *
 * TEL-1 · "legitimate-interest telemetry collecting without recorded legal
 *          approval". Checked STRUCTURALLY ONLY, and this is a real limit
 *          rather than a caveat: the gate must exist, must default to false,
 *          and must require the approval record.
 *
 *          What it CANNOT check is that the gate is APPLIED. The pre-merge
 *          audit found telemetryMayCollect() is called by nothing but its own
 *          test — because the tier-1 legitimate-interest emission path does not
 *          exist yet, so there is nothing to gate. "Built inert" is the plan's
 *          own wording for that state.
 *
 *          The application half goes live with the T1 layer, and this check
 *          must be extended then. A guard nobody invokes is not enforcement,
 *          and a check that reports otherwise is worse than no check.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");

/** Identifiers that must never appear inside an analytics property map. */
const FORBIDDEN_IN_PROPS = [
  { re: /\bnote(Raw|Structured)?\b/, why: "free text from a user's note" },
  { re: /\bacquisitionContext\b/, why: "free text from the user" },
  { re: /\b(fileName|filename|originalName)\b/, why: "a filename, which often carries a person's name or device" },
  { re: /\b(buffer|bytes|blob|arrayBuffer)\b/, why: "image bytes" },
  { re: /\b(latitude|longitude|coords|coordinates)\b/, why: "precise location" },
  { re: /\bemail\b/, why: "an email address" },
  { re: /\b(speciesTextRaw)\b/, why: "unstructured user-entered text" },
];

/**
 * Evidence-protocol numbers that must not be compiled into the product.
 * Sourced from plan §21.2 (Strategy ruling on OI-24) and W2 G1/G2.
 */
const FORBIDDEN_THRESHOLDS = [
  { re: /\bKILL_?PARK\b|\bSURVIVES_?CHEAP\b/i, why: "an F0 verdict band" },
  { re: /\bF0_(SAMPLE|LIMIT|BAND)\b/i, why: "an F0 sample or band constant" },
  { re: /\bG1_STRONG\b|\bG2_STRONG\b/i, why: "a W2 confirmatory threshold" },
  { re: /\bqualifiedThreshold\b|\bpainThreshold\b/i, why: "a qualification threshold" },
];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(ts|tsx)$/.test(entry.name)) yield full;
  }
}

/** Extract the text of every `props: { ... }` literal, shallowly. */
function propsLiterals(text) {
  const out = [];
  const re = /\bprops\s*:\s*\{/g;
  // The match object is unused: only the index after `props: {` matters, and
  // re.lastIndex carries it.
  while (re.exec(text) !== null) {
    let depth = 1;
    let i = re.lastIndex;
    while (i < text.length && depth > 0) {
      if (text[i] === "{") depth++;
      else if (text[i] === "}") depth--;
      i++;
    }
    out.push(text.slice(re.lastIndex, i - 1));
  }
  return out;
}

const violations = [];
for await (const file of walk(SRC)) {
  const rel = relative(ROOT, file);
  if (/\.test\.tsx?$/.test(rel)) continue;
  const text = await readFile(file, "utf8");

  // ANA-1
  for (const literal of propsLiterals(text)) {
    const code = literal.replace(/\/\/.*$/gm, "");
    for (const f of FORBIDDEN_IN_PROPS) {
      if (f.re.test(code)) {
        violations.push({
          gate: "ANA-1",
          rel,
          detail: `an analytics property carries ${f.why}`,
        });
      }
    }
  }

  // ANA-2
  const code = text.replace(/\/\/.*$/gm, "").replace(/^\s*\*.*$/gm, "");
  for (const f of FORBIDDEN_THRESHOLDS) {
    if (f.re.test(code)) {
      violations.push({
        gate: "ANA-2",
        rel,
        detail: `product code contains ${f.why} — thresholds belong to the evidence protocol`,
      });
    }
  }
}

// TEL-1, structural
const envText = await readFile(join(SRC, "lib/env.ts"), "utf8");
const gateText = await readFile(
  join(SRC, "lib/telemetry-activation.ts"),
  "utf8",
).catch(() => "");
if (!/TELEMETRY_LEGITIMATE_INTEREST_ENABLED/.test(envText)) {
  violations.push({
    gate: "TEL-1",
    rel: "src/lib/env.ts",
    detail: "no legitimate-interest activation flag exists",
  });
} else if (!/\.default\("false"\)/.test(envText)) {
  violations.push({
    gate: "TEL-1",
    rel: "src/lib/env.ts",
    detail: "the activation flag does not default to false — it must not be able to default on",
  });
}
if (!/LEGAL_APPROVAL_MARKER/.test(gateText)) {
  violations.push({
    gate: "TEL-1",
    rel: "src/lib/telemetry-activation.ts",
    detail: "activation does not require a recorded legal approval",
  });
}

if (violations.length) {
  console.error("\nANALYTICS CONTRACT FAILED\n");
  for (const v of violations) {
    console.error(`  [${v.gate}] ${v.rel}`);
    console.error(`    ${v.detail}`);
  }
  console.error("");
  process.exit(1);
}
console.log(
  `ANA-1 / ANA-2 passed · ${FORBIDDEN_IN_PROPS.length} forbidden property patterns, ${FORBIDDEN_THRESHOLDS.length} forbidden threshold patterns`,
);
console.log(
  "TEL-1 partial · activation gate present and defaults off; APPLICATION not verifiable until a T1 emission path exists (see the header note)",
);
