# Bonsai product venture — project brief

**Status:** pre-validation. No product has been chosen, built, or launched.
**Purpose of this document:** give any reader — a collaborator, an advisor, or
an AI agent — a complete and honest picture of what is being considered and why,
with no prior context required.

This describes a **new venture**, not a revision of any existing product. A
previous codebase exists and contributes some raw inputs (§15), but it does not
shape the problem statement, the strategy, or any idea below. Read this document
on its own terms.


> **Strategic Foundation / Pre-MVP Canon v1.0** — frozen 2 September 2026.
> Changes from here should be recorded as amendments rather than silent edits,
> so the four workstreams do not diverge from different snapshots.

---

## Canonical conventions

Two rules that apply across every document in this set. They exist because
earlier drafts blurred distinctions that matter.

### Evidence status

Several documents previously mixed *"we don't know"*, *"we can't test that"*
and *"the signal is weak"*. Those are different states with different
consequences. Every claim should carry one of:

| Status | Meaning |
|---|---|
| `OBSERVED` | The behaviour was directly found in real data |
| `SUPPORTED SIGNAL` | Consistent evidence exists, but prevalence is unmeasured |
| `CONTRADICTED` | Evidence was found against the claim |
| `UNVALIDATED` | A test is needed and has not been run — or cannot currently be run |
| `DEFERRED` | Deliberately not being tested now |

> **A test that cannot currently be run is `UNVALIDATED`, never `FAIL`.**
> Absence of access is not evidence of absence. This matters immediately:
> several thresholds in the research brief depend on participant access that
> does not yet exist, and must not be read as failures.

### Validation channels

> **Validation opportunities are inputs to the venture, not dependencies of
> it. No workshop, event, cohort, platform or research source defines the
> product roadmap by itself.**

The test for whether this is being honoured: *if the opportunity disappeared
tomorrow, would the direction of work change?* If yes, it has taken the wheel.

> **Evidence from any single channel applies only to the segment and context
> it came from**, and must not be generalised to other segments without
> further evidence.

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

**The value proposition is not the same across these.** A reviewer with 30
years' experience and 80 trees reports that reminders are worthless to him
while photo history remains useful, and that the app suits beginners. Read
across the segments:

| Segment | Wants |
|---|---|
| First/second tree | **Safety + memory** — don't kill it, remember what I did |
| Experienced grower | **History + provenance + experiments** — reminders are noise |

Designing one proposition for both is a likely failure mode.

**Explicitly not for: professionals and competition growers.** The depth is not
there, there is no community or marketplace, and no progression tracking at the
standard they work to. Designing for them would compromise the primary audience
and still lose to Bonsai Mirai. If a product decision would serve experts at
beginners' expense, take the beginner.

**A possible fourth segment is a `SUPPORTED SIGNAL` from W1: non-software / low-screen-time growers.** W1 observed people preferring notebook, pencil, albums, photo metadata or memory over dedicated apps. That is enough to require future market sizing to measure this behavior rather than assume universal software willingness, but its prevalence remains `UNVALIDATED`.

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

**The competitive set is not bonsai apps.** W1 `OBSERVED` users moving to Google plus a text document plus phone alarms; Excel and photo folders; Adobe Lightroom with metadata and keywords; OT2 desktop software; notebook and pencil; and a printed per-tree calendar alongside Excel. **Any product must beat a spreadsheet and a photo album, not merely beat Bonsai Empire.** Note too that Bonsai Mirai shipped its own tracker, *Mirai My Trees*, and a user is observed displacing it with Excel and folders.

**A second cluster exists that this brief originally missed: tracking apps.**
**At least 45 competitive software products/surfaces are known to ship or have shipped** (see `APP-MARKET-SCAN.md` §8) — BonsaiDo, Bonsai Empire's Care App, Appy Bonsai,
Bonsaiku, Wabi Sabi Bonsai, Bonsai Tracker, Yoi Bonsai, Jooni, Tiny Tree Club —
plus a Brazilian one on Google Play. Several already do things this brief
treated as novel: Bonsai Tracker and Appy Bonsai transfer a tree's history to a
new owner; **Yoi Bonsai explicitly offers "lineage that travels with the tree"**
and was built by someone with 20+ years in bonsai *and* an engineering
background; Bonsaiku ships a season-by-climate calendar; Wabi Sabi assigns a QR
code per pot.

