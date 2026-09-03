# Bonsai · W1 · Competitor Review Mining · FINAL v1.1

> **Received document, locally amended. Four changes.**
> 1. The headline lower bound reads **45** rather than 40 — five further
>    competitors verified at source on 3 Sep 2026; see the internal addendum.
> 2. An **internal addendum** is appended (§A–§F).
> 3. A **superseded-status pointer** added at §3's "Verified closure items",
>    because that section still reports Mori Bonsai and Bonsai Buddy as verified
>    while the registry now holds both `VERIFICATION_CONTESTED`.
> 4. A **tiering note** added under §12's customer-language list, because that
>    list gives equal standing to a term with 21 reviews and one with 1. §12's
>    stated counts are unchanged and recount exactly; only their presentation is
>    annotated.
>
> The external front's own addendum is preserved verbatim, including its
> "35 to 40" statement, which is a correct record of what they did. The
> unmodified original is in `99-archive/external-packages/`.

**Closed:** 3 September 2026  
**Status:** **CLOSED FOR BROAD REVIEW MINING**  
**Project state:** PRE-VALIDATION / PRE-MVP  
**Product decision:** none. P1 / P2 / P3 remain `UNVALIDATED`.

---

## 1. Purpose

W1 was not asked to choose a product or defend the current thesis.

It was asked to generate competitive behavioral evidence from reviews and public feedback:

- why users adopt,
- what value they report,
- what frustrates them,
- what creates logging friction,
- what they abandon or switch,
- whether complaints attack the underlying job or an implementation,
- what signals matter to Monetization, Brand and Growth.

W1 is now sufficiently reconciled to hand off those constraints.

---

## 2. Evidence base at closure

### Structured storefront reviews
- **97 Apple reviews**
- **99 Android reviews**
- **196 structured storefront reviews total**

These are retained as raw source datasets.

### External/public derived evidence
- working corpus before authenticity correction: **88 units**
- quarantined for review-authenticity risk: **6**
- usable derived evidence corpus after quarantine: **82 units**

The external corpus includes:
- public storefront HTML,
- developer responses,
- forum/public user behavior,
- explicit exit/switching/persistence cases,
- competitive positioning where clearly labeled as such.

### Critical sampling rule

The 196 structured reviews and 82 derived external units are **not one probability sample**.

W1 intentionally oversampled exit, switching and persistence behavior in the external layer. Therefore:

> **No W1 count may be converted into market prevalence, churn, retention, willingness-to-pay or economic viability.**

---

## 3. Evidence governance corrections completed

### Authenticity quarantine
All six US textual reviews visible for `Bonsai: Care & Growth Journal`
(App Store ID `6772092929`) are retained for audit but excluded from behavioral inference.

Status:
`REVIEW_AUTHENTICITY_RISK`

This is **not** a claim that the reviews are fake.

Claims that depended only on those units were removed from handoff evidence, including the specific `camera-roll replacement` acquisition claim.

### Competitor identity
`COMPETITOR-REGISTRY.csv` is now W1’s single source of truth.

Current discovered lower bound:
> **at least 45 distinct competitive bonsai software products/surfaces known to ship or have shipped**

Exact universe:
`UNVALIDATED`

Current active count:
`UNVALIDATED`

### Verified closure items

> **Superseded for the first two items.** Mori Bonsai (`W1-020`) and Bonsai Care
> App: Bonsai Buddy (`W1-029`) are now `VERIFICATION_CONTESTED` in
> `COMPETITOR-REGISTRY.csv`, which is the identity authority. See internal
> addendum §A and §F. The lines below record the state at external closure.

- Mori Bonsai remains verified.
- Bonsai Care App: Bonsai Buddy remains verified with regional availability.
- Jooni is the fourth observed Google Play 10K+ product.
- Bonsai by Zoom and Bonsai Design Ideas are explicit false-positive exclusions.

---

## 4. Market-scan conclusions that survive reconciliation

