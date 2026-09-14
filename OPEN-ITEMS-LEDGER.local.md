# Open items ledger · local working copy

**Status:** LOCAL ONLY · gitignored · **not** a shared artifact
**Generated:** 14 September 2026, at the close of Phase 1
**Regenerate from:** every entry cites a committed source, so this file can be
rebuilt if lost. It is a convenience index, **not** the source of truth.

> **Read this first.** Being gitignored has consequences: it does not survive a
> fresh clone, never reaches the workfronts, and is gone if this machine is. So
> **nothing here exists only here.** Each entry names where it is recorded in
> committed form — the plan's blocker register, a gate check's output, an ADR
> status line, or a protocol document. If this file and a committed source
> disagree, **the committed source wins.**

---

## A · Blocked on the Founder

Nothing here can be closed by implementation.

| # | Item | Blocks | Committed source |
|---|---|---|---|
| **B-5** | Controller contact address and §5 DDG imprint details (legal name, postal address, responsible person) | **Hard-blocks Gate C.** `LEG-1` fails a release while placeholders stand; four are live in `privacy.{en,de}.md` and `messages/{en,de}.json` | plan §30 |
| **B-8** | A qualifying practitioner for Knowledge review | **Publishing** horticultural guidance in P3 — not building or exercising the machinery. Sharpened by the A-4 correction: Founder editorial review alone does not satisfy this | plan §30 · ADR-010 |
| **B-12** | Legal approval for legitimate-interest telemetry | Switching T1 telemetry **on**. Built inert; `TELEMETRY_LEGITIMATE_INTEREST_ENABLED` defaults `"false"` and also requires `docs/07-legal/TELEMETRY-LEGAL-APPROVAL.md` | plan §30 · `src/lib/telemetry-activation.ts` |
| **B-19** | Recurring infrastructure/operations budget ceiling | The 80%-quota upgrade decision and the Wave-1 participant cap. **The one remaining open assumption (A-7)** — and an unlimited budget must not be inferred from its absence | plan §30, §1.2 |
| **B-14** | Account-deletion immediacy; export image packaging | Later trust decisions. Current behaviour retained meanwhile | plan §30 |
| **B-15** | Whether researcher contact is used in the live protocol | Live protocol operation. Mechanism kept available, not exercised | plan §30 |
| — | **Provision the Production Supabase project** | Any deploy. No staging exists by ruling, so this is the only remote project | ADR-011 |
| — | **Do we want playbooks at all?** | Nothing. Nine executable checks now do the enforcing the proposed `SECURITY-PLAYBOOK.md` would have described | `AUDIT-PROTOCOL-PRE-MERGE.md` Front 3 |

## B · Routed to workfronts

| # | Owner | Item | Committed source |
|---|---|---|---|
| **B-13** | Strategy | *Resolved for F0.* F1 sample design and additional bands remain | plan §21.2 |
| **B-21** | Strategy | L2 **F1** sample design and MIXED/FAIL bands — `DEFERRED UNTIL F0 SURVIVES`; implementation must not invent them | plan §30 |
| **B-22** | Strategy | L1 numeric thresholds — deferred while no workshop is scheduled. **L1 and L2 must never be pooled** | plan §30 |
| **B-23** | Strategy | The `COM-EVID-1` exception path, if ever invoked: an explicit record tied to a concrete design confound | plan §21.1 |
| **B-24** | Strategy | `events.prompted` has 2 values; W7 §29 specifies 5 return classifications. **`none` means not-researcher-prompted and must never be read as "voluntary."** Widening needs the protocol — §29 marks the rules `DEFINE ONLY WHEN A SPECIFIC TEST REQUIRES IT` | plan §30 · `src/db/schema.ts` |
| **B-16** | W3 + reviewer | Permission and accurate role wording to name a reviewer on the public `Reviewed` badge. Generic wording ships without it | plan §30 |
| **B-20** | W7 | Stale `v1.1.1` labels inside the v1.1.2 package. **No new package required** — correct in the next material release | plan §30 |
| **B-18** | All senders | The W2/W3/W4 addenda arrived with no `SHA256SUMS`. Integrity attested by me, not the sender | plan §30 |
| — | W3 | **i18n voice review**, when `es`/`pt-BR` land. W3's ruling is authoritative for every user-facing string; implementation flags literal-translation candidates and must not rewrite them | `AUDIT-PROTOCOL-PRE-MERGE.md` Front 7 |
| — | W7 | Bilingual 404 declares a single `lang` while rendering both languages — a screen reader reads the English half in German. W7 owns the surface | `VISUAL-VALIDATION-2026-09-12.md` |