**Observable iOS traction is modest; Android is materially stronger.** The earlier
`~330 ratings across four storefronts` figure is superseded as a category-wide
total because the original measured sample omitted material products, especially
Bonsai Album. The current reconciled lower bound in the same four-market framework
is **≥647**, before a complete refreshed census. On Android, at least **four**
known products are in the 10K+ Google Play install bracket: Bonsai Care App,
Appy Bonsai, Jooni and My Bonsai Book. Web-first products remain only partially
measured. None of this establishes active usage, retention, paid conversion,
revenue or viability, all still `UNVALIDATED`. Full data, registry and
limitations are in `APP-MARKET-SCAN.md` and `COMPETITOR-REGISTRY.csv`.

**What this closes:** the reference/content play. Breadth is not a
differentiator, structured species data is already published by at least one
society, and the incumbents pair their content with the credibility that makes
people act on it.

**What appears open:**

- **Contraindications by species.** No incumbent systematically publishes what *not* to do to a given species. Every guide is written affirmatively. For a beginner whose failure mode is confidently doing something irreversible, the prohibition is the more valuable half.
- **Maturity-gating.** "At what tree age does this technique become appropriate" is barely addressed anywhere.
- **Climate calibration.** *Weakened — see §11.* The original claim was that every incumbent assumes northern-hemisphere temperate conditions. Bonsai Tracker, Bonsai Empire and Bonsaiku all now claim climate or hemisphere adaptation, so what remains testable is *residual* mismatch, not absence.
- **Verifiable provenance.** Permanent tree IDs and transferable history are **not** open — Bonsai Tracker, Yoi, Appy Bonsai, MyBonsaiTag (via NFT) and ScandinavianBonsai (via RFID) all do some version. What no one structures is `claim → evidence → attestation → confidence`: *acquired · owner-recorded*, *repotted · photo evidence*, *styling · practitioner-confirmed*, *exhibited · institution-verified*, *transferred · both parties confirmed*.
- **Aggregate outcome data.** Of the 35+ known tracking products, **none aggregates outcomes across users into guidance.** Each records your trees for you. This is the one position still genuinely unoccupied — and notably the one that needs scale rather than credibility. Note the hard part is not collection but **inference**: community death reports routinely disagree on cause, so the model must separate observed outcome from owner-attributed cause (see `DOMAIN-MODEL.md` §7.1) or it will produce confident, wrong guidance.

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
| **3 — Record** | You keep the ledger; users bring the facts | **No** | Authority-free, but **no longer unclaimed** — 35+ tracking products are known and three already transfer a tree's history to a new owner. Value still compounds over time; the question is now whether anyone wants it enough. See `APP-MARKET-SCAN.md`. |
| **4 — Network** | Borrows authority from teachers | **No** | Highest ceiling, hardest cold start — the audience already has homes. |

**Tier 3 was assessed as the sweet spot**, and Tier 2 was argued to become
viable when built on top of it — on the reasoning that an advisor deriving
authority from *outcomes at scale* would need less reputation of its own.

> **That reasoning is now downgraded; see §12.** The original formulation —
> *"eleven percent of people who repotted this species this month lost the
> tree"* — does not survive the question **eleven percent of what?** Comparable
> species, stage, climate, health, root work? And who attributed causation?
> Aggregate outcomes may **complement** expertise rather than replace it, which
> is a materially weaker claim than this section originally made. The advice
> ladder in §8 is how this is handled in practice: levels 0–3 require no
> authority at all, and only levels 4–5 depend on the unresolved question.

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

### Tier 3 — Record *(authority-free, but contested — see §4)*

8. **Tree biography / provenance** — a longitudinal record per tree: species, acquisition, work performed, photographs over time. A documented tree is worth more than an undocumented one when sold or inherited — the same logic as service history for a car. Logging is self-interested, which is the retention mechanism. Practitioner history already moves market value: growers discussing tree sales attribute price to the combination of *material + collector + stylist + pot maker*. **But the community itself polices the limit** — one member jokes that full attribution risks trees looking like race cars covered in sponsor logos, and there is live debate over how much provenance should count in exhibition judging. Preserve history; do not convert it into ranking.
9. **Death registry** — a structured, anonymised record of what killed trees: species, climate, months owned, attributed cause. The hobby has enormous survivorship bias; every published account is a success story. This is proprietary data no incumbent holds, it addresses beginners' dominant fear, and it improves as it grows.

### Tier 4 — Network *(highest ceiling, hardest start)*

