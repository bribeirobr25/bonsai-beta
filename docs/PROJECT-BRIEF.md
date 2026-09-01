# Bonsai product venture — project brief

**Status:** pre-validation. No product has been chosen, built, or launched.
**Purpose of this document:** give any reader — a collaborator, an advisor, or
an AI agent — a complete and honest picture of what is being considered and why,
with no prior context required.

This describes a **new venture**, not a revision of any existing product. A
previous codebase exists and contributes some raw inputs (§15), but it does not
shape the problem statement, the strategy, or any idea below. Read this document
on its own terms.

---

## 1. What is being considered

A software product for people who grow bonsai trees.

The category is real and growing — bonsai has been pulled into the
houseplant-and-mindfulness wave among urban millennials and Gen Z, sold through
e-commerce and amplified on social platforms. It has an active online
population: r/Bonsai alone has roughly 362,000 members, alongside a large
dedicated forum (Bonsai Nut) and a substantial paid-education market.

We are **not** considering a care encyclopedia, a species reference, or a
content site. Those are settled (§4). We are considering products that help a
grower make a **decision** about a specific tree, or that maintain a **record**
of one over time.

**Why this might be the moment.** Two things changed recently. The audience
grew and skewed younger and more urban, which is the demographic most willing
to adopt software for a hobby. And machine vision plus language models made it
newly cheap to deliver species-and-context-specific guidance at scale — the
thing the category has always lacked. Neither is a strong "why now" on its own;
together they are a reasonable one.

Nothing has been decided. The purpose of the current phase is to test the
behavioural assumptions underneath the candidates before building anything.

---

## 2. The problem

Bonsai care advice fails growers in a specific way: **it is generic when the
stakes are species-specific and time-specific.**

A tree does not die because its owner neglected it. It dies because they
watered a juniper like a ficus, moved an outdoor species indoors, repotted
outside the dormancy window, or applied a technique that works on conifers to
a species that rots rather than hardens. The mistakes are irreversible,
delayed in their consequences, and invisible to a beginner at the moment of
committing them.

Four distinct pains:

1. **"What did I actually buy?"** Trees are sold with a plastic label and no care sheet.
2. **"Generic advice doesn't fit my tree."** Temperature floors, dormancy needs and indoor tolerance vary enormously across species.
3. **"Is it safe to do this, to *this* tree, *now*?"** Timing is the highest-consequence variable in bonsai and the worst documented.
4. **"Am I ready for this species?"** Beginners cannot assess difficulty before buying, and choose trees that punish inexperience.

The stakes are meaningful but not extreme: trees cost roughly $20–150 for a
beginner, plus tools, and are frequently gifts — so failure carries sentimental
as well as financial weight. High enough pain to motivate action; not so high
that people will tolerate a bad product.

---

## 3. Who this is for — and who it is not

**Primary: the first- or second-tree owner.** Has just acquired a tree or is
about to. Needs species-specific answers now, and is afraid of killing it.
Motivated, uninformed, and the largest population in the hobby.

**Secondary: the expanding hobbyist.** Two to twenty trees. Choosing what to
add, comparing species before buying, and beginning to accumulate a collection
worth keeping track of.

**Tertiary: the inheritor.** Given a tree, or has kept one alive by guesswork
and wants to know what they actually have.

**Explicitly not for: professionals and competition growers.** The depth is not
there, there is no community or marketplace, and no progression tracking at the
standard they work to. Designing for them would compromise the primary audience
and still lose to Bonsai Mirai. If a product decision would serve experts at
beginners' expense, take the beginner.

**Also not for: people who want a houseplant.** Bonsai demands seasonal
attention. Someone looking for a low-maintenance green object is better served
elsewhere, and acquiring them produces churn.

---

## 4. Market reality

Verified against live sources, August 2026.

