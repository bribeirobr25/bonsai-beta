# W1 · Competitor review mining

> **Strategic Foundation / Pre-MVP Canon v1.0** — workstream output, 2 September 2026.

**Question:** where do existing bonsai tracking products please, frustrate, fail
and get abandoned?

**Method:** Apple's public customer-review RSS endpoint, all 10 iTunes-measurable
products from `APP-MARKET-SCAN.md` §0, across 10 storefronts (us, gb, ca, au, de,
nl, br, fr, es, it), paginated and deduplicated. **n = 97 unique written
reviews.** Themes coded by keyword across title and body, then read in full.

---

## 0. Limits — read before using any number here

- **Reviewers are self-selected**, skewed to the delighted and the furious.
- **Written reviews are a small fraction of ratings.** BonsaiDo has 136 US ratings and 17 written reviews across all storefronts. This corpus is not the user base.
- **iOS only.** Android — where the category leader has 10K+ installs (§7 of the scan) — is not represented at all. Given Google Play holds roughly 192–270 reviews for that one app, **the Android review corpus is larger than everything analysed here.**
- **No prevalence claims are possible.** Everything below is `OBSERVED` in the corpus or `SUPPORTED SIGNAL`; nothing is measured against a population.
- Concentration is extreme: 66 of 97 reviews are for one product (Bonsai Care App).

---

## 1. Distribution

| Rating | Count |
|---|---|
| 5★ | 53 |
| 4★ | 18 |
| 3★ | 8 |
| 2★ | 4 |
| 1★ | 14 |

**27% are ≤3★.** By product: Bonsai Care App 66, BonsaiDo 17, Appy Bonsai 10,
Jooni 2, BonsAI Identifier 2.

---

## 2. The headline finding

**Almost none of the negative reviews reject the concept.** They reject the
execution.

Across 26 negative and mixed reviews, the complaints are: terms and conditions
presented in Italian to English and Spanish users with no way past the screen;
confirmation emails that never arrive; white screens; crashes; premium
purchases not recognised; species selection saving the wrong species; and one
account of total data loss.

Not one reviewer writes anything resembling *"I don't see why I would track my
trees."* The objections are craft objections.

> That matters for the venture thesis. The category's visible failures are
> engineering, localisation and reliability — not an absence of demand for the
> underlying job. `SUPPORTED SIGNAL`.

---

## 3. Theme frequency

| Mentions | of which ≤3★ | Theme |
|---:|---:|---|
| 16 | 8 | **Paywall / tree limit** |
| 16 | 2 | Photo progression and timeline |
| 15 | 2 | Reminders valued |
| 15 | 5 | **Search, sorting, grouping, tags** |
| 12 | 5 | Species coverage gaps |
| 10 | 6 | Bugs, crashes, cannot access |
| 10 | 4 | Login / signup / email failure |
| 9 | 1 | **Replaced a spreadsheet or notebook** |
| 9 | 1 | Beginner framing |
| 5 | 1 | Community and sharing |
| 2 | 2 | **Data loss** |
| 2 | 1 | Climate / location mismatch |
| 1 | 1 | Offline unavailable |
| 1 | 1 | Followed the advice, tree died |

---

## 4. Findings that bear directly on our hypotheses

### 4.1 The record impulse exists before the tool — H1B-adjacent

Nine reviewers describe the app replacing a spreadsheet or notebook. The
sharpest:

> *"I planned to create a spreadsheet to keep track of my growing collection of
> bonsai trees, but this app does a far better job and it includes photo
> progressions."*

This person was **about to build their own record system**. That is the closest
thing to H1B evidence obtainable without participants — the logging impulse
existing prior to any product.

**Status: `SUPPORTED SIGNAL`.** Self-selected, n=9, and reviewers who *stopped*
logging do not write reviews saying so. It does not establish prevalence and
must not be read as H1B passing.

### 4.2 Data loss is an existential risk for a record product

> *"I've been a paid member for more than 2 years and see that all my data has
> suddenly been deleted. It's such a shock to see that everything is just gone."*

Only 2 mentions, but the severity is asymmetric. **For a system of record,
durability is not a feature — it is the entire value proposition.** A tracker
that loses history has destroyed the thing it existed to protect. Any product
in this space needs export, backup and durability guarantees as *core*, not as
a later reliability improvement.

### 4.3 Organisation is the largest unmet functional need

15 mentions, spanning sorting, grouping, search, tags and multiple collections:

