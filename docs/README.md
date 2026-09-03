# Bonsai venture · documentation

**Phase:** PRE-VALIDATION / PRE-MVP · no product selected
**Canon version:** Strategic Foundation / Pre-MVP Canon v1.0
**Last reconciled:** 3 September 2026, at W1 closure

---

## Start here

**[`01-canon/CURRENT-EVIDENCE-AND-DECISIONS.md`](01-canon/CURRENT-EVIDENCE-AND-DECISIONS.md)**

It is the entry point and the reconciliation layer: current thesis, what has
been falsified, what is supported, what remains unvalidated, and the next
decisions. Every claim carries an evidence status.

---

## Structure

### `00-inbox/` — received, not yet reviewed
New external material lands here and is **non-authoritative** until audited.
Emptied after processing: accepted corrections go into canon, the original goes
to `99-archive/external-packages/`. See `00-inbox/README.md`.

### `01-canon/` — authoritative
| File | Role |
|---|---|
| `CURRENT-EVIDENCE-AND-DECISIONS.md` | **Entry point.** Reconciliation layer |
| `PROJECT-BRIEF.md` | Venture strategy, conventions, idea portfolio |
| `DOMAIN-MODEL.md` | Object and recording model |
| `APP-MARKET-SCAN.md` | Competitive measurement and its limits |
| `RESEARCH-BRIEF-behavioural-validation.md` | Study design · Track A / Track B |

### `02-workstreams/` — per-front outputs
`W1-competitor-review-mining/` — **CLOSED for broad review mining.** Final
synthesis, downstream handoff, amendment resolution, closure checklist and
validation report.

W2 (Monetization & Economics), W3 (Brand Identity & Marketing) and W4 (Growth
Strategy) open next, in parallel, entering through `01-canon`.

### `03-registry/` — competitor identity authority
`COMPETITOR-REGISTRY.csv` owns competitor identity. **Narrative documents may
cite the discovered lower bound but must not maintain parallel lists** — that
practice caused the count to diverge four times.

### `04-evidence/` — data behind the conclusions
| File | Contents |
|---|---|
| `W1-EVIDENCE-MATRIX.csv` | **19 themes with status and limitation — the best single summary** |
| `W1-EXIT-PERSISTENCE-MATRIX.csv` | 15 documented exit / persistence behaviours |
| `W1-PRODUCT-LEVEL-FINDINGS.csv` | Per-product value, friction, persistence |
| `W1-EXIT-AND-PERSISTENCE-REVIEW.md` | Narrative behind the exit matrix |
| `W1-derived-evidence-clean.jsonl` | 82 usable derived units after quarantine |
| `W1-authenticity-quarantine.json` | 6 units retained for audit, excluded from inference |
| `raw/` | 97 Apple + 99 Android structured reviews |

### `05-outbound/` — sent to the external work front
`HANDOFF-TO-EXTERNAL-FRONT.md` — what was adopted, how it was verified, and
open items returned.

*To send a package: bundle `01-canon`, `02-workstreams`, `03-registry`,
`04-evidence` and this handoff. No standing copy is kept, so nothing can drift
out of date.*

### `99-archive/` — audit trail, not current
`external-packages/` holds the counterparty's deliverables intact, with their
original checksums. `superseded/` holds our earlier drafts. **Several carry
figures corrected in `01-canon`.** Do not cite from here.

---

## Rules that apply across all documents

- Where documents disagree, `CURRENT-EVIDENCE-AND-DECISIONS.md` and `PROJECT-BRIEF.md` take precedence.
- Evidence status: `OBSERVED` · `SUPPORTED SIGNAL` · `CONTRADICTED` · `UNVALIDATED` · `DEFERRED`.
- **A test that cannot currently be run is `UNVALIDATED`, never `FAIL`.**
- Validation opportunities are inputs to the venture, not dependencies of it.
- Quarantined review units are excluded from inference. They are **not** called fake.
- Ratings are not users; installs are not active users.

---

## Current state, in brief

- **At least 35** distinct bonsai-specific care/tracking/journal products are known to ship or have shipped. A discovered lower bound, not a census.
- **Four** are in the Google Play 10K+ install bracket. The lower tail is non-zero.
- **Bonsai Album** is the observed US iOS ratings leader (193 vs BonsaiDo 136); counts are date-sensitive.
- **General-purpose and analog tools are first-class competitors** — spreadsheets, Photos, OneNote, Lightroom, notebooks, paper calendars, phone alarms. A product must beat a spreadsheet, not just other bonsai apps.
- The central tension: **cumulative history value versus repeated maintenance cost** — the user pays the logging cost every time they touch a tree, while much of the benefit arrives months or years later.
- **P1 / P2 / P3 remain `UNVALIDATED`.**

## Method warning

The corpus combines structured storefront reviews, public forum feedback and
purposively enriched exit/persistence evidence. It is **not a probability
sample**. No count here is a market prevalence, churn, retention or
willingness-to-pay rate.