| Player | Holds |
|---|---|
| **Bonsai Empire** | 110+ expert-written species guides; a maintenance calendar; a care app (~$2.99/mo) with reminders keyed to species and local climate |
| **Bonsai Mirai** | Premium instruction from Ryan Neil at €9.99–29.99/mo, an academy, and an app with species-specific care calendars and tree tracking |
| **Bonsai4me** | Harry Harrington's two decades of practitioner authority |
| **Virginia Bonsai Society** | 110+ species in a filterable table (difficulty, indoor/outdoor, USDA zone) |
| **r/Bonsai, Bonsai Nut** | ~362k members; the free answer to any question |
| **Hotmart, ABC do Bonsai** | Portuguese-language bonsai courses that already sell — one with 288+ reviews and 81 lessons |

**What this closes:** the reference/content play. Breadth is not a
differentiator, structured species data is already published by at least one
society, and the incumbents pair their content with the credibility that makes
people act on it.

**What appears open:**

- **Contraindications by species.** No incumbent systematically publishes what *not* to do to a given species. Every guide is written affirmatively. For a beginner whose failure mode is confidently doing something irreversible, the prohibition is the more valuable half.
- **Maturity-gating.** "At what tree age does this technique become appropriate" is barely addressed anywhere.
- **Climate calibration.** Every incumbent calendar assumes northern-hemisphere temperate conditions. For a southern-hemisphere grower the timing is wrong by roughly six months; in the tropics it is largely meaningless.

---

## 5. The constraint that shapes everything

**The moat in this category is reputation, and it cannot be manufactured.**

Care advice is trust-critical — a reader follows it and a living thing survives
or does not. Authority here comes from demonstrated practice over years: Ryan
Neil's trees, Harry Harrington's twenty years, Bonsai Empire's expert network.
A new entrant cannot buy or engineer that, and better data structures are not a
substitute for it.

This single constraint sorts every idea below. It is the reason the content
play is closed, and the reason the most promising directions are ones where
**the operator is not the expert** — where users supply the substance and the
product supplies the system.

---

## 6. The organising insight

Sorted by whether an idea requires the operator to hold authority, the
candidates fall into four tiers:

| Tier | Type | Authority required? | Assessment |
|---|---|---|---|
| **1 — Library** | Content someone reads | Yes | Commoditised. Closed. |
| **2 — Decision** | Tells you what to do to a living tree | Yes | Genuinely unserved, and genuinely blocked — instructions that can kill something raise the credibility bar rather than lowering it. |
| **3 — Record** | You keep the ledger; users bring the facts | **No** | Unclaimed *and* authority-free. Value compounds over time, which is also the retention mechanism content can never have. |
| **4 — Network** | Borrows authority from teachers | **No** | Highest ceiling, hardest cold start — the audience already has homes. |

**Tier 3 is the sweet spot**, and Tier 2 becomes viable when built on top of it —
because an advisor whose authority derives from *outcomes at scale* needs no
reputation. "Eleven percent of people who repotted this species in this month
lost the tree" is a claim no incumbent can make and no credential is required
to make.

---

## 7. The idea portfolio

Fourteen candidates. Tier 1 is recorded for completeness and explicitly not
recommended.

### Tier 1 — Library *(closed)*

1. **Structured species reference** — filterable care data across many species. Parity with existing offerings; no wedge.
2. **Beginner section** — the most-served segment in the entire category. A feature, not a product.
3. **Budget guide** — how to do bonsai cheaply. Already published by incumbents.

### Tier 2 — Decision *(unserved, authority-dependent)*

4. **Go/no-go advisor** — "I have species X, at maturity Y, in month Z — is technique T safe right now?" The strongest unclaimed position. Blocked alone; viable on Tier 3.
5. **Climate-calibrated calendar** — timing resolved to the user's hemisphere and climate rather than assuming northern temperate. Attacks the incumbents where they are structurally weakest.
6. **Contradiction adjudicator** — the beginner's real problem is not missing advice but *conflicting* advice; five confident answers calibrated for five different climates. Adjudication, not information.
7. **Nursery-stock scout** — photograph a plant in a garden centre, get an assessment of its bonsai potential and a suggested first cut. Purchase-moment, high intent, naturally monetisable.

