/** Normalisation helpers for the legacy species file (plan Part 5.3 / 5.6). */

export const CLIMATES = ["tropical", "subtropical", "temperate", "mediterranean"] as const;
export type ClimateValue = (typeof CLIMATES)[number];

/** "Temperate to Subtropical" → ["temperate", "subtropical"]; unknown words dropped. */
export function normalizeClimate(raw: string | null | undefined): ClimateValue[] {
  if (!raw) return [];
  const found = new Set<ClimateValue>();
  for (const token of raw.toLowerCase().split(/[^a-z]+/)) {
    if ((CLIMATES as readonly string[]).includes(token)) found.add(token as ClimateValue);
  }
  return [...found];
}

/** Valid only when both are finite numbers, min < max, and within a plausible band. */
export function normalizeTemperature(
  min: unknown,
  max: unknown,
): { min: number; max: number } | null {
  if (typeof min !== "number" || typeof max !== "number") return null;
  if (!Number.isFinite(min) || !Number.isFinite(max)) return null;
  if (min >= max) return null;
  if (min < -60 || max > 60) return null;
  return { min: Math.round(min), max: Math.round(max) };
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** "Ficus, Fig, Ginseng Ficus" → ["Ficus", "Fig", "Ginseng Ficus"] */
export function splitCommonNames(raw: string | null | undefined): string[] {
  if (!raw) return [];
  return [...new Set(raw.split(/[,;/]/).map((s) => s.trim()).filter(Boolean))];
}

export function normalizeScientificName(raw: string): string {
  return raw.replace(/\s+/g, " ").trim();
}