### OBSERVED
At least four known products are in the **Google Play 10K+ install bracket**:
1. Bonsai Care App
2. Appy Bonsai
3. Jooni
4. My Bonsai Book

This is a distribution signal only.

### iOS
The prior `~330 ratings across four storefronts` statement is superseded as a category-wide figure because the original measured set omitted material products.

Current reconciled statements:
- Bonsai Album is the observed US iOS ratings leader in the closure snapshot: **193**
- BonsaiDo: **136**
- reconciled lower bound in the prior four-market framework: **≥647**
- fresh exhaustive census: `UNVALIDATED`

Ratings are not users.
Installs are not active users.
Neither proves retention, paid conversion, revenue or market viability.

---

## 5. The central W1 finding

The strongest defensible synthesis is:

> **Bonsai growers demonstrably maintain longitudinal records in multiple forms, and some sustain dedicated-app use for months or years. Dedicated bonsai software competes not only with other bonsai apps, but with highly flexible, cheap and durable general-purpose tools. A dedicated product loses when its incremental value fails to exceed repeated capture cost, collection-scale complexity, business-model resistance, reliability/continuity risk and the convenience of existing tools.**

Evidence status:
`SUPPORTED SIGNAL`, built from multiple `OBSERVED` behaviors.

This is not a product recommendation.

---

## 6. What is OBSERVED

### 6.1 The record job exists in multiple forms
Growers use:
- dedicated bonsai apps,
- Excel / spreadsheets,
- Google Photos / photo folders,
- OneNote / Evernote / generic notes,
- Lightroom metadata,
- notebooks,
- paper calendars,
- phone reminders,
- hybrid systems.

Therefore the behavior is more durable than any one implementation.

### 6.2 Dedicated-app persistence exists
Observed cases include:
- daily use,
- multi-month use,
- subscription since launch,
- more than two years of paid use.

Therefore:

> `Nobody sustains bonsai tracking` is `CONTRADICTED`.

What remains unknown is prevalence.

### 6.3 Dedicated-app exit also exists
Observed outcomes include:
- next-day uninstall,
- abandonment because data entry became tedious,
- app-to-app switching,
- app-to-desktop switching,
- app-to-general-tool reversion,
- structured tracking abandoned for photo/metadata workflows,
- developer-acknowledged bug/stability churn.

Therefore persistence and exit coexist.

### 6.4 General-purpose tools are first-class competitors
Users explicitly judge Excel, Photos, notes, alarms or paper as easier or sufficient.

Therefore:

> `A bonsai-specific app naturally wins because the job is bonsai-specific` is `CONTRADICTED`.

### 6.5 Logging friction can cause behavioral exit
Friction appears in:
- per-tree repeated entry,
- too many data points,
- photo handling,
- search/retrieval,
- collection organization,
- sync,
- event/reminder semantics.

This is stronger than feature-request evidence because some cases include an observed exit or switch.

### 6.6 Record value can survive collection scale
Users with larger collections describe value in structured history and organization.

But scale also increases:
- retrieval burden,
- need for filters,
- batching,
- capture burden.

### 6.7 Photo/progression value is robust
Photo history and progression appear across independent products and general-tool workflows.

The quarantined six-review cluster is **not needed** to support this finding.

### 6.8 Reminder value is contextual
Users value memory support.

But:
> “remember that this task is pending”

is not the same job as:
> “tell me the horticulturally correct date.”

Generic/date-driven reminders can create noise or false confidence.

### 6.9 Data durability affects trust
Observed behavior includes:
- strong reaction to apparent data loss,
- concern about export before committing a collection,
- fear that a small software product may disappear,
- preference for systems perceived as more durable.

This supports a continuity/trust concern, not H5 provenance.

---

## 7. Storefront reviews versus broader W1 evidence

The structured storefront corpus contains:

> **zero reviews explicitly coded as `JOB_REJECTION_SIGNAL`.**

This is useful, but narrowly scoped.

