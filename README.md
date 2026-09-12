# Bonsai · Functional Beta

Implementation-led validation instrument for the bonsai venture. A living
subject's dated history, EU-hosted, four locales.

**Authority:** [`docs/01-canon/README.md`](docs/01-canon/README.md) — the
authority order and read order. **Build plan:**
[`docs/06-implementation/BONSAI_FINAL_PHASED_IMPLEMENTATION_PLAN.md`](docs/06-implementation/BONSAI_FINAL_PHASED_IMPLEMENTATION_PLAN.md).
**Agent/contributor rules:** [`AGENTS.md`](AGENTS.md).

W6 is `SUPERSEDED AS A STANDALONE WORKSTREAM` and its former sandbox plan is
**not** the build plan; it is retained as history under
`docs/99-archive/superseded/w6-sandbox-superseded-2026-09-12/`.

> **BUILD STATUS ≠ EVIDENCE STATUS.** Shipping a feature never upgrades a
> hypothesis. Journey value, retention, Community, Knowledge acquisition,
> sharing and economics are all `UNVALIDATED`.

## Stack
Next.js 16 (App Router, `proxy.ts`), TypeScript, Tailwind 4, next-intl 4,
Drizzle ORM + postgres.js, Supabase (Postgres, Auth magic links, private
Storage) in Frankfurt, Vercel Hobby `fra1`, Resend for the sign-in sender from
14 September.

Magic-link authentication is **ratified** for the Functional Beta. No AI calls
run inside the deployed app; AI may assist Knowledge drafting in the
internal/admin machinery only, and **never authorizes publication**.
Free-tier-only is **no longer a binding rule** — infrastructure stays
cost-conscious and reversible, and no budget ceiling is set.

## Local setup
```bash
pnpm install
pnpm supabase start            # Docker; prints URL, publishable and secret keys
cp .env.example .env.local     # paste the two keys
pnpm db:reset                  # applies supabase/migrations
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

## Layout
- `src/db/schema.ts` schema — migrating to v2 in Phase 1 (plan §13 `M1`, §15); RLS-first
- `src/lib/auth/dal.ts` verified session + consent gate
- `src/lib/events.ts` first-party event log (plan §22), consent-gated
- `src/app/[locale]/…` landing, sign-in, consent, my-tree, settings, privacy, impressum
- `src/app/auth/callback` magic-link exchange · `src/app/api/export` · `src/app/api/keepalive`
- `src/content/privacy.{de,en}.md` verbatim from `CONTENT-CONSENT-v0.3.md`, now at
  `docs/99-archive/superseded/w6-sandbox-superseded-2026-09-12/W6-mvp-validation-strategy/sandbox/`
  — the consent record **currently in force** (`CONSENT_VERSION = "0.3"`)
- `messages/{de,en}.json` UI copy — `es` and `pt-BR` arrive in Phase 2

## Contributing
Protected `main`, no direct pushes. Short-lived branches per coherent unit
within a phase, pull-request review, conventional commits. **Migrations are
their own commit** and the merge strategy must preserve individual commits —
**squash-merge is prohibited.** Binaries go through Git LFS; `docs/01-canon/**`
and `docs/99-archive/**` are `-text` because they are verified against sender
SHA-256 manifests and must stay byte-exact. See `AGENTS.md` for the full rules.

## Consent and events
Sign-up stores `consent_version`, `terms_ack` (required) and `research_consent`
(optional, unbundled). Events are written only while research consent is true;
withdrawal or deletion nulls `events.user_id` and leaves the peppered pseudonym.
Anonymous page views carry no identifier and an hour-truncated timestamp.

## Troubleshooting
- **Docker Desktop must be running** for the local Supabase stack; if it stops, `pnpm supabase start` again (data volumes persist).
- **After editing `supabase/config.toml`** run `pnpm supabase stop && pnpm supabase start`; `db reset` does not reload auth settings such as redirect URLs.
- **Browser inside Docker** (for example the Playwright MCP): run `pnpm dev -p 3100`, set `NEXT_PUBLIC_SITE_URL=http://host.docker.internal:3100`, and open `http://host.docker.internal:3100`; `allowedDevOrigins` and the Supabase redirect allow-list already include that host.
- **`.next/dev/types/root-params.d.ts` syntax error during `pnpm build`**: a rare race between the dev server's type generation and a concurrent `next typegen`; delete the file, the dev server rewrites it.
- **Unmatched URLs** render `src/app/global-not-found.tsx` (bilingual, outside the locale layout); `notFound()` inside a locale page renders `src/app/[locale]/not-found.tsx` client-side.
