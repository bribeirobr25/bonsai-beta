# Bonsai · W2 · Economic Structure Map v0.4

**Date:** 3 September 2026  
**Workstream:** W2 · Monetization & Economics  
**Status:** WORKING ANALYSIS — PRE-VALIDATION / PRE-MVP  
**Product decision:** None. P1, P2 and P3 remain `UNVALIDATED`.

## 0. Governance and evidence basis

Authority order used:

1. `CURRENT-EVIDENCE-AND-DECISIONS.md`
2. `PROJECT-BRIEF.md`
3. `W1-FINAL.md`
4. `W1-HANDOFF-W2-W3-W4.md`
5. `APP-MARKET-SCAN.md`
6. `RESEARCH-BRIEF-behavioural-validation.md`
7. `COMPETITOR-REGISTRY.md` / `.csv` where needed

W1 is `CLOSED FOR BROAD REVIEW MINING`. W2 does not reopen W1 prevalence claims and does not convert W1 counts into churn, conversion, retention, WTP, ARPU, LTV or market size.

Evidence labels in this document:

- `OBSERVED` — directly found in canonical evidence or current first-party market material.
- `SUPPORTED SIGNAL` — multiple observations point in the same direction but magnitude/prevalence is not measured.
- `CONTRADICTED` — evidence exists against the claim.
- `UNVALIDATED` — requires a test that has not run.
- `DEFERRED` — deliberately not being tested now.
- `INFERENCE` — W2 interpretation derived from evidence; not itself sourced evidence.
- `SCENARIO` — model input used to explore outcomes; not a forecast.
- `RECOMMENDATION` — W2 decision guidance.

---

# 1. Economic problem definition

W1 materially changes the economic problem.

`OBSERVED`:

- longitudinal recordkeeping exists across dedicated apps, spreadsheets, photos, generic notes, Lightroom metadata, notebooks, paper calendars and hybrid workflows;
- paid dedicated-app persistence exists in individual cases, including multi-year use;
- dedicated-app exit, switching and avoidance also exist;
- general-purpose and analog tools are real substitutes;
- logging/data-entry burden can cause behavioral exit;
- photo/progression value is repeatedly observed;
- data durability, export and product mortality affect adoption/trust;
- subscription rejection exists in observed individual cases.

Therefore the W2 question is not whether the job exists. It is:

> **Does any surviving job create enough incremental, sufficiently frequent and sufficiently capturable value to support a sustainable economic structure when the user can solve much of the job with tools already owned?**

A useful working inequality from W1 is:

`memory pressure + collection complexity + progression/history value + immediate utility`

must exceed:

`capture effort + retrieval effort + business-model cost + reliability risk + lock-in risk + good-enough substitute value`.

W2 adds an economic layer:

`capturable value per payer × payer frequency × payer duration`

must also exceed:

`variable service cost + acquisition/distribution cost + support/operations + long-horizon continuity obligation`.

---

# 2. Core economic tension: repeated cost, delayed payoff

`SUPPORTED SIGNAL` from W1:

- capture cost occurs repeatedly at the moment of logging;
- part of the value is immediate (organization, task memory, centralized information);
- part of the value is delayed (progression comparison, later retrieval, history, provenance).

**W2 INFERENCE — Value Timing Mismatch:**

A record product can be genuinely valuable in hindsight and still fail economically because the user bears repeated effort before the accumulated history becomes obviously valuable.

This creates four distinct economic requirements:

1. **Early value** — something useful must happen before a large collection is migrated or months of history exist.
2. **Recurring value** — if revenue is recurring, value cannot rely only on a future historical payoff.
3. **Capture economics** — more structure may improve future retrieval but increases current user effort.
4. **Continuity economics** — a product promising a decades-long record inherits a long-lived service obligation.

---

# 3. Long-Horizon Economics Paradox

`OBSERVED` W1 inputs:

- growers worry that a software product may disappear;
- export concerns can arise before committing a collection;
- data-loss incidents can damage trust after years of paid use;
- at least one user rejects even a free dedicated product because the record may need to survive for decades.

**W2 INFERENCE — Long-Horizon Economics Paradox:**

> The more permanent the value promise to the grower, the longer the provider's economic obligation to preserve, export, migrate, support and recover that record.

This creates tension for every model:

- **subscription:** finances ongoing service but must repeatedly justify payment;
- **one-time / lifetime:** can reduce subscription resistance but creates finite revenue against long-duration service obligations;
- **local-first / user-owned data:** can reduce custody risk, but may reduce cloud/network value and does not eliminate development/support costs;
- **B2B subsidy:** can move payment away from the grower, but requires a business outcome for the subsidizing actor;
- **transactional models:** align payment with occasional high-value events, but may not finance the record between events.

No option is selected. The point is that continuity must be modeled as economics, not treated as later UX polish.

---

# 4. Value-recipient × payer × frequency map

| Economic job | Primary value recipient | Plausible payer(s) | Value frequency | Current substitute | Evidence state | Main economic uncertainty |
|---|---|---|---|---|---|---|
| Collection organization / memory | expanding hobbyist; experienced grower | grower | recurring / seasonal | Excel, notes, folders, paper | job `OBSERVED`; payment cases `OBSERVED` | dedicated-tool premium and eligible segment size `UNVALIDATED` |
| Photo progression / longitudinal history | current grower; future steward | grower; possibly buyer/seller later | capture recurring; payoff delayed | Photos, Lightroom, albums, folders | value `OBSERVED` | whether software adds enough incremental value `UNVALIDATED` |
| Care-task memory | beginner; expanding hobbyist | grower | recurring / seasonal | phone reminders, calendars, paper | value `OBSERVED` | whether domain-specific reminders create paid value rather than noise `UNVALIDATED` |
| First-tree reassurance / decision confidence | beginner | beginner; nursery/workshop possible | high-intent but episodic | search, forums, seller, practitioner | job `SUPPORTED SIGNAL` | payer, authority requirement and recurrence `UNVALIDATED` |
| Acquisition decision | buyer | buyer; nursery/marketplace possible | episodic per purchase | nursery, search, forums | candidate only | value and WTP `UNVALIDATED` |
| Verifiable provenance / handoff | owner, buyer, next steward, practitioner, institution | payer unresolved; seller/buyer/institution possible | rare but potentially high value | informal history, documents, photos | cultural/market weight `OBSERVED`; verified added value `UNVALIDATED` | who pays, when, and how much `UNVALIDATED` |
| Comparable Journey / contextual learning | grower learning from similar cases | grower; membership; cross-subsidy possible | potentially recurring after corpus density | progression threads, search, forums | learning-from-progressions `OBSERVED`; product value `UNVALIDATED` | whether retrieval/comparison earns recurring value `UNVALIDATED` |
| Teacher / cohort coordination | teacher + students | teacher, school, club, cohort organizer | recurring during cohorts/seasons | WhatsApp, Drive, spreadsheets, course platforms | candidate only | workflow intensity, payer universe and sales cost `UNVALIDATED` |
| Practitioner attestation | owner/buyer/future steward; practitioner reputation | owner, seller, institution, platform | event-based | informal confirmation | concept `UNVALIDATED` | practitioner willingness, friction, incentive and liability `UNVALIDATED` |
| Club community / local marketplace | member, buyer, seller, club | member, club, seller, transaction fee, sponsor | recurring social + episodic transaction | club groups, Facebook, WhatsApp | community behavior exists; monetization `UNVALIDATED` | network density and payer alignment `UNVALIDATED` |
| Nursery purchase support | novice buyer + nursery | nursery / product margin / partner budget | per tree purchase | staff advice, printed care sheet | competitor B2B2C attempt `OBSERVED` | whether it increases conversion, reduces returns or creates other measurable nursery value `UNVALIDATED` |

