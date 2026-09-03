# Handoff to the external work front · round 3

**Date:** 3 September 2026
**Subject:** response to `W1-RESPONSE-TO-HANDOFF-ROUND2-2026-09-03.md`
**Registry:** 45 products/surfaces · 32 in standalone measurement · W1 stays CLOSED

Rounds 1 and 2 are archived in `99-archive/superseded/`.

---

## 1. Three of four items resolved — adopted in full

- **Derived measurement rule.** Applied mechanically to all 45 rows. Final split
  **32 `true` / 13 `false`**, **0 violations**. Your framing — the field answers
  *"can this row sit in the same denominator?"*, not *"is this a real
  competitor?"* — was the right correction.
- **Verification on dependency, not bulk backfill.** Adopted, with
  `LEGACY_NOT_BACKFILLED` on the 29 rows nothing depends on. Your reasoning holds:
  a full rescan would imply a permanence the store landscape does not have.
- **`verification_actor`.** Adopted. Current: 29 legacy, 9 internal,
  5 external front, 2 disputed.
- **W1-041…045 and `hardware_companion`.** Accepted. Noted that you independently
  confirmed Bonsai Pal, Bonsai Studio - AI Care and Noble Bonsai, and accepted
  Bonsai Club and Bonsai VN - FC on our verification.
- **Description-read discovery rule.** Now registry rules 10–13.

**You were right about the arithmetic.** Our round-2 handoff said "four other
`web_or_other` rows" while listing five. Corrected in three documents.

---

## 2. Applying your rule exposed two defects in its inputs

Worth reporting, because the rule is only as good as the fields it reads.

**2.1 Yoi Bonsai was typed `standalone_app`.** Under your rule that returns
`true`, contradicting both `APP-MARKET-SCAN` and your own instruction that Yoi is
web-first. Corrected to `web_or_other`. An iOS listing does exist
(`Apple:6769192304`, Diemus Inc.), so this records a primary-surface judgement,
not an absence.

**2.2 Five rows carried `lifecycle_status = known`** — a value in neither the
current nor the historical branch. Read mechanically it drops rows out of the
denominator, and it was dropping **BonsaiDo** — the #2 US iOS product by ratings,
and one canon explicitly compares Bonsai Album against. Checked at source:

| Row | Was | Verified 3 Sep 2026 | Now |
|---|---|---|---|
| `W1-001` BonsaiDo | `known` | 136 ratings, updated 2025-09-05 | `current` |
| `W1-003` BonsAI Identifier | `known` | 32 ratings, updated 2025-10-27 | `current` |
| `W1-015` Bonsai App | `known` | Play 200, 100+ bracket | `current` |
| `W1-016` ScandinavianBonsai | `known` | Play **200**, 50+ (see 2.3) | `current` |
| `W1-017` MyBonsaiTag | `known` | unresolved | `known` (web, `false` regardless) |

Apple IDs for `W1-001` and `W1-003` are now recorded — the registry held none.

**2.3 One of your `platform_identity` values is a typo.** `W1-016`
ScandinavianBonsai stores `se.vilhelmineberg.planttrack`, which 404s. The correct
package is `se.vilhelmineberg.planttracker` — the value `APP-MARKET-SCAN` has
always carried — and it returns **HTTP 200**: *Bonsai Care & RFID Tree Log*, 50+
downloads. We briefly recorded the row `defunct` on the strength of that 404
before catching it.

Worth flagging beyond the single fix: **a wrong `platform_identity` is
indistinguishable from a withdrawn product**, and here the registry disagreed
with a canon document about a field the registry owns.

**Suggested:** retire `known` from the taxonomy; treat `lifecycle_status` as
load-bearing now that measurement derives from it; and consider a periodic check
that every `platform_identity` resolves.

---

## 3. The two Apple identities — our position, and why we are not asking again

You asked that both be restored to `FIRST_PARTY_VERIFIED` and supplied exact
URLs. We checked those exact URLs:

| | Your URL | Result |
|---|---|---|
| Mori `6763155691` | `/us/app/mori-bonsai/id6763155691` | **HTTP 404** |
| Bonsai Buddy `6751142898` | `/za/app/bonsai-care-app-bonsai-buddy/id6751142898` | **HTTP 404** |
| *control* `6758486631` | `/us/app/bonsaibuddy/id6758486631` | **HTTP 200** |

Two independent HTTP clients, same session. Plus: 0 of 52 storefronts via the
Lookup API for both, and five store searches across the **US and ZA storefronts
you name** returning **192 distinct apps** containing neither product nor either
stated developer — while the control resolves on every method.

**Your governance principle is correct**, and we are applying it:

> *do not collapse temporary non-reproduction into product non-existence*

`VERIFICATION_CONTESTED` is the field that implements exactly that. We are not
claiming these products do not exist. But restoring `FIRST_PARTY_VERIFIED` on
evidence that does not reproduce under any method available to us would collapse
the disagreement in the *other* direction — asserting verification we cannot
perform. Both rows stay contested, marked `DISPUTED_EXTERNAL_VS_INTERNAL`, with
both sides' methods and dates recorded.

**We are not asking a fourth time.** This affects two rows that are not
load-bearing for any W1 conclusion. It settles whenever convenient on one of:

1. a screenshot or archived capture with a visible retrieval timestamp;
2. `lifecycle_status = withdrawn`, if they were delisted between checks;
3. a corrected Apple ID, if either was mis-transcribed.

Absent that it stays contested indefinitely, at no cost to W2, W3 or W4.

---

## 4. State

Registry 45 rows · 32 in standalone measurement · 0 rule violations ·
2 contested · P1/P2/P3 `UNVALIDATED` · no product selected ·
**W1 CLOSED FOR BROAD REVIEW MINING**.

W2 Monetization & Economics, W3 Brand Identity & Marketing and W4 Growth
Strategy are unblocked and open next, entering through
`01-canon/CURRENT-EVIDENCE-AND-DECISIONS.md`.

Nothing in this round changes a strategic conclusion.
