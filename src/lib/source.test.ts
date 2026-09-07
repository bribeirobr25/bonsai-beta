import { describe, expect, it } from "vitest";
import { sanitizeSource } from "./source";

describe("sanitizeSource", () => {
  it("accepts slugs and lower-cases them", () => {
    expect(sanitizeSource("Workshop")).toBe("workshop");
    expect(sanitizeSource("qr_10-00")).toBe("qr_10-00");
  });
  it("rejects anything else", () => {
    expect(sanitizeSource("<script>")).toBeNull();
    expect(sanitizeSource("a".repeat(65))).toBeNull();
    expect(sanitizeSource(["x"])).toBeNull();
    expect(sanitizeSource(undefined)).toBeNull();
  });
});
