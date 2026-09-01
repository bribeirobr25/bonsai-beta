# Bonsai Domain Model — extraction spec

**Status:** durable artifact. This document, not the codebase, is what carries
forward into any future product.

The application in this repository is frozen. It is a reference reader, and the
reference-library product shape is closed — Bonsai Empire holds an equivalent
110+ species catalogue plus editorial authority plus a care app, and no schema
work overcomes that. What follows is the part of this project worth keeping:
the domain model, the taxonomy derived from it, and an honest account of the
data's provenance.

Every figure below was derived programmatically from `src/data/bonsaiData.ts`
at commit `8ff4d97d` (112 species, 1,637 technique entries).

---

## 1. What survives, and what does not

**Absorb into the new product:**

| Asset | Why it survives |
|---|---|
| The entity shape (§4) | species × technique × timing × maturity × contraindication. No incumbent publishes this structure. |
| The canonical technique taxonomy (§2) | 16 techniques, verified to cover 100% of entries. |
| The contraindication model (§3) | 264 "do not do this to this species" flags. The single most differentiated idea here — every competitor writes affirmatively. |
| Maturity-gating (§5) | "at what tree age is this appropriate" on every entry. Bonsai Empire's Ficus guide carries roughly one such note in the whole page. |
| The 1,637 entries | **As a seed corpus for practitioner review — not as truth.** See §8. |
| The recording principles (§7) | Outcome-vs-cause, intent, uncertainty and progressive structure. Derived from how growers actually document, and each corrects a defect in this corpus. |

**Do not carry forward:** the React application; the reference/library product
shape; the SEO-only acquisition thesis; the dual `difficultyLevel` /
`category` taxonomy (two names for one concept, disagreeing on 15 species);
the gallery structure (104 of 112 species have empty `styles` and `nature`
objects).

---

## 2. Canonical technique taxonomy

The source data carries **287 distinct technique name strings**. These are not
287 techniques — they are 16 techniques with free-text qualifiers appended
(`Jin (Deadwood Technique)`, `Jin (Deadwood) Technique`, `Jin (Deadwood)`,
`Jin (Deadwood) Creation`, `Jin (Deadwood) Not Recommended` are all one thing).

Normalising on the stem yields **16 canonical techniques covering 1,637 of
1,637 entries — 100%, with nothing unmapped**:

| Key | Technique | Entries |
|---|---|---|
| `NEBARI` | Nebari development (surface roots) | 114 |
| `JIN` | Jin — branch deadwood | 113 |
| `DEFOLIATION` | Defoliation (total / partial) | 112 |
| `PINCHING` | Pinching new growth | 112 |
| `SHARI` | Shari — trunk deadwood | 112 |
| `CARVING` | Carving | 112 |
| `FERTILIZING` | Fertilizing | 112 |
| `GRAFTING` | Grafting (scion / thread / approach) | 111 |
| `AIR_LAYERING` | Air layering | 111 |
| `ROOT_PRUNING` | Root pruning | 108 |
| `PEST_DISEASE` | Pest and disease management | 103 |
| `REPOTTING` | Repotting | 100 |
| `STRUCTURAL_PRUNING` | Structural pruning | 99 |
| `WIRING` | Wiring | 97 |
| `MAINTENANCE_PRUNING` | Maintenance pruning | 66 |
| `WATERING` | Watering and humidity control | 55 |

Eleven of the sixteen appear on essentially every species (~112), which means
a canonical set was intended all along — it was simply never enforced by the
schema. Treat this list as the intended vocabulary made explicit.

**Confidence in this mapping.** Coverage is 100% only in the sense that every
entry matched a rule. **26 entries (1.6%) match two canonical patterns** and were
assigned by rule precedence rather than by judgement:

| Pattern collision | Entries | Assigned | Assessment |
|---|---|---|---|
| Nebari + root pruning | 16 | `NEBARI` | Defensible — nebari is the goal, root pruning the method |
| Repotting + root pruning | 7 | `REPOTTING` | Debatable — arguably two techniques in one entry |
| Grafting + jin | 1 | `JIN` | **Wrong** — this is a grafting technique |
| Air layering + nebari / humidity | 2 | `AIR_LAYERING` | Defensible |

