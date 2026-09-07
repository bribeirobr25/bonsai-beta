/**
 * Bar-Bonsai · schema v1 (W6-SANDBOX-PLAN-v0.4 Part 11, "needed now").
 *
 * Migration-trap rules applied: tree id independent of the owner; moments
 * reference the tree; species confidence from day one; dates carry precision;
 * corrections append (moments.superseded_by); content and fields are versioned
 * with sources (field_sources, content_versions).
 *
 * The deployed app talks to Postgres through the pooler with the service role,
 * so ownership is enforced in the data-access layer. RLS policies exist as
 * defence in depth for any path that uses the anon / authenticated roles
 * (Supabase REST, Storage).
 */
import { sql } from "drizzle-orm";
import {
  type AnyPgColumn,
  boolean,
  date,
  index,
  integer,
  jsonb,
  numeric,
  pgEnum,
  pgPolicy,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";
import { anonRole, authUsers, authenticatedRole } from "drizzle-orm/supabase";

// ---------------------------------------------------------------- enums

export const localeEnum = pgEnum("locale", ["de", "en"]);
export const cohortEnum = pgEnum("cohort", [
  "L2_fragmented",
  "L2_coherent",
  "workshop",
  "explore",
  "share_recipient",
  "direct",
]);
export const stratumEnum = pgEnum("stratum", ["fragmented", "coherent", "na"]);
export const promptedEnum = pgEnum("prompted", ["none", "researcher"]);
export const speciesConfidenceEnum = pgEnum("species_confidence", [
  "unknown",
  "probable",
  "confirmed",
]);
export const datePrecisionEnum = pgEnum("date_precision", [
  "exact",
  "month",
  "year",
  "unknown",
]);
export const createdViaEnum = pgEnum("created_via", [
  "workshop",
  "explore",
  "direct",
  "share",
]);
export const momentTypeEnum = pgEnum("moment_type", [
  "acquired",
  "photo",
  "repotted",
  "pruned",
  "wired",
  "styled",
  "health",
  "other",
]);
export const momentSourceEnum = pgEnum("moment_source", ["import", "manual"]);
export const takenAtSourceEnum = pgEnum("taken_at_source", [
  "exif",
  "file",
  "user",
  "unknown",
]);
export const contentStatusEnum = pgEnum("content_status", [
  "legacy_raw",
  "ai_draft",
  "normalized",
  "review_required",
  "practitioner_reviewed",
  "published",
  "withdrawn",
]);
export const aliasKindEnum = pgEnum("alias_kind", [
  "synonym",
  "common_de",
  "common_en",
  "cultivar",
]);
export const researchTriggerEnum = pgEnum("research_trigger", [
  "lookup_miss",
  "founder",
  "backfill",
]);
export const researchStatusEnum = pgEnum("research_status", [
  "queued",
  "resolving",
  "ambiguous",
  "researching",
  "drafted",
  "failed",
]);
export const contactKindEnum = pgEnum("contact_kind", [
  "message",
  "call",
  "day0",
  "day8",
  "other",
]);
export const recordTypeEnum = pgEnum("record_type", [
  "species",
  "technique",
  "species_technique",
  "tree",
]);

const createdAt = () =>
  timestamp("created_at", { withTimezone: true }).notNull().defaultNow();

// ---------------------------------------------------------------- people

export const users = pgTable(
  "users",
  {
    id: uuid("id")
      .primaryKey()
      .references(() => authUsers.id, { onDelete: "cascade" }),
    email: text("email").notNull(),
    locale: localeEnum("locale").notNull().default("de"),
    consentVersion: text("consent_version").notNull(),
    consentAt: timestamp("consent_at", { withTimezone: true }).notNull(),
    termsAck: boolean("terms_ack").notNull(),
    researchConsent: boolean("research_consent").notNull().default(false),
    researchConsentWithdrawnAt: timestamp("research_consent_withdrawn_at", {
      withTimezone: true,
    }),
    cohort: cohortEnum("cohort").notNull().default("direct"),
    source: text("source"),
    stratum: stratumEnum("stratum").notNull().default("na"),
    isAdmin: boolean("is_admin").notNull().default(false),
    createdAt: createdAt(),
  },
  (t) => [
    pgPolicy("users_select_own", {
      for: "select",
      to: authenticatedRole,
      using: sql`${t.id} = auth.uid()`,
    }),
    pgPolicy("users_update_own", {
      for: "update",
      to: authenticatedRole,
      using: sql`${t.id} = auth.uid()`,
      withCheck: sql`${t.id} = auth.uid()`,
    }),
  ],
).enableRLS();

export const researcherContacts = pgTable(
  "researcher_contacts",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    kind: contactKindEnum("kind").notNull(),
    at: timestamp("at", { withTimezone: true }).notNull().defaultNow(),
    note: text("note"),
  },
  (t) => [index("researcher_contacts_user_at_idx").on(t.userId, t.at)],
).enableRLS();

