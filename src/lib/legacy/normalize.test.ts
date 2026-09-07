import { describe, expect, it } from "vitest";
import {
  normalizeClimate,
  normalizeTemperature,
  slugify,
  splitCommonNames,
} from "./normalize";

describe("normalizeClimate", () => {
  it("accepts enum values case-insensitively", () => {
    expect(normalizeClimate("Tropical")).toEqual(["tropical"]);
  });
  it("extracts several values from free text and drops noise", () => {
    expect(normalizeClimate("Temperate to Subtropical (cool winters)")).toEqual([
      "temperate",
      "subtropical",
    ]);
  });
  it("returns an empty list for unknown text", () => {
    expect(normalizeClimate("Alpine")).toEqual([]);
    expect(normalizeClimate(undefined)).toEqual([]);
  });
});

describe("normalizeTemperature", () => {
  it("keeps min < max ranges", () => {
    expect(normalizeTemperature(15, 35)).toEqual({ min: 15, max: 35 });
  });
  it("rejects inverted, equal, non-numeric or implausible ranges", () => {
    expect(normalizeTemperature(35, 15)).toBeNull();
    expect(normalizeTemperature(10, 10)).toBeNull();
    expect(normalizeTemperature("10", 20)).toBeNull();
    expect(normalizeTemperature(-80, 20)).toBeNull();
  });
});

describe("slugify / splitCommonNames", () => {
  it("builds stable technique keys", () => {
    expect(slugify("Pruning (Structural & Maintenance)")).toBe(
      "pruning-structural-and-maintenance",
    );
  });
  it("splits and de-duplicates common names", () => {
    expect(splitCommonNames("Ficus, Fig, Ginseng Ficus, Fig")).toEqual([
      "Ficus",
      "Fig",
      "Ginseng Ficus",
    ]);
  });
});
