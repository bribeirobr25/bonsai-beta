/**
 * Bonsai · schema v2 foundation (migration M1).
 *
 * Authority: docs/01-canon/ - Strategy Canon v1.1.2 DOMAIN-MODEL.md for the
 * structural model, W7 Product/UIUX v1.1.2 for surfaces, and
 * docs/06-implementation/BONSAI_FINAL_PHASED_IMPLEMENTATION_PLAN.md sections 13
 * and 15 for the migration and schema maps. Enum values below are taken from
 * canon, never invented; where canon reserves a field without constraining it,
 * it is typed as reserved text rather than guessed into an enum.
 *
 * Migration-trap rules applied: subject id independent of the owner; moments
 * reference the tree; species confidence from day one; dates carry precision;
 * corrections append (moments.superseded_by); content and fields are versioned
 * with sources (field_sources, content_versions).
 *
 * RLS-FIRST, and this is a change from v1. v1 talked to Postgres through the
 * pooler with the service role and enforced ownership in the data-access layer,
 * with RLS as defence in depth. v2 inverts that: RLS is THE enforcement layer,
 * across three separated paths -
 *
 *   public `anon`            public reads only, gated on publication_state
 *   owner `authenticated`    JWT-scoped, auth.uid() predicates
 *   privileged service role  migrations, seed, cron and admin only
 *
 * A query that only works with the service role is a bug, not a shortcut.
 * Policies are proven by sabotage: delete the policy, confirm the test fails.
 * See plan section 16 for the eight-step rollout.
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

/**
 * Four UI locales per Gate A OI-06. `en` is default and fallback; the default
 * flip on users.locale and the routing/family-matching work belong to Phase 2,
 * so only the enum domain widens here.
 */
export const localeEnum = pgEnum("locale", ["de", "en", "es", "pt-BR"]);
export const cohortEnum = pgEnum("cohort", [
  "L2_fragmented",
  "L2_coherent",
  "workshop",
  "explore",
  "share_recipient",
  "direct",
]);
/**
 * RETIRED as authority by M1, physically dropped by M1b.
 *
 * Stratification is an evidence-protocol concern, not a property of a person,
 * and W4's cohort plus qualification_rule_version carry it without freezing a
 * label onto a row. M1 makes the column nullable and defaultless so nothing new
 * populates it; M1b drops column and type together once no reader remains.
 */
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

// ------------------------------------------------- schema v2 (M1) enums

/**
 * Knowledge publication state. Three values, enforced in the DATABASE and per
 * locale - a frontend error must not be able to leak unreviewed content, and an
 * "Unverified" badge is not a publication mechanism. Derived, not hand-set:
 * publication_state is a GENERATED column over content_status, so no code path
 * can publish a row by writing to it. Gate PUB-1.
 */
export const publicationStateEnum = pgEnum("publication_state", [
  "PUBLIC_APPROVED",
  "INTERNAL_DRAFT_UNVERIFIED",
  "UNAVAILABLE",
]);

/**
 * DOMAIN-MODEL section 7: "Status · Alive | Deceased | Unknown".
 *
 * `unknown` is load-bearing and not a placeholder - trees are lost track of, not
 * only lost. And death does NOT close the record: status moves to `deceased`
 * while the Journey persists and stays discoverable (section 7.8).
 */
export const subjectStatusEnum = pgEnum("subject_status", [
  "alive",
  "deceased",
  "unknown",
]);

/**
 * DOMAIN-MODEL section 7.13: a LIVING SUBJECT is a TREE or a COMPOSITION.
 * Forest, raft and group plantings are compositions. Externally the product
 * still says "tree" - nobody should have to read an ER diagram to water a
 * bonsai. Composition members arrive with M1b; the kind is recorded now so the
 * distinction never has to be back-filled.
 */
export const subjectKindEnum = pgEnum("subject_kind", ["tree", "composition"]);

/**
 * Moment taxonomy is three dimensions, not one enum (plan section 2.6). The
 * legacy 8-value moment_type is retired as AUTHORITY - it stays on the table as
 * legacy data until M1b backfills.
 *
 * Dimension 1: is this an Event (something happened at a time) or a State
 * (something was true over a period)? DOMAIN-MODEL keeps Event and State
 * distinct because an observed outcome is not an attributed cause.
 */
export const momentKindEnum = pgEnum("moment_kind", ["event", "state"]);

