# Deployment Guide

The portfolio is deployed on **Vercel** (frontend) and **Fly.io** (backend), served at **[shounakchatterjee.tech](https://shounakchatterjee.tech)**.

---

## Current Setup

| Item | Frontend | Backend |
|---|---|---|
| Hosting | Vercel | Fly.io |
| Domain | shounakchatterjee.tech | shounak-portfolio-backend.fly.dev |
| Repo | [GitHub](https://github.com/Shounak-programmer/portfolio-website) | Same |
| Branch | `main` | `main` |
| Preset | Next.js | Dockerfile |

**The backend is proxied through the frontend at `/admin` and `/api`.** Every push to `main` triggers a Vercel deployment automatically. Fly.io must be deployed manually (or via CI).

---

## Deploying Frontend Changes (Vercel — Automatic)

```bash
# Stage all changes
git add -A

# Commit with a descriptive message
git commit -m "Your change description"

# Push — Vercel picks this up automatically
git push
```

Vercel will build and deploy in **~2–3 minutes**. Monitor progress in the [Vercel Dashboard](https://vercel.com/dashboard).

---

## Deploying Backend Changes (Fly.io — Manual)

### First-Time Setup

1. **Install the Fly CLI:**
   ```bash
   # Windows (PowerShell)
   pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"

   # macOS / Linux
   curl -L https://fly.io/install.sh | sh
   ```

2. **Sign up / Log in:**
   ```bash
   fly auth signup   # or: fly auth login
   ```

3. **Launch the app (from the backend folder):**
   ```bash
   cd backend
   fly launch --no-deploy
   ```
   When prompted, confirm the app name as `shounak-portfolio-backend` and region as `sin` (Singapore).

4. **Create a persistent volume for SQLite:**
   ```bash
   fly volumes create sqlite_data --size 1 --region sin
   ```

5. **Set your secrets (environment variables):**
   ```bash
   fly secrets set \
     ADMIN_USERNAME=your_username \
     ADMIN_PASSWORD=your_password \
     ADMIN_TOKEN=your_secret_token \
     HUGGINGFACE_TOKEN=your_hf_token
   ```

6. **Deploy:**
   ```bash
   fly deploy
   ```

### Subsequent Deploys

```bash
cd backend
fly deploy
```

That's it. Fly.io builds the Docker image and deploys it.

### Useful Fly.io Commands

```bash
fly status                # Check app status
fly logs                  # Stream live logs
fly ssh console           # SSH into the running machine
fly secrets list          # List configured secrets
fly volumes list          # List volumes
fly open                  # Open the app in your browser
```

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

### Vercel (Frontend)
Add this in the Vercel Dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_BACKEND_URL`: `https://shounak-portfolio-backend.fly.dev`

### Fly.io (Backend)
These are set via `fly secrets set`:
- `ADMIN_USERNAME`: Your login username
- `ADMIN_PASSWORD`: Your login password
- `ADMIN_TOKEN`: A secret token for session security
- `HUGGINGFACE_TOKEN`: HuggingFace API token for the AI chatbot
- `ALLOWED_ORIGIN`: `https://shounakchatterjee.tech` *(set in fly.toml)*
- `DB_PATH`: `/data/contacts.db` *(set in fly.toml, persisted on a Fly Volume)*
- `PORT`: `8080` *(set in fly.toml)*

Never commit secrets to the repo. Use `.env.local` for local development.

---

## Proxies & Rewrites

The frontend `next.config.js` is configured to proxy requests:
- `shounakchatterjee.tech/admin` → `[Backend URL]/admin`
- `shounakchatterjee.tech/api/*` → `[Backend URL]/api/*`

This keeps the admin dashboard on your main domain and avoids CORS issues.

---

## Custom Domain

The domain `shounakchatterjee.tech` is already connected to Vercel. If you ever need to reconnect it or add a subdomain:

1. Go to **Vercel Dashboard → Project → Settings → Domains**
2. Add the domain and follow the DNS instructions

### DNS Records (for reference)

| Type | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

DNS changes can take up to 60 minutes to propagate.

---

## Reverting a Frontend Deployment

In the Vercel Dashboard:
1. Go to **Deployments** tab
2. Find the previous working deployment
3. Click **...** → **Promote to Production**

## Reverting a Backend Deployment

```bash
# List recent Fly.io deployments
fly releases

# Roll back to a previous release
fly deploy --image <previous-image-ref>
```

---

## Troubleshooting

### Frontend build failed?
- Check the Vercel build logs for errors
- Run `npm run build` locally to reproduce the error
- Ensure all imports use the correct file paths and extensions (`.jsx`, `.js`)

### Backend not responding?
- Check backend status: `fly status`
- View live logs: `fly logs`
- SSH into the machine: `fly ssh console`
- Verify secrets are set: `fly secrets list`

### Domain not loading?
- Check DNS propagation at [dnschecker.org](https://dnschecker.org)
- Try an incognito window to bypass cache
- Verify the domain is listed as active in Vercel → Domains

### Styles broken after deploy?
- Clear the Vercel cache: go to Deployments → Redeploy (without cache)
- Check that `globals.css` is imported in `app/layout.js`

### SQLite database lost?
- Ensure the Fly Volume is mounted: `fly volumes list`
- Check `DB_PATH` is set to `/data/contacts.db`
- If the volume was deleted, create a new one: `fly volumes create sqlite_data --size 1 --region sin`

---

## Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Fly.io Dashboard](https://fly.io/dashboard)
- [Fly.io Docs](https://fly.io/docs/)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [GitHub Repo](https://github.com/Shounak-programmer/portfolio-website)
