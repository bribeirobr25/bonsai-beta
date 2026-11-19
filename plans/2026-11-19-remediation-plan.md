# Remediation and launch plan · 19 November 2026

**Status:** proposed. Nothing in this plan has started.
**Source:** `audits/2026-11-19-repository-audit.md`. Section numbers like
"§4.2" refer to that audit.
**Scope:** every finding in audit §4, the order of work in §7, and the product
build in §8.2.

The plan is built around one constraint: **fix what the audit found without
introducing new bugs, regressions or side effects.** Section 1 sets the rules
that make that possible, and every later unit follows them.

---

## 1. How every change is made

### Rules

1. **One finding per unit, one unit per pull request.** Small diffs are
   reviewable diffs. A unit never mixes a fix with a refactor.
2. **Reproduce first, then fix.** Each unit starts with a test that states the
   requirement and **fails on today's code**, reproducing the audit finding.
   The fix makes it pass. A test that was never seen failing proves nothing.
3. **Counts only go up.** The baseline on 19 November: 84 unit tests and 57
   RLS tests passing; typecheck, lint and build clean; 7 gate scripts passing.
   A unit that lowers any count, or turns a passing gate red, does not merge.
4. **Migrations are their own commit,** generated with `pnpm db:generate`,
   applied with the Supabase CLI, and tested by `supabase db reset` from
   scratch. Each migration states how to reverse it.
5. **Local stack only until Phase 8.** No production project exists, so no
   unit can affect real users. The order below makes production safe before it
   exists.
6. **One consent-version bump.** All consent and privacy wording changes land
   together and move `CONSENT_VERSION` from `0.4` to `0.5` once (Phase 5).
7. **No unit touches more than it names.** If a unit uncovers something new,
   it is written down and becomes its own unit.

### Definition of done (every unit)

- [ ] The new test failed before the fix and passes after it.
- [ ] `pnpm typecheck`, `pnpm lint`, `pnpm test` pass; the unit count did not drop.
- [ ] `pnpm test:rls` against a fresh `supabase db reset` passes; the RLS count did not drop.
- [ ] The seven runnable gates pass (`check:service-role`, `check:data-egress`,
      `check:copy-claims`, `check:privacy-claims`, `check:analytics`,
      `check:environments`, `check:testability`).
- [ ] `pnpm build` is clean.
- [ ] The end-to-end smoke test (unit 1.3) passes against a production build.
- [ ] The audit probe that confirmed the finding is re-run and now fails to
      reproduce it.
- [ ] The diff touches only what the unit names.
- [ ] CI is green on the pull request before merge (merge commit, not squash).

---

## 2. Founder decisions

These are yours to make. The plan marks which units wait on each one; nothing
else does.

| # | Decision | Options | Recommendation | Blocks |
|---|---|---|---|---|
| D1 | **The goal** (audit §8.6): launch or experiment, who the user is, the hypothesis under test, what this build must prove and must not attempt, the stop threshold, the cohort and start date, your v1.0 §13 answers | One page, written by you, or drafted by Claude with blanks | Write it before Phase 8 | Phases 7–8 |
| D2 | **Consent proof after account deletion.** The notice promises 3 years; the code deletes it with the account | **A.** Keep the consent records 3 years, detached from the account and purged by a job. **B.** Delete them with the account and change the notice | **B** for the beta (simpler, fully true); revisit with a lawyer before monetising | Unit 5.3 |
| D3 | **Usage events after account deletion.** Settings says they "remain only in aggregate"; individual pseudonymous rows remain | **A.** Change the wording to "remain pseudonymised and are no longer linked to your account". **B.** Delete the person's events on deletion | **A.** Drop-outs are the evidence the retention test needs | Unit 5.3 |
| D4 | **Bump the consent version to 0.5** | Yes or no | Yes. There are no users, so re-consent costs nothing today | Unit 5.3 |
| D5 | **The public PR #14 reference** that exposes the v1.0 documents | Ask GitHub Support to remove it, or accept it | Your call; there is no technical fix | Unit 2.4 |
| D6 | **Imprint and controller details** (§ 5 DDG, blocker B-5) | Supply them | Required before any public launch | Phase 8 only |
| D7 | **Budget ceiling** (blocker B-19). The free-tier rule is lifted, but no ceiling is set | A monthly amount for Supabase, Vercel, domain and email | Set one before production exists. It decides the Vercel plan (Hobby forbids commercial use) and whether free-tier pausing matters (3.0) | Phase 8 |
| D8 | **Locales.** Four in the database enum, two served; default `de`, where the lost ADR-010 said `en` | Keep de/en with default de; switch the default to en; plan es/pt-BR | Keep de/en with default de for the first cohort unless D1 says otherwise | Unit 8.0 |