The mapping is a strong starting point, not a finished migration. These 26 need
human assignment. The collisions are themselves informative: the source data
sometimes encodes *two* techniques in one entry, which the new schema should
not permit.

**Known defects to resolve during migration:**

- 5 species contain two entries mapping to the same canonical technique
  (`NEBARI` totals 114 and `JIN` 113 against 112 species). Deduplicate.
- `STRUCTURAL_PRUNING` (99) and `MAINTENANCE_PRUNING` (66) are inconsistently
  split; 33 entries merge them as `Pruning (Structural & Maintenance)`.
  Decide on two techniques or one and apply it uniformly.
- Coverage is uneven — `WATERING` appears on 55 species and `NEBARI` on 114.
  A canonical model implies every technique has a defined position for every
  species, including "not applicable".

---

## 3. Contraindication model

**This is the most valuable and most defensible content in the project.**

264 entries carry `notRecommended: true`. Critically, the flags are not evenly
spread — they concentrate on the four techniques that genuinely fail on
broadleaf and tropical species:

| Technique | Flagged | Share |
|---|---|---|
| `SHARI` | 73 / 112 | 65% |
| `CARVING` | 65 / 112 | 58% |
| `JIN` | 57 / 113 | 50% |
| `DEFOLIATION` | 50 / 112 | 45% |
| `GRAFTING` | 11 / 111 | 10% |
| `PINCHING`, `AIR_LAYERING`, `WIRING` | 3, 3, 2 | ≤3% |
| all others | 0 | 0% |

That distribution is botanically coherent — deadwood techniques suit conifers
and fail on species that rot rather than harden. The data is not random noise,
which is mild evidence it is worth verifying rather than discarding.

**Product significance.** For a beginner, whose dominant failure mode is
confidently doing something irreversible, the prohibition is the more valuable
half of the advice. Research across Bonsai Empire, Bonsai4me, Bonsai Mirai,
Virginia Bonsai Society and Bonsai Nut found nobody systematically publishing
contraindications by species. This is the clearest unclaimed position found.

The model should be richer than a boolean. Recommended shape:

```
contraindication: {
  verdict: 'recommended' | 'with_caution' | 'not_recommended' | 'not_applicable'
  reason: string          // why, in botanical terms
  confidence: 'verified' | 'unverified'
}
```

The source data collapses "with caution" and "not recommended" into one flag —
`Wiring with Caution` and `Carving Not Recommended` both become `true`. That
distinction matters to a user and should be recovered.

---

## 4. Entity shape

One entity with four nested groups. Coverage across 112 species:

| Group | Fields | Coverage |
|---|---|---|
| Identity | id, scientificName, commonName, family | 112 / 112 |
| Environment | temperatureMin/Max, sunExposure, position, climate, nativeRegion | 112 / 112 |
| Botany | leafType, flowering | 112 / 112 |
| Classification | difficultyLevel, category | 112 / 108 |
| Care | general, soilType, feeding, watering | 112 / 112 |
| Techniques | 16 canonical × {timing, maturity, contraindication, description} | 1,637 entries |

**Schema constraints the original lacked** — each maps to a defect found in
production data:

- `climate` must be a closed enum. 41 species hold prose here, one of 390
  characters, which broke the climate filter and the icon mapping.
- `temperatureMin < temperatureMax`, both in Celsius. 20 species violate this
  (`40°C – 5°C`), 5 more have min equal to max, and several appear to hold
  Fahrenheit values in a Celsius field.
- `position` and `commonName` need length bounds. One `commonName` runs to 163
  characters and generates a 150-character URL slug; 39 `position` values
  exceed 60 characters.
- One difficulty scale, not two.
- Uniqueness on `scientificName`. Two species are duplicated
  (*Schefflera arboricola*, *Jacaranda mimosifolia*), so 112 is really 110.

---

## 5. Maturity model

`maturityStage` is free text: **486 distinct values across 1,637 entries**,
averaging 36 characters. It is, however, semi-structured and machine-extractable:

- 829 entries (51%) contain an explicit numeric year value
- 464 reference an establishment state (established / mature / well-developed)
- 183 permit the technique at any age
- 83 gate on trunk caliper rather than age

Proposed enum, which the above supports:

