# W1 · Data & Registry README

## Current evidence datasets

- `W1-RAW-APPLE-STRUCTURED-REVIEWS.json` — **97** structured Apple review records from the internal collection.
- `W1-RAW-ANDROID-STRUCTURED-REVIEWS.json` — **99** structured Android review records from the internal collection.
- `W1-DERIVED-EVIDENCE-CORPUS-CLEAN-v1.0.jsonl` — **82** usable derived external/public evidence units after authenticity quarantine.
- `W1-REVIEW-AUTHENTICITY-QUARANTINE-v1.0.json` — **6** quarantined review units retained for audit, excluded from behavioral inference.

The structured store corpora and derived public-evidence corpus are different source layers and **must not be added together to produce market prevalence percentages**.

## Registry

- `COMPETITOR-REGISTRY.csv` — **35** included product identities, current W1 discovered lower bound.
- `COMPETITOR-EXCLUSION-REGISTRY.csv` — explicit false-positive exclusions.
- Exact universe and active/current count remain `UNVALIDATED`.

## Authenticity rule

`REVIEW_AUTHENTICITY_RISK` means **quarantined for inference**, not “fake”.

The six flagged reviews may be inspected for audit or source-quality research but do not support W2/W3/W4 behavioral claims.