## C · Verification that could not be performed, and why

These are **not** passing. They are unasserted, and each names what would make it assertable.

| What | Why not | When | Source |
|---|---|---|---|
| Rate limiter **wiring** end to end | Invoking a Server Action needs a `Next-Action` encoded request; a raw POST returns 200 without running the action | Gate B (P10) | commit `b6b63b12` |
| `TEL-1` **application** | `telemetryMayCollect()` is called by nothing but its own test, because the T1 emission path does not exist. The check reports **"TEL-1 partial"** rather than claiming enforcement | with the T1 layer | `scripts/check-analytics-contract.mjs` |
| `CSP-1` **static-rendering half** | The public Knowledge routes it guards do not exist yet | P2 | plan §14.1 |
| **Quantity bucketing** in event props | No guard exists. No violation today — one call site, both values non-quantities — but W7 §28.3 specifies photo *counts* for import events | **P5, before import events ship** | plan §22 · `ANA-1` |
| 24-hour deletion claim | Nothing asserts the storage objects and rows are actually gone | P4 | `COPY-1` |
| Strictly-necessary-cookies claim | Needs a browser context to enumerate what is set | P10 | `COPY-1` |
| "Not sold or used for advertising" | A negative about intent, not a mechanism. Enforceable halves are `LEG-2` and `connect-src` | — | `COPY-1` |
| EU-hosting claim | Infrastructure configuration, verifiable only against the live project | Gate C | `COPY-1` |
| **WCAG contrast ratios** (1.4.3) | `A11Y-1` covers structure, names, skip link and current-language. Contrast needs the full palette and W7's visual authority | P2, with the design system | `AUDIT-PROTOCOL-PRE-MERGE.md` Front 3 |
| Data **presentation** half of Front 6 | No data is rendered yet, so transformation-to-information is untestable | P4/P5 | Front 6 |

## D · Deliberate cleanup debt · the M1b drop list

Migrations are non-destructive by policy: add first, drop once nothing reads it.
**With no staging environment, a migration first meets real data in production**
— so each drop needs a guard, not just a `DROP COLUMN`.

| Object | Superseded by | Live `src/` refs | Note |
|---|---|---|---|
| `users.stratum` | `cohort` + `qualification_rule_version` | 2 | nullable and defaultless since M1 |
| `events.source` | `source_slug` (W4 slug format) | 75 | high reference count — migrate call sites first |
| `photos.storage_key` | `normalized_key` / `derivative_key` | 4 | drop only after the P4 pipeline writes the new keys |
| `moments.type` | `moment_kind` + `moment_category` | 119 | retired **as authority**, still the only populated column until M1b backfills |
| `RETIRED_EVENT_NAMES` (16) | current taxonomy | — | remove once no rows carry an old name. Nothing is deployed, so today that is trivially true |
| `src/lib/supabase/client.ts` | — | 0 importers | retained on purpose for P4; `connect-src` already derives the Supabase origin so it works locally. Delete if P4 ships without it |

## E · Phase-deferred by design

Not debt. Recorded so "not implemented" is never mistaken for "overlooked".

| Item | Phase | Source |
|---|---|---|
| ADR-005 Postgres FTS + `pg_trgm` | P2 | ADR status line |
| ADR-006 image pipeline, two derivatives | P4 | ADR status line |
| ADR-008 no realtime · ADR-009 Community on same Postgres | P8 | ADR status lines |
| ADR-010 **partially** implemented — enum has four locales, `routing.locales` serves two with `defaultLocale: "de"`; `en` default flip and family matching are P2. Guarded by `I18N-3` | P2 | ADR-010 |
| **Public routes render dynamically.** `SiteHeader` calls `getCurrentUser()`, so the layout is per-request. `/explore`, `/species`, `/techniques`, `/search` must be CDN-served — the auth-dependent header must become a client component or streamed slot **before** those routes land | **P2, and it is a prerequisite** | plan §14.1 |
| `es` / `pt-BR` message catalogues | P2 | Front 7 |

---

## Maintaining this file

Update it whenever an audit produces a finding that is **not** fixed in the same
change. An unfixed finding that is not written down is indistinguishable from
one nobody noticed.

Close an entry by deleting it and pointing at the commit that closed it in the
message. Do not keep a "done" section here — the committed history is that
record, and a local file accumulating resolved items stops being read.

**Regenerating:** §A and §B are the plan's §30 blocker register. §C is the
"could not verify" lines from the audit protocols plus `COPY-1` output. §D is
the schema comments marked retired. §E is the ADR status lines. Running
`pnpm check:privacy-claims` and `pnpm check:analytics` prints §C's live half.
