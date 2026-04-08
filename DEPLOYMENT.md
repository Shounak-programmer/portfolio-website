# Deployment Guide

The portfolio is deployed on **Vercel** (frontend) and **HuggingFace Spaces** (backend), served at **[shounakchatterjee.tech](https://shounakchatterjee.tech)**.

---

## Current Setup

| Item | Frontend | Backend |
|---|---|---|
| Hosting | Vercel | HuggingFace Spaces (Docker) |
| Domain | shounakchatterjee.tech | shounak-programmer-portfolio-backend.hf.space |
| Repo | [GitHub](https://github.com/Shounak-programmer/portfolio-website) | [HF Space](https://huggingface.co/spaces/Shounak-programmer/portfolio-backend) |
| Branch | `main` | `main` |
| Preset | Next.js | Docker SDK |

**The backend is proxied through the frontend at `/admin` and `/api`.** Every push to `main` triggers a Vercel deployment automatically. The HuggingFace Space is deployed separately.

---

## Deploying Frontend Changes (Vercel — Automatic)

```bash
git add -A
git commit -m "Your change description"
git push
```

Vercel will build and deploy in **~2–3 minutes**. Monitor progress in the [Vercel Dashboard](https://vercel.com/dashboard).

---

## Deploying Backend Changes (HuggingFace Spaces)

### First-Time Setup

1. **Go to [huggingface.co/new-space](https://huggingface.co/new-space)**

2. **Create the Space:**
   - **Space name:** `portfolio-backend`
   - **SDK:** `Docker`
   - **Visibility:** `Public` (required for free tier)
   - Click **Create Space**

3. **Clone the Space repo locally:**
   ```bash
   git clone https://huggingface.co/spaces/YOUR_USERNAME/portfolio-backend
   cd portfolio-backend
   ```

4. **Copy backend files into the Space repo:**
   ```bash
   # From your portfolio-website directory:
   cp backend/Dockerfile backend/README.md backend/.dockerignore backend/package.json backend/package-lock.json backend/server.js portfolio-backend/
   cp -r backend/admin portfolio-backend/admin
   ```

5. **Set secrets in HuggingFace Space Settings:**
   Go to your Space → **Settings** → **Variables and secrets** → **New secret**:
   - `ADMIN_USERNAME` → your admin username
   - `ADMIN_PASSWORD` → your admin password
   - `ADMIN_TOKEN` → your secret token
   - `HUGGINGFACE_TOKEN` → your HF API token
   - `ALLOWED_ORIGIN` → `https://shounakchatterjee.tech`

6. **Enable Persistent Storage:**
   Go to your Space → **Settings** → **Persistent Storage** → Enable (**Small / Free** tier)

7. **Push to deploy:**
   ```bash
   cd portfolio-backend
   git add -A
   git commit -m "Initial backend deployment"
   git push
   ```

### Subsequent Deploys

```bash
cd portfolio-backend
# Copy updated files from your main repo
cp ../portfolio-website/backend/server.js .
# ... copy any changed files
git add -A
git commit -m "Update description"
git push
```

---

## Building Locally (Production Test)

```bash
npm run build
npm start
```

Then visit [http://localhost:3000](http://localhost:3000) to verify everything looks correct.

---

## Environment Variables

### Vercel (Frontend)
Add this in the Vercel Dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_BACKEND_URL`: `https://YOUR_USERNAME-portfolio-backend.hf.space`

### HuggingFace Space (Backend)
Set these as **Secrets** in Space Settings:
- `ADMIN_USERNAME`: Your login username
- `ADMIN_PASSWORD`: Your login password
- `ADMIN_TOKEN`: A secret token for session security
- `HUGGINGFACE_TOKEN`: HuggingFace API token for the AI chatbot
- `ALLOWED_ORIGIN`: `https://shounakchatterjee.tech`

These are automatically injected as environment variables. `PORT` and `DB_PATH` are set in the Dockerfile.

Never commit secrets to the repo. Use `.env.local` for local development.

---

## Proxies & Rewrites

The frontend `next.config.js` is configured to proxy requests:
- `shounakchatterjee.tech/admin` → `[Backend URL]/admin`
- `shounakchatterjee.tech/api/*` → `[Backend URL]/api/*`

This keeps the admin dashboard on your main domain and avoids CORS issues.

---

## Custom Domain

The domain `shounakchatterjee.tech` is already connected to Vercel. If you ever need to reconnect it:

1. Go to **Vercel Dashboard → Project → Settings → Domains**
2. Add the domain and follow the DNS instructions

### DNS Records (for reference)

| Type | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

---

## Reverting a Frontend Deployment

In the Vercel Dashboard:
1. Go to **Deployments** tab
2. Find the previous working deployment
3. Click **...** → **Promote to Production**

---

## Troubleshooting

### Backend not responding?
- Check if the Space is running at `https://huggingface.co/spaces/YOUR_USERNAME/portfolio-backend`
- The Space may have gone to sleep — first request after sleep takes ~30s to wake up
- Check the **Logs** tab in the Space for errors
- Verify secrets are set correctly in Space Settings

### Frontend build failed?
- Check the Vercel build logs for errors
- Run `npm run build` locally to reproduce the error

### Domain not loading?
- Check DNS propagation at [dnschecker.org](https://dnschecker.org)
- Try an incognito window to bypass cache

### Styles broken after deploy?
- Clear the Vercel cache: go to Deployments → Redeploy (without cache)

---

## Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [HuggingFace Spaces](https://huggingface.co/spaces)
- [HuggingFace Docs — Docker Spaces](https://huggingface.co/docs/hub/spaces-sdks-docker)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [GitHub Repo](https://github.com/Shounak-programmer/portfolio-website)