D1 also has to name **where participants come from**. No workshop or
recruitment channel is on record, and the 183-day test cannot start without
a cohort.

---

## 3. The phases

| Phase | What | Days | Waits on |
|---|---|---:|---|
| 1 | Safety net | 2–2.5 | — |
| 2 | Repository governance | 0.5 | D5 for 2.4 only |
| 3 | Close direct database and Storage access, nonce CSP | 4–5 | — (3.5b after Phase 4) |
| 4 | Dependency upgrades | 0.5–1 | — |
| 5 | Privacy and consent correctness | 3.5–4.5 | D2, D3, D4 for 5.3 |
| 6 | Knowledge guards | 0.5 now, 2–3 later | — |
| 7 | Documentation re-baseline | 1–1.5 | D1 |
| 8 | Product build and launch | 16–22 | D1, D6, D7, D8 |

**Remediation (Phases 1–7): about 12–15 working days.** The product build
follows. Phases 3 and 4 may swap order, except that 3.5b (nonce CSP) comes
after the Next upgrade. Nothing else should move.

---

## Phase 1 · Safety net

Nothing is fixed until regressions would be caught.

### 1.0 Clean starting point
Run `supabase db reset`. The local database still holds anonymous events and
an unconsented test sign-in left by the audit probes. Then re-run every check
and record the baseline counts in the first pull request.

### 1.1 Delete the dead test configuration
`vitest.config.ts` is the live configuration; `vitest.config.mts` is a dead
duplicate (audit §3.5). **Do not merge them.** The `.mts` file aliases
`server-only` to a no-op, which would hide exactly what `check:testability`
guards, and its extra `scripts/**/*.test.ts` glob matches no file today.
- Record the test files Vitest runs (`pnpm test --reporter=verbose`), delete
  `vitest.config.mts`, and run again.
- **Acceptance:** the same files run before and after.

### 1.1b Close the test gaps that need no fix (§4.6)
- Add `researcher_contacts` and `species_aliases` to the RLS denial suite.
- Make the rate-limit integration test call the production SQL instead of a
  copy of it. Split the statement out of the `server-only` module, the same
  way the tiers were split into `rate-limit-tiers.ts`.
- **Acceptance:** the RLS count rises; the rate-limit test fails if the
  production statement is changed.

### 1.2 Pin the Supabase CLI in CI
`.github/workflows/ci.yml` uses `version: latest` while the project pins
`supabase@^2.116.0` (local `2.116.0`). Pin CI to `2.116.0`.
- **Acceptance:** CI runs green with the pinned version.

### 1.3 End-to-end smoke test of today's flow
There are no end-to-end tests, and **the Server Actions (`submitConsent`,
`setResearchConsent`, `updateLocale`, `deleteAccount`) and the export route
have no tests at all.** So this suite is the only guard on today's flow, and it
must exist before Phase 3. Add one Playwright suite that drives a **production
build** against the local stack. To get magic links, use the admin API's
`generateLink`; it does not depend on a local mail catcher, and none is
configured explicitly in `supabase/config.toml`. The suite covers:
- sign in → consent → `my-tree`;
- Settings: change language; withdraw research consent; grant it again;
- download the export and check it parses and contains the account;
- delete the account and check the user is gone and is signed out;
- the magic-link rate limit: a fourth request for the same address within
  15 minutes looks the same to the user but sends nothing (§4.6: the wiring
  into sign-in has never been tested end to end).

