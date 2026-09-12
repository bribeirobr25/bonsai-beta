import "server-only";
import { createHash } from "node:crypto";
import { and, desc, eq, gte } from "drizzle-orm";
/**
 * PRIVILEGED CONNECTION, deliberately - one of four documented exceptions.
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
import { events, researcherContacts, type User } from "@/db/schema";
import { env } from "@/lib/env";
import { isPrompted, PROMPT_WINDOW_HOURS } from "./events-rules";

export { isPrompted, PROMPT_WINDOW_HOURS };

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

type TrackInput = {
  name: EventName;
  props?: Record<string, unknown>;
  /** Signed-in user with a consent record; omit for anonymous visitors. */
  user?: Pick<User, "id" | "researchConsent" | "cohort" | "source" | "locale"> | null;
  locale?: "de" | "en";
  source?: string | null;
  sessionId?: string | null;
};

/**
 * Writes one event. Rules (CONTENT-CONSENT-v0.3, implementation notes):
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
    });
  } catch (error) {
    console.error("[events] write failed", input.name, error);
  }
}
