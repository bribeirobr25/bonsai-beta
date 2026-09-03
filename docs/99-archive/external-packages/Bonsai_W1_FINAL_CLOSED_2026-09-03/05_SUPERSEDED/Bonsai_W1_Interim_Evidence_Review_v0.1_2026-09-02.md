# Bonsai · W1 · Competitor Review Mining

> **SUPERSEDED INPUT — external W1 interim review v0.1 (2 Sep).** Superseded by the
> W1 closed package and `W1-FINAL.md`. Retained as the origin of the
> `REVIEW_AUTHENTICITY_RISK` flag and the codebook. Audit trail only.
## Interim Evidence Review v0.1

**Data:** 2 September 2026  
**Status:** PRE-VALIDATION / Track A  
**Authority:** CURRENT-EVIDENCE-AND-DECISIONS.md → APP-MARKET-SCAN.md → PROJECT-BRIEF.md → RESEARCH-BRIEF-behavioural-validation.md  
**Purpose:** calibrate the W1 review-mining method before broad collection. This document does **not** select a product or validate P1/P2/P3.

---

## 1. What this round actually did

This round moved W1 from a smoke test to a **derived calibration corpus**.

- 40 unique textual reviews were manually deduplicated from public Apple App Store pages.
- 7 products are represented.
- Storefronts represented: US, GB, DE, BR.
- Review-page duplication was removed.
- Developer responses were used only to determine whether a historical complaint appears resolved; they were not treated as user evidence.
- Full review text is **not republished** in the derived corpus. Each row contains a behavioural paraphrase plus codes.
- The corpus is a calibration dataset, **not a probability sample** and not suitable for market-prevalence estimates.

### Coverage

| Product | Derived reviews |
|---|---:|
| Bonsai Care App | 22 |
| BonsaiDo | 5 |
| Jooni – Bonsai Tracking | 2 |
| BonsAI Identifier: Tree Care | 2 |
| Appy Bonsai - Bonsai Care | 1 |
| Mori Bonsai | 2 |
| Bonsai: Care & Growth Journal | 6 |

| Storefront | Derived reviews |
|---|---:|
| US | 25 |
| GB | 9 |
| DE | 5 |
| BR | 1 |

Total: **40 unique derived reviews**.

---

## 2. Method correction from the smoke test

### What is actually validated

**VALIDATED:** public Apple storefront HTML exposes review text and enough metadata for qualitative mining.

**NOT YET VALIDATED:** the undocumented Apple JSON review endpoint as a production collector. It is a plausible candidate method reported by current third-party implementations, but this research environment could not directly call it.

Therefore the previous wording “APPLE PUBLIC WEB REVIEWS → works” should be narrowed to:

> **Apple public storefront review pages are usable as a lawful public qualitative fallback. The structured JSON collector remains candidate infrastructure until directly smoke-tested in an environment that can call it.**

### Important extraction limitation

The text extraction available in this environment does **not reliably preserve the individual star rating** for each review. The production collector must capture rating from structured page data/API if technically accessible. Until then, rating is not inferred from sentiment.

This is exactly why the final review corpus must distinguish:
- source capability,
- extraction capability,
- and analyst inference.

---

## 3. Codebook v0.1

The calibration supports a two-layer coding model.

### A. Primary behavioural theme

1. `ADOPTION_TRIGGER`
2. `TRACKING_HISTORY_VALUE`
3. `PROGRESSION_PHOTO_VALUE`
4. `REMINDER_VALUE_OR_FRICTION`
5. `LOGGING_FRICTION`
6. `RETRIEVAL_ORGANIZATION_FRICTION`
7. `CARE_GUIDANCE`
8. `IDENTIFICATION_TRUST`
9. `BUG_RELIABILITY`
10. `ONBOARDING_ACTIVATION`
11. `LOCALIZATION`
12. `PRICING_PAYWALL`
13. `PRIVACY_DATA_OWNERSHIP`
14. `COMMUNITY_SHARING`
15. `ABANDONMENT_OR_CHURN_REPORT`
16. `OTHER / LOW_INFORMATION`