10. **Teacher's workbench** — tooling for instructors: assign a tree, track students across seasons, review photographs, correct mistakes before they become irreversible. A multi-season relationship that no forum and no course marketplace serves. Monetise the teacher, not the learner. Community forms around the tool, which is how cold-start problems are usually solved.
11. **Master-led communities** — platform for practitioners to run and monetise their own communities. Demand is proven; the obstacle is that the audience already has homes, and community platforms are winner-take-all.

**Three findings sharpen the community ideas considerably:**

*The belonging problem is documented, not imagined.* A beginner on the Mirai forum says he hesitated to post his trees because he judged his own technique poor and feared others' assessment. Another grower reports delaying joining Bonsai Nut because members seemed intimidating. And Bonsai Empire's own forum etiquette guidance acknowledges that certain starter plants are looked down on and that members may say so explicitly. **For some beginners, public exposure and quality judgement are themselves the friction.**

*Community is an operation, not a feature.* Bonsme shipped exactly progress photos + community + follow + likes/comments — and shut down because the founders lacked capacity to keep maintaining it. Moderation, cold start, content, retention, safety and network density are all recurring costs. A dead competitor is the most informative kind.

*Discovery should run on context, not popularity.* The workable axes are `species × climate × stage × intervention × journey` — `Ficus · tropical · first tree`, `Juniper · recovery after repot`, `Jabuticaba · Brazil Southeast · pre-flowering`. Four relation types follow: **Follow Journey**, **Similar Journey**, **Ask Around Event**, and **Tree Circle** (a recurring contextual group). None of the 35+ known competitors implements this convincingly.

**Two design principles fall out of the evidence.**

> **Contribution ≠ invitation for critique.** A grower updated a progression thread solely to record that his tree had died, and received an avalanche of postmortem advice he had not asked for. Death events need explicit social modes: *record only* · *help wanted* · *discuss outcome*. Not every event invites counsel.

> **Story, not price, is the social currency.** A €20 tree with ten years of documentation — mistakes, recoveries, people helped, an owner change — produces a richer profile than a €20,000 tree bought finished. That property structurally blocks *wealth → status*, which is the failure mode a bonsai social product most obviously risks.

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

**P1 · The system of record** *(foundational product candidate — validate first)*
Ideas 8 + 5, with 9 and 4 deliberately **out of the initial core**. Users log
their trees; outcomes, including deaths, accumulate.

> **Correction to the original composition.** This brief placed outcome
> aggregation near the centre of P1. It should not be there. Aggregation
> requires enough records, enough context, enough outcomes *and* enough quality
> before it can be studied at all — so it is a possible consequence of the core,
> not a component of it. Shipping it early would mean inferring from a corpus
> too thin to support inference, which is the failure mode §12 warns about.

**The flywheel, revised.** The original — *log → outcomes → advice improves →
logging becomes more valuable* — makes the whole chain depend on eventually
delivering trustworthy advice, which §12 now treats as an open question. A
healthier version does not promise that up front:

> capture a moment → build a journey → preserve history → understand progress
> → **discover comparable journeys** → learn and contribute → keep documenting
> → richer provenance and outcomes → better knowledge later

**Comparable Journey may be the most important mechanic here.** When a grower
reports *"my black pine is yellowing after repotting,"* the system need not
answer, and need not ask the whole community. It can surface **similar
documented journeys** — same species, similar climate, recent repot, yellowing,
recovered. That makes the outcome corpus useful **without requiring the
authority the advisor lacks**, which partly dissolves the §12 problem rather
than waiting on it. It is also a different mechanic from both a feed and an
advisor, and nothing in the market does it.

**P2 · The acquisition companion** *(candidate funnel — feeds P1 if P1 survives)*
Ideas 7 + 6 + 3. Meets people at the moment of purchase — and rather than
ending with *"here is your care guide,"* it ends with **"start this tree's
journey"**: acquired date, nursery, first photographs, species *probable*,
purchase context *nursery stock*. That is the digital birth of a Tree Identity,
which makes P2 a far more natural funnel into P1 than a content guide would be.

