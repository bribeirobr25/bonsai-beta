# Research brief — behavioural validation for a bonsai product

**For:** any AI research agent or analyst with access to the Reddit API, a
browser-driving tool, or equivalent. **This brief is self-contained — you are
not expected to have any prior context.**

**Effort:** proportional to the selected Track A module and the accessible
sampling frame. **Do not trade methodological validity for a fixed duration** —
an earlier version of this brief specified "one to two days", which was a
slogan rather than a design constraint.
**Output:** a written report answering §7, with the raw classified dataset attached.


> **Strategic Foundation / Pre-MVP Canon v1.0** — frozen 2 September 2026.
> Changes from here should be recorded as amendments rather than silent edits,
> so the four workstreams do not diverge from different snapshots.

---

> **Sequencing — read before commissioning this study.**
> Two cheaper steps come first and may make this study unnecessary.
> **(0)** An app-market scan is already done — see `APP-MARKET-SCAN.md`.
> **(1)** Mine the reviews of the 35+ known competing products for friction and
> abandonment: days of work, no platform approval required. Only then
> commission what follows.
> **(2)** Consider a **shadow test** before any recruitment: take 20–30 real
> public progression threads and try to represent them in the domain model.
> It answers *"does our model fit real bonsai lives or are we imposing
> structure?"* for zero participants and zero budget. It yields no prevalence
> data — that limit must be stated — but it has already surfaced four missing
> concepts (State, Intent, Lineage, Composition). Also note that this brief cost far less than the
> multi-cohort programme in `99-archive/superseded/bonsai-deep-research-report.md`; run the cheap
> evidence first and let it decide whether that scale is warranted.

---

## 0. Two tracks — read before using any threshold below

This brief was written as a single programme. It must be split, because half of
it cannot currently be executed.

### Track A · Zero-participant research — **runnable now**

Market scan · competitor review mining · public behavioural evidence ·
provenance research · progression analysis · failure and recovery analysis ·
competitive teardowns · Brazil and tropical public evidence · shadow validation
of the domain model.

**No participant recruitment is required.** Source access, however, remains
subject to each platform's terms, technical access and approvals — public
storefront review mining is straightforward; Reddit is not (see §5). Several of these
have already produced results — see `APP-MARKET-SCAN.md` and
`CURRENT-EVIDENCE-AND-DECISIONS.md`.

### Track B · Participant validation — **blocked on access**

Artifact interviews · private record validation (H1B) · lost-history incidents
(H1C) · logging retention · attestation feasibility · H7 · willingness to pay ·
community participation.

> **Thresholds are split, not wholesale Track B.** An earlier version of this
> section claimed every threshold belonged to Track B. That was wrong — several
> are measured on public content and are runnable now.
>
> **Track A thresholds:** H1A, H2A, H2B, H3A, H3B, and the observational
> components of H4, H5 and H6.
> **Track B thresholds:** H1B, H1C, the participant components of H4/H5/H6, H7,
> retention and willingness to pay.
>
> Where Track A produces evidence but Track B has not run, the correct status is
> **`PARTIALLY SUPPORTED / REMAINDER UNVALIDATED`**.
>
> A Track B test that cannot be run is `UNVALIDATED` — **never** `FAIL`. This is
> not a technicality: H1B carries a *"the record thesis is dead"* verdict, and
> reading that as a conclusion when the test has never run would kill the
> venture on an absence of data rather than on evidence.

Track A cannot substitute for Track B. Public forum behaviour shows what people
do **in public**; H1B is specifically about what they do privately, and no
amount of Track A work reaches it.

---


## 1. Why this research exists

A team is deciding whether to build a bonsai product. They have already ruled
out the obvious option — a species care reference — because that market is
closed: Bonsai Empire holds 110+ expert-written species guides, editorial
authority built over two decades, and a care app; Bonsai Mirai sells
instruction at €9.99–29.99/month with a companion tracking app; Virginia
Bonsai Society publishes a filterable 110+ species table. Competing on
reference content means being second with worse credibility.

