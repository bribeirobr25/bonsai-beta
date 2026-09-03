# Bonsai · W1 · Competitor Master Reconciliation v0.3

**Date:** 3 September 2026  
**Status:** Track A evidence artifact; supersedes `v0.2` for W1 working purposes.  
**Canonical status:** NOT YET CANONICAL. A proposed amendment is supplied separately.

## 1. Why v0.3 exists

The v0.2 reconciliation raised the known universe from 18 to at least 27 products.
The next review-mining pass found that this still understated the field, including
a major long-running incumbent (`Bonsai Album`) that materially changes the old
App Store rating comparison.

This is not a cosmetic count correction. The old master was incomplete by:
- **discovery** (older products were missed),
- **platform** (Android/web products were under-covered),
- and **release timing** (many 2026 entrants appeared after earlier scans).

## 2. Identity rule

Count **products**, not names or listings.

- Same product with localized title → one product.
- Lite/full variants of the same product family → one product for competitor count, separate storefront listings for rating analysis.
- Same name + different developer / platform identity → distinct products.
- Historical/defunct products are retained because the canonical criterion is products that **ship or have shipped**.
- Unrelated products containing the word “bonsai” are excluded.

## 3. Baseline carried forward from v0.2

`v0.2` reconciled **27 distinct bonsai-specific care/tracking/journal products**.

## 4. Further distinct products confirmed after v0.2

| Product | Status | Evidence tier | Identity | Note |
|---|---|---|---|---|
| Bonsai Album | Active iOS / desktop family | `FIRST_PARTY_VERIFIED` | Andrew Nicolle; Apple ID 465021382 | Not counted separately from Bonsai Album Lite |
| Bonsai Care App: Bonsai Buddy | Active iOS | `FIRST_PARTY_VERIFIED` | Carlos Domingues; Apple ID 6751142898 | Distinct product |
| BonsaiPilot | Active web | `FIRST_PARTY_VERIFIED` | bonsaipilot.app | Distinct from Bonsai Robotics' unrelated 'Bonsai Pilot' app |
| my-bonsai | Active web | `FIRST_PARTY_VERIFIED` | my-bonsai.app | German web subscription tracker |
| Bonsai Droid | Historical Android | `THIRD_PARTY_ARCHIVE` | Bonsai Droid | Last known updates 2020; shipped historically |
| MyBonsai | Historical Android | `THIRD_PARTY_ARCHIVE` | CRESPI BONSAI | Removed from Google Play in 2024 |
| My Bonsai Book | Active Google Play | `FIRST_PARTY_VERIFIED` | com.mybonsaibook / ZanyGoose | 10K+ Play downloads |
| Yama Bonsai (J)INSPIRE | Historical iOS/Android | `ARCHIVE_PLUS_PRACTITIONER_EVIDENCE` | Yannick Kiggen / Yama Bonsai | Previously shipped; later unpublished |

## 5. Current lower bound

- v0.2 lower bound: **27**
- further distinct products: **8**
- **current known lower bound: at least 35 distinct products that ship or have shipped**

This remains explicitly **non-exhaustive**.

### Evidence status

- `>=35 known distinct products`: **OBSERVED as a discovery lower bound**, with mixed source strength for historical products.
- exact total universe: **UNVALIDATED**
- active/current count: **UNVALIDATED pending a fresh status pass**
- active users / retention / paid conversion / revenue: **UNVALIDATED**

## 6. Major quantitative discovery: Bonsai Album

`Bonsai Album` is not a marginal new entrant. It has existed since 2011 and is
still listed.

Current first-party storefront observations:
- US full app: **192 ratings**
- UK full app: **52 ratings**
- Germany full app: **73 ratings**

The prior canonical iOS scan reported roughly **330 ratings total** across
US/UK/DE/BR for its measured sample and called BonsaiDo the US leader at 136.
Because Bonsai Album was absent from that sample:

- the old `~330` category total is **superseded as a category-wide statement**;
- adding only Bonsai Album's full-app US/UK/DE counts gives a conservative
  reconciled lower-bound subtotal of **at least 647 ratings** using the old
  four-market baseline;
- the separate Bonsai Album Lite listing is **excluded** from that correction,
  so this remains conservative;
- `BonsaiDo = US leader at 136` is **CONTRADICTED** by Bonsai Album at 192.

A full fresh storefront rescan is still required before publishing a new
precise four-market total.

## 7. Major Android discovery: 10K+ is not isolated

First-party Google Play now shows:
- Bonsai Care App (Bonsai Empire): **10K+ downloads**
- Appy Bonsai: **10K+ downloads**
- My Bonsai Book: **10K+ downloads**

Therefore the prior reading that centered Android scale on a single category
leader was incomplete.

Correct status:
- each 10K+ bracket: **OBSERVED**
- relative ranking among them: **UNVALIDATED**
- active use, retention, conversion and revenue: **UNVALIDATED**

## 8. W1 consequence

The strategic question is no longer plausibly:
> “Has anyone built a bonsai tracker?”

It is:
> **Why do dozens of tracking/care/journal products coexist, while users still
> resort to notebooks, spreadsheets, OneNote, photo folders and custom tools?**

That question is now the organizing lens for broad review mining.