```
maturity: 'any_age' | 'established_2_3y' | 'developed_5y_plus'
        | 'mature_10y_plus' | 'trunk_caliper_gated'
maturityNote: string   // the original prose, retained
```

Gate on **development state, not calendar age** wherever possible. A five-year
tropical grown in Brazil and a five-year larch grown in Scotland are not
comparable, and calendar age is the axis most likely to give wrong advice
across climates.

---

## 6. Timing model

`timing` is free text: 931 distinct values, averaging 54 characters. Season
mentions: spring 987, summer 518, winter 255, autumn 181, dormancy 108,
year-round 60.

**Do not model timing as months.** Calendars are conventionally written for
northern-hemisphere temperate conditions, which is wrong by roughly six months
for a southern-hemisphere grower and largely meaningless in the tropics.

> **Correction.** An earlier version said *every* incumbent assumes northern
> temperate. That is no longer true: Bonsai Tracker advertises hemisphere- and
> climate-aware tasks, Bonsai Empire uses local climate and hardiness zones,
> and Bonsaiku and Nebari ship season × climate calendars. The design guidance
> below still holds — model the trigger, not the month — but it is no longer a
> competitive gap. Model the *phenological* trigger
and resolve it to a date per user:

```
timing: {
  trigger: 'pre_bud_break' | 'active_growth' | 'post_hardening'
         | 'dormancy' | 'year_round'
  hemisphere_agnostic: true
}
```

This is the one place where the project's data can beat the incumbents rather
than match them, and it costs nothing to design in from the start.

---

## 7. Recording model and object structure

Fifteen subsections, derived from stress-testing the model against 20+ real
public tree histories — multi-year progressions, deaths, recoveries, ownership
changes, museum records, forests and contradictory histories. Each corrects a
defect in the legacy corpus or a gap the real cases exposed.

These emerged from analysing how growers actually document trees in public
progression threads. Each corrects a specific defect in the corpus described
above, and each should be designed in from the start rather than retrofitted.

### 7.1 Separate observed outcome from attributed cause

**The single most important distinction in the model.** A documented case: a
Japanese Black Pine showed yellowing and dieback; after consulting club
members the owner *inferred* insufficient water uptake due to substrate,
changed the substrate and watering, and the tree recovered.

The correct record is **not** `cause = insufficient water uptake`. It is:

```
observed        yellowing, dieback
intervention    repot, substrate change, watering adjustment
observed_outcome  recovery
attributed_cause  insufficient water uptake   (owner-attributed, unverified)
```

Community death reports show why this must be canonical: one grower attributes
a loss to overwatering and another immediately notes that underwatering
presents identically; a third attributes death to skipped repotting and is
challenged on the diagnosis.

**Death records exist. Reliable causal data does not emerge from them
automatically.** Collapsing observation into causation would produce confident,
wrong guidance — the most dangerous possible failure for this product.

### 7.2 Record intent, not only action

Every technique entry in the legacy corpus records *what* was done and *when*.
None records *why*. Good progression threads always carry intent, and without
it an outcome cannot be interpreted — pruning for ramification and pruning for
vigour reduction are the same action with different success criteria.

```
event
  action     repotting
  intent     reduce root mass to slow vigour
  outcome    observed later, linked back to this event
```

`intent` should be a first-class field alongside `action` and `outcome`.

### 7.3 Preserve uncertainty; never invent precision

The legacy corpus fails this badly — 486 free-text maturity strings, prose in
enum fields, 20 invalid temperature ranges, and precise-looking values with no
basis.

A record must be able to say it does not know:

| Instead of | Record |
|---|---|
| `Age: 42 years` | `Estimated age: 35–50` · source: previous owner |
| `Origin: Japan` | `Origin: unknown` |
| `Species: Ficus retusa` | `Species: Ficus retusa (probable)` |

**A good historical record does not invent precision. It preserves
uncertainty.** This also makes practitioner review tractable: a reviewer can
correct a confidence level far more cheaply than an unmarked assertion.

### 7.4 Capture first, structure progressively

The corollary, and the mitigation for the venture's largest risk — logging
friction. The minimum viable record is **tree + event + approximate date**.
Everything else is optional enrichment, requested or inferred later. Demanding
a structured form before accepting a memory guarantees no memory is captured.

---


