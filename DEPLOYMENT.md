# 🚀 Deploy to Vercel - Complete Guide

Your portfolio is ready to deploy to **shounakchatterjee.tech** using Vercel!

## ✅ Prerequisites Checklist

- [x] Domain purchased: **shounakchatterjee.tech**
- [ ] GitHub account created
- [ ] Vercel account created
- [ ] Code pushed to GitHub
- [ ] Domain connected to Vercel

---

## 📋 Step-by-Step Deployment Guide

### **Step 1: Create GitHub Repository**

1. **Go to GitHub**: https://github.com
2. **Sign in** or **Create account** if you don't have one
3. **Click** the `+` icon (top right) → **New repository**
4. **Repository settings**:
   - Name: `portfolio-website` (or any name you like)
   - Description: `My cyberpunk portfolio website`
   - Visibility: **Public** (recommended) or Private
   - **DO NOT** initialize with README (we already have code)
5. **Click** "Create repository"

### **Step 2: Push Your Code to GitHub**

Open a **new terminal** in your project folder and run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit - Cyberpunk portfolio"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username!

### **Step 3: Create Vercel Account**

1. **Go to**: https://vercel.com
2. **Click** "Sign Up"
3. **Choose**: "Continue with GitHub" (easiest option)
4. **Authorize** Vercel to access your GitHub account

### **Step 4: Deploy to Vercel**

1. **Click** "Add New..." → "Project"
2. **Import** your `portfolio-website` repository
3. **Configure Project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
4. **Click** "Deploy"

⏳ **Wait 2-3 minutes** for deployment to complete...

### **Step 5: Connect Your Custom Domain**

Once deployed, you'll get a URL like: `portfolio-website.vercel.app`

Now let's connect your custom domain:

1. **In Vercel Dashboard**, go to your project
2. **Click** "Settings" tab
3. **Click** "Domains" in sidebar
4. **Add Domain**: Type `shounakchatterjee.tech`
5. **Click** "Add"

### **Step 6: Configure DNS Settings**

Vercel will show you DNS records to add. You need to add these to your domain registrar:

#### **Option A: Using A Records (Recommended)**

Add these **A records** to your domain's DNS settings:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| A | www | 76.76.21.21 |

#### **Option B: Using CNAME (Alternative)**

| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |

**Where to add DNS records?**
- Go to your domain registrar (where you bought the domain)
- Find "DNS Settings" or "DNS Management"
- Add the records shown above
- **Save changes**

⏳ **DNS propagation takes 5-60 minutes**

### **Step 7: Verify Domain**

1. **Wait** 5-10 minutes for DNS to propagate
2. **In Vercel**, click "Refresh" next to your domain
3. **Once verified**, you'll see a green checkmark ✅

---

## 🎉 Your Site is Live!

Visit: **https://shounakchatterjee.tech**

---

## 🔄 Future Updates

Whenever you make changes:

```bash
# Make your changes in code
# Then commit and push:

git add .
git commit -m "Updated portfolio"
git push
```

**Vercel will automatically deploy** your changes in 2-3 minutes! 🚀

---

## 🛠️ Troubleshooting

### Domain not working?
- **Wait longer**: DNS can take up to 48 hours (usually 5-60 minutes)
- **Check DNS**: Use https://dnschecker.org to verify DNS propagation
- **Clear cache**: Try incognito mode or different browser

### Build failed?
- **Check logs** in Vercel dashboard
- **Ensure** all dependencies are in `package.json`
- **Try building locally**: `npm run build`

### 404 Error?
- **Check** that you deployed the correct branch (main)
- **Verify** build output directory is `.next`

---

## 📊 After Deployment

### Add Analytics (Optional)

```bash
npm install @vercel/analytics
```

Then add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

// Inside <body>
<Analytics />
```

### Enable Speed Insights (Optional)

```bash
npm install @vercel/speed-insights
```

### Set Environment Variables (If needed)

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add any API keys or secrets

---

## 🎯 Quick Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Push to GitHub (triggers Vercel deployment)
git add .
git commit -m "Your message"
git push
```

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Docs**: https://docs.github.com

---

## ✅ Deployment Checklist

- [ ] Created GitHub account
- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Created Vercel account
- [ ] Imported project to Vercel
- [ ] Added custom domain in Vercel
- [ ] Updated DNS records at domain registrar
- [ ] Waited for DNS propagation
- [ ] Verified domain in Vercel
- [ ] Tested website at shounakchatterjee.tech
- [ ] Celebrated! 🎉

---

**Your cyberpunk portfolio will be live at https://shounakchatterjee.tech very soon!** 🚀
