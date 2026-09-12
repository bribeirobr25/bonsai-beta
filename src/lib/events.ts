import "server-only";
import { createHash } from "node:crypto";
import { and, desc, eq, gte } from "drizzle-orm";
/**
 * PRIVILEGED CONNECTION, deliberately - one of seven documented exceptions.
 *
 * `events` has RLS enabled and ZERO policies, which is not an oversight: there
 * is no owner path to the telemetry sink by design. Two reasons it cannot have
 * one. Anonymous page views carry no user at all, so `auth.uid()` would be null
 * and an owner policy could never match. And an account being able to write its
 * own event rows would let a participant manufacture the evidence the beta
 * exists to read.
 *
 * So telemetry is server-written, scoped by this module, and the CI
 * service-role check (scripts/check-service-role.mjs) allows this file by name
 * rather than by convention. Adding a fifth exception requires editing that
 * allowlist, which shows up in review.
 */
import { db } from "@/db";
import {
  events,
  researcherContacts,
  type SessionClass,
  type User,
} from "@/db/schema";
import { env } from "@/lib/env";
import {
  isPrompted,
  PROMPT_WINDOW_HOURS,
  resolveSessionClass,
} from "./events-rules";

export { isPrompted, PROMPT_WINDOW_HOURS, resolveSessionClass };

/** Part 7 taxonomy, W6-SANDBOX-PLAN-v0.4. */
export type EventName =
  | "landing_view"
  | "cta_click"
  | "signup_started"
  | "signup_completed"
  | "tree_started"
  | "species_lookup"
  | "tree_created"
  | "import_started"
  | "import_completed"
  | "journey_viewed"
  | "moment_opened"
  | "progress_viewed"
  | "moment_added"
  | "return_session"
  | "second_tree_created"
  | "share_created"
  | "public_journey_view"
  | "share_to_tree_start"
  | "species_view"
  | "technique_view"
  | "explore_to_tree_start"
  | "export_requested"
  | "account_deleted"
  | "workshop_signup"
  | "workshop_tree_created"
  | "research_job"
  | "field_published"
  | "researcher_contact"
  | "instrument_error";

export function pseudonymFor(userId: string) {
  return createHash("sha256")
    .update(`${env().EVENTS_PEPPER}:${userId}`)
    .digest("hex")
    .slice(0, 32);
}

/**
 * Which generation of the pseudonymization secret produced a pseudonym.
 *
 * Stamped on every event so an emergency rotation is visible in the data
 * rather than inferred from a deploy log. Analysis spanning two versions is
 * discontinuous and must be reported as such - a continuity claim across a
 * boundary is a data-quality error, not a finding (plan §24.7).
 */
export function pseudonymVersion(): number {
  return env().EVENTS_PSEUDONYM_VERSION;
}


type TrackInput = {
  name: EventName;
  props?: Record<string, unknown>;
  /** Signed-in user with a consent record; omit for anonymous visitors. */
  user?: Pick<
    User,
    | "id"
    | "researchConsent"
    | "cohort"
    | "source"
    | "locale"
    | "sessionClassDefault"
  > | null;
  /**
   * Classification for THIS event. Overrides the user and deployment defaults.
   * Set it when the server knows the activity is not a participant acting
   * voluntarily - a support reproduction, a QA pass, a seeded fixture.
   */
  sessionClass?: SessionClass;
  locale?: "de" | "en";
  source?: string | null;
  sessionId?: string | null;
};

/**
 * Writes one event. Rules (CONTENT-CONSENT-v0.4, implementation notes):
 *  - signed-in users: only when `research_consent` is true right now;
 *  - anonymous visitors: no identifier of any kind, timestamp truncated to the hour.
 * Never throws: an evidence write must not break the product.
 */
export async function track(input: TrackInput): Promise<void> {
  try {
    if (input.user) {
      if (!input.user.researchConsent) return;
      const since = new Date(Date.now() - PROMPT_WINDOW_HOURS * 3_600_000);
      const contacts = await db
        .select({ at: researcherContacts.at })
        .from(researcherContacts)
        .where(
          and(
            eq(researcherContacts.userId, input.user.id),
            gte(researcherContacts.at, since),
          ),
        )
        .orderBy(desc(researcherContacts.at))
        .limit(5);
      await db.insert(events).values({
        userId: input.user.id,
        pseudonym: pseudonymFor(input.user.id),
        name: input.name,
        props: input.props ?? {},
        cohort: input.user.cohort,
        source: input.source ?? input.user.source ?? null,
        locale: input.locale ?? input.user.locale,
        sessionId: input.sessionId ?? null,
        prompted: isPrompted(contacts.map((c) => c.at)) ? "researcher" : "none",
        sessionClass: resolveSessionClass(
          input.sessionClass,
          input.user.sessionClassDefault,
          env().SESSION_CLASS_DEFAULT,
        ),
        pseudonymVersion: pseudonymVersion(),
      });
      return;
    }
    const hour = new Date();
    hour.setMinutes(0, 0, 0);
    await db.insert(events).values({
      name: input.name,
      props: input.props ?? {},
      source: input.source ?? null,
      locale: input.locale ?? null,
      occurredAt: hour,
      // No user, so no user-level default to consult - and no pseudonym, so
      // pseudonym_version would be meaningless. The column keeps its default.
      sessionClass: resolveSessionClass(
        input.sessionClass,
        null,
        env().SESSION_CLASS_DEFAULT,
      ),
    });
  } catch (error) {
    console.error("[events] write failed", input.name, error);
  }
}