## 4.1 Critical distinction

The economic market is **not** “people who value tree history.”

The economically eligible population is closer to:

> people who experience the job × are willing to use software × find general tools insufficient × experience enough incremental value × accept the capture burden × accept the business model.

Each term is currently unmeasured.

---

# 5. Segment economics

## 5.1 First / second tree

**Evidence:** immediate reassurance, simple memory and basic guidance are supported jobs.  
**Frequency risk:** acquisition is high-intent but naturally episodic.  
**Economic risk:** low collection complexity means generic tools may be sufficient; recurring subscription may arrive before recurring value is established.  
**Possible payer mismatch:** beginner may receive value while nursery/workshop/gift-giver captures part of the commercial benefit.

**Status:** economics `UNVALIDATED`.

## 5.2 Expanding hobbyist

**Evidence:** W1 repeatedly surfaces organization, retrieval, batching, memory pressure, growing collections, photos/history and cases of users moving away from spreadsheets or paying for collection features.

**W2 INFERENCE:** this is currently the strongest consumer segment *to investigate economically*, not a chosen target. The hypothesis is that collection complexity can create a threshold after which general tools stop being good enough.

Key unknown:

> At what collection size / workflow complexity does dedicated software begin to produce enough incremental value to justify switching and payment?

**Status:** threshold `UNVALIDATED`.

## 5.3 Experienced / long-horizon grower

Evidence splits:

- detailed record value and multi-year paid use exist;
- some experienced growers prefer Excel, photo folders or custom workflows;
- generic advice is less valuable;
- continuity/export stakes increase.

**W2 INFERENCE:** possible `high value / high switching resistance` segment.

**Status:** WTP, prevalence and ceiling `UNVALIDATED`.

## 5.4 Low-software / analog

Observed preferences include paper, notebooks, photos, metadata and memory.

This group must be explicitly excluded from software TAM unless evidence shows conversion is realistic.

**Status:** segment existence `SUPPORTED SIGNAL`; prevalence `UNVALIDATED`.

## 5.5 Teacher / practitioner / organization

The canonical portfolio treats P3 as a possible economic ceiling, but W1 does not validate professional payer economics.

Unknowns:

- frequency of coordination pain;
- current workflow and substitute quality;
- number of economically reachable practitioners/teachers;
- WTP;
- sales cycle;
- support burden;
- whether practitioner workflows require the P1 substrate first.

**Status:** economics `UNVALIDATED`.

---

# 6. Current monetization-model census

This is a census of **observed market structures**, not a recommendation and not proof of success.

## 6.1 Consumer freemium → subscription by collection limit

**Bonsai Care App / Bonsai Empire** — current first-party App Store and Bonsai Empire material:
- free up to five trees;
- paid unlocks unlimited trees and Pro features;
- current US App Store: $2.99/month or $29.99/year.

**Economic shape:** free trial of the job; monetization activates as collection size or feature need grows.

**Evidence limitation:** no public conversion, renewal, ARPU or retention distribution.

## 6.2 Limited free inventory → premium subscription

**Appy Bonsai**:
- limited free inventory;
- Premium removes limits and adds exclusive tools;
- current US App Store: $2.49/month, $29.99/year;
- developer announced a Premium price reduction on 4 Aug 2026 citing user feedback and accessibility.

**Economic read:** current provider behavior is consistent with price sensitivity, but elasticity and economic impact are unknown.

## 6.3 Social + diary subscription

**BonsaiDo**:
- free download + in-app subscriptions;
- US App Store currently shows $4.99/month, $6.49/3 months, $18.49/year.

W1 independently observed a reviewer describing more than two years of paid use.

**Economic read:** paid persistence exists in this shape; prevalence and unit economics remain unknown.

## 6.4 Pure one-time record utility

**Bonsai Album**:
- current US App Store one-time purchase: $7.99;
- no care content; focuses on collection records, photos, events, backups and CSV/export;
- has shipped since 2011.

**Economic significance:** one-time purchase is a real, durable market precedent for record-only value.

**Limitation:** longevity of the listing and ratings do not establish developer economics or active usage.

## 6.5 Subscription-required journal/community

**Jooni**:
- subscription required to use the journal/community functionality;
- current App Store: $1.99/month or $19.99/year.

**Economic read:** demonstrates a low-price subscription shape without a broad free utility tier.

## 6.6 Freemium record + premium collaboration/AI + zero-fee marketplace

**Yoi Bonsai**:
- free: up to 10 trees, photos/logs/reminders, browse marketplace, message sellers, buy trees;
- Premium: unlimited trees, AI summaries/listing copy, marketplace listing, sharing/transfer, broader messaging;
- current German/European App Store: €5.99/month or €59.99/year;
- states marketplace sellers keep 100%; no marketplace transaction fee;
- explicitly promises one-tap export and 90 days' notice/final export if discontinued.

**Economic significance:** an observed attempt to monetize collection/collaboration rather than transactions, while treating data continuity as part of the commercial promise.

**Limitation:** developer explicitly describes the project as a community service rather than profit-maximizing; its model cannot be treated as evidence of venture economics.

## 6.7 Freemium → hobbyist → professional/nursery tiers + B2B2C distribution

**Bonsai Tracker**:
- Free: up to five trees;
- Pro: current site $4.99/month, unlimited trees plus AI/community/export;
- Premium: current site $9.99/month, positioned for pros/nurseries/verified growers;
- separate nursery partner program offers customers a free year of Pro with a bonsai purchase and discounts for nursery staff/business use.

**Economic significance:** current observed attempt to separate consumer payer tiers and to move part of acquisition/payment economics toward a nursery relationship.

**Limitation:** no evidence yet that the nursery program improves conversion, margin, returns, retention or customer value.

## 6.8 Lifetime + subscription split

**Komorebi**:
- free up to eight plants;
- lifetime one-time purchase unlocks unlimited plants/inventory and weather alerts;
- subscription adds advanced guides and unlimited diary photos;
- current US App Store lists $24.99 lifetime, $14.99/year, $1.99/month (with a discounted lifetime offer also present).

**Economic significance:** separates relatively durable local utility from services/content that can justify ongoing revenue. This is a particularly relevant architecture for the long-horizon economics paradox.

**Limitation:** does not prove retention, margin or preferred payment structure.

## 6.9 Tracking bundled into high-authority education membership

**Bonsai Mirai**:
- Basic $9.99/month;
- Standard $17.99/month;
- Pro $29.99/month;
- tracking capacity scales roughly 10 → 50 → 100 trees alongside video education, expert instruction, calendars, Q&A/community and advanced content.

**Economic significance:** much higher consumer ARPU is observed when tracking is *not the sole product* but one component of an authority/education bundle.

**Important limitation:** this is not evidence that tracking itself supports those prices. The bundle contains scarce expert authority and media/content value.

## 6.10 Free club/community product → possible future transaction fees

**Tiny Tree Club**:
- currently free to verified club members;
- explicitly states core app will remain free;
- says optional marketplace transaction fees may be introduced later.

