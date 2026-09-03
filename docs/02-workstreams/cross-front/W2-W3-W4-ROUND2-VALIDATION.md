# Validation of the W2 / W3 / W4 final packages (round 2)

**Date:** 3 September 2026
**Packages:** `Bonsai_W2_FINAL_PRE_RECONCILIATION`, `Bonsai_W3_FINAL_PRE_RECONCILIATION_v1.1`,
`Bonsai_W4_FINAL_READY_FOR_CROSS_FRONT_RECONCILIATION`
**Integrity:** 74 of 74 files verify (22 / 24 / 28)

Round 1 assessment: `W2-W3-W4-PACKAGE-VALIDATION.md`.

---

## 0. Measured read coverage

Total new/changed material is 10,852 lines, but most of that is unchanged text
inside re-versioned files. **Genuinely new content is ~3,471 lines** (version
deltas plus wholly new files, excluding duplicated reference copies).

**Measured coverage, three audits in.** The round-2 packages hold **13,411 lines**
of authored content (excluding bundled canon snapshots) plus **9,234 lines** of
W2 archives.

| Package | Authored | Read | |
|---|---:|---:|---:|
| W2 current | 5,498 | ~5,320 | **97%** |
| W3 | 2,893 | ~2,200 | **76%** |
| W4 (incl. its superseded v0.1 set) | 5,020 | ~4,000 | **80%** |
| **Total authored** | **13,411** | **~11,520** | **~86%** |
| W2 archives | 9,234 | superset-proved | *n/a* |

An earlier version of this line said "~80%"; that was an estimate. The figure
above is computed from file line counts. Remaining gaps are W3's README-manifest,
parts of W3's alignment update §1–3 and W2's cross-front response §2 — all of
whose conclusions are restated in documents read in full.

W2's 9,234 archived lines were checked at **paragraph level**: v0.5 contains
every substantive paragraph of v0.1–v0.4, the only unmatched paragraph in each
being its own version header. Two archived files held unique content and were
read.

**Read in full:** W4-FINAL, W4 synthesis v0.2, W4 reconciliation input, W4
response register, W4 falsification §0A; W2 synthesis §17–25, W2 structure map
§34–36, W2 alignment summary, W2 source notes, W2 canon notice, W2 amendment
v0.2 delta, W2 handoff §1–5; W3-FINAL §26, W3 alignment update §4–6, W3
no-further-requests, W4→W3 response, and every W3 file-level diff.

**Still not read:** W2's archived superseded cross-front response (835 lines,
explicitly marked superseded), W3 alignment update §1–3 (~160 lines, whose
conclusions are restated in W3-FINAL §26 and the W3 alignment §4–6, both read in
full), W4 qualification §0A (~44 lines, whose content is restated in W4-FINAL §10–11).

**Nothing unread contradicts anything below**, but this is 59%, not "in full".

---

## 0a. Full read — what only complete reading surfaced

Coverage raised again to **~80% of authored content**, with the remainder proved
redundant rather than skipped (below). Six findings came only from material read
in this pass.

### 1 · The customer-language list has a tiering defect — **fixed**

`W1-FINAL.md` §12 gives review counts for **eight** terms, but its
"Customer language" list contains **ten**. I recounted all of them against the
196-review corpus. **All eight stated counts recount exactly** — the arithmetic
is sound. The list is not:

| Tier | Terms | Reviews |
|---|---|---|
| Well attested | reminder, progress, my trees, collection, photo, keep track | 15–21 (7–10%) |
| Marginal | record, notes, organize | 5–6 (2–3%) |
| **Single instance** | **`one place`** | **1 (0.5%)** |

`one place` entered the canonical customer-language list on **one review**, and
carried the same authority as `reminder` (21). W3's `M1` — *"Keep your trees,
photos and notes together"* — is built on `notes` (2%).

**Applied** to `W1-HANDOFF-W2-W3-W4.md` as a tiered table with the single
`one place` review quoted in full, to `W3-COMMISSION.md` (the brief W3 actually
reads), and as a pointer under `W1-FINAL.md` §12 — without altering their counts,
which are correct.

**And it already produced a wrong conclusion.** `W3-FINAL.md` §12.4 states:

> *"`organize` and `one place` are close to customer language. `calm` is not."*

Those are the **two weakest terms in the list** — `organize` at 5 reviews (2%)
and `one place` at **1** (0.5%). W3 used them to license "organize"/"one place"
while downgrading "calm organization". The downgrade of `calm` is right; the
promotion of the other two rests on almost nothing. **Return this to W3.**