It also records the cookie flags and the response headers, so Phase 3 can show
a deliberate change rather than a surprise.
- **Acceptance:** passes on today's code. It runs in CI as its own job.

### 1.4 Turn the audit probes into a reusable script
The audit confirmed findings with live probes (rolled-back transactions,
REST and Storage calls with a probe user). Keep them as a local script under
`scripts/` that prints which findings still reproduce, cleaning up after
itself. Each later unit's acceptance includes "this probe no longer
reproduces".

---

## Phase 2 · Repository governance

No application code. This comes early so every later unit goes through the
process that AGENTS.md describes.

### 2.1 Protect `main`
Require a pull request, the CI checks (`unit`, `guardrails`,
`rls-integration`, and the end-to-end job from 1.3) and an up-to-date branch.
Block force pushes and deletion.
- **Side effect to know:** from then on, direct pushes like the audit commits
  are refused. That is the point.

### 2.2 Disable squash merge
Allow merge commits, so individual commits are preserved as AGENTS.md
requires.

### 2.3 Stop tracking the local ledger
`git rm --cached OPEN-ITEMS-LEDGER.local.md`. The file stays on disk, and
`.gitignore` already lists it. Its past content stays in history; removing
that would need a history rewrite, which is **not** proposed.

### 2.4 The PR #14 reference
Act on D5. If you choose removal, the request goes to GitHub Support.

---

## Phase 3 · Close direct database and Storage access (§4.2, §4.3)

This is the most important phase. Two layers: **close the door** (the API is
not exposed at all), then **lock the rooms** (even a signed-in role inside the
database cannot change privileged fields). Either layer alone would leave a
single mistake between a user and `is_admin`.

### 3.0 A hidden dependency, found while planning
`src/app/api/keepalive/route.ts:27` calls the REST API
(`createAdminClient().from("keepalive")`) to stop a free Supabase project from
pausing. Turning the Data API off would break that line silently: the cron
would report `ok: false` and nothing else. Replace it first with an API call
that does not need the Data API, such as `auth.admin.listUsers({ perPage: 1 })`.
- **Unverified:** whether an Auth or Storage call counts as activity for
  Supabase's free-tier pausing. A paid plan does not pause at all, so this
  depends on D7 (budget). Check Supabase's current rules before Phase 8.
- **Acceptance:** the keep-alive route returns `ok: true` with the Data API off.

### 3.1 Stop exposing the database through the Data API
The app never uses the REST or GraphQL API. Code search: the only `.from()`
calls on a Supabase client are Storage (export, deletion) and the keep-alive
(3.0).
- `supabase/config.toml`: stop exposing `public` (and check `graphql_public`;
  pg_graphql reflects `public` tables to any role with privileges, so
  removing the REST schema alone may not be enough).
- Write down the matching production setting for Phase 8: Dashboard → Data API.
- **Tests:** a new integration test signs a token for a test user with the
  local JWT secret and asserts that `/rest/v1/users` and `/graphql/v1` return
  no table data, for both the `anon` and `authenticated` roles.
- **Regression check:** sign-in, consent, export and deletion still pass
  end to end (they use Auth and Storage, not the Data API).

### 3.2 Lock privileged columns and make consent records server-only
Today `users_update_own`, `users_insert_own` and `consent_events_insert_own`
let the `authenticated` role write **any** column. That role is also what the
app itself runs as (`withOwnerDb`), so simply revoking it would break the app.
Design:
- **Column privileges on `users`:** `authenticated` may update `locale` only,
  and may insert nothing. `is_admin`, `cohort`, `source`,
  `session_class_default`, `consent_version`, `consent_at`, `terms_ack`,
  `research_consent`, `research_consent_withdrawn_at` and `email` become
  unwritable from that role.
- **Consent goes through two functions** in a schema that is never exposed
  (for example `private`): `record_consent(...)` and
  `set_research_consent(...)`. They are `SECURITY DEFINER`, use
  `set search_path = ''`, act only on `auth.uid()`, and write the `users` row
  **and** the `consent_events` row in one transaction. Execute is granted to
  `authenticated` only.
