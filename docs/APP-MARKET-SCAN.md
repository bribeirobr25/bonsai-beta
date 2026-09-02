# App market scan — bonsai tracking and logging apps

**Method:** Apple App Store public lookup API, 1 September 2026. Queried in four
storefronts.

**Revised 2 September 2026.** Earlier versions said nine products, then
"at least 14". Both were wrong. §0 now derives a single count from a master
list, and every other document takes its number from there.
**Cost:** under an hour.
**Purpose:** the cheapest available test of the venture's central assumption —
that growers will maintain a longitudinal record of their trees.


> **Strategic Foundation / Pre-MVP Canon v1.0** — frozen 2 September 2026.
> Changes from here should be recorded as amendments rather than silent edits,
> so the four workstreams do not diverge from different snapshots.

---

## 0. Master competitor list

One list, one derived number. Prior drafts mixed a measured sample with a
narrative count and disagreed with themselves.

| # | Product | In iTunes sample? | Note |
|---:|---|---|---|
| 1 | BonsaiDo | yes | |
| 2 | Bonsai Care App (Bonsai Empire) | yes | |
| 3 | BonsAI Identifier: Tree Care | yes | |
| 4 | Jooni – Bonsai Tracking | yes | |
| 5 | Bonsai Care – Journaling | yes | |
| 6 | Appy Bonsai | yes | |
| 7 | Bonsaiku | yes | season × climate calendar |
| 8 | Bonsai – Tree Care | yes | |
| 9 | Tiny Tree Club | yes | |
| 10 | Bonsai Care: Plant Tracker | yes | **added 2 Sep**; 0 ratings, released Jul 2026 |
| 11 | Bonsai Tracker | no — web-first | permanent Tree ID; ownership transfer |
| 12 | Yoi Bonsai | no — web-first | "lineage that travels with the tree" |
| 13 | Wabi Sabi Bonsai | no — Android | QR code per pot |
| 14 | Diario Bonsai – Nebari | no — not queried | **Portuguese**; hemisphere + climate zone |
| 15 | Bonsai App (`br.com.bonsaiapp`) | no — Android | **Brazilian** |
| 16 | ScandinavianBonsai | no — Android | RFID tags. **Same product as "Bonsai Care & RFID Tree Log"** (`se.vilhelmineberg.planttracker`) — earlier drafts double-counted these |
| 17 | MyBonsaiTag | no — not queried | identity/transfer via NFT |
| 18 | Bonsme | **defunct** | shut down; founders cited capacity |

**Derived counts — superseded 2 Sep 2026. See `W1-COMPETITOR-REVIEW-MINING.md` §9.**

Google Play search surfaced roughly 19 genuine bonsai care/tracking apps on
Android alone, most absent from this list, including one at 10,000+ installs.
With iOS-only products the true figure is nearer 30.

> **The count has now been wrong at 9, 14 and 18. Stop maintaining a total** —
> it is not knowable by this method and no argument should depend on it.
>
> What is knowable and decision-relevant: **three products hold 10,000+ Android
> installs; everything else sits at or near zero.**

The list below remains useful as a record of *which* products exist and what
they do. It is a floor, not a census.

- **10** measured in the iTunes sample below (the 10th, *Bonsai Care: Plant Tracker*, was added 2 Sep and verified at 0 ratings in all four storefronts, so it does not change the totals)

*Excluded by criterion:* Mirai Mobile ships inside a subscription, so its
numbers would reflect that subscription rather than standalone demand.

> This list is **not** claimed to be exhaustive. Two products were found only
> after two prior scans called the list complete, so assume more exist.

---

## 1. US storefront

| App | Developer | Released | Last update | Rating | US ratings |
|---|---|---|---|---:|---:|
| BonsaiDo | Marco Rinaldi | 2020-04-16 | 2025-09-05 | 4.6 | 136 |
| Bonsai Care App | Bonsai Empire | 2023-12-05 | 2026-08-24 | 4.5 | 64 |
| BonsAI Identifier: Tree Care | Juanjo Valino | 2024-12-05 | 2025-10-27 | 4.3 | 32 |
| Jooni – Bonsai Tracking | EDUARDO FERREIRA | 2020-10-29 | 2026-08-11 | 4.0 | 5 |
| Bonsai Care - Journaling | Abdelkarime Achtaou | 2024-12-12 | 2026-08-15 | 5.0 | 1 |
| Appy Bonsai - Bonsai Care | Appy Bonsai | 2024-04-10 | 2026-08-31 | 5.0 | 1 |
| Bonsaiku: Bonsai Care & Log | PRIOMAT LLC | 2026-06-17 | 2026-06-17 | — | 0 |
| Bonsai - Tree Care | Mitaanshu Agarwal | 2026-06-23 | 2026-06-23 | — | 0 |
| Tiny Tree Club | Jonathan Baran | 2026-05-19 | 2026-08-17 | — | 0 |
| Bonsai Care: Plant Tracker | MEHMET CANKER (TR) | 2026-07-21 | 2026-07-21 | — | 0 |
| **Total** | | | | | **239** |

