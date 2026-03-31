## Purpose

Concise, practical instructions for an AI coding agent working on this repository (a Next.js app using the App Router, TypeScript, Stripe, Supabase and MDX content). Focus on actionable patterns, key files, and developer workflows so an agent can be productive immediately.

## Quick facts

- Framework: Next.js (app/ directory, App Router) using TypeScript. Dev server: `npm run dev` (uses Turbopack).
- Build / run / lint: `npm run build`, `npm run start`, `npm run lint` (see `package.json`).
- Key integrations: Stripe (payments & webhook), Supabase (db + service role), Nodemailer (emails), Upstash (rate limiting / Redis).

## Important files & where to look

- `app/` — main app; pages and API routes live here (app router). Start here for routing, server/client component boundaries.
- `app/api/stripe/webhook/route.ts` — Stripe webhook: verifies signatures and creates entitlements; critical for payments workflow.
- `lib/supabaseAdmin.ts` — Supabase admin client (service role). Server-only operations use this.
- `lib/portalAccess.ts` — Maps Stripe price IDs (via env vars) to product codes and which guides they unlock. Update price-to-product mappings here.
- `lib/email.ts` — Sends magic-link emails via Nodemailer; used by the Stripe webhook flow.
- `content/` — Markdown / MDX content for guides and blog posts. New guides and blog posts belong here.
- `components/ui/` and `components/` — Reusable UI and presentational components. Follow existing naming structure when adding components.
- `next.config.ts` — Next image host whitelist (images.unsplash.com).

## Runtime and server-only notes

- Some routes explicitly set `export const runtime = "nodejs"` (see Stripe webhook). Treat these as server-only; they may use secrets and Node APIs (crypto, Stripe SDK).
- Use `lib/*` for server helpers (e.g., `lib/crypto.ts`, `lib/supabaseAdmin.ts`). Do not try to reference service-role keys from client code.

## Environment variables (discoverable in code)

- Payment & webhooks: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`.
- Supabase: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.
- Site & magic links: `NEXT_PUBLIC_SITE_URL`, `MAGICLINK_SECRET`.
- Email (Nodemailer): `EMAIL_USER`, `EMAIL_PASS`.
- Price IDs used by `lib/portalAccess.ts`: `NEXT_PUBLIC_PRICE_CLARITY`, `NEXT_PUBLIC_PRICE_GUIDANCE`, `NEXT_PUBLIC_PRICE_CONCIERGE`, `NEXT_PUBLIC_PRICE_RESIDENCE`, `NEXT_PUBLIC_PRICE_PARTITA`, `NEXT_PUBLIC_PRICE_SETTLE`, `NEXT_PUBLIC_PRICE_BUNDLE`.

Always treat the service role key and webhook secret as sensitive. They belong only in environment variables / GitHub secrets.

## Common dev workflows and commands

- Start dev server: `npm run dev` (Next with Turbopack). Port: 3000 by default.
- To test Stripe webhooks locally, forward events from the Stripe CLI to the webhook route, e.g.

  stripe listen --forward-to http://localhost:3000/api/stripe/webhook

  (Ensure `STRIPE_WEBHOOK_SECRET` is set from the Stripe CLI's signing secret for the event stream.)

- Build and preview: `npm run build` then `npm run start`.

## Project-specific conventions & patterns

- App router (app/): prefer server components by default. When a component uses browser-only APIs or state/hooks, it's a client component and should declare `"use client"` at top.
- Content-driven guides: put MDX/Markdown files under `content/`. The portal logic maps purchased products to guide themes in `lib/portalAccess.ts`.
- Price-to-product mapping: `lib/portalAccess.ts` reads price ID env vars into `PRICE_ID_TO_PRODUCT`. To add a new product or price, add the env var and the mapping in this file.
- Entitlements & magic links: Stripe webhook writes to `entitlements` and `magic_links` via `supabaseAdmin`. Magic links are hashed with `lib/crypto.ts` and emailed via `lib/email.ts`.

## Integration guidance (payments & access)

- When modifying the checkout/product flow, update `lib/portalAccess.ts` and validate the webhook in `app/api/stripe/webhook/route.ts` still recognizes the product.
- Webhook robustness: the webhook verifies Stripe signatures using `process.env.STRIPE_WEBHOOK_SECRET`. Do not bypass signature checks.
- After changing entitlement shapes or magic link behavior, run an end-to-end test: simulate a `checkout.session.completed` event (via Stripe CLI or unit test) and confirm `entitlements` and `magic_links` rows are created in Supabase.

## Helpful starting tasks for an AI code agent

1. To add a new guide: add MDX under `content/`, ensure it's referenced in `lib/guide.ts` if applicable, and update `PRODUCT_PORTAL_ACCESS` mapping if it's gated behind a product.
2. To add a new Stripe price: add the `NEXT_PUBLIC_PRICE_*` env var, then add it to `lib/portalAccess.ts`.
3. To debug an email/magic-link flow: check `app/api/stripe/webhook/route.ts` (webhook), `lib/crypto.ts` (token hashing), and `lib/email.ts` (sender). Confirm env vars `EMAIL_USER/EMAIL_PASS` are set.

## Where to look for more context

- `README.md` — local dev quickstart (root).
- `package.json` — npm scripts and deps.
- `app/` and `lib/` — primary app logic and helpers.

If anything in this guide is unclear or you'd like more detail (example env file, typical test data, or a walkthrough of a specific flow such as creating a new paid guide), tell me which area to expand and I'll update this document.
