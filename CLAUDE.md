# CLAUDE.md

Project steering lives in `.kiro/steering/` and is imported below.

@.kiro/steering/project.md

## Branches and deploy

- Integration branch: `main` (GitHub Pages deploys from it). PRs target `main`.
- Post-merge step: none.
- Never delete or rename `CNAME`; it must contain exactly `chainthesun.com`.

## Gate

- No build step. Serve locally with `python3 -m http.server 8080` (not by opening index.html directly; fonts won't load) and check the browser console for errors; keep links in sitemap.xml valid.