### B. Required analytic flags

- `BEGINNER_SIGNAL`
- `EXPANDING_OR_LARGE_COLLECTION_SIGNAL`
- `PAID_USE_SIGNAL`
- `LONGITUDINAL_USE_SIGNAL`
- `EXPLICIT_ABANDONMENT`
- `DATA_LOSS_OR_DURABILITY`
- `CURRENT_SIGNAL`
- `HISTORICAL_ONLY`
- `RESOLVED_LATER`
- `CURRENT_STATUS_UNKNOWN`
- `IMPLEMENTATION_FRICTION`
- `JOB_REJECTION_SIGNAL`

**Critical rule:** a complaint is not automatically evidence against the job.  
Every negative review must be coded as either:
- friction in implementation,
- rejection of the underlying job,
- or indeterminate.

---

## 4. Strongest calibrated signals so far

### 4.1 Tracking itself is not being rejected in the calibration sample

Across the 40 derived reviews, users repeatedly describe value in:
- keeping track of trees,
- replacing spreadsheets,
- replacing scattered camera-roll albums,
- maintaining photo progression,
- seeing multi-year history,
- keeping a large collection organised.

This supports:

**SUPPORTED SIGNAL · tracking/history has intrinsic value for at least a subset of app adopters.**

It does **not** establish:
- prevalence in the bonsai population,
- H1B,
- retention,
- willingness to pay,
- or market size.

### 4.2 Friction is currently more implementation-shaped than job-shaped

The negative material is concentrated in:
- finding a tree in a collection,
- sorting/grouping,
- reminder semantics,
- reminder persistence,
- login/account blockers,
- localization,
- image ordering,
- performance,
- regressions after update,
- data-loss incidents,
- timestamped note entry.

So far, there is little direct evidence that users abandon because “logging bonsai is inherently too much work.”

Correct status:

**SUPPORTED SIGNAL · implementation friction is observable.  
UNVALIDATED · intrinsic logging burden as the main abandonment mechanism.**

### 4.3 Reminder value depends on modelling the real action

The calibration contains an important distinction:
- “check whether watering is needed”
- is not the same event as
- “watered the tree”.

Likewise, a repot reminder that disappears on the due date does not match a task that may remain pending for days.

Strategic interpretation:
reminder complaints often expose **event semantics and workflow mismatch**, not merely notification preference.

### 4.4 Longitudinal records create durability expectations

One paid BonsaiDo user reports more than two years of membership and strong distress when trees and notes appeared lost. The developer later said the data was restored.

This supports two narrow signals:
- longitudinal paid use exists in at least some cases;
- accumulated records can become something users expect the product to protect.

It does **not** prove provenance or H1B at population level.

### 4.5 Advice/identification failure has a different trust profile from logging failure

A paid BonsAI Identifier user reports using identification at the purchase moment, finding the result wrong after external research, and repeatedly retrying without resolution.

This is not ordinary UI friction. It is a failure of **epistemic trust**.

The evidence is consistent with the current canon that higher advice levels carry a much higher authority burden.

### 4.6 Segment differences are beginning to appear

Observed examples permit a provisional contrast:

**Beginner signals**
- wants basic information;
- wants help understanding what to do;
- is vulnerable to onboarding/localization blockers;
- may interpret reminders literally.

**Large-collection / experienced signals**
- search/filter/sort matter more;
- event-entry flexibility matters more;
- photo/history and progression remain valuable;
- reminders are not automatically the central value.

This remains **SUPPORTED SIGNAL**, not a validated segmentation model.

---

## 5. Theme frequency inside the calibration corpus

These are **coding counts inside this 40-review calibration set only**. They are not population estimates.