Broader W1 evidence contains explicit:
- abandonment of structured tracking,
- refusal to switch from free/general tools,
- subscription rejection,
- refusal to adopt because of longevity/lock-in concern,
- judgment that dedicated apps provide insufficient incremental value.

Therefore W1 distinguishes three outcomes:

### A · Job value + app value
User records and keeps using the dedicated product.

### B · Job value + app failure
User continues recording but switches app/tool.

### C · Insufficient incremental/job value
User does not adopt or abandons structured dedicated tracking.

Reviews illuminate A and B better than C.
The prevalence of C remains `UNVALIDATED`.

---

## 8. Four observed exit / avoidance mechanisms

### 1. Implementation failure
Examples:
- bugs,
- stability,
- photo handling,
- sync,
- cumbersome capture,
- notification behavior.

Can potentially be addressed by execution quality within the same thesis.

### 2. No incremental value
The user decides that Excel, Photos, notes, alarms or paper already solve enough.

Requires a materially stronger value proposition, not cosmetic UX polish.

### 3. Business-model rejection
Some users explicitly reject subscriptions or SaaS.

May require a different economic model or materially higher perceived value.

### 4. Durability / trust concern
A decades-long record collides with fear of:
- service shutdown,
- data loss,
- lock-in,
- inability to export.

May require a different trust/data architecture and business promise.

---

## 9. The working mechanism hypothesis

For dedicated software to persist:

`memory pressure + collection complexity + progression/history value + immediate utility`

must exceed:

`capture effort + retrieval effort + subscription/business-model cost + reliability risk + lock-in risk + good-enough workaround value`.

Status:
`SUPPORTED SIGNAL`

This is not a causal model with measured coefficients.

---

## 10. Segment signals

### First / second tree
Observed or supported jobs:
- reassurance,
- simple care memory,
- basic guidance,
- reducing intimidation,
- easy first record.

### Expanding hobbyist
- organization,
- retrieval,
- batching,
- photos/history,
- memory relief,
- multiple-tree management.

### Experienced / long-horizon
Evidence splits:
- some strongly value detailed longitudinal records,
- some prefer Excel/photos/custom workflows,
- generic advice receives lower tolerance,
- continuity/export matters more,
- custom rules matter more.

### Low-software / analog preference
Observed individuals prefer:
- paper,
- notebook,
- photos,
- metadata,
- memory.

This supports the existence of a possible segment but **not its prevalence**.

Status:
`SUPPORTED SIGNAL`

Future market sizing must measure this behavior rather than assume universal software willingness.

---

## 11. W2 questions sharpened by W1

### Value timing
W1 observes two value clocks.

**Immediate value can appear in:**
- cataloging,
- remembering tasks,
- centralizing information,
- replacing a cumbersome current system.

**Delayed value can appear in:**
- first meaningful progression comparison,
- later retrieval of prior work,
- seasonal comparison,
- future repot/styling decisions.

W1 cannot establish whether delayed value arrives after a week, season or year.

### One-time versus subscription
Bonsai Album is a long-running **observational case**, not a natural experiment.

W1 observes:
- buy-once persistence,
- paid subscriptions,
- multi-year paid use,
- subscription rejection.

It does not establish which pricing model causes better retention or economics.

### Full-collection onboarding
At least one Bonsai Care App reviewer explicitly reports **adding all their trees**; another says they subscribed in order to enter all trees.

Therefore:
> `full-collection entry is an absolute barrier` is `CONTRADICTED`.

But:
- effort,
- completion time,
- abandonment during migration,
- sustainable onboarding burden

remain `UNVALIDATED`.

---

## 12. W3 language: theirs versus ours

Across the 196 structured storefront reviews, review-level mentions include approximately:

- `track` / tracking language: common
- `keep track`: 15 reviews
- `progress`: 19
- `reminder`: 21
- `collection`: 17
- `my trees`: 18
- `photo`: 17
- `record`: 6
- `organize`: 5

Literal `history`, `continuity` and `ownership` do **not** appear as recurring storefront-review vocabulary in this corpus.

Therefore W3 must distinguish:

