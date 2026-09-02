# W1 · Competitor Review Mining — final

> **Strategic Foundation / Pre-MVP Canon v1.0** · consolidated 2 September 2026
> Supersedes `W1-COMPETITOR-REVIEW-MINING.md` (internal collection) and
> `Bonsai_W1_Interim_Evidence_Review_v0.1_2026-09-02.md` (external calibration).
> Both are retained as working papers.

**Question:** where do existing bonsai tracking products please, frustrate, fail
and get abandoned?

---

## 1. Two independent efforts, reconciled

| | Internal collection | External calibration |
|---|---|---|
| Corpus | **196 verbatim reviews** (97 iOS + 99 Android) | 40 derived paraphrases |
| Platforms | iOS **and Android** | iOS only |
| Star ratings | Exact, from structured feed | **Not reliably preserved** |
| Developer responses | **Not captured** | Captured |
| Install/distribution data | **Yes — the largest finding** | No |
| Codebook | Keyword frequency | **16 themes + 12 analytic flags** |

**Neither was sufficient alone.** The reconciliation below takes the corpus and
distribution data from the internal work and the method and cautions from the
external one.

---

## 2. Audit of the external document

Verified at source rather than accepted.

### Confirmed and adopted

**The codebook is better than mine and is adopted wholesale** — 16 behavioural
themes plus 12 analytic flags, with its critical rule:

> A complaint is not automatically evidence against the job. Every negative
> review must be coded as **implementation friction**, **rejection of the
> underlying job**, or **indeterminate**.

My keyword frequency counting could not make that distinction, and it is the
single most decision-relevant cut in the whole dataset.

**`REVIEW_AUTHENTICITY_RISK` is real, and my own collection confirmed it.** I
collected 5 reviews for *Bonsai: Care & Growth Journal*: **5 of 5 are long,
polished, five-star, launch-window, marketing-register**. I then screened my own
196-review corpus for the same signature and found **0 of 97 on iOS**. So the
caution is valid, specific, and my main corpus is clean. Those 5 reviews are
**excluded from all counts** and quarantined in
`w1-flagged-authenticity-risk.json`.

**Reminder semantics — a genuine insight I missed.** *"Check whether watering is
needed"* is not the same event as *"watered the tree."* A repot reminder that
vanishes on its due date does not model a task that stays pending. Reminder
complaints often expose **event-model mismatch**, not notification preference.
This bears directly on `DOMAIN-MODEL` §7.2 — `Intent` and `State` exist to carry
exactly this distinction.

**Three new apps, verified.** Kodama – Bonsai Tree Care (`6761913585`, 2 ratings,
Apr 2026), BonsaiTrack: Care Journal (`6774980293`, 0 ratings, Jun 2026),
Bonsai: Care & Growth Journal (`6772092929`, 7 ratings, May 2026). All real; all
were missing from my master list.

**Developer responses matter and my method cannot see them.** The RSS feed omits
them entirely. The external work reports that the BonsaiDo data-loss incident
was followed by a developer statement that data had been **restored** — which
materially softens how that incident should be read. I could not verify this and
neither could I refute it. See §5.

### Corrected

**Their gate item — "smoke-test the Apple structured collector" — is already
satisfied.** The document states the JSON endpoint "could not be directly
called" in their environment. **It works.** I collected 97 reviews with exact
star ratings across 10 storefronts. That limitation was environmental, not
inherent, and the collector should be treated as validated infrastructure.

**"Mori Bonsai" could not be verified.** No app of that name appears in the US
App Store; a broad search returned only unrelated products. It may be regional
or renamed, but **it should not enter the master list without a source.**

**Their proposed count of "at least 23" is already superseded.** A Google Play
scan surfaced ~19 genuine Android care/tracking apps, most previously unknown.
With iOS-only products the true figure is nearer 30 — and the count has now been
wrong at 9, 14, 18 and 23. **Recommendation stands: stop maintaining a total.**

---

## 3. The largest finding — distribution, not reviews

Absent from the external work, and it reframes the competitive picture.

| Product | Android installs | Ratings |
|---|---:|---:|
| Bonsai Care App (Empire) | **10,000+** | 270 |
| Appy Bonsai | **10,000+** | 94 |
| Jooni | **10,000+** | 53 |
| ~15 other tracking apps | 1+ to 1,000+ | **0** |
| **Yoi Bonsai** | **10+** | **0** |
| **Bonsai App** (Brazilian) | **100+** | **0** |

**Three products have real distribution; then a cliff to zero.**

And below the cliff sit our own hypotheses. Yoi Bonsai — the closest shipping
implementation of provenance and lineage, built by someone with 20+ years in
bonsai — has 10 installs. `BonsaiDiary`'s store summary reads *"The story of
your bonsai — documented, shared, preserved"*, which is close to our working
thesis, at 10 installs.

