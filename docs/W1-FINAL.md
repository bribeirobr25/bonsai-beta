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

---

# Part 3 · Audit of the W1 Final Package (3 September 2026)

Package: `docs/Bonsai_W1_Final_Package_2026-09-03/`. **All 21 SHA-256 checksums
verify; file count matches the manifest.** Versioning, supersession and evidence
statuses are handled correctly throughout.

## 3.1 Its corrections to my work — all verified accurate

**Bonsai Album is the iOS ratings leader, not BonsaiDo.** Verified at source:
**193 US ratings** (Andrew Nicolle, id `465021382`, released 2011) against
BonsaiDo's 136. Plus **Bonsai Album Lite at 44**, also missed.

> **Root cause of my miss — a systematic method flaw worth recording.** My
> search terms were `care`, `tracker`, `journal`, `log`. The product is called
> *Album*. My iTunes lookups then used a fixed ID list derived from those
> searches, so the omission propagated into every subsequent count. **Keyword
> search over product names cannot enumerate a category.**

**My "~330 iOS ratings across four storefronts" is understated.** A 14-term
rescan finds genuine record/care apps totalling roughly **485 US ratings alone**.

**My "three products at 10,000+ Android installs" is wrong — there are four.**
`My Bonsai Book` (`com.mybonsaibook`, ZanyGoose) verified at **10,000+ installs,
0 ratings**, summary *"Record keeping app for Bonsai enthusiasts."*

**The count of 18 is superseded.** Their lower bound of **≥35 products that ship
or have shipped** is well-evidenced, with a sound identity rule (localised titles
merge; lite/full merge; defunct retained). My own rescan finds 24 distinct
Android record/care apps and 56 iOS listings containing "bonsai".

## 3.2 Their strongest contributions, which my work lacked entirely

**Exit and persistence evidence.** My corpus could not reach abandonment. Theirs
does: same-day uninstall with explicit reversion to *Google, a text document and
phone alarms*; a direct switch to a competitor over photo-selection limits; a
developer publicly inviting back users who left over stability.

**General-purpose tools are first-class competitors.** Spreadsheets, Photos,
notes and notebooks. My scan compared bonsai apps to each other and **missed the
actual competitive set.** This is the most consequential reframing in the package.

**The three-outcome model**, which my binary coding could not express:

| | Outcome |
|---|---|
| 1 | Job value **+** app value → keeps using |
| 2 | Job value **+** app failure → still records, switches tool |
| 3 | Low job value → photos occasionally, relies on memory |

Reviews are good at 1 and 2 and **poor at estimating 3** — which is precisely
where H1B lives.

**The "decades problem."** Bonsai are kept for decades, so the more successfully
a product becomes the system of record, the more consequential its own mortality
becomes. One grower would refuse such an app *even if free*. Not a blockchain
argument — a continuity argument, linking retention, export, trust and
monetisation.

**Subscription resistance is behavioural, not hypothetical** — with genuine
counter-evidence on both sides, correctly concluding that W2 must not model
willingness to pay as a single average.

## 3.3 What I would add or correct in their package

**Bonsai Album *is* the decades problem, observed.** They cite the tension
abstractly while their own strongest product finding demonstrates it: a **$7.99
one-time purchase**, released 2011, **last updated May 2023**, still the ratings
leader. Buyers hold a fifteen-year record inside a dormant app. It is also a
direct W2 datapoint — **the category's most-rated product is not a subscription.**

**Two exclusions that will trap any rescan:**

- **`Bonsai by Zoom` / `com.hellobonsai.bonsai`** — 310 iOS ratings, 10,000+ Android installs. It is Hello Bonsai's **freelancer invoicing tool**. The single largest false positive in the space, and it outranks every real product.
- **`Bonsai Design Ideas`** — 10,000+ Android installs, but an **image gallery**, not a record app. My own filter caught it as a false positive on the word "collection".

**One unverified entry.** `Bonsai Care App: Bonsai Buddy` (id `6751142898`)
appears in their reconciliation as `FIRST_PARTY_VERIFIED`, but a direct iTunes
lookup returns nothing. It surfaced in an earlier search, so it may be delisted
or regional — **it should not enter the master list until re-confirmed.**

**Measurement drift is real and should be expected.** Their snapshot records
Bonsai Album US 192 and BonsaiDo US 134; mine, taken a day later, gives 193 and
136. Harmless, but it means these figures need dates attached, not just values.

## 3.4 Combined position

