import { describe, expect, it } from "vitest";
import {
  isPrompted,
  mayRecordEventFor,
  resolveSessionClass,
} from "./events-rules";
import { EVENT_NAMES, RETIRED_EVENT_NAMES } from "./event-names";

describe("isPrompted (72 h researcher window)", () => {
  const now = new Date("2026-10-01T12:00:00Z");
  it("is true for a contact 71 hours ago", () => {
    expect(isPrompted([new Date("2026-09-28T13:00:00Z")], now)).toBe(true);
  });
  it("is false for a contact 73 hours ago", () => {
    expect(isPrompted([new Date("2026-09-28T11:00:00Z")], now)).toBe(false);
  });
  it("ignores contacts in the future and empty lists", () => {
    expect(isPrompted([new Date("2026-10-02T00:00:00Z")], now)).toBe(false);
    expect(isPrompted([], now)).toBe(false);
  });
});

describe("session classification · OI-50, gates ANA-3 and ANA-6", () => {
  it("lets event context override every default", () => {
    // Requirement: plan §24.8 - session_class is session/event context, and
    // what the caller says about THIS event wins. The Founder browsing as a
    // participant emits USER; the same person reproducing a bug emits
    // INTERNAL, without changing who they are.
    expect(resolveSessionClass("INTERNAL", "USER", "USER")).toBe("INTERNAL");
    expect(resolveSessionClass("QA", null, "USER")).toBe("QA");
  });

  it("falls back to the user-level default when the event says nothing", () => {
    // Requirement: "an optional user-level default may exist for operational
    // convenience". Reading it HERE, at emit time, is the sanctioned path -
    // ANA-6 forbids an evidence QUERY joining to the user row instead.
    expect(resolveSessionClass(undefined, "INTERNAL", "USER")).toBe("INTERNAL");
  });

  it("treats an unclassified event as real evidence, not as excluded", () => {
    // Requirement: the safe direction. Silently EXCLUDING an unclassified
    // event would shrink the denominator of a metric that decides whether to
    // kill a hypothesis - a quieter and worse failure than counting a stray
    // internal visit.
    expect(resolveSessionClass(undefined, null, "USER")).toBe("USER");
  });

  it("honours a staging deployment marking itself INTERNAL", () => {
    // Requirement: plan §24.8 - Staging is set to INTERNAL so its traffic can
    // never be mistaken for evidence. Production leaves it unset and gets USER.
    expect(resolveSessionClass(undefined, null, "INTERNAL")).toBe("INTERNAL");
    expect(resolveSessionClass(undefined, undefined, "QA")).toBe("QA");
  });
});

describe("research consent gates every event · gate COPY-1", () => {
  it("records nothing about a person who has not given research consent", () => {
    /**
     * Requirement: the privacy notice states "Without the optional research
     * consent no usage events about you are stored; the site works unchanged."
     * That sentence is a promise to a data subject, and this is the only thing
     * that makes it true. Gate COPY-1 exists so a claim like it cannot ship
     * without a test named against it.
     */
    expect(mayRecordEventFor({ researchConsent: false })).toBe(false);
  });

  it("records only on an explicit true, never on a missing or coerced value", () => {
    // Requirement: consent must be affirmative (Art. 4(11)). A truthy-but-not-
    // true value - undefined, null, "" - must read as absence of consent, not
    // as consent.
    for (const value of [undefined, null, 0, "", "false"]) {
      expect(
        mayRecordEventFor({ researchConsent: value as unknown as boolean }),
        `value: ${JSON.stringify(value)}`,
      ).toBe(false);
    }
    expect(mayRecordEventFor({ researchConsent: true })).toBe(true);
  });
});

describe("event taxonomy · reconciled to W7 §28", () => {
  it("retires every old name and maps it to a live one", () => {
    // Requirement: `events.name` is text, so a stale name would write silently
    // rather than fail. The map exists so a removal is traceable and, if rows
    // ever carry an old name, so the migration target is written down.
    for (const [old, replacement] of Object.entries(RETIRED_EVENT_NAMES)) {
      expect(EVENT_NAMES, `${old} maps to a name that no longer exists`).toContain(
        replacement,
      );
      expect(EVENT_NAMES, `${old} was retired but is still live`).not.toContain(
        old,
      );
    }
  });

  it("covers the distinctions W7 §28 requires, not just similar names", () => {
    /**
     * Requirement: W7 says the strings are "functional working names" and may
     * change, so matching names proves little. What is binding is that the
     * product can tell these apart. Each pair below is a distinction W7 states
     * explicitly and the old W6 taxonomy could not express.
     */
    // §28.2 — activation is separable from repeat capture
    expect(EVENT_NAMES).toContain("tree_created");
    expect(EVENT_NAMES).toContain("moment_created");
    // §28.5 — attempt, success and failure are three different facts
    expect(EVENT_NAMES).toContain("moment_create_started");
    expect(EVENT_NAMES).toContain("moment_create_failed");
    // §28.3 — partial failure is not the same as completion
    expect(EVENT_NAMES).toContain("history_import_completed");
    expect(EVENT_NAMES).toContain("history_import_partial_failure");
    // §28.6 — "Do not treat Add Tree CTA impression as expansion"
    expect(EVENT_NAMES).toContain("second_tree_started");
    expect(EVENT_NAMES).toContain("second_tree_created");
    // §28.8 — object travel: publishing, viewing and recipient activation
    expect(EVENT_NAMES).toContain("share_published");
    expect(EVENT_NAMES).toContain("recipient_tree_created");
  });

  it("keeps the operational events W7 has no reason to specify", () => {
    // Requirement: a data subject exercising Art. 15 or Art. 17 is not a
    // product flow W7 has an opinion about, and it must still be instrumented.
    // Deleting these to match a product spec would lose real instrumentation.
    for (const name of [
      "export_requested",
      "account_deleted",
      "research_job",
      "field_published",
      "instrument_error",
    ]) {
      expect(EVENT_NAMES).toContain(name);
    }
  });

  it("has no duplicate names", () => {
    // Requirement: a duplicated union member is invisible in TypeScript and
    // would make the count assertions above pass while hiding a paste error.
    expect(new Set(EVENT_NAMES).size).toBe(EVENT_NAMES.length);
  });
});