**Economic significance:** current experiment in using a trusted club network as the distribution/identity substrate while deferring monetization.

**Limitation:** no evidence of transaction willingness or network economics.

---

# 7. What the market census changes

## 7.1 `OBSERVED`: there is no single accepted business model

Current competitors use:

- one-time purchase;
- freemium by tree count;
- low-price subscription;
- mandatory subscription;
- premium collaboration/AI subscription;
- lifetime + subscription hybrid;
- content/membership bundling;
- free marketplace;
- free club utility with future transaction-fee possibility;
- nursery partner / B2B2C subsidy.

This diversity is evidence of experimentation, not market validation.

## 7.2 `SUPPORTED SIGNAL`: low standalone tracker pricing faces structural pressure

Signals:

- multiple current tracker subscriptions cluster in low single-digit monthly pricing;
- a current provider publicly reduced Premium pricing after feedback;
- W1 contains explicit subscription rejection and comparison with free tools;
- one-time products remain credible substitutes.

**Do not infer:** a correct price or a market-wide price ceiling.

## 7.3 `SUPPORTED SIGNAL`: higher ARPU appears where additional scarce value exists

Bonsai Mirai supports materially higher membership pricing, but combines tracking with practitioner authority, education, content and community.

W2 interpretation:

> The economic ceiling of “recordkeeping alone” may be materially lower than the ceiling of a broader high-authority value bundle.

This is a hypothesis about value composition, not a recommendation to build content/advice.

## 7.4 `OBSERVED`: competitors are already testing payer displacement

The Bonsai Tracker nursery program explicitly moves acquisition economics toward the point of tree purchase.

This makes nursery/workshop subsidy a legitimate W2 hypothesis, but not a proven channel or model.

---

# 8. Candidate economic archetypes to carry forward

These are not product choices. They are economic structures that W2 must test.

## A. Consumer utility subscription

**Payer:** grower  
**Required behavior:** recurring value must exceed recurring payment + capture burden.  
**Possible jobs:** collection management, retrieval, reminders, progression.  
**Failure condition:** history is valuable but recurring monthly utility is not.

## B. Consumer durable utility / one-time purchase

**Payer:** grower  
**Required behavior:** user values durable organization/history enough to pay upfront.  
**Economic advantage:** aligns with subscription resistance.  
**Economic liability:** finite revenue against long-term maintenance/storage/support.

## C. Hybrid durable core + recurring services

**Payer:** grower  
**Shape:** permanent/core record utility separated from genuinely recurring cost/value such as storage, AI, live services, advanced collaboration or content.  
**Evidence:** current hybrid precedent exists.  
**Failure condition:** recurring layer is artificial rather than independently valuable.

## D. B2B2C subsidy at acquisition

**Recipient:** beginner  
**Payer/subsidizer:** nursery, workshop, retailer, sponsor or product margin.  
**Required business outcome:** higher conversion, lower return/failure anxiety, loyalty, repeat purchase or reduced staff burden.  
**Evidence:** current competitor attempt exists.  
**Failure condition:** partner receives no measurable commercial benefit.

## E. Professional workflow SaaS

**Recipient:** teacher/practitioner + students  
**Payer:** teacher, school, club, organization.  
**Potential economic advantage:** higher payer value and recurring workflow.  
**Risk:** small payer universe, sales/support burden, workflow substitutes.  
**Status:** `UNVALIDATED`.

## F. Transaction/event monetization

**Recipient:** buyer/seller/current/future steward  
**Payer:** seller, buyer, transfer party or institution.  
**Possible moments:** sale, transfer, attestation, exhibition, insurance, provenance handoff.  
**Potential advantage:** payment aligned to high-value moments.  
**Risk:** low frequency and weak evidence of willingness to pay; current marketplace entrants may charge zero.

## G. Free utility with downstream commerce

**Recipient:** grower  
**Payer:** commerce margin, partner, sponsorship or related product business.  
**Potential advantage:** removes software payment barrier.  
**Risk:** economics may force the product to optimize transactions instead of the record; requires meaningful commerce volume.

## H. Authority/content bundle

**Recipient/payer:** grower  
**Value:** record + trusted education/expertise/community.  
**Observed precedent:** Mirai.  
**Risk:** authority is the project's explicit constraint and cannot be manufactured.  
**Status for this venture:** not an assumed option; only economically relevant as a comparator.

---

# 9. Cost structure map

No false precision is introduced. Cost intensity is directional.

| Capability / model | Likely cost character | Why it can become material |
|---|---|---|
| Basic record metadata | low variable / ongoing fixed | database, backups, migration, support |
| Photo-heavy longitudinal history | medium and cumulative | storage, bandwidth, backups, originals, export |
| Decades-long custody promise | structurally long-lived | preservation, migrations, recovery, provider continuity |
| Search / retrieval / collection management | low–medium | indexing, engineering, support; low marginal compute |
| AI text assistance | variable medium | inference, guardrails, monitoring |
| Vision/material assessment | potentially medium–high | inference + benchmark/quality work; capability unvalidated |
| Decision support / care advice | high governance burden | practitioner review, liability/trust, content maintenance |
| Comparable Journey retrieval | medium | data normalization, matching, corpus quality, search infrastructure |
| Community | medium–high operations | moderation, abuse, support, cold start, content governance |
| Marketplace | medium–high operations | fraud, disputes, payments, shipping/regulatory edges if handled |
| Provenance evidence | medium | evidence storage, permissions, audit/history |
| Practitioner attestation | potentially high human cost | verification, incentives, disputes, reputation risk |
| Teacher/workbench SaaS | medium commercial cost | onboarding, support, B2B sales, workflow customization |
| Nursery B2B2C | medium commercial cost | partner acquisition, codes/subsidy, account ops, attribution |

**W2 implication:** gross margin cannot be evaluated from hosting alone. Human/governance/commercial operations may dominate several high-ceiling models.

---

# 10. Economic hypotheses — W2 register v0.1

| ID | Hypothesis | Status | Evidence needed |
|---|---|---|---|
| E1 | A collection-complexity threshold exists where dedicated software beats general tools | `UNVALIDATED` | collection size + current workflow + switching behavior + WTP |
| E2 | Immediate utility can arrive early enough to compensate delayed history payoff | `UNVALIDATED` | time-to-first-value study / prototype behavior |
| E3 | At least one consumer segment receives recurring value sufficient for recurring payment | `UNVALIDATED` | renewal behavior / WTP / retention |
| E4 | Export/data ownership materially increases commitment/adoption | `UNVALIDATED` | choice experiment + onboarding behavior |
| E5 | A non-subscription or hybrid model reduces rejection without destroying provider economics | `UNVALIDATED` | choice/WTP + cost model |
| E6 | Experienced growers' higher value intensity offsets smaller segment and higher switching resistance | `UNVALIDATED` | segment WTP + adoption + support complexity |
| E7 | Teacher/practitioner workflow creates enough recurring professional value for a higher-value payer | `UNVALIDATED` | workflow interviews/artifacts + payment test |
| E8 | Nursery/workshop/club has a measurable business outcome that supports subsidy/payment | `UNVALIDATED` | partner economics test |
| E9 | Provenance creates monetizable value at transfer/sale/inheritance/institutional moments | `UNVALIDATED` | transaction/handoff evidence + WTP |
| E10 | Comparable Journey produces recurring utility before advisory authority exists | `UNVALIDATED` | curated prototype behavior + repeat use |
| E11 | The economically eligible segment remains large enough after excluding good-enough substitute users | `UNVALIDATED` | market segmentation/prevalence |
| E12 | Long-term record custody can be funded sustainably under a trust-compatible business model | `UNVALIDATED` | storage/support model + payer duration + export/custody architecture assumptions |
| E13 | Higher ARPU requires value beyond recordkeeping alone | `SUPPORTED SIGNAL`, not proven | cross-model WTP decomposition |
| E14 | Price sensitivity is material in standalone tracking | `SUPPORTED SIGNAL` | structured pricing/choice tests; current provider actions are not enough |

