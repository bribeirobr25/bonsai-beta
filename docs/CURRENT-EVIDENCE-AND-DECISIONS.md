# Current evidence and decisions

**Purpose:** the single entry point. Read this before opening any other
document. It exists so that the Monetization, Brand and Growth workstreams do
not have to reconstruct the state of the project from several thousand lines of
research log.

**Status:** pre-validation. No product chosen, nothing built, no users.
**Last reconciled:** 2 September 2026.

Every claim carries an evidence status per the canonical taxonomy in
`PROJECT-BRIEF.md`: `OBSERVED` · `SUPPORTED SIGNAL` · `CONTRADICTED` ·
`UNVALIDATED` · `DEFERRED`.


> **Strategic Foundation / Pre-MVP Canon v1.0** — frozen 2 September 2026.
> Changes from here should be recorded as amendments rather than silent edits,
> so the four workstreams do not diverge from different snapshots.

---

## 1. Current thesis

> A persistent record for the life of a bonsai tree — preserving its journey and
> provenance across years and stewards, and connecting that history to relevant
> people and knowledge.

The sequence that survives the research so far:

**Tree Identity → Tree Journey → Living Provenance → Contextual Relationships →
Structured Outcomes → Decision Support**

The first four can produce value before any advisor exists. That ordering is
deliberate and is the main change from the original *record → outcomes →
advisor* formulation.

---

## 2. What has been falsified

| Claim | Status | Evidence |
|---|---|---|
| "Bonsai tracking is an empty space" | `CONTRADICTED` | At least 14 products ship |
| "Transferable tree history is novel" | `CONTRADICTED` | Bonsai Tracker, Yoi, Appy Bonsai all do it |
| "Permanent tree ID is a moat" | `CONTRADICTED` | Also RFID (ScandinavianBonsai), QR (Wabi Sabi), NFT (MyBonsaiTag) |
| "Community feed is a differentiated opportunity" | `CONTRADICTED` | Bonsai Empire, Jooni, Tiny Tree Club, Bonsai Tracker all ship one |
| "Incumbents ignore the southern hemisphere" | `CONTRADICTED` | Bonsai Tracker, Bonsai Empire, Bonsaiku, Nebari all claim climate adaptation |
| "A Portuguese-language position is open" | `CONTRADICTED` | Nebari (pt, 2026) and `br.com.bonsaiapp` |
| "A better encyclopedia could be the wedge" | `CONTRADICTED` | Closed since the first market pass |
| "Blockchain creates provenance trust" | `CONTRADICTED` | MyBonsaiTag tried it; the hard problem is whom to believe |

---

## 3. What is supported

| Claim | Status | Note |
|---|---|---|
| Growers document the same tree publicly over years | `SUPPORTED SIGNAL` | Multi-year progression threads exist, including 16-year examples. **Prevalence unmeasured.** |
| Progression threads act as learning infrastructure | `OBSERVED` | Growers state their first stop on acquiring a species is its progression threads |
| People want to follow a specific *tree* | `OBSERVED` | Spontaneous "please keep us updated" directed at trees |
| Recurring small-group learning around trees exists | `OBSERVED` | Study groups, one member reporting seven years |
| "Is it safe to do X now?" is a recurring job | `SUPPORTED SIGNAL` | Repot/prune/defoliate timing questions recur; frequency unmeasured |
| Advice materially conflicts | `SUPPORTED SIGNAL` | A found case: same tree, same question, "wait" vs "you can repot now" |
| Missing context drives conflict | `SUPPORTED SIGNAL` | First reply to a repotting question was often "state your location" |
| Provenance carries cultural and market weight | `OBSERVED` | Kicho Bonsai (1,000+ trees since 1980); Pacific Bonsai Museum accession records; pricing attributed to material + collector + stylist + potter |
| Beginners experience public exposure as friction | `OBSERVED` | Documented hesitancy; Bonsai Empire's own etiquette guidance acknowledges starter plants are looked down on |
| Failure is documented and socially valued | `OBSERVED` | Growers report deaths; others thank them for it |
| Conversation-centric systems fragment tree history | `OBSERVED` | A grower consolidated several threads about one tree, judging he had recorded it badly |

---

## 4. What remains unvalidated

**None of these has failed. None has been tested.**

