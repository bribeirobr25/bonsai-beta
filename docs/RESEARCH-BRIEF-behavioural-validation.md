# Research brief — behavioural validation for a bonsai product

**For:** any AI research agent or analyst with access to the Reddit API, a
browser-driving tool, or equivalent. **This brief is self-contained — you are
not expected to have any prior context.**

**Effort:** roughly one to two days of automated collection and analysis.
**Output:** a written report answering §7, with the raw classified dataset attached.

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
Outcome data accumulated across users then powers advice.

*Requires:* that growers will maintain a record over years. **H1 tests this.**

**Idea B — a diagnostic and contraindication advisor.** Answers "is it safe to
do X to my species, at its age, right now?" — including negative guidance
("do not carve this species"). Authority comes from outcomes at scale rather
than from an expert's name, which is the only route past the credibility moat.

*Requires:* that diagnostic anxiety is high-volume, and that existing free
advice is inconsistent enough that adjudication has value. **H2 and H3 test this.**

---

## 3. Hypotheses — each must be falsifiable

**H1 — Growers already keep longitudinal records of individual trees, unaided.**

The weak version (people post before/after photos) is almost certainly true and
proves little — it may be performance rather than record-keeping. The strong
version is what matters:

> **H1-strong:** a meaningful share of growers return to the *same tree*
> repeatedly over 6+ months, in a way that constitutes an ongoing record
> rather than a one-off showcase.

**H2 — Diagnostic anxiety is high-volume.**

> A substantial share of community activity is growers asking what is wrong
> with a specific tree, or whether it is dead.

**H3 — Existing free advice is materially inconsistent.**

> Diagnostic threads frequently contain conflicting answers, and advice is
> often generic rather than calibrated to the asker's species and climate.

**H4 (secondary) — Climate mismatch is a felt problem.**

> Growers outside northern-hemisphere temperate zones report that standard
> timing advice does not fit their conditions.

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

**Do not adjust these after seeing the data.** They exist specifically to
prevent a marginal result being narrated into a green light.

### H1 — the record-keeping thesis (Q2 is decisive)

| Result on Q2 | Verdict | Action |
|---|---|---|
| **≥ 25%** of progression posters return to the same tree after 6+ months | **Strong** | The behaviour exists unaided. Proceed to a build. |
| **10–24%** | **Mixed** | Behaviour exists but is a minority. Proceed only to a 4–6 week logging pilot, not a build. |
| **< 10%** | **Fail** | Posting is performance, not record-keeping. **Idea A is dead.** Do not run the pilot. |

Q4 (expressed regret at lacking records) can upgrade a *Mixed* to a *Strong* if
frequent and unprompted — that is latent demand for exactly this product. It
cannot rescue a *Fail*.

### H2 — the diagnostic volume thesis

| Share of activity that is diagnostic | Verdict |
|---|---|
| **≥ 25%** | Strong — a large, recurring, high-anxiety need |
| **15–24%** | Moderate — real but not dominant |
| **< 15%** | Weak — reconsider whether diagnosis is the wedge |

### H3 — the adjudication thesis

| Share of diagnostic threads with materially conflicting advice | Verdict |
|---|---|
| **≥ 30%** | Strong — adjudication has clear value |
| **15–29%** | Moderate |
| **< 15%** | Fail — the community already answers consistently, and a paid adjudicator has no room |

### H4 — climate calibration

Directional only, no threshold. Report the proportion and any representative quotes.

### Combined outcome

- **H1 strong** → build the system of record; it is the foundation.
- **H1 fail but H2 and H3 strong** → the diagnostic advisor may stand alone, but it loses the outcome-data flywheel and therefore its route past the credibility problem. Flag this explicitly.
- **H1 fail and H2 weak** → neither idea has a behavioural foundation. Report that plainly.

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

1. **Answers to all 14 questions in §4**, each with n, proportion, and confidence interval.
2. **A verdict against each threshold in §7**, stated plainly, including "fail" if that is the result.
3. **The classified dataset** — post ID, date, category, species, location, and for Q2 the same-tree matching decision.
4. **Method notes** — actual sample size, how "same tree" was matched, how "materially conflicting" was judged, and any source that could not be accessed.
5. **Representative verbatim quotes** for Q4, Q10 and Q14 — useful for product framing, but supporting the numbers rather than substituting for them.

A negative result is a successful study. The purpose is to avoid building the
wrong thing, and "no" delivered in two days is the most valuable outcome available.

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