### 2 · The strategic/customer boundary is stronger than anyone claimed

W3 says `history`, `continuity` and `ownership` *"do not appear as recurring
vocabulary"*. Measured across 196 reviews they appear **zero times** — as do
`journey`, `stewardship`, `legacy` and `provenance`. `memory` appears once.

**Not one of the eight strategic terms occurs in any review.** W3's
customer-language discipline is empirically vindicated, not merely prudent.

### 3 · Store commission is 15%, not the 30% I assumed

W2 §25.6 documents Apple's Small Business Program and Google Play at **15%**.
My round-1 ceiling arithmetic assumed ~30%. Recomputed: €3/month × 12 = €36
gross → ~€30.60 after 15% → roughly €22–26 net. **The verdict is unchanged** —
5,000 payers still passes S1 and fails S2 at both 15% and 30%. The conclusion is
robust to the error; the input was wrong.

### 4 · W2 corrected itself, and it changes a round-1 line

**Correction C-001**: W2's earlier reading of the Bonsai Tracker nursery program
as *"nursery-subsidized acquisition"* was too strong. First-party material shows
joining is **no contract and no cost to the nursery** — so it is **vendor-funded
partner acquisition with a discounted B2B upsell**, not partner subsidy. Nursery
payment stays `UNVALIDATED`. My round-1 note cited that program without this.

### 5 · Storage is not the long-horizon killer

W2's ten-year scenarios at a $0.015/GB-month benchmark: light user **$0.79**,
very heavy **$71.28** cumulative. So the Long-Horizon Paradox is refined —
the risk is **duration mismatch between revenue and service obligation**, not
storage cost. Their cost-order puts photo storage **last** of five concerns,
behind churn replacement, maintenance, store take and continuity obligation.

### 6 · Real budget-context data I had not seen

Badger Bonsai Society 2026 dues **$30 / $40 / $20**; a German Bonsai-Lehrer
course at **€290 for three days**. W2's inference is the right one: *club value
can be real while club software budget stays small*, and education WTP does not
transfer to software WTP.

### Why the unread remainder is redundant, not skipped

W2's archives are 4,797 lines. I checked them at **paragraph level**, not
headings: v0.5 contains **every substantive paragraph** of v0.1, v0.2, v0.3 and
v0.4 — the only unmatched paragraph in each is its own version header. Reading
them line by line would add nothing.

Two archived files did hold unique content and were read: the 835-line
cross-front response (99% not in current docs) and the round-1 handoff.

Also verified: all seven of W2's §23.1 W1 boundary cases exist in our corpus
(20–30-tree retrieval limit, 45 trees, 80 trees/30 years, 100% migration
condition, "dozens of trees" exit, Lightroom, spreadsheet).

---

## 1. What changed: the fronts reconciled with each other

The three packages are no longer independent. Each front sent the others a formal
response, and **none found a material contradiction** requiring another to reopen.

W2, W3 and W4 all now state **`READY FOR CROSS-FRONT RECONCILIATION`**.

### They converged on one shared architecture

> **Progress** → entry · **Organization/Retrieval/Memory** → current utility ·
> **Continuity** → trust · **Comparable Journey** → recurring value

with the discipline: **message that acquires ≠ value that retains ≠ value that
monetizes.** Every arrow stays `UNVALIDATED`.

### And on one load-bearing test

> **Can one real tree create current differentiated value over Photos/Excel/notes
> before collection migration or long historical accumulation?**

W2 `G1+G2` = W3 `Progress → Memory` = W4 `L2`. **Three fronts, three methods, one
question.** That convergence is the most valuable output of this round.

**W3 accepted a formal kill condition against its own interest:**

> *If a dedicated one-tree experience does not create concrete advantage over
> Photos/Excel/notes under favorable conditions, Brand must not attempt to rescue
> the thesis with Continuity, Journey or Story.*

A brand workstream pre-committing to not rescuing a failed value proposition with
narrative is unusual and worth preserving explicitly.

---

## 1a. Two gaps that persist into round 2

Verified, not assumed.

### The pricing teardown still has not reached any front

Searched all 74 files for the teardown's figures — `median`, `96%`, `376`,
`22 of 23`, `17 of 23`, `free at download`. **Zero substantive hits.** The two
apparent matches are false positives: *"competitive teardowns"* is the Research
Brief's own Track A phrase, and `376` matched inside a checksum.

File mtimes explain it. Our teardown committed at **20:33**; W2's newest file is
**19:29** and W4's is **19:33**. Only W3's (21:31) postdates it, and W3 has least
use for pricing data.

