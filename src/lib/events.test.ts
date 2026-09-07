import { describe, expect, it } from "vitest";
import { isPrompted } from "./events-rules";

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