### 7.5 The object model this implies

Working the principles above against real documented histories produces a
structure meaningfully different from the legacy corpus. Three points are
load-bearing.

**The root object is not a `Tree`.** Forest plantings and root-over-rock
compositions are single subjects made of several trees, so the model needs a
`LIVING SUBJECT` with an optional `COMPOSITION` holding members.

**Claims are first-class**, because most facts about an old tree are asserted
rather than known.

**Status includes `Unknown`** — trees are lost track of, not only lost.

```text
LIVING SUBJECT
├── Identity
├── Current State
├── Claims
│   ├── Source · Evidence · Confidence · Attestation
├── Journey
│   └── Events
│       └── Action · Intent · Context · Evidence
│           · Observation · Outcome · Attributed Cause
├── Lineage
│   ├── Biological      (propagation — cuttings, air layers)
│   ├── Stewardship     (successive owners)
│   └── Practitioner    (who worked on it)
├── Relationships
├── Conversations
└── Status · Alive | Deceased | Unknown

COMPOSITION
├── Identity
├── Journey
└── Members → Tree A, Tree B, Tree C
```


**Confidence attaches to the claim, not to the subject.** There is no such
thing as a "verified tree." One subject can simultaneously hold: acquisition
*verified*, age *estimated*, original nursery *unknown*, styling practitioner
*confirmed*, species *probable*. A single trust badge would erase exactly the
uncertainty §7.3 exists to preserve.

Evidence states, rather than quality seals:

| State | Meaning |
|---|---|
| `recorded` | someone asserted it |
| `evidence_attached` | supporting material exists |
| `counterparty_confirmed` | the other party to the event confirmed it |
| `practitioner_attested` | a practitioner confirmed it |
| `institution_attested` | a club, exhibition or institution confirmed it |

**`institution_attested` does not mean a better tree.** It means the claim has
a particular source. Keeping that distinction explicit is what stops an
evidence model from decaying into a status ranking.


Note the `Event` carries seven fields, not the three a care log would use.
`Context` and `Evidence` are what make an outcome interpretable later;
without them the record is anecdote.

### 7.6 What does not belong in the core

Deliberately excluded, and worth stating so the model does not accrete:

pot, tool and fertilizer inventory · marketplace · awards and rankings ·
followers · likes · AI diagnosis · detailed weather history · financial value ·
NFT or blockchain · a comprehensive care encyclopedia.

Several of these may eventually attach at the edges. None belongs at the
centre, and most would actively distort it — rankings and followers convert a
record into a status economy, which is the failure mode §3 of `PROJECT-BRIEF`
is designed to avoid.


---

### 7.7 Relationships carry roles, and roles change

A person↔subject relationship is not "owner." It is a **role with a start, an
end, and its own evidence** — and one person may hold several over time.

`steward` · `collector` · `propagator` · `grower` · `stylist` · `teacher` ·
`student` · `practitioner` · `donor` · `nursery` · `institution` · `photographer`

This matters because the tree outlives its people. Someone can acquire a tree,
work on it, exhibit it, sell it and leave the record entirely while the subject
persists — which is precisely what separates this from a personal tracker.

**Institutional precedent exists.** The Pacific Bonsai Museum records trees
approximately this way: a *Ficus microcarpa* with accession number 304, in
training since 1965, donated by Amy Liang, with provenance describing its
development and donation — and elsewhere, "original artist unknown" recorded
honestly rather than omitted. The hypothesis here is to **democratise a light
version of that**, which today exists only for exceptional trees.

### 7.8 Lineage: a subject can outlive its parent

Air layering, cuttings, grafting, seed and root division mean one subject
produces others. A documented case: an Amur Maple died, but the air layer taken
from it is still alive.

```text
SUBJECT A  (deceased)
   └── air layer, 2029
         ↓
      SUBJECT B  (alive)
```

Records therefore cannot be independent of one another. Propagation lineage is
structural, not metadata — and it is what allows a dead tree's line to continue
in the record.

### 7.9 History is versioned, never silently rewritten

Suppose a species was recorded as *Pinus thunbergii* and a practitioner later
identifies *Pinus densiflora*. **Do not overwrite.**

