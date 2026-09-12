/**
 * Gate TEL-1 · telemetry must not collect without recorded legal approval.
 *
 * TEST POLICY (§17): each assertion cites the requirement it enforces.
 *
 * Founder ruling B-12 keeps activation LEGAL PENDING. These tests are what make
 * that ruling survive a future contributor who does not know it exists.
 */
import { describe, expect, it } from "vitest";
import {
  LEGAL_APPROVAL_MARKER,
  telemetryMayCollect,
} from "./telemetry-activation";

const approved = `# Approval\n${LEGAL_APPROVAL_MARKER}\nSigned.`;

describe("telemetry activation · gate TEL-1 · OI-02", () => {
  it("does not collect with the flag off, approval or not", () => {
    // Requirement: B-12. Architecture built, collection not switched on.
    expect(telemetryMayCollect({ flag: "false", approvalRecord: null })).toEqual(
      { allowed: false, reason: "flag off" },
    );
    expect(
      telemetryMayCollect({ flag: "false", approvalRecord: approved }).allowed,
    ).toBe(false);
  });

  it("does not collect on the flag alone", () => {
    // Requirement: an env var can be flipped in a hosting dashboard by anyone
    // with access, leaving no reviewable trace. That must not be enough to
    // begin lawful-basis processing.
    expect(telemetryMayCollect({ flag: "true", approvalRecord: null })).toEqual({
      allowed: false,
      reason: "no recorded legal approval",
    });
  });

  it("does not accept a file that exists but records no approval", () => {
    // Requirement: presence is not approval. An empty or draft file must not
    // read as a legal sign-off.
    expect(
      telemetryMayCollect({
        flag: "true",
        approvalRecord: "# Draft, not signed yet\nStill with legal.",
      }),
    ).toEqual({ allowed: false, reason: "approval record lacks the marker" });
  });

  it("collects only with the flag on AND an approval recorded", () => {
    // Requirement: the pair. Activation leaves an audit trail in git AND takes
    // a deliberate deploy.
    expect(
      telemetryMayCollect({ flag: "true", approvalRecord: approved }),
    ).toEqual({ allowed: true, reason: "flag on and approval recorded" });
  });

  it("fails closed on every ambiguous input", () => {
    // Requirement: unlike the rate limiter, which fails OPEN because refusing
    // sign-in is worse than permitting abuse, the wrong answer here is
    // processing personal data with no lawful basis. There is no version of
    // that better than collecting nothing.
    for (const record of [null, "", "   ", "APPROVED", "approved: yes"]) {
      expect(
        telemetryMayCollect({ flag: "true", approvalRecord: record }).allowed,
        `record: ${JSON.stringify(record)}`,
      ).toBe(false);
    }
  });
});