// ---------------------------------------------------------------- knowledge

export const species = pgTable(
  "species",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slug: text("slug").notNull(),
    legacyId: text("legacy_id"),
    gbifKey: integer("gbif_key"),
    acceptedName: text("accepted_name").notNull(),
    family: text("family"),
    namesByLocale: jsonb("names_by_locale")
      .$type<Partial<Record<"de" | "en", string[]>>>()
      .notNull()
      .default({}),
    climate: text("climate").array().notNull().default([]),
    position: text("position"),
    sun: text("sun"),
    leafType: text("leaf_type"),
    flowering: text("flowering"),
    nativeRegion: text("native_region"),
    temperatureMinC: integer("temperature_min_c"),
    temperatureMaxC: integer("temperature_max_c"),
    descriptionByLocale: jsonb("description_by_locale").$type<
      Partial<Record<"de" | "en", string>>
    >(),
    status: contentStatusEnum("status").notNull().default("legacy_raw"),
    reviewedBy: uuid("reviewed_by"),
    reviewedAt: timestamp("reviewed_at", { withTimezone: true }),
    version: integer("version").notNull().default(1),
    confidence: text("confidence"),
    publicationEligible: boolean("publication_eligible").notNull().default(false),
    createdAt: createdAt(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    uniqueIndex("species_slug_key").on(t.slug),
    index("species_accepted_name_idx").on(t.acceptedName),
    pgPolicy("species_public_read", {
      for: "select",
      to: [anonRole, authenticatedRole],
      using: sql`${t.status} = 'published'`,
    }),
  ],
).enableRLS();

export const speciesAliases = pgTable(
  "species_aliases",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    speciesId: uuid("species_id")
      .notNull()
      .references(() => species.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    kind: aliasKindEnum("kind").notNull(),
    source: text("source"),
    createdAt: createdAt(),
  },
  (t) => [
    uniqueIndex("species_aliases_unique").on(t.speciesId, t.name, t.kind),
    index("species_aliases_name_idx").on(t.name),
  ],
).enableRLS();

export const techniques = pgTable(
  "techniques",
  {
    key: text("key").primaryKey(),
    namesByLocale: jsonb("names_by_locale")
      .$type<Partial<Record<"de" | "en", string>>>()
      .notNull()
      .default({}),
    descriptionByLocale: jsonb("description_by_locale").$type<
      Partial<Record<"de" | "en", string>>
    >(),
    status: contentStatusEnum("status").notNull().default("legacy_raw"),
    version: integer("version").notNull().default(1),
    publicationEligible: boolean("publication_eligible").notNull().default(false),
    createdAt: createdAt(),
  },
  (t) => [
    pgPolicy("techniques_public_read", {
      for: "select",
      to: [anonRole, authenticatedRole],
      using: sql`${t.status} = 'published'`,
    }),
  ],
).enableRLS();

