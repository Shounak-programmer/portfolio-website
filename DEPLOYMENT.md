# Deployment Guide

The portfolio is deployed on **Vercel** and served at **[shounakchatterjee.tech](https://shounakchatterjee.tech)**.

---

## Current Setup

| Item | Value |
|---|---|
| Hosting | Vercel |
| Domain | shounakchatterjee.tech |
| GitHub Repo | [Shounak-programmer/portfolio-website](https://github.com/Shounak-programmer/portfolio-website) |
| Branch | `main` |
| Framework preset | Next.js (auto-detected) |

Vercel is connected to the GitHub repo. **Every push to `main` triggers an automatic deployment.**

---

## Deploying Changes (Day-to-Day)

```bash
# Stage all changes
git add -A

# Commit with a descriptive message
git commit -m "Your change description"

# Push — Vercel picks this up automatically
git push
```

Vercel will build and deploy in **~2–3 minutes**. You can monitor the progress in the [Vercel Dashboard](https://vercel.com/dashboard).

---

## Building Locally (Production Test)

Before pushing a large change, test the production build locally:

```bash
npm run build
npm start
```

Then visit [http://localhost:3000](http://localhost:3000) to verify everything looks correct.

---

## Environment Variables

If you ever add API keys or secrets (e.g. for a contact form backend), add them in:

> Vercel Dashboard → Project → Settings → Environment Variables

Never commit secrets to the repo.

---

## Custom Domain

The domain `shounakchatterjee.tech` is already connected. If you ever need to reconnect it or add a subdomain:

1. Go to **Vercel Dashboard → Project → Settings → Domains**
2. Add the domain and follow the DNS instructions

### DNS Records (for reference)

| Type | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

DNS changes can take up to 60 minutes to propagate.

---

## Reverting a Deployment

In the Vercel Dashboard:
1. Go to **Deployments** tab
2. Find the previous working deployment
3. Click **...** → **Promote to Production**

---

## Troubleshooting

### Build failed?
- Check the Vercel build logs for errors
- Run `npm run build` locally to reproduce the error
- Ensure all imports use the correct file paths and extensions (`.jsx`, `.js`)

### Domain not loading?
- Check DNS propagation at [dnschecker.org](https://dnschecker.org)
- Try an incognito window to bypass cache
- Verify the domain is listed as active in Vercel → Domains

### Styles broken after deploy?
- Clear the Vercel cache: go to Deployments → Redeploy (without cache)
- Check that `globals.css` is imported in `app/layout.js`

---

## Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [GitHub Repo](https://github.com/Shounak-programmer/portfolio-website)
