# Bonsai · W2 · Monetization Census Merge v1.0

**Date:** 4 September 2026  
**Status:** POST-RECONCILIATION TRACK A ECONOMIC EVIDENCE  
**Sources merged:** `W2-PRICING-TEARDOWN.md` + `W2-pricing-teardown-apple.csv` + W2 manual monetization census in `W2-ECONOMIC-STRUCTURE-MAP-v0.5.md` + current Competitor Registry  
**Product decision:** none  
**Pricing decision:** none

---

## 1. Purpose

This document merges two previously separate W2 views:

1. the **manual economic-shape census** created by W2; and
2. the **Apple US pricing/packaging teardown** now present in the project evidence package.

The merge uses an explicit evidence precedence:

> **manual first-party verification > hard store fact > keyword heuristic**

This matters because the teardown itself warns that `monetisation_model_HEURISTIC`
is keyword-derived and can misclassify individual products. Tiny Tree Club is a
concrete example: the heuristic labels it subscription-like while W2 manual
verification found the current core product free with only future transaction-fee
possibility.

Nothing in this document establishes revenue, retention, paid conversion, ARPU,
LTV, CAC or profitability.

---

## 2. Clean Apple standalone baseline

For the **23 measurement-eligible US Apple products** in the teardown:

- **22/23** are free at download;
- **1/23** is paid upfront: Bonsai Album at **$7.99**;
- median US ratings = **0**;
- **16/23 (69%)** have zero ratings;
- total US ratings = **376**;
- top 3 hold **96%** of ratings;
- Bonsai Album + BonsaiDo hold **87%**;
- **17/23** launched in 2026;
- **20/23** were updated in 2026.

### W2 interpretation

`OBSERVED`:
- free entry is the dominant current convention;
- observable attention is extremely concentrated;
- the category is actively crowded, not simply abandoned.

`UNVALIDATED`:
- free entry is necessary for success;
- ratings map to active users or payers;
- any model has superior retention or economics.

The standout exception is economically useful but not causal:

> **Bonsai Album is the only paid-upfront product in the clean set and is also the ratings leader.**

It launched in 2011, so age alone could explain the difference.

---

## 3. Bundled distribution exception

Mirai Mobile has **379 US ratings**, more than the 23-product standalone eligible set combined (**376**).

It is correctly excluded from the standalone denominator because it rides the wider Mirai membership/education ecosystem.

W2 inference:

> Distribution substrate can dominate observable acquisition even when tracking is not the primary paid value.

This does **not** establish:
- tracker retention;
- tracker-specific WTP;
- tracker-specific economics.

W1 already contains a user switching from Mirai My Trees back to Excel/folders,
so acquisition/distribution and retention remain separate.

---

## 4. Merged product-level census

| ID | Product | Distribution class | Hard Apple entry price | US ratings | Best current monetization classification | Confirmed price / packaging signal | Payer | Evidence quality |
|---|---|---|---:|---:|---|---|---|---|
| W1-036 | Mirai Mobile | Excluded/non-standalone | Free | 379 | Tracking bundled into authority/education membership | $9.99 · $17.99 · $29.99/month membership tiers | Membership customer | MANUAL VERIFIED |
| W1-028 | Bonsai Album | Eligible standalone | $7.99 | 193 | One-time record utility | $7.99 upfront | Consumer grower | MANUAL VERIFIED |
| W1-001 | BonsaiDo | Eligible standalone | Free | 136 | Social + diary subscription | $4.99/month · $6.49/3 months · $18.49/year | Consumer grower | MANUAL VERIFIED |
| W1-003 | BonsAI Identifier: Tree Care | Eligible standalone | Free | 32 | freemium: unspecified IAP | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-023 | Bonsai: Care & Growth Journal | Eligible standalone | Free | 7 | freemium: unspecified IAP | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-004 | Jooni – Bonsai Tracking | Eligible standalone | Free | 5 | Subscription-required journal/community | $1.99/month · $19.99/year | Consumer grower | MANUAL VERIFIED |
| W1-019 | Kodama - Bonsai Tree Care | Eligible standalone | Free | 2 | freemium: subscription | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-005 | Bonsai Care - Journaling | Eligible standalone | Free | 1 | freemium: unspecified IAP | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-007 | Bonsaiku: Bonsai Care & Log | Eligible standalone | Free | 0 | freemium: one-time unlock | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-008 | Bonsai - Tree Care | Eligible standalone | Free | 0 | freemium: subscription | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-009 | Tiny Tree Club | Eligible standalone | Free | 0 | Free club/community product → possible future transaction fees | Core currently free | Future transaction participant unvalidated | MANUAL VERIFIED |
| W1-010 | Bonsai Care: Plant Tracker | Eligible standalone | Free | 0 | freemium: unspecified IAP | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-012 | Yoi Bonsai | Excluded/non-standalone | Free | 0 | Freemium record → Premium collaboration/AI; marketplace zero-fee | €5.99/month · €59.99/year | Consumer / advanced grower | MANUAL VERIFIED |
| W1-014 | Bonsai Care Journal - Nebari | Eligible standalone | Free | 0 | freemium: unspecified IAP | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-017 | MyBonsaiTag | Excluded/non-standalone | Free | 0 | freemium: unspecified IAP | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-021 | Komorebi: Bonsai Tree Care | Eligible standalone | Free | 0 | Lifetime + subscription split | $24.99 lifetime · $14.99/year · $1.99/month | Consumer grower | MANUAL VERIFIED |
| W1-022 | BonsaiTrack: Care Journal | Eligible standalone | Free | 0 | freemium: unspecified IAP | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-024 | BonsaiLog: Bonsai Care Log | Eligible standalone | Free | 0 | freemium: sub + one-time | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-025 | BonsaiNikki – Bonsai Journal | Eligible standalone | Free | 0 | freemium: subscription | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-026 | kinoki - bonsai journal & care | Eligible standalone | Free | 0 | free, no monetisation signal | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-027 | BonsaiLog | Eligible standalone | Free | 0 | freemium: unspecified IAP | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-040 | BonsaiBuddy | Eligible standalone | Free | 0 | freemium: unspecified IAP | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-041 | Bonsai Pal | Eligible standalone | Free | 0 | freemium: sub + one-time | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-042 | Bonsai Club | Eligible standalone | Free | 0 | freemium: unspecified IAP | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-043 | Bonsai Studio - AI Care | Eligible standalone | Free | 0 | freemium: unspecified IAP | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-044 | Bonsai VN - FC | Eligible standalone | Free | 0 | free, no monetisation signal | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-045 | Noble Bonsai | Excluded/non-standalone | Free | 0 | free, no monetisation signal | Not confirmed | Not confirmed | HEURISTIC ONLY |
| W1-011 | Bonsai Tracker | Excluded/non-standalone | N/A | N/A | Freemium → Pro → professional/nursery tiers + partner distribution | $4.99/month Pro · $9.99/month Premium | Consumer / professional; partner payer unvalidated | MANUAL VERIFIED |

