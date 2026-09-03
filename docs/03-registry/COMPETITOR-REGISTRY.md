# W1 · Competitor Registry

**Owner:** W1 research governance  
**Final reconciliation date:** 3 September 2026  
**Current included lower bound:** **45 distinct competitive software products/surfaces known to ship or have shipped**  
**Exact universe:** `UNVALIDATED`  
**Current active count:** `UNVALIDATED`

## Identity rules

1. Count distinct competitive software identities, not names. **Classify by
   reading the product's own description, never by keyword-matching its name** —
   a name filter discarded a real competitor (`Bonsai Club`) in the 3 Sep audit.
2. Localized titles are one product when platform/developer identity matches.
3. Lite/full variants in the same product family count once for competitor identity, but may have separate rating listings.
4. Same name + different developer/platform identity can be distinct products.
5. Historical/defunct/legacy products remain in the registry because W1 studies the competitive history as well as current availability.
6. Bundled trackers such as Mirai My Trees are included as competitive identities but marked `included_in_standalone_distribution_measurement=false`.
7. Desktop software such as OT2 is included because it is an observed substitute/switching destination, but is not mixed with mobile-store distribution metrics.
8. False positives are stored in `COMPETITOR-EXCLUSION-REGISTRY.csv`.
9. Narrative documents may cite the discovered lower bound but must not maintain a parallel master list.

### Discovery rules (adopted from external front, round 2)

10. Search-result **names generate candidates only**.
11. Inclusion or exclusion requires **reading the first-party description** or
    equivalent product evidence.
12. Identity is then reconciled by **platform ID + developer + product role**.
13. False positives go to `COMPETITOR-EXCLUSION-REGISTRY.csv` rather than
    disappearing silently.

These exist because a name-matching filter discarded `Bonsai Club` — a real
competitor since 2023 — before its description was read.

## Final reconciliation corrections

Added after the received cross-front feedback:

- **Mirai Mobile · My Trees** — first-party verified, bundled tracker; excluded from standalone distribution comparison.
- **OT2** — first-party verified legacy desktop collection-management software.
- **My Bonsai - Bonsai Care** — first-party Google Play verified, 1K+ bracket.
- **Mokusai: Bonsai Design & Care** — first-party Google Play verified, 1K+ bracket.
- **BonsaiBuddy** — Apple ID `6758486631`, Dylan Clark; distinct from Carlos Domingues' product.

Verification dispute resolved without erasing method history:

- **Mori Bonsai**, Apple ID `6763155691`, Sima Technologies LLC — **`VERIFICATION_CONTESTED`**.
- **Bonsai Care App: Bonsai Buddy**, Apple ID `6751142898`, Carlos Domingues — **`VERIFICATION_CONTESTED`**.

The external front reports first-party web reproduction on 3 Sep 2026. An
independent internal re-check the same day returned **0 of 52 storefronts** from
the iTunes Lookup API and **HTTP 404** on the public App Store pages — including
the specific storefronts named (US for Mori; FR/AT/ZA for Bonsai Buddy) — while
control ID `6758486631` resolved in **52 of 52** and rendered a full page in the
same session. The control removes an API coverage gap as the explanation, and a
check of the named regions removes the regional-availability defence.

Held as **contested, not refuted**: delisting between the two checks, or a
transcription error, remain possible. Neither identity is load-bearing for any
W1 conclusion. See `W1-FINAL.md`, internal addendum §A.

## Added by internal audit · 3 September 2026

Five further competitors were verified at source and added as `W1-041`…`W1-045`:
**Bonsai Pal**, **Bonsai Club**, **Bonsai Studio - AI Care**, **Bonsai VN - FC**
and **Noble Bonsai**. Each was confirmed by reading its store description.
`Noble Bonsai` introduces a new `surface_type`, `hardware_companion`, excluded
from standalone distribution measurement because its distribution is tied to
hardware ownership.

All five came from **one storefront and one search term**, so the true universe
is materially larger than 45 and the exact count remains `UNVALIDATED`.

**Measurement-flag correction.** `Bonsai Tracker` (`W1-011`) and `Yoi Bonsai`
(`W1-012`) were flagged `included_in_standalone_distribution_measurement=true`
while `APP-MARKET-SCAN.md` explicitly excludes them as web-first. Both are now
`false`. Five other `web_or_other` rows were left `true` pending external
confirmation. **Resolved in round 2** — see the derived rule below.

**Verification-column coverage.** `last_verified`, `verification_method`,
and `source_url` are populated for **16 of 45** rows (`verification_note` for 18;
the extras are rows carrying a correction note but no fresh retrieval). The remaining 33 have no
recorded verification date or method: a known gap, not a completed practice.