| Hypothesis | Status | Blocked on |
|---|---|---|
| Growers keep **private** longitudinal records (H1B) | `UNVALIDATED` | Participant access — **the load-bearing assumption** |
| Lost history causes concrete pain (H1C) | `UNVALIDATED` | Participant access |
| Verifiable provenance adds trust over plain history (H5) | `UNVALIDATED` | Participant access |
| Tree-led relationships beat generic feeds (H6) | `UNVALIDATED` | Participant access |
| Outcome evidence can substitute for reputation (H7) | `UNVALIDATED` | Experiment never run. **Complement is now more plausible than replacement.** |
| Anyone will pay | `UNVALIDATED` | No pricing test |
| Vision can assess bonsai material from a photo | `UNVALIDATED` | No benchmark exists for this task |
| Residual climate mismatch for tropical growers | `UNVALIDATED` | Needs triangulation |

---

## 5. Competitive reality

**18 known distinct products**, 17 believed active. Master list and derivation
in `APP-MARKET-SCAN.md` §0 — take the number from there, not from prose.

**iOS observable traction is low; Android is materially stronger.** Across four
storefronts the category holds roughly 330 iOS ratings and the six-year-old
iOS leader has 136 — but Bonsai Empire, with only 64 US iOS ratings, is
confirmed at **10K+ Google Play installs**.

> **Amended 2 Sep 2026 — the Android gap is closed, and it changes the
> reading.** Google Play confirms the category leader at the **10K+ install
> bracket**, with third-party trackers estimating **~42–44K cumulative
> downloads**. The earlier 2K+ observation is superseded.
>
> So the low iOS figure was partly a **platform-sampling artefact**: 64 US iOS
> ratings against 10K+ Android installs. **Adoption is larger than the
> iOS-only scan suggested.**
>
> What remains `UNVALIDATED`: active usage, retention, paid conversion,
> revenue and category economics. Downloads are not users and are not
> customers. See `APP-MARKET-SCAN.md` §7.

**Still unoccupied**, as far as the scan reached:

- **Verifiable provenance** — `claim → evidence → attestation → confidence`. Transferable history is taken; *graded evidence* is not.
- **Aggregate outcome data** — no product turns cross-user outcomes into guidance.
- **Comparable Journey** — surfacing similar documented cases rather than answering.

---

## 6. Domain model conclusions

Stress-tested against 20+ real public histories. Detail in `DOMAIN-MODEL.md`.

- The root object is a **Living Subject**, not a Tree — forests and root-over-rock are compositions.
- **Observed outcome must be separated from attributed cause.** Community death reports routinely disagree on causation.
- **Intent** is a first-class field; without it an outcome cannot be interpreted.
- **State** (a condition persisting over a period) is distinct from **Event**.
- **Confidence attaches to the claim, not the subject.** There is no "verified tree".
- **Claims are versioned**, never silently rewritten.
- **Death does not close the record.**
- Blockchain is not required; the hard problem is governance, not cryptography.

---

## 7. Product candidates

Nothing is chosen. Three composites remain live, all `UNVALIDATED`:

| Candidate | Content | Note |
|---|---|---|
| **P1** Tree identity + journey (+ provenance substrate) | Foundational candidate | Outcome aggregation explicitly **out** of the initial core |
| **P2** Acquisition companion | Candidate funnel | Ends with "start this tree's journey", not a care guide |
| **P3** Teacher / practitioner layer | Candidate ceiling | Best economics; also a source of **attestations**, which connects authority without claiming it |

**The advice ladder** determines what can ship without authority: levels 0–3
(record, retrieve own history, retrieve similar cases, describe outcomes)
require none. Levels 4–5 (decision support, recommendation) depend on H7.

---

## 8. Strategic risks

| Risk | Consequence |
|---|---|
| **Logging friction** | **Risk #1.** If nobody records continuously, everything downstream fails |
| Market too small | 14 products, low observable traction, no winner |
| Authority gap | The advisor may never become trustworthy |
| Bad causal inference | Outcome data producing confident, wrong guidance |
| Status creep | A record decaying into a ranking, contradicting the stated intent |
| Over-complexity | The model is rich; using it must not feel that way |
| Cold start | Partly mitigated — value does not require network density on day one |
| Incumbent response | Features are copyable; only the accumulated corpus is not |

---

## 9. Validation tracks

