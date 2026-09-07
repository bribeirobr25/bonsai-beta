/**
 * Seeds the 110 legacy species identities at `normalized` (plan Part 9,
 * Phase 0; Part 5.6). Idempotent: existing slugs are never overwritten, so a
 * reviewed record can never be regressed by re-running the seed.
 *
 *   DATABASE_URL=... pnpm seed:species
 */
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { bonsaiSpecies } from "../docs/04-evidence/legacy/bonsaiData";
import * as schema from "../src/db/schema";
import {
  normalizeClimate,
  normalizeScientificName,
  normalizeTemperature,
  slugify,
  splitCommonNames,
} from "../src/lib/legacy/normalize";

const RUN_ID = `seed-legacy-${new Date().toISOString().slice(0, 10)}`;
const ACTOR = "seed:legacy-bonsaiData.ts";

async function main() {
  const url = process.env.DATABASE_URL ?? "postgresql://postgres:postgres@127.0.0.1:54322/postgres";
  const sql = postgres(url, { prepare: false, max: 1 });
  const db = drizzle(sql, { schema });

  const seen = new Map<string, string>();
  const skipped: Array<{ id: string; duplicateOf: string }> = [];
  let inserted = 0;
  let existing = 0;
  let aliases = 0;
  let techniqueRows = 0;
  let speciesTechniqueRows = 0;
  let fieldSourceRows = 0;
  let validTemp = 0;
  let enumClimate = 0;

  const techniqueKeys = new Map<string, string>();
  for (const s of bonsaiSpecies) for (const t of s.techniques) {
    const key = slugify(t.name);
    if (!techniqueKeys.has(key)) techniqueKeys.set(key, t.name);
  }
  for (const [key, name] of techniqueKeys) {
    const r = await db
      .insert(schema.techniques)
      .values({ key, namesByLocale: { en: name }, status: "legacy_raw" })
      .onConflictDoNothing()
      .returning({ key: schema.techniques.key });
    techniqueRows += r.length;
  }

  for (const s of bonsaiSpecies) {
    const acceptedName = normalizeScientificName(s.scientificName);
    const dupKey = acceptedName.toLowerCase();
    if (seen.has(dupKey)) {
      skipped.push({ id: s.id, duplicateOf: seen.get(dupKey)! });
      continue;
    }
    seen.set(dupKey, s.id);

    const temp = normalizeTemperature(s.temperatureMin, s.temperatureMax);
    const climate = normalizeClimate(s.climate);
    if (temp) validTemp += 1;
    if (climate.length) enumClimate += 1;
    const commonNames = splitCommonNames(s.commonName);

    const rows = await db
      .insert(schema.species)
      .values({
        slug: s.id,
        legacyId: s.id,
        acceptedName,
        family: s.group || null,
        namesByLocale: { en: commonNames },
        climate,
        position: s.position || null,
        sun: s.sunExposure || null,
        leafType: s.leafType || null,
        flowering: s.flowering || null,
        nativeRegion: s.nativeRegion || null,
        temperatureMinC: temp?.min ?? null,
        temperatureMaxC: temp?.max ?? null,
        status: "normalized",
        confidence: "legacy",
        publicationEligible: false,
        version: 1,
      })
      .onConflictDoNothing({ target: schema.species.slug })
      .returning({ id: schema.species.id });
    if (!rows.length) {
      existing += 1;
      continue;
    }
    inserted += 1;
    const speciesId = rows[0].id;

    if (commonNames.length) {
      const r = await db
        .insert(schema.speciesAliases)
        .values(commonNames.map((name) => ({ speciesId, name, kind: "common_en" as const, source: "legacy" })))
        .onConflictDoNothing()
        .returning({ id: schema.speciesAliases.id });
      aliases += r.length;
    }

    // Every legacy value is recorded as a field source, including the ones
    // that did not pass normalisation, so the founder sees legacy beside researched.
    const legacyFields: Record<string, unknown> = {
      scientificName: s.scientificName,
      commonName: s.commonName,
      group: s.group,
      temperatureMin: s.temperatureMin,
      temperatureMax: s.temperatureMax,
      sunExposure: s.sunExposure,
      position: s.position,
      leafType: s.leafType,
      climate: s.climate,
      flowering: s.flowering,
      nativeRegion: s.nativeRegion,
      difficultyLevel: s.difficultyLevel,
      category: s.category ?? null,
      bonsaiStyles: s.bonsaiStyles,
      "careTips.general": s.careTips?.general,
      "careTips.soilType": s.careTips?.soilType,
      "careTips.feeding": s.careTips?.feeding,
      "careTips.watering": s.careTips?.watering,
    };
    const fs = await db
      .insert(schema.fieldSources)
      .values(
        Object.entries(legacyFields).map(([field, value]) => ({
          recordType: "species" as const,
          recordId: speciesId,
          field,
          value: value === undefined ? null : (value as never),
          sourceUrl: null,
          quote: null,
          confidence: "legacy",
          runId: RUN_ID,
        })),
      )
      .returning({ id: schema.fieldSources.id });
    fieldSourceRows += fs.length;

    if (s.techniques.length) {
      const st = await db
        .insert(schema.speciesTechniques)
        .values(
          s.techniques.map((t) => ({
            speciesId,
            techniqueKey: slugify(t.name),
            locale: "en" as const,
            description: t.description || null,
            timingRaw: t.timing || null,
            maturityRaw: t.maturityStage || null,
            contraindication: { notRecommended: Boolean(t.notRecommended) },
            status: "legacy_raw" as const,
            confidence: "legacy",
            publicationEligible: false,
          })),
        )
        .onConflictDoNothing()
        .returning({ id: schema.speciesTechniques.id });
      speciesTechniqueRows += st.length;
    }

    await db.insert(schema.contentVersions).values({
      recordType: "species",
      recordId: speciesId,
      version: 1,
      diff: { from: "legacy_raw", to: "normalized", fields: ["identity", "environment"], techniques: "legacy_raw" },
      actor: ACTOR,
    });
  }

  await sql.end();
  console.log(
    JSON.stringify(
      {
        run_id: RUN_ID,
        legacy_records: bonsaiSpecies.length,
        unique_names: seen.size,
        skipped_duplicates: skipped,
        species_inserted: inserted,
        species_already_present: existing,
        aliases_inserted: aliases,
        techniques_inserted: techniqueRows,
        species_techniques_inserted: speciesTechniqueRows,
        field_sources_inserted: fieldSourceRows,
        valid_temperature_ranges: validTemp,
        enum_climate_values: enumClimate,
      },
      null,
      2,
    ),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