### Customer language
- keep track,
- progress,
- reminders,
- my trees,
- collection,
- photos,
- notes,
- organize,
- record,
- one place.

> **Tiered downstream, 3 Sep 2026 — this list is not homogeneous.** The counts
> stated immediately above recount **exactly** against the corpus, but this list
> flattens them: `reminder` has 21 reviews while **`one place` has 1**, and
> `notes` and `organize` have 5. See `W1-HANDOFF-W2-W3-W4.md` for the tiered
> table. The counts here are correct; only their equal presentation is not.

### Strategic synthesis
- continuity,
- ownership of history,
- calm organization,
- long-term memory.

The second set may be strategically useful but must not be presented as verbatim customer language.

---

## 13. W4 acquisition and activation constraints

Behaviorally supported moments include:
- first tree / intimidation,
- collection exceeds memory,
- spreadsheet or notes become cumbersome,
- photo history becomes fragmented,
- current tracker fails,
- export/data concern,
- desire to see progression.

### Removed after authenticity reconciliation
`camera-roll replacement` is **not** retained as a standalone evidence-backed acquisition moment because its strongest dedicated-app example came from the quarantined review cluster.

A better supported formulation is:
> **fragmented photo-history / difficulty reconstructing progression.**

### Activation constraint
A whole collection can be entered; this is not an absolute impossibility.

But asking users to migrate many trees before experiencing differentiated value remains a plausible switching risk.

The validated question for W4 is:
> **How can value appear before migration cost becomes the dominant experience?**

---

## 14. Provenance, Comparable Journey and community

### Verifiable provenance
Still `UNVALIDATED`.

Competitors ship transfer/history, but reviews do not yet show strong demand for:
`claim → evidence → attestation → confidence`.

### Comparable Journey
Still `UNVALIDATED` as a product behavior.

Public progression and comparable cases have learning value, but that does not validate a product mechanism.

### Generic community/feed
Still `UNVALIDATED` as a retention engine.

Some users enjoy seeing other trees/progression; W1 does not establish network retention.

---

## 15. What W1 contradicts

- “Bonsai tracking is an empty space.”
- “Transferable history is novel.”
- “Nobody sustains bonsai tracking.”
- “Dedicated bonsai software competes only with other bonsai apps.”
- “BonsaiDo is the US iOS ratings leader.”
- “~330 is a reliable category-wide four-market iOS total.”
- “Only one Android product has reached the 10K+ bracket.”
- “Full-collection entry is impossible.”

---

## 16. What remains UNVALIDATED

1. Prevalence of private longitudinal recording, H1B.
2. Concrete lost-history pain prevalence, H1C.
3. Six-month+ retention distribution.
4. Paid conversion and renewal distribution.
5. Willingness to pay.
6. Addressable market size.
7. Whether dedicated software beats general tools for a sufficiently large segment.
8. Sustainable capture burden.
9. Verifiable provenance value, H5.
10. Tree-led relationship value, H6.
11. Comparable Journey product value, H6B.
12. Outcome-derived authority, H7.
13. Revenue / unit economics.
14. Which product candidate, if any, survives W2–W4 reconciliation.

---

## 17. W1 answer to the original strategic uncertainty

W1 does **not** establish:

> “Build a tracker.”

It establishes:

> **The longitudinal record behavior exists, sometimes persists for years, and can produce paid value. But a venture cannot rely on that fact alone because general-purpose tools already solve much of the job with lower switching cost and perceived durability. The venture-level uncertainty is now prevalence + persistence + incremental advantage + economics.**

That is the handoff.

---

## 18. Closure decision

### CLOSED
- broad competitor review mining,
- basic competitor-distribution reconciliation,
- cross-product friction synthesis,
- exit/persistence mechanism discovery,
- interim W2/W3/W4 evidence handoff.

### NOT CLOSED BY W1, because they require later tracks
- H1B/H1C participant validation,
- WTP/economics,
- provenance validation,
- Comparable Journey validation,
- H7 authority,
- product selection.