---

# 11. Economic ceiling model — formula before numbers

Do not use total bonsai audience as TAM.

A defensible software-paying population must be built through filters:

`hobby population`

× `job prevalence`

× `software willingness`

× `dedicated-tool advantage over substitutes`

× `activation/completion`

× `payer conversion`

× `payer retention / repeat frequency`.

For a given payer type:

`Annual contribution ≈ active paying units × annual revenue per paying unit – variable service cost – partner/payment cost – direct support/ops burden – acquisition cost amortization`.

Only after those variables have evidence should W2 produce a market ceiling.

### Success ambition scenarios

**Sustainable small business**  
Needs to cover direct service costs, a modest operating layer, continuity reserve and owner/founder compensation appropriate to a small business.

**Founder full-time business**  
Needs to cover a full founder salary, ongoing development/support, replacement/churn acquisition, compliance/payment overhead and reinvestment without depending indefinitely on unpaid founder labor.

**Venture-scale opportunity**  
Needs a sufficiently large economic ceiling and repeatable growth engine to support material team costs and growth capital. A product can be a strong niche business and still fail this ambition.

Numeric thresholds are intentionally not frozen in v0.1 because the current evidence does not yet support the eligible population, payer conversion or retention variables.

---

# 12. Preliminary kill structures

These are logical kill conditions; numeric cutoffs still require evidence.

**K1 — Substitute ceiling**  
No segment demonstrates incremental value materially above general-purpose tools.

**K2 — Delayed-value trap**  
The dominant value is historical and delayed, while early/recurrent utility is insufficient to sustain capture or payment.

**K3 — Recurring-revenue mismatch**  
Ongoing service costs require recurring revenue, but recurring willingness to pay is not present in a sufficiently large segment.

**K4 — Lifetime insolvency**  
One-time/lifetime payment is preferred but cannot fund the duration of custody/support promised.

**K5 — Professional-market compression**  
Professional WTP exists but the reachable payer universe is too small or sales/support cost consumes the advantage.

**K6 — Authority-dependent economics**  
Positive economics require unvalidated high-authority advice, practitioner verification or other expensive layers before the foundational behavior is proven.

**K7 — TAM inflation**  
The only route to a venture-scale story requires generalizing from bonsai to adjacent plant/gardening markets without evidence.

**K8 — Payer/value mismatch**  
The actor receiving the value will not pay and the proposed subsidizing actor receives no measurable business benefit.

**K9 — Continuity contradiction**  
The business model that maximizes short-term revenue materially undermines the trust/continuity conditions required for long-term adoption.

---

# 13. Proposed canon amendment

## `PROPOSED CANON AMENDMENT W2-001`

**Location:** `CURRENT-EVIDENCE-AND-DECISIONS.md` §7, P3 note.  
**Current wording:** “Best economics; also a source of attestations…”  
**Problem:** W1 does not validate professional payer economics, and the W1 handoff explicitly leaves product selection, WTP, market size and economics `UNVALIDATED`. The current wording can be read as a finding rather than a pre-W1 argument.  
**Proposed wording:**

> “Candidate ceiling; potentially higher-value professional payer and a possible source of attestations. Economics remain `UNVALIDATED`.”

**Reason:** evidence-discipline correction, not a rejection of P3.

No other canon change is proposed in v0.1.

---

# 14. Evidence W2 now needs

## Track A — executable without participant access

1. **Monetization census expansion** across the registry, coding:
   - free / paid / freemium / lifetime / subscription / transaction / bundle / B2B2C;
   - payer;
   - free limits;
   - paid value unit;
   - portability/export;
   - service/custody obligations;
   - professional/partner surface.

2. **Economic substitute map** for general tools:
   - marginal perceived cost;
   - flexibility;
   - portability;
   - durability;
   - structural disadvantages.

3. **Cost-envelope model** by candidate economic archetype, without stack selection.

4. **Market-size uncertainty model** defining what evidence is required before a ceiling can be estimated.

5. **Professional/organization landscape** to estimate the plausible payer universe for teacher/practitioner/club/nursery models without assuming P3.

## Track B — participant or partner validation

1. WTP and payment-shape choice by segment.
2. Collection-complexity threshold.
3. Time to first differentiated value.
4. Renewal / continued payment behavior.
5. Export/portability effect on commitment.
6. Professional workflow value and payer budget.
7. Nursery/workshop business outcome from subsidy.
8. Provenance/transfer WTP.
9. Comparable Journey repeat utility.

---

# 15. Future reconciliation requirements

## W2 → W3

W3 must receive:

- which value is economically intense versus merely emotionally resonant;
- recipient versus payer;
- immediate versus cumulative value clock;
- whether continuity/export is an economic adoption condition;
- which trust promises create long-term service obligations;
- where the highest economic potential conflicts with the strongest narrative territory.

## W2 → W4

W4 must receive:

- payer type and expected value frequency;
- CAC/payback envelope once estimable;
- migration/capture burden before activation;
- acquisition moments tied to early economic value;
- actors with an actual economic incentive to distribute/subsidize;
- whether a growth loop improves retention/evidence or only acquisition;
- maximum rational acquisition/partner cost by payer type.

---

# 16. W2 current verdict after Block 1

### `OBSERVED`

- longitudinal record jobs exist;
- paid use exists;
- long-term paid use exists in individual cases;
- one-time purchase, subscriptions, freemium, hybrid lifetime/subscription, bundled memberships and B2B2C partner models are all currently observed in the market;
- free/general tools compete directly;
- current providers are still experimenting with economic structure;
- at least one provider reduced subscription pricing in response to feedback;
- at least one competitor is attempting a nursery-subsidized distribution model.

### `SUPPORTED SIGNAL`

- standalone recordkeeping appears to face a relatively low willingness-to-pay environment compared with authority/content bundles;
- price sensitivity matters;
- expanding-collection complexity may be the strongest consumer economic trigger worth testing;
- continuity/data ownership can be part of the economic proposition rather than a compliance feature;
- a hybrid model may better match durable record value plus genuinely recurring services, but this is not validated.

### `UNVALIDATED`

- economically eligible population;
- payer conversion;
- retention/renewal;
- WTP distribution;
- ARPU/LTV;
- cost-to-serve at scale;
- professional payer economics;
- partner subsidy economics;
- provenance monetization;
- Comparable Journey monetization;
- small-business, founder-full-time or venture-scale ceiling.

## Current W2 conclusion

> **There is enough evidence to justify continued economic investigation, but not enough to establish that a viable business exists. The most important shift is that W2 must size the market after subtracting good-enough substitute users, not before.**

The next W2 block should therefore build the **economically eligible segment model + cost envelopes + first ceiling scenarios**, while keeping all payer-conversion and retention inputs explicit as assumptions until evidence exists.

