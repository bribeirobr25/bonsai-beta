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

**Derived counts — use these everywhere:**

- **18** known distinct products
- **17** believed currently active
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
> such data. Android figures are `UNVALIDATED` (contested, see §5).

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

- **iOS only, and the Android picture is now actively contested.** Google Play pages truncate under automated fetching, so neither figure below could be verified directly:

  | Source | Bonsai Empire on Google Play |
  |---|---|
  | `parallel-work.txt` | **10,000+ downloads, ~270 reviews** |
  | Independent search (this session) | **2K+ downloads** (APKPure: 1K+), rated 4.4 |

  A fivefold discrepancy on the most consequential number in the competitive picture — the difference between *small but real* and *very small*. **Treat as unresolved.** Ten minutes on an Android phone would settle it. This matters most for Brazil, which is roughly 80% Android, so the Brazilian figure of 15 remains a substantial undercount and must not be read as an empty market.
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

**Recommended order:** resolve the contested Android numbers → mine reviews of these 18 known products
for friction and abandonment → ~18 artifact interviews → *then* decide whether
the full observational programme is warranted.

Spending R$45k to establish that people will log, when 18 known shipped
products show low observable traction, is the wrong order.
