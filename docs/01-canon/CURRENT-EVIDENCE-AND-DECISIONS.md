# Current evidence and decisions

**Purpose:** the single entry point. Read this before opening any other
document. It exists so that the Monetization, Brand and Growth workstreams do
not have to reconstruct the state of the project from several thousand lines of
research log.

**Status:** pre-validation. No product chosen, nothing built, no users.
**Last reconciled:** 3 September 2026 · W1 closure reconciliation.

Every claim carries an evidence status per the canonical taxonomy in
`PROJECT-BRIEF.md`: `OBSERVED` · `SUPPORTED SIGNAL` · `CONTRADICTED` ·
`UNVALIDATED` · `DEFERRED`.


> **Strategic Foundation / Pre-MVP Canon v1.0** — frozen 2 September 2026.
> Changes from here should be recorded as amendments rather than silent edits,
> so the four workstreams do not diverge from different snapshots.

---

## 1. Current thesis

> A persistent record for the life of a bonsai tree — preserving its journey and
> provenance across years and stewards, and connecting that history to relevant
> people and knowledge.

The sequence that survives the research so far:

**Tree Identity → Tree Journey → Living Provenance → Contextual Relationships →
Structured Outcomes → Decision Support**

The first four can produce value before any advisor exists. That ordering is
deliberate and is the main change from the original *record → outcomes →
advisor* formulation.

---

## 2. What has been falsified

| Claim | Status | Evidence |
|---|---|---|
| "Bonsai tracking is an empty space" | `CONTRADICTED` | At least 45 distinct competitive bonsai software products/surfaces are known to ship or have shipped; exact universe remains `UNVALIDATED` |
| "Transferable tree history is novel" | `CONTRADICTED` | Bonsai Tracker, Yoi, Appy Bonsai all do it |
| "Permanent tree ID is a moat" | `CONTRADICTED` | Also RFID (ScandinavianBonsai), QR (Wabi Sabi), NFT (MyBonsaiTag) |
| "Community feed is a differentiated opportunity" | `CONTRADICTED` | Bonsai Empire, Jooni, Tiny Tree Club, Bonsai Tracker all ship one |
| "Incumbents ignore the southern hemisphere" | `CONTRADICTED` | Bonsai Tracker, Bonsai Empire, Bonsaiku, Nebari all claim climate adaptation |
| "A Portuguese-language position is open" | `CONTRADICTED` | Nebari (pt, 2026) and `br.com.bonsaiapp` |
| "A better encyclopedia could be the wedge" | `CONTRADICTED` | Closed since the first market pass |
| "Blockchain creates provenance trust" | `CONTRADICTED` | MyBonsaiTag tried it; the hard problem is whom to believe |

---

## 3. What is supported

| Claim | Status | Note |
|---|---|---|
| Growers document the same tree publicly over years | `SUPPORTED SIGNAL` | Multi-year progression threads exist, including 16-year examples. **Prevalence unmeasured.** |
| Progression threads act as learning infrastructure | `OBSERVED` | Growers state their first stop on acquiring a species is its progression threads |
| People want to follow a specific *tree* | `OBSERVED` | Spontaneous "please keep us updated" directed at trees |
| Recurring small-group learning around trees exists | `OBSERVED` | Study groups, one member reporting seven years |
| "Is it safe to do X now?" is a recurring job | `SUPPORTED SIGNAL` | Repot/prune/defoliate timing questions recur; frequency unmeasured |
| Advice materially conflicts | `SUPPORTED SIGNAL` | A found case: same tree, same question, "wait" vs "you can repot now" |
| Missing context drives conflict | `SUPPORTED SIGNAL` | First reply to a repotting question was often "state your location" |
| Provenance carries cultural and market weight | `OBSERVED` | Kicho Bonsai (1,000+ trees since 1980); Pacific Bonsai Museum accession records; pricing attributed to material + collector + stylist + potter |
| Beginners experience public exposure as friction | `OBSERVED` | Documented hesitancy; Bonsai Empire's own etiquette guidance acknowledges starter plants are looked down on |
| Failure is documented and socially valued | `OBSERVED` | Growers report deaths; others thank them for it |
| Conversation-centric systems fragment tree history | `OBSERVED` | A grower consolidated several threads about one tree, judging he had recorded it badly |

---

## 4. What remains unvalidated

**None of these has failed. None has been tested.**

| Hypothesis | Status | Blocked on |
|---|---|---|
| Growers keep **private** longitudinal records (H1B) | `UNVALIDATED` | Participant access — **the load-bearing assumption**. W1 adds a `SUPPORTED SIGNAL`: nine reviewers describe replacing a spreadsheet or notebook, one explicitly *about to build* their own before finding the app. Impulse predates the tool; prevalence still unknown |
| Lost history causes concrete pain (H1C) | `UNVALIDATED` | Participant access |
| Verifiable provenance adds trust over plain history (H5) | `UNVALIDATED` | Participant access |
| Tree-led relationships beat generic feeds (H6) | `UNVALIDATED` | Participant access |
| Outcome evidence can substitute for reputation (H7) | `UNVALIDATED` | Experiment never run. **Complement is now more plausible than replacement.** |
| Anyone will pay | `UNVALIDATED` | No pricing test |
| Vision can assess bonsai material from a photo | `UNVALIDATED` | No benchmark exists for this task |
| Residual climate mismatch for tropical growers | `UNVALIDATED` | Needs triangulation |

