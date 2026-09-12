/**
 * Event names · the taxonomy, with no server imports.
 *
 * Split out of events.ts because that module carries `import "server-only"`
 * and a test runner cannot load it at all. This is the FOURTH time that wall
 * has hidden something worth asserting - after the rate-limit tiers,
 * resolveSessionClass and mayRecordEventFor - so scripts/check-testability.mjs
 * now fails the build when a test imports a server-only module, rather than
 * relying on anyone remembering.
 */
/**
 * Event taxonomy · reconciled to **W7 §28** (Analytics / Validation
 * Instrumentation Architecture).
 *
 * Replaces the W6-SANDBOX-PLAN Part 7 list. Two things about how W7 is applied
 * here, because they pull in opposite directions.
 *
 * W7 §28 opens: "Event names below are functional working names. Final
 * analytics naming may change in implementation." So the binding content is
 * the set of DISTINCTIONS the product must be able to make - not the literal
 * strings. Where W7 gives a name, it is adopted verbatim anyway: matching costs
 * nothing and a cross-front reader should not have to translate.
 *
 * Where W7 is silent, names are RETAINED rather than deleted. W7 has no reason
 * to specify a GDPR export or an admin research job, and dropping those would
 * lose real instrumentation to a tidiness argument.
 *
 * TIMING. `events.name` is `text` and nothing is deployed, so renaming today
 * costs nothing. After the first deploy it costs either a data migration or
 * longitudinal continuity - which is why the whole reconciliation happens now
 * rather than phase by phase as each surface lands.
 *
 * NOT-YET-EMITTED names are included deliberately, each marked with the phase
 * that will emit it. The contract is complete so a later phase cannot invent a
 * name that W7 already settled.
 */
export type EventName =
  // --- §28.1 Entry --------------------------------------------------------
  | "landing_viewed" // renamed from landing_view
  | "workshop_landing_viewed" // P9
  | "explore_viewed" // P2
  | "public_journey_viewed" // renamed from public_journey_view · P6
  // --- §28.2 Tree creation ------------------------------------------------
  | "tree_create_started" // renamed from tree_started · P4
  | "tree_create_branch_selected" // new/existing branch · P4
  | "identity_gate_viewed" // P4
  | "identity_completed" // P4
  | "tree_created" // P4
  // --- §28.3 Historical import -------------------------------------------
  | "history_import_started" // renamed from import_started · P5
  | "history_photos_selected" // P5
  | "history_review_started" // P5
  | "history_import_completed" // renamed from import_completed · P5
  | "history_import_partial_failure" // P5
  // --- §28.4 Journey / Progress ------------------------------------------
  | "journey_viewed" // P4
  | "progress_preview_seen" // P5
  | "progress_opened" // renamed from progress_viewed · P5
  | "progress_pair_changed" // P5
  | "moment_source_opened_from_progress" // renamed from moment_opened · P5
  // --- §28.5 Moment behaviour --------------------------------------------
  | "moment_create_started" // P4
  | "moment_created" // renamed from moment_added · P4
  | "moment_create_failed" // P4
  // --- §28.6 Expansion ----------------------------------------------------
  | "second_tree_started" // P5
  | "second_tree_created" // P5
  // --- §28.7 Knowledge bridge --------------------------------------------
  | "species_viewed" // renamed from species_view · P2
  | "technique_viewed" // renamed from technique_view · P2
  | "knowledge_start_tree_clicked" // renamed from explore_to_tree_start · P2
  | "tree_created_from_knowledge" // P2
  // --- §28.8 Share / object travel ---------------------------------------
  | "share_started" // P6
  | "share_previewed" // P6
  | "share_published" // renamed from share_created · P6
  | "share_disabled" // P6
  | "public_journey_start_tree_clicked" // renamed from share_to_tree_start · P6
  | "recipient_tree_created" // P6
  // --- Retained: W7 does not specify these, and should not ----------------
  // GDPR operations. A data subject exercising Art. 15 or Art. 17 is not a
  // product flow W7 has an opinion about, but it must be instrumented.
  | "export_requested"
  | "account_deleted"
  // Consent lifecycle. Distinct from identity_completed: that is reaching the
  // gate, this is the lawful-basis record changing.
  | "signup_started"
  | "signup_completed"
  // Internal Knowledge machinery (P3, admin-only).
  | "research_job"
  | "field_published"
  | "researcher_contact"
  // Operational.
  | "species_lookup" // P4, species resolution attempt
  | "return_session" // W4 return behaviour; see the prompted caveat in schema.ts
  | "instrument_error";

/**
 * The same names at runtime, so tests can assert over the set.
 *
 * A TypeScript union does not exist at runtime, and duplicating the list by
 * hand is exactly the drift these tests exist to catch - so EventName is
 * derived FROM this array rather than the array being written to match the
 * union.
 */
export const EVENT_NAMES = [
  "landing_viewed", "workshop_landing_viewed", "explore_viewed",
  "public_journey_viewed",
  "tree_create_started", "tree_create_branch_selected", "identity_gate_viewed",
  "identity_completed", "tree_created",
  "history_import_started", "history_photos_selected", "history_review_started",
  "history_import_completed", "history_import_partial_failure",
  "journey_viewed", "progress_preview_seen", "progress_opened",
  "progress_pair_changed", "moment_source_opened_from_progress",
  "moment_create_started", "moment_created", "moment_create_failed",
  "second_tree_started", "second_tree_created",
  "species_viewed", "technique_viewed", "knowledge_start_tree_clicked",
  "tree_created_from_knowledge",
  "share_started", "share_previewed", "share_published", "share_disabled",
  "public_journey_start_tree_clicked", "recipient_tree_created",
  "export_requested", "account_deleted",
  "signup_started", "signup_completed",
  "research_job", "field_published", "researcher_contact",
  "species_lookup", "return_session", "instrument_error",
] as const;

/**
 * Names retired in the W7 §28 reconciliation, kept here so a stale call site
 * or an old dashboard query fails loudly at the type level instead of silently
 * writing an event nobody reads.
 *
 * Nothing is deployed, so no rows carry these. If that ever stops being true,
 * this list is the migration map.
 */
export const RETIRED_EVENT_NAMES = {
  landing_view: "landing_viewed",
  public_journey_view: "public_journey_viewed",
  tree_started: "tree_create_started",
  import_started: "history_import_started",
  import_completed: "history_import_completed",
  progress_viewed: "progress_opened",
  moment_opened: "moment_source_opened_from_progress",
  moment_added: "moment_created",
  species_view: "species_viewed",
  technique_view: "technique_viewed",
  explore_to_tree_start: "knowledge_start_tree_clicked",
  share_created: "share_published",
  share_to_tree_start: "public_journey_start_tree_clicked",
  // Superseded by the §28.2 pair, which separates reaching the gate from
  // completing it - a distinction cta_click could not express.
  cta_click: "identity_gate_viewed",
  // W7 §28.6 measures expansion as started/created on the tree, not as a
  // workshop-specific event.
  workshop_signup: "workshop_landing_viewed",
  workshop_tree_created: "tree_created",
} as const satisfies Record<string, EventName>;