## 2. Competitors outside this table

Found in later research and **not** measured above, because they are not
queryable through the iTunes lookup API or are web-first:

| Product | Note |
|---|---|
| **Bonsai Tracker** | Web-first. Permanent Tree ID and ownership transfer with care history |
| **Yoi Bonsai** | "Lineage that travels with the tree"; zero-fee marketplace. Built by a developer with 20+ years in bonsai |
| **Wabi Sabi Bonsai** | QR code per pot; auto-timeline; Google Drive sync |
| **Diario Bonsai – Nebari** | **Portuguese-language**, launched 2026. Claims hemisphere *and* climate zone |
| **Bonsai App** (`br.com.bonsaiapp`) | **Brazilian**, Google Play |
| **ScandinavianBonsai** | Android. RFID tags for physical-to-digital tree identity. Listed on Google Play as *Bonsai Care & RFID Tree Log* (`se.vilhelmineberg.planttracker`) — **one product, two names**; earlier drafts counted it twice |
| **MyBonsaiTag** | Physical tagging; identity and transfer via NFT |
| **Bonsme** | Community-oriented |

Two consequences. **The Portuguese-language position is doubly occupied** —
Nebari and `br.com.bonsaiapp`. And **physical tree identity is being attacked
from three directions** — QR codes, RFID tags and permanent IDs — so it is not
an open idea either.

## 3. Other storefronts

| Storefront | Apps listed | Total ratings, all apps | Leader |
|---|---:|---:|---|
| United States | 9 | **239** | BonsaiDo (136) |
| United Kingdom | 8 | **51** | BonsaiDo (24) |
| Germany | 7 | **25** | Bonsai Care App (16) |
| **Brazil** | 8 | **15** | BonsaiDo (10) |

Roughly **330 ratings across the entire category** in four of the world's
largest app markets.

---

## 4. What this means

> **Evidence status of this scan:** the rating counts are `OBSERVED`. The
> inference that the category has low momentum is a `SUPPORTED SIGNAL`.
> Anything about revenue, retention or viability is `UNVALIDATED` — we have no
> such data. Android install figures are now `OBSERVED` (see §7); Android
> *usage* remains `UNVALIDATED`.

**The category leader has 136 US ratings after six years.**

> **Do not convert ratings into a user estimate.** An earlier version of this
> document inferred "7,000–14,000 users" from an assumed 1–2% rating
> conversion. That rate was invented, not measured, and rating behaviour varies
> enormously by category, prompt design and platform. **Ratings are a
> comparative signal between these apps and nothing more.**

**Bonsai Empire's app has 64 US ratings.** They hold the largest audience in
bonsai — 110+ species guides and two decades of brand — and their app has
sixty-four ratings. If anyone could convert an existing audience into a
logging product, it is them.

**Three apps launched in 2026 and have zero ratings**: Bonsaiku (June),
Bonsai – Tree Care (June), Tiny Tree Club (May). A wave of new entrants, none
gaining traction.

**Two apps appear stale**: BonsaiDo last updated September 2025, BonsAI
Identifier October 2025. The category leader has not shipped in a year.

### The interpretation

Multiple products compete in a category showing **low observable iOS rating
traction** across the sampled storefronts, with no visible winner.

> **What this does not tell us.** Whether that reflects low adoption, low
> rating propensity, usage concentrated on Android or web, or genuinely small
> addressable demand **remains unresolved**. An earlier draft here asserted
> "a few thousand users" and a probably-very-small market. Both reintroduced
> the user inference removed two sections above, and neither is supported.

This does not prove growers will not log.