---

## 5. Competitive reality

**Current W1 registry state:** at least **45 distinct competitive bonsai software products/surfaces are known to ship or have shipped**. This is an `OBSERVED` discovered lower bound, not a census. The exact universe and current active count remain `UNVALIDATED`.

`COMPETITOR-REGISTRY.csv` is the single source of truth for W1 competitor identity. Narrative documents should not maintain independent product totals.

**Two caveats on the count.** First, 45 came from adding five products found in a *single* US App Store query on 3 Sep 2026 — one storefront, one search term. That a single query added five means the true universe is materially larger, and `UNVALIDATED` is the honest status. Second, two Apple identities (`W1-020` Mori Bonsai, `W1-029` Bonsai Care App: Bonsai Buddy) are `VERIFICATION_CONTESTED` after three rounds: the external front reports first-party reproduction and supplied exact URLs; those URLs return HTTP 404 under two independent clients, the IDs return 0 of 52 storefronts, and five searches across the storefronts they name returned 192 distinct apps containing neither product — while a control passes every method. Held as contested, not refuted. Neither is load-bearing. See `W1-FINAL.md`, internal addendum §A and §F.

**Competitor identity is registry-owned, and the registry has been wrong.** Applying the derived measurement rule on 3 Sep 2026 exposed two data defects: `Yoi Bonsai` was mis-typed as `standalone_app`, and `ScandinavianBonsai` carried a **typo'd `platform_identity`** that 404s, which briefly caused a live product to be recorded `defunct`. Both fixed. Treat registry fields as evidence to check, not as settled fact.

### Distribution observations

- **Android:** at least four known products are in the **10K+ Google Play install bracket** — Bonsai Care App, Appy Bonsai, Jooni and My Bonsai Book. This is `OBSERVED` distribution, not evidence of active usage, retention, paid conversion or revenue.
- **iOS:** Bonsai Album is the currently observed US ratings leader **among standalone products** at **193 ratings**, ahead of BonsaiDo at **136**. Counts are date-sensitive. The qualifier matters: **Mirai Mobile holds 379**, but is excluded from standalone measurement because its distribution is bundled with the membership.
- The earlier statement that the category held **~330 iOS ratings across four storefronts** is **superseded as a category-wide total**. It remains a historical subtotal for the earlier measured sample. The reconciled lower bound in the same four-market framework is **≥647** before a complete refreshed census.
- The Android distribution curve is a **steep long tail**, not “10K+ then zero”: lower 1K+, 500+ and 100+ brackets are also observed.
- **iOS attention is extremely concentrated, and the median product has none.** A Track A teardown (US, 3 Sep 2026 — `04-evidence/W2-PRICING-TEARDOWN.md`) of the **23 measurement-eligible** products with a resolvable Apple identity finds **median ratings 0**, **16 of 23 with zero ratings (69%)**, and the **top three holding 96%** of 376 total. Two products — Bonsai Album (193) and BonsaiDo (136) — hold **87% between them**. `OBSERVED`, one storefront, one date.
- **This is an active market, not a dying one.** **17 of 23 launched in 2026** and **20 of 23 were updated in 2026**. The zero-rating majority is current, maintained software that nobody has found — a different problem from abandonment.
- **22 of 23 are free at download.** The sole paid-upfront product, Bonsai Album at **$7.99**, is also the ratings leader — but it launched in 2011, so age alone may explain that. Free-by-default is a **convention, not a demonstrated requirement**.
- **Mirai Mobile holds 379 ratings, the highest observed** — roughly double Bonsai Album. It is excluded from standalone measurement because its distribution is bundled with the membership. The reading to carry forward: the most-rated tracker in the set **did not win by being a better tracker**; it arrived attached to an existing audience. Canon already records a user displacing Mirai My Trees with Excel and folders.

> **Guardrail:** ratings are not users; installs are not active users; neither establishes retention, paid conversion, revenue or economic viability.

### Exclusions that trap rescans

- `Bonsai by Zoom` / Hello Bonsai is freelancer invoicing/business software, not bonsai-tree software.
- `Bonsai Design Ideas` is an image-gallery/design-inspiration app, not a longitudinal tree record product.

Both are explicit exclusions in the W1 registry.

### The actual competitive set

W1 `OBSERVED` growers using or reverting to:
- spreadsheets,
- Google Photos / photo folders,
- OneNote / Evernote / generic notes,
- Lightroom metadata,
- notebooks and pencil,
- printed paper calendars,
- phone alarms,
- desktop tools.

Therefore a dedicated product must create incremental value over **general-purpose and analog systems**, not only over other bonsai apps.

### Positions and constraints