**P3 · The teaching layer** *(candidate ceiling — depends on P1's substrate)*
Ideas 10 + 11. Potentially a higher-value professional payer, and it borrows
authority rather than claiming it. Requires P1's substrate to exist.
**Economics remain `UNVALIDATED`.**

> **`W2-001` adopted 4 Sep 2026.** This paragraph previously read *"Best
> economics of the three"* — the same claim corrected in
> `CURRENT-EVIDENCE-AND-DECISIONS.md` §7. Under `S1`, P3 is not needed for
> viability; it is the **only identified route to the `S3` aspiration**, which is
> why it stays second validation priority.

**P3 is more strategically interesting than it first appeared.** A teacher or
practitioner is not only someone instructing — they are a legitimate source of
**attestations**, structured intervention records, and expert context. That
*connects authority to the system without the product pretending to hold it*,
which is the cleanest answer yet to the constraint in §5.

---


### The central object is not the user

In almost every social product the spine is `User → Content`. Here it should be:

> **Tree → Journey → Events → People**

A person may acquire a tree, care for it, style it professionally, exhibit it,
sell it, gift it, or die — and leave the record completely. **The tree
persists.** That single inversion is what structurally separates this from the
35+ personal trackers already known to ship — and, more importantly, general-purpose tools (spreadsheets, Photos, notes, notebooks) which users are `OBSERVED` reverting to.

**Growers have already articulated the problem this solves.** One documented a
Japanese Red Pine across *several separate forum threads* before consolidating
them into a single progression, because he judged that he had recorded his own
tree's history badly. That is spontaneous validation of a structural defect:
**conversation-centric systems fragment tree history.** In this model the
conversation belongs to the event, rather than the tree's history having to be
reconstructed by searching through conversations.

### Six layers, staged by how much authority each needs

| Layer | Function | Status |
|---|---|---|
| **L1 · Tree Identity** | persistent identity independent of current owner | **CORE** |
| **L2 · Tree Journey** | structured longitudinal history | **CORE** |
| **L3 · Living Provenance** | origin, stewardship, evidence, attestations | CORE *hypothesis* |
| **L4 · Tree-Led Relationships** | connection by context and journey | CORE *hypothesis* |
| **L5 · Outcome Evidence** | structured aggregation of results | FUTURE |
| **L6 · Decision Intelligence** | decision support | FUTURE — **blocked on H7** |

The staging prevents inventing a superapp before the first behaviour is proven.
L1 and L2 deliver value with no authority whatsoever.

### This also defuses the cold-start problem

§6 rates Tier 4 as having the hardest start, and network products generally do.
But this architecture has an unusual property: **value does not require network
density on day one.**

| At | The user gets |
|---|---|
| user 1 | memory, progression, history — useful alone |
| user 100 | similar journeys begin to appear |
| user 1,000 | a meaningful network |
| user 10,000 | outcome patterns become possible |

A Tree Journey is not useless by itself, which is exactly what an empty
community is. That materially reduces the cold-start risk the original
assessment assigned to the network tier — and it means community can **emerge
from the network** rather than being fabricated behind a tab labelled
*Community*.

### The advice ladder — how the credibility problem actually resolves

This is the most useful reframing to come out of the research. "Advisor" is not
one thing; it is six levels, and **the authority required rises sharply with
each**:

| Level | Output | Authority needed |
|---|---|---|
| **0** | Record only | none |
| **1** | *"You repotted this tree in March 2028."* | none |
| **2** | *"34 similar records exist."* | none |
| **3** | *"Trees in comparable conditions showed outcomes X / Y / Z."* | low — descriptive |
| **4** | *"Evidence suggests waiting."* | **high** |
| **5** | *"Do X."* | **very high** |

> **Why the ladder exists, in one line:** *a record can be wrong in usability;
> advice can be wrong in a way that harms a tree.* That asymmetry — not caution
> — is the argument.

**Levels 0–3 are shippable without solving the reputation problem at all** —
they retrieve and describe rather than advise. Levels 4–5 must not ship without
H7 passing. That converts §12's open question from a blocker into a gate on one
specific feature tier, which is a far healthier position than the original
brief's all-or-nothing framing.


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

**The threat is no longer hypothetical — the feature space is already crowded.**
At least **45 distinct competitive bonsai software products/surfaces are known
to ship or have shipped**, and several already transfer or preserve tree history.
Yoi Bonsai, launched in 2026, explicitly offers lineage that travels with the
tree. P1 is not a vacant feature position.

**The countervailing fact is unresolved, not negative:** observable store
distribution is uneven and many products remain small, but at least four Android
products are in the 10K+ install bracket and the earlier iOS scan materially
under-counted the category. This raises a **market-ceiling question**; it does
not establish that the market is too small. Active use, retention, revenue,
paid conversion and economic sustainability remain `UNVALIDATED`.

**A possible durable defence, if a record thesis survives validation, is the
accumulated data rather than the feature — but "data" is too loose.** Every app
generates data. The potentially defensible asset would be a **context-rich
longitudinal outcome graph**: tree × species × climate × stage × intervention ×
health state × timing × observation × outcome × evidence quality. That is harder
to copy than a care table. **Whether users will generate enough high-quality
longitudinal data is unproven.** Therefore the relevant validation priority is
capture persistence and record value before any authority/advice layer. This is
a validation implication, not a product decision.

**But be clear-eyed:** that is a race started from behind, against an incumbent
with distribution. Two things could change the odds — being materially better
at the logging experience than an incumbent that treats tracking as a
side-feature, and winning a segment the incumbent serves badly (§11). Neither
is proven. **If the research in §14 succeeds and this question remains
unanswered, it becomes the next thing to resolve.**

---

## 11. Market entry — geography and language

The wedge originally proposed here was **a climate and a language** rather than
a species or a feature. That argument has weakened and is retained with its
corrections rather than deleted.

The original reasoning: every incumbent calendar assumes northern-hemisphere
temperate conditions, so a grower in Brazil, Australia, South Africa or
Southeast Asia receives repotting timing wrong by roughly six months and
dormancy advice for a winter they do not have.

**Two findings undercut this.** Bonsai Tracker advertises tasks adapted to
hemisphere, species and climate; Bonsai Empire states its app optimises care
using species and local climate; and Bonsaiku ships a season-by-climate
calendar with frost alerts. The gap is no longer unattended, so the hypothesis
must become *measurable residual mismatch experienced by tropical growers* —
not an assumed absence.

Portuguese-language demand is demonstrated rather than assumed: bonsai courses
sell on Hotmart with hundreds of reviews, and ABC do Bonsai runs a paid course
with a community attached. The market exists and already pays.

**The language position is doubly occupied.** There is a Brazilian tracking app
on Google Play (`br.com.bonsaiapp`), and *Diario Bonsai – Nebari* launched in
Portuguese in 2026 claiming both hemisphere and climate-zone awareness.

**A sharper distinction survives, though: hemisphere ≠ climate.** Brazilian
growers report that the answer changes *within* Brazil, between subtropical and
near-equatorial conditions, and there are long-standing Brazilian forum threads
asking for a pruning calendar suited to local reality because the available ones
contradict each other. Competitors now claim hemisphere and climate-zone
support; **whether they calibrate to microclimate × species × stage × the tree's
actual condition is a different and much harder question** — and that, not
hemisphere, is what remains testable.

**What this implies now:** a southern-hemisphere, Portuguese-first product may
still be more defensible than a global English-language one, but the claim is
weaker than originally written and must be tested rather than assumed.

**Counter-evidence to weigh:** across the Brazilian App Store, all bonsai apps
combined hold 15 ratings. That number is a severe undercount — Brazil is
roughly 80% Android and Google Play data was not retrievable — so it must not
be read as an empty market. But nothing yet suggests a large unserved
Portuguese-speaking audience for this category. See `APP-MARKET-SCAN.md`.

---

## 12. What we believe versus what we know

**Verified:** the competitive landscape in §4, checked against live sources in
August 2026.

**Reasoned but untested:** the tier taxonomy (§6), the composite structure (§8),
the business models (§9), the entry wedge (§11), and the claim that outcome data
substitutes for reputation. These are arguments, not findings.

**Downgraded since writing.** The claim that aggregate outcomes can *replace*
expert reputation is now doubted by two independent analyses and should be
treated as an open question rather than a foundation. My original formulation —
*"11% of people who repotted this species this month lost the tree"* — does not
survive the obvious question: **11% of what?** Comparable species, stage,
climate, health state, root work? And who decided the intervention caused the
death? **Complement to expertise is now the more plausible reading than
replacement for it**, which weakens §10's route past the moat.

**Contradicted by evidence gathered since this brief was written:** that Tier 3
is unclaimed (35+ tracking products known, three transfer tree history); that
climate calibration is unattended (three competitors claim it); and that a
Portuguese-language position is empty (a Brazilian app exists). See
`APP-MARKET-SCAN.md` and §4.

**A new and uncomfortable finding:** at least 45 known competitive software products/surfaces compete in a
category whose reconciled four-market iOS lower bound is **≥647 ratings**, not the
historical ~330 measured-sample subtotal. Android now adds at least **four**
products in the 10K+ install bracket. The load-bearing question therefore cannot
stop at *"will growers log?"* It must become *"is there a sufficiently large
segment for whom a dedicated record creates enough recurring value to beat
general-purpose tools and support viable economics?"* The evidence raises this
question but does **not** answer it.

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

> **This sequence is canonical and must match §11 of
> `CURRENT-EVIDENCE-AND-DECISIONS.md`.** An earlier version of this section
> listed a different order, which mattered because both documents hold
> precedence — two canonical sources disagreeing is worse than one being wrong.

### Now — executable without participant access

0. **App market scan** — ✅ done, and the **Android gap is now closed** (`APP-MARKET-SCAN.md` §7): the category leader is confirmed at 10K+ Google Play installs, so adoption is larger than the iOS-only scan suggested. Master list superseded: **at least 45 known competitive software products/surfaces** (§8.1), and **four** hold 10,000+ Android installs (§8.4). The US iOS leader is **Bonsai Album**, not BonsaiDo.
1. **Competitor review mining** — ✅ **done**. See `W1-FINAL.md`: 196 structured storefront reviews, reconciled with a cleaned 82-unit derived external/public evidence corpus plus a 6-unit authenticity quarantine. Key result: **general-purpose tools — spreadsheets, Photos, notes — are the real competitive set**, and users are `OBSERVED` reverting to them.
2. **Monetization & economics** — ✅ **returned 3 Sep 2026**, `READY FOR CROSS-FRONT RECONCILIATION`. **The ceiling question this brief has carried since W1 now has an answer.** *Would 5,000 users at €3/month be success or failure?* At 15% store commission that is roughly €22 net per payer, so **≈ €110k** — which **clears `S1` (€75k)**, the ambition made authoritative on 4 Sep 2026. It would fail `S2` and is irrelevant to `S3`. See `CURRENT-EVIDENCE-AND-DECISIONS.md` §11c.
3. **Brand identity & marketing** — ✅ **returned**, `READY FOR CROSS-FRONT RECONCILIATION`. No naming, visual identity, tagline or campaign; deferred by design.
4. **Growth strategy** — ✅ **returned**, `READY FOR CROSS-FRONT RECONCILIATION`. Loops, not channels — no channel or geography selected.
5. **Cross-front reconciliation** — what product thesis survives all four lenses? **Including the option that none does.**
6. **MVP validation strategy** — see `CURRENT-EVIDENCE-AND-DECISIONS.md` §12: pick the instrument from the largest uncertainty, and remember an MVP need not be software.
7. **Product / UIUX** — only after the above, and only with the handoff inputs listed in §12 of that document.

Steps 2–4 ran in parallel and have all returned. **Step 5, Cross-Front
Reconciliation, is the current gate.** All four took
`CURRENT-EVIDENCE-AND-DECISIONS.md` as their entry point; §11a there records the
aligned state and the one decision the fronts escalated to the founder.

### Deferred — blocked on access, `UNVALIDATED` until then

- Participant behavioural validation (H1B, H1C)
- Practitioner validation and attestation feasibility (H5)
- Logging retention pilot
- H7 evidence-derived authority experiment
- Material-assessment vision test, if P2 still survives cross-front reconciliation

**Guard:** set a date on the deferred cluster. If access has not materialised by
then, the venture proceeds on Track A evidence alone or stops — but it must not
wait indefinitely on tests it cannot run.


### Current validation opportunities

| Opportunity | Timing | Cohort | What it can and cannot tell us |
|---|---|---|---|
| **Beginner workshop** (90–120 min; attendees leave with their first tree) | ~1 month | **Zero-to-low bonsai experience**, first tree | **Can** inform: onboarding for someone without the vocabulary, first-tree anxiety, whether initial logging feels natural or bureaucratic, what guidance a beginner expects immediately after creating a tree, and early return at 7 / 14 / 30 days. **Cannot** inform: hobbyists with 10–20 trees, long-term provenance, transfers, willingness to pay, practitioner workflows, long-term retention, network effects, or outcome-derived authority. |

**Two cautions on interpreting it.** Activation will be **artificially high** —
an instructor is present, the activity is guided, the moment is novel and
social. If 90% create a record during the session that says almost nothing
about spontaneous adoption. The signal begins afterwards, and the question that
matters is whether anyone returned **because it gave them value, or because
they were asked to**.

Per the canonical rule above, this is an input. If it were cancelled tomorrow
the sequence in this section would not change.


**Guard:** set a date on step 5. If the evidence has not resolved by then, the
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
