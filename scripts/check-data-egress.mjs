#!/usr/bin/env node
/**
 * Gates DEV-1 and PRIV-5 · plan §24.5 item 1 · the data-egress rule.
 *
 * PRIV-5 ("precise user location stored, logged or transmitted") is the same
 * check from the privacy register's side: the GPS patterns below are what make
 * it enforceable rather than aspirational.
 *
 * Corrected by Founder ruling: raw image bytes MAY transit over TLS to the
 * trusted first-party upload/normalization endpoint. The rule governs
 * RETENTION AND DISCLOSURE, not transit. What must never leave the device at
 * all is a short, specific list.
 *
 * This is a static check, and it is honest about what that can and cannot
 * prove. It catches the realistic mistake - a prohibited field named directly
 * in a log call, an event property map, a Storage key, or a request body - and
 * it cannot catch data laundered through a variable. The runtime half is the
 * exif_retained column, the metadata-stripping re-encode in the image pipeline
 * (Phase 4), and the RLS suite.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");

/**
 * Fields that must never leave the device.
 *
 * Each entry names the identifier pattern AND why it is prohibited, so a future
 * reader can tell a real violation from a false positive without guessing.
 */
const PROHIBITED = [
  {
    re: /\b(gpsLatitude|gpsLongitude|gpsAltitude|GPSLatitude|GPSLongitude|gps_latitude|gps_longitude)\b/,
    why: "precise GPS coordinates — no precise location becomes public by default",
  },
  {
    re: /\b(exifGps|exif_gps|gpsInfo|GPSInfo)\b/,
    why: "EXIF GPS block — prohibited from persistence outright",
  },
  {
    re: /\b(serialNumber|bodySerialNumber|lensSerialNumber|internalSerialNumber)\b/,
    why: "camera/lens identity — links a person's devices across records",
  },
  {
    re: /\bEVENTS_PEPPER\b/,
    why: "pseudonymization secret — leaking it makes every pseudonym reversible",
  },
  {
    re: /\b(SUPABASE_SECRET_KEY|SERVICE_ROLE_KEY|serviceRoleKey)\b/,
    why: "service-role key — full RLS bypass",
  },
  {
    re: /\brecipientEmail\b|\brecipient_email\b/,
    why: "unhashed share-recipient email — the allowlist stores a hash",
  },
];

/** Sinks that would send a value off the device or persist it. */
const SINKS = [
  { re: /console\.(log|info|warn|error|debug)\s*\(/, what: "a log call" },
  { re: /\bprops\s*:/, what: "an event property map" },
  { re: /\bstorageKey\b|\bnormalizedKey\b|\bderivativeKey\b|\.from\(\s*PHOTOS_BUCKET/, what: "a Storage object key" },
  { re: /\bfetch\s*\(|\bbody\s*:/, what: "a request body" },
];

/** Files permitted to NAME a prohibited identifier, with the reason. */
const ALLOWED = new Map([
  [
    "src/lib/env.ts",
    "declares EVENTS_PEPPER and SUPABASE_SECRET_KEY in the env schema; declaring is not emitting",
  ],
  [
    "src/lib/events.ts",
    "reads EVENTS_PEPPER to compute a pseudonym; the secret itself is never stored or logged",
  ],
  [
    "src/lib/supabase/admin.ts",
    "constructs the service-role client, which is its entire purpose",
  ],
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
  if (/\.test\.tsx?$/.test(rel)) continue;
  const text = await readFile(file, "utf8");
  const lines = text.split("\n");
  for (const [i, line] of lines.entries()) {
    // Comments describe the rule; they do not emit anything.
    const code = line.replace(/\/\/.*$/, "").replace(/^\s*\*.*$/, "");
    for (const p of PROHIBITED) {
      if (!p.re.test(code)) continue;
      if (ALLOWED.has(rel)) continue;
      const sink = SINKS.find((s) => s.re.test(code));
      violations.push({
        rel,
        line: i + 1,
        why: p.why,
        sink: sink ? sink.what : "a prohibited identifier",
      });
    }
  }
}

if (violations.length) {
  console.error("\nDEV-1 FAILED · data-egress rule\n");
  for (const v of violations) {
    console.error(`  ${v.rel}:${v.line}`);
    console.error(`    ${v.sink} references ${v.why}`);
  }
  console.error(
    "\nThese fields must never leave the device. If the reference is legitimate,",
  );
  console.error(
    "add the file to the allowlist in scripts/check-data-egress.mjs WITH a reason.\n",
  );
  process.exit(1);
}
console.log(
  `DEV-1 passed · ${PROHIBITED.length} prohibited field patterns, ${ALLOWED.size} documented exceptions, no undeclared egress`,
);
