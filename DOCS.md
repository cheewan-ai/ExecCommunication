# Executive Communication Guide — Full Technical Documentation

> Owner: Cheewan Law · cheewan.law@gmail.com  
> Last updated: May 2026  
> Live app: https://execcommunication-kappa.vercel.app

---

## Table of Contents

1. [System Overview](#1-system-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Design System](#4-design-system)
5. [Local Development Setup](#5-local-development-setup)
6. [The Three Tools and When to Use Each](#6-the-three-tools-and-when-to-use-each)
7. [Content Update Workflows](#7-content-update-workflows)
8. [Deployment Pipeline](#8-deployment-pipeline)
9. [Authentication — Phase 1 Stub](#9-authentication--phase-1-stub)
10. [Backup Strategy](#10-backup-strategy)
11. [Security Checklist](#11-security-checklist)
12. [Custom Domain Setup](#12-custom-domain-setup)
13. [Phase 2 Roadmap](#13-phase-2-roadmap)
14. [Quick Reference](#14-quick-reference)
15. [Troubleshooting Common Issues](#15-troubleshooting-common-issues)

---

## 1. System Overview

This app is built on three connected platforms that work as a pipeline:

```
┌─────────────────────────────────────────────────────────────┐
│                      YOUR TOOLS                             │
│                                                             │
│   V0 (Visual Editor)   Claude Code   Direct File Edit       │
│          │                  │               │               │
│          └──────────────────┴───────────────┘               │
│                             │                               │
│                      Git Commit + Push                      │
└─────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                    GITHUB REPOSITORY                        │
│   cheewan-ai/ExecCommunication · branch: main               │
│   https://github.com/cheewan-ai/ExecCommunication           │
└─────────────────────────────────────────────────────────────┘
                             │
                    Automatic trigger
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                    VERCEL (Hosting)                         │
│   Project: execcommunication                                │
│   Live URL: https://execcommunication-kappa.vercel.app      │
│   Auto-deploys on every push to: main                       │
└─────────────────────────────────────────────────────────────┘
```

**Key rule:** GitHub is the single source of truth. All changes — whether made in V0, Claude Code, or manually — flow through GitHub before reaching production.

---

## 2. Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Framework | Next.js | 16.2.5 | App Router, static generation, routing |
| UI Library | React | 19.2.4 | Component model |
| Language | TypeScript | 5.x | Type safety |
| Styling | Tailwind CSS | v4 | Utility classes, CSS-based config |
| Fonts | Google Fonts (via next/font) | — | Bebas Neue, Manrope, JetBrains Mono |
| Auth | localStorage stub | Phase 1 | No real auth yet — any email works |
| Hosting | Vercel | — | Auto-deploy from GitHub |
| Visual Editor | V0 (v0.dev) | — | AI-assisted visual editing |
| Source Control | GitHub | — | Version history, backup, CI trigger |
| Local IDE | Claude Code | — | Logic, content, functionality |

---

## 3. Project Structure

```
ExecCommunication/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout — fonts, metadata, PWA tags
│   │   ├── page.tsx                # / → redirects to /login
│   │   ├── globals.css             # All design tokens + Tailwind theme bridge
│   │   ├── login/
│   │   │   └── page.tsx            # Sign in / sign up screen
│   │   └── (app)/                  # Route group — all authenticated screens
│   │       ├── layout.tsx          # Auth gate + Header + TabNav + footer
│   │       ├── welcome/page.tsx    # First-run onboarding (4 steps)
│   │       ├── dashboard/page.tsx  # Daily progress (Phase 2 placeholder)
│   │       ├── formula/page.tsx    # Core Formula — O-P-E-B
│   │       ├── flow/page.tsx       # Sentence Flow — 4 spines
│   │       ├── openings/page.tsx   # Opening Lines — 4 opener types
│   │       ├── fillers/page.tsx    # Kill the Fillers — technique + examples
│   │       ├── close/page.tsx      # How to Close — 2 close types
│   │       └── drill/page.tsx      # Practice Drill — 8 cards + timer
│   ├── components/
│   │   ├── AuthGate.tsx            # Redirects to /login if not signed in
│   │   ├── BrandMark.tsx           # "EC" logo mark
│   │   ├── Button.tsx              # Primary / outline button
│   │   ├── CalloutBox.tsx          # 6 variants: good/bad/tip/info/template/formula
│   │   ├── Card.tsx                # White card container with optional label
│   │   ├── Eyebrow.tsx             # Small uppercase label above page title
│   │   ├── FormulaBox.tsx          # Purple left-border formula display
│   │   ├── Header.tsx              # Top bar with logo and sign-out
│   │   ├── HelpTooltip.tsx         # ? icon + popover (used on Core Formula)
│   │   ├── Input.tsx               # Styled text input
│   │   ├── OpebGrid.tsx            # 4-column O-P-E-B letter grid
│   │   ├── Pill.tsx                # Tag pill — normal and hedge (pink) variant
│   │   ├── StatCard.tsx            # Big-number stat card (40+, 8×, <3)
│   │   ├── StepNum.tsx             # Red numbered circle for step lists
│   │   ├── StubScreen.tsx          # Placeholder for unfinished screens
│   │   └── TabNav.tsx              # Bottom navigation bar (8 tabs)
│   └── lib/
│       ├── auth.ts                 # signIn / signOut / getCurrentUser (localStorage)
│       ├── cn.ts                   # Tailwind class merger utility
│       └── drillCards.ts           # 8 drill card objects (question/spine/tip/template)
├── legacy/
│   └── index.html                  # Original single-file HTML PWA (archived, not deployed)
├── public/
│   └── (static assets)
├── package.json                    # Dependencies and npm scripts
├── next.config.ts                  # Next.js config
├── tsconfig.json                   # TypeScript config
├── vercel.json                     # Vercel framework config (do not delete — see §8)
├── .vercel/project.json            # Vercel project ID (do not delete)
└── README.md                       # Short developer readme
```

---

## 4. Design System

All design tokens live in one file: **`src/app/globals.css`**

### Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#f5f2eb` | Parchment — page background |
| `--card` | `#fffcf7` | Warm white — card surfaces |
| `--border` | `#d9d0c4` | Warm border — dividers, outlines |
| `--ink` | `#1a1410` | Deep ink — headlines |
| `--ink2` | `#3d3530` | Ink light — body text |
| `--muted` | `#8a7f74` | Muted — captions, labels |
| `--c1` | `#e8430a` | **Signal Red** — primary CTA, highlight |
| `--c2` | `#2563eb` | Clarity Blue — links |
| `--c3` | `#16a34a` | Trust Green — success / "Stronger" |
| `--c4` | `#9333ea` | Deep Purple — formula boxes |
| `--c5` | `#d97706` | Amber — warnings, tips |
| `--c6` | `#0891b2` | Ocean Cyan — templates, data |
| `--c7` | `#be185d` | Rose — hedge-word pills |

### Typography

| Role | Font | Where set |
|---|---|---|
| Display / Headers | Bebas Neue | `font-display` class |
| Body | Manrope | `font-body` class |
| Code / Labels | JetBrains Mono | `font-mono` class |

Fonts are loaded via `next/font/google` in `src/app/layout.tsx`.

### To change a color globally

Edit the token in `globals.css`:
```css
--c1: #e8430a;   /* change this hex to update Signal Red everywhere */
```

---

## 5. Local Development Setup

### Prerequisites

- Node.js 18+ (check: `node --version`)
- npm (included with Node)
- Git

### First-time setup

```bash
# Clone the repository
git clone https://github.com/cheewan-ai/ExecCommunication.git
cd ExecCommunication

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open **http://localhost:3000** — it hot-reloads on every file save.

### Useful commands

```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Build for production (run this to check for errors)
npm run lint       # Check for code quality issues
npx vercel --prod  # Manual deploy to production (use sparingly — prefer git push)
```

### Vercel CLI (manual deploy only)

The Vercel CLI is linked to the project via `.vercel/project.json`. If you ever need to redeploy manually (e.g., after a branch fix):

```bash
npx vercel --prod
```

> **Note:** This deploys whatever is in your **local** working directory, not what's on GitHub. Always ensure your changes are committed first.

---

## 6. The Three Tools and When to Use Each

### Tool 1: V0 (v0.dev) — Visual Editing

**Best for:**
- Moving elements around on screen
- Restyling — colors, spacing, typography
- Adding new visual components
- Redesigning a section's layout
- Quick UI experiments

**How it works:**  
V0 reads from GitHub, lets you describe or click-edit changes, then commits directly back to your `main` branch. Vercel picks up that commit and deploys automatically.

**Limitation:** V0 works best on visual/layout changes. For data changes (e.g., editing drill card content), it's easier to edit the TypeScript files directly.

---

### Tool 2: Claude Code — Logic & Content

**Best for:**
- Editing text content (drill card questions, tips, templates)
- Adding new screens or functionality
- Changing app behavior (timer duration, number of cards, etc.)
- Fixing bugs
- Adding Phase 2 features (real auth, database, etc.)

**How it works:**  
Claude Code edits files directly in `~/Projects/ExecCommunication/`. You then commit and push to GitHub, which triggers Vercel.

```bash
# After Claude Code makes changes:
git add <files>
git commit -m "describe the change"
git push origin main
# Vercel auto-deploys within 30 seconds
```

---

### Tool 3: GitHub Web Editor — Minor Text Fixes

**Best for:**
- Single-line text corrections
- Fixing a typo in content
- Quick edits when not at your computer

**How it works:**  
Go to `github.com/cheewan-ai/ExecCommunication` → navigate to a file → click the pencil icon → edit → commit directly to `main`. Vercel auto-deploys.

---

### Decision Guide

| Change type | Use |
|---|---|
| Move a button, change a colour | V0 |
| Edit interview question wording | GitHub web or Claude Code |
| Add a new drill card | Claude Code (edit `src/lib/drillCards.ts`) |
| Add a completely new screen | Claude Code |
| Fix a typo | GitHub web editor |
| Add real login (Phase 2) | Claude Code |

---

## 7. Content Update Workflows

### A — Update drill card content

File: `src/lib/drillCards.ts`

Each card is an object with four fields:
```typescript
{
  question: "Tell me about yourself.",
  spine: "Number → 3 metric-led points → Bridge close",
  tip: "Lead with your most recent, most relevant metric...",
  template: "[Number] things define my background.\nFirst, ...",
}
```

Edit the relevant string, save, commit, push.

---

### B — Update page content (text, examples, callout boxes)

Each screen is its own file in `src/app/(app)/`:

| Screen | File |
|---|---|
| Core Formula | `src/app/(app)/formula/page.tsx` |
| Sentence Flow | `src/app/(app)/flow/page.tsx` |
| Opening Lines | `src/app/(app)/openings/page.tsx` |
| Kill the Fillers | `src/app/(app)/fillers/page.tsx` |
| How to Close | `src/app/(app)/close/page.tsx` |
| Practice Drill | `src/app/(app)/drill/page.tsx` |

---

### C — Add a new drill card

1. Open `src/lib/drillCards.ts`
2. Add a new object at the end of the `drillCards` array following the same shape
3. The drill UI reads the array length automatically — no other changes needed

---

### D — Change tab names or order

File: `src/components/TabNav.tsx`

Each tab entry has a `label`, `href`, and `icon`. Edit, save, commit, push.

---

### E — Update the Welcome / Onboarding steps

File: `src/app/(app)/welcome/page.tsx`

The 4 onboarding steps are defined as an array near the top of the file.

---

## 8. Deployment Pipeline

### Normal flow (recommended)

```
Edit file locally or via V0
         ↓
git add + git commit + git push origin main
         ↓
Vercel webhook fires (automatic, ~5 seconds)
         ↓
Vercel builds the Next.js app (~20–30 seconds)
         ↓
Production URL updates
```

### Check deployment status

1. Go to https://vercel.com/cheewan-ais-projects/execcommunication
2. Click **Deployments** tab
3. Latest entry shows: Building → Ready (green) or Error (red)

### If a deployment fails

1. Click the failed deployment in Vercel
2. Read the **Build Logs** — errors will show with red text
3. Fix the error locally, run `npm run build` to verify it passes, then push again

### Vercel project details

| Setting | Value |
|---|---|
| Project name | execcommunication |
| Organization | cheewan-ais-projects |
| Project ID | prj_jpGtD7oV4oJEJQsmu6xuMPd9Yo3i |
| Production branch | main |
| Framework | Next.js (forced via `vercel.json`) |
| Build command | `next build` (set in `vercel.json`) |
| Output directory | `.next` (set in `vercel.json`) |

### Why `vercel.json` is committed

The project had stale "Static / Other" framework settings carried over from the original vanilla HTML deployment. The Vercel UI couldn't fully clear them — toggling overrides off saved an empty string instead of `null`, which Vercel still interpreted as "use root directory" and skipped the Next.js build.

The `vercel.json` file at the project root forces the correct settings on every deploy regardless of what the Vercel UI thinks:

```json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

**Do not delete this file.** It is the source of truth for build configuration. If you need to change build behavior, edit this file rather than the Vercel UI settings.

---

## 9. Authentication — Phase 1 Stub

**Current state:** Authentication is a stub — it does not connect to any server or database.

### How it works today

1. User enters any email on the login screen
2. The app stores `{ email, signedInAt }` in `localStorage` under the key `ec-auth-user`
3. `AuthGate.tsx` checks for this key on every protected page — if missing, redirects to `/login`
4. Sign-out clears the localStorage key

### What this means

- **Any email works** — no password validation
- **Clearing browser data logs you out** — nothing is persisted server-side
- **No personal data is stored anywhere** — it's purely browser-local
- **Not suitable for multi-device use** — signing in on phone doesn't affect desktop

### File locations

| File | Purpose |
|---|---|
| `src/lib/auth.ts` | `signIn()`, `signOut()`, `getCurrentUser()` |
| `src/components/AuthGate.tsx` | Protects all `(app)/` routes |
| `src/app/login/page.tsx` | Login UI + calls `signIn()` |

### Phase 2: Real Auth

When ready, replace `src/lib/auth.ts` with Clerk or Supabase Auth. The rest of the app doesn't need to change — only `AuthGate.tsx` and `auth.ts` need updating.

---

## 10. Backup Strategy

### Layer 1: GitHub (primary backup)

Every commit is stored permanently on GitHub with full history. To see all past versions:

```bash
git log --oneline        # list all commits
git show <commit-hash>   # view a specific commit
git checkout <hash> -- src/lib/drillCards.ts  # restore a single file
```

To restore the entire app to a previous state:
```bash
git log --oneline
# copy the hash of the version you want
git revert <hash>        # safe — creates a new commit that undoes the change
```

**Do not use `git reset --hard`** unless you know what you're doing — it permanently deletes history.

---

### Layer 2: Vercel Deployment History

Every deployment is stored in Vercel and can be re-promoted to production:

1. Go to https://vercel.com/cheewan-ais-projects/execcommunication/deployments
2. Find the deployment you want to restore
3. Click the three-dot menu → **Promote to Production**

This instantly re-serves any previous build without touching GitHub.

---

### Layer 3: Legacy Archive

The original single-file HTML app is permanently archived in `legacy/index.html`. It still works as a standalone file — open it directly in any browser. It's also hosted at https://cheewan-ai.github.io/ExecCommunication/ via GitHub Pages.

---

### Backup checklist

| What | Where | How to restore |
|---|---|---|
| All app code | GitHub → `main` branch | `git checkout` or GitHub web |
| Previous deployments | Vercel Deployments tab | Promote to Production |
| Original HTML app | `legacy/index.html` + GitHub Pages | Open file or visit GitHub Pages URL |
| V0 design changes | GitHub (V0 commits to `main`) | Same as above |

---

## 11. Security Checklist

### Current state (Phase 1)

The app has **no sensitive data** and **no real authentication**, so the attack surface is minimal. Key facts:

- No passwords stored anywhere
- No database
- No API keys
- No payment data
- No user data transmitted off-device

### Things to keep secure

**GitHub account**
- Enable 2FA on your GitHub account: https://github.com/settings/security
- Never commit `.env` files (there are none currently, but keep this habit)
- Review who has write access: Settings → Collaborators

**Vercel account**
- Enable 2FA on Vercel: https://vercel.com/account/security
- Do not share your Vercel API tokens
- The `.vercel/project.json` file contains your project ID — this is safe to commit, it's not a secret

**V0 account**
- Secure with 2FA (uses the same Vercel account)
- V0 has write access to your GitHub repo — review V0's GitHub App permissions: https://github.com/settings/installations

**Local machine**
- Your Vercel credentials are stored locally in `~/.vercel/` — don't share your machine's home folder
- The `node_modules/` folder is in `.gitignore` — it's never committed (correct)

---

### Phase 2 Security (when real auth is added)

When you add Clerk or Supabase:

- Store API keys in Vercel Environment Variables (never in the codebase)
- In Vercel: Project → Settings → Environment Variables
- Access keys in code via `process.env.NEXT_PUBLIC_...` (public) or `process.env.SECRET_KEY` (server-only)
- Never commit a `.env.local` file — add it to `.gitignore` immediately

---

### What to do if something goes wrong

| Problem | Action |
|---|---|
| Bad code deployed | Promote previous Vercel deployment (see Backup Layer 2) |
| Accidental commit of secrets | Rotate the secret immediately. Contact GitHub support to purge history. |
| V0 made unwanted changes | `git revert` the V0 commit, push. Vercel re-deploys. |
| Locked out of Vercel | Use GitHub to recover — Vercel uses GitHub SSO |
| Lost local files | Clone fresh from GitHub: `git clone https://github.com/cheewan-ai/ExecCommunication.git` |

---

## 12. Custom Domain Setup

To use `exec.cheewan.ai` or `app.cheewan.ai` as the domain:

### Step 1: Add domain in Vercel

1. Go to Vercel → Project → **Settings → Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `exec.cheewan.ai`)
4. Vercel shows you a DNS record to add

### Step 2: Add DNS record at your domain registrar

Vercel will give you one of these:
- A CNAME record pointing to `cname.vercel-dns.com`
- Or an A record pointing to Vercel's IP

Add this at wherever you manage `cheewan.ai` DNS (GoDaddy / Cloudflare / Google Domains / etc.).

### Step 3: Wait for propagation

DNS changes take 5–30 minutes. Vercel shows a green tick when verified.

### Step 4: SSL is automatic

Vercel provisions a free SSL certificate via Let's Encrypt. No configuration needed.

---

## 13. Phase 2 Roadmap

Features not yet built, in suggested priority order:

| Feature | Effort | Notes |
|---|---|---|
| Real authentication | Medium | Replace `auth.ts` stub with Clerk (easiest) or Supabase Auth |
| Desktop sidebar nav | Small | Persistent sidebar on wide screens instead of bottom tabs |
| Drill progress persistence | Medium | Save completed cards + streaks to database |
| Dashboard live stats | Medium | Requires Phase 2 database to have real data |
| Answer recording + playback | Large | Record mic, play back, count fillers manually or via AI |
| AI filler counter | Large | Send audio to Whisper API, count um/you know automatically |
| User settings screen | Small | Change name, email, notification preferences |

---

## 14. Quick Reference

### URLs

| What | URL |
|---|---|
| **Live app (recommended)** | **https://execcommunication-cheewan-ais-projects.vercel.app** |
| Live app (alias, less reliable) | https://execcommunication-kappa.vercel.app |
| GitHub repo | https://github.com/cheewan-ai/ExecCommunication |
| Vercel dashboard | https://vercel.com/cheewan-ais-projects/execcommunication |
| Vercel build settings | https://vercel.com/cheewan-ais-projects/execcommunication/settings/build-and-deployment |
| Vercel deployment protection | https://vercel.com/cheewan-ais-projects/execcommunication/settings/deployment-protection |
| V0 editor | https://v0.dev |
| Legacy HTML app | https://cheewan-ai.github.io/ExecCommunication/ |

> **Use the canonical team URL** (`execcommunication-cheewan-ais-projects.vercel.app`) — it always tracks the latest production deployment automatically. The `-kappa` alias is older and can fall behind when V0 or GitHub triggers new deployments.

### Key files for common changes

| What to change | File |
|---|---|
| Drill questions / tips / templates | `src/lib/drillCards.ts` |
| Any page content | `src/app/(app)/<screen>/page.tsx` |
| Colors / fonts | `src/app/globals.css` |
| Tab labels / order | `src/components/TabNav.tsx` |
| Header content | `src/components/Header.tsx` |
| Login page | `src/app/login/page.tsx` |
| Auth logic | `src/lib/auth.ts` |

### Git commands you'll actually use

```bash
git status                    # see what's changed
git pull origin main          # get latest from GitHub (do this before editing locally)
git add src/path/to/file.tsx  # stage a specific file
git add -p                    # stage changes interactively (safe)
git commit -m "what changed"  # commit with a message
git push origin main          # push to GitHub → triggers Vercel deploy
git log --oneline -10         # see last 10 commits
git diff                      # see uncommitted changes
```

### Emergency rollback (30 seconds)

1. Go to https://vercel.com/cheewan-ais-projects/execcommunication/deployments
2. Find the last known-good deployment
3. Click `···` → **Promote to Production**
4. Done — live site reverts instantly

---

## 15. Troubleshooting Common Issues

### Site returns 404 NOT_FOUND on all paths

**Symptom:** Every URL returns Vercel's 404 error page, including `/login`. Build logs show the build completed in milliseconds (e.g., `Build Completed in /vercel/output [55ms]`).

**Cause:** Vercel is treating the project as a static site and skipping `next build`. This usually happens when stale "Output Directory: ." settings carry over from a previous static deployment.

**Fix:** Verify `vercel.json` exists at the project root with the correct framework config (see section 8). If missing, recreate it. If present but ignored, push any commit to trigger a fresh deploy.

```bash
cat vercel.json   # should show framework: nextjs
git commit --allow-empty -m "Trigger redeploy"
git push origin main
```

---

### Site returns 401 Unauthorized

**Symptom:** Browser shows a Vercel login screen instead of the app.

**Cause:** **Vercel Authentication / Standard Protection** is enabled in project settings.

**Fix:** Go to **Settings → Deployment Protection → Vercel Authentication → Disabled → Save**. Wait 30 seconds and retry.

---

### Safari shows 404 but Chrome works fine

**Cause:** Safari aggressively caches 404 responses.

**Fix:**
- Hard refresh: `⌘ + Option + R`
- Or: Develop menu → Empty Caches
- Or: Open in Private window (`⌘ + Shift + N`)

---

### `git push` rejected with "non-fast-forward" error

**Cause:** Remote has commits you don't have locally — usually because V0 pushed changes since you last pulled.

**Fix:**
```bash
git pull --rebase origin main   # pull V0's changes and replay yours on top
git push origin main             # try again
```

If `git pull` shows merge conflicts, the V0 changes overlap with your local changes. Resolve conflicts in the affected files, then:
```bash
git add <resolved-file>
git rebase --continue
git push origin main
```

---

### Vercel deploys an old version even after pushing to GitHub

**Cause:** Production Branch in Vercel is set to a different branch than what you pushed.

**Fix:** Verify in **Settings → Git → Production Branch** is set to `main`.

---

### `npm run build` fails locally with "Module not found"

**Cause:** Dependencies are out of date after pulling new code.

**Fix:**
```bash
npm install
npm run build
```

---

### V0 changes don't appear on the live site

**Diagnostic checklist:**
1. Is the V0 commit actually on GitHub? Check https://github.com/cheewan-ai/ExecCommunication/commits/main
2. Did Vercel detect the push? Check https://vercel.com/cheewan-ais-projects/execcommunication/deployments — there should be a new deployment within ~5 seconds of the push
3. Did the deployment build successfully? Click into it and check Build Logs
4. Is the right URL being checked? Use the canonical team URL, not `-kappa`

---

*Document maintained by Cheewan Law. Update this file whenever the architecture or workflow changes.*