/** Dimension 2, optional. A photo is MEDIA, not a category. */
export const momentCategoryEnum = pgEnum("moment_category", [
  "acquisition",
  "work",
  "observation",
  "health",
  "milestone",
  "other",
]);

/**
 * How a Moment or action came to exist · **W7 §28.5**.
 *
 * These six values ARE canon. When M1 typed `moments.origin` as reserved text
 * the comment claimed "canon does not yet enumerate" - that was wrong for
 * origin, and the error is corrected here rather than left in place. W7 §28.5
 * lists exactly these under `moment_created` properties.
 *
 * The distinction that survives, and it matters: W7 gives the VALUES but
 * defers the RULES. §28.5 says "exact origin classification rules may be
 * finalized as embedded beta instrumentation rules", and §29 marks the related
 * return classification "DEFINE ONLY WHEN A SPECIFIC TEST REQUIRES IT". So the
 * enum is safe to declare; deciding when a given action counts as
 * `reminder_assisted` rather than `spontaneous` belongs to the evidence
 * protocol and must not be invented in product code (gate ANA-2).
 *
 * `unknown` is the default for that reason. W7 is explicit that the product
 * "must not infer voluntary merely because a user opened the app", so an
 * unclassified action is UNKNOWN, never spontaneous.
 *
 * Distinct from `users.initial_origin` (W4 first-touch, immutable) and from
 * `source_slug` (entry attribution). This answers "how did this happen", not
 * "where did this person come from".
 */
export const actionOriginEnum = pgEnum("action_origin", [
  "spontaneous",
  "guided_workshop",
  "reminder_assisted",
  "researcher_prompted",
  "instructor_requested",
  "unknown",
]);

/**
 * Session classification for evidence exclusion (Gate A OI-50, plan 24.8).
 *
 * This is SESSION/EVENT CONTEXT, never a permanent classification of a person.
 * The Founder browsing as a participant emits USER; the same person reproducing
 * a bug emits INTERNAL. users.session_class_default exists only as an
 * operational convenience and event context always wins. Gate ANA-6 forbids an
 * evidence query deriving this from the user row.
 */
export const sessionClassEnum = pgEnum("session_class", [
  "USER",
  "INTERNAL",
  "QA",
]);

/**
 * Data-quality marker. Set to UNKNOWN for any window that crosses a
 * pseudonym_version boundary, because longitudinal continuity is discontinuous
 * across an emergency secret rotation and a continuity claim spanning two
 * versions is an error, not a finding (plan 24.7).
 */