**Track A · zero-participant, runnable now.** Market scan (done), competitor
review mining (not started), public behavioural evidence, provenance research,
shadow validation.

**Track B · participant validation, blocked on access.** Artifact interviews,
H1B/H1C, retention, attestation, H7, willingness to pay.

> A Track B test that cannot be run is `UNVALIDATED`, never `FAIL`.

---

## 10. Validation opportunities

> **Canonical rule:** validation opportunities are inputs to the venture, not
> dependencies of it. If an opportunity disappeared tomorrow, the direction of
> work should not change.

**Upcoming:** a beginner workshop in roughly one month, 90–120 minutes,
attendees leaving with their first tree. Cohort is **zero-to-low experience**.

Useful for beginner onboarding, vocabulary, first-tree anxiety, early logging
friction and 7/14/30-day return. **Not** useful for experienced growers,
provenance, transfers, willingness to pay, practitioner workflows, long-term
retention or network effects.

Activation there will be **artificially inflated** — instructor present, guided,
novel, social. The meaningful question is whether anyone returns *because it
gave them value* rather than because they were asked.

---

## 11. Next decisions

1. **Competitor review mining** — why current trackers please, frustrate or get abandoned. Track A, no approval needed.
2. **Monetization & economics** — is there a plausible structure, and where is value capturable? Two sharpened questions now that Android is resolved: **the category leader converted substantial distribution into tens of thousands of downloads — how many became recurring or paying users, and why?** And the ceiling question: would 5,000 users at €3/month be success or failure here?
3. **Brand** — which territory is credible without promising expertise we lack? Safety / memory / progress / story / learning / legacy.
4. **Growth** — which loops, not which channels.
5. **Cross-front reconciliation** — what product thesis survives all four lenses? *Including the option that none does.*
6. **Then** MVP validation strategy, and only then product design.

---

## 12. Choosing an MVP instrument

Not *"which features go in the MVP?"* but **"what is the largest uncertainty
right now, and what is the smallest instrument that resolves it?"**

**An MVP need not be software.** The instrument follows the risk:

| If the biggest uncertainty is… | The instrument is… |
|---|---|
| Message / value proposition | Landing page |
| Whether demand exists at all | Fake door |
| Logging retention | Tiny web app, or a manual journal |
| Whether Comparable Journey is valuable | Curated prototype — match cases by hand |
| Provenance | A mock handoff record |
| Teacher economics | Concierge service or workbench prototype |
| First-tree safety | Lightweight guided decision experience |

Concierge and manual approaches are legitimate MVPs and often better ones:
they answer the question without building the thing.

### What product design must receive before it starts

Design should not be handed *"make a bonsai app."* It should receive:

target user · the job · value proposition · the hypothesis under test · why
this wedge · evidence supporting it · evidence contradicting it · economic
logic · acquisition logic · brand principles · **what this MVP must prove** ·
**what this MVP must explicitly not attempt.**

If those cannot be filled in, the preceding workstreams are not finished.

### Growth: look for loops, not channels

Channel planning (Instagram, SEO, ads) is premature. The prior questions:

- **Acquisition moments** — first tree purchase · gift · workshop · nursery visit · first problem · first repot · first technique · new species
- **Objects that travel naturally** — tree identity · journey · progression · before/after · transfer · comparable journey
- **Actors with existing distribution** — nurseries · teachers · clubs · workshops · events · creators

A loop that also produces evidence is worth more than one that only produces
users.

---


## 13. Document authority

| Document | Role |
|---|---|
| **This file** | Reconciliation layer — start here |
| `PROJECT-BRIEF.md` | Venture strategy, canonical conventions, idea portfolio |
| `DOMAIN-MODEL.md` | Object and recording model; legacy corpus assessment |
| `RESEARCH-BRIEF-behavioural-validation.md` | Study design; Track A / Track B |
| `APP-MARKET-SCAN.md` | Competitive measurement and its limits |
| `bonsai-deep-research-report.md` | Reference dossier — a research plan, not results |
| `parallel-work.txt` | **Research log. Superseded.** Content extracted into the documents above. Note this file was overwritten on 1 Sep 2026; the earlier Gate 0 and domain-model research survives only in git history at commit `0030e009`. |

Where documents disagree, this file and `PROJECT-BRIEF.md` take precedence.