Two alternative product ideas survived that analysis, and **both rest on
assumptions about existing grower behaviour that have never been tested.**

This research tests those assumptions. It is not exploratory — it is a
go/no-go decision input with thresholds agreed in advance (§7).

**Why behaviour rather than a survey or interviews:** stated intent is a poor
predictor of adoption, and both ideas hinge on whether people *already do the
thing unaided*. Public forums are a large, unprompted, longitudinal record of
what growers actually do. Read the record rather than asking people to
predict themselves.

---

## 2. The two product ideas under test

**Idea A — a system of record for individual trees.** Growers log each tree:
species, acquisition, work performed, photos over time. The record accrues
value — a documented tree is worth more than an undocumented one when sold or
inherited, comparable to service history for a car or papers for a watch.

> **Superseded framing.** This brief originally continued *"…outcome data then
> powers advice,"* making the record instrumental to an advisor. The current
> thesis does not: **Tree Identity → Journey → Provenance → Relationships can
> produce value before any advisor exists.** Outcome aggregation is explicitly
> outside the initial core. See `CURRENT-EVIDENCE-AND-DECISIONS.md` §1.

*Requires:* that growers will maintain a record over years. **H1 tests this.**

**Idea B — a diagnostic and contraindication advisor.** Answers "is it safe to
do X to my species, at its age, right now?" — including negative guidance
("do not carve this species"). Authority comes from outcomes at scale rather
than from an expert's name, which is the only route past the credibility moat.

*Requires:* that diagnostic anxiety is high-volume, and that existing free
advice is inconsistent enough that adjudication has value. **H2 and H3 test this.**

---

## 3. Hypotheses — each must be falsifiable

**H1 — Longitudinal record-keeping.** Split into three, because they are
different behaviours and a single measure conflates them. A grower may keep
five years of dated photos and never post once; the reverse also happens.

> **H1A · Public documentation.** Growers publicly return to the *same tree*
> over time. Measured on observable forum behaviour.
>
> **H1B · Private record.** Growers maintain a private record even without
> publishing. **Measured by artifact, never by survey answer** — the person
> must show something preexisting: an organised camera roll, spreadsheet,
> notebook, labels, calendar, app. Count as a strong longitudinal record only
> if it covers the same tree, has ≥3 dated entries, and spans ≥183 days.
> Distinguish *historical evidence* (photos that happen to exist) from
> *intentional record*.
>
> **H1C · Pain from lost history.** Losing dates or history caused a concrete
> past problem — "I don't know when I repotted it", "I lost the early photos",
> "I never wrote down the species". **A specific past incident counts; stated
> interest does not.** Must be elicited before the participant sees any concept.

**H2 — Decision anxiety.** Split, because these imply different products.

> **H2A · Reactive diagnosis.** "What's wrong with my tree / is it dead?"
>
> **H2B · Prospective go/no-go.** "Is it safe to do X now?" — **this is the
> load-bearing one for the advisor**, and the original brief conflated it into
> H2A.

**H3 — Advice inconsistency.** Also split. *A confirming case already exists:*
on Bonsai Nut a beginner asked whether to repot two pines immediately or wait;
some answered **wait**, an experienced grower answered **you can repot now** —
same tree, same question, same moment. In another thread the first response to
a repotting question was to fill in the poster's location, because the answer
depends on it. **`missing context → conflicting advice` is plausible; its
frequency is unknown**, which is what H3 measures.

> **H3A · Diagnostic contradiction.** "Fungus" versus "overwatering."
>
> **H3B · Action and timing contradiction.** "Repot now" versus "don't touch it
> until spring."
>
> For each conflict, also code the likely cause: `missing context` · `species` ·
> `climate` · `season` · `tree stage` · `genuine expert disagreement` ·
> `not actually contradictory`.

