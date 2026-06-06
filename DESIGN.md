# DESIGN.md — Geoffrey Muthoni Portfolio

Persistent design memory for this project. Read this **before** any UI work; update the "Last updated" log after meaningful changes.

## Aesthetic Direction

**Refined-minimal, single-accent, dark-first.** A senior developer's personal site — confident and calm, not flashy. The brand is one indigo accent warmed by a single amber highlight (used sparingly, e.g. the hero name gradient). Deliberately **not** the multi-gradient "AI portfolio" look.

- DESIGN_VARIANCE: 4 (intentionally restrained; centered hero is a deliberate choice)
- MOTION_INTENSITY: 5 (spring micro-interactions, scroll reveals; nothing cinematic)
- VISUAL_DENSITY: 4 (airy, generous section padding)

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- **Tailwind v4** (`@import "tailwindcss"`, `@tailwindcss/postcss`) — do NOT use v3 syntax
- shadcn/ui (Card, Button, Badge, Tabs, Carousel, Separator, Sheet, Skeleton)
- framer-motion for animation · lucide-react + react-icons (si/fa) for icons
- Fonts: **Raleway** (display/primary) + **Inter** (body cut), via `next/font`

## Color Tokens (source of truth: `app/globals.css`)

Semantic CSS variables, referenced in JSX as `[--color-x]`:

| Token | Light | Dark |
|-------|-------|------|
| `--color-primary` | `#6366f1` (indigo) | same |
| `--color-primary-light` | `#818cf8` | same |
| `--color-accent` | `#f59e0b` (amber) | same |
| `--color-success` | `#10b981` | same |
| `--color-bg` | `#ffffff` | `#0f172a` |
| `--color-bg-card` | `#f8fafc` | `#1e293b` |
| `--color-text` | `#0f172a` | `#f1f5f9` |
| `--color-text-light` | `#475569` | `#cbd5e1` |
| `--color-border` | `#e2e8f0` | `#334155` |

**Accent rule:** indigo is the workhorse; amber appears only in the hero name and select accents. No purple→pink/teal/cyan rainbows.

## ⚠️ Tailwind v4 Gotchas (learned the hard way)

1. **Gradient color-stops with `[--var]` are unreliable.** `bg-gradient-to-r from-[--color-primary] to-[--color-accent]` may emit no gradient in this v4 beta. Buttons/badges only look right because `globals.css` has a raw `button { background: linear-gradient(...) }` fallback.
   - For **text gradients** (background-clip:text), use an **inline `style` with explicit hex** — see the hero name in `components/Main.tsx`. Never rely on Tailwind gradient utilities for clipped text, or the text goes invisible.
   - For solid fills, `bg-[--color-primary]`, `text-[--color-primary]`, `border-[--color-border]` all work fine.
2. Prefer solid `hover:bg-[--color-primary]` over `hover:bg-gradient-*` for interactive hovers.

## Component Conventions

- **Section label pill** (used in About / Skills / Experience): restrained, single-accent — `border border-[--color-primary]/20 bg-[--color-primary]/5`, a `1.5×1.5` dot, and `text-xs font-semibold uppercase tracking-[0.2em] text-[--color-primary]`. Reuse this exact treatment; do not reintroduce animated rainbow pills.
- **Availability pill**: same shape but `--color-success` with a pinging dot.
- **Stats**: tabular numbers (`tabular-nums`), label in `uppercase tracking-[0.15em]` — no rainbow stat chips.
- **Icons**: SVG only (lucide / react-icons). **No emoji as icons** — ever.
- **Full-height sections**: `min-h-[100dvh]`, never `h-screen`.
- **Cards**: shadcn `Card` on `--color-bg-card` with `--color-border`; max nesting depth 1.

## Motion

- Scroll reveals via `lib/animations.ts` (`fadeInUp`, `slideInRight`, `staggerContainer`, `staggerItem`).
- Interactive motion uses spring (`type: "spring"`), not linear easing. No bounce/elastic.
- Animate only `transform`/`opacity`. `prefers-reduced-motion` handled in `globals.css`.

## Content / Identity

- Geoffrey Mwangi Muthoni — **Frontend Developer & IT Lead** @ Mwango Capital (Dec 2025–Present).
- Positioning: data-driven web apps (Next.js/TS/Supabase), NSE financial-dashboard automation, AI tooling (Claude, Cursor, n8n). Google AI certified, Anthropic Claude practitioner.
- Central config: `lib/site-config.ts` drives SEO, structured data, and metadata — edit identity there, not in components.
- Resume PDF: `public/Geoffrey_Mwangi_CV.pdf`.

## Last Updated

- **2026-06-06 (5)** — Removed the global `button {}` rule in globals.css (it forced a gradient bg + uppercase + shadow onto every `<button>`, which is why the command palette rows were all indigo/uppercase). Button styling now lives in `components/ui/button.tsx` (default variant = solid `bg-[--color-primary]`, keeps `uppercase tracking-wide`; outline/ghost theme-aware) and `Badge` default → solid. **Don't reintroduce global button styling.** Perf: migrated all `react-icons/fa` + `react-icons/ai` usages (Footer, resume, ProjectDetailTemplate) to `lucide-react` to drop two large icon barrels (~640 KiB in dev), and added `react-icons/si` to `optimizePackageImports`.
- **2026-06-06 (4)** — Fixed blog/project CTA "white card" bug (same v4 gradient-stop issue → inline-style gradient on `Card`). Confirmed root cause: **gradient color-stops written `[--color-*]` don't render in tailwindcss 4.1.14; solid `bg-[--color-*]` does.** Converted visible structural gradients to inline-style (About underline, Experience timeline line, footer/testimonials dividers). Added branded OG image via `app/opengraph-image.tsx` (next/og; remember Satori needs `backgroundColor` + `backgroundImage`, not the `background` shorthand) and removed hardcoded `about.jpg` social images. Added ⌘K command palette (`components/CommandPalette.tsx`, Radix Dialog, opens via shortcut or navbar Search button dispatching `open-command-palette` event). Enabled route view transitions (`experimental.viewTransition` + `unstable_ViewTransition` accessed via Fragment-fallback in layout since @types/react lags). Commented out blog from nav/footer/sitemap until real content exists. A11y: wired `htmlFor`/`id` + `aria-invalid` on all contact-form fields.
- **2026-06-06 (3)** — Removed `contain: layout style paint` from `html` in globals.css: containment was making `<html>` the containing block for `position:fixed`, which broke the sticky navbar and parked the scroll-to-top button at the document bottom. Navbar is now a true floating detached bar (`fixed inset-x-0 top-0` wrapper + `mx-auto max-w-6xl rounded-2xl` glass bar, h-16). **Never re-add `contain` to `html`.**
- **2026-06-06 (2)** — Scroll-to-top is now a global fixed/floating button (`components/ScrollToTop.tsx`, mounted in `layout.tsx`, appears after 400px scroll); removed the old in-flow "Top" button from Contact. Modernized navbar (floating glass link pill + single sliding `layoutId` active indicator). Added per-link SVG icons to footer Quick Links; footer brand name switched to bulletproof inline gradient.
- **2026-06-06** — Fixed invisible hero name (Tailwind v4 gradient-clip bug → inline hex gradient). Polished hero (sleeker square social links with spring hover, availability pill, `min-h-[100dvh]`). Unified section pills + stats to single-accent. Removed all emoji icons. Refreshed content to IT Lead / AI positioning from LinkedIn export + new CV. Created this doc.
