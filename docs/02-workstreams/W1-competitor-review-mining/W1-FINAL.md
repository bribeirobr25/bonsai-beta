# Bonsai · W1 · Competitor Review Mining · FINAL v1.1

> **Received document, locally extended.** Adopted from the external W1 closed
> package as `W1-FINAL-v1.1`. Two internal sections are appended at the end —
> an audit-provenance record and a verification note — covering findings that did
> not survive the v1.1 rewrite and one item we could not independently reproduce.
> The unmodified original is preserved in `99-archive/external-packages/`.

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
> **at least 35 distinct bonsai-specific care/tracking/journal products known to ship or have shipped**

Exact universe:
`UNVALIDATED`

Current active count:
`UNVALIDATED`

### Verified closure items
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

# Addendum · internal verification note (3 September 2026)

Added after adopting `W1-FINAL-v1.1`. Does not alter any conclusion above.

## One resolution item could not be independently confirmed

`W1-CANON-AMENDMENT-RESOLUTION` §A7 states both identities remain verified:

- **Mori Bonsai** — Apple ID `6763155691`, Sima Technologies LLC
- **Bonsai Care App: Bonsai Buddy** — Apple ID `6751142898`, Carlos Domingues,
  with regional storefront availability

**Independent checks did not reproduce either.** The iTunes lookup API returned
**no result for either ID across 12 storefronts** (us, br, gb, de, es, it, nl,
fr, ca, au, mx, pt). The App Store web endpoint returned **HTTP 404 for
`6751142898` (US)**; checks on `6763155691` were rate-limited (HTTP 429) and are
inconclusive.

A name search surfaces a **different** product: `BonsaiBuddy`, Apple ID
`6758486631`, developer **Dylan Clark**, released 18 May 2026, 0 ratings — a
different ID and a different developer from the registry entry.

**Interpretation.** This is *contested*, not refuted. Plausible explanations
include delisting between their verification and ours, or coverage gaps in the
lookup API. The registry's own rule that regional availability does not defeat
product identity is sound.

**Impact is small and bounded:** the two `MO-US-*` units are low-information,
and neither identity is load-bearing for any W1 conclusion. Two of 35 registry
identities carry a verification note.

**Suggested registry action:** move both to a `VERIFICATION_CONTESTED` state
with the retrieval date and method recorded on each side, rather than either
removing them or leaving them as plain `FIRST_PARTY_VERIFIED`. This is exactly
the case the registry's `verification_status` column exists to express.

---

## Audit provenance retained from the pre-reconciliation W1 document

v1.1 is a cleaner synthesis and I adopted it, but two audit findings did not
survive the rewrite. Both are provenance rather than conclusions, and both
matter for anyone reconstructing how the closed state was reached.

**How the authenticity quarantine came about.** The `REVIEW_AUTHENTICITY_RISK`
flag was introduced in the external v0.1 review, which described one app's
cluster of polished launch-window five-star reviews. **That flag was then not
applied to their own corpus** — the v0.5 working corpus carried six units from
*Bonsai: Care & Growth Journal* unflagged, tagged `ANTI_GENERIC_PLANT_APP`,
`PROGRESSION_VALUE`, `SOCIAL_DISTRIBUTION_OBJECT`, `ADOPTION_TRIGGER_CAMERA_ROLL`
and `COLLECTION_SCALE`, feeding the W4 acquisition-moment list. Independent
collection found **5 of 5** reviews for that app matching the pattern. The gap
was raised, accepted in resolution §A6, and the quarantine is the result.

**Corpus versioning was verified clean.** Derived corpora v0.1 → v0.5 were
diffed by unit id: **v0.5 is a strict superset**, so no evidence was silently
dropped across five revisions. Worth recording as a positive finding about the
external process, not only the corrections.

## Registry gaps found after adoption

Four products named in evidence are absent from `COMPETITOR-REGISTRY.csv` and
from the exclusion registry, so they are neither included nor consciously
excluded:

| Product | Where it appears | Note |
|---|---|---|
| **Mirai My Trees** | **Their own exit/persistence matrix** — `OBSERVED` displaced by Excel and folders | Bonsai Mirai's own tracker |
| **OT2 desktop bonsai software** | **Their own exit matrix** — destination after leaving Bonsai Droid | Desktop; may warrant a platform rule |
| My Bonsai – Bonsai Care | Independently verified, 1,000+ Play installs | `com.vitmonac.plantcareapp` |
| Mokusai: Bonsai Design & Care | Independently verified, 1,000+ Play installs | — |

The first two matter most: **the registry is now the single source of truth for
competitor identity, yet the package's own strongest artefact cites products the
registry does not contain.** Mirai My Trees is also strategically notable — the
best-resourced brand in bonsai shipped a tracker and is observed losing a user
to a spreadsheet.

**Suggested action:** add all four, or add explicit exclusion entries with a
stated platform rule if desktop and vendor-bundled trackers are deliberately out
of scope. Either is fine; silence is not, because it makes the lower bound
unauditable.
