# Repository audit · 19 November 2026

**Type:** read-only audit. Nothing was fixed; this document records what was
read, what was verified, and what was found.
**Subject:** `main` at `8953619d` (merge of PR #15, Phase 1 close, 14 September 2026).
**Method:** every hand-written file read, every check and test suite run,
claims falsified against a running local stack (database probes in rolled-back
transactions, the Supabase REST and Storage APIs, a production build driven by
a real browser), all against the local development stack only. Probe rows were
removed, except anonymous events and one unconsented test sign-in left in the
local database.

> **BUILD STATUS ≠ EVIDENCE STATUS** applies to this document too: a finding
> marked *confirmed* was reproduced; one marked *code reading* was not.

---

## 1. Summary

1. **No project canon beyond v1.0 exists in reach.** `AGENTS.md` and
   `README.md` point to a private canon repository (Strategy v1.1.2, W7
   v1.1.2, the phased implementation plan, 17 ADRs, the audit protocols, the
   decision register). It is neither on the founder's machine nor in the
   founder's GitHub account. Per the founder: **if it is not there, it does not
   exist.** The only strategy documents that exist are *Pre-MVP Canon v1.0*
   (2 September 2026), reachable only through the PR #14 ref (§3.2).
2. **The application is not deployed.** No hosting exists for it, so none of
   the findings below is exposed to real users today.
3. **The code is well-built and self-aware.** 84 unit and 57 RLS tests pass,
   typecheck, lint and the production build are clean, and seven gate checks
   pass. Schema and migrations do not drift.
4. **Several hard rules in `AGENTS.md` are contradicted by the code**,
   confirmed live: Knowledge provenance (PROV-1) can be bypassed three ways;
   publication is per row rather than per locale; consent changes in Settings
   write no consent record; and four privacy-notice sentences promise more
   than the code does (§4.1).
5. **The most serious finding is architectural (§4.2):** a signed-in user can
   bypass the application and write to the database and to Storage directly
   through Supabase's REST API, because the `public` schema is exposed there
   and the owner policies scope rows, not columns.
6. **Repository governance does not match the ratified policy (§4.5):** `main`
   is unprotected, squash-merge is enabled, and a file marked "LOCAL ONLY" is
   committed in this public repository.

---

## 2. Scope and coverage

### Read in full
`AGENTS.md`, `README.md`, `OPEN-ITEMS-LEDGER.local.md`, `.gitattributes`,
`.gitignore`, `.env.example`, `.audit-baseline.json`, `package.json`, the CI
workflow, all ten scripts in `scripts/`, `src/db/schema.ts`, all eight SQL
migrations, every route, page, server action, component and library module,
every test file, both privacy notices, both message catalogues (German
compared by keys), `next.config.ts`, `vercel.json`, the Vitest, Drizzle,
TypeScript and ESLint configs, `supabase/config.toml`, and the messages of all
31 Phase-1 commits.

### Read outside the repository
- The seven *Pre-MVP Canon v1.0* documents at `refs/pull/14/head` (one of
  them, `parallel-work.txt`, at outline level; it declares itself superseded).
- The earlier research log at commit `0030e009` (Gate 0 evidence in full;
  later sections at outline level plus the shadow-test score and conclusion).
- Three W7 high-fidelity v0.1 boards (8 September 2026), held outside the
  repository: Website/Knowledge, Share/Public Journey, Community/Circle.

### Not read
`pnpm-lock.yaml`, the generated Drizzle snapshots, the favicon, and the 2025
prototype branches (`branch-1`, `reviewing-data`), which `AGENTS.md` ranks as
legacy input, never authority.

---

## 3. Documentation and authority

### 3.1 What this repository says about itself
The repository is a **code-only public mirror**. Three gates cannot run here
and exit non-zero by design: `check:adrs`, `check:scheduled-jobs`,
`audit:unit`. Consequently `pnpm audit:merge` (which `AGENTS.md` requires
before merging) and `pnpm check:gates` cannot pass in this checkout.

### 3.2 The strategy documents that exist
*Strategic Foundation / Pre-MVP Canon v1.0*, frozen 2 September 2026, merged
in PR #14 and later removed from `main` by a history rewrite. GitHub keeps PR
refs, so the files remain **publicly fetchable** at `refs/pull/14/head`:

| Document | Role |
|---|---|
| `CURRENT-EVIDENCE-AND-DECISIONS.md` | Entry point; evidence status per claim |
| `PROJECT-BRIEF.md` | Venture strategy, conventions, 14-idea portfolio, P1–P3 |
| `DOMAIN-MODEL.md` | Object and recording model; legacy corpus assessment |
| `RESEARCH-BRIEF-behavioural-validation.md` | Hypotheses H1A–H7, Track A/B, thresholds |
| `APP-MARKET-SCAN.md` | 18 known competitors, store traction |
| `bonsai-deep-research-report.md` | Research plan (Portuguese), not results |
| `parallel-work.txt` | Superseded research log |

**Thesis:** a persistent record for the life of a bonsai, preserving journey
and provenance across years and stewards, *before* any advice. Sequence:
Tree Identity → Journey → Living Provenance → Contextual Relationships →
Structured Outcomes → Decision Support. Evidence taxonomy: `OBSERVED` ·
`SUPPORTED SIGNAL` · `CONTRADICTED` · `UNVALIDATED` · `DEFERRED`; a test that
cannot run is `UNVALIDATED`, never `FAIL`.

**The code follows v1.0 closely.** Living subject with composition, status
`alive | deceased | unknown`, Event vs State, intent as a field, outcome
separated from attributed cause, species confidence, date precision, appended
corrections (`superseded_by`), death not closing the record. Concepts v1.0
places later — claims, lineage, steward roles, attestations, evidence states —
are absent from the schema, which is consistent with phasing, not a gap.

### 3.3 The earlier research log (`0030e009`)
The Gate 0 evidence the canon was distilled from. Two observations:

- **The canon was deliberately more conservative.** Gate 0 labelled H5
  (provenance) and H6 (tree-led community) `STRONG SIGNAL`; the canon lists
  both as `UNVALIDATED`, since its taxonomy has no "strong" state and both
  need participant access. A correction, not drift.
- **The canon dropped market data that matters.** Gate 0 recorded Jooni at
  **10K+** Google Play downloads, Appy Bonsai at 89 Play reviews and Yoi at
  only 10+ downloads. `APP-MARKET-SCAN.md` carries none of them and treats
  Bonsai Empire as the only product confirmed at that scale.
- All Gate 0 citations came through an AI search tool; the 45 sources were
  not re-verified in this audit.

### 3.4 The W7 visual boards
Illustrative v0.1 boards conflict with written rules the code enforces, which
is the situation `AGENTS.md` anticipates ("textual W7 authority beats
conflicting illustrative visuals"):

- they carry copy the COPY-2 check prohibits ("A healthier you", "more mindful
  life", "Connect with other bonsai enthusiasts", "trusted");
- they show **password** login, while magic link is ratified;
- they show an "Unverified" content badge on public pages, while `AGENTS.md`
  says such a badge "is not a publication mechanism".

### 3.5 Documentation drift in this repository

| Where | Says | Actually |
|---|---|---|
| `README.md:58`, `AGENTS.md` | consent v0.3 is in force | `CONSENT_VERSION = "0.4"` (`src/lib/env.ts`) |
| `messages/*.json` `impressum.note` | refers to CONTENT-CONSENT-v0.3 | v0.4 |
| `AGENTS.md:102` | 38 gate rows | 40 since commit `bc1d1f86` |
| `src/db/schema.ts:68, 228, 910` | `users.initial_origin`, `qualification_rule_version` | neither column exists |
| `scripts/check-service-role.mjs:9`, `src/lib/events.ts:5,16` | four / seven / "a fifth" exceptions | seven |
| `src/lib/events-rules.ts:31` | "staging marks itself INTERNAL" | there is no staging (ADR-011) |
| `src/app/[locale]/layout.tsx:36` | pre-renders "all four locales" | two are routed |
| `messages/*.json` `landing.status` | "foundation (Phase 0)" | Phase 1 closed |
| `.github/workflows/ci.yml` | comments for the JOB-1 and OI-46 steps | the steps were removed; the comments end mid-sentence |
| `scripts/check-testability.mjs` | "or anything it re-exports" | only direct `server-only` imports are detected |
| `vitest.config.mts` | (exists) | dead duplicate; `vitest.config.ts` is the live config. The `.mts` aliases `server-only` to a no-op, which would hide exactly what `check:testability` guards |
| `src/lib/legacy/normalize.ts` | (exists) | no importer since the species seed was removed |

---

## 4. Findings

### 4.1 Hard rules contradicted · confirmed

**PROV-1 — "a published Knowledge field without provenance is a bug" and
"`reviewed_at` is never refreshed without an actual review event."**
The trigger (`supabase/migrations/20260912165000_prov1_publication_provenance.sql`)
was probed on a live database:

1. Deleting a published species' `field_sources` leaves it `PUBLIC_APPROVED`
   with zero provenance. The test suite only asserts that *further writes*
   are refused; the published row stays public.
2. The provenance lookup ignores `record_type` (`…sql:58`): a source row for a
   `tree` with the same id counts as species provenance.
3. `reviewed_at` can be re-stamped to `now()` together with an unreviewed
   content edit, and the row stays `PUBLIC_APPROVED`. Only *future* dates are
   rejected.
4. Provenance is checked per record, not per field.

**Per-locale publication.** `AGENTS.md` requires publication states enforced
"in the database, per locale". `species` and `techniques` hold every locale's
text in one JSON column (`description_by_locale`, `schema.ts:389, 466`) under
one status, so publishing a row publishes every language in it. Only
`species_techniques` has a `locale` column.

**Consent ledger (LEDG-1).** Granting or withdrawing research consent in
Settings (`src/app/[locale]/settings/actions.ts:30`) changes the user row but
writes no `consent_events` row. Confirmed live: after a withdrawal and a
re-grant the ledger still held one row.

**Privacy copy exceeding the guarantee.** Confirmed live through deletion and
export:

| Copy says | Code does |
|---|---|
| "Proof of consent … 3 years after account deletion" | `consent_events` cascades on delete (`schema.ts:955`); deleting the account removed the records immediately. COPY-1 registers this claim as *proven* by a test that only checks columns are non-null |
| Settings: after deletion, events "remain only in aggregate" | six individual pseudonymous rows remained |
| "Usage statistics run … without cross-device identifiers" | the per-user pseudonym links a signed-in person's events across devices (code reading) |
| the consent record hashes "the consent text as rendered" | `hashNotice` (`consent/actions.ts:141`) hashes the privacy notice; the checkbox wording comes from `messages/*.json` and is not hashed |

Also stated in the notice and not implemented: the 24-month aggregation of
usage events (known in the private jobs catalogue as "not built"), and
"date and category suggestions" for notes (no such feature exists yet).

### 4.2 Direct database access bypassing the application · confirmed

The application never uses Supabase's REST API, but the `public` schema is
exposed through it, the default grants give the `authenticated` role table
privileges, and every owner policy is **row-scoped, not column-scoped**. A
signed-in user holding their own session token could, without the app:

- create or update their own `users` row with any column value, including
  `is_admin`, `cohort`, `session_class_default` and `consent_version` — a
  latent privilege escalation the day any admin surface trusts `is_admin`;
- insert consent-ledger rows with arbitrary content, so the ledger is
  append-only but not authentic;
- set evidence fields on their own rows (moment origin, source and similar);
- upload files straight into their Storage folder, bypassing any server-side
  normalisation. The rule "GPS or sensitive EXIF is never retained" is
  therefore not enforced by the architecture.

The RLS suite tests rows, never columns, which is why it stays green. The
`authenticated` role cannot simply lose its grants: the app's own owner path
(`withOwnerDb`) runs as that role.

### 4.3 Security · confirmed unless marked

- **Session cookie readable by scripts.** `sb-*-auth-token` is not
  `HttpOnly` (the `@supabase/ssr` default). Combined with `script-src
  'unsafe-inline'` on every surface and `connect-src` permitting the Supabase
  origin, an injected inline script could read the token and use §4.2.
- **Leftover cookies.** Two PKCE code-verifier cookies remain after sign-in.
- **Dependency advisories** (`pnpm audit --prod`): 16 — 3 critical, 5 high,
  7 moderate, 1 low — mostly `next@16.3.4`. The critical ones need features
  this app does not use (`use cache`, `next/og`, `next/image`). The high
  **Server Actions denial-of-service** applies: sign-in, consent and Settings
  are Server Actions. Patched by `next@>=16.4.5`, `zod@>=4.6.6`,
  `sharp@>=0.35.5`, `source-map-js@>=1.2.2`.
- **Defined but unused rate limits.** The `consent` and `export` tiers
  (`src/lib/rate-limit-tiers.ts:24–25`) are never applied; the export endpoint
  is unthrottled.
- **Local auth config allows email + password sign-up** (`supabase/config.toml`);
  magic link is the ratified method. The production setting could not be checked.

### 4.4 Defects · code reading unless marked

- **Export photo links** (`src/app/api/export/route.ts:70, 96`): URLs are
  signed for `normalizedKey ?? storageKey` but looked up by `storageKey`, so
  every link will be `null` once Phase 4 writes `normalized_key`.
- **Export completeness** *(confirmed)*: no `consent_events`, no
  `researcher_contacts`; and events detached on withdrawal drop out of the
  person's own export although the pseudonym still links them.
- **Re-consent opt-out is not a withdrawal** (`consent/actions.ts:77`): it
  neither stamps `research_consent_withdrawn_at` nor detaches past events, as
  the Settings withdrawal does.
- **Account deletion can half-fail**: photos are removed before the auth user;
  if `deleteUser` fails the account survives without photos. The Storage
  listing reads at most 1,000 entries per folder with no paging
  (`settings/actions.ts:67`).
- **Evidence inflation** *(confirmed)*: every server render of the landing
  page writes an anonymous `landing_viewed` event classed `USER`, including
  crawlers and `curl`; `signup_started` (`sign-in/actions.ts:76`) fires on
  every magic-link request, including returning users.

### 4.5 Repository and governance · confirmed

- **`OPEN-ITEMS-LEDGER.local.md` is public.** It declares itself "LOCAL ONLY ·
  gitignored", yet it was committed in `50a429d2` and is on `main`.
- **The v1.0 canon is public** through `refs/pull/14/head` (§3.2). PR refs
  cannot be deleted by the repository owner; only GitHub Support can.
- **`main` is not protected** although `AGENTS.md` states "protected `main`,
  no direct pushes".
- **Squash-merge is enabled** although `AGENTS.md` prohibits it.
- **The Supabase CLI is unpinned in CI** (`version: latest`) while v3 has
  shipped and the project pins v2.
- CI last ran green on 14 September 2026 (PR #15 and its merge).

### 4.6 Test gaps

- `researcher_contacts` and `species_aliases` are not in the RLS denial suite.
- No test exercises column-level writes (§4.2).
- No test covers per-locale publication.
- The rate-limit integration test copies the production SQL instead of
  calling it (acknowledged in the test).
- The rate limiter's wiring into sign-in is not exercised end to end
  (acknowledged in the ledger).

### 4.7 Smaller observations

- Public pages render per request (`Cache-Control: private, no-store`); the
  ledger already lists this as a Phase 2 prerequisite.
- `/sign-in` carries the noindex meta tag but no `X-Robots-Tag` header.
- `messages/*.json` defines `deleteWord`, yet the action hard-codes the word.
- `sharp` and `exifr` are declared but unused (Phase 4 preparation).

### 4.8 Refuted during the audit

- *"The consent action may fail on Vercel because only the privacy route
  bundles `src/content`."* The production build trace shows the consent route
  includes both privacy files.

---

## 5. Verification record

| Check | Result |
|---|---|
| `pnpm typecheck`, `pnpm lint` | clean |
| `pnpm test` | 84 passed — matches `.audit-baseline.json` |
| `pnpm test:rls` | 57 passed — matches the baseline; also closes the open item in commit `9c628af6` |
| `pnpm build` | clean |
| `check:service-role`, `data-egress`, `copy-claims`, `analytics`, `privacy-claims`, `environments`, `testability` | pass (TEL-1 reports "partial" by design) |
| `check:adrs`, `check:scheduled-jobs`, `audit:unit` | not verifiable here (need canon) |
| `drizzle-kit generate` | "No schema changes" |
| Response headers on the wire | match `src/lib/security-headers.ts` on every surface |
| Browser flow: landing → magic link → consent → My tree → Settings → export → consent toggles → delete | works end to end; `?src=` attribution reaches the user row |
| Accessibility | skip link is the first focus stop and becomes visible; contrast passes WCAG AA in light and dark (lowest 5.82:1); no horizontal overflow at 360 px; no console errors |

---

## 6. Not verified

- Anything in the missing private canon (plan, ADRs, gate registry, protocols).
- Production configuration of Supabase and Vercel (nothing is provisioned).
- The 45 external sources cited by the Gate 0 research.
- Server-rendered behaviour under real crawlers and link prefetching.

---

## 7. Suggested order of work

Analysis only; no change was made.

1. Close the direct REST/Storage path (§4.2): stop exposing `public` through
   the REST API, restrict sensitive columns, make consent-ledger writes
   server-only, route uploads through the server.
2. Upgrade `next`, `zod`, `sharp` before any deployment (§4.3).
3. Fix PROV-1 and per-locale publication (§4.1) before any Knowledge is published.
4. Bring privacy copy and code into agreement (§4.1), then the consent-ledger
   and export defects (§4.1, §4.4).
5. Protect `main`, disable squash-merge, untrack the local ledger, and decide
   whether to ask GitHub Support to remove `refs/pull/14/head` (§4.5).
6. Correct the documentation drift (§3.5), including `AGENTS.md`'s references
   to a canon repository that does not exist.

---

## 8. Questions and answers

Questions asked by the founder after the audit, with the answers given, and one follow-up question (§8.6).

### 8.1 In one paragraph, what state is this project really in?

A well-engineered foundation with no product on it yet, and the paperwork it
was built under is gone. Sign-in, versioned consent with a consent record,
export and deletion, and a database that enforces who can see what all work,
and the tests and checks are unusually disciplined. But a user can only sign
in, consent, and land on an empty "My tree" page: there is no tree creation,
no moments, no photos, no Knowledge and no sharing, and nothing is deployed.
The plan, the 17 decision records and the 40-row gate registry the code cites
no longer exist anywhere, so three gates cannot run and "Phase 2" points at a
document that is not there. The venture itself is pre-validation: every
hypothesis that matters is still `UNVALIDATED`, above all whether people will
keep logging a tree for months, and no workshop or participant source is
scheduled. A sound base, and a validation instrument that has not started
validating.

### 8.2 What is the smallest set of work needed to put it live in a way to be proud of, and roughly how many days?

"Live" should mean the first thing v1.0 says to test: **a private tree
journey** — create a tree, add dated moments with photos, look back. Anything
less gives participants nothing to do; anything more tests things that come
later.

| Work | Days |
|---|---|
| Security before launch: close direct REST and Storage access, lock sensitive columns, make consent-record writes server-only, upgrade Next, zod and sharp | 3–4 |
| Privacy and consent correctness: a consent record on every change, export fixes, reliable deletion, align the notice with the code, stop the evidence inflation | 2–3 |
| Core product: create tree, add moment (date and precision, kind, note), journey timeline, corrections | 5–7 |
| Photo pipeline: direct upload to a private quarantine, server-side re-encode that strips EXIF and GPS, two derivatives, signed URLs, plus importing existing photos with their dates | 5–7 |
| Production setup: Supabase and Vercel projects, domain, Resend, branch protection, environment variables | 1–2 |
| End-to-end browser tests, accessibility and mobile pass, QA in production with `sessionClass` set | 2–3 |
| Rewrite AGENTS.md and README.md around what actually exists | 1 |

**About 19–27 working days, roughly four to five weeks**, for one person
working with an AI assistant. Deliberately excluded: Knowledge (blocked by
B-8), sharing, community, Spanish and Portuguese, and AI features. It assumes
the imprint details are supplied; without them a launch in Germany is not
possible at all.

### 8.3 What is fragile, half-done or likely to break, including known tech debt?

- **Security and integrity:**
  - signed-in users can write directly through the REST API and Storage (§4.2);
  - three ways around the provenance guard, PROV-1 (§4.1);
  - publication is per row, not per language;
  - the session cookie is readable by scripts while CSP allows inline scripts;
  - 16 known dependency vulnerabilities, including one that affects Server Actions.
- **Privacy correctness:**
  - consent changes in Settings leave no record;
  - the privacy notice promises a 3-year consent retention and "aggregate only" events, and the code does neither;
  - the export omits data, and its photo links will break in Phase 4;
  - deletion can half-fail and reads at most 1,000 Storage files per folder;
  - the 24-month event purge is not built.
- **Half-done by design:**
  - the M1b cleanup columns are still in use (`moments.type` is the only populated taxonomy, with 119 references; `events.source` has 75);
  - `prompted` has 2 values where W7 specifies 5;
  - tier-1 telemetry exists but is switched off;
  - four locales in the database, two served, and the default is `de` where ADR-010 says `en`;
  - public pages render per request;
  - the nonce-based CSP is not built;
  - the rate limiter fails open, and its sign-in wiring is untested end to end.
- **Process debt:**
  - three gates and `audit:merge` cannot pass;
  - documentation cites columns and a canon that do not exist;
  - a duplicate test config could silently hide test files;
  - the Supabase CLI version in CI is unpinned;
  - there are no end-to-end tests.

### 8.4 What is blocking progress right now?

1. **A governance decision (founder).** The canon is gone, so either
   re-baseline on v1.0, this audit and the code, or keep a process that points
   at nothing. Until that is decided, "next phase" is undefined.
2. **Legal inputs (founder):**
   - the imprint and controller details (B-5), which hard-block a public launch;
   - a qualifying practitioner (B-8), which blocks any Knowledge publishing;
   - a budget ceiling (B-19);
   - telemetry legal approval (B-12), which does not block launch.
3. **Infrastructure (founder, about an hour):** provision Supabase production,
   Vercel, and the domain and Resend.
4. **Participants (strategic).** A validation instrument with no cohort
   produces no evidence. No workshop or recruitment channel is on record, and
   that blocks the *point* of going live more than any code does.
5. **Technical:** nothing hard-blocking. The security work is a gate before
   launch, not a blocker to starting.

### 8.5 Is there anything to advise against doing next, or anything likely underestimated?

**Advise against:**

- Deploying the current `main` publicly. The direct-access weakness is now
  documented in a public repository.
- Building Knowledge, community, sharing or AI next. The v1.0 canon names
  logging friction as risk #1, so capture-first comes first.
- Having AI regenerate the lost v1.1.2 canon. That fabricates authority;
  re-baseline honestly instead.
- Ever shipping the 1,637 legacy technique entries.

**Likely underestimated:**

- **The photo pipeline.** Vercel caps function request bodies at 4.5 MB, while
  the bucket allows 15 MB and phones produce HEIC. Uploads must go directly to
  Storage and be processed afterwards, which collides with closing the
  direct-Storage weakness. Expect it to be the hardest part.
- **Distribution.** Months of logging per participant, against 18
  competitors, is the real problem; the code is not.
- **The German imprint** (§ 5 DDG) requires the operator's real name and
  address on a public page.
- **Vercel Hobby forbids commercial use.** Any monetisation means moving to Pro.
- **Process overhead.** Forty gates and per-unit audits were designed for a
  team with a canon. For one person, trimming them to what still guards
  something real may matter more than adding features.

### 8.6 Follow-up: given these five questions, is the main goal still clear?

Only partly. **What Bonsai is meant to be** is still clear. **What this code,
and a launch of it, is meant to achieve** is not. The five questions point
toward a product launch, while the only strategy documents that still exist
(v1.0, 2 September 2026) describe an experiment.

**Still clear.** The v1.0 thesis is intact and the code follows it: a lasting
record of one tree's life, kept before any advice is offered. The first unknown
to test is also clear. It is **H1B**, whether growers keep a record of a tree
for at least 183 days. Its thresholds were agreed in advance: 25% or more
means proceed, under 10% means "the record thesis is dead". The answer in §8.2
bases "live" on this test: a private tree journey.

**No longer clear:**

1. **Launch or experiment.** v1.0 says "the phase is **validation, not
   construction**", and that for a logging-retention question the right tool
   is a "tiny web app, or a manual journal" (`CURRENT-EVIDENCE-AND-DECISIONS.md`
   §12, `PROJECT-BRIEF.md` §14). Question 8.2 asks what would put it "live in a
   way to be proud of". Those are different goals with different scopes. The
   19–27 day estimate is the "proud of" version; the experiment version would
   be smaller.
2. **Building before the go/no-go.** In v1.0, H1B decides whether to run the
   pilot at all ("Fail → do not run the pilot"). The application is that
   pilot, and H1B has not been measured. Whatever justified building first
   lived in the v1.1.2 canon, which does not exist. Today nothing on record
   explains that order.
3. **What success means to the founder.** v1.0 lists questions only the
   founder can answer (`PROJECT-BRIEF.md` §13): side income or a business,
   solo or a team, how much time and for how long, whether there is capital,
   and which markets. None of the answers is on record.
4. **How the result would be read.** The thresholds exist, but there is no
   cohort, no start date, and no plan for how the application would measure
   183-day records. An H1B answer arrives about six months after the first
   participant starts, so that clock matters more than build speed.
5. **The market caveat.** v1.0 warns that even a strong H1B must be weighed
   against 18 competitors who have built no business on record-keeping
   (research brief §7).

**Recommendation.** Before Phase 2, write one page that restates the goal:

- who the user is;
- the hypothesis under test;
- what this build must prove and what it must not attempt;
- the threshold that would stop the project;
- the cohort and start date;
- the founder's answers to the §13 questions.

That page is also the "re-baseline" decision in §8.4. If those answers point
somewhere other than the record thesis, the plan and estimate in §8.2 change.
