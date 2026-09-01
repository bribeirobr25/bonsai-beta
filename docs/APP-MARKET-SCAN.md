# App market scan — bonsai tracking and logging apps

**Method:** Apple App Store public lookup API, 1 September 2026. Queried in four
storefronts.

**Revised 1 September 2026** after `parallel-work.txt` surfaced five further
competitors. **The category holds at least 14 products, not nine** — the
original figure counted only those measurable through the iTunes API.
**Cost:** under an hour.
**Purpose:** the cheapest available test of the venture's central assumption —
that growers will maintain a longitudinal record of their trees.

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
| **ScandinavianBonsai** | Regional |
| **MyBonsaiTag** | Physical tagging |
| **Bonsai Care & RFID Tree Log** | RFID physical-to-digital tree identity |
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

**The category leader has 136 US ratings after six years.** At a typical
1–2% rating conversion that implies on the order of 7,000–14,000 users — for
the most successful product in the category.

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

Nine products compete for what appears to be a few thousand users. Either
nobody has cracked the logging experience, **or the market for bonsai
record-keeping software is very small.** The presence of many products with no
winner, plus a well-resourced incumbent failing to convert its own audience,
points more strongly at the second.

This does not prove growers will not log. It does show that **nine attempts to
monetise that behaviour have not produced a business**, which is the
practically relevant question.

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

**Recommended order:** resolve the contested Android numbers → mine reviews of these fourteen apps
for friction and abandonment → ~18 artifact interviews → *then* decide whether
the full observational programme is warranted.

Spending R$45k to establish that people will log, when nine shipped products
suggest the behaviour does not sustain a business, is the wrong order.