---

## Current web evidence consulted for the model census (3 Sep 2026)

First-party or storefront material checked for:

- Bonsai Care App / Bonsai Empire
- Appy Bonsai
- BonsaiDo
- Bonsai Album
- Jooni
- Yoi Bonsai
- Bonsai Tracker + nursery partner program
- Komorebi
- Bonsai Mirai
- Tiny Tree Club

Current public prices/models are observational snapshots and may change. They are used only to classify economic structures, not to set Bonsai venture pricing.

# 17. Block 2 · Economically eligible segment model

W2 should not estimate TAM by starting from the number of people who practice bonsai. The monetizable population is filtered several times before payment is even possible.

## 17.1 Economically eligible base

Working model:

`Bonsai participants`

× `relevant job exists`

× `software willingness`

× `general-tool inadequacy`

× `dedicated-tool incremental value`

× `activation / migration completion`

× `payer conversion`

× `retention / repeat payment`.

Every factor is currently uncertain. Therefore:

> **The total hobby population is not a useful economic ceiling until the substitute and software-willingness filters are measured.**

## 17.2 Segment filter logic

### First / second tree

Potentially large acquisition surface, but monetizable eligibility may collapse because:

- low collection complexity;
- limited historical value at start;
- high availability of free advice and generic reminders;
- uncertain recurring frequency.

Possible economic rescue mechanisms, still unvalidated:

- immediate safety/reassurance value;
- third-party subsidy at purchase/workshop;
- conversion into a longer-lived record relationship.

### Expanding hobbyist

Potentially stronger eligibility because:

- memory pressure rises;
- collection organization becomes a recurring job;
- spreadsheet/notes/photo fragmentation can become costly;
- progression history has had time to accrue.

Critical variable:

`collection-complexity threshold`.

This should be measured in trees, interventions, seasonal tasks and tool fragmentation — not trees alone.

### Experienced grower

Potentially high value, but eligibility may fall because:

- sophisticated self-built workflows already exist;
- switching costs are higher;
- trust/continuity standards are higher;
- generic care/advice adds less value.

### Professional / organization

Smaller universe, potentially higher annual contribution per payer.

Eligibility depends less on “bonsai interest” and more on:

- repeated administrative/teaching workflow;
- number of students/trees/cohorts;
- time saved or revenue enabled;
- budget owner;
- support and onboarding cost.

---

# 18. Reverse ceiling scenarios

The current evidence does not support payer conversion or market size. W2 therefore models required payer counts from the economic outcome backwards.

## 18.1 Scenario anchors — not forecasts

These are **planning scenarios**, not canonical success definitions.

- **Sustainable small business:** €75k annual contribution after direct variable service costs, before broader taxes/owner-specific structure.
- **Founder full-time business:** €200k annual contribution, intended to support full-time founder compensation plus continued development/support and a modest reinvestment buffer.
- **Larger venture opportunity:** €3m annual contribution, used only as an order-of-magnitude test for whether the opportunity could plausibly support a material team and growth investment.

Different founders/investors may define these differently. W2 uses them to expose scale requirements, not to declare success.

## 18.2 Active paying units required

| Annual contribution per active payer | €75k small business | €200k founder full-time | €3m larger venture |
|---:|---:|---:|---:|
| €20 | 3,750 | 10,000 | 150,000 |
| €40 | 1,875 | 5,000 | 75,000 |
| €75 | 1,000 | 2,667 | 40,000 |
| €150 | 500 | 1,333 | 20,000 |
| €300 | 250 | 667 | 10,000 |
| €600 | 125 | 333 | 5,000 |

**Interpretation:**

- low-contribution consumer models require thousands of simultaneous/renewing payers even for a founder-scale business;
- higher-value professional/partner models can support the same outcome with far fewer payers, but may carry materially higher sales and support cost;
- venture-scale economics become demanding very quickly if annual contribution per payer remains at standalone-tracker levels.

This is arithmetic, not evidence that any payer count is achievable.

## 18.3 Comparison with observed distribution

Canonical W1 evidence observes at least four Android products in the 10K+ install bracket. Cumulative installs are not active users and not paying users.

Therefore W2 can only state:

> `SUPPORTED SIGNAL` — if Bonsai depends on low annual contribution per consumer payer, the required paying base for a large venture could be high relative to the distribution scale currently visible in the category.

It cannot state that the ceiling fails. Web-first usage, active-user counts, total category installs and payer conversion remain unknown.

---

# 19. Cost-envelope comparison by economic archetype

Directional only. `Low / Medium / High` describes the likely materiality of costs if the model scales.

| Archetype | Variable digital cost | Human/ops burden | Acquisition/sales burden | Long-horizon liability | Revenue frequency fit | Preliminary economic risk |
|---|---|---|---|---|---|---|
| Consumer record subscription | Low–Medium | Medium | Medium–High | High | must prove recurring value | substitute pressure + churn |
| One-time durable utility | Low–Medium | Medium | High replacement acquisition | **High** | weak after initial sale | finite revenue vs long custody |
| Hybrid durable core + recurring services | Medium | Medium | Medium | Medium–High | potentially better matched | added complexity; recurring layer must be real |
| B2B2C nursery subsidy | Medium | Medium | High partner sales | Medium | purchase/event based | partner ROI must be measurable |
| Professional workflow SaaS | Low–Medium | Medium–High | **High** | Medium | recurring workflow plausible | small payer universe + sales/support |
| Transaction / provenance event | Low–Medium | Medium–High if verification/disputes | Medium | Medium | episodic | low frequency / uncertain take rate |
| Marketplace / commerce cross-subsidy | Medium–High | **High** | Medium–High | Low–Medium for record, higher for transaction | transaction based | fraud, disputes, operational drift |
| Authority/content bundle | Medium | **High** content/practitioner | Medium | Medium | recurring membership | authority dependency conflicts with venture constraint |

## 19.1 Critical unit-economic distinction

A high revenue-per-payer model is not automatically better.

Professional, marketplace, provenance and authority models can add:

- human verification;
- sales cycles;
- partner management;
- moderation;
- disputes;
- practitioner compensation;
- content governance.

The correct comparison is **annual contribution per payer after model-specific direct burdens**, not sticker price.

---

# 20. Market-size uncertainty analysis v0.1

No defensible absolute market size exists yet for W2.

## 20.1 Existing proxies and why they cannot be combined naively

- App installs: distribution, not active use or unique growers.
- App ratings/reviews: comparative storefront signal, not user count.
- Reddit/forum membership: audience/community reach, not software willingness or payer population.
- Course purchasers: willingness to pay for education, not tracking.
- Club membership: engaged hobbyist subset, selection-biased.
- Nursery sales: purchase volume, not persistent recordkeeping.
- Social-media followers: attention, not economic demand.

Adding them together would double-count heavily and manufacture a market.

## 20.2 Evidence needed before a ceiling estimate

W2 needs at least:

1. plausible hobbyist base by geography from credible associations/retail/category sources;
2. record-job prevalence or a defensible proxy;
3. software willingness by segment;
4. dedicated-tool substitution rate versus Excel/Photos/notes/paper;
5. collection-size distribution;
6. payer conversion under a clearly defined value proposition;
7. retention / renewal;
8. professional/organization payer counts if those models remain live.

## 20.3 Market sizing rule

