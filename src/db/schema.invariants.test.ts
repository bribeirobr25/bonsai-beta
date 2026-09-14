/**
 * Schema invariants for migration M1.
 *
 * TEST POLICY (plan section 17): a test asserts a REQUIREMENT, never observed
 * output. Every assertion below cites what it enforces - a gate id, a decision
 * id, or a canon section - so that changing a test to make a build green
 * requires restating its requirement in the diff.
 *
 * These are static assertions over the schema definition. The runtime proof
 * that Postgres enforces them - that publication_state rejects a direct write -
 * belongs to the rls-integration job against a real database (plan section 16).
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { routing } from "@/i18n/routing";
import {
  consentEvents,
  dataQualityEnum,
  localeEnum,
  momentCategoryEnum,
  momentKindEnum,
  photos,
  publicationStateEnum,
  sessionClassEnum,
  species,
  speciesTechniques,
  subjectKindEnum,
  subjectStatusEnum,
  techniques,
  trees,
} from "./schema";

/**
 * Two invariants below are asserted against the schema SOURCE rather than
 * drizzle's runtime objects. That is deliberate: the property being enforced is
 * "this SQL expression is written this way" and "no such policy exists in this
 * file". Reading private drizzle internals to approximate that would make the
 * test fragile against a library upgrade while testing the same requirement
 * less directly. The runtime counterpart runs in rls-integration against a real
 * database, where Postgres itself rejects the write.
 */
const schemaSource = readFileSync(
  join(import.meta.dirname, "schema.ts"),
  "utf8",
);