| Tag | Count |
|---|---:|
| `TRACKING_VALUE` | 11 |
| `POSITIVE_VALUE` | 8 |
| `PROGRESSION_VALUE` | 7 |
| `ORGANIZATION` | 5 |
| `PHOTO_HISTORY` | 5 |
| `COLLECTION_SCALE` | 4 |
| `REMINDER_VALUE` | 3 |
| `RETRIEVAL_FRICTION` | 3 |
| `FEATURE_REQUEST` | 3 |
| `LOCALIZATION_FRICTION` | 3 |
| `BUG_RELIABILITY` | 3 |
| `ACTIVATION_FAILURE` | 3 |
| `CARE_GUIDANCE` | 2 |
| `REMINDER_FRICTION` | 2 |
| `ADOPTION_TRIGGER_SPREADSHEET` | 2 |
| `BEGINNER_VALUE` | 2 |
| `EVENT_SEMANTICS` | 2 |
| `LONGITUDINAL_USE_SIGNAL` | 2 |
| `COLLECTION_MANAGEMENT` | 2 |
| `PAID_USE_SIGNAL` | 2 |
| `ONBOARDING_BLOCKER` | 2 |
| `COMMUNITY_VALUE` | 2 |
| `LOW_INFORMATION_REVIEW` | 2 |
| `DESIGN_VALUE` | 2 |
| `SHARING_VALUE` | 2 |
| `PRIVACY_VALUE` | 2 |
| `LOW_FRICTION_VALUE` | 2 |
| `SPECIES_SPECIFIC` | 1 |
| `BUG_UI` | 1 |
| `PAID_VALUE` | 1 |
| `PRICING_PAYWALL` | 1 |
| `CENTRALIZATION_VALUE` | 1 |
| `ECOSYSTEM_INTEGRATION` | 1 |
| `SEASONAL_PLANNING` | 1 |
| `ONBOARDING_AUTH_FRICTION` | 1 |
| `LONGITUDINAL_EXPECTATION` | 1 |
| `REMINDER_SEMANTICS` | 1 |
| `PRODUCT_IMPROVEMENT` | 1 |
| `FINANCIAL_RECORD` | 1 |
| `PRIVACY_DISPLAY` | 1 |
| `RECORD_VALUE` | 1 |
| `CARE_PLANNING` | 1 |
| `PAID_INTENT_SIGNAL` | 1 |
| `DIARY_VALUE` | 1 |
| `DISTRIBUTION_BRAND_TO_APP` | 1 |
| `TASK_PERSISTENCE` | 1 |
| `WORKFLOW_MISMATCH` | 1 |
| `LOGGING_FRICTION` | 1 |
| `TIMELINE_VALUE` | 1 |
| `PERFORMANCE_FRICTION` | 1 |
| `DATA_LOSS` | 1 |
| `TRUST_DURABILITY` | 1 |
| `ABANDONMENT_RISK` | 1 |
| `NEGATIVE_SENTIMENT` | 1 |
| `UNDIAGNOSABLE_COMPLAINT` | 1 |
| `BEGINNER_ADOPTION_TRIGGER` | 1 |
| `SUPPORT_FRICTION` | 1 |
| `PHOTO_MANAGEMENT_FRICTION` | 1 |
| `ADOPTION_EXCITEMENT` | 1 |
| `IDENTIFICATION_FAILURE` | 1 |
| `EPISTEMIC_TRUST` | 1 |
| `ACQUISITION_MOMENT` | 1 |
| `RETRY_FRICTION` | 1 |
| `UPDATE_REGRESSION` | 1 |
| `ANTI_GENERIC_PLANT_APP` | 1 |
| `SOCIAL_DISTRIBUTION_OBJECT` | 1 |
| `ADOPTION_TRIGGER_CAMERA_ROLL` | 1 |
| `LOW_INFORMATION_BEHAVIORAL` | 1 |

Interpretation must be qualitative because:
- storefront review exposure is not random;
- positive/negative visibility may be ranked by Apple;
- many apps have very few textual reviews;
- this is a calibration corpus assembled from publicly exposed reviews.

---

## 6. A new competitive finding surfaced during W1