export const speciesTechniques = pgTable(
  "species_techniques",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    speciesId: uuid("species_id")
      .notNull()
      .references(() => species.id, { onDelete: "cascade" }),
    techniqueKey: text("technique_key")
      .notNull()
      .references(() => techniques.key, { onDelete: "cascade" }),
    locale: localeEnum("locale").notNull().default("en"),
    description: text("description"),
    timingRaw: text("timing_raw"),
    timingTrigger: text("timing_trigger"),
    maturityRaw: text("maturity_raw"),
    maturity: text("maturity"),
    contraindication: jsonb("contraindication").$type<{
      notRecommended?: boolean;
      reason?: string;
    }>(),
    status: contentStatusEnum("status").notNull().default("legacy_raw"),
    reviewedBy: uuid("reviewed_by"),
    reviewedAt: timestamp("reviewed_at", { withTimezone: true }),
    version: integer("version").notNull().default(1),
    confidence: text("confidence"),
    publicationEligible: boolean("publication_eligible").notNull().default(false),
    createdAt: createdAt(),
  },
  (t) => [
    uniqueIndex("species_techniques_unique").on(
      t.speciesId,
      t.techniqueKey,
      t.locale,
    ),
    pgPolicy("species_techniques_public_read", {
      for: "select",
      to: [anonRole, authenticatedRole],
      using: sql`${t.status} = 'published'`,
    }),
  ],
).enableRLS();

export const fieldSources = pgTable(
  "field_sources",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    recordType: recordTypeEnum("record_type").notNull(),
    recordId: text("record_id").notNull(),
    field: text("field").notNull(),
    value: jsonb("value"),
    sourceUrl: text("source_url"),
    quote: text("quote"),
    confidence: text("confidence"),
    runId: text("run_id"),
    createdAt: createdAt(),
  },
  (t) => [index("field_sources_record_idx").on(t.recordType, t.recordId)],
).enableRLS();

export const speciesResearchJobs = pgTable(
  "species_research_jobs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    requestedName: text("requested_name").notNull(),
    speciesId: uuid("species_id").references(() => species.id, {
      onDelete: "set null",
    }),
    trigger: researchTriggerEnum("trigger").notNull(),
    status: researchStatusEnum("status").notNull().default("queued"),
    costUsd: numeric("cost_usd", { precision: 10, scale: 4 }),
    model: text("model"),
    requestedBy: uuid("requested_by"),
    log: jsonb("log")
      .$type<Array<{ at: string; step: string; detail?: string }>>()
      .notNull()
      .default([]),
    createdAt: createdAt(),
    finishedAt: timestamp("finished_at", { withTimezone: true }),
  },
  (t) => [index("species_research_jobs_status_idx").on(t.status, t.createdAt)],
).enableRLS();

export const contentVersions = pgTable(
  "content_versions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    recordType: recordTypeEnum("record_type").notNull(),
    recordId: text("record_id").notNull(),
    version: integer("version").notNull(),
    diff: jsonb("diff"),
    actor: text("actor").notNull(),
    at: timestamp("at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("content_versions_record_idx").on(t.recordType, t.recordId)],
).enableRLS();

// ---------------------------------------------------------------- trees

export const trees = pgTable(
  "trees",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    ownerId: uuid("owner_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    name: text("name"),
    speciesId: uuid("species_id").references(() => species.id, {
      onDelete: "set null",
    }),
    speciesTextRaw: text("species_text_raw"),
    speciesConfidence: speciesConfidenceEnum("species_confidence")
      .notNull()
      .default("unknown"),
    acquiredOn: date("acquired_on"),
    acquiredPrecision: datePrecisionEnum("acquired_precision")
      .notNull()
      .default("unknown"),
    acquisitionContext: text("acquisition_context"),
    coverPhotoId: uuid("cover_photo_id").references(
      (): AnyPgColumn => photos.id,
      { onDelete: "set null" },
    ),
    createdVia: createdViaEnum("created_via").notNull().default("direct"),
    createdAt: createdAt(),
  },
  (t) => [
    index("trees_owner_idx").on(t.ownerId),
    pgPolicy("trees_owner_all", {
      for: "all",
      to: authenticatedRole,
      using: sql`${t.ownerId} = auth.uid()`,
      withCheck: sql`${t.ownerId} = auth.uid()`,
    }),
  ],
).enableRLS();

export const moments = pgTable(
  "moments",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    treeId: uuid("tree_id")
      .notNull()
      .references(() => trees.id, { onDelete: "cascade" }),
    type: momentTypeEnum("type").notNull(),
    occurredOn: date("occurred_on").notNull(),
    occurredPrecision: datePrecisionEnum("occurred_precision")
      .notNull()
      .default("exact"),
    noteRaw: text("note_raw"),
    noteStructured: jsonb("note_structured").$type<Record<string, unknown>>(),
    source: momentSourceEnum("source").notNull().default("manual"),
    aiSuggested: boolean("ai_suggested").notNull().default(false),
    aiEdited: boolean("ai_edited").notNull().default(false),
    supersededBy: uuid("superseded_by").references(
      (): AnyPgColumn => moments.id,
      { onDelete: "set null" },
    ),
    createdAt: createdAt(),
  },
  (t) => [
    index("moments_tree_occurred_idx").on(t.treeId, t.occurredOn),
    pgPolicy("moments_owner_all", {
      for: "all",
      to: authenticatedRole,
      using: sql`exists (select 1 from trees where trees.id = ${t.treeId} and trees.owner_id = auth.uid())`,
      withCheck: sql`exists (select 1 from trees where trees.id = ${t.treeId} and trees.owner_id = auth.uid())`,
    }),
  ],
).enableRLS();