```text
2027 · species recorded as Pinus thunbergii      (owner-recorded)
2030 · identification revised to P. densiflora   (practitioner_attested)
```

Both entries stand. That is what history *is* — knowledge changes, and a record
that hides its own revisions cannot be trusted about anything else.

### 7.10 Death does not close the record

Status moves `alive → deceased`; the Journey persists and stays discoverable.
This matches how bonsai institutions already behave — Japan's Kicho Bonsai
registry has documented over a thousand trees since 1980 and preserves the
history of specimens that later died or disappeared.

It also matters for the dataset: **a dead tree can be more informative than
fifty flawless progressions.**

### 7.11 Blockchain is not required

Everything above needs identity, an audit trail, evidence, permissions,
attestations and history. All are ordinary engineering.

The hard problem is not *preventing someone from altering a byte*. It is
**deciding whom to believe and why** — which is governance, not cryptography.
Note that a competitor, MyBonsaiTag, already attached identity, ownership
transfer and history to NFT/blockchain, which did not resolve the trust
question for them either.


### 7.12 State is not Event

An `Event` happens at a point. A `State` persists across a period, and real
histories are full of them: an Austrian Black Pine recorded as apparently dead
for about a month before waking very late after an anomalous winter; a Premna
spending roughly six months without foliage after repotting before resuming
growth.

Neither is a moment. Modelling them as events loses the duration — which is
exactly the information a later reader needs.

### 7.13 Not every subject is a tree

A Lacebark Elm forest was planted from seven seedlings; one died and was
replaced by a cutting; the group is still treated by everyone, including its
owner, as **the same forest**. So the model needs:

```text
LIVING SUBJECT
 ├── TREE
 └── COMPOSITION → Tree A, Tree B, Tree C
```

Forest, raft and group plantings are compositions. **Externally the product
should still say "tree"** — nobody should have to study an entity-relationship
diagram in order to water a bonsai.

Related objects — pot, stone, stand — matter artistically (root-over-rock
progressions track the stone as part of the composition), but they belong
*outside* the core. The architecture should permit the extension and not ship
it, or this becomes an inventory system for pots.

### 7.14 Related subjects, not pedigree

Propagation lineage supports a genuinely useful grouping: *same mother plant*,
*same seed batch*, *same cutting source*, *same collected material*,
*air-layer child*. One documented grower notes his Ficus #32 came from the same
mother plant as several of his other trees.

This is botanical and documentary, **not an elitist pedigree** — and it may be
the most scientifically useful relation in the model, since sibling subjects
under different conditions are a natural comparison set.

### 7.15 Why claims must be versioned — a worked case

An owner believed he knew his tree's history from the previous owner. At an
exhibition he met Bill Valavanis, who knew the tree and revealed that some of
that history was **wrong**.

```text
CLAIM v1 · origin X · source: previous owner
CLAIM v2 · origin Y · source: Bill Valavanis, in person
```

Both persist. Overwriting v1 would destroy the evidence that the record's
confidence changed and why — which is the part a future reader most needs.


## 8. Provenance — read before using any of this

**The 1,637 entries are AI-generated and have never been reviewed by a
practitioner.** The repository history shows roughly half of all commits
authored by automated agents, with the catalogue expanding from 15 to 112
species in four days.

Demonstrable errors in the current data: 20 invalid temperature ranges, 41
climate fields holding prose instead of a value, 2 duplicated species, 287
name variants for 16 techniques, and 185 of 830 image references pointing at
files that do not exist (24 after the current fix).

Care advice is trust-critical: a reader follows it and their tree lives or
dies. Against practitioners with decades of standing, unverified generated
content is a liability rather than an asset, and no amount of schema work
changes that.

**Therefore:** treat this corpus as a *structured hypothesis* — a well-shaped
draft that makes a practitioner's review cheap, because they are correcting
fields rather than writing from scratch. It must not ship to users unverified.

---

## 9. Open questions for practitioner review

1. Is 16 the right technique set, or does it merge things a practitioner would
   separate (structural vs maintenance pruning) and split things they would merge?
2. Are the 264 contraindications correct? They are the most valuable content
   here and also the most dangerous if wrong.
3. Does phenological-trigger timing (§6) actually work across climates, or do
   growers need something more local?
4. Is maturity better expressed as trunk caliper than as age?