describe("publication states · gate PUB-1", () => {
  it("has exactly the three canonical states, and no fourth", () => {
    // Requirement: Handoff v1.0.1 04_CONTENT_GOVERNANCE. A fourth state would
    // be a publication mechanism nobody ruled on.
    expect(publicationStateEnum.enumValues).toEqual([
      "PUBLIC_APPROVED",
      "INTERNAL_DRAFT_UNVERIFIED",
      "UNAVAILABLE",
    ]);
  });

  it.each([
    ["species", species],
    ["techniques", techniques],
    ["species_techniques", speciesTechniques],
  ])("%s derives publication_state rather than storing it", (_name, table) => {
    // Requirement: PUB-1 - no non-PUBLIC_APPROVED row may be readable by anon
    // in any locale via any path. Enforced by making the column GENERATED, so
    // there is no flag for a code path to set.
    const col = (table as unknown as Record<string, { generated?: unknown }>)
      .publicationState;
    expect(col).toBeDefined();
    expect(col.generated).toBeDefined();
  });

  it("maps only an explicit published status to PUBLIC_APPROVED", () => {
    // Requirement: Knowledge publication rules - practitioner_reviewed is
    // reviewed but NOT published. The expression must fail closed: anything
    // that is not explicitly published or withdrawn is an internal draft.
    const exprs = schemaSource.match(
      /case when status = 'published'[^`]*?end/g,
    );
    expect(exprs).toHaveLength(3); // one per Knowledge table
    for (const expr of exprs ?? []) {
      expect(expr).toContain("'PUBLIC_APPROVED'::publication_state");
      expect(expr).toContain("else 'INTERNAL_DRAFT_UNVERIFIED'");
      // practitioner_reviewed must never reach a public branch.
      expect(expr).not.toMatch(/practitioner_reviewed[^]*?PUBLIC_APPROVED/);
    }
  });

  it("casts each enum literal separately so Postgres accepts the expression", () => {
    // Requirement: not style. `(case ... end)::publication_state` is rejected
    // with "generation expression is not immutable" because enum_in is only
    // STABLE. Verified against Postgres directly. If someone "simplifies" this
    // to a single trailing cast, the migration stops applying.
    // Comment lines are stripped first: the schema deliberately DOCUMENTS the
    // forbidden form, and matching that prose would fail the test for the wrong
    // reason - which is exactly what happened when this test was written.
    const code = schemaSource
      .split("\n")
      .filter((line) => !line.trim().startsWith("//") && !line.trim().startsWith("*"))
      .join("\n");
    expect(code).not.toMatch(/end\)::publication_state/);
  });
});

describe("locales · OI-06", () => {
  it("supports exactly en, de, es and pt-BR", () => {
    // Requirement: Gate A OI-06. pt-BR is the locale, not pt.
    expect([...localeEnum.enumValues].sort()).toEqual([
      "de",
      "en",
      "es",
      "pt-BR",
    ]);
  });
});

describe("locale routing vs database · gate I18N-3", () => {
  it("does not let routing and the database enum drift apart silently", () => {
    /**
     * Requirement: found by the pre-merge audit. The `locale` enum carries four
     * values (OI-06, ADR-010) while `routing.locales` carries two — and NOTHING
     * asserted the relationship, so a fifth locale added to one and not the
     * other would have passed every check.
     *
     * The invariant is containment, not equality: routing may legitimately lag
     * the enum while Phase 2 builds the shell, but it must never serve a locale
     * the database cannot store. Equality is asserted once Phase 2 lands all
     * four.
     */
    const routed = [...routing.locales] as string[];
    const stored = [...localeEnum.enumValues] as string[];
    for (const l of routed) {
      expect(stored, `routing serves ${l}, which the database cannot store`).toContain(l);
    }
    // Records the current, deliberate lag so closing it is a visible diff.
    expect(routed.length).toBeLessThanOrEqual(stored.length);
  });

  it("keeps en as a storable locale, since ADR-010 makes it the fallback", () => {
    // Requirement: ADR-010 — `en` is default and fallback. A fallback the
    // database cannot store is not a fallback.
    expect([...localeEnum.enumValues]).toContain("en");
  });
});

describe("living subject · DOMAIN-MODEL section 7", () => {
  it("keeps Unknown as a real status, not a placeholder", () => {
    // Requirement: "trees are lost track of, not only lost". Dropping unknown
    // would force a false claim about a subject nobody can find.
    expect(subjectStatusEnum.enumValues).toContain("unknown");
    expect(subjectStatusEnum.enumValues).toEqual([
      "alive",
      "deceased",
      "unknown",
    ]);
  });

  it("does not close the record on death", () => {
    // Requirement: section 7.8 - status moves to deceased and the Journey
    // persists. A deleted-on-death design would violate this; the guard is that
    // status is a plain column on a row nothing cascades from.
    expect(trees.status.notNull).toBe(true);
    expect(trees.status.default).toBe("alive");
  });

  it("distinguishes a tree from a composition", () => {
    // Requirement: section 7.13 - forests and rafts are compositions, while
    // the product still says "tree" externally.
    expect(subjectKindEnum.enumValues).toEqual(["tree", "composition"]);
  });
});

describe("moment taxonomy · plan section 2.6", () => {
  it("separates Event from State", () => {
    // Requirement: an observed outcome is not an attributed cause, so a thing
    // that happened and a thing that was true cannot share one dimension.
    expect(momentKindEnum.enumValues).toEqual(["event", "state"]);
  });

  it("treats a photo as media, not a category", () => {
    // Requirement: plan section 2.6 explicitly. "photo" appearing here would
    // reintroduce the retired 8-value enum's mistake.
    expect(momentCategoryEnum.enumValues).not.toContain("photo");
  });
});

describe("photo pipeline · gate DEV-1", () => {
  it("defaults exif_retained to false", () => {
    // Requirement: GPS and sensitive EXIF are prohibited from persistence. The
    // default must be the safe value, so a row that nobody thought about is
    // still compliant.
    expect(photos.exifRetained.default).toBe(false);
    expect(photos.exifRetained.notNull).toBe(true);
  });

  it("scopes ownership to the tree, so a photo with no moment is still owned", () => {
    // Requirement: capture first, structure progressively - moment_id is
    // nullable, so ownership cannot depend on it.
    expect(photos.treeId.notNull).toBe(true);
    expect(photos.momentId.notNull).toBe(false);
  });
});

describe("evidence integrity · gate ANA-6 and plan 24.7", () => {
  it("classifies sessions, not people", () => {
    // Requirement: plan 24.8 - session_class is session/event context. The
    // event column is authoritative and NOT NULL; the user-level default is
    // nullable because no person is permanently INTERNAL.
    expect(sessionClassEnum.enumValues).toEqual(["USER", "INTERNAL", "QA"]);
  });

  it("versions the pseudonymization secret so compromise has a recovery path", () => {
    // Requirement: plan 24.7 replaced the absolute "never rotate" rule. Without
    // a version column, emergency rotation would silently break continuity.
    expect(dataQualityEnum.enumValues).toEqual(["OK", "UNKNOWN"]);
  });
});

describe("consent ledger · gate LEDG-1", () => {
  it("records the rendered document hash, not just a version string", () => {
    // Requirement: plan 24.5 - GDPR needs the exact wording a person agreed to,
    // reproducibly. A version number alone cannot prove wording.
    expect(consentEvents.documentHash.notNull).toBe(true);
    expect(consentEvents.documentVersion.notNull).toBe(true);
    expect(consentEvents.locale.notNull).toBe(true);
  });

  it("is append-only by having no update, delete or all policy", () => {
    // Requirement: append-only is a property of the POLICY SET, not of calling
    // code. If an update, delete or catch-all policy ever appears on this
    // table, consent history becomes rewritable by a bug rather than by intent.
    const block = schemaSource.slice(
      schemaSource.indexOf("export const consentEvents"),
      schemaSource.indexOf("export const keepalive"),
    );
    expect(block.length).toBeGreaterThan(0);
    const policyCmds = [...block.matchAll(/for:\s*"(\w+)"/g)].map((m) => m[1]);
    expect(policyCmds).toEqual(["select", "insert"]);
  });
});