> No market-size figure will be called TAM unless it is already filtered to the payer/job context being modeled.

A broad “global bonsai market” number is irrelevant to software economics unless linked to the specific payer behavior.

---

# 21. W2 ranking of economic uncertainties — not products

W2 currently ranks the uncertainties by ability to kill the venture:

1. **E11 — economically eligible segment size after substitute filtering**
2. **E3 — recurring value / payment durability**
3. **E2 — time to first differentiated value**
4. **E12 — long-term custody economics**
5. **E1 — collection-complexity threshold**
6. **E7/E8 — professional or third-party payer economics**
7. **E10 — Comparable Journey economic value**
8. **E9 — provenance monetization**

This order is about economic falsification power, not product priority.

---

# 22. Block 2 current conclusion

The reverse-ceiling analysis exposes a fundamental strategic distinction:

> **A low-price consumer record business and a higher-value professional/partner business may both be viable, but they require radically different reachable payer counts, cost structures and growth systems.**

W2 therefore should not ask whether “bonsai software” is viable in the abstract.

It must test each payer architecture separately.

The strongest next evidence tasks are:

1. estimate the collection-complexity / substitute threshold;
2. map the professional and organizational payer universe without assuming P3;
3. model long-horizon record cost obligations under one-time, subscription and hybrid structures;
4. construct payer-count ceiling scenarios once the eligible-segment filters have plausible ranges.


---

# 23. Block 3 · Collection complexity and substitute threshold

W1 supports the existence of a transition from “memory is enough” or “general tools are enough” toward more structured collection management. It does **not** support a numeric tree-count threshold, and the evidence is explicitly non-monotonic.

## 23.1 Observed boundary cases

`OBSERVED` W1 cases include:

- a grower planning to use a spreadsheet for a growing collection who instead adopts a dedicated app and values photo progression;
- a Bonsai Album user reporting that the interface becomes restrictive beyond roughly **20–30 trees** because retrieval becomes a long alphabetical thumbnail list without folders;
- a Bonsai Care App user reporting active tracking of roughly **45 trees** and asking for richer timestamped notes;
- a grower with roughly **80 trees and 30 years of experience** who sees little value in reminders and explicitly rejects recurring subscription payment;
- a grower saying they would move **100% of their collection** to a dedicated app only if filtering, custom fields, image-inclusive export and web access existed;
- an explicit exit case in which the amount of data entry became tedious with **dozens of trees in different development stages**;
- experienced users who keep the record job but revert from dedicated software to Excel, photo folders or Lightroom metadata.

These are conditional examples, not prevalence estimates.

## 23.2 W2 conclusion: tree count is not the threshold

The naïve hypothesis:

> “More trees → more willingness to pay for dedicated software”

is not supported.

The better working model is:

> **Collection complexity increases both the value of structure and the cost of structure.**

More trees can increase:

- memory pressure;
- retrieval needs;
- batching value;
- seasonal workload;
- photo-history value;
- need for sorting and filtering.

But the same growth can also increase:

- migration cost;
- repeated capture effort;
- need for customization;
- sunk cost in an existing spreadsheet/photo system;
- support expectations;
- distrust of platform lock-in.

Experience adds another variable: a grower can have many trees while receiving little value from generic reminders or care guidance.

### W2 hypothesis revision

**E1 v0.1:**  
“A collection-complexity threshold exists where dedicated software beats general tools.”

**E1 v0.2:**  
> **A workflow-complexity threshold may exist where the cost of fragmentation in general tools exceeds the combined switching, capture, payment and continuity cost of dedicated software. Tree count is only one input.**

Status remains `UNVALIDATED`.

## 23.3 Dimensions of workflow complexity

Future validation should measure at least:

1. number of living subjects / trees;
2. species and development-stage heterogeneity;
3. number and frequency of interventions;
4. number of recurring seasonal tasks;
5. photo volume and comparison behavior;
6. number of separate tools currently used;
7. need for batch actions;
8. retrieval frequency (“when did I repot / wire / fertilize?”);
9. multi-device or multi-person access;
10. transfer / teacher / practitioner involvement;
11. maturity of the current workaround and migration cost.

The economically relevant threshold is reached only when:

`fragmentation + memory + retrieval cost`

becomes greater than:

`migration + capture + payment + continuity risk`.

No coefficient is currently measured.

---

# 24. Professional and organizational payer universe

W2 investigated whether the professional/organizational surface currently provides evidence for a higher-value payer. The answer is narrower than the earlier project argument suggested.

## 24.1 What is actually observed

### Teacher / student collaboration

Yoi Bonsai currently advertises real-time sharing between students and teachers, tree-history transfer and collaboration.

**What this proves:** professional/teaching collaboration is a product surface being attempted.

**What it does not prove:** a teacher or school is willing to pay for a dedicated workbench.

### Club-based product

Tiny Tree Club is currently free to join for members of a participating club and launched around a verified local-club context.

**What this proves:** a club can serve as identity/distribution substrate.

**What it does not prove:** clubs will buy SaaS.

### Nursery partnership

Bonsai Tracker currently offers a nursery partner program in which:

- the nursery can join with **no contract and no cost**;
- buyers receive one year of Pro;
- staff receive discounted Pro;
- the nursery receives discounted Enterprise access.

This corrects an earlier W2 interpretation.

> **The observed model is vendor-funded acquisition / partner distribution with a possible discounted B2B upsell, not evidence of nursery-funded subsidy.**

Nursery willingness to pay remains `UNVALIDATED`.

### Vertically integrated education operator

Bonsai Mirai monetizes education, practitioner authority, content and community, while including tree tracking within membership tiers.

**What this proves:** a professional education operator can monetize a broader bonsai relationship and include tracking.

**What it does not prove:** an independent teacher/practitioner would buy a third-party workbench.

## 24.2 Public organization counts are not yet a usable TAM

Current public directories do not form a clean census.

Examples:

- Bonsai Clubs International states that its membership spans more than 70 countries/regions, while its current public directory displays 36 affiliated clubs;
- Bonsai Empire currently publishes an estimate of about 183 clubs/organizations founded in the United States, but the underlying directory contains legacy-looking entries and should not be treated as a current payer census;
- Bonsai Club Deutschland publishes regional/working-group structures, including a 2026 note that the NRW regional association contains 16 Arbeitskreise.

These observations establish that organized bonsai networks exist and are fragmented. They do not establish the number of economically reachable organizations.

## 24.3 Budget context: clubs may be economically modest

A current 2026 example, Badger Bonsai Society, charges annual dues of:

- $30 individual;
- $40 family;
- $20 student.

This is not a market average. It is an existence proof that at least some bonsai clubs operate with low per-member annual dues and therefore cannot automatically be treated like high-ARPA B2B SaaS buyers.

Current club/event evidence also shows that many educational activities are free to members or carry modest incremental fees.

**W2 INFERENCE:**

> Club value can be real while club software budget remains small.

A club tool would therefore need to prove one of:

- meaningful admin time savings;
- membership/revenue retention;
- event/workshop revenue;
- transaction revenue;
- sponsor/partner value;
- or another measurable economic outcome.

“Community is useful” is not enough.

## 24.4 Professional education spend does not equal software WTP

Current German bonsai training material includes a professional Bonsai-Lehrer course priced at €290 for a three-day course plus an annual enrolment fee.

This demonstrates willingness to pay for high-value practitioner education.