- **“Easier logging” is not an available wedge by itself.** Current entrants already position around one-tap logging, no forms, offline/no-account use, no cloud, configurable reminders and export. Whether any implementation actually solves logging persistence remains `UNVALIDATED`.
- **Verifiable provenance** remains unoccupied in the stronger sense of `claim → evidence → attestation → confidence`. Transferable history itself is already occupied. Yoi Bonsai shows low observable Google Play distribution in the current snapshot; this is **not evidence that the position is failing**.
- **Aggregate outcome data** remains unoccupied in the observed product set.
- **Comparable Journey** remains a candidate concept, not a validated product behavior.

## 6. Domain model conclusions

Stress-tested against 20+ real public histories. Detail in `DOMAIN-MODEL.md`.

- The root object is a **Living Subject**, not a Tree — forests and root-over-rock are compositions.
- **Observed outcome must be separated from attributed cause.** Community death reports routinely disagree on causation.
- **Intent** is a first-class field; without it an outcome cannot be interpreted.
- **State** (a condition persisting over a period) is distinct from **Event**.
- **Confidence attaches to the claim, not the subject.** There is no "verified tree".
- **Claims are versioned**, never silently rewritten.
- **Death does not close the record.**
- Blockchain is not required; the hard problem is governance, not cryptography.

---

## 7. Product candidates

Nothing is chosen. Three composites remain live, all `UNVALIDATED`:

| Candidate | Content | Note |
|---|---|---|
| **P1** Tree identity + journey (+ provenance substrate) | Foundational candidate | Outcome aggregation explicitly **out** of the initial core |
| **P2** Acquisition companion | Candidate funnel | Ends with "start this tree's journey", not a care guide |
| **P3** Teacher / practitioner layer | Candidate ceiling | Potentially higher-value professional payer and a possible source of **attestations**. **Economics remain `UNVALIDATED`.** |

> **`W2-001` ADOPTED at Cross-Front Reconciliation, 4 September 2026.** The prior
> wording — *"Best economics"* — asserted a conclusion inside a table headed
> *"all `UNVALIDATED`"*. All three fronts recommended `ACCEPT` and none produced
> evidence for the stronger phrase.
>
> **This does not downgrade P3.** It remains **second validation priority** — but
> under `S1` its role changed: it is no longer a viability hedge, it is the
> **only identified route to the `S3` aspiration**. See
> `02-workstreams/cross-front/CROSS-FRONT-RECONCILIATION.md`.

**The advice ladder** determines what can ship without authority: levels 0–3
(record, retrieve own history, retrieve similar cases, describe outcomes)
require none. Levels 4–5 (decision support, recommendation) depend on H7.

---

## 7a. Why dozens of products coexist without a winner — seven working explanations

Not findings of causality; the best available explanatory set.

1. **Heterogeneous jobs** — beginner guidance, collection management, journaling and expert experimentation are different jobs
2. **Good-enough substitutes** — Photos, OneNote, notebooks, spreadsheets already solve enough
3. **Repeated-maintenance economics** — **the user pays the logging cost every time they touch a tree, while some benefit arrives months or years later**
4. **Structure-friction tradeoff** — a schema rich enough to be useful later is tedious during capture
5. **Reminder paradox** — immediate utility, but noise or false precision when generic
6. **Trust / durability** — a multi-year record makes app death and data loss more consequential
7. **Authority mismatch** — AI guidance attracts beginners while creating trust risk and expert rejection

> **#3 is the most useful diagnosis available.** It reframes the problem from
> *logging friction* to a **timing mismatch between cost and benefit** — which
> points at different remedies: batch capture, deferred structuring, and making
> early value arrive before the collection is entered.

---

## 7b. How users exit — four mechanisms `OBSERVED`

1. **Implementation failure** — bugs, photo handling, sync, notifications, cumbersome input
2. **No incremental value** — notes, alarms, Photos and Excel already do enough
3. **Business-model rejection** — subscription refused regardless of utility
4. **Durability / trust failure** — a decades-long hobby against software that may vanish, lose data or trap records

**Only the first can be addressed by execution quality within an unchanged product thesis.** The other three may require a materially different value proposition, economic model or trust/data architecture. A product thesis must answer all four.

Two design implications from the same evidence:

> **Trust may be earned partly by making it easy to leave with your data** — export reduces adoption resistance rather than enabling churn.

> **If activation requires importing 30 trees before value becomes visible, the switching cost kills the loop before it starts.** Value must arrive before the collection is entered.

---

## 8. Strategic risks

| Risk | Consequence |
|---|---|
| **Product mortality — the “decades problem”** | **From W1.** Bonsai are kept for decades, so the more successfully a product becomes the system of record, the more consequential product mortality becomes. One grower would refuse such an app *even if free*. Bonsai Album has shipped since 2011, remains listed, and has no public App Store update after May 2023 in the current snapshot; this illustrates continuity risk without proving the product is dormant. |
| **Logging friction** | **Risk #1.** If nobody records continuously, everything downstream fails |
| **Durability of the record** | **From W1.** A paying user of two years reported total data loss (reportedly restored later; unverified). For a system of record durability *is* the value proposition — export, backup and guarantees are core, not later polish |
| **Review-evidence authenticity** | **From W1.** One app’s entire review corpus matched a launch-window promotional pattern. Future review-based evidence must be screened; the flagged set is quarantined, not deleted |
| Market ceiling | Competitive crowding and modest observable store distribution raise the question; market size, revenue, retention and economic viability remain `UNVALIDATED` |
| Authority gap | The advisor may never become trustworthy |
| Bad causal inference | Outcome data producing confident, wrong guidance |
| Status creep | A record decaying into a ranking, contradicting the stated intent |
| Over-complexity | The model is rich; using it must not feel that way |
| Cold start | Partly mitigated — value does not require network density on day one |
| Incumbent response | Features are copyable; only the accumulated corpus is not |