export const dataQualityEnum = pgEnum("data_quality", ["OK", "UNKNOWN"]);

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
    /**
     * RETIRED as authority, still present as a column. The plan marks M1
     * "Destructive? no", and dropping a column is destructive - so M1 adds and
     * M1b drops, once nothing reads it. Add-then-drop also keeps a rollback
     * cheap: reverting M1 cannot lose data it never removed.
     *
     * Nullable and defaultless from here on so no new row acquires a value.
     */
    stratum: stratumEnum("stratum"),
    /**
     * Operational convenience ONLY. Event/session context is authoritative for
     * evidence (plan 24.8); gate ANA-6 forbids an evidence query deriving
     * session_class from this column. Nullable on purpose: most users have no
     * default, and no person is permanently INTERNAL.
     */
    sessionClassDefault: sessionClassEnum("session_class_default"),
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
    /**
     * Added so first-time consent can run on the OWNER path rather than
     * needing the privileged connection.
     *
     * Without it the users row could only be created by a service-role write,
     * which would have meant the very first thing a new account does bypasses
     * RLS entirely - and would have quietly widened the service-role surface
     * that §16 restricts to migration, seed, cron and admin.
     *
     * The WITH CHECK is what makes it safe: a caller can only create the row
     * whose id equals their own auth.uid(), so no account can register a
     * profile for anybody else.
     */
    pgPolicy("users_insert_own", {
      for: "insert",
      to: authenticatedRole,
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
    /**
     * W4 L2 protocol section 12, operational-cost capture. "Manual/founder
     * labor is a real acquisition/onboarding/economic cost" - so it is recorded
     * per participant rather than assumed to be free. W2's economics review
     * depends on these being captured from the first day of use, not
     * reconstructed afterwards.
     */
    setupAssistanceMinutes: integer("setup_assistance_minutes"),
    importAssistanceMinutes: integer("import_assistance_minutes"),
    supportMinutes: integer("support_minutes"),
    interventionCount: integer("intervention_count"),
    dataCorrectionCount: integer("data_correction_count"),
    /** Manual work hidden from the participant - the cost easiest to lose. */
    hiddenManualMinutes: integer("hidden_manual_minutes"),
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
    /**
     * GENERATED, never writable. The only column a public read may reference.
     *
     * Deriving it rather than storing it is the point: no code path can publish
     * a row by setting a flag, because there is no flag to set. Only an explicit
     * `published` status maps to PUBLIC_APPROVED - `practitioner_reviewed` is
     * reviewed but NOT yet published, so it stays internal. Fails closed: any
     * status that is not explicitly published or withdrawn is treated as
     * unverified internal draft. Gates PUB-1 and I18N-2.
     */
    publicationState: publicationStateEnum("publication_state").generatedAlwaysAs(
      // Each literal is cast individually. Casting the whole CASE result -
      // `(case ... end)::publication_state` - is rejected by Postgres with
      // "generation expression is not immutable", because enum_in over a
      // non-constant input is only STABLE. Per-literal casts are constant
      // folded and therefore immutable. Verified against Postgres directly
      // before committing, not assumed.
      sql`case when status = 'published' then 'PUBLIC_APPROVED'::publication_state when status = 'withdrawn' then 'UNAVAILABLE'::publication_state else 'INTERNAL_DRAFT_UNVERIFIED'::publication_state end`,
    ),
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
    // Plan §16 step 3: the public read gates on publication_state, which is
    // "the only column a public read may reference". It previously gated on
    // `status = 'published'` - equivalent TODAY, and a trap tomorrow: adding a
    // content_status value would silently change what is public unless someone
    // remembered to edit three policies. Gating on the derived column means the
    // status -> visibility mapping lives in exactly one place, the generated
    // expression, which no code path can write to.
    pgPolicy("species_public_read", {
      for: "select",
      to: [anonRole, authenticatedRole],
      using: sql`${t.publicationState} = 'PUBLIC_APPROVED'`,
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
    /**
     * GENERATED, never writable. The only column a public read may reference.
     *
     * Deriving it rather than storing it is the point: no code path can publish
     * a row by setting a flag, because there is no flag to set. Only an explicit
     * `published` status maps to PUBLIC_APPROVED - `practitioner_reviewed` is
     * reviewed but NOT yet published, so it stays internal. Fails closed: any
     * status that is not explicitly published or withdrawn is treated as
     * unverified internal draft. Gates PUB-1 and I18N-2.
     */
    publicationState: publicationStateEnum("publication_state").generatedAlwaysAs(
      // Each literal is cast individually. Casting the whole CASE result -
      // `(case ... end)::publication_state` - is rejected by Postgres with
      // "generation expression is not immutable", because enum_in over a
      // non-constant input is only STABLE. Per-literal casts are constant
      // folded and therefore immutable. Verified against Postgres directly
      // before committing, not assumed.
      sql`case when status = 'published' then 'PUBLIC_APPROVED'::publication_state when status = 'withdrawn' then 'UNAVAILABLE'::publication_state else 'INTERNAL_DRAFT_UNVERIFIED'::publication_state end`,
    ),
    version: integer("version").notNull().default(1),
    publicationEligible: boolean("publication_eligible").notNull().default(false),
    createdAt: createdAt(),
  },
  (t) => [
    // Plan §16 step 3: the public read gates on publication_state, which is
    // "the only column a public read may reference". It previously gated on
    // `status = 'published'` - equivalent TODAY, and a trap tomorrow: adding a
    // content_status value would silently change what is public unless someone
    // remembered to edit three policies. Gating on the derived column means the
    // status -> visibility mapping lives in exactly one place, the generated
    // expression, which no code path can write to.
    pgPolicy("techniques_public_read", {
      for: "select",
      to: [anonRole, authenticatedRole],
      using: sql`${t.publicationState} = 'PUBLIC_APPROVED'`,
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
    /**
     * GENERATED, never writable. The only column a public read may reference.
     *
     * Deriving it rather than storing it is the point: no code path can publish
     * a row by setting a flag, because there is no flag to set. Only an explicit
     * `published` status maps to PUBLIC_APPROVED - `practitioner_reviewed` is
     * reviewed but NOT yet published, so it stays internal. Fails closed: any
     * status that is not explicitly published or withdrawn is treated as
     * unverified internal draft. Gates PUB-1 and I18N-2.
     */
    publicationState: publicationStateEnum("publication_state").generatedAlwaysAs(
      // Each literal is cast individually. Casting the whole CASE result -
      // `(case ... end)::publication_state` - is rejected by Postgres with
      // "generation expression is not immutable", because enum_in over a
      // non-constant input is only STABLE. Per-literal casts are constant
      // folded and therefore immutable. Verified against Postgres directly
      // before committing, not assumed.
      sql`case when status = 'published' then 'PUBLIC_APPROVED'::publication_state when status = 'withdrawn' then 'UNAVAILABLE'::publication_state else 'INTERNAL_DRAFT_UNVERIFIED'::publication_state end`,
    ),
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
    // Plan §16 step 3: the public read gates on publication_state, which is
    // "the only column a public read may reference". It previously gated on
    // `status = 'published'` - equivalent TODAY, and a trap tomorrow: adding a
    // content_status value would silently change what is public unless someone
    // remembered to edit three policies. Gating on the derived column means the
    // status -> visibility mapping lives in exactly one place, the generated
    // expression, which no code path can write to.
    pgPolicy("species_techniques_public_read", {
      for: "select",
      to: [anonRole, authenticatedRole],
      using: sql`${t.publicationState} = 'PUBLIC_APPROVED'`,
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
    /**
     * DOMAIN-MODEL section 7. Death does not close the record: status moves to
     * `deceased` and the Journey persists. `unknown` is a real state, not a
     * placeholder.
     */
    status: subjectStatusEnum("status").notNull().default("alive"),
    /**
     * TREE or COMPOSITION (section 7.13). Defaults to `tree`; composition
     * members arrive with M1b. Recorded now so the distinction never has to be
     * back-filled onto existing rows.
     */
    subjectKind: subjectKindEnum("subject_kind").notNull().default("tree"),
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
    /**
     * LEGACY. Retired as authority by plan section 2.6 but retained as data
     * until M1b backfills moment_kind/moment_category. Do not read this column
     * for new behaviour; do not delete it while unmigrated rows exist.
     */
    type: momentTypeEnum("type").notNull(),
    /**
     * Dimension 1 of the three-dimension taxonomy: Event or State. Nullable
     * until M1b backfills from `type`, then becomes required.
     */
    momentKind: momentKindEnum("moment_kind"),
    /** Dimension 2, optional by design. A photo is media, not a category. */
    momentCategory: momentCategoryEnum("moment_category"),
    occurredOn: date("occurred_on").notNull(),
    occurredPrecision: datePrecisionEnum("occurred_precision")
      .notNull()
      .default("exact"),
    /**
     * A State is true over a period, so it needs an end with its own precision.
     * Null end on a State means "still true", which is different from unknown.
     */
    endedOn: date("ended_on"),
    endedPrecision: datePrecisionEnum("ended_precision"),
    /**
     * RESERVED by the plan, deliberately untyped. DOMAIN-MODEL models an Event
     * as Action - Intent - Context - Evidence - Observation - Outcome -
     * Attributed Cause, but canon does not yet enumerate intent values, and
     * guessing an enum here would fabricate authority. Text until canon rules.
     */
    intent: text("intent"),
    /**
     * CORRECTED. This was `text("origin")` with a comment saying canon did not
     * enumerate the values. W7 §28.5 does enumerate them - the comment was
     * wrong, not the canon. See actionOriginEnum.
     *
     * Carries how the Moment came to exist so assisted activity stays
     * separable from voluntary activity, which is the W4 L2 discipline that
     * makes the evidence readable at all. Never overwrites `initial_origin`
     * on the user, which is an immutable first-touch envelope.
     *
     * Nullable: existing rows predate the field and must not be guessed into a
     * classification. New writes should set it explicitly, defaulting to
     * `unknown` rather than inferring `spontaneous`.
     */
    origin: actionOriginEnum("origin"),
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
    /**
     * Photos now hang off the TREE, not only off a Moment. A photo can exist
     * before it is attributed to anything - capture first, structure
     * progressively - so moment_id becomes nullable and tree_id carries
     * ownership. Ownership predicates move to tree_id accordingly.
     */
    treeId: uuid("tree_id")
      .notNull()
      .references(() => trees.id, { onDelete: "cascade" }),
    momentId: uuid("moment_id").references(() => moments.id, {
      onDelete: "set null",
    }),
    /** Legacy v1 key. Retained until M1b moves rows onto normalized_key. */
    storageKey: text("storage_key").notNull(),
    /**
     * The normalized private master (2560-3000px, ~1.5-2MB target). There is
     * deliberately NO byte-identical original: the upload is decoded and
     * re-encoded, which strips all metadata including GPS as a side effect of
     * the pipeline rather than as a filtering step that could be skipped.
     */
    normalizedKey: text("normalized_key"),
    /** Exactly two derivatives, WebP only: 320w thumb and 1280w view. */
    derivativeKey: text("derivative_key"),
    /**
     * Must stay false. Present so that "no EXIF is retained" is an assertable
     * fact rather than a claim in prose - gate DEV-1 and PRIV-* check it. GPS
     * and sensitive EXIF are prohibited from persistence outright.
     */
    exifRetained: boolean("exif_retained").notNull().default(false),
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
    index("photos_tree_idx").on(t.treeId),
    index("photos_moment_idx").on(t.momentId),
    pgPolicy("photos_owner_all", {
      for: "all",
      to: authenticatedRole,
      // Ownership now derives from tree_id, not through the moment join:
      // moment_id is nullable, and a photo with no moment must still be owned.
      using: sql`exists (select 1 from trees where trees.id = ${t.treeId} and trees.owner_id = auth.uid())`,
      withCheck: sql`exists (select 1 from trees where trees.id = ${t.treeId} and trees.owner_id = auth.uid())`,
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
    /**
     * LEGACY, superseded by `source_slug`. Free text with no format
     * constraint; `source_slug` carries the W4-mandated
     * `^[a-z0-9]+(?:[-_][a-z0-9]+)*$` form and is what attribution reads.
     * Retained because M1 is non-destructive and rows exist; new writes should
     * populate `source_slug`. Dropped with M1b.
     */
    source: text("source"),
    locale: localeEnum("locale"),
    sessionId: text("session_id"),
    /**
     * KNOWN GAP, recorded not invented (blocker B-24).
     *
     * Two values, and W7 §29 specifies FIVE return classifications:
     * spontaneous_return, reminder_assisted_return, researcher_prompted_return,
     * instructor_requested_return, unknown_return_source. This column cannot
     * express them.
     *
     * What it actually measures today is narrow and correct for what it is:
     * "did a researcher contact fall inside the 72-hour window"
     * (see events-rules.ts isPrompted). So `none` means NOT-RESEARCHER-PROMPTED
     * - it does NOT mean voluntary, and must never be read that way. W7 is
     * explicit: "Product/UIUX must not infer 'voluntary' merely because a user
     * opened the app."
     *
     * Widening it to the §29 vocabulary is deliberately NOT done here. §29
     * marks the classification rules "DEFINE ONLY WHEN A SPECIFIC TEST
     * REQUIRES IT", so the mapping is the evidence protocol's to set and
     * inventing it in product code is what gate ANA-2 forbids.
     */
    prompted: promptedEnum("prompted").notNull().default("none"),
    /**
     * Authoritative session classification (plan 24.8). Defaults to USER so an
     * unclassified event counts as real evidence rather than being silently
     * excluded - the safe direction for a metric that decides whether to kill a
     * hypothesis. Gate ANA-6: evidence queries read THIS column, never
     * users.session_class_default.
     */
    sessionClass: sessionClassEnum("session_class").notNull().default("USER"),
    dataQuality: dataQualityEnum("data_quality").notNull().default("OK"),
    /**
     * Which generation of the pseudonymization secret produced `pseudonym`
     * (plan 24.7). Routine rotation is not required and would needlessly
     * destroy longitudinal continuity; an emergency rotation increments this
     * instead of re-pseudonymizing rows, which would be impossible anyway
     * without the old secret. Analysis spanning two versions is discontinuous
     * and must be reported as such.
     */
    pseudonymVersion: integer("pseudonym_version").notNull().default(1),
    /**
     * Specified in Phase 1 ("add `origin`, `session_class`, `data_quality`,
     * `pseudonym_version`, `locale` enum") and in the §22.3 T1 envelope, and
     * MISSED when M1 added the other four. Found by auditing the event
     * taxonomy against W7 §28.
     *
     * Carries the W7 §28.5 vocabulary - how the action came about - which is
     * the only origin vocabulary canon actually enumerates. Entry attribution
     * lives in `source_slug` and `users.initial_origin`; conflating the two
     * under one name is the ambiguity this comment exists to close.
     */
    origin: actionOriginEnum("origin"),
    /**
     * W4 attribution. Distinct from `initial_origin` on the user, which is an
     * immutable first-touch envelope and is never overwritten by these.
     * source_slug matches ^[a-z0-9]+(?:[-_][a-z0-9]+)*$ and is capped at 64
     * chars; the constraint is enforced at the emitter and in M7.
     */
    sourceSlug: text("source_slug"),
    campaignSlug: text("campaign_slug"),
    messageVariantId: text("message_variant_id"),
    occurredAt: timestamp("occurred_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    index("events_name_occurred_idx").on(t.name, t.occurredAt),
    index("events_pseudonym_idx").on(t.pseudonym),
  ],
).enableRLS();

/**
 * Consent and notice evidence ledger (plan 24.5, gate LEDG-1).
 *
 * APPEND-ONLY, and enforced by the ABSENCE of update/delete policies rather
 * than by application code - there is no policy for any role to modify a row,
 * so no code path can rewrite consent history even with a bug.
 *
 * Separate from `events` and NEVER transmitted to any processor. Its job is to
 * answer "what exactly did this person agree to, in which language" verbatim
 * and reproducibly, which is a records obligation under GDPR and not a
 * legitimate-interest processing purpose - so it does not wait on the telemetry
 * legal gate (OI-02 / TEL-1).
 *
 * `documentHash` is the hash of the consent text as rendered to that user, so
 * the exact wording can be proven later even if the source file moves.
 */
export const consentEvents = pgTable(
  "consent_events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    documentId: text("document_id").notNull(),
    documentVersion: text("document_version").notNull(),
    locale: localeEnum("locale").notNull(),
    documentHash: text("document_hash").notNull(),
    termsAck: boolean("terms_ack").notNull(),
    researchConsent: boolean("research_consent").notNull(),
    acceptedAt: timestamp("accepted_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    index("consent_events_user_accepted_idx").on(t.userId, t.acceptedAt),
    // A subject may read their own consent history. No anon policy exists.
    pgPolicy("consent_events_select_own", {
      for: "select",
      to: authenticatedRole,
      using: sql`${t.userId} = auth.uid()`,
    }),
    // Insert-own only. Deliberately NO update or delete policy for any role:
    // append-only is a property of the policy set, not of the calling code.
    pgPolicy("consent_events_insert_own", {
      for: "insert",
      to: authenticatedRole,
      withCheck: sql`${t.userId} = auth.uid()`,
    }),
  ],
).enableRLS();

/**
 * Fixed-window rate limiting (plan §24.2, "rate-limit tiers").
 *
 * Postgres-backed, not in-memory. On Vercel each request may hit a different
 * instance, so an in-process counter would reset constantly and limit almost
 * nothing - the one deployment shape where the easy implementation is also the
 * useless one. Deliberately NOT Redis: the governance assessment rejected that
 * as a paid dependency Bonsai does not need at this scale (§4 row 19).
 *
 * `bucket` IS A HASH, never a raw identifier. An email address or IP in a
 * plain column would be personal data sitting in a table whose only purpose is
 * counting - and the privacy notice commits to keeping IP-bearing records for
 * at most 14 days. Hashing means the table can be read, dumped or debugged
 * without exposing who was limited, while still counting them correctly.
 *
 * Rows are self-expiring by overwrite: a request in a new window resets the
 * counter in place. Abandoned buckets are purged by the daily cron
 * (`/api/keepalive`), so the table cannot grow without bound.
 */
export const rateLimits = pgTable("rate_limits", {
  /** sha256 of `<tier>:<identifier>`. See src/lib/rate-limit.ts. */
  bucket: text("bucket").primaryKey(),
  windowStartedAt: timestamp("window_started_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  hits: integer("hits").notNull().default(0),
}).enableRLS();

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
export type Photo = typeof photos.$inferSelect;
export type ConsentEvent = typeof consentEvents.$inferSelect;
export type RateLimitRow = typeof rateLimits.$inferSelect;
export type PublicationState = (typeof publicationStateEnum.enumValues)[number];
export type SessionClass = (typeof sessionClassEnum.enumValues)[number];
export type Locale = (typeof localeEnum.enumValues)[number];