It does **not** transfer to willingness to pay for software.

This distinction matters because the project already knows authority and expert instruction can carry economic value. W2 must not attribute that value to a workbench without testing it.

## 24.5 Revised professional hypotheses

Split E7 into three tests:

### E7A · Workflow value
Teachers/practitioners have a repeated coordination, documentation or review job that a dedicated tool solves materially better than WhatsApp, photos, Drive, spreadsheets or course platforms.

`UNVALIDATED`

### E7B · Budget ownership
The teacher/practitioner/organization that receives the value controls a budget and will pay recurring money for it.

`UNVALIDATED`

### E7C · Reachable payer ceiling
The number of economically reachable professional/organizational payers is large enough, after sales and support cost, for the intended business ambition.

`UNVALIDATED`

Split E8 as well:

### E8A · Partner distribution
A nursery, workshop or club can credibly distribute the product at a relevant user moment.

`OBSERVED` as a market attempt; effectiveness `UNVALIDATED`.

### E8B · Partner payment
The partner receives enough measurable commercial benefit to subsidize or purchase access.

`UNVALIDATED`.

This prevents distribution evidence from being silently upgraded into payer evidence.

---

# 25. Long-horizon cost envelope

The goal here is not to choose infrastructure. It is to test whether long-lived records create a structurally impossible cloud-cost burden.

## 25.1 Current external cost benchmark

As of 3 September 2026, a current low-cost object-storage benchmark publicly lists **$0.015 per GB-month** for standard storage, plus request costs. Other providers use different storage, request, retrieval and egress structures.

This benchmark is used only for order-of-magnitude scenarios.

## 25.2 Ten-year photo-storage scenarios

All inputs below are `SCENARIO`, not observed user behavior.

Assume no image deletion and simple linear accumulation.

| Scenario | Trees | Photos / tree / year | Avg image | New storage / year | Storage after 10 years | Raw storage run-rate in year 10 | Approx. cumulative raw storage cost over 10 years* |
|---|---:|---:|---:|---:|---:|---:|---:|
| Light | 10 | 4 | 2 MB | 0.08 GB | 0.8 GB | $0.14 / yr | $0.79 |
| Medium | 30 | 8 | 2 MB | 0.48 GB | 4.8 GB | $0.86 / yr | $4.75 |
| Heavy | 80 | 12 | 3 MB | 2.88 GB | 28.8 GB | $5.18 / yr | $28.51 |
| Very heavy | 100 | 24 | 3 MB | 7.20 GB | 72.0 GB | $12.96 / yr | $71.28 |

\*Illustrative raw object storage at $0.015/GB-month only. Excludes database, requests, egress where applicable, backups, redundancy, image processing, support, observability, account services, export, migration, taxes and engineering.

## 25.3 Important result

For light and medium usage, **raw photo bytes alone do not appear to be the economic killer** under current commodity-storage pricing.

The long-horizon problem is broader:

- a cohort can stop paying while its data remains expected to persist;
- free users can accumulate storage;
- one-time purchasers can create long-lived obligations after revenue is exhausted;
- backups, recovery and export promises add obligations beyond primary storage;
- operating the service, maintaining apps, migrations and support continues even if storage is cheap;
- heavy photo users create materially different economics from light users.

Therefore the Long-Horizon Economics Paradox is refined:

> **The structural risk is not simply “storage gets expensive.” It is duration mismatch between revenue and service obligation, especially when data custody outlives active payment.**

## 25.4 One-time economics implication

A low one-time purchase can be economically coherent if:

- most durable data remains user-owned/local;
- cloud custody is limited;
- ongoing services are separately funded;
- or support/continuity obligations are intentionally bounded.

A cloud-heavy unlimited-history promise funded by a single small upfront payment can become structurally negative for heavy users over a long horizon.

This is an economic constraint only. It is **not** a recommendation for local-first architecture or a particular product design.

## 25.5 Subscription economics implication

Recurring payment aligns better with recurring custody cost, but W1 observes subscription rejection.

Therefore subscription solves one provider problem while potentially creating a demand problem.

The question is not:

> “Is subscription better?”

It is:

> **Which recurring value, if any, is strong enough that recurring payment feels like payment for current utility rather than rent charged on the user's own historical record?**

That remains `UNVALIDATED`.

## 25.6 Distribution/payment fees

Current official platform terms show that platform fees can be material at low consumer price points:

- Apple's Small Business Program uses a 15% commission for qualifying developers;
- Google Play states 15% or less for most fee-paying developers, with current subscription/service-fee structures varying by market and program.

W2 uses **15% only as a scenario benchmark**, not as a universal fee.

At low annual consumer revenue per payer, store/payment take plus support can matter more to contribution than raw storage.

## 25.7 Cost-order implication

For a moderate record-only user, a plausible ranking of economic concern is:

1. acquisition / replacement of churned users;
2. continued product maintenance and support;
3. app-store/payment take;
4. long-term continuity/recovery obligation;
5. photo storage and requests.

For models adding advice, marketplace, moderation or practitioner verification, human/governance costs can move to the top.

This ranking is `INFERENCE`, not measured unit economics.

---

# 26. Economic architecture implications after Block 3

## Consumer record subscription

Still plausible as an archetype, but the strongest consumer hypothesis is no longer “large collection = pays.”

It is:

> workflow fragmentation becomes expensive enough that dedicated structure creates recurring current value.

`UNVALIDATED`.

## One-time durable utility

Market precedent remains real.

Block 3 sharpens the condition:

> one-time revenue is economically safer when ongoing provider custody/service obligations are bounded.

No product or storage architecture is selected.

## Hybrid durable core + recurring services

Remains structurally plausible because it can separate:

- value the user perceives as “my permanent record”;
- services with genuinely recurring provider cost/value.

But whether users understand, prefer or pay for this split is `UNVALIDATED`.

## Nursery / partner model

Corrected classification:

> **partner distribution + vendor-funded trial + possible B2B upsell**

rather than “nursery subsidy.”

Partner-funded economics remain `UNVALIDATED`.

## Professional workflow SaaS

Block 3 weakens any premature claim of superior economics.

There is current evidence of:

- teacher/student collaboration features;
- club distribution;
- education businesses;
- professional training spend.

There is still **no direct evidence in the current W2 source set of a bonsai teacher/practitioner paying for a dedicated third-party workflow SaaS.**

P3 therefore remains a candidate ceiling, not an economic leader.

---

# 27. W2 self-corrections and governance

## W2 correction C-001 · Nursery subsidy wording

Earlier W2 wording described Bonsai Tracker as evidence of “nursery-subsidized acquisition.”

That was too strong.

Current first-party material says joining is no-cost for the nursery, buyers receive a free year of Pro, and business/staff tiers are discounted.

Correct classification:

> `OBSERVED` vendor-funded partner acquisition / discounted B2B upsell attempt.

Nursery payment:

> `UNVALIDATED`.

This is a correction to W2 working analysis, not a canon amendment.

## `PROPOSED CANON AMENDMENT W2-001` remains active

The proposal to replace “Best economics” for P3 with:

> “Candidate ceiling; potentially higher-value professional payer and a possible source of attestations. Economics remain `UNVALIDATED`.”

is strengthened by Block 3.

No new material canon amendment is proposed at this stage.

---

# 28. Revised uncertainty ordering after Block 3