---

## 9. Validation tracks

**Track A · zero-participant, runnable now.** Market scan (done), competitor
review mining (**done; W1 closed for broad review mining**), public behavioural evidence,
provenance research and shadow validation remain available for targeted follow-up.

**Track B · participant validation, blocked on access.** Artifact interviews,
H1B/H1C, retention, attestation, H7, willingness to pay.

> A Track B test that cannot be run is `UNVALIDATED`, never `FAIL`.

---

## 10. Validation opportunities

> **Canonical rule:** validation opportunities are inputs to the venture, not
> dependencies of it. If an opportunity disappeared tomorrow, the direction of
> work should not change.

**Upcoming:** a beginner workshop in roughly one month, 90–120 minutes,
attendees leaving with their first tree. Cohort is **zero-to-low experience**.

Useful for beginner onboarding, vocabulary, first-tree anxiety, early logging
friction and 7/14/30-day return. **Not** useful for experienced growers,
provenance, transfers, willingness to pay, practitioner workflows, long-term
retention or network effects.

Activation there will be **artificially inflated** — instructor present, guided,
novel, social. The meaningful question is whether anyone returns *because it
gave them value* rather than because they were asked.

---

## 10b. The organizing question for W2–W4

> **Why do dozens of tracking, care and journal products coexist while growers still resort to notebooks, spreadsheets, OneNote, photo folders and custom tools?**

A better lens than *is the market too small* — it accepts that the attempts exist and asks why they have not displaced the workarounds.

---

## 11. Next decisions

1. **Competitor review mining** — ✅ **closed for broad review mining**. See `W1-FINAL.md`. The structured storefront corpus contains **zero explicit `JOB_REJECTION_SIGNAL` reviews**, but this scope must not be generalized: broader W1 evidence includes explicit app uninstall, structured-record abandonment, no-incremental-value judgments and refusal to adopt dedicated software. Four known Android products are in the 10K+ bracket; the lower tail remains non-zero. W1 now continues only through targeted follow-up when another workstream identifies a specific unresolved question.
2. **Monetization & economics** — ✅ **returned and reconciled 4 Sep 2026** (see §11a–§11c). W2 carries three frontiers: dedicated workflow value, professional payer, Comparable Journey. **The ceiling question is answered:** at 15% store commission, 5,000 users at €3/month is ≈€110k net — **clears `S1`**, fails S2, irrelevant to S3. The category-leader conversion question remains open.
3. **Brand** — ✅ **returned and reconciled.** Leading architecture `Progress → Memory → Continuity`; `Journey → Learning` as future differentiation. Of the six territories listed here, W3 kept memory, progress and learning, absorbed story, parked legacy, and split safety into *psychological* (kept as principle) and *horticultural* (rejected as unearned authority).
4. **Growth** — ✅ **returned and reconciled.** Six mechanisms `L1–L6`, gates `G0–G8`, no channel or geography selected.
5. **Cross-front reconciliation** — what product thesis survives all four lenses? *Including the option that none does.*
6. **Then** MVP validation strategy, and only then product design.

---

## 11a. Cross-front alignment state — 3 September 2026

**W1 `CLOSED` · W2, W3, W4 all returned and `RECONCILED` 4 Sep 2026.** All three
returned final packages, exchanged formal responses, and **none found a material
contradiction** requiring another front to reopen.

### The shared value architecture — every arrow is a separate hypothesis

> **Progress** → acquisition / entry
> **Organization · Retrieval · Memory** → current utility / return
> **Continuity** → trust / commitment
> **Comparable Journey** → potential recurring differentiated value

This is **not a validated funnel**. The governing cross-front discipline is:

> **message that acquires ≠ value that retains ≠ value that monetizes.**

### The primary joint gate

All three fronts converged on one question as the load-bearing test:

> **Can a dedicated experience around one real tree create current differentiated
> value over Photos / Excel / notes, before collection-wide migration or long
> historical accumulation?**

| Front | Instrument |
|---|---|
| W2 | `G1` substitute superiority + `G2` time-to-differentiated-value |
| W3 | `Progress → Memory` |
| W4 | `L2 · One-Tree Land-and-Expand` |

**Failure is cross-front informative**, not merely a W4 result: consumer P1
economics weaken materially, and W3 accepted a formal kill condition that
*Brand must not rescue a failed dedicated-value thesis with Continuity, Journey
or Story.*

### Integrated validation sequence — proposed, not a roadmap