- Drop the `consent_events_insert_own` policy and revoke `INSERT` on
  `consent_events` from `authenticated`. The append-only rule stays.
- `submitConsent` and `setResearchConsent` call the functions through
  `withOwnerDb`, so `auth.uid()` still comes from the verified session. The
  service-role allowlist does not grow.
- **The first `users` insert** takes the email from `auth.users` inside the
  function, never from a parameter.
- **Tests (RLS suite):** as `authenticated`, updating any locked column fails;
  inserting a `users` row or a `consent_events` row directly fails; updating
  `locale` still works; the functions write both rows; a function call with no
  claims fails.
- **An existing test is deliberately inverted.** `rls.integration.test.ts:559`
  ("lets a subject insert and read their own consent record") asserts today's
  behaviour, which this unit removes. Rewrite it as "a subject can read but not
  insert their own consent record", restating the requirement in the diff as
  AGENTS.md requires. The count stays the same; it does not drop.
- **Drizzle cannot express this.** Functions, column grants and policy drops
  go into a custom migration (`pnpm db:generate:custom`). The drift check (a
  fresh `pnpm db:generate` produces nothing) is added to this unit's checks.
- **Regression check:** the end-to-end suite from 1.3 passes unchanged. No
  unit tests cover these actions today, so that suite is the guard.

### 3.3 Evidence columns on trees, moments and photos
No code writes these tables yet. Locking their evidence columns (`origin`,
`source`, `session_class`, `normalized_key`, and similar) is designed in
Phase 8, together with the code that writes them, using the same pattern as
3.2. Until then 3.1 closes the outside door, and the test from 3.1 keeps it
closed. This is recorded, not skipped.

### 3.4 Remove Storage access for signed-in users
The four `photos_owner_*` policies on `storage.objects` let a user upload,
read, overwrite and delete files in their folder directly, bypassing any
EXIF/GPS stripping. The app's only Storage use is server-side with the admin
client (export signed URLs, deletion), which these policies do not affect.
- Drop all four policies in a migration.
- **Tests:** as `authenticated`, upload, download, update and delete through
  the Storage API are refused; the admin client can still list, sign and
  remove.
- **Consequence for Phase 8:** uploads use server-issued signed upload URLs
  into a quarantine bucket (see 8.3), not the browser client. That design also
  avoids Vercel's 4.5 MB request limit.

### 3.5 Session cookie and CSP
- Set `httpOnly: true` (and keep `secure`, `sameSite=lax`) through
  `cookieOptions` in **both** `src/lib/supabase/server.ts` and `src/proxy.ts`.
  They must match, or the proxy would rewrite the cookie without the flag on
  every refresh.
- Delete `src/lib/supabase/client.ts`. It is unused, and it cannot work with
  an HttpOnly cookie. Its own header says to delete it if Phase 4 does not
  need it, and 3.4 removes that need.
- With no browser client, narrow `connect-src` to `'self'` and update
  `security-headers.test.ts`.
- Remove the leftover PKCE code-verifier cookies in `/auth/callback` after a
  successful exchange.
- **Tests:** the end-to-end suite asserts the auth cookie is HttpOnly, that
  no code-verifier cookie remains after sign-in, and that sign-in, a session
  refresh and sign-out still work.
- **Risk:** this is the change most likely to break sign-in, which is why it
  is a separate unit with the end-to-end suite already in place.