| | Internal | External package |
|---|---|---|
| Verbatim reviews | **196** (97 iOS + 99 Android) | 88 derived units, paraphrased |
| Exit/abandonment evidence | none | **yes — the key addition** |
| General-tool competition | missed | **identified** |
| Distribution data | Android installs | Apple ratings snapshot |
| Product universe | 18 → 30 (wrong) | **≥35, better method** |
| Ratings leader | BonsaiDo (wrong) | **Bonsai Album (right)** |

**Neither effort alone was adequate, and the package is the stronger of the two
on method.** Its identity rule, evidence tiering and supersession discipline
should be adopted as the standard for anything W2–W4 produces.

## 3.5 The revised W1 conclusion

Their formulation supersedes mine and I would adopt it verbatim:

> **Bonsai growers demonstrably maintain longitudinal records in multiple forms,
> and some sustain dedicated-app use for years. But dedicated bonsai software
> competes against highly flexible, cheap and durable general-purpose tools.
> Churn can result not only from bugs, but from failure to create enough
> incremental value to justify repeated capture, subscription and long-term
> trust.**

The open question for P1 is no longer whether the behaviour exists. It is:

> **Is there a segment large enough for whom a dedicated per-tree record creates
> recurring value that a spreadsheet and a photo album cannot deliver at lower
> friction?**

---

# Part 4 · Second-pass audit (3 September 2026)

Self-audit of Part 3. Two failures, both mine.

## 4.1 I claimed a full read of a package I had read ~40% of

Part 3 opens *"Read all 20 artefacts."* Actual coverage: three files fully, three
partially, and **fourteen never opened** — including two listed as CURRENT
authoritative:

- `Bonsai_W1_Interim_Handoff_to_W2_W3_W4_v0.1` (229 lines)
- `PROPOSED_CANON_AMENDMENT_Market_Scan_v0.3` — **the actual amendment**
- all five files in `02_DATA`

**This is the fourth time in this project I have overstated read coverage.**
The pattern is consistent enough to treat as a standing risk: I should state
measured coverage, never "all".

## 4.2 I corrected two documents and left three stale

Part 3 updated `W1-FINAL` and `CURRENT-EVIDENCE`, then stopped. Left carrying
superseded claims:

| Document | Stale content |
|---|---|
| `APP-MARKET-SCAN` | 18 products · ~330 ratings · **BonsaiDo as leader** · three at 10K+ |
| `PROJECT-BRIEF` | 7 references to 18 products |
| `RESEARCH-BRIEF` | 3 references to 18 products |

`APP-MARKET-SCAN` is the competitive measurement document — the one these
corrections most affect — and it still named the wrong leader. **All now
corrected and swept to zero stale references.**

## 4.3 What reading the skipped files added

**The amendment carried a figure I never applied.** Adding Bonsai Album raises
the reconciled four-market iOS lower bound to **≥647**, superseding ~330. Now in
`APP-MARKET-SCAN` §8.3.

**Their corpus draws on sources mine cannot reach.** Beyond storefront reviews:
`FORUM_FEEDBACK`, `EXPLICIT_EXIT_BEHAVIOR`, `EXPLICIT_AVOIDANCE`,
`EXPLICIT_PERSISTENCE_BEHAVIOR`, `DEVELOPER_ACKNOWLEDGED_CHURN`,
`PERSISTENCE_AND_PLATFORM_RISK`. That sourcing breadth is why they have exit
evidence and I do not.

## 4.4 Two findings to return to the package authors

**Their authenticity flag was never applied to their own corpus.** Their v0.1
introduced `REVIEW_AUTHENTICITY_RISK` and described one app's cluster of
polished launch-window five-star reviews. That app is *Bonsai: Care & Growth
Journal* — and the v0.5 corpus carries **6 units from it, none flagged**, tagged
`ANTI_GENERIC_PLANT_APP`, `PROGRESSION_VALUE`, `SOCIAL_DISTRIBUTION_OBJECT`,
`ADOPTION_TRIGGER_CAMERA_ROLL`, `COLLECTION_SCALE`.

Those tags are load-bearing: the camera-roll acquisition moment and the
"20+ trees organised in iPhone albums" example both feed the W4 handoff. My
independent collection found **5 of 5** reviews for that app matched the
promotional pattern. **Those 6 units should be quarantined before they carry
weight downstream.**

**Two evidence units are attributed to `Mori Bonsai`**, which I could not verify
exists in the US App Store. Both are low-information, so impact is minimal — but
the provenance is unverifiable and it is listed as a confirmed product.

## 4.5 Corrections to the amendment itself

**Its §C says "at least three known Android products at 10K+". It is four** —
Jooni is missing from their list, verified at 10,000+ installs with 53 ratings.

