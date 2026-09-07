# Bar-Bonsai · Functional Validation Sandbox

Zero-budget research instrument for the bonsai venture (W6). One tree's dated
history, de/en, EU-hosted. The product definition is in
`docs/02-workstreams/W6-mvp-validation-strategy/sandbox/W6-SANDBOX-PLAN-v0.4.md`;
`docs/README.md` is the entry point to the canon.

## Stack
Next.js 16 (App Router, `proxy.ts`), TypeScript, Tailwind 4, next-intl 4,
Drizzle ORM + postgres.js, Supabase (Postgres, Auth magic links, private
Storage) in Frankfurt, Vercel Hobby `fra1`, Resend for the sign-in sender from
14 September. No AI calls run inside the deployed app in v0.1.

## Local setup
```bash
pnpm install
pnpm supabase start            # Docker; prints URL, publishable and secret keys
cp .env.example .env.local     # paste the two keys
pnpm db:reset                  # applies supabase/migrations
pnpm seed:species              # 110 legacy species identities at `normalized`
pnpm dev                       # http://localhost:3000 → /de
```
Sign-in emails land in the local inbox at http://127.0.0.1:54324.

## Scripts
| script | does |
|---|---|
| `pnpm typecheck` | `next typegen` + `tsc` |
| `pnpm test` | vitest unit tests |
| `pnpm db:generate` | drizzle-kit → `supabase/migrations/<timestamp>_*.sql` |
| `pnpm db:generate:custom` | empty migration for hand-written SQL (RLS, storage) |
| `pnpm db:reset` / `pnpm db:push` | apply migrations locally / to the linked project |
| `pnpm seed:species` | idempotent seed from `docs/04-evidence/legacy/bonsaiData.ts` |

## Layout
- `src/db/schema.ts` schema v1 (plan Part 11) with RLS policies
- `src/lib/auth/dal.ts` verified session + consent gate
- `src/lib/events.ts` first-party event log (plan Part 7), consent-gated
- `src/app/[locale]/…` landing, sign-in, consent, my-tree, settings, privacy, impressum
- `src/app/auth/callback` magic-link exchange · `src/app/api/export` · `src/app/api/keepalive`
- `src/content/privacy.{de,en}.md` verbatim from `CONTENT-CONSENT-v0.3.md`
- `messages/{de,en}.json` UI copy

## Consent and events
Sign-up stores `consent_version`, `terms_ack` (required) and `research_consent`
(optional, unbundled). Events are written only while research consent is true;
withdrawal or deletion nulls `events.user_id` and leaves the peppered pseudonym.
Anonymous page views carry no identifier and an hour-truncated timestamp.