> **Nor does it show that these attempts "have not produced a business" —
> an earlier version of this document asserted exactly that, and it is not
> supported.** We have no revenue, subscription, retention or sustainability
> data for any of these products. Several are free; several are side projects;
> at least one shut down for stated capacity reasons rather than demand.
>
> What the data supports is narrower and should be stated as such:
> **low observable traction on iOS across four storefronts, with no visible
> winner.** That is a real negative signal about category momentum. It is not a
> conclusion about economic viability, and it must not be quoted as one.

---

## 5. Limitations — read before acting

- **iOS only. The Android picture was contested and is now resolved — see §7.** Android adoption for the category leader is materially higher than this iOS sample suggests, so **these numbers understate the category.** The contested figures were:

  | Source | Bonsai Empire on Google Play |
  |---|---|
  | `parallel-work.txt` | **10,000+ downloads, ~270 reviews** |
  | Independent search (this session) | **2K+ downloads** (APKPure: 1K+), rated 4.4 |

  **Resolved 2 Sep 2026 — see §7.** The 2K+ figure is superseded. This still matters most for Brazil, which is roughly 80% Android, so the Brazilian iOS figure of 15 remains a severe undercount and must not be read as an empty market.
- **Ratings are not users.** They are a proxy for relative scale, not an absolute measure.
- **Four storefronts.** Not global coverage.
- **Web-first products excluded.** Bonsai Tracker and Yoi Bonsai are primarily web products with companion apps; their usage is not captured here.
- **Mirai Mobile excluded** — it ships inside a subscription, so its numbers would reflect the subscription, not standalone demand.

The Android gap is the most important of these. Closing it — via a Play Store
scraper or a third-party analytics source — is the obvious next hour of work,
and is required before treating the Brazilian figure as meaningful.

---

## 6. Consequence for the research programme

This changes sequencing rather than conclusions. It was obtained in under an
hour and bears directly on H1, the hypothesis that a 12–14 week, R$45k–90k
programme was designed to test.

**Recommended order:** ~~resolve the contested Android numbers~~ ✅ done (§7) → mine reviews of these 18 known products
for friction and abandonment → ~18 artifact interviews → *then* decide whether
the full observational programme is warranted.

Spending R$45k to establish that people will log, when 18 known shipped
products show low observable traction, is the wrong order.

---

## 7. Amendment · 2 September 2026 · Android signal resolved

The Android discrepancy recorded in §5 is closed. Bonsai Empire's
`app.bonsaicare` is confirmed on Google Play at the **10K+ install bracket**,
and independent Android trackers estimate cumulative downloads in the **low
forties of thousands**.

| Metric | Value | Status |
|---|---|---|
| Google Play install bracket | **10K+** | `OBSERVED` — confirmed |
| Cumulative downloads | **~42–44K** | `SUPPORTED SIGNAL` — third-party estimate; AppBrain and Chrome-Stats differ |
| Google Play reviews | **~192–270** | **Inconsistent across sources and dates** — an order of magnitude, not a figure |
| Previous "2K+" | — | **REJECTED / superseded** |
| Active users, retention, paid conversion, revenue | — | `UNVALIDATED` |

> **The sub-figures did not reconcile.** An independent check found 192 reviews
> and ~42K estimated downloads where the reporting source gave ~268 and ~44K.
> The **magnitude** is corroborated; the precise numbers are not. Record the
> bracket, not the decimals.

### What this changes

The iOS-only reading understated the category. Bonsai Empire shows **64 US iOS
ratings** against **10K+ Android installs and hundreds of Android reviews** — so
"low observable traction" was partly an artefact of sampling one platform.

The correct formulation, superseding the wording in §4:

> **iOS observable traction is low, while Android evidence for the category
> leader is materially stronger: Google Play confirms 10K+ installs and
> independent trackers estimate roughly 42–44K cumulative downloads. Market
> adoption is therefore larger than the iOS-only scan suggested, while active
> usage, retention, paid conversion and economic viability remain
> `UNVALIDATED`.**

**Do not make the downloads → users → customers leap.** Cumulative downloads are
not active users and are certainly not paying ones.

### Consequence

The question for Monetization improves. It is no longer *"is this market too
small?"* but:

> **Bonsai Empire converted substantial distribution into tens of thousands of
> downloads. How many became recurring users, how many paid, and why?**

That is the gap between acquisition and retained economic value — a better
question than this scan was previously pointing at.