### Tier 3 — Record *(unclaimed and authority-free)*

8. **Tree biography / provenance** — a longitudinal record per tree: species, acquisition, work performed, photographs over time. A documented tree is worth more than an undocumented one when sold or inherited — the same logic as service history for a car. Logging is self-interested, which is the retention mechanism.
9. **Death registry** — a structured, anonymised record of what killed trees: species, climate, months owned, attributed cause. The hobby has enormous survivorship bias; every published account is a success story. This is proprietary data no incumbent holds, it addresses beginners' dominant fear, and it improves as it grows.

### Tier 4 — Network *(highest ceiling, hardest start)*

10. **Teacher's workbench** — tooling for instructors: assign a tree, track students across seasons, review photographs, correct mistakes before they become irreversible. A multi-season relationship that no forum and no course marketplace serves. Monetise the teacher, not the learner. Community forms around the tool, which is how cold-start problems are usually solved.
11. **Master-led communities** — platform for practitioners to run and monetise their own communities. Demand is proven; the obstacle is that the audience already has homes, and community platforms are winner-take-all.

### Parked

12. **Pre-bonsai material marketplace** — trading raw material between hobbyists. Facebook groups own this, and shipping live plants needs high trust.
13. **Estate service for orphaned collections** — mature collections are frequently stranded when an owner dies; clubs deal with this constantly. Real and emotionally charged, probably too small.
14. **Progression as a social object** — the hobby's native content unit is the before/after. Distribution is owned by Instagram and YouTube; folds into idea 8.

---

## 8. Three products, not fourteen

Most of the surviving ideas are components of one system, and the connections
are what make them work. Tier 2 cannot stand alone because it needs authority;
Tier 3 cannot advise anyone. Together, each solves the other's problem.

> **Naming note.** These are *products*, labelled P1–P3. The companion research
> brief labels *hypotheses* "Idea A" and "Idea B" — those are not the same
> scheme. Research Idea A maps to P1; research Idea B maps to the advisor
> component inside P1, not to P2.

**P1 · The system of record** *(core — build first)*
Ideas 8 + 9 + 4 + 5. Users log their trees. Outcomes, including deaths,
accumulate into data nobody else holds, which powers advice calibrated to
species, age, month and hemisphere. **The flywheel:** users log → outcomes
accrue → advice improves → logging becomes more valuable.

**P2 · The acquisition companion** *(funnel — feeds the core)*
Ideas 7 + 6 + 3. Meets people at the moment of purchase and delivers them into
the core product with a first tree already identified.

**P3 · The teaching layer** *(ceiling — needs the core first)*
Ideas 10 + 11. Best economics of the three, and it borrows authority rather
than claiming it. Requires P1's substrate to exist.

---

## 9. Business model

**None of this is validated.** Willingness to pay is untested, and the hobby
spends on physical goods — trees, pots, tools — while expecting information to
be free. That is the central commercial risk.

What the category does establish is **price anchoring**: Bonsai Empire's app is
about $2.99/month with a five-tree free tier, and Bonsai Mirai runs €9.99–29.99
depending on tier. So a consumer subscription in the $3–10 range is a proven
shape here, if the value clears the bar.

| Product | Plausible model | Precedent | Risk |
|---|---|---|---|
| **P1** Record | Freemium — free for a few trees, paid for unlimited trees, full photo history, export | Bonsai Empire's 5-tree free tier at $2.99/mo | Competing directly with an incumbent's existing paid feature |
| **P2** Companion | Affiliate on trees, tools and pots; or lead generation to nurseries | Standard for hobby commerce | Thin margins, and incumbents also sell the goods |
| **P3** Teaching | Per-seat SaaS to the teacher, or revenue share on cohorts | Hotmart bonsai courses sell in Brazil; Mirai monetises instruction | Small number of teachers; long sales cycle |

