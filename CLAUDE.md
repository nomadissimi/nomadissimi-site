## SEO and GEO notes

- This site uses Next.js App Router.
- Global metadata lives in `app/layout.tsx`.
- Sitemap lives in `app/sitemap.ts`.
- Robots rules live in `app/robots.ts`.
- Structured data is added with JSON-LD via React components.
- Public SEO pages should be improved carefully and reviewed before shipping.
- Do not commit directly to main without review.
- Prefer small, focused SEO changes over large sweeping rewrites.
- Keep Nomadissimi’s tone elegant, warm, strategic, and human (like Gen Z)


## SEO & GEO conventions

**Branch workflow:** Never commit SEO or metadata changes directly to main.
Always create a feature branch (e.g. `seo/visa-page-metadata`), propose
diffs, and open a PR for review.

**Metadata:** Uses Next.js App Router conventions. Metadata defined via
`export const metadata` in `page.tsx` or via `generateMetadata()`.
`app/layout.tsx` holds the organization-level defaults.

**Schema:** JSON-LD only. Injected via `<script type="application/ld+json">`
in the page component or a dedicated `SchemaMarkup` component. No
microdata, no RDFa.

**SEO action plans:** When a .md action plan is passed in (e.g.
`docs/seo/seo-action-plan-visa.md`), implement changes exactly as specified.
Do not invent changes not in the plan. Flag anything ambiguous before
proceeding.

**Audit-only mode:** If asked to audit a page, produce a report. Do not
modify files unless explicitly asked.

**Files in scope for SEO work:**
- `app/[route]/page.tsx` — metadata, headings, schema
- `app/layout.tsx` — global metadata defaults
- `app/sitemap.ts` — sitemap entries
- `app/robots.ts` — crawl rules
- `content/` or `app/blog/` — blog MDX files