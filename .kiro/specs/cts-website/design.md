# Design — Chain the Sun Website

## File structure

```
/ (repo root)
├── index.html
├── CNAME                   ← contains exactly: chainthesun.com
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
        ├── logo.svg            (4 KB — SVG, cream fill #f4eed7, viewBox 0 0 640 155.52)
        ├── hero-bg.jpg         (247 KB — 1920×891px JPEG)
        ├── band-photo.jpg      (350 KB — 1280×720px JPEG)
        ├── woag.jpg            (23 KB — 600×600px JPEG)
        ├── beforetherain.jpg   (69 KB — 600×600px JPEG)
        ├── tomorrowcalls.jpg   (47 KB — 600×600px JPEG)
        └── farewell.jpg        (73 KB — 600×600px JPEG)
```

All asset paths in HTML/CSS are relative. No absolute URLs for local assets.

---

## Colour palette

```css
--bg-primary:    #0a0a0a;
--bg-secondary:  #111111;
--bg-elevated:   #1a1a1a;
--text-primary:  #e8e8e8;   /* ~18:1 contrast on #0a0a0a — WCAG AAA */
--text-secondary:#a0a0a0;   /* ~7:1 contrast on #0a0a0a  — WCAG AA */
--accent-red:    #c0392b;
--accent-silver: #b8b8b8;
```

---

## Typography

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet">
```

- Family: **Rajdhani** — weights 400 (body), 600 (eyebrow/labels), 700 (headings/nav)
- Fallback: `'Arial Narrow', Arial, sans-serif`
- `font-display: swap` prevents flash of invisible text

---

## Head tags

```html
<meta name="description" content="Chain the Sun — Rock & Metal band from Croatia. Stream our singles now.">
<meta property="og:title" content="Chain the Sun">
<meta property="og:description" content="Rock & Metal band from Croatia. Stream our singles now.">
<meta property="og:image" content="https://www.chainthesun.com/assets/images/hero-bg.jpg">
<meta property="og:url" content="https://www.chainthesun.com/">
<meta property="og:type" content="website">
<link rel="canonical" href="https://www.chainthesun.com/">
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  style-src 'self' https://fonts.googleapis.com;
  font-src https://fonts.gstatic.com;
  script-src 'self';
  img-src 'self' data:;
  connect-src 'none'
">
```

---

## Navigation

- `position: fixed; top: 0; height: 60px`
- `background: rgba(10,10,10,0.92); backdrop-filter: blur(8px)`
- `border-bottom: 1px solid rgba(192,57,43,0.2)`
- Brand: `<img src="assets/images/logo.svg" height="28">` in `<a href="#hero">`
- Five links: Home (`#hero`), About (`#about`), Music (`#releases`), Follow (`#social`), Contact (`#contact`)
- Mobile ≤768px: links hidden by default, shown when `#navLinks` has class `open`
- Hamburger: three `<span>` bars in a `<button class="nav__toggle">`

---

## Hero section

- `min-height: 100vh; overflow: hidden; background-color: #080808`
- `.hero__bg`: absolute fill, `background-image: url('assets/images/hero-bg.jpg')`, `opacity: 0.35`
- `.hero__overlay`: absolute fill, gradient `rgba(8,8,8,0.2)` → `rgba(8,8,8,1)` bottom
- `<canvas id="hero-canvas" aria-hidden="true">`: absolute fill, `z-index: 1`, particle animation
- `.hero__content` (z-index 2): eyebrow → logo img → tagline → CTA button
  - Eyebrow: `"Rock & Metal · Croatia"`, 0.72rem, letter-spacing 0.45em, accent-red
  - Logo: `<img src="assets/images/logo.svg">`, `width: min(520px, 80vw)`, `filter: drop-shadow(0 0 40px rgba(192,57,43,0.25))`
  - Tagline: `"New Singles Out Now"`, 0.8rem, letter-spacing 0.35em, text-secondary
  - CTA: `<a href="#releases" class="cta-btn">Listen Now ↓</a>`, `border: 2px solid var(--accent-red)`, hover fills red