**The honest read:** P3 has the best unit economics and the hardest start; P1
has the clearest path to volume and competes head-on with a cheaper incumbent
feature; P2 monetises best at the moment of purchase but retains nobody on its
own. This ordering is an argument, not a finding.

---

## 10. Defensibility and competitive response

**This is the biggest unresolved strategic risk, and it deserves to be stated
plainly rather than buried.**

Every feature in §7 is copyable. Structured schemas, timing fields, maturity
gates and contraindication flags can be replicated in weeks by anyone who
already holds the content and the audience.

**The specific threat:** Bonsai Empire already ships an app that tracks trees
and sends species-and-climate-aware reminders. Adding outcome aggregation — the
core of P1 — is a modest increment for them, and they would start with more
users, an established brand, and the editorial authority that makes people
trust the output. If P1 works, they can follow.

**The only durable defence is the data, not the feature.** Outcome records
compound: whoever accumulates a large corpus of what-actually-happened first
holds an asset that cannot be copied, only out-collected. That argues for
moving fast on collection and treating the logging experience — not the advice
— as the product.

**But be clear-eyed:** that is a race started from behind, against an incumbent
with distribution. Two things could change the odds — being materially better
at the logging experience than an incumbent that treats tracking as a
side-feature, and winning a segment the incumbent serves badly (§11). Neither
is proven. **If the research in §14 succeeds and this question remains
unanswered, it becomes the next thing to resolve.**

---

## 11. Market entry — geography and language

The strongest available wedge is **not a species or a feature. It is a climate
and a language.**

Every incumbent calendar and care guide assumes northern-hemisphere temperate
conditions. A grower in Brazil, Australia, South Africa or Southeast Asia
receives repotting timing that is wrong by roughly six months and dormancy
advice for a winter they do not have. This is a structural weakness in the
incumbents' content, not an oversight they can cheaply patch — their entire
corpus is calibrated that way.

Portuguese-language demand is demonstrated rather than assumed: bonsai courses
sell on Hotmart with hundreds of reviews, and ABC do Bonsai runs a paid course
with a community attached. The market exists and already pays.

**What this implies:** entering as a southern-hemisphere-and-tropical,
Portuguese-first product is more defensible than entering as a global
English-language competitor. It attacks where incumbents are structurally
weak, serves an audience they serve badly, and is a segment large enough to
matter but small enough to be uninteresting to them early on.

**Caveat:** this is a hypothesis, not a finding. It should be tested as part of
the research in §14 (question 13–14 of the research brief), not assumed.

---

## 12. What we believe versus what we know

**Verified:** the competitive landscape in §4, checked against live sources in
August 2026.

**Reasoned but untested:** the tier taxonomy (§6), the composite structure (§8),
the business models (§9), the entry wedge (§11), and the claim that outcome data
substitutes for reputation. These are arguments, not findings.

**Assumed and load-bearing — the whole thesis rests here:**

- **That growers will maintain a record over years.** If false, P1 collapses and P2 and P3 lose their substrate.
- **That diagnostic anxiety is high-volume.**
- **That existing free advice is inconsistent enough for adjudication to be worth paying for.**
- **That machine vision can assess bonsai material from a photograph** — trunk taper, movement, root flare, branch placement. Note this is a *different and harder task* than plant identification, and it has no published benchmark. As a weak proxy for the difficulty: general-purpose plant ID tools drop to roughly 52% species accuracy on bark images versus 84% on leaves. That does not measure material assessment, and should not be cited as if it did — the honest position is that this capability is **unmeasured**, which is a larger unknown than a low score would be.

**Not known at all:** willingness to pay; the size of the addressable segment;
whether practitioners will collaborate; unit economics; and how an incumbent
would respond (§10).

---