**H4 — Climate mismatch.** Reframed twice. The original assumed incumbents
ignore the southern hemisphere; they no longer do — Bonsai Tracker, Bonsai
Empire, Bonsaiku and the Portuguese-language Nebari all claim climate or
hemisphere adaptation.

> **The sharper distinction is `hemisphere ≠ climate`.** Brazilian growers
> report the correct answer changes *within* Brazil, between subtropical and
> near-equatorial. So the testable question is not whether competitors support
> the southern hemisphere — they claim to — but **whether anyone calibrates to
> microclimate × species × stage × the tree's actual condition.**

Measure residual mismatch actually experienced, and require triangulation from
≥2 independent methods before declaring a wedge.

**H5 — Provenance beyond a private diary.** Does a tree's history carry value
when it changes hands, and is a verifiable evidence chain trusted more than a
self-entered one? Note three competitors already transfer tree history, so
plain transferability is not a wedge — **the testable question is whether
attestation and evidence tiers add trust.**

**H6A — The tree as a persistent knowledge object.** Not "do people like
communities" (near-tautology; several apps already ship feeds). Sharpened from
observed behaviour: growers report that their *first stop* when acquiring a new
species is the collection of progression threads for it. The tree's documented
journey functions as **learning infrastructure**, not showcase — which is a
stronger and more specific claim than "community."

Supporting behaviour already observed: spontaneous *"please keep us updated"*
requests directed at a **tree** rather than a person, and study groups where
members bring the same trees to recurring seasonal sessions — one reporting
seven years of membership.

Measure repeat non-owner interaction, spontaneous update requests, help
offered, and response to failure — **not likes.**

> **W1 status check (3 Sep 2026):** progression and social *discovery* value is
> `SUPPORTED SIGNAL`; a generic community feed as a *retention engine* is
> `UNVALIDATED`. **Nothing in W1 upgrades H6A or H6B.** Both remain as written.

**H6B — Comparable Journey utility.** Added because `PROJECT-BRIEF` §8 now
treats this as possibly the most important mechanic, and it was absent here.

> Growers derive useful learning value from structurally similar documented
> journeys — same species, climate, stage, intervention — **even without
> receiving a direct recommendation.**

Strategically this is the difference between two very different products:
`record → retrieval → comparison → learning`, which needs no authority, and
`record → the system tells you what to do`, which needs a great deal. If H6B
holds and H7 fails, the first path still works.

**H7 — Evidence-derived authority.** *Reformulated.* An earlier version stated
that "the entire strategy rests" on outcome data substituting for reputation.
It no longer does: the current architecture lets Tree Identity, Journey,
Provenance and Relationships produce value before any advisor exists, and H7
now gates **only levels 4–5 of the advice ladder**, not the venture.

> **What level of decision confidence, if any, can structured comparable
> outcome evidence earn — and does it act as a substitute for, a complement to,
> or an insufficient alternative to practitioner authority?**

Test it by comparing the same recommendation attributed to different sources. Test with a randomised comparison
of the same recommendation attributed to: **(A)** a recognised practitioner,
**(B)** aggregate outcomes from N comparable trees, **(C)** both, **(D)** generic
community consensus. Primary endpoint: confidence to act. Freeze a
non-inferiority margin before collecting. Conclusion must distinguish
*substitute* (B ≈ A), *complement* (C > both), and *fail*.

> **Weight H7 lower than the behavioural findings.** Any outcome data shown in
> the experiment is necessarily simulated, and must be labelled as such to avoid
> fabricating horticultural evidence. That makes H7 a measure of *stated* trust
> in a hypothetical — the very standard H1B rejects. Run it, but do not let it
> outrank observed behaviour.

---

## 4. Research questions

