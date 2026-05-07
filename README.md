# Executive Communication Guide — Next.js Edition

Multi-screen Next.js app for executive communication training: formulas, sentence spines, opening lines, filler-killing techniques, closing patterns, and a daily 8-card practice drill. Built by Cheewan · [cheewan.ai](http://cheewan.ai)

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-based config via `@theme`)
- **Custom warm-editorial design system** (parchment background, signal-red accent, Bebas Neue + Manrope + JetBrains Mono)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Routes

| Path | Screen |
|---|---|
| `/` | Redirects to `/login` |
| `/login` | Sign in / sign up |
| `/welcome` | First-run onboarding |
| `/dashboard` | Daily progress overview |
| `/formula` | Core Formula (O-P-E-B) — fully ported |
| `/flow` | Sentence Flow (stub) |
| `/openings` | Opening Lines (stub) |
| `/fillers` | Kill the Fillers (stub) |
| `/close` | How to Close (stub) |
| `/drill` | Practice Drill (8 cards, timer) |

The 4 stub screens are scheduled to be ported with full content in follow-up commits.

## Auth

Phase 1 build uses `localStorage` as a stub. Real auth (NextAuth / Clerk / Supabase) lands in Phase 2.

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, PWA
│   ├── page.tsx            # / → redirect to /login
│   ├── globals.css         # Design tokens, base styles
│   ├── login/page.tsx      # Login screen
│   └── (app)/              # Route group for authenticated app
│       ├── layout.tsx      # Auth gate + Header + TabNav + footer
│       ├── welcome/page.tsx
│       ├── dashboard/page.tsx
│       ├── formula/page.tsx
│       ├── flow/page.tsx
│       ├── openings/page.tsx
│       ├── fillers/page.tsx
│       ├── close/page.tsx
│       └── drill/page.tsx
├── components/
│   ├── BrandMark.tsx
│   ├── Eyebrow.tsx
│   ├── Card.tsx
│   ├── CalloutBox.tsx      # good/bad/tip/info/template/formula variants
│   ├── FormulaBox.tsx
│   ├── OpebGrid.tsx        # 4-col O-P-E-B letter grid
│   ├── Pill.tsx
│   ├── StatCard.tsx
│   ├── StepNum.tsx
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Header.tsx
│   ├── TabNav.tsx
│   ├── HelpTooltip.tsx     # ? icon + popover
│   ├── AuthGate.tsx        # Client-side auth guard
│   └── StubScreen.tsx
└── lib/
    ├── auth.ts             # localStorage auth stub
    ├── cn.ts               # class-name joiner
    └── drillCards.ts       # 8 drill card data
```

## Deploy on Vercel

```bash
# One-time setup
npx vercel link

# Deploy
npx vercel --prod
```

Or import the repo at https://vercel.com/new — Next.js is auto-detected.

## Legacy

The previous single-file vanilla HTML PWA lives in [`legacy/`](./legacy/) for reference. It's still hosted at https://cheewan-ai.github.io/ExecCommunication/.

## License

Personal project. All rights reserved.
