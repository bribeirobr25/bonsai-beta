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

| Measure | Value |
|---|---|
| Free at download | **26 of 27** |
| Paid upfront | **1** — Bonsai Album, **$7.99** |
| Median ratings | **0** |
| Products with zero ratings | **19 of 27 (70%)** |
| Products under 10 ratings | **23 of 27 (85%)** |
| Total ratings, all 27 | **755** |
| Top 1 share | **50%** |
| Top 3 share | **93%** |
| Released in 2026 | **18 of 27** |
| Last updated in 2026 | **22 of 27** |

### Three findings that matter

**1. The category is almost entirely free-to-download, and the one product that
charges upfront is the second most-rated.** Bonsai Album ($7.99, 193 ratings) is
the sole paid-upfront product in the set. This is *not* evidence that charging
upfront causes traction — it is one product, and it launched in **2011**, so age
alone could explain the rating count. But it does mean the free-by-default
convention is a convention, not a demonstrated requirement.

**2. The distribution is brutally concentrated, and the median product has no
ratings at all.** The top three hold 93%. Excluding Mirai — whose distribution is
confounded by the membership — the top one still holds 51% and the top three 96%.
**Building a bonsai app is not the hard part. Being noticed is.**

**3. This is not a graveyard. It is an active, freshly-crowded market.** 18 of 27
launched in 2026 and 22 of 27 were updated in 2026. The zero-rating majority is
not made up of abandoned software; it is made up of current, maintained products
that nobody has found. That is a materially different problem from "the category
is dying".

### One product complicates the leader question

**Mirai Mobile holds 379 ratings — the highest observed in the category, roughly
double Bonsai Album's 193.** It is correctly excluded from standalone
distribution measurement, because its installs reflect the wider Mirai
membership rather than standalone tracker demand.

The strategic reading is uncomfortable and should be carried into W2 and W4: the
most-rated bonsai tracking app in this set **did not win by being a better
tracker**. It arrived attached to an audience that already existed. Canon already
records that a user is `OBSERVED` displacing Mirai My Trees with Excel and
folders — so distribution advantage did not convert into retention for that user.

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