export const photos = pgTable(
  "photos",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    momentId: uuid("moment_id")
      .notNull()
      .references(() => moments.id, { onDelete: "cascade" }),
    storageKey: text("storage_key").notNull(),
    takenAt: timestamp("taken_at", { withTimezone: true }),
    takenAtSource: takenAtSourceEnum("taken_at_source")
      .notNull()
      .default("unknown"),
    width: integer("width"),
    height: integer("height"),
    bytes: integer("bytes"),
    createdAt: createdAt(),
  },
  (t) => [
    index("photos_moment_idx").on(t.momentId),
    pgPolicy("photos_owner_all", {
      for: "all",
      to: authenticatedRole,
      using: sql`exists (select 1 from moments join trees on trees.id = moments.tree_id where moments.id = ${t.momentId} and trees.owner_id = auth.uid())`,
      withCheck: sql`exists (select 1 from moments join trees on trees.id = moments.tree_id where moments.id = ${t.momentId} and trees.owner_id = auth.uid())`,
    }),
  ],
).enableRLS();

export const shareLinks = pgTable(
  "share_links",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    treeId: uuid("tree_id")
      .notNull()
      .references(() => trees.id, { onDelete: "cascade" }),
    token: text("token").notNull(),
    createdAt: createdAt(),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
  },
  (t) => [
    uniqueIndex("share_links_token_key").on(t.token),
    pgPolicy("share_links_owner_all", {
      for: "all",
      to: authenticatedRole,
      using: sql`exists (select 1 from trees where trees.id = ${t.treeId} and trees.owner_id = auth.uid())`,
      withCheck: sql`exists (select 1 from trees where trees.id = ${t.treeId} and trees.owner_id = auth.uid())`,
    }),
  ],
).enableRLS();

// ---------------------------------------------------------------- evidence

/**
 * First-party event log (Part 7 taxonomy). Written only when the user's
 * research consent is true at the time of the event; anonymous visitor events
 * carry no identifier at all. `pseudonym` is a peppered hash of the user id so
 * withdrawal or deletion can null `user_id` while sequences stay analysable.
 */
export const events = pgTable(
  "events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
    pseudonym: text("pseudonym"),
    anonId: text("anon_id"),
    name: text("name").notNull(),
    props: jsonb("props").$type<Record<string, unknown>>().notNull().default({}),
    cohort: cohortEnum("cohort"),
    source: text("source"),
    locale: localeEnum("locale"),
    sessionId: text("session_id"),
    prompted: promptedEnum("prompted").notNull().default("none"),
    occurredAt: timestamp("occurred_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    index("events_name_occurred_idx").on(t.name, t.occurredAt),
    index("events_pseudonym_idx").on(t.pseudonym),
  ],
).enableRLS();

/** Touched daily by /api/keepalive so the free Supabase project is never idle 7 days. */
export const keepalive = pgTable("keepalive", {
  id: integer("id").primaryKey(),
  lastPing: timestamp("last_ping", { withTimezone: true }).notNull().defaultNow(),
}).enableRLS();

export type User = typeof users.$inferSelect;
export type Species = typeof species.$inferSelect;
export type Tree = typeof trees.$inferSelect;
export type Moment = typeof moments.$inferSelect;
export type EventRow = typeof events.$inferSelect;