| Step | Test | Access |
|---|---|---|
| **0** | `L4-A / G10-A` Comparable Journey corpus-density shadow | ✅ **RUN 4 Sep 2026 — `MIXED · DENSITY RISK HIGH`** |
| 1 | `L2 + G1/G2` One-Tree Dedicated Value | participants |
| 2 | `L1` First-Tree Inception | participants |
| 3 | `G7A/B` professional workflow + budget discovery — **not** L5 Growth | participants |
| 4 | `L3` Progression Artifact | participants |
| 5 | `L4-B / G10-B` Comparable Journey utility | participants |
| 6 | `L5` Teacher/Club Continuity — gated by prior evidence | participants |
| 7 | `L6 / G9` Transfer / Provenance — secondary, long-cycle | participants |

### Step 0 result — `L4-A` corpus density

**`MIXED · DENSITY RISK HIGH`, and the binding constraint is source access.**
See `04-evidence/W4-L4A-CORPUS-DENSITY-SHADOW-TEST.md`.

Tier 2 matching works — 11 of 21 query shapes had ≥2 comparable cases. **Tier 1
could not be tested**: the only reachable corpus is single-author, 75% ficus,
75% Florida, so climate has **one value** and contributes zero discriminating
power. A realistic Tier 1 query returns **0** cases.

> **Single-source density is illusory** — it looks adequate because everything
> shares an author, a garden and a climate.

Two positives worth keeping: real progression writing **does** carry the domain
model's fields (intervention and photo evidence 12/12, species and stage 10/12),
so the model is not imposing structure the material lacks — but `state`,
`outcome` and `intent` sit at **58%**, and those are what make a comparison
useful rather than merely similar.

`L4-B` remains gated. `L4` is **not** parked — the failure is in the sample, not
demonstrably in the concept. Unblocking needs one multi-author multi-climate
source; **still Track A, still no participants.**

### Amendment status

| Amendment | Support | State |
|---|---|---|
| `W4-A` export/data = commitment gate, not acquisition moment | W4 proposed · W2 + W3 support | **APPLIED** 3 Sep 2026 under §13a — it resolved a contradiction between two canon documents |
| `W2-001` P3 "Best economics" → `UNVALIDATED` | W2 + W3 + W4 all `ACCEPT` | **ADOPTED** 4 Sep 2026 at reconciliation — see §7 |

### The decision the fronts escalated — **now made**

> **`S1` is authoritative (4 Sep 2026). `S3` is an aspiration with no identified
> path.** Full decision and its guardrails: §11c.

Results are judged against **€75k annual contribution**. `S3` may not be used to
justify a decision `S1` would not justify — that is `VK5`/`K7`.

W2's scenario anchors (€75k / €200k / €3m annual contribution) are **sensitivity
tools, not targets**. This does **not** block falsification — Step 0 and Step 1
can run without it — but **no result can be called economically "sufficient" or
"too small" until an ambition is named.**

---

## 11b. Adopted frameworks from W2 / W3 / W4

Adopted 4 September 2026 so the frameworks are usable without opening a package.
Full detail lives in `02-workstreams/W2-…`, `W3-…`, `W4-…`. **Adopting a
framework does not validate any hypothesis inside it.**

### Evidence hierarchy — governs every economic test

Prefer, descending: **actual payment / renewal / contract** → actual switching
while the substitute remains available → real workflow behaviour with artifacts
→ revealed choice under real friction → stated willingness to pay → general
stated interest.

> **Stated interest alone does not pass a gate.**

### The rule that prevents the most common error

> **Value recipient ≠ payer.** *"Useful to students"* does not establish
> *"teacher pays"*. *"Good for buyers"* does not establish *"nursery subsidises"*.

And its companion, agreed by all three fronts:

> **message that acquires ≠ value that retains ≠ value that monetizes.**

### W2 · economic gates

| Gate | Tests |
|---|---|
| `G1` | dedicated workflow beats existing substitutes for a real segment |
| `G2` | differentiated value arrives before delayed-history payoff |
| `G3` | recurring current value supports recurring payment |
| `G4` | portability/ownership reduces commitment resistance |
| `G5` | non-subscription/hybrid improves adoption without breaking contribution |
| `G6` | experienced-grower economics offset switching complexity |
| `G7A/B/C` | professional workflow value · budget ownership · reachable ceiling |
| `G8A/B` | partner distribution and partner payment are **distinct** |
| `G9` | provenance monetises at real handoff moments |
| `G10-A` | comparable-journey **corpus density** is feasible |
| `G10-B` | comparable journeys create repeat utility before authority |
| `G11` | economically eligible segment survives substitute filtering |
| `G12` | revenue duration funds service-obligation duration |
| `G13` | higher contribution requires value beyond recordkeeping |
| `G14` | standalone tracking is materially price-sensitive |

`STRONG` / `MIXED` / `FAIL` are outcomes of a **completed** test. **A test that
cannot be run is `UNVALIDATED`, never `FAIL`.**

### W2 · three-level kill architecture

A model failing is not the venture failing.

