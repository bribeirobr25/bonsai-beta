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