### For H1
1. What share of posts are progression or update posts about a tree the poster owns?
2. **Of users who post one progression, what share post about the *same tree* again 6+ months later?** *(This is the single most important number in the study.)*
3. What time spans do progressions cover? Distribution of claimed durations.
4. Do growers express regret at *not* having kept records — "wish I'd taken photos", "can't remember when I last repotted", "don't know how old it is"? Frequency and phrasing.
5. What tooling do they use today — dedicated apps, spreadsheets, camera rolls, nothing?

### For H2
6. What share of posts are diagnostic help requests ("what's wrong with", "is it dead", "help")?
7. What share concern a tree that died or is dying?
8. What are the most commonly attributed causes of death, by frequency?
9. Is the asker typically a beginner, and how is that signalled?

### For H3
10. In diagnostic threads with 3+ substantive replies, what share contain **materially conflicting** advice — two answers that cannot both be acted on?
11. What share of answers are species-specific versus generic?
12. Do answerers ask for the asker's climate or location before advising? How often?

### For H4
13. What share of posters identify as southern hemisphere, tropical, or subtropical?
14. Among those, how often is timing mismatch raised as a problem?

---


### For H5 — provenance
15. What proportion of transfer or sale posts include provenance elements beyond species and a photo?
16. Which evidence types appear in practice — receipts, dated photos, prior-owner confirmation, workshop records, exhibition catalogues?
17. Do growers distinguish between self-asserted and third-party-confirmed history when judging a tree?
18. Would a practitioner complete an attestation for work they actually did, and at what friction? *(Track B)*

### For H6A — tree-led relationships
19. Do non-owners return repeatedly to the same tree's thread over months?
20. How often are update requests spontaneous rather than solicited?
21. What share of responses to a failure or death are help, versus commentary, versus unrequested critique?

### For H6B — comparable journeys
22. When growers seek precedent for a decision, do they look for *similar cases* or *authoritative answers*?
23. On what dimensions do they judge another journey comparable — species, climate, stage, material, intervention?
24. Is a comparable case reported as useful when it carries no recommendation? *(partly Track B)*

### For H7 — evidence-derived authority *(Track B)*
25. Randomised: same recommendation attributed to a practitioner / to aggregate outcomes / to both / to community consensus. Primary endpoint: confidence to act.
26. Does confidence change when aggregate evidence contradicts the named expert?
27. At which level of the advice ladder does authority become necessary?


---

## 5. Sources and access

| Source | Scale | Access notes |
|---|---|---|
| **r/Bonsai** | ~362k members, high activity | **Access is no longer straightforward and this method may be unavailable.** Since June 2026 Reddit requires explicit approval for API access and a written agreement for commercial use; Reddit for Researchers is restricted to non-commercial academic work with university affiliation and ethics review. A commercial venture study should assume neither applies. Naive HTTP fetching is blocked — `old.reddit.com` refuses. **Confirm access before designing around this source, and cost a fallback.** |
| **r/bonsaicommunity** | ~47k members | Secondary; check whether it skews differently. |
| **Bonsai Nut** | Largest dedicated forum | **Returns HTTP 403 to naive fetchers** — needs a browser-driving tool. Has an explicit "5 to 10+ Year Progression Thread", directly relevant to H1. |
| Instagram / YouTube | — | Progression content is common. Useful for H1 context; hard to sample rigorously. Optional. |
| Facebook groups | — | Likely large but effectively closed. Skip unless access already exists. |

**Note on r/Bonsai structure:** the subreddit runs recurring beginner/weekly
threads. A large share of diagnostic questions may be *inside* those threads
rather than as standalone posts. **Check this before sampling** — missing it
would badly understate H2.

---

## 6. Method

**Sample size:** minimum 400 classified posts. More is better; 400 is the floor
for the subgroup analysis in Q2 and Q10 to mean anything.

**Window:** 12 consecutive months, ending as recently as data allows.

**Stratify by month.** This is not optional. Bonsai activity is strongly
seasonal — repotting questions cluster in spring, winter-damage questions in
late winter. Sampling a single quarter would distort every proportion in this
study. Draw an equal number of posts from each of the 12 months.

