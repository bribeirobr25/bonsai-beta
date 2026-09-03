# Step 0 · `L4-A / G10-A` — Comparable Journey corpus-density shadow test

**Run:** 4 September 2026 · Track A, zero participants
**Design:** `W4-LOOP-FALSIFICATION-DESIGN-v0.2.md` §8A
**Dataset:** `W4-L4A-corpus-density-coded.csv`

> **This test does not establish user value.** It asks one structural question
> before anyone asks whether users want the thing:
> **does realistic context filtering leave enough genuinely comparable cases?**

---

## Verdict

> ## `MIXED · DENSITY RISK HIGH`
> **and the binding constraint is source access, not the method.**

Tier 2 matching works. **Tier 1 could not be tested at all**, because the only
corpus we could reach has **no variance on climate** — the dimension most likely
to destroy density.

---

## What the design asked for, and what was reachable

The design specifies **20–30 real public progression histories**. Reachability
was tested rather than assumed:

| Source | Result |
|---|---|
| **Bonsai Nut** — has an explicit *"5 to 10+ Year Progression Thread"* | **HTTP 403** to naive fetchers, as canon predicted |
| **r/Bonsai** (~362k members) | HTTP **200 but effectively blocked** — returns a "Welcome to Reddit" interstitial with **0 post links**. Canon's claim holds; the 200 is misleading. |
| Bonsai Tonight | reachable, but **no progression-series archive** |
| **Adam's Art and Bonsai** | reachable, has a `progression` category — **used** |

**Sample: 12 cases from one author.** Below the 20–30 floor, and — more
importantly — **single-source**.

## Field presence — the method works

Coded against the nine domain-model fields the design specifies:

| Field | Present | |
|---|---:|---|
| intervention | **12/12** | 100% |
| evidence (photos ≥5) | **12/12** | 100% |
| time relation | 11/12 | 91% |
| species | 10/12 | 83% |
| stage | 10/12 | 83% |
| location | 10/12 | 83% |
| climate | 9/12 | 75% |
| state | 7/12 | 58% |
| outcome | 7/12 | 58% |
| intent | 7/12 | 58% |

**Real progression writing does carry the model's fields.** That is a genuine
positive: the domain model is not imposing structure the source material lacks.

**The weakest three are `state`, `outcome` and `intent` at 58%** — and those are
precisely what makes a comparison *useful* rather than merely similar. Knowing
that someone repotted a ficus is not knowing what condition it was in, why, or
what happened next.

## Tier 2 — works

| Query shape | Comparable cases |
|---|---:|
| ficus × wire | 7 |
| ficus × defoliate | 7 |
| ficus × repot | 5 |
| ficus × prune | 5 |
| ficus × chop | 3 |
| maple × prune / wire / defoliate / chop | 2 each |

**11 of 21 observed query shapes have ≥2 independent comparable cases.**

## Tier 1 — could not be tested, and that is the finding

Tier 1 is `species × climate × stage/state × intervention`. In this corpus:

- **9 of 12 cases are ficus** (75%)
- **9 of 12 mention Florida** (75%)
- **climate has exactly one value**

So climate contributes **zero discriminating power**, and **Tier 1 collapses into
Tier 2**. A realistic Tier 1 query — *"ficus, repot, temperate climate,
development stage"* — returns **0 comparable cases**, because no temperate case
exists in the sample.

> **Single-source density is illusory.** It looks adequate precisely because
> everything shares an author, a garden, a climate and mostly one species. That
> is the opposite of comparability — it is a monoculture.

## What this does and does not license

**Does not license:** parking `L4`. The failure is in the sample, not
demonstrably in the concept. The method extracts the fields it needs.

**Does not license:** proceeding to `L4-B` participant utility testing. The
design gates `L4-B` on `L4-A` surviving, and it has not.

**Does license** one concrete conclusion: **`L4`'s feasibility is now known to
depend on multi-source, multi-climate access** — and the two richest multi-author
sources are behind access controls that canon already flagged and this test
confirmed.

## What would change the verdict

1. **Access to one multi-author, multi-climate source.** Bonsai Nut's progression
   thread is the single highest-value target; it needs a browser-driving tool,
   which canon already noted.
2. **A second and third single-author source in different climates** — a
   temperate European and a temperate North American blog would give climate two
   or three values and make Tier 1 testable at all.
3. Either route is still Track A. **Neither needs participants.**

## Method notes for whoever runs it next

- Reachability was tested per source; do not assume canon's access notes are
  still current in either direction — Reddit's HTTP 200 is a false positive, and
  Bonsai Nut's 403 held.
- Field coding is **pattern-based over article body text**, with navigation and
  sidebar stripped. That is a screening method, not close reading; treat per-case
  values as indicative.
- 12 cases is below the design floor of 20. **Do not convert any count here into
  prevalence or a user-number threshold** — the design says so explicitly and it
  matters more at this sample size.