- **Level A · model kill** — e.g. `G3` fail kills recurring subscription, not the record job
- **Level B · candidate kill** — e.g. `G7A/B/C` fail kills P3 as primary economic thesis
- **Level C · venture kill** — requires one of `VK1` no incremental value · `VK2` no plausible payer · `VK3` ceiling below S1 · `VK4` unfundable continuity · `VK5` economics require unvalidated authority · `VK6` CAC/support consumes the niche

Structural kill conditions `K1–K9` add: `K7` **TAM inflation** — the venture
story survives only by generalising bonsai into gardening; and `K9`
**continuity contradiction** — the model that maximises short-term revenue
undermines the trust the long-term value needs.

> **A negative outcome on any VK condition is a successful W2 result.** It
> prevents building on economically impossible assumptions.

### W2 · market sizing

Never `total bonsai population × assumed conversion`. Build through filters:

`participants × job exists × software willingness × substitute inadequacy ×
dedicated advantage × activation/migration × payment × retained payment`

Reverse ceilings only, against **scenario anchors** S1 €75k / S2 €200k / S3 €3m
annual contribution — **not targets**. See §11c.

### W3 · territories and their status

| Territory | Disposition |
|---|---|
| **Progress** | entry anchor — customer language; not differentiating alone |
| **Memory** | primary bridge — strategic synthesis on observed behaviour |
| **Continuity** | leading long-term candidate — **carries a truth cost** |
| **Journey → Learning** | gated differentiator — needs `G10-A` then `G10-B` |
| **Psychological Safety** | core principle — *permission to learn* |
| **Durable Trust** | trust principle — required if Continuity survives |
| **Stewardship** | gated on H5 |
| **Belonging** | parked on H6 |

**Rejected as master territories:** tracking · organization · easy logging ·
reminders · AI · expert care · generic community · **horticultural** safety.

**Three further dispositions**, which are neither kept nor rejected:
`Story` → **absorbed** into Journey/Living History · `Legacy` → **parked**, too
distal from current consumer evidence · `Calm organization` → **downgraded**,
because *organize* is supported and *calm* is inference.

**Never promise — W3's list, verbatim.** These are the exact strings not to use:

> *Never kill another bonsai* · *Know exactly what your tree needs* ·
> *We'll tell you the right thing to do* · *Expert care for every bonsai* ·
> *AI you can trust with your tree* · *Verified tree history* as a blanket claim ·
> *Learn from thousands of comparable trees* ·
> *The permanent home for your bonsai history* · *Your bonsai forever* ·
> *The bonsai community* · *Everything you need for bonsai*

Added in v1.1, on Continuity's truth ceiling: no unconditional permanence
language — *forever* · *permanent* · *always available* · *never lose your
history* — until the obligation can be operationally supported.

**Language:** concrete verbs early (`see` `remember` `keep` `follow` `record`);
abstract nouns are strategy-only; avoid database/inventory/data-entry vocabulary;
preserve uncertainty (`probable` `observed` `attributed` `unknown`); do not
infantilise beginners.

### W4 · growth mechanisms and gates

`L1` first-tree inception · `L2` one-tree land-and-expand · `L3` progression
artifact · `L4` comparable journey · `L5` teacher/club continuity ·
`L6` transfer/provenance. All `UNVALIDATED`.

Gates `G0` immediate differentiated value · `G1` repeat behaviour · `G2`
expansion · `G3` object travel · `G4` recipient activation · `G5` actor
repetition · `G6` evidence quality · `G7` economic viability · `G8` brand/trust
permission.

> **W4's `G0–G8` and W2's `G1–G14` are different numbering schemes.** Always
> qualify which front's gate is meant.

### W4 · test controls that apply to any validation this project runs

- recruitment source is **not** Growth evidence
- guided activation is **not** spontaneous activation
- **an invalid execution is `INVALID`, not `FAIL`**
- **no threshold changes after outcomes are visible** — pre-register
- founder/concierge/migration labour is a **measured cost**, not free
- separate `guided_actions` from `spontaneous_actions` in any ledger
- do not overwrite contradictory outcomes — durable use and abandonment can both be true

> **A failed loop is a useful result. Adding a channel to a failed loop is not.**

### The cross-loop kill rule

> **No mechanism may depend on substantial work now for value months later.**

---

## 11c. The founder decision: which success ambition is authoritative?

All three fronts escalated the same question and none of them can answer it.
**It is not a research output.** Recorded here with the numbers needed to decide.

### What is being chosen

Not a revenue target — a **threshold for calling a result sufficient**. Without
it, the same evidence is a success or a failure depending on who reads it.

| | Ambition | Annual **contribution** |
|---|---|---|
| **S1** | Sustainable small business — covers direct costs, a modest operating layer, a continuity reserve | **€75k** |
| **S2** | Founder full-time — adds founder compensation, development, support, churn replacement, reinvestment | **€200k** |
| **S3** | Venture scale — supports a material team and growth capital | **€3m** |

Contribution is **after** direct service costs, store commission and support —
not gross revenue. W2 states these are *"not canon and not venture targets"*.

### What each ambition costs in retained payers

