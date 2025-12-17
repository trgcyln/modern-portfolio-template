# Deploy to Cloudflare Pages

This guide will help you deploy your portfolio to Cloudflare Pages.

## Prerequisites

- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free)
- Your portfolio repository on GitHub or GitLab

## Method 1: Deploy via Cloudflare Dashboard (Recommended)

### Step 1: Connect Your Repository

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to "Workers & Pages"
3. Click "Create application" → "Pages" → "Connect to Git"
4. Authorize Cloudflare and select your repository

### Step 2: Configure Build Settings

```
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: (leave empty)
```

### Step 3: Environment Variables (if needed)

Add any required environment variables in the "Environment variables" section.

### Step 4: Deploy

1. Click "Save and Deploy"
2. Wait 2-3 minutes for the first build
3. Your site will be live at `your-project.pages.dev`

### Step 5: Custom Domain (Optional)

1. Go to your project → "Custom domains"
2. Click "Set up a custom domain"
3. Add your domain
4. Update DNS records (Cloudflare will guide you)

## Method 2: Deploy via Wrangler CLI

### Step 1: Install Wrangler

```bash
npm install -g wrangler
# or
npm install --save-dev wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

### Step 3: Create Project (First Time Only)

```bash
wrangler pages project create your-portfolio
```

### Step 4: Build and Deploy

```bash
# Build your project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=your-portfolio
```

For subsequent deploys, just run:

```bash
npm run build && npx wrangler pages deploy dist --project-name=your-portfolio
```

## Configuration File

Your project already includes `wrangler.toml`:

```toml
name = "your-portfolio"
compatibility_date = "2025-12-17"
pages_build_output_dir = "dist"
```

Update the `name` field to match your project name.

## SPA Routing

Cloudflare Pages needs proper routing configuration for single-page applications.

Your project already includes `client/public/_redirects`:

```
/*    /index.html    200
```

This ensures all routes are handled by your React app.

## Environment Variables

### Via Dashboard:
1. Go to your project settings
2. Navigate to "Environment variables"
3. Add variables for Production and/or Preview

### Via Wrangler:
```bash
wrangler pages secret put VARIABLE_NAME
```

## Automatic Deployments

Cloudflare Pages automatically deploys:
- **Production**: Every push to your production branch
- **Preview**: Every push to other branches and pull requests

Each preview deployment gets its own URL: `abc123.your-project.pages.dev`

## Build Configuration

### Custom Build Command

If you need custom build steps, update your `package.json`:

```json
{
  "scripts": {
    "build": "vite build",
    "build:cf": "vite build && echo 'Build complete'"
  }
}
```

### Node Version

Cloudflare Pages uses Node 18 by default. To specify a different version, set in dashboard:

```
Environment variable: NODE_VERSION=20
```

## Functions (Optional)

Cloudflare Pages supports serverless functions.

Create `functions` directory in your project root:

```
functions/
  api/
    hello.ts      # Available at /api/hello
```

Example function:

```typescript
export async function onRequest(context) {
  return new Response("Hello from Cloudflare!");
}
```

## Redirects and Headers

Create `_redirects` and `_headers` files in `client/public/`:

**`_redirects`** (already included):
```
/*    /index.html    200
```

**`_headers`** (optional):
```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable
```

## Advanced Features

### Web Analytics

Enable free web analytics:

1. Go to project settings
2. Enable "Web Analytics"
3. Add provided script to your `index.html` (optional)

### Access Control

Protect your site:

1. Go to project settings → "Access"
2. Enable "Access"
3. Configure authentication rules

### Preview Deployments

Every branch and PR gets a preview:
- Format: `abc123.your-project.pages.dev`
- Perfect for testing changes before merging

## Wrangler Commands

```bash
# View all projects
wrangler pages project list

# View deployments
wrangler pages deployment list --project-name=your-portfolio

# View deployment logs
wrangler pages deployment tail

# Delete deployment
wrangler pages deployment delete <deployment-id>

# Create new project
wrangler pages project create

# Delete project
wrangler pages project delete your-portfolio
```

## Performance Features

Cloudflare Pages includes:
- ✅ Global CDN (330+ data centers)
- ✅ Automatic HTTPS
- ✅ HTTP/3 and QUIC
- ✅ Brotli compression
- ✅ DDoS protection
- ✅ Unlimited bandwidth (free plan)

## Troubleshooting

### Build Fails

Check build logs in dashboard. Common issues:

```bash
# Test locally first
npm run build

# Check for TypeScript errors
npm run check

# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

### 404 Errors

Ensure `_redirects` file exists in `client/public/`:

```
/*    /index.html    200
```

### Wrangler Login Issues

```bash
# Logout and login again
wrangler logout
wrangler login

# Or use API token
wrangler login --token YOUR_API_TOKEN
```

### Build Timeout

If build takes too long (>20 minutes), optimize:

```bash
# Check bundle size
npm run build
du -sh dist/

# Split large dependencies
# Already configured in vite.config.ts
```

## Migration from Other Platforms

### From Vercel/Netlify:

1. Your build configuration should work as-is
2. Update `_redirects` file format (already correct in template)
3. Move environment variables to Cloudflare dashboard

### From GitHub Pages:

1. Remove `gh-pages` branch
2. Connect repository to Cloudflare Pages
3. Use same build command: `npm run build`

## Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Functions](https://developers.cloudflare.com/pages/functions/)
- [Custom Domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
