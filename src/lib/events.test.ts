import { describe, expect, it } from "vitest";
import { isPrompted, resolveSessionClass } from "./events-rules";

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