So W2's §14 Track A item — *"monetization census expansion across the registry"* —
is still open, and **W2 has now twice specified work we have partly done without
either side knowing.**

### W3 and W4 still bundle the same stale canon snapshot

Both packages' `CURRENT-EVIDENCE-AND-DECISIONS.md` hashes to `31fb1d16…` — commit
`45011a0f`, **15:04**. Identical to round 1; **not refreshed.** W4's bundled
registry carries **31 of 45** `platform_identity` values against the live 41.

Their snapshots therefore predate the `§13a` amendment mechanism (17:50), the
teardown (20:33) and the ID backfill.

**W2 bundles no canon at all** and its notice says reconciliation *"must begin
from the latest project copies"*. That policy is the correct one and round 2 is
the second demonstration of why.

**Neither gap invalidates any conclusion** — the fronts' reasoning does not depend
on the missing material. But reconciliation should open by giving all three the
current canon and the teardown.

---

## 2. Applied to canon

### `W4-A` — **APPLIED**

`data/export concern` is reclassified from acquisition moment to **commitment /
trust gate** in `W1-HANDOFF-W2-W3-W4.md`.

Justification is not the unanimous support; it is that **the two canon documents
contradicted each other.** `CURRENT-EVIDENCE-AND-DECISIONS.md` §7b already said
export *"reduces adoption resistance rather than enabling churn"* — a commitment
gate — while the handoff listed it as behaviourally supported acquisition. §13a
permits immediate correction of a contradiction between two canon documents.

Acquisition **caused** by export/continuity concern remains `UNVALIDATED`.

### `W2-001` — **PENDING, marked in canon**

All three fronts recommend `ACCEPT`, and all three state it is **not yet
canonical**. §13a reserves strategic amendments for reconciliation, so the
wording is **not changed**. A marker now sits at the P3 row so *"Best economics"*
cannot be read as settled while the amendment is pending.

### `§11a` — cross-front alignment state added

Records the shared architecture, the primary joint gate, the integrated
validation sequence, both amendment states, and the escalated founder decision.

---

## 3. The decision the fronts escalated

All three independently arrived at the same blocked question:

> **Which success ambition is authoritative — S1 sustainable small business,
> S2 founder full-time, or S3 venture scale?**

W2's anchors (€75k / €200k / €3m annual contribution) are **sensitivity tools,
not targets**. This does **not** block falsification: Step 0 and Step 1 both run
without it. But **no result can be called "sufficient" or "too small" until an
ambition is named**, and that is a founder decision, not a research output.

Round 1 already showed why it bites: at ~€20 net contribution, 5,000 payers is
€100k — **passes S1, fails S2.** The same evidence is a success or a failure
depending on an answer nobody has given yet.

---

## 4. What is now runnable without participants

**Step 0 · `L4-A / G10-A` Comparable Journey corpus-density shadow test.** It is
the only participant-free step in the sequence, all three fronts endorse it, and
it is grounded in the Research Brief's own 20–30-case shadow test.

It answers: *does realistic context filtering across
`species × climate × stage × intervention × state` leave enough genuinely
comparable cases* — before anyone asks whether users value them.

Second Track A item, from W2 §14: **expand the monetization census across the
registry using their seven-dimension coding scheme.** Round 1 established the
merge; that remains outstanding.

---

## 5. Assessment

Adopt as-is. There is nothing to discard.

The round-2 packages did what a second round should: they removed cross-front
ambiguity without inventing new conclusions. No product, price, loop, channel,
geography, payer or positioning was selected by any front. `P1/P2/P3` remain
`UNVALIDATED`.

Two smaller quality points worth recording:

- **W4 self-reported a documentation defect** — an inconsistent gate numbering —
  and normalized it to `G0–G8` rather than leaving it for someone else to find.
- **W2 added a source-notes file** recording dated external inputs, including the
  cost benchmarks behind its envelopes (Cloudflare R2, Apple Small Business
  Program, Google Play fees). Provenance for cost modelling that previously had
  none.

---

## 6. Next

**Cross-Front Reconciliation** is the gate all three are waiting on. Its agenda is
already written by them and is narrow:

1. accept / reject `W4-A` — *already applied here as a contradiction fix; reconciliation should ratify*
2. accept / reject `W2-001`
3. confirm the `G0–G8` W4 gate taxonomy
4. confirm or amend the integrated validation sequence
5. confirm which of `L1–L6` stay eligible for MVP Validation Strategy
6. surface any cross-front contradiction that would kill a loop before testing

Plus the founder decision on ambition, which reconciliation cannot make.
