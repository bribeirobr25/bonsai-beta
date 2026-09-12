/**
 * Gate TEL-1 · whether tier-1 legitimate-interest telemetry may collect.
 *
 * Plan §22.2: the architecture is built and ships INERT. Founder ruling B-12
 * keeps activation `LEGAL PENDING`. This module is where that decision is
 * enforced in code rather than described in a document.
 *
 * TWO INDEPENDENT CONDITIONS, and both are required:
 *
 *   1. `TELEMETRY_LEGITIMATE_INTEREST_ENABLED === "true"`
 *   2. a legal-approval record committed at
 *      docs/07-legal/TELEMETRY-LEGAL-APPROVAL.md
 *
 * Why both. An environment variable alone can be flipped in a hosting
 * dashboard by anyone with access, with no reviewable trace - which is exactly
 * how lawful-basis processing would begin by accident. A committed file alone
 * proves approval exists but not that anyone intended to switch collection on.
 * Requiring the pair means activation leaves an audit trail in git AND a
 * deliberate deploy.
 *
 * The file is checked for EXISTENCE and for an approval marker, not parsed for
 * meaning: this code cannot evaluate whether a legal opinion is sound. It can
 * only refuse to collect until a human has put one in the repository.
 *
 * Pure and file-system-free at the decision point, so it is testable: the
 * caller passes in what it found.
 */

/** Where a recorded legal approval must live to count. */
export const LEGAL_APPROVAL_PATH = "docs/07-legal/TELEMETRY-LEGAL-APPROVAL.md";

/** The marker a legal-approval record must contain to be recognised. */
export const LEGAL_APPROVAL_MARKER = "TELEMETRY-LEGITIMATE-INTEREST: APPROVED";

export type TelemetryActivationInputs = {
  /** Value of TELEMETRY_LEGITIMATE_INTEREST_ENABLED. */
  flag: "true" | "false";
  /** Contents of LEGAL_APPROVAL_PATH, or null when the file is absent. */
  approvalRecord: string | null;
};

export type TelemetryActivationDecision = {
  allowed: boolean;
  /** Why, in words a log line can carry without ambiguity. */
  reason:
    | "flag off"
    | "no recorded legal approval"
    | "approval record lacks the marker"
    | "flag on and approval recorded";
};

/**
 * Decide whether tier-1 telemetry may collect.
 *
 * FAILS CLOSED in every ambiguous case. Unlike the rate limiter - which fails
 * open, because refusing sign-in is worse than permitting abuse - the wrong
 * answer here is processing personal data without a lawful basis. There is no
 * version of that which is better than collecting nothing.
 */
export function telemetryMayCollect(
  inputs: TelemetryActivationInputs,
): TelemetryActivationDecision {
  if (inputs.flag !== "true") {
    return { allowed: false, reason: "flag off" };
  }
  if (inputs.approvalRecord === null) {
    return { allowed: false, reason: "no recorded legal approval" };
  }
  if (!inputs.approvalRecord.includes(LEGAL_APPROVAL_MARKER)) {
    return { allowed: false, reason: "approval record lacks the marker" };
  }
  return { allowed: true, reason: "flag on and approval recorded" };
}