> *"It would be great if trees could be in multiple collections and/or we could
> add searchable tags. I would love to have the same tree in my Native
> Californian collection and my main collection."*

This maps onto the domain model's handling of subjects and collections, and it
is a want users articulate unprompted.

### 4.4 The segment split is confirmed in the wild

> *"30 years playing with trees and 80 trees in the back yard — I hardly need to
> be reminded of when to water and fertilize."*

…against nine reviews praising reminders in explicitly beginner terms. This
directly confirms `PROJECT-BRIEF` §3: **beginners want safety and memory;
experienced growers want history and organisation.** Reminders are the beginner
hook and are actively worthless to the experienced segment.

### 4.5 Climate mismatch appears in the wild — H4

> *"A single drawback — it needs to account for the location… its suggestions
> don't seem to be for Australian climate or Weather."*

One review, but it is a real user reporting the exact failure H4 predicts, in a
southern-hemisphere market. `SUPPORTED SIGNAL`, single instance.

### 4.6 The advice-liability risk is not hypothetical

> *"Killed mine — I did everything it told me to do yet my bonsai died."*

One review. This is precisely the failure mode `DOMAIN-MODEL` §7.1 is designed
to prevent, and it is the reason the advice ladder stops at level 3 without H7.

### 4.7 Community is wanted, not resented

> *"It would be really cool if you could link the app with tree forums. Sharing
> pics, problems, progress, and advice."*
> *"I like being able to share my bonsai with a like-minded community."*

Five mentions, four positive. Small, but consistent with H6A, and notably these
users request *contextual* sharing — problems, progress, advice — rather than a
follower feed.

### 4.8 Localisation failure blocks users outright

Multiple 1★ reviews from UK, US and Spanish users are entirely about Italian
terms and conditions with no accept path. A German user simply writes *"Bitte in
Deutsch."*

Relevant to the Brazil question: **localisation here is not polish, it is
access.** These users never reached the product at all.

---

## 5. What this changes

| Prior position | After W1 |
|---|---|
| Category shows low observable traction | Unchanged, but the *reasons* visible in reviews are execution failures rather than rejection of the job |
| H1B unvalidated | Still `UNVALIDATED` — but now with a `SUPPORTED SIGNAL` that the record impulse predates the tool |
| Segment split was reasoned | Now `OBSERVED` in user language |
| Climate mismatch hypothesised | One real-world instance `OBSERVED` |
| Durability not previously called out | **New risk, promoted to first-class** |

---

## 6. Implications for the other workstreams

**W2 · Monetization.** The paywall is the single most-mentioned negative theme
(16 mentions, 8 negative), consistently about the 5-tree free limit and
subscription-versus-one-off. One reviewer objects to a trial converting to a
paid subscription without warning. Pricing structure — not price level — is
where the friction sits.

**W3 · Brand.** Reviewers describe value in the vocabulary of *memory*,
*organisation* and *progression*, not *expertise* or *advice*. The one review
mentioning advice reports a dead tree. That argues for a memory-and-progress
territory over a guidance territory.

**W4 · Growth.** One reviewer converted after watching a named practitioner's
YouTube review — practitioner endorsement as an acquisition moment, consistent
with the P3 thesis. Localisation is an access gate, not a growth tactic.

---

## 7. What W1 cannot answer

Prevalence. Retention. Whether people who stop logging would say why. Android
users entirely. And the central question — whether growers maintain records over
years — because **the people who abandoned these apps mostly did not write a
review explaining it.** That remains Track B.

---

# Part 2 · Android · added 2 September 2026

**Method:** `google-play-scraper` against the known Google Play packages, 11
storefronts, deduplicated. **n = 99 unique written reviews.** Install brackets
and rating counts read directly from Play listings. Dataset:
`w1-android-reviews-dataset.json`.

## 8. The install brackets are the real finding

Reviews were the goal; the listing metadata turned out to matter more.