### 3.5b Nonce-based CSP on the signed-in pages
HttpOnly stops an injected script from stealing the session, but not from
acting as the user while the page is open. `'unsafe-inline'` remains on every
surface. `src/lib/security-headers.ts` already describes the intended split:
static-friendly CSP on public pages, nonce-based CSP on signed-in pages. Build
the nonce half for `my-tree`, `settings` and `consent`, following the Next 16
CSP guide in `node_modules/next/dist/docs/` (after Phase 4's upgrade).
- **Tests:** signed-in responses carry a per-request nonce and no
  `'unsafe-inline'` in `script-src`; public pages are unchanged; the
  end-to-end suite passes.

### 3.6 Turn off password sign-up locally
`supabase/config.toml` allows email-and-password sign-up; magic link is the
ratified method. Disable password sign-up locally, and note the same setting
for production in Phase 8. Check first whether any test signs in with a
password, and move it to the admin API.

---

## Phase 4 · Dependency upgrades (§4.3)

### 4.1 Next.js
Read the upgrade notes in `node_modules/next/dist/docs/` for the target
version (AGENTS.md requires this). Upgrade `next` and `eslint-config-next`
together to the latest 16.x release at or above 16.4.5. Stay on 16; a major
version change is out of scope.
- **Watch:** `proxy.ts`, next-intl middleware, Server Actions, `PageProps`
  types from `next typegen`, and the static/dynamic rendering of public pages.

### 4.2 The rest
`zod` ≥ 4.6.6, `sharp` ≥ 0.35.5, and `source-map-js` ≥ 1.2.2 (through a
`pnpm.overrides` entry if it is only transitive). One package per commit.

- **Acceptance:** `pnpm audit --prod` shows no high or critical advisory that
  applies to features in use; the full definition of done passes, including
  the end-to-end suite against a production build.

---

## Phase 5 · Privacy and consent correctness (§4.1, §4.3, §4.4)

### 5.1 One withdrawal path, recorded every time (LEDG-1)
Today there are two ways to stop research consent, and they behave
differently:
- Settings: stamps `research_consent_withdrawn_at` and detaches events, but
  writes no consent record;
- re-consent opt-out (`consent/actions.ts:77`): does neither.

Route both through the `set_research_consent` function from 3.2, which always
writes a `consent_events` row, plus one shared server function that detaches
events. They can no longer drift apart.
- **Tests:** after a withdrawal and a re-grant in Settings, the ledger holds
  three rows; a re-consent opt-out stamps the withdrawal and detaches events.

### 5.2 Hash what was actually shown
`hashNotice` hashes the privacy notice file, but not the checkbox wording from
`messages/*.json`. Hash a canonical bundle of the notice **and** the consent
strings for that locale, and mark the new format (for example a `sha256v2:`
prefix) so old records stay interpretable.
- **Test:** changing a consent checkbox string changes the hash.

### 5.3 Make the notice and Settings true (needs D2, D3, D4)
Each mismatch from §4.1 is fixed in either the code or the wording, never left:

| Claim | Fix |
|---|---|
| Consent proof kept 3 years after deletion | D2-A: detach and keep, with a purge job. D2-B: change the wording |
| Events "remain only in aggregate" after deletion | D3-A: change the wording. D3-B: delete the events |
| "without cross-device identifiers" | Change the wording: events of a consenting signed-in participant are linked under a pseudonym on any device |
| "consent text as rendered" is hashed | Made true by 5.2 |
| 24-month aggregation of usage events | Build it now as a step in the existing daily cron (aggregate, then delete rows older than 24 months), with a test |
| "Date and category suggestions" | Remove both sentences; re-add them when the feature exists |

- Both languages change together. `CONSENT_VERSION` moves to `0.5` in the same
  commit (D4).
- **The source of the consent text moves into this repository.** `env.ts:97`
  names `docs/07-legal/CONTENT-CONSENT-v0.4.md` as the record in force, and
  AGENTS.md calls the copy "verbatim from CONTENT-CONSENT-v0.3.md". Neither
  file exists. From 0.5, the text is `messages/*.json` plus
  `src/content/privacy.*.md`, and the 5.2 hash covers exactly that. Update
  both references.
- Every changed claim gets a real proving test in the COPY-1 registry
  (`scripts/check-privacy-claims.mjs`). Today's "consent proof" entry cites a
  test that only checks for non-null columns; it is replaced.
- **Legal note:** wording changes to a privacy notice should be reviewed by
  whoever reviews the notice before launch.

### 5.4 Export (§4.4)
- Sign and look up photo URLs by the **same** key (`route.ts:70, 96`).
- Add `consent_events` (an owner read policy exists) and `researcher_contacts`.
- Add events detached on withdrawal, found by the person's pseudonym.
- Apply the unused `export` rate-limit tier and answer `429` when exceeded.
- **Tests:** a photo with a `normalized_key` gets a URL; all sections are
  present; the fourth export within an hour is refused.

### 5.5 Rate-limit consent, and decide fail-open
Apply the unused `consent` tier to `submitConsent` and `setResearchConsent`.
On refusal, redirect with an error and write nothing.

The limiter **fails open** by design: if the database is unreachable, every
request is allowed (`rate-limit.ts`). That is right for sign-in. For export it
is harmless, because an unreachable database means no export anyway. Keep it,
and make each fail-open visible in logs with one consistent tag, so it can be
alerted on in production.

### 5.6 Account deletion (§4.4)
- List the Storage files **with paging** (today: at most 1,000 per folder).
- New order: detach events → delete the auth user → remove files. A failure
  before the user is deleted leaves everything intact, and the person can
  retry. A failure after it leaves orphaned files, so the daily cron removes
  Storage folders whose owner no longer exists.
- Take the confirmation word from `messages/*.json` (`deleteWord`), not from
  code.
- **Tests:** more than 1,000 files are all removed; a simulated `deleteUser`
  failure keeps the photos; the cleanup removes an orphaned folder.

### 5.7 Stop inflating the evidence (§4.4)
- `landing_viewed`: stop writing it during server rendering. Record it from a
  small browser beacon (`POST`, same origin, rate-limited per IP), which
  crawlers and `curl` do not run. This also lets the landing page render
  statically later (§4.7).
- `signup_started` fires for returning users too. Retire it (through the
  existing retired-names list) and emit `magic_link_requested`, which says what
  actually happened. "Sign-up" is derived from the first consent record.
- **Tests:** rendering the landing page writes no event; the beacon writes
  one; a link prefetch writes none; the analytics contract check passes with
  the new name.
- This moves an existing anonymous event. It does not switch on any new
  collection, so the telemetry gate (B-12) is unaffected.

### 5.8 `X-Robots-Tag` on `/sign-in` (§4.7)
The page carries the noindex meta tag but not the header, unlike the other
private routes in `src/lib/security-headers.ts`. Add the header and extend
the headers test.

### 5.9 Shared cron work stays independent
5.3 (24-month aggregation) and 5.6 (orphan cleanup) add work to the single
daily cron (`/api/keepalive`). Each step runs in its own `try`/`catch`, like
the existing rate-limit purge, so one failure cannot stop the others, and the
response reports each step. The cron stays well within the function time
limit.

---

## Phase 6 · Knowledge guards (§4.1)

Nothing is published today, and Knowledge is outside the first launch (blocked
by B-8). So the safe order is: **forbid publication now**, and build the
correct model when Knowledge is scheduled.

### 6.1 Publication freeze, now (0.5 day)
A migration adds a trigger that refuses `status = 'published'` on `species`,
`techniques` and `species_techniques`, with a message naming this plan. It
closes all four PROV-1 bypasses and the per-locale gap at once, because none of
them matters while nothing can be published.
- **Tests:** publishing any Knowledge row fails, including through the
  privileged role.

### 6.2 The correct model, when Knowledge is scheduled (2–3 days)
Replaces the freeze in one migration set:
- **Per-locale publication:** a content row per record and locale, each with
  its own status, reviewer and generated `publication_state`; the public read
  policy works per row, so per locale.
- **Provenance matches the record type,** not just the id (`…sql:58`).
- **Provenance per field:** every published field has a source row.
- **Sources cannot disappear under published content:** deleting or changing
  a `field_sources` row that published content depends on is refused.
- **`reviewed_at` comes only from a review event:** an append-only
  `knowledge_reviews` table, and the trigger requires `reviewed_at` to equal
  that record's latest review. A content change to published text is refused
  until it is unpublished and reviewed again.
- **Tests:** each of the four audit bypasses becomes a failing-then-passing
  test.

---

## Phase 7 · Documentation re-baseline (needs D1)

- Rewrite `AGENTS.md` and `README.md` around what exists: the v1.0 canon at
  `refs/pull/14/head`, the audit, this plan and D1. Remove the authority table
  that points at a canon that does not exist.
- Decide the three gates that need the canon (`check:adrs`,
  `check:scheduled-jobs`, `audit:unit`): rebuild each on what exists in this
  repository, or retire it with a stated reason. Do not leave them failing by
  design forever.
- Fix every row of the drift table in audit §3.5. Rows that need more than an
  edit:
  - `.github/workflows/ci.yml`: the JOB-1 and OI-46 comments end
    mid-sentence; finish or remove them.
  - `scripts/check-testability.mjs` claims to catch re-exports of
    `server-only` and does not: implement it or correct the claim.
  - `src/lib/legacy/normalize.ts` has no importer. Delete it with its test;
    the 1,637 legacy entries must never ship (audit §8.5).
  - `schema.ts` comments describe columns that do not exist
    (`initial_origin`, `qualification_rule_version`).
- **Process.** AGENTS.md requires `pnpm audit:unit` after every unit, and it
  cannot run here. Until this phase, the definition of done in section 1 replaces
  it. This phase decides what replaces it permanently (audit §8.5: trim the
  process to what still guards something real).

---

## Phase 8 · Product build and launch (needs D1, D6, D7, D8)

Scope from audit §8.2, adjusted by D1.

### 8.0 Settle the half-finished model first
The product writes trees and moments for the first time, so these are decided
before 8.1, or the first features are built on parts marked for removal:
- **The M1b cleanup columns.** `moments.type` is the only populated taxonomy
  (119 references) and `events.source` has 75, yet both are marked for
  cleanup. Choose the moment taxonomy the product writes, migrate it, then
  remove the old column.
- **`prompted`** has 2 values where the lost W7 text specified 5. Keep 2 and
  record that choice, or add the rest with a reason.
- **Locales** (D8): four in the enum, two served, default `de` where the
  lost ADR-010 said `en`.
- **Static public pages** (§4.7): after 5.7, the landing and privacy pages
  can render statically. Do it here, before traffic exists.

**UI rules from the W7 boards (audit §3.4).** The boards are illustrative;
the written rules win. So: magic link only, never password; no copy that
COPY-2 prohibits; no "Unverified" badge as a stand-in for publication.

### 8.1 Tree creation
Create a tree with species marked as *probable*, an acquisition date with its
precision, and status. Lock evidence columns as described in 3.3.

### 8.2 Moments and the journey
Add dated moments (date and precision, kind, note), show the timeline, and
handle corrections by appending (`superseded_by`), never by editing.

### 8.3 Photo pipeline
1. The server issues a signed upload URL into a private **quarantine** bucket.
   This skips Vercel's 4.5 MB request limit and needs no Storage policy for
   users.
2. A server step downloads the file and re-encodes it with `sharp`, stripping
   all EXIF and GPS. It handles HEIC, writes two derivatives into `photos`,
   records the keys, and deletes the quarantine file.
3. The app serves short-lived signed URLs.
4. Historical import keeps the photo's own capture date, read before
   stripping, and **only** the date.
- **Tests:** a file with GPS EXIF comes out with none; a 15 MB HEIC works; a
  non-image is rejected; the quarantine is empty afterwards.

### 8.4 Production setup
Create the Supabase production project with the Data API off, password
sign-up off, and the Site URL and redirects set. Set up the Vercel project in
`fra1`, the domain, Resend SMTP, environment variables and the cron secret.
Fill in the imprint (D6).

### 8.5 Launch checklist
- The end-to-end suite and an accessibility and mobile pass on the production
  build.
- QA in production uses `sessionClass: "QA"` on every event.
- Run the probe script from 1.4 against production: zero findings reproduce.
- Choose the Vercel and Supabase plans within the budget ceiling (D7). Vercel
  Hobby forbids commercial use.
- **Participants are ready before launch** (D1): a recruitment channel and a
  first cohort exist. A launch with no participants produces no evidence.
- Telemetry stays off (B-12) unless legal approval is recorded.

---

## 4. What could still go wrong, and the guard for each

| Risk | Where | Guard |
|---|---|---|
| Revoking column privileges breaks an app write | 3.2 | Owner-path tests plus end-to-end; the only owner writes today are consent, locale and research consent, all covered |
| Turning off the Data API breaks something unseen | 3.1 | Code search: the only Data API call is the keep-alive, fixed first in 3.0; end-to-end suite |
| HttpOnly cookie breaks session refresh | 3.5 | Both cookie writers changed together; end-to-end covers refresh and sign-out |
| Next upgrade changes rendering or the proxy | 4.1 | Official upgrade notes read first; end-to-end on a production build |
| The consent bump forces re-consent | 5.3 | No users exist; done once, on purpose |
| A wording change creates a new untrue claim | 5.3 | Every claim registered in COPY-1 with a proving test |
| Deletion leaves orphaned photos | 5.6 | Daily cleanup job with a test |
| The freeze blocks legitimate publishing | 6.1 | Nothing may be published before B-8 anyway; 6.2 replaces it |
| Tests pass because a suite was skipped | All | Counts only go up; CI already fails on skipped RLS tests |

---

## 5. Not in this plan

- Sharing, community, Knowledge publishing, Spanish and Portuguese, AI
  features.
- Tier-1 telemetry activation (needs B-12 legal approval).
- Rewriting git history.
- Recreating the lost v1.1.2 canon.
- Shipping any of the 1,637 legacy technique entries.

---

## 6. Review log

**19 November 2026: first review of this plan.** The plan was checked against
every item in the audit (§3.4, §3.5, §4.1–§4.8, §6, §8.3–§8.5) and its
technical assumptions were checked against the code and libraries. Changes:

*Corrections. The first draft was wrong about these:*
- 1.1: proposed merging the two Vitest configs. The `.mts` file is dead, and
  its no-op `server-only` alias would hide what `check:testability` guards.
  Now: delete it.
- 3.2: said "the existing consent and Settings tests pass unchanged". None
  exist; no Server Action has a test. The end-to-end suite (1.3) is the guard.
- 3.2: did not mention that it inverts an existing RLS test
  (`rls.integration.test.ts:559`). Now stated, with how to rewrite it.
- 1.3: assumed a local mail catcher. None is configured explicitly. Now uses
  the admin API's `generateLink`.
- 3.0: assumed an Auth call keeps a free project awake. Unverified; now marked
  as such and tied to D7.

*Gaps now covered:*
- §4.6: researcher_contacts and species_aliases RLS tests, the copied
  rate-limit SQL (1.1b), and the sign-in rate-limit wiring (1.3).
- §4.3 and §8.3: nonce-based CSP on signed-in pages (3.5b).
- §4.7: `X-Robots-Tag` on `/sign-in` (5.8); static public pages (8.0).
- §8.3: M1b cleanup columns, `prompted` values, locales (8.0, D8); rate
  limiter fail-open (5.5).
- §3.5: every drift row, including the truncated CI comments,
  `check-testability`'s re-export claim and the dead legacy module (Phase 7).
- §3.4: W7 board conflicts carried into Phase 8 as UI rules.
- §8.4: budget ceiling (D7) and participants (D1, 8.5) added as decisions.
- §8.5: legacy entries never ship; process trimming in Phase 7.
- Consent text source of truth moves into the repository (5.3).
- Drizzle cannot express functions and grants: custom migrations plus a drift
  check (3.2).
- Shared cron steps stay independent (5.9).
- The audit's leftover local probe data is reset first (1.0).
- `audit:unit` cannot run, so the definition of done in section 1 replaces it until Phase 7.

*Checked and confirmed:*
- `@supabase/ssr` defaults the auth cookie to `httpOnly: false` and accepts
  `cookieOptions`, so 3.5 is feasible.
- The export route and Settings actions are already on the service-role
  allowlist, so 5.4 and 5.6 do not widen it.
- The only Supabase Data API call in the code is the keep-alive (3.0).
- The only owner-path writes today are consent, language and research
  consent (3.2).

**Still assumed, to verify when the unit starts:**
- Exactly which `config.toml` settings close both REST and GraphQL locally (3.1).
- The Next 16 CSP-nonce mechanics (3.5b).
- Supabase's current free-tier pausing rule (3.0).
