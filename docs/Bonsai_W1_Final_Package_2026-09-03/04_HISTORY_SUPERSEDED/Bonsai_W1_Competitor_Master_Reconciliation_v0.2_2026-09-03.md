# Bonsai · W1 · Competitor Master Reconciliation v0.2

**Date:** 3 September 2026
**Status:** Track A evidence artifact; not yet canonical.
**Purpose:** reconcile the competitor universe before broad review mining.

## Deduplication rule

A product is treated as the same product when identity is supported by stable platform identifiers, developer identity, or explicit aliasing/localisation. **Name alone is never used as the identity key.**

Primary keys:
- Apple: App Store ID + developer
- Google Play: package ID + developer
- Web-first: canonical domain + product identity
- Cross-platform: merge only when developer/branding/product identity clearly match

## Reconciled known-product list

| # | Product | Surface | Provenance | Reconciliation | Identity note |
|---:|---|---|---|---|---|
| 1 | BonsaiDo | Apple | Existing canon | distinct | Marco Rinaldi / existing master |
| 2 | Bonsai Care App | Apple + Google Play | Existing canon | distinct | Bonsai Empire |
| 3 | BonsAI Identifier: Tree Care | Apple | Existing canon | distinct | existing master |
| 4 | Jooni – Bonsai Tracking | Apple | Existing canon | distinct | existing master |
| 5 | Bonsai Care - Journaling | Apple | Existing canon | distinct | Abdelkarime Achtaou; Apple ID 6739073820 |
| 6 | Appy Bonsai - Bonsai Care | Apple | Existing canon | distinct | existing master |
| 7 | Bonsaiku: Bonsai Care & Log | Apple | Existing canon | distinct | existing master |
| 8 | Bonsai - Tree Care | Apple | Existing canon | distinct | Mitaanshu Agarwal |
| 9 | Tiny Tree Club | Apple | Existing canon | distinct | existing master |
| 10 | Bonsai Care: Plant Tracker | Apple/Google Play | Existing canon | distinct | existing master |
| 11 | Bonsai Tracker | Web-first | Existing canon | distinct | bonsaitracker.com |
| 12 | Yoi Bonsai | Web-first | Existing canon | distinct | existing master |
| 13 | Wabi Sabi Bonsai | Android | Existing canon | distinct | existing master |
| 14 | Diario Bonsai - Nebari / Bonsai Care Journal - Nebari | Apple | Existing canon | same localized product | Karol Jaworski; Apple ID 6760012296 |
| 15 | Bonsai App (br.com.bonsaiapp) | Android | Existing canon | distinct | existing master |
| 16 | ScandinavianBonsai / Bonsai Care & RFID Tree Log | Android | Existing canon | same alias product | existing master |
| 17 | MyBonsaiTag | Web/other | Existing canon | distinct | existing master |
| 18 | Bonsme | Historical/defunct | Existing canon | distinct, defunct | existing master |
| 19 | Kodama - Bonsai Tree Care | Apple | Newly confirmed | distinct | BigBalli Consulting LLC; Apple ID 6761913585 |
| 20 | Mori Bonsai | Apple | Newly confirmed | distinct | Sima Technologies LLC; Apple ID 6763155691 |
| 21 | Komorebi: Bonsai Tree Care | Apple | Newly confirmed | distinct | Emanuele Pina; Apple ID 6761901054 |
| 22 | BonsaiTrack: Care Journal | Apple | Newly confirmed | distinct | Filip Rusin; Apple ID 6774980293 |
| 23 | Bonsai: Care & Growth Journal | Apple | Newly confirmed | distinct | ElevenApril / 帅 陈; Apple ID 6772092929 |
| 24 | BonsaiLog: Bonsai Care Log | Apple | Newly confirmed | distinct | TOBY M BERGER; Apple ID 6789196023 |
| 25 | BonsaiNikki – Bonsai Journal | Apple | Newly confirmed | distinct | David Assany; Apple ID 6761331285 |
| 26 | kinoki - bonsai journal & care | Google Play | Newly confirmed | distinct | ODA TECNOLOGIA LTDA, Brazil |
| 27 | BonsaiLog | Apple | Newly confirmed | distinct from #24 | MAKOTO NAKAGAWA; Apple ID 6763495229 |

## Count

- Existing canonical master: **18 distinct products**.
- Newly confirmed distinct products in this rescan: **9**.
- Reconciled known total: **at least 27 distinct bonsai-specific care/tracking/journal products**.
- **Bonsme** remains historical/defunct. Active status of every other product should be rechecked when material.

### Important dedupe corrections

1. **Diario Bonsai - Nebari** and **Bonsai Care Journal - Nebari** are the same product: Apple ID `6760012296`, developer Karol Jaworski.
2. **BonsaiLog: Bonsai Care Log** (TOBY M BERGER, `6789196023`) and **BonsaiLog** (MAKOTO NAKAGAWA, `6763495229`) are distinct despite sharing the same name.
3. Localized storefront titles are presentation variants, not separate products.

## Evidence status

- **OBSERVED:** at least 27 distinct identities are now supported by first-party storefront/product evidence plus the prior canonical master.
- **SUPPORTED SIGNAL:** the competitive field is materially more crowded than the 18-product scan indicated.
- **UNVALIDATED:** exhaustiveness. Twenty-seven is a lower bound, not a claim that the market has exactly 27 products.

## Consequence for W1

Broad review mining should use **27 as the current minimum known universe**, while keeping an open discovery queue. New products found during mining must be reconciled before denominators change.

## Strategic interpretation

This does **not** prove the market is attractive or unattractive. It strengthens narrower conclusions:

1. repeated product entry into bonsai logging/care is real;
2. feature novelty is harder to claim than the earlier scan suggested;
3. W1 should focus on **why users adopt, retain, abandon, distrust, or work around these products**, not on feature-gap counting.

## Newly confirmed positioning signals

- **Kodama:** AI identification/diagnosis/wiring plus care/journal utilities.
- **Mori Bonsai:** private grove, seasonal care by hemisphere/climate/species.
- **Komorebi:** reminders, photo diary, weather alerts, guides and export.
- **BonsaiTrack:** private per-tree history, photos, care actions, reminders and ZIP export.
- **Bonsai: Care & Growth Journal:** multi-year photo/history positioning rather than generic plant care.
- **BonsaiLog (Toby Berger):** offline, no account, one-time purchase, reminders and export.
- **BonsaiNikki:** collection history, care logs, styling, repotting and photo comparison.
- **kinoki:** Brazilian developer; tracking/care/sharing with public bonsai pages.
- **BonsaiLog (Makoto Nakagawa):** offline per-tree work history, planning, photos, search and tags.

## Next gate

Proceed to broad review mining against this reconciled universe, beginning with platforms that expose lawful public reviews and keeping source-specific limitations separate.