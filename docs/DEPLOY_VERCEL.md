# Deploy to Vercel

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free)
- Your portfolio repository on GitHub, GitLab, or Bitbucket

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Import Your Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your Git repository
4. Select your portfolio repository

### Step 2: Configure Build Settings

Vercel will auto-detect Vite, but verify these settings:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Step 3: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. Your portfolio will be live at `your-project.vercel.app`

### Step 4: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy from Your Project Directory

```bash
# First deployment
vercel

# Production deployment
vercel --prod
```

### Step 4: Follow Prompts

- Set up and deploy: Yes
- Which scope: Select your account
- Link to existing project: No
- Project name: your-portfolio
- Directory: ./
- Override settings: No

## Environment Variables

If you need environment variables:

1. Create `.env.local` file (already in .gitignore)
2. Add variables in Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add your variables
   - Redeploy

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches and pull requests

## Troubleshooting

### Build Fails

Check build logs in Vercel dashboard. Common issues:

```bash
# Missing dependencies
npm install

# TypeScript errors
npm run check

# Build locally first
npm run build
```

### 404 on Page Refresh

Add `vercel.json` to your project root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This is already included in the template, but if you removed it, add it back.

### Slow Build Times

- Vercel free tier: ~45 seconds
- If builds are slow, check bundle size with `npm run build`

## Performance Optimization

Your template is already optimized for Vercel:
- ✅ Code splitting
- ✅ Terser minification
- ✅ CSS optimization
- ✅ Lazy loading

## Custom Configuration

Create `vercel.json` for advanced configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## Useful Commands

```bash
# View deployments
vercel ls

# View logs
vercel logs

# Remove deployment
vercel remove [deployment-url]

# Open project in browser
vercel open
```

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite on Vercel](https://vercel.com/docs/frameworks/vite)
- [Custom Domains](https://vercel.com/docs/custom-domains)
