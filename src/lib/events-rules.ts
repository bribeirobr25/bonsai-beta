/** Pure rules shared by the event writer and its tests (no server imports). */
export const PROMPT_WINDOW_HOURS = 72;

/** `prompted = researcher` when any researcher contact falls within the 72 h window. */
export function isPrompted(
  contactTimes: Array<Date | string>,
  now: Date = new Date(),
): boolean {
  const windowMs = PROMPT_WINDOW_HOURS * 3_600_000;
  return contactTimes.some((t) => {
    const at = new Date(t).getTime();
    return at <= now.getTime() && now.getTime() - at <= windowMs;
  });
}

/** Mirrors the session_class enum without importing the server-only schema. */
export type SessionClassValue = "USER" | "INTERNAL" | "QA";

/**
 * Resolve the session classification for one event (OI-50, plan §24.8).
 *
 * PURE, and takes the deployment default as an argument rather than reading
 * env() - so it lives here with the other testable rules instead of inside the
 * `server-only` emitter, where a test runner cannot load it at all. The same
 * wall was hit with the rate-limit tiers; the lesson is that anything worth
 * asserting should not sit behind `server-only`.
 *
 * Order matters and is deliberate:
 *   1. what the caller passed for THIS event  - session/event context wins
 *   2. the user-level default, if any         - operational convenience
 *   3. the deployment default                 - staging marks itself INTERNAL
 *
 * The last step is the safe direction, not the lazy one: silently EXCLUDING an
 * unclassified event would quietly shrink the denominator of a metric that
 * decides whether to kill a hypothesis - a worse failure than counting a stray
 * internal visit, because nobody would notice it.
 *
 * Reading the user-level default here is sanctioned; it is what "an optional
 * user-level default may exist for operational convenience" means. Gate ANA-6
 * forbids the opposite - an EVIDENCE QUERY deriving session_class by joining to
 * the user row instead of reading the column on the event.
 */
export function resolveSessionClass(
  explicit: SessionClassValue | undefined,
  userDefault: SessionClassValue | null | undefined,
  deploymentDefault: SessionClassValue,
): SessionClassValue {
  return explicit ?? userDefault ?? deploymentDefault;
}

/**
 * Whether an event about a signed-in person may be recorded at all.
 *
 * This is the mechanism behind a sentence in the privacy notice: "Without the
 * optional research consent no usage events about you are stored; the site
 * works unchanged." Gate COPY-1 requires that claim to have a test, and a test
 * cannot reach inside the `server-only` emitter - so the decision lives here,
 * pure, and the emitter calls it.
 *
 * Checked at WRITE TIME against the current value, not at sign-up. Withdrawal
 * takes effect on the next event rather than at the next deploy, which is what
 * Art. 7(3) "as easy to withdraw as to give" means in practice.
 */
export function mayRecordEventFor(user: {
  researchConsent: boolean;
}): boolean {
  return user.researchConsent === true;
}