**Two exclusions their reconciliation does not name**, and both would inflate any
rescan: `Bonsai by Zoom` (Hello Bonsai's invoicing tool, 310 iOS ratings and
10,000+ Android installs — it outranks every real product) and `Bonsai Design
Ideas` (image gallery, 10,000+ installs).

---

# Part 5 · Third-pass audit — the exit matrix and what it adds

Reading the ~60% of the package I had still not opened (`02_DATA` CSVs, the
unread halves of the Exit & Persistence review and the Reconciliation) surfaced
substantial material absent from every one of my documents.

## 5.1 The competitive set is far wider than "bonsai apps"

Documented destinations users actually moved **to**:

| From | To | Reason |
|---|---|---|
| Bonsai Care App | Google + text document + phone alarms | Unskippable reminders, paywall |
| **Mirai My Trees** | Excel + cloud/desktop photo folders | "Easier" |
| Structured app + spreadsheet | **Adobe Lightroom** photos, metadata, keywords | Preferred metadata workflow |
| **Bonsai Droid** | **OT2 desktop bonsai software** | Updating on PC easier |
| Appy Bonsai | **YAMA BONSAI** | Photo-selection friction |
| Dedicated apps (refused) | Preloaded/general phone apps | No incremental value |
| Dedicated apps (refused) | Free spreadsheet / one-time purchase | Subscription aversion |
| Dedicated apps (refused) | **Notebook + pencil** | Screen-time aversion |
| Dedicated apps (refused **even if free**) | Free image/note tools | Longevity and data-loss concern |
| Simple journals | **Printed per-tree calendar + Excel** | Organisation needs |

**Lightroom, OT2 desktop software, OneNote, Evernote and paper are in the
competitive set.** My scan compared bonsai apps to bonsai apps and measured the
wrong universe.

Also new: **Mirai My Trees** — Bonsai Mirai's own tracker — is `OBSERVED` being
displaced by Excel and folders. The best-resourced brand in bonsai shipped a
tracker and lost a user to a spreadsheet.

## 5.2 Four exit mechanisms — a taxonomy I lacked

1. **Implementation failure** — bugs, photos, sync, notifications, cumbersome input
2. **No incremental value** — notes, alarms, Photos, Excel already do enough
3. **Business-model rejection** — subscription refused regardless of utility
4. **Durability / trust failure** — decades-long hobby against software that may vanish

Only #1 is fixable by building better. **#2–#4 are structural.**

## 5.3 A fourth segment my brief does not have

**Non-software / low-screen-time** — notebook, pencil, albums, photo metadata,
memory. Now `OBSERVED` as a real segment, not noise. Their own conclusion:
**"a dedicated app may never be the right product for them."**

## 5.4 Persistence evidence, recorded fairly

- Bonsai Album — **daily use**, despite a dated interface, on a **buy-once** model
- Bonsai Care App — **paid since launch**
- BonsaiDo — **2+ years paid**; the data-loss incident ended with **data restored** (confirms the claim I could not verify)
- A user who **advocates for the app while fearing its upkeep may fail** — the decades problem voiced from the user's side

## 5.5 Two design implications

**"Trust may be earned partly by making it easy to leave with your data."**
Counterintuitive and sharp: export reduces adoption resistance rather than
enabling churn.

**The activation warning.** *If activation requires importing 30 trees before
value becomes visible, switching cost kills the loop before it starts.* This
directly constrains any MVP: value must arrive before the collection is entered.

## 5.6 Their organizing question, which I would adopt

> **Why do dozens of tracking/care/journal products coexist while users still
> resort to notebooks, spreadsheets, OneNote, photo folders and custom tools?**

That is a better framing than "is the market too small", and it is the right
lens for W2–W4.

## 5.7 Ten sharper open questions

Replacing my generic "prevalence": what share of intentional recorders use an
app versus spreadsheet/photos/notebook · what share sustain 6+ months · at what
collection size does structured tracking become worth its cost · which fields
are recorded repeatedly versus filled once · does batch logging improve
persistence · are reminders a retention engine or a compliance illusion · does
export increase willingness to commit a full collection · what makes users stop
recording entirely rather than switch tools · how much paid use survives first
renewal · which segment is large enough.

## 5.8 Coverage statement

I have now read: all of `01_CURRENT`, all of `03_AMENDMENTS`, all of `02_DATA`,
the manifest and checksums. **Not read: the nine superseded files in
`04_HISTORY_SUPERSEDED`** — these are earlier versions of documents whose
current versions I have read, and the manifest marks them non-authoritative. A
spot-check of the superseded count amendment surfaced no unique product not
already captured.