---

## 5. Manually verified economic archetypes

### Consumer freemium → collection-limit subscription
Observed in Bonsai Care App / Bonsai Empire.

Economic question:
> Does collection/workflow complexity create enough incremental current value to convert?

### Limited free inventory → Premium subscription
Observed in Appy Bonsai.

Economic question:
> Does a free limit expose value before payment resistance appears?

### Social/diary subscription
Observed in BonsaiDo.

W1 contains a multi-year paid-persistence case, but prevalence is unknown.

### One-time record utility
Observed in Bonsai Album.

This remains the strongest category precedent that a record-only utility can be sold
without recurring subscription.

### Low-price subscription-required journal/community
Observed in Jooni.

### Freemium record + premium collaboration/AI
Observed in Yoi.

The model also explicitly handles export/service-discontinuation trust.

### Consumer + professional tiering / partner distribution
Observed in Bonsai Tracker.

Partner distribution is observed as an attempt. Partner payment remains `UNVALIDATED`.

### Lifetime + subscription split
Observed in Komorebi.

Economically relevant to the revenue-duration × service-obligation problem.

### Tracking inside authority/education membership
Observed in Bonsai Mirai.

Higher ARPU belongs to the bundle, not demonstrably to tracking.

### Free club/community substrate
Observed in Tiny Tree Club.

Future transaction economics remain speculative.

---

## 6. What the merged census changes

### Finding A · no model convergence

There is still no clearly dominant monetization architecture.

The category contains:
- free + IAP;
- subscription;
- subscription + one-time;
- one-time upfront;
- lifetime + subscription;
- free community;
- professional tiers;
- bundled education membership;
- potential transaction models.

**Interpretation:** model diversity is `OBSERVED`; model superiority is `UNVALIDATED`.

### Finding B · entry-price convention is clearer

The teardown strengthens:

> **Free-at-download is a category convention.**

It does not establish:

> **Free-at-download is a requirement.**

Because the only paid-upfront product is also the standalone ratings leader.

### Finding C · attention risk rises

W2 previously focused on retention, WTP and substitutes.

The teardown adds a serious distribution constraint:

> **even actively maintained new products often receive almost no observable attention.**

For economics, CAC/organic-discovery uncertainty deserves greater weight.

### Finding D · manual verification is still necessary

The heuristic dataset is useful for shape-level signal but insufficient for:
- actual IAP tier confirmation;
- free-limit details;
- paid value unit;
- exact custody/export promises;
- professional/partner packaging.

---

## 7. Remaining bounded Track A increment

The next pricing-census increment is now well bounded:

> **Manually verify current IAP/package tiers for the 27 resolved Apple identities, prioritizing the 23 standalone-eligible products.**

For each product, record:

1. exact recurring/one-time price points;
2. free limit;
3. paid value unit;
4. export/data portability;
5. cloud/custody dependence;
6. professional/partner surface;
7. whether the product is still commercially operable.

This is useful Track A work, but it should **not** delay Step 1 once participant access exists.

---

## 8. Economic conclusion

The merged census does not select a payment model.

It sharpens the economic problem:

> **Bonsai must not only beat free/general substitutes and retain users; it must also become discoverable in an actively crowded category where observable attention is extremely concentrated.**

Under authoritative `S1`, a low-contribution consumer model can be sufficient **if reached**.

The unresolved question is reachability:
- enough economically eligible users;
- enough paid retention;
- acquisition/support cost low enough to preserve contribution.
