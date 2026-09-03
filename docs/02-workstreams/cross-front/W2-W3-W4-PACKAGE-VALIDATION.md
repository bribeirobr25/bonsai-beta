# Validation of the W2 / W3 / W4 packages

**Date:** 3 September 2026
**Scope:** `Bonsai_W2_PRE_RECONCILIATION`, `Bonsai_W3_FINAL`, `Bonsai_W4_Growth_Strategy_Current_Package`
**Integrity:** 45 of 45 files verify against the senders' own `SHA256SUMS.txt` (11 / 19 / 15)

## 0. Measured read coverage — stated, not claimed

An earlier version of this document said the packages were "read in full". That
was wrong. Measured against line counts:

| Package | Current material | Read | Coverage |
|---|---:|---:|---:|
| W2 | 4,442 lines | 3,338 | **75%** |
| W3 | 1,613 lines | 800 | **50%** |
| W4 | 2,507 lines | 1,134 | **45%** |
| **Total** | **8,562** | **5,272** | **62%** |

W2's 3,931 lines of superseded working versions were **not** read; they were
verified as a strict superset by section-set diff (0 sections lost across
v0.1→v0.4), which is the check that matters for supersession.

**Read in full:** every synthesis, handoff, amendment, manifest, decision
register, cross-front message, closure checklist and CSV; W2's validation matrix;
W2's opportunity ranking; W4's current state.

**Read in part:** W2's structure map (23% — §6–9, §10–15), W3-FINAL (25% — §1,
§8, §10, §13–14, §20–23), W4's loop qualification (32% — §10–15) and W4's
falsification design (19% — §8A in full, §16–20, headings throughout).

**What that means for confidence.** The per-loop test procedures for L1/L2/L3/L5
were read by structure, not line by line: I read L4-A in full and confirmed the
same hypothesis → eligibility → instrument → decision-rule → non-generalization
pattern repeats via headings. That is enough to adopt the framework, not enough
to vouch for every threshold inside each test.

---

## 1. Headline

All three packages are **high quality and should be largely adopted.** None
selects a product, none converts W1 signals into conclusions, all three keep
`P1/P2/P3` `UNVALIDATED`, and all three carry explicit kill conditions.

Two proposed canon amendments arrived. **Both are well-founded and verified at
source.** One of them catches an internal contradiction in our own canon.

The single material gap is timing, not quality — see §2.

---

## 2. What every package is missing: the pricing teardown

Established from commit timestamps against package mtimes:

| Event | Time |
|---|---|
| Canon at `45011a0f` — the snapshot W3/W4 bundled | 15:04 |
| Briefs commissioned; `§13a` amendment mechanism defined | 17:50 |
| **W2 package produced** | **18:58** |
| Question stack added to briefs | 20:18 |
| **Pricing teardown committed** | **20:33** |
| **W4 package produced** | **20:45** |
| **W3 package produced** | **20:54** |

**All three predate the teardown's findings**, and W4/W3 shipped 12 and 21
minutes after it landed — they were already working. This is a sequencing
artifact, not a failure on their side.

It matters most for **W2**, whose own §21 lists *"competitor monetization
patterns"* as executable Track A work. That work now exists and they did not
have it.

W3 and W4 additionally bundled a canon snapshot from 15:04. **W4's is
structurally current** (45 rows, 17 columns, 32/13 measurement split); only the
`platform_identity` backfill is newer (31 vs 41). Their competitive basis is
sound.

---

## 3. The two amendments — both verified, both accept

### `W2-001` · P3 "Best economics" → `UNVALIDATED`

**Verified at source.** `CURRENT-EVIDENCE-AND-DECISIONS.md:163` reads:

> | **P3** Teacher / practitioner layer | Candidate ceiling | Best economics; also a source of **attestations** …

That row sits inside a table headed *"Three composites remain live, all
`UNVALIDATED`"*. So canon simultaneously calls P3 unvalidated **and** asserts it
has the best economics. W2 is right: this promotes a hypothesis to a conclusion.

**Recommendation: ACCEPT.** W2 explicitly does *not* downgrade P3 — they rank it
second-highest validation priority. The amendment restores evidence discipline
only.

### `W4-A` · export/data concern is a commitment gate, not an acquisition moment

**Verified — and it catches a contradiction inside our own canon.**