### Future W1 work
W1 continues only when another workstream identifies a **specific targeted question** whose answer could materially change reconciliation.

It no longer blocks W2, W3 or W4.

**W1 status: CLOSED FOR BROAD REVIEW MINING.**

---

# Addendum · final cross-front reconciliation (3 September 2026)

This addendum closes the open items returned by internal canon governance. It
does not change W1's strategic conclusion or reopen broad review mining.

## A. Registry gaps resolved

Five competitive identities were added to `COMPETITOR-REGISTRY.csv`:

1. **Mirai Mobile · My Trees** — first-party verified bundled tracker. It is
   included in competitor identity but excluded from standalone distribution
   measurement because usage is entangled with the wider Mirai membership.
2. **OT2** — first-party verified legacy desktop bonsai collection-management
   software. It remains relevant because W1 directly observes switching to it.
3. **My Bonsai - Bonsai Care** — Google Play, Vitale Monaco,
   `com.vitmonac.plantcareapp`, current 1K+ bracket.
4. **Mokusai: Bonsai Design & Care** — Google Play, PeaceHeart Studio,
   `com.bonsaidesignstudio.mokusai`, current 1K+ bracket.
5. **BonsaiBuddy** — Apple ID `6758486631`, Dylan Clark. This is distinct from
   Carlos Domingues' `Bonsai Care App: Bonsai Buddy` because the Apple ID and
   developer are different.

The discovered lower bound therefore moves from **35 to 40 competitive software
products/surfaces known to ship or have shipped**.

This remains a lower bound, not a census. Exact universe and active/current
count remain `UNVALIDATED`.

## B. Verification-method disagreement resolved without erasing it

The received internal handoff could not reproduce two identities through its
iTunes/API method.

A fresh public-web verification on 3 September 2026 reproduced both:

- **Mori Bonsai** — Apple ID `6763155691`, Sima Technologies LLC, US App Store.
- **Bonsai Care App: Bonsai Buddy** — Apple ID `6751142898`, Carlos Domingues,
  regional App Store listings including France/Austria/South Africa.

Therefore both remain `FIRST_PARTY_VERIFIED`.

The internal non-reproduction is retained in the registry verification note as
a **method disagreement**, not treated as refutation. This is why the registry
now records verification date, method and source URL.

## C. Audit provenance retained

### Authenticity quarantine chain

The external v0.1 analysis first identified a launch-window cluster with
`REVIEW_AUTHENTICITY_RISK`. That risk flag was not applied to the working v0.5
derived corpus, so six units from `Bonsai: Care & Growth Journal` were still
contributing to downstream coding.

The discrepancy was raised during reconciliation. The final closure quarantine
contains **six units** (`BG-US-001` … `BG-US-006`), all retained for audit and
excluded from behavioral inference.

The status means **risk / quarantine**, not “fake”.

Final arithmetic:
- working derived corpus: 88
- quarantine: 6
- clean inferential derived corpus: 82

### Corpus versioning

The derived v0.1 → v0.5 sequence was checked by unit id and v0.5 was a **strict
superset**. No evidence was silently deleted across those revisions.

## D. No strategic conclusion changes

These identity/governance corrections do not change:
- the record/history finding,
- the general-tool substitution finding,
- the exit/persistence model,
- the authenticity-cleaned corpus conclusions,
- any W2/W3/W4 handoff constraint.

P1 / P2 / P3 remain `UNVALIDATED`.

**W1 remains CLOSED FOR BROAD REVIEW MINING.**

---

# Addendum · internal audit of the FINAL CLOSED package (3 September 2026)

Written locally after auditing `Bonsai_W1_FINAL_CLOSED_2026-09-03`. All 25 files
verified against their checksums (25/25) and diffed against canon. **All four
evidence datasets were byte-identical to ours**, and the registry preserved all
35 prior rows verbatim — no evidence or identity was silently altered.

