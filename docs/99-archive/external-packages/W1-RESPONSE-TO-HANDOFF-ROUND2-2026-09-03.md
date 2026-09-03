# W1 · Response to External Handoff · Round 2

**Date:** 3 September 2026  
**W1 status:** CLOSED FOR BROAD REVIEW MINING  
**Purpose:** resolve the four governance items returned in `HANDOFF-TO-EXTERNAL-FRONT.md` without reopening broad review mining.

---

## 1. Contested Apple identities

### Mori Bonsai · `6763155691`

**Decision:** restore/retain `FIRST_PARTY_VERIFIED`.

A fresh public App Store web check on 3 September 2026 resolves:

- product: **Mori Bonsai**
- Apple ID: `6763155691`
- developer: **Sima Technologies LLC**
- US storefront page renders
- current page shows the bonsai-specific tracking/care description and two ratings

The internal iTunes/API + web non-reproduction reported in the handoff remains valuable audit evidence, but it does not defeat the currently reproducible first-party identity.

Recommended registry fields:

- `verification_status = FIRST_PARTY_VERIFIED`
- `lifecycle_status = current`
- `last_verified = 2026-09-03`
- `verification_method = public Apple App Store web`
- `source_url = https://apps.apple.com/us/app/mori-bonsai/id6763155691`
- `verification_note = Internal cross-front check on the same date returned 0/52 + US 404; subsequent public-web verification reproduced the listing. Preserve as method/timing disagreement.`

### Bonsai Care App: Bonsai Buddy · `6751142898`

**Decision:** restore/retain `FIRST_PARTY_VERIFIED`.

Fresh public first-party pages resolve the product in regional storefronts, including South Africa, with:

- Apple ID: `6751142898`
- developer: **Carlos Domingues**
- product: **Bonsai Care App: Bonsai Buddy**
- current version history and bonsai journal/history features visible

Recommended registry fields:

- `verification_status = FIRST_PARTY_VERIFIED`
- `lifecycle_status = current_regional`
- `last_verified = 2026-09-03`
- `verification_method = public regional Apple App Store web`
- `source_url = https://apps.apple.com/za/app/bonsai-care-app-bonsai-buddy/id6751142898`
- `verification_note = Internal cross-front check reported 0/52 + FR 404; subsequent public regional App Store pages reproduced the listing. Preserve as method/timing disagreement.`

**Governance lesson:** do not collapse temporary non-reproduction into product non-existence. The registry should preserve `verification_history` or equivalent notes when methods disagree.

---

## 2. `included_in_standalone_distribution_measurement`

### Decision

**Do not use `web_or_other` as an identity-exclusion rule.**  
But for the current **standalone mobile-store distribution measurement**, `web_or_other` should default to `false`.

The field should answer:

> “Can this row be compared in the same App Store / Google Play standalone-demand denominator?”

not:

> “Is this a real competitor?”

### Recommended derived rule

Set `included_in_standalone_distribution_measurement = true` only when all are true:

1. `surface_type = standalone_app`
2. `lifecycle_status = current`
3. the product has a comparable current Apple App Store or Google Play distribution surface
4. distribution is not structurally confounded by a broader subscription or required hardware

Otherwise default to `false`.

### Consequences for the rows named in the handoff

- Bonsai Tracker · web-first → `false`
- Yoi Bonsai · web-first → `false`
- MyBonsaiTag · web/other → `false`
- Bonsme · defunct/historical → `false`
- BonsaiPilot · web → `false`
- my-bonsai · web → `false`
- Yama Bonsai · historical/unpublished iOS/Android → `false` for **current** standalone measurement

The handoff says “four other `web_or_other` rows” but lists five names; all listed rows should be reviewed and set consistently.

### Other surface types

- `bundled_tracker` → `false`
- `desktop_software` → `false`
- `hardware_companion` → `false`
- historical/withdrawn standalone apps → `false` for current distribution measurement
- current standalone Apple/Google Play app → normally `true`

Historical or channel-specific distribution can still be measured in a separate dataset. It simply should not be mixed into the current standalone mobile denominator.

---

## 3. W1-041 … W1-045 and `hardware_companion`

### Decision

**Accept all five additions.**

The external front used a first-party App Store search and read the store descriptions before classification. That satisfies the registry's evidence standard.

### W1-041 · Bonsai Pal · `6770584295`

**CONFIRMED independently.**

Bonsai-specific journal with:
- watering/feed/prune/repot logs
- photo timeline
- side-by-side oldest/newest comparison
- species/season/hemisphere reminders
- one-time Pro purchase

This is especially relevant competitively because its shipped positioning overlaps strongly with longitudinal record + visible progression.

Recommended:
- `surface_type = standalone_app`
- `verification_status = FIRST_PARTY_VERIFIED`
- `included_in_standalone_distribution_measurement = true`

### W1-042 · Bonsai Club · `6450961438`

**ACCEPT based on the external front's first-party App Store verification.**

The current external tool session did not independently retrieve this page, but the handoff records source verification by description. There is no contradictory evidence.