- `.scroll-indicator`: absolute bottom, bouncing CSS animation, `aria-hidden="true"`

---

## About section

- `background: var(--bg-secondary)`
- Two-column CSS grid (`1fr 1fr`, gap 4rem) → single column on ≤768px
- Left: `.about__photo` — `box-shadow: -6px -6px 0 var(--accent-red)`; img has `filter: grayscale(30%) contrast(1.05); loading="lazy"`
- Right: section label → h2 → red rule → bio paragraph → member grid (2×2 → 1 col on mobile)
- Each `.member`: `border-left: 2px solid var(--accent-red)`, name in 700, role in accent-red 600

---

## Releases section

- `background: var(--bg-primary)`
- Grid: `repeat(4,1fr)` → `repeat(2,1fr)` at ≤900px → `1fr` at ≤768px, gap 1.5rem
- Each `.release-card`: `background: var(--bg-secondary)`, hover `translateY(-5px)` + red border glow
- Card structure: `<a>` wrapping `<img loading="lazy">` + `.release-card__body` (title + CTA span with arrow SVG)
- All anchors: `target="_blank" rel="noopener noreferrer"`

| Single | Image | URL |
|---|---|---|
| Whisper of a Gun | `woag.jpg` | `https://ffm.to/woag` |
| Before the Rain | `beforetherain.jpg` | `https://ffm.to/beforetherain` |
| Tomorrow Calls | `tomorrowcalls.jpg` | `https://ffm.to/tomorrowcalls` |
| Farewell to Arms | `farewell.jpg` | `https://ffm.to/farewell` |

---

## Social section

- `background: var(--bg-secondary)`
- Flex row, centered, wrapping
- Three `.social-link` pills: `background: var(--bg-elevated)`, border, hover red border + tint
- Each: inline SVG icon (`aria-hidden="true"`, `fill="currentColor"`) + `<span>` platform name + `aria-label`
- All: `target="_blank" rel="noopener noreferrer"`

| Platform | URL |
|---|---|
| YouTube | `https://www.youtube.com/channel/UChY7wa596Chd940Ke-uisXA` |
| Facebook | `https://www.facebook.com/chainthesun` |
| Instagram | `https://www.instagram.com/chain.the.sun/` |

---

## Contact section

- `background: var(--bg-primary)`, centered, max-width 580px
- `<a href="mailto:contact@chainthesun.com" class="contact-email">contact@chainthesun.com</a>`
- Email visible as link text, colour accent-red, hover silver

---

## Footer

- `background: #080808; border-top: 1px solid rgba(255,255,255,0.05)`
- Faded logo (`height: 22px; opacity: 0.5`) + copyright paragraph

---

## JavaScript (main.js)

Three responsibilities:

**1. Particle animation**
- On `DOMContentLoaded`, size canvas to hero dimensions, create 90 particles
- Each particle: `{x, y, r: 0.4–2.2, opacity: 0.05–0.4, vy: 0.15–0.6, vx: ±0.25}`
- `requestAnimationFrame` loop: clear → move (y -= vy, x += vx) → reset at top → draw warm-white circle
- Pause on `visibilitychange` (tab hidden), resume on show
- Wrapped in `try/catch` — canvas failure does not affect page

**2. Hamburger nav**
- Toggle `open` class on `#navLinks` when `.nav__toggle` is clicked
- Remove `open` when any nav link is clicked

**3. Scroll-spy + smooth scroll fallback**
- Single `IntersectionObserver` (threshold 0.4) watching all `section[id]` elements
- On intersect: toggle `active` class on matching nav link
- If `CSS.supports('scroll-behavior','smooth')` is false, intercept `<a href="#...">` clicks and use `scrollIntoView({behavior:'smooth'})`
