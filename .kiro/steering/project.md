# Chain the Sun — Project Steering

## What this is

Static single-page band website for **Chain the Sun** (rock/metal, Croatia).
Hosted on **GitHub Pages** at **chainthesun.com**. Pure HTML/CSS/JS — no build tools, no npm, no frameworks.

**Implementation is complete and ready to deploy.**

---

## File structure

```
/
├── index.html
├── CNAME                        ← contains exactly: chainthesun.com
├── css/style.css
├── js/main.js
├── assets/images/
│   ├── logo.svg                 (SVG, cream fill #f4eed7, viewBox 0 0 640 155.52)
│   ├── hero-bg.jpg              (1920×891px, 247 KB)
│   ├── band-photo.jpg           (1280×720px, 350 KB)
│   ├── woag.jpg                 (600×600px, 23 KB)
│   ├── beforetherain.jpg        (600×600px, 69 KB)
│   ├── tomorrowcalls.jpg        (600×600px, 47 KB)
│   └── farewell.jpg             (600×600px, 73 KB)
└── .kiro/specs/cts-website/
    ├── requirements.md
    └── design.md
```

All local asset paths are relative. No absolute URLs for local assets.

---

## Page structure

Five sections: **Hero → About → Releases → Social → Contact**

Nav: fixed top bar, SVG logo brand, five anchor links, hamburger on mobile (≤768px). Mobile menu toggled via `open` class on `#navLinks`, `aria-expanded` on `#navToggle`.

---

## Colour palette

```css
--bg-primary: #0a0a0a  --bg-secondary: #111111  --bg-elevated: #1a1a1a
--text-primary: #e8e8e8  --text-secondary: #a0a0a0
--accent-red: #c0392b  --accent-silver: #b8b8b8
```

## Typography

Rajdhani 400/600/700 from Google Fonts. Fallback: `'Arial Narrow', Arial, sans-serif`.

---

## Key implementation details

- **Hero background:** `.hero__bg` div with `background-image: url('assets/images/hero-bg.jpg')` at `opacity: 0.35` + `.hero__overlay` gradient. Logo is `<img src="assets/images/logo.svg">`, not text.
- **Particle canvas:** `#hero-canvas`, 90 warm-white dots, `requestAnimationFrame`, pauses on tab hide, wrapped in try/catch.
- **Releases grid:** `repeat(4,1fr)` → `repeat(2,1fr)` at ≤900px → `1fr` at ≤768px.
- **Single links:** all `target="_blank" rel="noopener noreferrer"` → ffm.to/woag, ffm.to/beforetherain, ffm.to/tomorrowcalls, ffm.to/farewell.
- **Social links:** inline SVG icons, YouTube/Facebook/Instagram, all open in new tab.
- **Contact:** `mailto:contact@chainthesun.com` only — no form, no backend.
- **CSP:** meta tag restricting to self + fonts.googleapis.com/gstatic.com only.

---

## Band info

| | |
|---|---|
| Email | contact@chainthesun.com |
| YouTube | youtube.com/channel/UChY7wa596Chd940Ke-uisXA |
| Facebook | facebook.com/chainthesun |
| Instagram | instagram.com/chain.the.sun/ |
| Members | Ivan Lujo (Drums), Nikola Miskovic (Lead Vocals), Hrvoje Ryznar (Bass & Vocals), Dominik Zoric (Guitar) |

---

## Deployment

1. Push repo to GitHub
2. Settings → Pages → Source: branch `main`, folder `/`
3. Custom domain: enter `chainthesun.com` — GitHub reads the `CNAME` file automatically
4. DNS at Dynadot: add `A` records for apex (`@`) pointing to GitHub Pages IPs: `185.199.108–111.153`; add `CNAME` for `www` → `<username>.github.io`
5. Enable "Enforce HTTPS" once DNS propagates (~10–30 min)

## Local testing

```bash
python3 -m http.server 8080
# open http://localhost:8080
```
Do not open `index.html` directly — Google Fonts won't load without a server.