## Distribution-measurement rule · adopted from external front, round 2

`included_in_standalone_distribution_measurement` answers one question only:

> *Can this row sit in the same App Store / Google Play standalone-demand
> denominator as the others?*

It is **not** a judgement about whether something is a real competitor. It is now
**derived**, not hand-set. Set `true` only when all hold:

1. `surface_type = standalone_app`
2. `lifecycle_status = current`
3. a comparable current Apple App Store or Google Play surface exists
4. distribution is not structurally confounded by a broader subscription or
   required hardware

Otherwise `false`. So `bundled_tracker`, `desktop_software`,
`hardware_companion`, `web_or_other`, and historical/withdrawn/defunct rows are
all `false` for *current* standalone measurement. Historical or channel-specific
distribution may still be measured — in a separate dataset, never mixed into this
denominator.

Applied mechanically on 3 Sep 2026. Final state: **32 `true`, 13 `false`**, with
**0 rows violating the rule**.

**Applying it exposed a defect in its own input.** The rule keys on
`lifecycle_status`, and five rows carried the value `known` — neither `current`
nor `historical`, and undefined in the taxonomy. Read mechanically, `known`
silently dropped verifiably-current products out of the denominator, including
**BonsaiDo**, the second-ranked US iOS product by ratings and a product canon
explicitly compares against. Checked at source on 3 Sep 2026:

| Row | Was | Verified | Now |
|---|---|---|---|
| `W1-001` BonsaiDo | `known` | 136 ratings, updated 2025-09-05 | `current` |
| `W1-003` BonsAI Identifier: Tree Care | `known` | 32 ratings, updated 2025-10-27 | `current` |
| `W1-015` Bonsai App | `known` | Play HTTP 200, 100+ bracket | `current` |
| `W1-016` ScandinavianBonsai | `known` | Play HTTP **200**, 50+ bracket | `current` |
| `W1-017` MyBonsaiTag | `known` | not resolved | `known` — `web_or_other`, so `false` regardless |

Apple IDs for `W1-001` and `W1-003` were recorded at the same time; the registry
previously held none for either.

**A registry data error surfaced during this check.** `W1-016` was first recorded
`defunct` on an HTTP 404 — but that check used the registry's stored
`platform_identity`, `se.vilhelmineberg.planttrack`, which is a **typo**. The
correct package, `se.vilhelmineberg.planttracker`, is the one `APP-MARKET-SCAN`
has always carried, and it returns **HTTP 200** — *Bonsai Care & RFID Tree Log*,
50+ downloads. The row is `current` and the identity is corrected.

Two lessons: a wrong `platform_identity` reads exactly like a withdrawn product,
and the registry disagreed with a canon document on a field the registry is
supposed to own.

**The general point: a derived rule inherits the reliability of the field it
derives from.** `lifecycle_status` is now load-bearing for measurement and should
be treated as such.

One data correction fell out of applying it. `Yoi Bonsai` (`W1-012`) was
`surface_type = standalone_app`, which made the rule return `true` and contradict
both `APP-MARKET-SCAN.md` and the external front's own instruction that Yoi is
web-first. Its surface type is now `web_or_other`. An iOS listing does exist
(`Apple:6769192304`, Diemus Inc.), so this records a *primary-surface* judgement,
not an absence.

## Verification policy · adopted from external front, round 2

**Verification on dependency, not bulk backfill.** Populate `last_verified`,
`verification_method`, `source_url` and `verification_actor` when a row is newly
added, contested, used in a quantitative or distribution claim, used as primary
support for a strategic conclusion, materially changed in lifecycle, or
rechecked in normal downstream work.

Older stable rows that nothing currently depends on keep their status and are
marked `verification_actor = LEGACY_NOT_BACKFILLED`, to be filled
opportunistically. A full 45-row rescan would consume post-closure effort, imply
a permanence the store landscape does not have, and go stale immediately.

Current actors: **29** `LEGACY_NOT_BACKFILLED`, **9** `CANON_INTERNAL_FRONT`,
**5** `W1_EXTERNAL_FRONT`, **2** `DISPUTED_EXTERNAL_VS_INTERNAL`.

## Distribution boundary

The registry owns **identity**, not market size.

Current observed standalone mobile distribution facts remain separate:
- four known Google Play products are in the 10K+ install bracket;
- My Bonsai and Mokusai add 1K+ observations;
- Mirai/OT2 do not enter standalone mobile-store denominators.

Ratings are not users. Installs are not active users. Revenue, retention and paid conversion remain `UNVALIDATED`.
