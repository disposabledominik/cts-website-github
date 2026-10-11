# Requirements — Chain the Sun Website

## What it is

A static single-page band website for **Chain the Sun** (rock/metal, Croatia), hosted on GitHub Pages at `chainthesun.com`. Built from three files: `index.html`, `css/style.css`, `js/main.js`. No build tools, no npm, no frameworks.

---

## Sections (in order)

1. **Hero** — full-viewport, SVG logo, band banner photo behind at 35% opacity, particle animation, CTA button
2. **About** — band photo + bio text + member lineup
3. **Releases** — four single cards linking to ffm.to streaming pages
4. **Social** — YouTube, Facebook, Instagram links
5. **Contact** — mailto link

---

## Functional requirements

### Navigation
- Fixed top bar with SVG logo brand and five anchor links (Home, About, Music, Follow, Contact)
- Smooth scroll to each section on click
- Hamburger toggle on mobile (≤768px), menu opens/closes via `open` class on `#navLinks`
- Active link highlighted via `IntersectionObserver` scroll-spy

### Hero
- `min-height: 100vh`, dark background (`#080808` fallback)
- Band banner photo (`hero-bg.jpg`) at `opacity: 0.35` + gradient overlay
- SVG logo centered (`width: min(520px, 80vw)`), red drop-shadow
- 90-particle canvas animation (warm-white dots drifting upward), degrades gracefully if JS fails
- "Listen Now ↓" CTA button linking to `#releases`
- Bouncing scroll indicator

### About
- Two-column grid (photo left, text right) → single column on mobile
- Band photo with `filter: grayscale(30%) contrast(1.05)` and red corner shadow
- Bio text (verbatim): *"Wishing to question genre limits, the band was formed under a broad common denominator of rock and heavy metal. Their sound is primarily rooted in melodic vocal lines and poetic texts, followed by tight riffs, musical solos and dynamic rhythms."*
- Member list: Ivan Lujo / Drums · Nikola Miskovic / Lead Vocals · Hrvoje Ryznar / Bass & Vocals · Dominik Zoric / Guitar

### Releases
- Four cards: Whisper of a Gun, Before the Rain, Tomorrow Calls, Farewell to Arms
- Each card: artwork image + title + "Stream / Download" link → correct ffm.to URL, `target="_blank" rel="noopener noreferrer"`
- Grid: 4-col desktop → 2-col tablet (≤900px) → 1-col mobile (≤768px)

### Social
- YouTube, Facebook, Instagram — each with inline SVG icon, platform name, opens in new tab
- All links: `target="_blank" rel="noopener noreferrer"`

### Contact
- Visible email address as `mailto:contact@chainthesun.com` link
- No form, no backend

### Footer
- Faded SVG logo + copyright line

---

## Non-functional requirements

### Performance
- All images pre-converted to JPEG at web-appropriate sizes (already done, see `assets/images/`)
- `loading="lazy"` on all below-fold images (band photo, all single covers)
- Google Fonts preconnect for both `fonts.googleapis.com` and `fonts.gstatic.com`
- No external JS or CSS CDNs except Google Fonts
- CSS and JS in separate files for browser caching

### Security
- `Content-Security-Policy` meta tag: `default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self'; img-src 'self' data:; connect-src 'none'`
- All external links have `rel="noopener noreferrer"`
- No cookies, localStorage, or any client-side data persistence

### SEO / Social sharing
- `<meta name="description">` tag
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- `<link rel="canonical" href="https://www.chainthesun.com/">`

### Hosting
- `index.html` at repo root
- `CNAME` file at repo root containing exactly `chainthesun.com`
- All asset paths relative (no absolute URLs for local assets)

---

## Out of scope

- Any server-side logic
- CMS or content management
- Analytics (can be added later by inserting a script tag)
- Blog or news section
- Merch store
