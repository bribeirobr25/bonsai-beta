# To W2, W3 and W4 — corrections and undelivered evidence

**Date:** 4 September 2026
**Status:** all three fronts are `READY FOR CROSS-FRONT RECONCILIATION`. Nothing
here reopens a front. Two items are corrections; one is evidence you asked for
and have not received.

---

## 1. To W2 — the evidence your §14 Track A item 1 specifies already exists

Your Track A list opens with *"monetization census expansion across the
registry"*. **That work has been done and has not reached you — twice.**

`04-evidence/W2-PRICING-TEARDOWN.md` + `W2-pricing-teardown-apple.csv`,
retrieved 3 Sep 2026 from the iTunes Lookup API. `OBSERVED`, US storefront, one
date, **23 measurement-eligible products** (filtered on
`included_in_standalone_distribution_measurement`, per your own rule):

| Measure | Value |
|---|---|
| Free at download | **22 of 23** |
| Paid upfront | **1** — Bonsai Album, **$7.99** |
| Median ratings | **0** |
| Zero ratings | **16 of 23 (69%)** |
| Total ratings | **376** |
| Top-3 share | **96%** |
| Released in 2026 | **17 of 23** |
| Updated in 2026 | **20 of 23** |

**Three readings for your §18.3**, which currently says only that the required
paying base *"could be high relative to the distribution scale currently
visible"*:

1. **Free-by-default is a convention, not a demonstrated requirement.** The one
   paid-upfront product is also the ratings leader — but it launched in **2011**,
   so age alone may explain it. Not causal.
2. **The median product has zero ratings while being actively maintained.** 17 of
   23 launched this year. This is a **crowded, fresh market where almost nobody
   gets traction** — a different problem from a dying category.
3. **Mirai Mobile holds 379 ratings alone** — more than the entire eligible set
   combined. Correctly excluded from standalone measurement, and the reading is
   uncomfortable: **the most-rated tracker did not win by being a better
   tracker.** It arrived attached to an audience.

**Two corrections to our own earlier note.** Your §25.6 is right that store
commission is **15%** (Apple Small Business, Google Play), not the 30% we
assumed. Recomputed, the €3/month verdict is unchanged — 5,000 payers ≈ €110k at
€22 net, **passes S1, fails S2**. And we had cited the Bonsai Tracker nursery
programme without carrying your **C-001** correction; we do now.

Your census and this teardown **corroborate exactly where they overlap** —
Bonsai Album $7.99 and Jooni $1.99/$19.99 were derived independently on both
sides. The obvious next step is to merge them under your seven-dimension coding
scheme; neither dataset carries all seven for any row.

---

## 2. To W3 — a canon defect you inherited, and one conclusion it produced

**`W1-FINAL.md` §12's customer-language list is not homogeneous, and we let you
believe it was.** §12 gives review counts for **eight** terms but the list
contains **ten**. We recounted all of them against the 196-review corpus. **The
eight stated counts recount exactly** — the arithmetic was always sound. The list
was not:

| Tier | Terms | Reviews |
|---|---|---|
| **Well attested** | reminder · progress · my trees · collection · photo · keep track | **15–21** (7–10%) |
| **Marginal** | record · notes · organize | **5–6** (2–3%) |
| **Single instance** | **`one place`** | **1** (0.5%) |

The sole `one place` review: *"finally one place to look up info and keep track
of trees."*

**One W3 conclusion rests on the two weakest terms.** `W3-FINAL.md` §12.4 says:

> *"`organize` and `one place` are close to customer language. `calm` is not."*

`organize` has 5 reviews; `one place` has **1**. **The downgrade of `calm` is
right. The promotion of the other two is not supported.** `M1` — *"Keep your
trees, photos and notes together"* — uses `notes` (2%).

None of this is wrong as a *hypothesis*. It is wrong as *"language users already
use"*, which is the distinction W3 itself insists on — and which your corpus
vindicates more strongly than you claimed: across 196 reviews, `history`,
`continuity`, `ownership`, `journey`, `stewardship`, `legacy` and `provenance`
appear **zero times**. `memory` appears once.

**Second item — your read order defeats your own rule.** Your
`README-MANIFEST.md` states correctly that *"if the upstream project Canon is
later amended, the upstream current Canon takes precedence"* — but items **1–4**
of the read order point at `01_REFERENCE_SNAPSHOT/`. Your bundled snapshot is
commit `45011a0f`, **15:04 on 3 Sep**, and predates the amendment mechanism, the
teardown and a registry backfill. **Point items 1–4 at live canon and keep the
snapshot for audit only.**

---

## 3. To W4 — your best artefact is filed as history

`W2-CROSS-FRONT-MAPPING-v0.1.md` — an **11-row matrix** aligning every W2 gate to
its W3 territory and W4 loop, each row carrying the joint unresolved question and
a disposition — sits in W2's `99_ARCHIVE/02_SUPERSEDED_HANDOFFS/` and is
**referenced by zero documents in W2's current set.**

Nothing supersedes it. The prose alignment summary that replaced it carries less.
We have promoted it to `02-workstreams/cross-front/CROSS-FRONT-MAPPING.md` and
recommend reconciliation open with it.

Also: `platform_identity` is now **41 of 45**, up from the 31 in your bundled
registry — relevant to distribution-actor work.

---

## 4. Registry state as of 4 September 2026

**45 rows · 32 in standalone measurement · 41 with `platform_identity` · 0 rule
violations · 2 `VERIFICATION_CONTESTED`.**

`W4-A` has been **applied** to `W1-HANDOFF-W2-W3-W4.md` — not on the strength of
your unanimous support, but because it resolved a contradiction *between two
canon documents*: `CURRENT-EVIDENCE` §7b already said export *"reduces adoption
resistance"* while the handoff listed it as an acquisition moment.

`W2-001` is **marked pending, not applied.** All three of you support it and all
three say it is not yet canonical; `§13a` reserves strategic amendments for
reconciliation. A marker now prevents *"Best economics"* being read as settled.

---

## 5. Not asking for

No front should reopen. No further broad exploration. The next gate is
Cross-Front Reconciliation, and its agenda is the one you three already wrote.

The one thing reconciliation cannot decide is the **success ambition —
S1 / S2 / S3**. That has gone to the founder with the payer-count arithmetic and
the category-traction context attached.
