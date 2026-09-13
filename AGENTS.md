<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Bonsai project notes

**Identity is `Bonsai`** for the Functional Beta. `Bar-Bonsai` is retired.
Long-term naming is `DEFERRED PENDING VALIDATION`.

### Authority — read before writing code

Start at [`docs/01-canon/README.md`](docs/01-canon/README.md), which carries the
authority order and a 17-step read order. The active stack:

| Rank | Authority | Version |
|---:|---|---|
| 1 | Strategy Canon | **v1.1.2** |
| 2 | W7 Product/UIUX Canon | **v1.1.2** |
| 3 | W7 Approved Visual Artifacts | v1.0 |
| 4 | W3 Brand + Gate A Copy & Claims Ruling | v1.1 |
| 5 | W4 Growth + Gate A Instrumentation Clarification | v1.1 |
| 6 | W2 Economics + Functional Beta Economics Review | v1.0 |
| 7 | W1 Competitor Review Mining | FINAL CLOSED · **no reopen** |
| 8 | Implementation Beta Handoff | **v1.0.1** |
| 9 | Legacy application code and data | reusable input only, never authority |

The consolidated decision authority is
`docs/01-canon/01-strategy-canon-v1.1.2/02_DECISIONS/BONSAI_GATE_A_DECISION_REGISTER_2026-09-12.md`
(OI-01…OI-45). Items marked `LEGAL ACTIVATION PENDING`,
`OPERATIONAL INPUT PENDING`, `IMPLEMENTATION INPUT PENDING` or `DEFERRED` are
**not** resolved — do not treat them as such.

**The build plan is
[`docs/06-implementation/BONSAI_FINAL_PHASED_IMPLEMENTATION_PLAN.md`](docs/06-implementation/BONSAI_FINAL_PHASED_IMPLEMENTATION_PLAN.md)**
(revision 3, authorized). **W6 is not the build plan** — it is
`SUPERSEDED AS A STANDALONE WORKSTREAM`, and its former plan lives at
`docs/99-archive/superseded/w6-sandbox-superseded-2026-09-12/` as history only.

Two rules that are easy to get wrong: **textual W7 authority beats conflicting
illustrative visuals**, and **`BUILD STATUS ≠ EVIDENCE STATUS`** — shipping a
feature never upgrades a hypothesis.

### Hard rules the architecture must enforce, not merely honour in the UI

- **Knowledge publication states** — `PUBLIC_APPROVED` · `INTERNAL_DRAFT_UNVERIFIED`
  · `UNAVAILABLE`, enforced **in the database, per locale**. A frontend error must
  not be able to leak unreviewed content. An "Unverified" badge is not a
  publication mechanism, and AI **never** authorizes publication.
- **Private by default** — Tree, Journey, Moment and Historical Import are
  private; sharing is explicit, allowlisted, previewed and revocable; future
  Moments stay private; **no precise location is ever public by default** and GPS
  or sensitive EXIF is never retained.
- **Provenance** — a published Knowledge field without provenance is a **bug**,
  and `reviewed_at` is never refreshed without an actual review event.
- **No fabricated Community or local density**, and **privacy copy must never
  exceed the technical guarantee**.
- **Telemetry stays inert** until legal approval is recorded in the repository
  (blocker B-12). The architecture is built; collection is not switched on.

### Engineering conventions

- **RLS-first.** Three separated paths: public `anon` · owner `authenticated`
  JWT · privileged service role for migrations, seed, cron and admin only. Never
  reach for the service role to make a query work.
- **Audit gates — these are process, not suggestions.**
  - **After every implementation unit, before starting the next:** run
    `pnpm audit:unit` and work
    [`docs/06-implementation/AUDIT-PROTOCOL-PER-UNIT.md`](docs/06-implementation/AUDIT-PROTOCOL-PER-UNIT.md).
    The script covers counts, skipped suites, unenforced gate rows and broken
    links; the document covers the half a script cannot — **falsify what you
    changed**, and state what you could not verify.
  - **Before merging a phase branch:** run `pnpm audit:merge` and work
    [`docs/06-implementation/AUDIT-PROTOCOL-PRE-MERGE.md`](docs/06-implementation/AUDIT-PROTOCOL-PRE-MERGE.md),
    seven fronts, each anchored to a named artifact.
  - Both protocols carry **revision triggers**. A defect that the protocol did
    not prompt for means the protocol is incomplete: add a line, or better an
    automated check. Every existing item cites the real defect that motivated
    it — keep it that way.
- **Architecture decisions.** [`docs/06-implementation/adr/`](docs/06-implementation/adr/)
  holds 17 ADRs, each naming what would reopen it. Read the relevant one before
  changing a load-bearing decision; if you change one, update its record in the
  same commit. `pnpm check:adrs` enforces the index and the triggers.
- **Gates.** `docs/06-implementation/BONSAI_FINAL_PHASED_IMPLEMENTATION_PLAN.md`
  §17 holds 38 gate rows, each stating **what it makes impossible**. A gate row
  and its test land in the same commit as the behaviour they guard. Gate ids are
  unique and stable — check uniqueness when adding one.
- **A test asserts a REQUIREMENT, never observed output.** Every privacy,
  publication and Community assertion cites its requirement: a gate id, a
  decision id, or a canon section. A test changed to make a build green must
  restate its requirement in the diff.
- **Commits** (ratified policy, plan §27): protected `main`, no direct pushes,
  short-lived branches per coherent unit within a phase, PR review, conventional
  commits. **Migrations are their own commit**, and the merge strategy must
  preserve individual commits — **squash-merge is prohibited**.
- **Migrations:** `pnpm db:generate` writes into `supabase/migrations`; apply
  with the Supabase CLI, **never** with `drizzle-kit migrate`.
- **Environments:** local Supabase for development and CI, and one remote
  **Production** project. **There is no staging.** Production data is not the
  routine QA substrate — and with no rehearsal environment, two things follow.
  Every data-transforming migration must carry a guard that names what is wrong
  and refuses (see `M1`'s photos.tree_id backfill and the `action_origin` cast).
  And a QA pass or support reproduction in production must set `sessionClass`
  explicitly, because with no staging `session_class` is the **primary**
  evidence-exclusion mechanism, not a residual one — an unclassified event
  counts as `USER` and inflates the evidence.
- **Binaries** go through Git LFS — see `.gitattributes`. `docs/01-canon/**` and
  `docs/99-archive/**` are `-text`: they are verified against sender SHA-256
  manifests and must stay byte-exact.
- **Cost:** the free-tier-only rule is **lifted** (OI-05). Infrastructure should
  stay cost-conscious and reversible, and **no budget ceiling is set — do not
  infer an unlimited one** (blocker B-19).
- Consent copy is verbatim from `CONTENT-CONSENT-v0.3.md`, now at
  `docs/99-archive/superseded/w6-sandbox-superseded-2026-09-12/W6-mvp-validation-strategy/sandbox/`.
  Bump `CONSENT_VERSION` in `src/lib/env.ts` when it changes. The privacy notice
  and imprint both cite it, so it must not be deleted while those citations
  stand.
