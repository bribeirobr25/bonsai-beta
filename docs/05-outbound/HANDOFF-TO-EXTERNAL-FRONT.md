# Handoff to the external work front · round 2

**Date:** 3 September 2026
**Subject:** audit of `Bonsai_W1_FINAL_CLOSED_2026-09-03`
**Registry state after merge:** 45 products/surfaces · W1 remains CLOSED FOR BROAD REVIEW MINING

Round 1 is archived at `99-archive/superseded/HANDOFF-TO-EXTERNAL-FRONT-round1-2026-09-03.md`.

---

## 1. Adopted

All 25 files verified against your `SHA256SUMS.txt` (**25/25 OK**). Diffed
file-by-file against canon.

**The integrity result is worth stating plainly:** all four evidence datasets
were **byte-identical** to ours, and the registry preserved all 35 prior rows
**verbatim** — additive only. Nothing was silently altered. We re-derived your
arithmetic from the raw data rather than accepting it: 97 + 99 = 196;
82 + 6 = 88; quarantine `BG-US-001`…`006`, all one app; four Play products in
the 10K+ bracket. Every figure reconciled.

Adopted in full:

- the registry's six new columns, the `surface_type` taxonomy, identity rules 6–7 and the distribution boundary section — this is the right structure and it is what let us find the two issues in §3
- the 35 → 40 count with your sharper *"competitive software products/surfaces"* wording, which is more accurate now that the set includes a bundled tracker and desktop software
- removal of the stale "obvious next hour of work" sequencing in `APP-MARKET-SCAN.md`
- your restructured `W1-FINAL.md` addendum, which preserves both audit-provenance items we asked for

**Four of your five additions we independently confirmed at source:**
BonsaiBuddy `6758486631` (52/52 storefronts), My Bonsai `com.vitmonac.plantcareapp`
(HTTP 200, 1K+, Vitale Monaco), Mokusai `com.bonsaidesignstudio.mokusai`
(HTTP 200, 1K+, PeaceHeart Studio), and OT2 (bonsai collection management for
"trees, pots and pictures"; Windows 98/2000/XP era — your `legacy_available`
status is exactly right).

**BonsaiBuddy was a gap we missed.** Good catch.

---

## 2. One claim we could not reproduce

`FINAL-RECONCILIATION-RESOLUTION.md` §2 states both identities were "reproduced
through public first-party App Store pages on 3 September 2026". We re-checked
the same day, both methods, on **the storefronts you name**:

| Identity | iTunes Lookup API | App Store web page |
|---|---|---|
| Mori Bonsai `6763155691` — you cite **US** | **0 of 52 storefronts** | **HTTP 404** on the US page |
| Bonsai Buddy `6751142898` — you cite **FR/AT/ZA** | **0 of 52 storefronts** | **HTTP 404** on the FR page |
| *control* — BonsaiBuddy `6758486631` | **52 of 52** | full page renders |

The control matters: same method, same session, a comparable new bonsai app
resolves everywhere. That rules out an API coverage gap. And because the named
regions were checked directly, the registry's "a US 404 does not refute regional
identity" note no longer covers the case.

**We have moved both to `VERIFICATION_CONTESTED` — not removed them.** Delisting
between your check and ours, or a transcription error on either side, remain
live possibilities, and neither identity is load-bearing for any W1 conclusion.

**What would settle it:** a screenshot or archived capture with a visible
retrieval timestamp, or the exact URL and storefront you used. If they were
delisted, `lifecycle_status: withdrawn` is the cleaner record.

---

## 3. Two inconsistencies inside the package

**3.1 The new column contradicts your own scan document.**
`APP-MARKET-SCAN.md` excludes web-first products from distribution measurement
and names Bonsai Tracker and Yoi Bonsai. The registry flagged both
`included_in_standalone_distribution_measurement=true` — the exact confounding
that column exists to prevent. We set both to `false`.

**Question back to you:** four other `web_or_other` rows — MyBonsaiTag, Bonsme,
BonsaiPilot, my-bonsai, Yama Bonsai — are still `true`. We did **not** change
them, because the scan does not name them and the registry is yours. Should
`web_or_other` imply `false` as a rule?

**3.2 The verification columns are 12 of 45 populated.**
`last_verified`, `verification_method` and `source_url` are filled only for the
5 additions, the 5 we added, and the 2 contested. The other 33 rows carry no
date or method. Not a defect — but the prose reads as though the practice is in
force, and it isn't yet.

---

## 4. Five more competitors, and why the method matters more than the number

A **single US App Store query** (`bonsai`, 158 results) surfaced five products in
neither registry. Each confirmed by reading its store description:

| Product | Apple ID | Note |
|---|---|---|
| **Bonsai Pal** | `6770584295` | Care journal with **photo timeline and side-by-side compare** — the closest thing to our own concept that ships |
| **Bonsai Club** | `6450961438` | Garden diary since 2023: species, style, placement, pot, age, full care history with photos |
| **Bonsai Studio - AI Care** | `6778829915` | "Part archive, part expert advisor"; five languages |
| **Bonsai VN - FC** | `6761886265` | Vietnamese care journal with a technique library for Vietnamese species |
| **Noble Bonsai** | `6738886708` | Smart-unit companion app — needs the new `hardware_companion` surface type |

Added as `W1-041`…`W1-045`; the lower bound is now **45**.

**The number is the less interesting half.** These came from one storefront and
one search term, which means the real universe is materially larger than 45 —
your `UNVALIDATED` framing is right and should not be softened.

Worth flagging: **all five have 0 ratings**, which strengthens the existing
guardrail that ratings are not users. And **Bonsai VN - FC** bears on the
non-English positioning question in `PROJECT-BRIEF.md`.

One caveat on our own work: our first pass reported *three*, not five. The
filter matched product **names** and discarded "Bonsai Club" before reading its
description. We corrected it, and added an identity rule that classification must
read the description. Worth applying at your end too.

---

## 5. What we changed in your documents, and why

Every received document carries a provenance banner naming what changed; the
unmodified originals are in `99-archive/external-packages/`.

- **Paths restored.** Your package refers to `05_SUPERSEDED/…` and lowercase
  `w1-authenticity-quarantine.json`. Our tree uses `99-archive/superseded/…` and
  `W1-authenticity-quarantine.json`. Content unchanged.
- **Commit `0030e009` restored.** Your rewrite dropped it from the
  `parallel-work.txt` row. We verified it exists — *"Update all documentation
  from parallel-work findings"*, 1 Sep — and it is the only surviving pointer to
  the pre-overwrite Gate 0 and domain-model research.
- **Your audit records left at 40.** `FINAL-RECONCILIATION-RESOLUTION.md` and
  `W1-FINAL-CLOSURE-VALIDATION.md` still say 40, and your `W1-FINAL` addendum
  still says "35 to 40". Those are correct records of *your* closure state and
  we will not rewrite them; the current count lives in the registry and the
  canon docs.

---

## 6. Open items

1. Evidence for the two contested Apple identities — or `withdrawn` status.
2. Should `web_or_other` imply `included_in_standalone_distribution_measurement=false`?
3. Confirm `W1-041`…`W1-045` and the new `hardware_companion` surface type.
4. Is populating verification columns for the remaining 33 rows worth doing now,
   or deferred until something depends on it?

None of these blocks W2, W3 or W4. All four are governance, and W1 stays closed:
registry maintenance is not review mining.

---

## 7. Not asking for

More review mining. More competitor examples for their own sake. Any Product or
UIUX decision. P1 / P2 / P3 remain `UNVALIDATED` and no product is selected.
