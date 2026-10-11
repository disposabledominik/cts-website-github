# Deployment Guide — Chain the Sun Website

This guide walks you through publishing the site at **chainthesun.com** using GitHub Pages and your Dynadot domain.

---

## Prerequisites

- A GitHub account (free)
- Git installed on your machine, or GitHub Desktop
- Access to your Dynadot account (DNS management)

---

## Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in.
2. Click **+** → **New repository**.
3. Name it anything (e.g. `cts-website`). It does **not** need to match the domain.
4. Set it to **Public** (required for free GitHub Pages).
5. Leave everything else as default and click **Create repository**.

---

## Step 2 — Push the site files to GitHub

In your terminal, from the project folder (`cts-website-github`):

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cts-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username and `cts-website` with your repo name.

If you prefer a GUI, use **GitHub Desktop**: File → Add Local Repository → select this folder → Publish Repository.

---

## Step 3 — Enable GitHub Pages

1. In your repository on GitHub, go to **Settings** → **Pages** (left sidebar).
2. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**.

GitHub will show a URL like `https://YOUR_USERNAME.github.io/cts-website/` — ignore this, you'll be using your custom domain instead.

---

## Step 4 — Set the custom domain in GitHub Pages

1. Still on the **Settings → Pages** page, scroll to **Custom domain**.
2. Enter `chainthesun.com` and click **Save**.
3. GitHub will read the `CNAME` file already in the repo and confirm the domain. A DNS check will run — it will likely show a warning until you complete Step 5.

> The `CNAME` file at the repo root already contains `chainthesun.com`, so GitHub Pages will recognise it automatically.

---

## Step 5 — Configure DNS at Dynadot

Log in to [dynadot.com](https://www.dynadot.com), go to **My Domains** → click **chainthesun.com** → **DNS Settings**.

You need to set two types of records:

### A records (apex domain — `chainthesun.com`)

Remove any existing A records pointing to Dynadot's servers, then add four new ones:

| Type | Host | Points to |
|------|------|-----------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### CNAME record (www subdomain)

| Type | Host | Points to |
|------|------|-----------|
| CNAME | www | YOUR_USERNAME.github.io |

Replace `YOUR_USERNAME` with your actual GitHub username (e.g. `dominik.github.io`).

Click **Save** when done.

> **Note:** Dynadot uses `@` to represent the apex/root domain. Some registrars call it the "root" or leave the host field blank — use whichever Dynadot shows.

---

## Step 6 — Wait for DNS propagation

DNS changes typically take **10–30 minutes**, sometimes up to a few hours.

To check if it has propagated, run:
```bash
dig chainthesun.com +short
```
You should see one of the four GitHub IPs (185.199.108–111.153).

Or use [dnschecker.org](https://dnschecker.org) and enter `chainthesun.com`.

---

## Step 7 — Enable HTTPS

1. Go back to **GitHub → Settings → Pages**.
2. Once the DNS check passes (green tick next to your domain), the **Enforce HTTPS** checkbox will become available.
3. Check it and save.

Your site is now live at `https://chainthesun.com` with a free SSL certificate.

---

## Updating the site in the future

To update any content (text, links, images):

1. Edit the relevant file locally (`index.html`, `css/style.css`, `js/main.js`, or replace an image in `assets/images/`).
2. Commit and push:
```bash
git add .
git commit -m "Update: describe what changed"
git push
```
GitHub Pages rebuilds automatically within ~30 seconds. No other action needed.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Site shows GitHub's default 404 | Pages not enabled — repeat Step 3 |
| Domain shows Dynadot's page | DNS not updated yet — wait or re-check Step 5 |
| HTTPS not available | DNS hasn't fully propagated — wait and retry Step 7 |
| `www.chainthesun.com` doesn't work | CNAME record for `www` missing or incorrect — check Step 5 |
| Font doesn't load locally | Open via `python3 -m http.server 8080`, not by double-clicking the file |