| Net contribution / payer / year | S1 €75k | S2 €200k | S3 €3m |
|---:|---:|---:|---:|
| **€20** | 3,750 | 10,000 | 150,000 |
| **€25** | 3,000 | 8,000 | 120,000 |
| **€40** | 1,875 | 5,000 | 75,000 |
| **€75** | 1,000 | 2,667 | 40,000 |
| **€150** | 500 | 1,333 | 20,000 |
| **€300** | 250 | 667 | 10,000 |
| **€600** | 125 | 333 | 5,000 |

These are **retained, paying** users — not downloads, not installs, not ratings.

### Worked example: the €3/month question canon has asked since W1

€3/month is €36/year gross. Apple's Small Business Program and Google Play both
take **15%** for qualifying developers, so ~€30.60; after payment fees, hosting,
support and churn replacement a **net €20–26** is a reasonable working figure.

At €22 net, **5,000 payers ≈ €110k**:

- **passes S1** with headroom
- **fails S2** — would need roughly **9,000**
- **irrelevant to S3** — would need roughly **136,000**

**The same 5,000 users is a good small business or a failed venture.** That is
precisely what the undecided ambition leaves unresolved.

### The context that should worry you either way

From `04-evidence/W2-PRICING-TEARDOWN.md`, the 23 measurement-eligible US iOS
products hold **376 ratings between them**. The leader has **193**. Sixteen have
**zero**. The top three hold **96%**.

**Ratings are not users** and must not be converted into one. But the honest
reading is: **5,000 retained paying users would make this the clear leader of a
category where almost nobody has traction** — and the current leader is a **$7.99
one-time purchase**, not a subscription.

That does not make S1 easy. It makes **S3 an extraordinary claim** that would
need either a much higher contribution per payer (the professional path, `A2`) or
a market far larger than anything W1 or the teardown has observed.

### What the choice changes

| If you choose | Then |
|---|---|
| **S1** | Low-contribution consumer models stay viable. `G11` is a much lower bar. A niche result counts as success. |
| **S2** | Consumer-only economics get tight — roughly 9,000 retained payers at €22. The professional payer (`A2`/`G7`) becomes materially more important. |
| **S3** | Consumer record-keeping alone almost certainly cannot carry it. `K7` **TAM inflation** becomes the live risk: the venture story survives only by generalising bonsai into gardening — which W2 names as a kill condition, not a strategy. |

### Founder delivery direction — confirmed 5 September 2026

> **The validation-facing concept is presented as a web app: mobile-first,
> desktop/tablet friendly.**

Confirmed by the founder directly. W2, W3 and W4 all recorded it and it is now in
canon rather than resting on their word.

**Scope.** This is a **presentation context for validation artifacts**, not a
product or technology decision. It does **not** select an MVP, a feature set, a
stack, native-vs-web architecture, or `P1/P2/P3`. Canon §12's rule stands: the
instrument follows the risk.

**Why it is coherent with the evidence.** Capture happens beside the tree —
phone; review of collection and history benefits from a larger screen. That is a
plausible fit, not a validated one.

**Guardrail.** Message tests must not become device tests. If a landing result is
weak, *"wrong form factor"* is not an available explanation unless the test was
designed to measure it.

### What it does **not** block

Step 0 (`L4-A` corpus density) and Step 1 (`L2` one-tree value) both run without
it. **Decide before interpreting their results, not before running them.**

---

## DECISION · 4 September 2026

> **S1 is authoritative. S3 is an aspiration with no identified path.**

Founder decision, recorded to close the question all three fronts escalated.

### What this settles

**`S1` €75k annual contribution is the threshold against which results are
judged.** A result that clears S1 counts as success. `G11` is assessed against
S1, not against S2 or S3, unless this decision is revisited.

Practically: consumer-only economics stay live, a low single-digit monthly price
remains a viable shape, and the professional payer (`A2` / `G7`) becomes
**optional upside rather than a requirement**.

### What "S3 eventually, path unknown" must and must not mean

This is a legitimate position and a common one. It carries one specific risk,
and canon already names it.

**It must not mean:** S3 is used to justify a decision S1 would not justify.
That is `VK5` — *economics require unvalidated future authority* — and `K7`
— *the venture story survives only by generalising bonsai into gardening*. Both
are **kill conditions, not strategies**. An S3 story may not be used to rescue
weak S1 economics.

**It should mean:** avoid choices that make S3 structurally impossible, while
funding and judging the venture on S1.

### The path to S3 is now a tracked question, not a hope

Nothing in W1, W2 or the pricing teardown currently supports S3. From the
evidence, only two routes could:

| Route | What would have to be true | Status |
|---|---|---|
| **Higher contribution per payer** | A professional/organisational payer with a real budget — `G7A` workflow, `G7B` budget, `G7C` reachable ceiling. At €300/payer, S3 needs 10,000 payers instead of 136,000. | `UNVALIDATED`; W2 ranks it second-highest priority precisely because it is the only thing that changes the shape |
| **A materially larger eligible market** | `G11` returns a population far beyond anything W1 or the teardown has observed | `UNVALIDATED`; current evidence points the other way — 23 eligible US iOS products hold 376 ratings between them |

