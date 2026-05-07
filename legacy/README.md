# Executive Communication Guide

A single-page web app + installable PWA covering the formulas, sentence spines, opening lines, filler-killing techniques, closing patterns, and an 8-card practice drill for high-stakes executive conversations — interviews, EBC sessions, board briefings, media appearances.

By Cheewan · [cheewan.ai](http://cheewan.ai)

## Live

Open `index.html` directly in any browser, or visit the hosted version once deployed.

## Run locally

It's a static site — no build step.

```bash
# Quick test (any of these work)
open index.html

# Or serve over localhost (required for PWA install + service worker)
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Install as an app

The app is a Progressive Web App. Once served over HTTPS (or `localhost`):

- **Chrome/Edge desktop**: click the install icon in the address bar, or ⋮ → "Install Executive Communication Guide"
- **iOS Safari**: Share → Add to Home Screen
- **Android Chrome**: ⋮ → Install app

It then runs in its own window, works offline, and shows up in your Dock / home screen with a custom icon.

## Deploy

Drop the folder onto [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com) for an instant HTTPS URL. Or enable GitHub Pages on this repo (Settings → Pages → main branch).

## Files

```
index.html              Main app — all CSS and JS inline
manifest.webmanifest    PWA metadata
sw.js                   Service worker (offline cache)
icon-192.svg            Home-screen icon (small)
icon-512.svg            Home-screen icon (large)
icon-maskable.svg       Android adaptive icon
```

## Stack

Vanilla HTML, CSS, JavaScript. Zero dependencies. Google Fonts (Bebas Neue, Manrope, JetBrains Mono) loaded via `<link>`. Designed in a warm-editorial palette (parchment background, signal red accent), no gradients, no shadows.

## License

Personal project. All rights reserved.