The canonical `APP-MARKET-SCAN.md` currently records 18 known distinct products.

During this review-mining round, Apple surfaced additional bonsai-specific apps that are not in that master list, including at minimum:

- **Kodama - Bonsai Tree Care** — active, 2026, bonsai-specific AI + tracking.
- **Mori Bonsai** — active, 2026, private grove/timeline/calendar.
- **Komorebi: Bonsai Tree Care** — active, 2026, reminders + photo journal.
- **BonsaiTrack: Care Journal** — active, 2026, private tree history/logging.
- **Bonsai: Care & Growth Journal** — active, 2026, photo-history-focused journal.

At least one further product, **Bonsai Care Journal - Nebari**, also appears distinct and requires final deduplication against the existing Nebari entry before changing the count.

### PROPOSED CANON AMENDMENT

**Current canonical statement:** 18 known distinct products / 17 believed active.

**Proposed amendment:** the count is already superseded by additional 2026 entrants. Until a fresh master-list rescan and deduplication are complete, use:

> **“At least 23 distinct bonsai-specific tracking/care products are now confirmed known; the master list is undergoing reconciliation and the count is not yet frozen.”**

**Consequence:**
- strengthens the evidence that the feature space is crowded;
- weakens any claim based on “few attempts”;
- does **not** establish market size or viability;
- increases the importance of W1’s question: *why do repeated implementations still fail to create a visible dominant winner?*

This amendment should not be made canonical until the master-list rescan is finished.

---

## 7. Important caution: review authenticity cannot be assumed

One newly discovered app has a cluster of highly polished, thematically repetitive five-star reviews appearing shortly after launch.

This is **not evidence that the reviews are fake**.

It is enough to add a methodological flag:

`REVIEW_AUTHENTICITY_RISK`

Rules:
- do not discard such reviews without evidence;
- do not let unusually polished clusters dominate behavioural inference;
- prefer repeated signals across independent products/storefronts;
- weight highly specific failure reports more heavily than generic praise for problem discovery.

---

## 8. Implications for W2 / W3 / W4 at this stage

### W2 · Monetization & Economics
Observed:
- explicit “worth the money” language;
- stated intent to upgrade;
- at least one paid user retained for >2 years;
- paywalls tied to tree-count limits.

Still `UNVALIDATED`:
- conversion;
- retention distribution;
- ARPU;
- willingness to pay in the target population;
- viable unit economics.

### W3 · Brand Identity & Marketing
User language repeatedly clusters around:
- remember,
- keep track,
- progression,
- one place,
- diary,
- history,
- stay on track.

High-authority AI/advice promises create higher trust exposure when wrong.

### W4 · Growth Strategy
Observed acquisition moments/signals include:
- first bonsai / beginner information need;
- collection becoming too complex for memory;
- spreadsheet replacement;
- camera-roll replacement;
- purchase/identification moment;
- progression sharing to Reddit/Instagram;
- existing Bonsai Empire content audience converting into app trial.

Activation can be killed before first value by:
- account flow,
- localization,
- app-open regressions.

---

## 9. What reviews still cannot answer

- What fraction of bonsai growers maintain private records?
- How many people abandon after initial enthusiasm?
- Whether logging burden rises enough to kill retention.
- Whether provenance adds trust/value.
- Whether transfer is actually used.
- Whether Comparable Journey is useful.
- Whether community improves retention.
- Whether any of these products are economically sustainable.
- Whether paid users are common or exceptional.

These remain outside the evidentiary reach of this calibration.

---

## 10. Next execution gate

Before broad coding:

1. rescan and reconcile the competitor master list;
2. directly smoke-test the Apple structured collector in an environment that permits the call;
3. freeze codebook v0.2 after adding:
   - current-vs-historical complaint status,
   - review authenticity risk,
   - implementation-friction vs job-rejection;
4. expand collection across all confirmed products/storefronts;
5. only then produce cross-product proportions/counts.

The correct objective remains:
**make W2–W4 smarter, not choose the product from reviews alone.**