| Product | Installs | Ratings | Play reviews |
|---|---:|---:|---:|
| **Bonsai Care App** (Empire) | **10,000+** | 270 | 26 |
| **Appy Bonsai** | **10,000+** | 94 | 2 |
| **Jooni** | **10,000+** | 53 | 2 |
| My Bonsai – Bonsai Care | 1,000+ | 0 | 0 |
| Wabi Sabi Bonsai: Tracker | 1,000+ | 0 | 0 |
| Mokusai: Bonsai Design & Care | 1,000+ | 0 | 0 |
| TreeMax AI Plant Care & Bonsai | 500+ | 0 | 0 |
| BonsaiLog: Bonsai Care Journal | 100+ | 0 | 0 |
| Bonsai Club | 100+ | 0 | 0 |
| **Bonsai App** (`br.com.bonsaiapp`, Brazilian) | **100+** | **0** | 0 |
| ScandinavianBonsai / RFID Tree Log | 50+ | 0 | 0 |
| Komorebi: Bonsai Tree Care | 50+ | 0 | 0 |
| Bonsai Care: Plant Tracker | 10+ | 0 | 0 |
| BonsaiLog: Bonsai Care Log | 10+ | 0 | 0 |
| BonsaiNikki – Bonsai Journal | 10+ | 0 | 0 |
| BonsaiDiary | 10+ | 0 | 0 |
| Bonsai Seasons | 10+ | 0 | 0 |
| **Yoi Bonsai** | **10+** | **0** | 0 |
| BonsaiLog | 1+ | 0 | 0 |

### Three things this establishes

**Three products at 10,000+ installs, then a cliff to zero.** The category is
not one leader and a long tail — it is a small cluster with real distribution
and a graveyard of roughly fifteen products nobody uses.

**The strongest product has the weakest distribution.** Yoi Bonsai — the only
product shipping the provenance and lineage model closest to ours, built by
someone with 20+ years in bonsai — sits at **10+ installs, 0 ratings**.

**Our supposed wedges are occupied by failures, not by winners.** The Brazilian
app has 100+ installs and 0 ratings. And `BonsaiDiary`'s own store summary reads:

> *"The story of your bonsai — documented, shared, preserved."*

That is close to our working thesis statement, already shipped — at **10+
installs**.

> **This reframes §5 of `APP-MARKET-SCAN`.** The positions are not *unclaimed*
> and they are not *won*. They are **claimed and failing**. Those are three
> different competitive situations and we had been conflating the last two.
> `OBSERVED`.

## 9. The count was wrong a fourth time

The master list held 18 known products. Play search surfaced roughly **19
genuine bonsai care/tracking apps on Android alone**, most previously unknown —
including one at 10,000+ installs. Adding iOS-only products puts the true figure
somewhere near 30.

> **Recommendation: stop maintaining a total.** The count has been wrong at 9,
> 14, 18 and now again. It is not knowable by this method and no argument should
> depend on it. What *is* knowable and decision-relevant: **three products have
> meaningful distribution; everything else is at or near zero.**

## 10. Android review themes

Distribution: 72×5★, 10×4★, 4×3★, 3×2★, 10×1★ — **17% negative**, versus 27% on
iOS. The themes repeat, with three additions.

**Scheduling is non-deterministic in the leading product.**

> *"I added all my trees last week and, for interest, added one of my
> Bougainvilleas again today to see if the app is consistent, but it wasn't at
> all. The dates were completely different for the exact same plant."*

The incumbent's core function — telling you when to act — produces different
answers for identical input. Reinforces §4.6: guidance without a defensible
basis is the category's weak point.

**Notifications fail in both directions.** Weeks of silence then five at once;
one user uninstalled on day one over unswipeable notifications.

**The paywall calculation is explicit, and it is a retention finding.**

> *"I saw the very limited library and the paywall and knew I would only ever
> truly benefit from the reminders and having a list of my trees, both things
> that can be easily done [elsewhere]."*

This user **priced the value themselves and concluded it was replicable for
free.** That is the sharpest monetisation input in either corpus, and it goes
straight to W2.

**A Brazilian user records daily care in Portuguese.**

> *"Utilizo o app pra registrar minha rotina de cuidados e informações
> importantes dos meus [bonsais]."*

Active record-keeping behaviour, in Brazil, in Portuguese — frustrated by
subscription bugs rather than by the act of logging. Small, self-selected, but
the first Brazilian instance of the H1B behaviour we have seen anywhere.
`SUPPORTED SIGNAL`.

## 11. What Part 2 changes

| Prior position | After Android |
|---|---|
| "None has meaningful traction" | **Wrong.** Three products hold 10,000+ installs |
| Positions are "occupied" | Occupied **and failing** — a different and more useful fact |
| Portuguese wedge occupied | Occupied by a product with 0 ratings |
| Provenance position taken by Yoi | Taken by a product with 10+ installs |
| 18 known products | Nearer 30; **stop counting** |
| iOS negativity 27% | Android 17% — iOS corpus over-weights complaints |

The unresolved question is unchanged and now sharper: **three products acquired
tens of thousands of installs. Nothing here tells us how many still open them.**