1. **E11 — economically eligible segment size after substitute filtering**
2. **E3 — recurring current value / payment durability**
3. **E2 — time to first differentiated value**
4. **E1 v0.2 — workflow-complexity threshold**
5. **E12 — duration mismatch in long-term custody economics**
6. **E7A/B/C — professional workflow value, budget ownership and reachable payer ceiling**
7. **E8B — actual partner payment / subsidy economics**
8. **E10 — Comparable Journey economic value**
9. **E9 — provenance monetization**

Block 3 lowers raw storage cost as a primary existential concern for ordinary record usage, while preserving long-horizon continuity as a business-model risk.

---

# 29. Evidence gates for the next W2 block

## Gate A · Consumer substitute threshold

Recruit / observe across deliberately different workflow bands, not just experience labels:

- 1–5 trees;
- 6–20;
- 21–50;
- 51+;

and separately capture:

- number of tools used;
- event frequency;
- photo volume;
- retrieval tasks;
- current-system satisfaction;
- migration willingness;
- payment choice.

The bands are sampling scaffolding, not predicted thresholds.

**Primary economic endpoint:**

> Does the user choose a dedicated workflow over their existing system when both migration effort and payment are explicit?

## Gate B · Professional payer

For teachers/practitioners/clubs:

1. show the existing workflow, not desired features;
2. quantify recurring admin/review time;
3. identify who controls payment;
4. test a real paid commitment or budget allocation;
5. measure onboarding/support expected;
6. separate “useful for students” from “I would pay.”

## Gate C · Partner economics

For nurseries/workshops:

Test measurable business outcomes:

- purchase conversion;
- staff explanation time;
- returns/complaints;
- repeat purchase;
- workshop upsell;
- customer re-engagement.

Only if a business outcome changes should partner payment enter a ceiling model.

## Gate D · Long-horizon model

For every monetization archetype carried forward, model:

`net revenue duration`

against:

`data/service obligation duration`.

A model that relies on users paying for three months while implicitly promising ten years of hosted history must show how the remaining obligation is funded.

---

# 30. Block 3 verdict

### `OBSERVED`

- collection-scale pain exists;
- dedicated-app value can persist at large collection sizes;
- large-collection users can also reject dedicated subscription value;
- professional/teacher collaboration features exist;
- club-based and nursery-partner distribution experiments exist;
- a current nursery program does not demonstrate nursery payment;
- current club dues can be modest;
- commodity photo storage can be cheap relative to subscription revenue in light/moderate scenarios.

### `SUPPORTED SIGNAL`

- workflow complexity, not tree count alone, is the more useful consumer economic variable;
- organization/teacher economics may be constrained more by payer count, budget and sales/support than by hosting;
- raw storage is unlikely to be the dominant cost for ordinary record use, while long-lived service continuity can still be structurally important;
- professional higher-ARPA economics cannot be assumed from the existence of professional bonsai spending.

### `UNVALIDATED`

- the actual workflow threshold;
- distribution of collection complexity;
- professional SaaS willingness to pay;
- club/nursery budget for software;
- partner ROI;
- paid retention;
- user-level photo/storage distribution;
- lifetime versus recurring contribution economics;
- any absolute market ceiling.

## Current W2 synthesis

> **The economic wedge, if one exists, is unlikely to be “people with many bonsai.” It is more likely to be a specific mismatch between workflow complexity and the user's current tools. Likewise, the professional ceiling cannot be rescued by merely changing the payer label from consumer to teacher or nursery. Each professional actor needs a demonstrable economic outcome and a real budget.**

And the long-horizon question becomes more precise:

> **Can the venture align revenue duration with the duration of the record promise without making the user feel they are renting access to their own history?**

That is now one of the highest-value questions for W2 validation.

---

# 31. Block 3 external source notes · checked 3 September 2026

Current first-party / official material used to extend the economic analysis:

- Bonsai Tracker — nursery partner program and current product positioning.
- Yoi Bonsai — student/teacher sharing and current marketplace/record positioning.
- Tiny Tree Club — current free club-based product positioning.
- Bonsai Mirai — current membership tiers and bundled tree-tracking capacity.
- Bonsai Clubs International — current club directory and international membership statements.
- Badger Bonsai Society — 2026 membership dues.
- Bonsai Club Deutschland — 2026 regional events / Arbeitskreis references and Bonsai-Lehrer training.
- Cloudflare R2 — current public object-storage benchmark.
- Apple Developer — Small Business Program commission.
- Google Play — current service-fee documentation.

External observations are used as dated economic evidence only. They do not override the Bonsai canon and do not establish market prevalence or product viability.


---

# 32. Block 4 · Economic Validation Matrix

W2 has now converted E1–E14 into falsifiable economic gates.

The full matrix is maintained as:

`W2-ECONOMIC-VALIDATION-MATRIX-v0.1.md`

Key governance conclusions:

1. `STRONG / MIXED / FAIL` are test outcomes only. Untested hypotheses remain canonical `UNVALIDATED`.
2. A monetization-model failure does not automatically kill the venture.
3. Economic tests must prefer real payment, switching and recurring workflow behavior over stated intent.
4. Market ceiling must be calculated only after substitute filtering.
5. Payer tests come after value/job tests.
6. A venture-level kill requires either no incremental value, no payer, ceiling below even S1, unfundable continuity, dependence on unvalidated future authority, or CAC/support consuming the attainable niche.
7. `PROPOSED CANON AMENDMENT W2-001` remains active: P3 should not be described as having “Best economics” before E7A/B/C pass.

The highest-priority economic gates are now:

`G1 Substitute superiority`
→ `G2 Time to differentiated current value`
→ `G7A/B Professional workflow + budget`
→ `G11 Economically eligible ceiling`
→ then `G3/G5/G14 Payment architecture`.

This sequencing deliberately prevents premature pricing optimization.


---

# 33. Block 5 · Economic Opportunity Ranking

The full prioritization is maintained in:

`W2-ECONOMIC-OPPORTUNITY-RANKING-v0.1.md`

W2 now ranks **validation effort**, not products.

## Priority A

1. **Collection workflow / organization / retrieval**
   - strongest observed job basis;
   - highest substitute pressure;
   - load-bearing test of dedicated consumer value.

2. **Teacher / practitioner workflow**
   - weaker current evidence;
   - highest leverage on payer identity and contribution ceiling;
   - must separately prove workflow, budget ownership and reachable payer count.

3. **Comparable Journey**
   - progression-as-learning is observed;
   - structured product value is unvalidated;
   - highest-priority non-authority mechanism for converting accumulated records into recurrent current value.

## Priority B

- Acquisition / first-tree companion;
- partner-funded / partner-value models;
- provenance / handoff / attestation economics.

Each should be tested only after its dependency or real event exists.

## Priority C

- progression/history as accumulated value;
- reminders/task memory;
- durability/export/ownership.

These currently function better as supporting economic layers than standalone business theses.

## Priority D

- authority-dependent Decision Intelligence;
- generic community feed;
- low-friction logging as differentiation.

Do not use these to rescue weak economics.

## Cross-front implication

The highest-ranked W2 opportunity is **not a chosen product**. The ranking says which economic uncertainty deserves validation because resolving it changes the shape of the venture.

`PROPOSED CANON AMENDMENT W2-001` remains active and is strengthened: P3 should remain “candidate ceiling / potentially higher-value payer,” not “Best economics,” until G7A/B/C pass.
