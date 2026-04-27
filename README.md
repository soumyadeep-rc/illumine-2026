# Illumine 2026

The biennial reunion site for the **Department of Information Technology, Jadavpur University** — silver jubilee, twenty-five years.

Sci-fi / HUD / cyberpunk theme. Black background, electric-indigo accent, sliced ILLUMINE wordmark, terminal-style HUD readouts, animated registration crosses and radar circles. Built to be the showcase, since the audience IS the alumni working at the companies you've heard of.

---

## Stack
## 🎨 Design Resources

- **Figma Design:** [Illumine 26 1st draft](https://www.figma.com/design/jici7gUAt3WRdFvBYtCTH0/illumine--26-1st-draft?t=4f9BBUg3ZSmyrxJa-0)
- **Note:** Please send a request for access to view the design if you don't have it already.

---

## 🌳 Branch Architecture

| Layer            | Choice                                                   |
| ---------------- | -------------------------------------------------------- |
| Framework        | Next.js 16 (App Router, Turbopack, React 19.2 canary)    |
| Language         | TypeScript (strict)                                      |
| Styling          | Tailwind CSS v4 (`@theme inline` design tokens)          |
| Animation        | `motion` (the rebrand of `framer-motion`, same API)      |
| Database         | PostgreSQL on Neon                                       |
| ORM              | Drizzle                                                  |
| Auth             | Auth.js v5 (`next-auth@beta`) — Google + GitHub + Resend |
| Email            | Resend (magic links)                                     |
| Analytics        | Vercel Analytics + Speed Insights                        |
| Tooling          | ESLint flat config · Prettier · lefthook pre-commit      |
| Package manager  | npm (the brief specifies pnpm — see _Notes_ below)       |

> **About `motion` vs `framer-motion`:** they're the same library. Framer renamed the package in 2024. The `framer-motion` package still works and re-exports `motion`. The brief said "Framer Motion"; we ship `motion` for the canonical install.

---

## Project structure

```
app/                            # Next.js App Router routes
  page.tsx                      # / — the hero (showcase)
  layout.tsx                    # Root: fonts, metadata, navbar, footer, analytics
  globals.css                   # Tailwind v4 + @theme tokens + custom utilities
  about/                        # /about
  alumni/                       # /alumni  (auth-gated)
  contact/                      # /contact (Server Action + Zod)
  events/                       # /events
  magazine/                     # /magazine
  login/  signup/               # Auth.js flows
  api/auth/[...nextauth]/       # Auth.js route handler
  opengraph-image.tsx           # Generated OG image (1200×630)
  sitemap.ts  robots.ts         # SEO files
  loading.tsx  error.tsx        # Global skeleton + error boundary
  not-found.tsx                 # 404
components/
  hero/                         # Hero composition (background, navbar, HUD, etc.)
  ui/                           # Reusable primitives (Logo, SciFiButton, ...)
  site/                         # Site chrome (Footer, PageHeader)
hooks/
  useDecryptedText.ts           # Cycles glyphs, locks left-to-right; ~60 LOC
lib/
  fonts.ts                      # next/font/google: Inter, JetBrains Mono, Orbitron
  cn.ts                         # Tiny className joiner (no clsx dep)
  countdown.ts                  # Pure countdown math (SSR-friendly)
  site-config.ts                # Site constants
  validation.ts                 # Zod schemas shared client/server
  auth.ts                       # NextAuth() config, exports {handlers, auth, signIn, signOut}
db/
  schema.ts                     # Drizzle schema (users, profiles, events, ...)
  client.ts                     # Neon HTTP driver + drizzle()
  queries/                      # Per-feature query helpers
proxy.ts                        # Next.js 16 PROXY (formerly middleware) — protects /alumni
drizzle.config.ts               # Migration config
```

---

## Architecture decisions

### Server Components by default
Every route renders as a Server Component unless interactivity (state, effects, browser APIs) is required. Client components are limited to:
- `Navbar` — needs `usePathname` for active-link styling
- `Countdown` — needs `setInterval`
- `HudPanel` — uses `useDecryptedText`
- `ContactForm` — uses `useActionState`
- `error.tsx` — required by Next.js

### Async Request APIs (Next.js 16)
`params`, `searchParams`, `cookies()`, and `headers()` are Promises in Next.js 16. Pages that use them are async and `await` them.

### Middleware → Proxy
Next.js 16 renames `middleware.ts` to `proxy.ts` (Node runtime). The Auth.js wrapper (`auth(req => ...)`) is wired in `proxy.ts` to gate `/alumni`.

### Countdown SSR + client tick
Initial countdown parts are computed server-side (in the Hero Server Component) and passed as props to a Client `Countdown`. The client uses them as `useState` initial value, then ticks via `setInterval`. Tabular nums prevent any layout shift during ticking.

### Decrypted text hook
~60 LOC, no external dependency. Holds animated frames in optional state and falls back to the `target` prop when null — this avoids the `setState`-in-effect cascade pattern. Honours `prefers-reduced-motion`.

### Tailwind v4 `@theme`
All design tokens live in `app/globals.css` under `@theme inline`. Custom utilities (`clip-slash`, `clip-hud`, `hud-grid`, `text-glow`) are declared with `@utility`. No `tailwind.config.ts` file — v4 doesn't need one.

### Drizzle + Neon HTTP
Uses `drizzle-orm/neon-http` so it runs in any environment (Edge or Node). The Auth.js `DrizzleAdapter` is wired with explicit table references.

---

## Setup

### Prerequisites
- Node.js **20.9+** (Next.js 16 requirement)
- A Postgres database — Neon free tier is fine

### Install
```bash
npm install
cp .env.example .env.local
# fill in DATABASE_URL, AUTH_SECRET, OAuth IDs, AUTH_RESEND_KEY
```

### Generate `AUTH_SECRET`
```bash
openssl rand -base64 32
```

### Push the schema (initial setup)
```bash
npm run db:push        # pushes schema to your DB without a migration file
# OR, when ready for versioned migrations:
npm run db:generate    # write SQL migration files into db/migrations
npm run db:migrate     # apply them
```

### Develop
```bash
npm run dev            # http://localhost:3000
```

---

## Environment variables

All variables documented in [`.env.example`](./.env.example). Required for build:

| Variable                  | Purpose                                          |
| ------------------------- | ------------------------------------------------ |
| `DATABASE_URL`            | Neon Postgres connection (use the pooled URL)    |
| `AUTH_SECRET`             | Auth.js JWT signing secret (`openssl rand -base64 32`) |
| `AUTH_GOOGLE_ID/SECRET`   | Google OAuth credentials                         |
| `AUTH_GITHUB_ID/SECRET`   | GitHub OAuth credentials                         |
| `AUTH_RESEND_KEY`         | Resend API key for magic-link email              |
| `AUTH_EMAIL_FROM`         | Verified Resend sender ("Name <noreply@...>")    |
| `NEXT_PUBLIC_EVENT_DATE`  | ISO 8601 — drives the hero countdown             |
| `NEXT_PUBLIC_SITE_URL`    | Production URL (no trailing slash)               |

---

## Scripts

| Script                   | What it does                                |
| ------------------------ | ------------------------------------------- |
| `npm run dev`            | Dev server (Turbopack, default in v16)      |
| `npm run build`          | Production build (Turbopack)                |
| `npm run start`          | Run the production build                    |
| `npm run lint`           | ESLint flat config                          |
| `npm run typecheck`      | `tsc --noEmit`                              |
| `npm run format`         | Prettier write                              |
| `npm run format:check`   | Prettier check                              |
| `npm run db:push`        | Push schema directly (dev-only)             |
| `npm run db:generate`    | Generate SQL migrations                     |
| `npm run db:migrate`     | Apply SQL migrations                        |
| `npm run db:studio`      | Drizzle Studio (data browser)               |
| `npm run prepare`        | `lefthook install` (auto on `npm install`)  |

Pre-commit hooks (via lefthook) run typecheck, ESLint, and Prettier on staged files.

---

## Deployment

### Vercel (recommended)
1. Push to GitHub, connect the repo to Vercel.
2. Add the env vars from `.env.example` in the project settings.
3. Set the production `NEXT_PUBLIC_SITE_URL`.
4. Add your custom domain.

Vercel Analytics + Speed Insights are wired in `app/layout.tsx` and turn on automatically on Vercel.

### Database (Neon)
1. Create a Postgres project on [neon.tech](https://neon.tech).
2. Copy the **pooled** connection string into `DATABASE_URL`.
3. Run `npm run db:push` once locally to provision the schema.

### OAuth callback URLs
For each provider, add `https://<your-domain>/api/auth/callback/<provider>`:
- Google: `…/api/auth/callback/google`
- GitHub: `…/api/auth/callback/github`

---

## Performance budget

Targets from the brief — verify after the first deploy:

| Metric              | Target  |
| ------------------- | ------- |
| Lighthouse Perf     | ≥ 95    |
| Lighthouse A11y     | ≥ 95    |
| Lighthouse SEO      | ≥ 95    |
| LCP                 | < 1.8s  |
| CLS                 | < 0.05  |
| INP                 | < 200ms |

How we hit them:
- Server Components by default — `'use client'` only on interactive leaves.
- Self-hosted fonts via `next/font/google` (zero CLS, no Google network call).
- No CSS-in-JS, no component library.
- Pure-CSS hero background (no image weight on LCP).
- Prefetched + statically-rendered `/`, `/about`, `/magazine`, `/contact`, `/events`.

---

## Future additions (architected for, not built)

- **FastAPI sidecar** for ML features (face-matching from old group photos, RAG chatbot). Will sit on its own subdomain; Next.js will call it via REST. The `lib/` directory is the right place to add a typed client when the time comes.
- **Magazine CMS** — currently placeholder cards. When real content lands, swap to MDX (`@next/mdx`) or a headless CMS.

---

## Design notes & flagged calls

These are judgment calls that you should review and adjust:

1. **Display font: Orbitron.** Closest free Google Font to the sliced look in the design. The exact font in the reference is custom; for production a licensed sci-fi face (or a hand-drawn SVG wordmark) would land closer.
2. **Wordmark slicing.** Done with two thin horizontal CSS overlays in `Wordmark.tsx`. Approximation, not pixel-perfect; consider an SVG outline if you want exact match.
3. **Hero background.** Pure CSS gradient + grid (no image). The reference has a darkened campus photo behind. Drop a campus photo into `public/hero-bg.avif` and layer it via `next/image` with `priority`.
4. **HUD readouts.** The exact text from the design is hard-coded in `components/hero/HudPanel.tsx`. They animate via `useDecryptedText`. Edit the `LEFT_LINES` / `RIGHT_LINES` arrays freely.
5. **Package manager.** The brief calls for **pnpm**; this machine doesn't have pnpm installed and the existing scaffold uses npm. To switch: `rm -rf node_modules package-lock.json && pnpm install`. The scripts will work unchanged.
6. **Countdown initial value.** Computed server-side via `Date.now()` in a Server Component. ESLint's `react-hooks/purity` flags `Date.now()` in render — this is suppressed at the call site with a comment, since reading the wall clock at request/build time is the intent (a client tick takes over on mount).
7. **Logo lockup.** The `ILLUMINE` logo (top-left and footer) is a CSS span with a CSS slash through the trailing E. Replace with `public/logo.svg` for a crisper, scalable lockup.

---

## Contributing & git workflow

This document also defines the branching strategy for contributors.

### Branch architecture
- **`main`** — production. Used strictly for deployment/hosting. 🔒 Direct commits and PRs are NOT allowed.
- **`QA`** — integration and testing. All development work must be merged here first.

### Workflow
1. Create your personal branch from `QA`.
2. Work on your feature/fix.
3. Push your branch to the repository.
4. Raise a PR → target: `QA`.
5. Get your code reviewed.
6. PR gets merged into `QA` after approval.
7. Selected members will later merge `QA` → `main` for deployment.

### Important rules
- ❌ No PRs to `main`.
- ✅ All PRs must target `QA`.
- ✅ Always pull latest `QA` before starting new work.
- ✅ Keep PRs small and focused.

### Roles & permissions
- **1st-year students** — create branches, write code, raise PRs to `QA`. Cannot merge.
- **2nd & 3rd-year students** — review PRs, approve changes, merge into `QA`.
- **Maintainers** — merge `QA` → `main`, handle deployments.

### Branch naming
Format: `<firstname><first letter of last name>_it_<ug or pg>_<graduation_year>`
Example: `debarunp_it_ug_2028`

### Branch creation
```bash
git checkout QA
git pull origin QA
git checkout -b <branch_name>
```

### PR guidelines
- Use a clear and meaningful title.
- Describe what you did, why, and any edge cases handled.
- Attach screenshots for UI changes.
- Keep PRs concise.

### Review checklist (for reviewers)
- Code correctness
- Readability & structure
- No unnecessary complexity
- Proper naming conventions
- No breaking changes

---

© 2026 Department of Information Technology, Jadavpur University.
