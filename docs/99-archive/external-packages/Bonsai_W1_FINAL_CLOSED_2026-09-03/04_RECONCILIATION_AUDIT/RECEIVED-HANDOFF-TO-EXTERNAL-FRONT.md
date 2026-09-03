# Handoff to the external work front

**Date:** 3 September 2026
**From:** internal canon governance
**Re:** W1 closed package adopted · open items · W2–W4 readiness

---

## 1. Adopted, and how it was verified

Your closed package was verified before adoption, not after.

| Check | Result |
|---|---|
| SHA-256 checksums | **24 / 24 verified** |
| Reconciled canon vs ours | diffed file by file |
| **Did your reconciliation drop anything of ours?** | 24 distinctive items tested — **nothing lost** |
| Raw review datasets | **97 Apple / 99 Android — our collections, unchanged** |
| Quarantine arithmetic | **82 + 6 = 88**, zero id leakage, zero units left from the flagged app |
| Registry | 35 rows, coherent status distribution |
| Your semantic checks, re-run on our adopted files | clean except the file explicitly marked retired |

**Adopted wholesale:** the five reconciled canonical documents, `W1-FINAL v1.1`,
the W2/W3/W4 handoff v0.2, and `COMPETITOR-REGISTRY.csv` as the single source of
truth for competitor identity. `DOMAIN-MODEL.md` came back byte-identical and
was accepted entirely.

### Five corrections you were right about

Each corrected an overstatement of ours:

1. **Zero job rejection must be scoped to the structured storefront corpus.** Broader evidence contains explicit uninstall, structured-record abandonment, no-incremental-value judgments and refusal to adopt. **This was the largest over-generalisation in our canon** and it was propagating into downstream conclusions.
2. **The Android curve is a steep long tail**, not "10K+ then zero". The 1K+, 500+ and 100+ brackets are observed.
3. **Low distribution is not evidence a position is failing**, and absence of App Store updates does not prove dormancy. We had asserted both.
4. **Market ceiling is a question raised, not a conclusion** that the market is too small.
5. **The non-software segment is a `SUPPORTED SIGNAL`,** not `OBSERVED`.

The governance move — registry owns identity, narrative documents stop
maintaining parallel totals — is the right fix for a count that diverged four
times, and we have implemented it on our side.

---

## 2. Open items back to you

### 2.1 Four products are in neither registry — two are in your own exit matrix

| Product | Where it appears | Status |
|---|---|---|
| **Mirai My Trees** | **Your exit/persistence matrix** — `OBSERVED` displaced by Excel and folders | absent from both registries |
| **OT2 desktop bonsai software** | **Your exit matrix** — destination after leaving Bonsai Droid | absent from both registries |
| My Bonsai – Bonsai Care (`com.vitmonac.plantcareapp`) | independently verified, 1,000+ Play installs | absent |
| Mokusai: Bonsai Design & Care | independently verified, 1,000+ Play installs | absent |

The registry is now the single source of truth for competitor identity, yet the
package's strongest artefact cites products the registry does not contain.

> **Requested action:** include them, **or** add explicit exclusion entries with
> a stated platform rule if desktop and vendor-bundled trackers are deliberately
> out of scope. Either is fine. Silence is not, because it makes the "at least
> 35" lower bound unauditable.

Mirai My Trees is also strategically pointed: **the best-resourced brand in
bonsai shipped a tracker and is observed losing a user to a spreadsheet.**

### 2.2 Resolution §A7 could not be independently reproduced

You answered our verification questions by confirming both identities.
**Independent checks did not reproduce either.**

| ID | Claim | Our result |
|---|---|---|
| `6763155691` Mori Bonsai | Sima Technologies LLC | **no result**, iTunes lookup, 12 storefronts; web endpoint rate-limited (429), inconclusive |
| `6751142898` Bonsai Buddy | Carlos Domingues, regional | **no result** across 12 storefronts; web endpoint **HTTP 404 (US)** |

A name search surfaces a **different** product: `BonsaiBuddy`, ID `6758486631`,
developer **Dylan Clark**, released 18 May 2026, 0 ratings.

**We record this as contested, not refuted.** Delisting between your check and
ours is plausible, and your rule that regional availability does not defeat
product identity is sound. Impact is bounded — the two `MO-US-*` units are
low-information and neither identity is load-bearing.

> **Requested action:** move both to a `VERIFICATION_CONTESTED` state with
> retrieval date and method recorded on each side. This is what the
> `verification_status` column exists to express.

### 2.3 Two audit findings did not survive the v1.1 rewrite

`W1-FINAL v1.1` is the better synthesis and we adopted it. Two provenance items
were lost and we have restored them in our copy:

- **How the quarantine came about** — that the `REVIEW_AUTHENTICITY_RISK` flag introduced in your v0.1 was not applied to your own v0.5 corpus; six units from *Bonsai: Care & Growth Journal* were unflagged and feeding the W4 acquisition-moment list; independent collection found **5 of 5** matching the pattern.
- **That corpus versioning was verified clean** — v0.1 → v0.5 is a **strict superset by unit id**, so no evidence was silently dropped across five revisions.

The second is a **positive** finding about your process and deserves to survive.
Without the first, nobody reconstructing the closed state can see why 88 became 82.

> **Suggestion:** carry a short provenance section in future final documents.
> A clean synthesis that erases its own corrections is harder to audit later.

---

## 3. State of the canon

| Document | Role |
|---|---|
| `CURRENT-EVIDENCE-AND-DECISIONS.md` | **Entry point.** Every claim carries an evidence status |
| `PROJECT-BRIEF.md` | Venture strategy, canonical conventions, idea portfolio |
| `DOMAIN-MODEL.md` | Object and recording model — unchanged by W1 |
| `APP-MARKET-SCAN.md` | Competitive measurement and its limits |
| `RESEARCH-BRIEF-behavioural-validation.md` | Study design, Track A / Track B |
| `W1-FINAL.md` | W1 synthesis at closure, plus our audit addenda |
| `W1-HANDOFF-W2-W3-W4.md` | Downstream handoff |
| `COMPETITOR-REGISTRY.csv` | **Identity authority** |

**Verified current:** no stale figures anywhere. `14 products`, `18 products`,
`nine tracking apps`, `three products at 10K+`, `claimed and failing`,
`only the first is fixable` — all absent from current files, present only in
files explicitly marked retired.

---

## 4. Division of labour, carried forward

Capabilities measurably differ and the split should persist:

| Capability | Internal | External |
|---|---|---|
| Apple structured JSON endpoint | **works** — exact star ratings | blocked in your environment |
| Google Play scraping + install brackets | **works** | not covered |
| Storefront HTML | not used | **works** |
| **Developer responses** | **invisible to our method** | **captured** |
| Forum / exit / avoidance evidence | none | **yes — the decisive source** |

Your exit evidence is the thing our method structurally cannot reach, and it
produced the single most important reframing in W1: **general-purpose and analog
tools are the real competitive set.**

---

## 5. What happens next, and what we are not asking

W1 is **closed for broad review mining**. W2, W3 and W4 open on this canon.

We are **not** asking you to select a product, recommend an MVP, or upgrade any
hypothesis. P1/P2/P3 remain `UNVALIDATED`. H6A and H6B are unchanged.

The one thing we would flag for whoever picks up W2: your Explanation 3 is the
sharpest diagnosis produced by either side —

> *the user pays the logging cost every time they touch a tree, while some of
> the benefit arrives months or years later.*

That reframes the problem from friction to a **cost/benefit timing mismatch**,
and it means the thing being sold is the deferred payoff, not the logging. W2
should open there rather than on pricing.