- `W1-HANDOFF-W2-W3-W4.md:123` lists `data/export concern` under
  **"Behaviorally supported acquisition moments"**.
- `CURRENT-EVIDENCE-AND-DECISIONS.md:201` says export *"**reduces adoption
  resistance** rather than enabling churn"*.

Reducing adoption resistance is a commitment gate. The two documents disagree,
and W4 is on canon's side.

**Recommendation: ACCEPT.** Under `§13a` this also qualifies as an
*internal contradiction between two canon documents* — one of the three classes
that may be fixed immediately rather than waiting for reconciliation.

---

## 4. Adopt — highest value first

### From W2

| # | Item | Why |
|---|---|---|
| 1 | **Monetization census §6** — real price points for 10 competitors | This is exactly the IAP data our teardown flagged as missing. **Verified 2 of 2 at source**, below. |
| 2 | **Gate architecture G1–G14** | Falsifiable gates with pre-registered thresholds *and* explicit failure scope per gate |
| 3 | **Three-level kill architecture** (model / candidate / venture `VK1–VK6`) | Stops one model failing from reading as the venture failing |
| 4 | **Value recipient ≠ payer** | *"Useful to students does not establish teacher pays"* — the single most reusable rule in the package |
| 5 | **Evidence hierarchy** | payment > switching > workflow artifacts > revealed choice > stated WTP > stated interest. *Stated interest alone does not pass a gate.* |
| 6 | **Reverse ceilings** (S1/S2/S3 + payer-count table) | Replaces TAM × conversion, which canon already rejects |
| 7 | **G11 multiplier chain** | participants × job exists × software willingness × substitute inadequacy × dedicated advantage × activation × payment × retained payment |
| 8 | **Cross-gate interpretation cases A–F** | Especially Case F: payment driven by lock-in is not product-market strength |

### From W3

| # | Item | Why |
|---|---|---|
| 9 | **Psychological vs horticultural safety** | Sharp and correct: reject *horticultural* safety as unearned authority, keep *psychological* safety as a principle. Directly serves the beginner-exposure tension canon records as `OBSERVED`. |
| 10 | **Territory kill list** | Including downgrading *"calm organization"* to inference — that phrase came from our own handoff's synthesis list |
| 11 | **Premature brand promises** (11 items) | *"Never kill another bonsai"*, *"Your bonsai forever"*, *"The bonsai community"* … |
| 12 | **Validation ladder L1–L6** | With the rule: do not use success at L1–L3 as proof of L4–L6 |
| 13 | **Language principles** | Concrete verbs early; `progress` before `journey`; abstract nouns are strategy-only; no bureaucracy vocabulary; don't infantilize beginners |
| 14 | **Messaging matrix M1–M8** | Test territories with named risks, explicitly not slogans |

### From W4

| # | Item | Why |
|---|---|---|
| 15 | **Loop cards L1–L6 + gates G0–G7** | Each with logic, why-it-survives, main risk, status |
| 16 | **Cross-test controls** | *Recruitment is not Growth evidence*; *guided activation is not spontaneous activation*; **invalid execution is `INVALID`, not `FAIL`** |
| 17 | **F0 cheap falsification** | ~8 participants / ~4 actors; 0 → kill-park, 1 → mixed, ≥2 → survives. Explicitly screening, not validation |
| 18 | **L4-A corpus-density shadow test** | The **only participant-free test any front designed**. Correctly grounded in the Research Brief's own 20–30-case shadow test (line 26) |
| 19 | **Cold-start read** | Favours mechanisms creating value at ~zero network density; L2 testable with one user |
| 20 | **Migration/logging kill rule** | *No candidate may depend on substantial work now for value months later* |

### Found only by reading the gaps — added after the coverage audit

These eight were missed in the first pass and are material.