## 13. Open questions only the founder can answer

This brief cannot be completed without these, and they materially change which
ideas are viable.

1. **What does success look like?** A sustainable side income, a full-time business, an acquisition, or a well-made thing that a few thousand people use? P3 is a business; P1 could be either; the answer changes the sequencing.
2. **Solo or a team?** Idea 11 — a community platform — is not a solo undertaking. Several others are.
3. **How much time per week, and for how long before it must show something?**
4. **Is there capital, or must it be self-funding from early on?** A freemium record product needs runway before revenue; the acquisition companion could earn sooner.
5. **Is there access to a credible practitioner?** Content verification is a hard dependency for anything in Tier 2, and a practitioner partner would also supply the authority the operator lacks (§5).
6. **Which markets and languages are in scope?** See §11.

---

## 14. Current phase and next steps

The phase is **validation, not construction.** No architecture, stack, backend,
database, or analytics decision should be made yet: product shape determines
those, and choosing them first is how you build the wrong thing efficiently.

1. **Behavioural research** — does the record-keeping behaviour already exist unaided, and how large is diagnostic demand? Fully specified in `RESEARCH-BRIEF-behavioural-validation.md`, with pass/fail thresholds fixed in advance. *Decisive for P1.*
2. **Material-assessment vision test** — 50 garden-centre photographs scored by hand against a practitioner's judgement. *Decisive for idea 7.* A weekend.
3. **Teacher interviews** — five conversations. If WhatsApp and a spreadsheet are genuinely adequate, there is no P3.
4. **Logging pilot** — only if step 1 passes. Twenty growers, a shared spreadsheet, 4–6 weeks. The long pole; everything else takes days.
5. **Then** choose a direction, resolve the competitive-response question in §10, and only then choose technology.

**Guard:** set a date on step 4. If the evidence has not resolved by then, the
answer is no. A negative result reached quickly is the most valuable outcome
available, and abandoning the venture is a legitimate ending.

---

## 15. Available inputs

One prior asset exists and is worth stating precisely, because it is easy to
over-value.

A previous project produced a structured corpus of **1,637 technique entries
across 112 species**, each carrying a technique name, description, seasonal
timing, tree-maturity gate, and a not-recommended flag. 264 entries are flagged
as contraindicated, concentrated on the deadwood and stress techniques where
that is botanically expected.

Its value is as a **structured hypothesis** — a well-shaped draft that makes
practitioner review cheap, since a reviewer corrects fields rather than writing
from scratch. Its schema is documented in `DOMAIN-MODEL.md`.

**It is not a content asset.** It was AI-generated, has never been reviewed by
a practitioner, and contains demonstrable errors. It must not reach users
unverified. The prior application itself contributes nothing and is frozen.

---

## 16. Glossary

For readers without domain background.

| Term | Meaning |
|---|---|
| **Bonsai** | The practice of growing miniature trees in containers through pruning, wiring, and root restriction. Not a species. |
| **Nebari** | The visible surface root flare at a trunk's base. A major aesthetic criterion. |
| **Jin** | Deliberately stripped, bleached deadwood on a branch. |
| **Shari** | The same on the trunk. Jin and Shari suit conifers and fail on species that rot rather than harden — hence the contraindication concentration. |
| **Defoliation** | Removing leaves to reduce leaf size and increase ramification. Stressful; inappropriate for many species. |
| **Air layering** | Rooting a branch while still attached to the parent tree, then separating it. |
| **Ramification** | Density of fine branching — a primary sign of a developed tree. |
| **Nursery stock / pre-bonsai** | Ordinary garden-centre plants or partly-trained material used as a cheap starting point. |
| **Yamadori** | Trees collected from the wild. |
| **Dormancy** | The winter rest period temperate species require. Working outside its window is a common fatal error. |
| **Repotting** | Periodic root pruning and soil replacement, typically every 2–3 years. Highly timing-sensitive. |
