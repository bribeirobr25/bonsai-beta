<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Bar-Bonsai project notes
- Product and canon: start at `docs/README.md`; the build plan is `docs/02-workstreams/W6-mvp-validation-strategy/sandbox/W6-SANDBOX-PLAN-v0.4.md`.
- Zero budget: only free tiers; no Anthropic API calls in the deployed app (v0.1).
- Consent copy is verbatim from `CONTENT-CONSENT-v0.3.md`; bump `CONSENT_VERSION` in `src/lib/env.ts` when it changes.
- Migrations: `pnpm db:generate` writes into `supabase/migrations`; apply with the Supabase CLI, never with drizzle-kit migrate.