**Classify each post** using the codebook in §10. One primary category per
post. Record species where stated, and stated location or hemisphere where
available.

**For Q2 (the critical number):** take every user in the sample who posted a
progression or update. Retrieve their post history. Determine whether they
posted about *the same tree* again at least 6 months later. Identifying "the
same tree" requires judgement — use the poster's own language ("my ficus
again", "update on this one"), and record your matching criteria explicitly so
the number can be audited.

**For Q10:** restrict to diagnostic threads with 3+ substantive replies.
"Materially conflicting" means two pieces of advice that cannot both be
followed — *"water more"* against *"you're overwatering"*; *"repot now"*
against *"don't touch it until spring"*. Mere differences in emphasis do not count.

**Report confidence intervals** on every proportion. A point estimate from
n=400 without an interval is not a finding.

---

## 7. Decision thresholds — agreed in advance

> **These are Track B thresholds** (see §0). They apply only once participant
> access exists. Until then every verdict below reads `UNVALIDATED`.

**Do not adjust these after seeing the data.** They exist specifically to
prevent a marginal result being narrated into a green light.

### H1A — public documentation

| Share of progression posters returning to the same tree after 6+ months | Verdict |
|---|---|
| **≥ 25%** | Strong |
| **10–24%** | Mixed |
| **< 10%** | Fail |

### H1B — private record *(measured by artifact, not survey)*

| Share of eligible growers who **show** a record spanning ≥183 days | Verdict | Action |
|---|---|---|
| **≥ 25%** | **Strong** | The behaviour exists unaided. Proceed. |
| **10–24%** | **Mixed** | Minority behaviour. Pilot only; do not build. |
| **< 10%** | **Fail** | **The record thesis is dead.** Do not run the pilot. |

**H1B outranks H1A.** Public posting may be performance; a private artifact is
the behaviour the product actually depends on. If they disagree, believe H1B.

### H1C — pain from lost history

≥30% of interviews reporting a specific past incident is strong, 15–29%
moderate, below 15% weak. **Can upgrade a Mixed H1B to Strong** if frequent and
unprompted. Cannot rescue a Fail.

### H2A / H2B — demand volume

| | Strong | Moderate | Weak |
|---|---|---|---|
| **H2A** reactive diagnosis | ≥25% | 15–24% | <15% |
| **H2B** prospective go/no-go | ≥10% | 5–9% | <5% |

H2B thresholds are lower because the behaviour is rarer but higher-value — and
it is the one the advisor depends on.

### H3A / H3B — contradiction

≥30% of eligible threads containing materially conflicting advice is strong for
either; 15–29% moderate; below 15% a fail for the adjudication thesis.

### H4 — climate mismatch

**Requires triangulation.** Declare a wedge only if ≥2 independent methods
agree: content evidence of concrete mismatch, interview incidents among
tropical growers, and a blind audit of current apps' outputs by a practitioner
in that climate. One signal is not enough.

### H5 / H6 / H7

H5 passes if ≥2 of: existing provenance behaviour in a transfer cohort;
voluntary export or sharing of a record by pilot participants; practitioners
completing a real attestation with low friction. H6A requires repeat non-owner
interaction and voluntary participation. **H6B** requires that a comparable
case is reported as useful when it carries no recommendation. H7 reports substitute, complement, or
fail — **weighted below the behavioural findings**, per §3.

### Combined outcome

- **H1B strong** → the record thesis holds; proceed to the pilot.
- **H1B fail, H2B and H3B strong** → the advisor may stand alone, but loses the outcome flywheel and therefore its route past the credibility problem. Flag explicitly.
- **H1B fail and H2 weak** → neither idea has a behavioural foundation. Report that plainly.

### A prior that must be weighed against all of the above