> **The positions are not unclaimed and not won. They are claimed and failing.**
> Three different competitive situations; we had been conflating the last two.
> `OBSERVED`.

The unanswered question sharpens: **three products acquired tens of thousands of
installs. Nothing in W1 tells us how many people still open them.**

---

## 4. Consolidated signals

Applying the external codebook's critical rule to the 196-review corpus.

### 4.1 The job is not being rejected — `SUPPORTED SIGNAL`

Across all negative reviews on both platforms, complaints code as
**implementation friction**: untranslated terms-and-conditions blocking signup,
confirmation emails never arriving, white screens, unrecognised purchases,
species selection saving the wrong species, non-deterministic scheduling.

**Zero reviews code as `JOB_REJECTION_SIGNAL`.** Nobody writes that tracking
their trees is pointless or too much work.

> `SUPPORTED SIGNAL` · implementation friction is observable and dominant.
> `UNVALIDATED` · intrinsic logging burden as an abandonment mechanism —
> because people who quit over effort mostly do not write reviews.

### 4.2 The record impulse predates the tool — `SUPPORTED SIGNAL`

Nine reviewers describe replacing a spreadsheet or notebook; one was *about to
build* their own before finding the app. One Brazilian user records daily care
routines in Portuguese. Closest available proxy for H1B without participants —
**and still not H1B**, which requires prevalence.

### 4.3 Durability is an existential requirement — with a caveat

A paying user of two years reported total data loss. Per the external review the
data was later restored, which I could not verify. Either way the requirement
holds: **for a system of record, durability is the value proposition, not a
reliability feature.** Export, backup and guarantees belong in the core.

### 4.4 Segment split — `OBSERVED`

A grower with *"30 years and 80 trees"* calls reminders worthless. Nine
beginners praise them specifically. Experienced users ask instead for filtering,
sorting, custom fields and multiple collections. Confirms `PROJECT-BRIEF` §3 in
users' own language.

### 4.5 Guidance carries a distinct trust profile — `OBSERVED`

*"Killed mine — I did everything it told me to do yet my bonsai died."* A paid
identification user found the result wrong and could not get it corrected. And
the leading product's scheduling is **non-deterministic** — the same plant
entered twice produced *"completely different"* dates.

Advice failure is not UI friction; it is failure of epistemic trust. This is why
the advice ladder stops at level 3 without H7.

### 4.6 Monetisation friction is structural — `OBSERVED`

The paywall is the most-mentioned negative theme. The sharpest instance:

> *"I saw the very limited library and the paywall and knew I would only ever
> truly benefit from the reminders and having a list of my trees, both things
> that can be easily done [elsewhere]."*

A user **priced the paid value and concluded it was replicable for free.** The
friction is structure — tree-count limits — not price level.

### 4.7 Climate mismatch appears in the wild — `SUPPORTED SIGNAL`, n=1

*"Its suggestions don't seem to be for Australian climate."*

---

## 5. Method limits — both efforts

- **Reviewers are self-selected**, skewed to the delighted and the furious.
- **Written reviews are a fraction of ratings** — BonsaiDo: 136 US ratings, 17 written.
- **Concentration is extreme** — 66 of 97 iOS reviews concern one product.
- **My collector cannot see developer responses**, so "resolved" status is invisible to it. The external method covers this; a production collector needs both.
- **Star ratings were unavailable to the external extraction**; they are exact in mine.
- **Authenticity risk is live** — one app's entire corpus matched the flagged pattern.
- **No prevalence claim is possible from any of this.**

---

## 6. Handoff to W2 / W3 / W4

**W2 · Monetization.** Tree-count paywalls are the dominant friction, and at
least one user reasoned their way to "replicable for free". Combined with §3:
three products converted real distribution into installs — **the open question
is how much of that became recurring or paying use, and why.**

**W3 · Brand.** User language clusters on *remember, keep track, progression,
one place, diary, history*. It does **not** cluster on expertise or advice — and
the reviews that touch advice report a dead tree and a wrong identification.
Memory and progression is the credible territory; guidance is not, yet.

**W4 · Growth.** Observed acquisition moments: first tree, collection outgrowing
memory, spreadsheet replacement, camera-roll replacement, purchase and
identification, progression sharing, and a named practitioner's YouTube review
converting a viewer. Activation is killed before first value by account flows
and localisation — **localisation is access, not polish.**

---

## 7. What W1 cannot answer

Prevalence · retention · why people stopped · whether provenance adds value ·
whether transfer is used · whether Comparable Journey helps · whether any of
these products is economically sustainable · whether paid users are common.

All Track B. **W1's purpose was to make W2–W4 smarter, not to choose a product.**
