/**
 * Accessibility invariants · gate A11Y-1.
 *
 * WHY THIS FILE EXISTS: the pre-merge audit found there was **no accessibility
 * gate at all** in a 38-row registry, and not one component used `aria-*` or
 * `alt`. W7 states requirements — the current language must be announced, the
 * locale control must be keyboard accessible, no flag-only affordances — and
 * nothing verified any of them.
 *
 * These are static assertions over the component source. The rendered
 * counterpart was verified in a real browser (skip link hidden until focused
 * then visible, `aria-current` present, `lang` on both locale elements); that
 * is recorded in VISUAL-VALIDATION and cannot be asserted here without a DOM.
 *
 * TEST POLICY (§17): each assertion cites the requirement it enforces.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const read = (f: string) =>
  readFileSync(join(import.meta.dirname, f), "utf8");
const localeSwitch = read("locale-switch.tsx");
const header = read("site-header.tsx");
const layout = readFileSync(
  join(import.meta.dirname, "../app/[locale]/layout.tsx"),
  "utf8",
);

describe("locale control · gate A11Y-1 · W7 i18n contract", () => {
  it("announces which language is current", () => {
    // Requirement: W7 requires the current language be announced. Before this,
    // only the OTHER locale rendered — as a link reading "Deutsch" — so a
    // screen-reader user had nothing telling them the page was already English.
    expect(localeSwitch).toContain('aria-current="true"');
  });

  it("marks the language of each locale name in its own language", () => {
    // Requirement: no flag-only controls, and a usable one. Without `lang`, a
    // screen reader pronounces "Deutsch" with English phonemes.
    expect(localeSwitch).toMatch(/lang=\{locale\}/);
    expect(localeSwitch).toMatch(/lang=\{other\}/);
    expect(localeSwitch).toMatch(/hrefLang=\{other\}/);
  });

  it("uses a link, not a click handler, so it is keyboard reachable", () => {
    // Requirement: keyboard accessible. A div with onClick is not.
    expect(localeSwitch).toContain("<Link");
    expect(localeSwitch).not.toMatch(/onClick/);
  });

  it("takes its labels from the message catalogue, never inlined", () => {
    // Requirement: W3 owns user-facing strings, and a hard-coded language name
    // cannot be corrected by W3 without a code change.
    //
    // Comments are stripped first. This test failed on its first run by
    // matching its own file's prose, which explains why "Deutsch" appears
    // there — the third time a source-text assertion has tripped on a comment
    // documenting the very rule it enforces.
    const code = localeSwitch
      .split("\n")
      .filter((l) => {
        const t = l.trim();
        return !t.startsWith("//") && !t.startsWith("*") && !t.startsWith("/*");
      })
      .join("\n");
    expect(code).not.toMatch(/"(English|Deutsch|Espa\u00f1ol)"/);
  });
});

describe("page structure · gate A11Y-1 · WCAG 2.4.1", () => {
  it("offers a skip link to the main landmark", () => {
    // Requirement: WCAG 2.4.1 Bypass Blocks. Cheap with one nav block; the
    // header only grows, and retrofitting it after ten screens is not cheap.
    expect(header).toContain('href="#main"');
    expect(header).toContain("skipToContent");
  });

  it("hides the skip link until it is focused", () => {
    // Requirement: it must not be visible clutter for a mouse user, and must
    // become visible for a keyboard user. sr-only alone would keep it hidden
    // even when focused, which is worse than not having it.
    expect(header).toContain("sr-only");
    expect(header).toContain("focus:not-sr-only");
  });

  it("gives the skip link somewhere to land", () => {
    // Requirement: a skip link pointing at a missing id is a dead control that
    // reports as compliant.
    expect(layout).toContain('id="main"');
  });
});
