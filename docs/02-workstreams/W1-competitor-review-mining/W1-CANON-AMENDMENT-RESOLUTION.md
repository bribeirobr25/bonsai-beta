# W1 · Canon Amendment Resolution · 2026-09-03

> **Received document, content unmodified; this banner added locally. Historical audit record — not current state.**
> Records how an earlier round of amendments was resolved. Superseded in part:
> §A7 states Mori Bonsai and Bonsai Buddy remain verified; both are now
> `VERIFICATION_CONTESTED` in `COMPETITOR-REGISTRY.csv`, which is the identity
> authority. Product counts here predate the current registry (45).

**Status:** ACCEPTED FOR THE PRE-MVP CANON  
**Scope:** W1 · Competitor Review Mining  
**Effective date:** 3 September 2026  
**Reason:** reconcile W1 evidence and remove contradictions between the market scan, current evidence, project brief and research brief.

This resolution closes the previously proposed market-scan amendments and authorizes the reconciled wording in the canonical copies packaged with W1 closure.

## Accepted amendments

### A1 · Competitive universe
Replace fixed statements such as “14 products”, “18 products” or “nine tracking apps” with:

> **At least 35 distinct bonsai-specific care/tracking/journal products are known to ship or have shipped. This is a discovered lower bound, not a census. The exact universe and current active count remain `UNVALIDATED`.**

`COMPETITOR-REGISTRY.csv` becomes the W1 single source of truth for competitor identity. Narrative documents may cite the discovered lower bound but should not maintain parallel lists.

### A2 · iOS rating interpretation
The earlier `~330 ratings across four storefronts` statement is superseded as a category-wide figure because the original measured set omitted material products, especially Bonsai Album.

Accepted wording:

> **The prior ~330 figure is a historical measured-sample subtotal, not a category total. The reconciled lower bound is at least 647 ratings in the same four-market framework before a complete refreshed census.**

Bonsai Album is the currently observed US iOS ratings leader in the reconciled snapshot, at **193 US ratings**, versus BonsaiDo at **136**, with date sensitivity explicitly acknowledged.

### A3 · Android distribution
Accepted wording:

> **At least four known bonsai-specific products are in the Google Play 10K+ install bracket: Bonsai Care App, Appy Bonsai, Jooni and My Bonsai Book. This is a distribution signal, not evidence of active usage, retention, paid conversion or revenue.**

The long tail below 10K+ must not be described as “zero” when 1K+, 500+ and 100+ brackets are observed.

### A4 · General-purpose tools
Accepted as `OBSERVED` competitive behavior:

> Growers use and sometimes revert to spreadsheets, Photos, OneNote, Evernote, Lightroom, notebooks, paper calendars, phone notes and alarms.

Therefore general-purpose and analog tools are first-class behavioral substitutes in W1 analysis.

### A5 · Job rejection scope
The following statement is accepted only with scope:

> **In the structured storefront review corpus, zero reviews were coded as explicit rejection of the underlying tracking job.**

It must not be generalized to all W1 evidence. Broader public behavioral evidence contains explicit:
- dedicated-app uninstall,
- structured-record abandonment,
- no-incremental-value judgments,
- refusal to adopt subscription software,
- preference for analog/general tools.

### A6 · Review authenticity
All six US textual reviews currently visible for **Bonsai: Care & Growth Journal** are quarantined as `REVIEW_AUTHENTICITY_RISK`.

Quarantine means:
- retained for audit,
- not called fake,
- excluded from behavioral inference,
- excluded from cross-product support counts,
- not used as the sole evidence for W2/W3/W4 handoff claims.

The derived external evidence corpus therefore contains **82 usable units** after removing the six flagged BG-US units from the 88-unit working corpus.

### A7 · Mori Bonsai and Bonsai Buddy
- **Mori Bonsai** remains a verified competitor identity: Apple ID `6763155691`, Sima Technologies LLC.
- **Bonsai Care App: Bonsai Buddy** remains a verified competitor identity: Apple ID `6751142898`, Carlos Domingues, with regional storefront availability. US availability is not required for product identity.

### A8 · Exclusion registry
Explicit exclusions include:
- `Bonsai by Zoom` / Hello Bonsai — freelancer invoicing/business software.
- `Bonsai Design Ideas` — image-gallery/design-inspiration app.

They must not enter the competitor denominator.

### A9 · Market ceiling language
Competitive crowding and modest observable store distribution raise the market-ceiling question but do **not** establish that the market is too small or that individual competitors are “failing”.

Revenue, active users, retention, paid conversion and economic sustainability remain `UNVALIDATED`.

### A10 · Exit mechanisms
W1 retains four observed exit/avoidance mechanisms:
1. implementation failure,
2. insufficient incremental value versus existing tools,
3. business-model rejection,
4. durability / trust concern.

Only the first can be addressed by execution within the same product thesis. The others may require a materially different value proposition, economic model or trust/data architecture.

## No product amendment

This resolution does **not** select P1, P2 or P3.

P1/P2/P3 remain `UNVALIDATED`.

## Closure effect

After the reconciled canonical copies, cleaned corpus, registry, W1 final synthesis and W2/W3/W4 handoff are generated, W1 may be marked **CLOSED FOR BROAD REVIEW MINING**.

Future W1 work becomes targeted follow-up only when a downstream workstream identifies a specific unresolved question.