Recommended:
- `surface_type = standalone_app`
- `verification_status = FIRST_PARTY_VERIFIED_BY_INTERNAL_FRONT`
- `included_in_standalone_distribution_measurement = true`
- retain source URL and retrieval date supplied by that front

### W1-043 · Bonsai Studio - AI Care · `6778829915`

**CONFIRMED independently.**

Current first-party page explicitly describes:
- “part archive, part expert advisor”
- AI diagnosis/styling/consultation
- personalized answers drawing on the tree's own records
- per-tree growth timeline
- photos, care logs and size changes
- five languages

Recommended:
- `surface_type = standalone_app`
- `verification_status = FIRST_PARTY_VERIFIED`
- `included_in_standalone_distribution_measurement = true`

### W1-044 · Bonsai VN - FC · `6761886265`

**ACCEPT based on the external front's first-party App Store verification.**

The current external tool session did not independently retrieve this page, but the source-based verification in the handoff is sufficient unless contradicted later.

Recommended:
- `surface_type = standalone_app`
- `verification_status = FIRST_PARTY_VERIFIED_BY_INTERNAL_FRONT`
- `included_in_standalone_distribution_measurement = true`

Strategic note:
its Vietnamese positioning is relevant to the existing non-English-language competitive question, but zero ratings must not be interpreted as zero users or failure.

### W1-045 · Noble Bonsai · `6738886708`

**CONFIRMED independently.**

The first-party page explicitly says the app is essential to control the Noble hardware unit and is compatible only with that unit.

### New surface type

**Approve `hardware_companion`.**

Recommended:
- `surface_type = hardware_companion`
- `verification_status = FIRST_PARTY_VERIFIED`
- `included_in_standalone_distribution_measurement = false`

Reason:
the app is a genuine bonsai-care competitive surface, but App Store demand is structurally confounded by ownership of the physical Noble unit.

### Registry lower bound

With W1-041 … W1-045 adopted:

> **Current discovered lower bound = 45 competitive software products/surfaces known to ship or have shipped.**

This remains a discovery lower bound, not a census.

The fact that five further products came from one US search query strengthens the existing `UNVALIDATED` statement about the exact universe. It does not justify another broad-discovery programme.

---

## 4. Verification columns for the remaining rows

### Decision

**Defer full backfill. Do not spend W1 time populating all remaining rows now.**

W1 is closed, and bulk provenance backfill does not change any current strategic conclusion.

### Required verification policy going forward

Populate `last_verified`, `verification_method` and `source_url` whenever a row is:

1. newly added,
2. contested,
3. used in a quantitative/distribution claim,
4. used as sole or primary support for a strategic conclusion,
5. materially changed in lifecycle status,
6. rechecked during normal downstream work.

For older stable rows with no current decision depending on them:
- retain existing verification status,
- leave provenance fields blank or explicitly `LEGACY_NOT_BACKFILLED`,
- backfill opportunistically.

### Why this is preferable

A full 45-row rescan would:
- consume W1 effort after closure,
- create a false appearance of permanence in a volatile store landscape,
- become stale almost immediately.

A **verification-on-dependency** rule is more durable.

Recommended additional field:
- `verification_actor` = `W1_EXTERNAL_FRONT`, `CANON_INTERNAL_FRONT`, etc.

This makes method disagreements auditable without converting them into binary existence disputes.

---

## 5. Method amendment from the five-product discovery

Accept the external front's methodological correction:

> **Candidate classification must read the product description; product-name matching alone is insufficient.**

Add to identity/discovery rules:

1. search result names generate candidates only;
2. inclusion/exclusion requires reading first-party description or equivalent product evidence;
3. identity is then reconciled by platform ID + developer + product role;
4. false positives go to the exclusion registry rather than disappearing silently.

This is especially important for names such as “Bonsai Club” that can look generic before the description is read.

---

## 6. Strategic impact

None of these governance updates changes the W1 findings.

Still valid:

- longitudinal record behavior exists;
- dedicated-app persistence and abandonment both exist;
- general-purpose tools are first-class substitutes;
- logging friction is real;
- provenance / Comparable Journey / H7 remain `UNVALIDATED`;
- P1 / P2 / P3 remain `UNVALIDATED`.

The move from 40 → 45 strengthens only the statement that the competitive universe is broader than the current registry and that the exact total remains `UNVALIDATED`.

It does **not** establish market size, active usage, retention or economic viability.

---

## 7. Resolution status

| Returned item | Resolution |
|---|---|
| Mori evidence | **RESOLVED · FIRST_PARTY_VERIFIED** |
| Carlos Bonsai Buddy evidence | **RESOLVED · FIRST_PARTY_VERIFIED / regional** |
| `web_or_other` measurement rule | **RESOLVED · false for current standalone mobile distribution by default** |
| W1-041…045 | **ACCEPTED** |
| `hardware_companion` | **ACCEPTED** |
| Verification-field full backfill | **DEFERRED · dependency-triggered verification policy adopted** |
| Description-read discovery rule | **ACCEPTED** |

**W1 remains CLOSED FOR BROAD REVIEW MINING.**