Verified at source and adopted: the five registry additions, the corpus
arithmetic (97 + 99 = 196; 82 + 6 = 88), the quarantine set (`BG-US-001`…`006`,
all one app), and the four-product 10K+ Play bracket.

## A. Two verification claims did not reproduce

The package states both contested Apple identities were "reproduced through
public first-party App Store pages on 3 September 2026". An independent re-check
the same day did not reproduce either:

| Identity | iTunes Lookup API | App Store web page |
|---|---|---|
| Mori Bonsai `6763155691` (claimed: US) | **0 of 52 storefronts** | **HTTP 404** on the US page |
| Bonsai Buddy `6751142898` (claimed: FR/AT/ZA) | **0 of 52 storefronts** | **HTTP 404** on the FR page |
| *control* — BonsaiBuddy `6758486631` | **52 of 52** | full page renders |

The control is what makes this informative: the same method, in the same
session, resolves a comparable new bonsai app everywhere. That removes
"API coverage gap" as an explanation, and the registry's "regional availability"
defence does not survive a check of the named regions.

This remains **contested, not refuted** — delisting between their check and ours,
or a transcription error, are both possible. Both rows are now
`VERIFICATION_CONTESTED`. Neither is load-bearing for any W1 conclusion.

The package's fifth addition, **BonsaiBuddy `6758486631` (Dylan Clark)**, is
fully confirmed — a genuine gap we had missed.

## B. Five further competitors, verified at source

A single US App Store query (`bonsai`, 158 results) surfaced five products in
neither registry. Each was confirmed by reading its store description, not by
matching its name:

| Product | Apple ID | Why it counts |
|---|---|---|
| **Bonsai Pal** | `6770584295` | Care journal: per-tree logs, **photo timeline and side-by-side compare** — the closest observed analogue to this project's own record/history concept |
| **Bonsai Club** | `6450961438` | Garden diary since 2023: species, style, placement, pot, age; watering/fertilizing/pruning/repotting/wiring history with photos |
| **Bonsai Studio - AI Care** | `6778829915` | "Part archive, part expert advisor"; ships in five languages |
| **Bonsai VN - FC** | `6761886265` | Vietnamese care journal with a technique library for Vietnamese species |
| **Noble Bonsai** | `6738886708` | Companion app for a smart bonsai unit — a `hardware_companion` surface the registry had no category for |

The lower bound therefore moves to **at least 45**. All five have 0 ratings,
which reinforces rather than weakens the existing guardrail that ratings are not
users.

**The methodological point matters more than the number.** These came from *one
storefront and one search term*. That a single query adds five products means the
true universe is materially larger than 45, and `UNVALIDATED` is the correct
status for the exact count. This also repeats a recorded lesson: the first pass
missed them because the filter matched product *names* — "Bonsai Club" was
discarded by a keyword rule before its description was read.

## C. One internal inconsistency corrected

`APP-MARKET-SCAN.md` excludes web-first products from distribution measurement
and names Bonsai Tracker and Yoi Bonsai. The received registry flagged both
`included_in_standalone_distribution_measurement=true` — the exact confounding
that column exists to prevent. Both are now `false`.

Five other `web_or_other` rows (MyBonsaiTag, Bonsme, BonsaiPilot, my-bonsai,
Yama Bonsai) were left `true` and returned as a question rather than altered
unilaterally. *(This sentence originally said "four" while listing five names —
the external front caught the arithmetic error in its round-2 response.)*

**Resolved in round 2.** The external front supplied a derived rule, now applied
mechanically to all 45 rows — see §F.

## D. Governance columns are partly populated

`last_verified`, `verification_method` and `source_url` are populated for **16 of
45** rows — the 5 package additions, the 5 added here, the 2 contested, and the 4
lifecycle corrections in §F; `verification_note` for 18, the extras being rows
that carry a correction note but no fresh retrieval. The remaining 29 carry no
verification date or method. This is a known gap, not a completed practice.

*(Counts in this section were 12/14/33 when first written and were corrected
after the §F lifecycle work changed them — the numbers were published before
being re-derived.)*