**Neither is ruled out. Neither is evidenced.** If a third route appears, it
should be added here rather than assumed.

### Review trigger

Revisit this decision if any of the following occurs — not on a schedule:

1. `G7A` **and** `G7B` both pass — a professional payer with a real budget exists
2. `G11` returns an eligible population materially larger than current evidence suggests
3. The founder's own constraints change

Until then, **S1 is the number that decides whether a result is good enough.**

---

## 12. Choosing an MVP instrument

Not *"which features go in the MVP?"* but **"what is the largest uncertainty
right now, and what is the smallest instrument that resolves it?"**

**An MVP need not be software.** The instrument follows the risk:

| If the biggest uncertainty is… | The instrument is… |
|---|---|
| Message / value proposition | Landing page |
| Whether demand exists at all | Fake door |
| Logging retention | Tiny web app, or a manual journal |
| Whether Comparable Journey is valuable | Curated prototype — match cases by hand |
| Provenance | A mock handoff record |
| Teacher economics | Concierge service or workbench prototype |
| First-tree safety | Lightweight guided decision experience |

Concierge and manual approaches are legitimate MVPs and often better ones:
they answer the question without building the thing.

### What product design must receive before it starts

Design should not be handed *"make a bonsai app."* It should receive:

target user · the job · value proposition · the hypothesis under test · why
this wedge · evidence supporting it · evidence contradicting it · economic
logic · acquisition logic · brand principles · **what this MVP must prove** ·
**what this MVP must explicitly not attempt.**

If those cannot be filled in, the preceding workstreams are not finished.

### Growth: look for loops, not channels

Channel planning (Instagram, SEO, ads) is premature. The prior questions:

- **Acquisition moments** — first tree purchase · gift · workshop · nursery visit · first problem · first repot · first technique · new species
- **Objects that travel naturally** — tree identity · journey · progression · before/after · transfer · comparable journey
- **Actors with existing distribution** — nurseries · teachers · clubs · workshops · events · creators

A loop that also produces evidence is worth more than one that only produces
users.

---


## 13. Document authority

| Document | Role |
|---|---|
| **This file** | Reconciliation layer — start here |
| `PROJECT-BRIEF.md` | Venture strategy, canonical conventions, idea portfolio |
| `DOMAIN-MODEL.md` | Object and recording model; legacy corpus assessment |
| `RESEARCH-BRIEF-behavioural-validation.md` | Study design; Track A / Track B |
| `APP-MARKET-SCAN.md` | Competitive measurement and its limits |
| `99-archive/superseded/bonsai-deep-research-report.md` | Reference dossier — a research plan, not results; retained only for historical reference |
| Legacy `parallel-work.txt` | **Superseded legacy research log; not packaged as a current source.** Relevant conclusions were extracted into the canonical documents before W1 closure. Note this file was overwritten on 1 Sep 2026; the earlier Gate 0 and domain-model research survives only in git history at commit `0030e009`. |

Where documents disagree, this file and `PROJECT-BRIEF.md` take precedence.

### 13a. `PROPOSED CANON AMENDMENT` — the mechanism

W2, W3 and W4 must not edit canon. Where a front produces evidence that
contradicts or materially weakens something here, it returns a block labelled
**`PROPOSED CANON AMENDMENT`**. Defined once, so the label means the same thing
in all three returns.

**A proposal must contain all six fields.** An incomplete proposal is not
rejected — it is returned for completion, because an amendment that cannot be
audited cannot be adopted.

| Field | Content |
|---|---|
| `TARGET` | Document, section, and the exact sentence or table row affected |
| `CURRENT` | What canon says today, quoted verbatim |
| `PROPOSED` | The replacement wording |
| `EVIDENCE` | What was observed, how, when, and by whom — a method and a date, not an assertion |
| `STATUS` | The evidence status being claimed: `OBSERVED`, `SUPPORTED SIGNAL`, `CONTRADICTED`, `UNVALIDATED` or `DEFERRED` |
| `BLAST RADIUS` | Every other claim, document or workstream that changes if this is adopted |

**Adjudication.** Amendments are adjudicated at Cross-Front Reconciliation, not
by the proposing front and not unilaterally by canon governance. Three
exceptions may be applied immediately, because delay would let a known error
propagate:

1. a **factual error** verifiable at source (a wrong ID, a broken reference, arithmetic);
2. an **internal contradiction** between two canon documents;
3. a **provenance gap** — a claim whose stated support does not exist.

Everything strategic waits for reconciliation.

**While pending, a proposal changes nothing.** Canon stands as written, and
downstream work continues on the current text. A pending amendment is neither
adopted nor rejected, and must not be cited as though it were settled.

**Conflicts are expected.** If two fronts propose incompatible amendments to the
same target, both are carried to reconciliation intact. Neither is silently
merged, and the disagreement is itself evidence about the target's stability —
`VERIFICATION_CONTESTED` in `COMPETITOR-REGISTRY.csv` exists for exactly this
reason and is the working precedent.

**A test that cannot be run stays `UNVALIDATED`, never `FAIL`.** An amendment
may not convert absence of evidence into a negative finding.
