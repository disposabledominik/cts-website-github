# Chain the Sun — Website

Official website for **Chain the Sun**, a rock/metal band from Croatia.  
Live at [chainthesun.com](https://www.chainthesun.com)

---

## Tech

Pure HTML, CSS, and vanilla JavaScript. No build tools, no npm, no frameworks.  
Hosted on [GitHub Pages](https://pages.github.com) with a custom domain.

## Run locally

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

> Don't open `index.html` directly — Google Fonts won't load without a server.

## Deploy

See [DEPLOY.md](DEPLOY.md) for the full GitHub Pages + Dynadot DNS setup guide.

## Update content

| What to change | Where |
|---|---|
| Text, links, section content | `index.html` |
| Colours, layout, spacing | `css/style.css` |
| Animations, nav behaviour | `js/main.js` |
| Images | `assets/images/` — replace the file, keep the same filename |
| Add a new single | Copy a `.release-card` block in `index.html`, update image/title/link |

## Structure

```
/
├── index.html          Main page
├── css/style.css       All styles
├── js/main.js          Particles, nav, scroll-spy
├── favicon.svg         Browser tab icon
├── CNAME               Custom domain (chainthesun.com)
├── robots.txt          Search engine instructions
├── sitemap.xml         Search engine sitemap
├── assets/images/      All images (web-optimised JPEGs + SVG logo)
├── DEPLOY.md           Deployment guide
└── LICENSE             MIT (code) / All rights reserved (assets)
```

## License

Code: MIT. Band name, logo, photos, artwork, and written content: © 2020–2026 Chain the Sun, all rights reserved. See [LICENSE](LICENSE).