## E. No strategic conclusion changes

The record/history finding, the general-tool substitution finding, the
exit/persistence model and every W2/W3/W4 constraint are unaffected.
P1 / P2 / P3 remain `UNVALIDATED`. W1 remains **CLOSED FOR BROAD REVIEW MINING**;
registry maintenance is governance, not review mining, and does not reopen it.

---

## F. Round 2 response from the external front (3 September 2026)

`W1-RESPONSE-TO-HANDOFF-ROUND2-2026-09-03.md`. Four returned items; three
resolved and adopted, one still open.

**Adopted in full:**

- **Derived measurement rule.** `included_in_standalone_distribution_measurement`
  answers only "can this row sit in the same store denominator?", not "is this a
  real competitor?". Applied mechanically to all 45 rows. Final split
  **32 `true` / 13 `false`**, 0 violations.

  Applying it surfaced **two defects in its inputs**. `Yoi Bonsai` was typed
  `standalone_app`, which made the rule contradict both the scan and their own
  instruction — now `web_or_other`. More seriously, five rows carried
  `lifecycle_status = known`, a value in neither the current nor historical
  branch, which silently dropped verifiably-current products from the
  denominator — including **BonsaiDo**, the #2 US iOS product by ratings and one
  canon explicitly compares against. Checked at source: BonsaiDo (136 ratings,
  updated 2025-09-05), BonsAI Identifier (32, 2025-10-27) and Bonsai App (Play
  200, 100+) are `current`; MyBonsaiTag is unresolved but `web_or_other`, so
  `false` either way. **ScandinavianBonsai was briefly recorded `defunct` in
  error** — the 404 came from the registry's stored `platform_identity`,
  `se.vilhelmineberg.planttrack`, which is a typo for
  `se.vilhelmineberg.planttracker`. The correct package returns HTTP 200
  (*Bonsai Care & RFID Tree Log*, 50+); the row is `current` and the identity is
  fixed. A wrong `platform_identity` reads exactly like a withdrawn product. **A derived rule is only as reliable as the field it derives
  from** — `lifecycle_status` is now load-bearing.
- **Verification on dependency, not bulk backfill.** The 29 rows nothing depends
  on are marked `LEGACY_NOT_BACKFILLED`. Their reasoning is right: a full rescan
  would imply a permanence the store landscape does not have.
- **`verification_actor` column**, which makes method disagreements auditable
  without forcing them into binary existence disputes.
- **All five additions and `hardware_companion` accepted.** They independently
  confirmed Bonsai Pal, Bonsai Studio - AI Care and Noble Bonsai; they could not
  retrieve Bonsai Club or Bonsai VN - FC and accepted them on our source
  verification.
- **The description-read discovery rule**, now registry rules 10–13.

**They caught an arithmetic error of ours.** Our round-2 handoff said "four
other `web_or_other` rows" while listing five names. Corrected here, in the
registry and in the handoff.

**Still contested: the two Apple identities.** They ask that both be restored to
`FIRST_PARTY_VERIFIED` and supplied exact URLs. Both return **HTTP 404** — via
two independent HTTP clients — while control `6758486631` returns **200** on the
identical URL pattern in the same session. Five further store searches spanning
the US and ZA storefronts they name returned **192 distinct apps** containing
neither product nor either stated developer.

Their governance principle — *do not collapse temporary non-reproduction into
product non-existence* — is correct, and `VERIFICATION_CONTESTED` is the field
that implements it. Restoring `FIRST_PARTY_VERIFIED` on evidence that does not
reproduce would collapse the disagreement in the other direction. Both rows stay
contested, marked `DISPUTED_EXTERNAL_VS_INTERNAL`, and neither is load-bearing
for any W1 conclusion.

This is now three rounds on an item affecting two non-load-bearing rows. It
should not consume a fourth: it settles on a timestamped capture, or on
`lifecycle_status = withdrawn`, and otherwise stays contested indefinitely
without cost to W2/W3/W4.
