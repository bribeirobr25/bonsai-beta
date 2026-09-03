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
`false`. Four other `web_or_other` rows remain `true` pending external
confirmation — they are not named in the scan and were not changed unilaterally.

**Verification-column coverage.** `last_verified`, `verification_method`,
and `source_url` are populated for **12 of 45** rows (`verification_note` for 14,
the two extra being the corrected measurement flags). The remaining 33 have no
recorded verification date or method: a known gap, not a completed practice.

## Distribution boundary

The registry owns **identity**, not market size.

Current observed standalone mobile distribution facts remain separate:
- four known Google Play products are in the 10K+ install bracket;
- My Bonsai and Mokusai add 1K+ observations;
- Mirai/OT2 do not enter standalone mobile-store denominators.

Ratings are not users. Installs are not active users. Revenue, retention and paid conversion remain `UNVALIDATED`.
