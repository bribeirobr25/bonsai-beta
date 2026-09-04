# Track A · Pricing and packaging teardown — Apple, US storefront

**Date retrieved:** 3 September 2026 · **Method:** iTunes Lookup API, one storefront (US)
**Dataset:** `W2-pricing-teardown-apple.csv` (27 products)
**Status:** Track A evidence. Produced without participant access, before W2 opened.

> **This is not a probability sample and not a census.** One storefront, one
> date, and only registry rows carrying an Apple identity. Ratings are not users.
> Nothing here establishes revenue, retention, conversion or market size.

## Coverage

`platform_identity` backfilled from **31 to 41 of 45** registry rows. Of the 29
Apple identities, **27 resolved**. The two that did not are `W1-020` Mori Bonsai
and `W1-029` Bonsai Care App: Bonsai Buddy — the `VERIFICATION_CONTESTED` pair.
This was a fourth independent non-reproduction, arrived at incidentally rather
than sought.

Four rows remain without an identity: `W1-018` Bonsme, `W1-032` Bonsai Droid,
`W1-033` MyBonsai (CRESPI BONSAI), `W1-035` Yama Bonsai. All four are already
`historical` or `defunct`, so absence of a current listing is consistent with the
record and is **not** evidence they never shipped.

## `OBSERVED` — hard store facts

**Two populations, and the distinction matters.** 27 identities resolved, but
only **23 are measurement-eligible** (`included_in_standalone_distribution_
measurement = true`). The other four — Mirai Mobile (bundled), Yoi Bonsai and
MyBonsaiTag (web-first), Noble Bonsai (hardware companion) — must not enter a
store denominator. **The headline figures below are the 23.**

*(An earlier version of this document led with the mixed 27, which put Mirai's
379 ratings — half the total on its own — inside a denominator the registry
explicitly excludes it from. That is the confounding the column exists to
prevent. Corrected in the same session's self-audit.)*

| Measure | 23 eligible | all 27 (mixed) |
|---|---|---|
| Free at download | **22 of 23** | 26 of 27 |
| Paid upfront | **1** — Bonsai Album, **$7.99** | 1 |
| Median ratings | **0** | 0 |
| Zero ratings | **16 of 23 (69%)** | 19 of 27 (70%) |
| Total ratings | **376** | 755 |
| Top 1 share | **51%** | 50% |
| Top 3 share | **96%** | 93% |
| Released in 2026 | **17 of 23** | 18 of 27 |
| Updated in 2026 | **20 of 23** | 22 of 27 |

**Concentration is worse on the clean set, not better.** Two products —
**Bonsai Album (193) and BonsaiDo (136) — hold 87% of all 376 ratings between
them.** The remaining 21 eligible products share 47.

### Three findings that matter

**1. The category is almost entirely free-to-download, and the one product that
charges upfront is the ratings leader.** Bonsai Album ($7.99, 193) is the sole
paid-upfront product. This is *not* evidence that charging causes traction — it
is one product, and it launched in **2011**, so age alone could explain the
count. But free-by-default is a **convention, not a demonstrated requirement**.

**2. The median product has no ratings at all, while being actively maintained.**
The top three hold 96%. **Building a bonsai app is not the hard part. Being
noticed is.**

**3. This is not a graveyard. It is an active, freshly-crowded market.** 17 of 23
launched in 2026 and 20 of 23 were updated in 2026. The zero-rating majority is
current, maintained software that nobody has found — a materially different
problem from "the category is dying".

### One product complicates the leader question

**Mirai Mobile holds 379 ratings — more than the entire eligible set combined
(376).** It is correctly excluded from standalone measurement, because its
installs reflect the wider Mirai membership rather than standalone tracker
demand.

The strategic reading should be carried into W2 and W4: the most-rated bonsai
tracking app in this set **did not win by being a better tracker**. It arrived
attached to an audience that already existed. Canon already records a user
`OBSERVED` displacing Mirai My Trees with Excel and folders — so distribution
advantage did not convert into retention for that user.

## `SUPPORTED SIGNAL` — monetisation model

The `monetisation_model_HEURISTIC` column is derived by **keyword matching over
store descriptions**, not by reading each listing or inspecting IAP tiers. It is
labelled `HEURISTIC` in the dataset for that reason, and it is the same weak
method that this project has already been burned by twice.

Treat the shape as a signal and the per-row values as unconfirmed:

| Model | Count |
|---|---|
| freemium, unspecified IAP | 13 |
| freemium, subscription | 6 |
| freemium, subscription + one-time | 3 |
| free, no monetisation signal | 3 |
| paid upfront + IAP | 1 |
| freemium, one-time unlock | 1 |

Only two listings expose explicit price points in their description text (Jooni:
$1.99 / $19.99). **Confirming actual IAP tiers requires reading each listing** —
that is the obvious next increment and it is bounded at 27 products.

## What this does and does not do for W2

**Does:** gives W2 an observed baseline for the pricing convention, the
concentration of attention, and the entry rate — none of which required
participants.

**Does not:** answer the ceiling question. *Would 5,000 users at €3/month be
success or failure?* still needs an economic model, and nothing here establishes
that 5,000 paying users is reachable. If anything the concentration data makes
the ceiling question sharper, because the median competitor has **zero**
observable traction while remaining actively maintained.

## Reproduce

```sh
# per product, from the registry's Apple identity
curl -s "https://itunes.apple.com/lookup?id=<APPLE_ID>&country=us"
```

Extend by repeating on other storefronts and by adding Google Play, where
install brackets are visible but rating counts differ in meaning.