| # | Item | Source | Why |
|---|---|---|---|
| 21 | **Cost-structure map** (15 capability rows, directional intensity) | W2 §9 | Its conclusion is the important part: *"gross margin cannot be evaluated from hosting alone — human/governance/commercial operations may dominate several high-ceiling models."* Practitioner attestation, community moderation and marketplace ops are flagged as potentially dominant. |
| 22 | **Hypothesis register E1–E14** with an evidence-needed column per row | W2 §10 | Pairs each gate with what would actually settle it |
| 23 | **Kill structures K1–K9** | W2 §12 | **Distinct from `VK1–VK6`.** `K7 · TAM inflation` (venture story only survives by generalising bonsai → gardening) and `K9 · continuity contradiction` (the model maximising short-term revenue undermines the trust the long-term value needs) have no equivalent elsewhere. |
| 24 | **Track A list — 5 items** | W2 §14 | Item 1 specifies a **7-dimension coding scheme** for the census: free/paid/freemium/lifetime/subscription/transaction/bundle/B2B2C · payer · free limits · paid value unit · portability/export · service-custody obligations · professional/partner surface |
| 25 | **Measurement ledger — 18 fields** | W4 §16 | Separates `guided_actions` from `spontaneous_actions`; records `current_workaround`, `reason_for_nonuse`, `confounds`. Ends: *"Do not overwrite contradictory outcomes. Durable use and abandonment can both be true."* |
| 26 | **Pre-registration sheet — 12 items** | W4 §17 | **"No threshold changes after outcomes are visible."** Plus: instrument break or eligibility violation is `INVALID`, not `FAIL` |
| 27 | **What the Brand must never become — 8 items** | W3 §13 | Includes *a status economy where price, awards, prestige or followers define value*, *a beginner-shaming culture*, and *a data prison whose value rises while user control falls* |
| 28 | **Entry vs long-term territory table** | W3 §10 | Working model: **concrete entry → accumulated meaning**, not *abstract promise → hope the user understands* |

Two smaller corrections to the first pass:

- **W2's amendment does carry its `TARGET`.** Structure map §13 states
  *"Location: `CURRENT-EVIDENCE-AND-DECISIONS.md` §7, P3 note"* — the standalone
  amendment file omits it, which is why the first pass reported the field as
  missing. Between the two documents, 5 of `§13a`'s 6 fields are present;
  only an explicit `STATUS` line is absent.
- **W4's brand architecture sentence** is
  `KEEP TRACK → SEE PROGRESS → BUILD MEMORY → CREATE CONTINUITY` (W3 §1), which
  is the four-stage form of the three-stage `Progress → Memory → Continuity`
  reported earlier.

### The anti-status convergence is with canon, not just among the fronts

The first pass reported three fronts independently rejecting status mechanics.
Reading `PROJECT-BRIEF` shows **canon already held that position**, and the
fronts converged *on canon* rather than merely on each other:

- `PROJECT-BRIEF:287` — *"**Story, not price, is the social currency.** … That property structurally blocks wealth → status, **which is the failure mode a bonsai social product most obviously risks**."*
- `PROJECT-BRIEF:285` — *"**Contribution ≠ invitation for critique.**"* A grower recorded that his tree had died and received unsolicited postmortem advice.
- `PROJECT-BRIEF:267` — *"Preserve history; **do not convert it into ranking**."*

W3 §13 cites the first two by name. This is a four-way agreement — canon plus
three fronts — and it is the most robust position in the entire body of work.

### Converged independently across all three — adopt as a shared constraint

All three fronts, without coordinating, ruled out status mechanics:

- W3 — *"Belonging through Trees"* parked; generic community rejected
- W4 — *"No forced social sharing, rankings, follower counts or rewards"*; asks W3 for share framing *"without status performance"*; provenance *"must not become a quality badge … or prestige hierarchy"*
- W2 — generic community feed is `D2 · do not use to rescue economics`

This matches canon's §8 **status creep** risk. Three independent arrivals at the
same guardrail is the strongest signal in the three packages.

---

## 5. Verified at source

| Claim | Source check | Result |
|---|---|---|
| P3 = "Best economics" in canon | `CURRENT-EVIDENCE:163` | ✅ exact |
| Export "reduces adoption resistance" | `CURRENT-EVIDENCE:201` | ✅ exact |
| `data/export concern` listed as acquisition moment | `W1-HANDOFF:123` | ✅ exact — contradiction confirmed |
| Research Brief 20–30 shadow test | `RESEARCH-BRIEF:26` | ✅ exact |
| **Bonsai Care App $2.99/mo, $29.99/yr** | App Store IAP | ✅ **exact** |
| **Komorebi $24.99 lifetime / $14.99 yr / $1.99 mo + discounted lifetime** | App Store IAP | ✅ **exact, including the discount they noted** |
| Bonsai Album $7.99 one-time, since 2011 | Our teardown | ✅ matches ($7.99, released 2011-10-06) |
| Jooni $1.99/mo, $19.99/yr | Our teardown | ✅ matches (both extracted independently) |
| W4 registry snapshot integrity | Diff vs live | ✅ 45 rows, 17 cols, 32/13 identical |
| W2 supersession v0.1→v0.4 | Section-set diff | ✅ strict superset, 0 sections lost |