`APP-MARKET-SCAN.md` now records a discovered lower bound of **at least 45**
competitive bonsai software products/surfaces. The earlier `~330` four-market
iOS figure was a historical measured-sample subtotal and is superseded as a
category-wide total; the reconciled lower bound is **≥647** before a fresh full
census. At least four known Android products are in the 10K+ install bracket.

**Even a strong H1B result must be reconciled with W2 economics.** Competitive
crowding and uneven observable distribution raise the market-ceiling question,
but they do not answer it. Active usage, retention, paid conversion, revenue and
economic viability remain `UNVALIDATED`.

---

## 7b. Ten questions W1 sharpened

W1 replaced the generic prevalence framing with these. They are the concrete
targets for Track B.

1. Among growers who intentionally record trees, what share use an app versus spreadsheet, photos or notebook?
2. What share sustain the behaviour for 6+ months?
3. At what collection size does structured tracking become worth its cost?
4. Which fields are recorded repeatedly versus filled once and ignored?
5. Does batch logging materially improve persistence?
6. Are reminders a retention engine or a notification-compliance illusion?
7. Does export increase willingness to commit a full collection?
8. What causes users to stop recording **entirely**, rather than switch tools?
9. How much observed paid use survives beyond the **first renewal**?
10. Which segment is large enough to support the venture?

Question 8 is the one no review corpus can reach — people who stop recording
leave no artefact behind to mine.

---


## 8. What would make this research useless

- **Anecdotes instead of counts.** "Many users post progressions" is not a finding. Every claim needs a numerator, a denominator, and an interval.
- **Sampling one season.** See §6. This alone would invalidate the study.
- **Counting the weak version of H1.** Before/after photo posts are easy to count and prove almost nothing. Q2 is the study.
- **Treating upvotes as demand.** Popular progression posts show they are *enjoyable to look at*, not that people keep records.
- **Selecting on the outcome.** Do not search for "progression" and then report that progressions are common. Sample the population first, classify second.
- **Softening a threshold after the fact.** If the result is 8%, the answer is fail.

---

## 9. Deliverable

1. **Answers to every question in §4** (27 at time of writing; the count changes as hypotheses are added), each with n, proportion, and confidence interval.
2. **A verdict against each threshold in §7**, stated plainly, including "fail" if that is the result.
3. **The classified dataset** — post ID, date, category, species, location, and for Q2 the same-tree matching decision.
4. **Method notes** — actual sample size, how "same tree" was matched, how "materially conflicting" was judged, and any source that could not be accessed.
5. **Representative verbatim quotes** for Q4, Q10 and Q14 — useful for product framing, but supporting the numbers rather than substituting for them.

A negative result is a successful study. The purpose is to avoid building the
wrong thing, and a well-supported "no" is the most valuable outcome available —
however long it takes to reach honestly.

---

## 10. Classification codebook

One primary category per post.

| Code | Category | Definition |
|---|---|---|
| `PROG` | Progression / update | Poster shows their own tree over time, or updates a previously shown tree |
| `SHOW` | Showcase | Poster shows a tree at a single point in time, no temporal element |
| `DIAG` | Diagnostic request | Asks what is wrong with a specific tree, or whether it is dead or recoverable |
| `POSTMORTEM` | Death report | Tree has died; poster reports or asks why |
| `TECH` | Technique question | How to perform a technique, or whether to perform it now |
| `ID` | Identification | What species is this |
| `ACQUIRE` | Acquisition | What to buy, where, is this material any good, nursery stock assessment |
| `RESOURCE` | Resource sharing | Articles, videos, tools, books |
| `SOCIAL` | Social / meta | Community talk, humour, subreddit meta |
| `OTHER` | Other | Anything else — keep below 10% of the sample or the codebook needs revision |

**Additional flags per post, where determinable:** species; poster's country or
hemisphere; beginner self-identification; for `DIAG` and `POSTMORTEM`, the
attributed cause; for `PROG`, the claimed time span.