---

## 6. Do not adopt

Nothing substantive should be discarded. Four narrower cautions:

1. **Do not keep W3/W4's bundled canon snapshots as live copies.** Archive only.
   **W2's policy is the correct one** and should become the standard: *"duplicating
   canon inside a workstream handoff creates stale competing copies."* W3 and W4
   demonstrated exactly that risk.
2. **S1 €75k / S2 €200k / S3 €3m must not become canon targets.** W2 says so
   themselves — scenario anchors to expose payer-count sensitivity, nothing more.
3. **Neither price census is complete.** W2 covers 10 products; our teardown
   covers 23 of 45. Merge, and label the union as partial.
4. **W2's amendment is *nearly* in `§13a` format** — see the correction in §4.
   Its `TARGET` is in the structure map, not the standalone file. Consolidate the
   two into one six-field block on adoption rather than rejecting.

One wording drift worth fixing on merge: W3 §8.2 says *"45 known
**bonsai-specific** software products/surfaces"*. Current canon says
*"competitive bonsai software products/surfaces"* — the change was deliberate
once the count began including a bundled tracker, desktop software and a
hardware companion.

---

## 7. What to send back

### 7.1 The teardown, to all three — W2 first

`04-evidence/W2-PRICING-TEARDOWN.md`. For the 23 measurement-eligible products:
**median ratings 0**, **16 of 23 with zero**, **top three hold 96%** of 376,
**22 of 23 free at download**, **17 of 23 launched in 2026**.

It fills the exact slot W2's §21 reserved for *"competitor monetization patterns"*.

### 7.2 The ceiling question W2 did not answer

Canon `§11.2` asks: *"would 5,000 users at €3/month be success or failure here?"*
It is absent from the W2 package — it was also absent from our own W1 handoff,
which is likely why.

W2's own table answers it once the number is supplied. €3/month is €36/year
gross; after store commission and payment costs a **net contribution near €20**
is a reasonable working figure. On their table:

- €20 net × 5,000 payers = **€100k** → **passes S1 (€75k), fails S2 (€200k)**

So on W2's own framework, 5,000 payers at €3/month is a **sustainable small
business, not a founder-full-time business** — their Case D exactly.

**The harder half is whether 5,000 paying users is reachable at all.** Our
teardown shows the entire eligible US iOS set holds 376 ratings with the leader
at 193, and 96% concentrated in three products. *Ratings are not users and must
not be converted into a user count* — but reaching 5,000 **paying** users would
require becoming the category's leading product, and the current leader is a
**$7.99 one-time purchase**, not a subscription.

That is a real constraint on the €3/month shape, and neither front could have
seen it without the other's work.

### 7.3 Three smaller returns

- **W3**: adopt canon's *"competitive"* wording over *"bonsai-specific"*.
- **W4**: `platform_identity` is now 41/45, up from the 31 in their snapshot — relevant to distribution-actor work.
- **All**: `§13a` defines the six-field amendment format; W2's amendment predates or missed it.

---

## 8. Recommendation

**Adopt all twenty-eight items in §4, plus the cross-front mapping table and the
W3 read-order fix identified in round 2 (`W2-W3-W4-ROUND2-VALIDATION.md` §1b). Accept both amendments** — `W2-001` at
reconciliation, `W4-A` immediately under `§13a`'s internal-contradiction
exception, since it resolves a disagreement between two canon documents.

**Merge the two price datasets under W2's own coding scheme.** Their §14 Track A
item 1 specifies seven dimensions — model type, payer, free limits, paid value
unit, portability/export, service-custody obligations, professional/partner
surface. W2 has tiers and architectures for 10 products; we have price, ratings,
dates and concentration for 23; neither carries all seven dimensions for any row.
Recoding the union of 23 against those seven fields is the single most valuable
next Track A step, and it is what `G14` price-sensitivity and `G11` ceiling both
need before participant access.

Then run **Cross-Front Reconciliation**, which is what all three fronts are
asking for.
