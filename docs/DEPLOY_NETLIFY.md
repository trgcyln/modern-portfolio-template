# Deploy to Netlify

This guide will help you deploy your portfolio to Netlify.

## Prerequisites

- A [Netlify account](https://app.netlify.com/signup) (free)
- Your portfolio repository on GitHub, GitLab, or Bitbucket

## Method 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Import Your Repository

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub, GitLab, Bitbucket)
4. Authorize Netlify and select your repository

### Step 2: Configure Build Settings

```
Base directory: (leave empty)
Build command: npm run build
Publish directory: dist
```

### Step 3: Deploy

1. Click "Deploy site"
2. Wait 2-3 minutes for the build to complete
3. Your portfolio will be live at `random-name-123456.netlify.app`

### Step 4: Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

### Step 3: Initialize and Deploy

```bash
# Initialize Netlify in your project
netlify init

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

## Method 3: Drag and Drop (Quick Test)

1. Run `npm run build` locally
2. Go to https://app.netlify.com/drop
3. Drag your `dist` folder to the drop zone
4. Get instant preview URL

## Configuration File

Create `netlify.toml` in your project root for custom configuration:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

This file is already included in your template.

## Environment Variables

To add environment variables:

1. Go to Site settings → Build & deploy → Environment
2. Click "Edit variables"
3. Add your variables
4. Trigger a new deploy

Or via CLI:

```bash
netlify env:set VAR_NAME value
```

## Automatic Deployments

Netlify automatically deploys:
- **Production**: Every push to your main branch
- **Deploy previews**: Every pull request

## Build Plugins

Enhance your builds with Netlify plugins:

### Install a plugin:

1. Go to Site settings → Build & deploy → Plugins
2. Search and install plugins
3. Or add to `netlify.toml`:

```toml
[[plugins]]
  package = "@netlify/plugin-lighthouse"
```

### Useful plugins:
- `@netlify/plugin-lighthouse` - Run Lighthouse on every deploy
- `netlify-plugin-cache` - Faster builds with caching
- `netlify-plugin-checklinks` - Check for broken links

## Forms (Optional)

Netlify provides built-in form handling. To add a contact form:

1. Add `netlify` attribute to your form:

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="text" name="name" />
  <input type="email" name="email" />
  <button type="submit">Send</button>
</form>
```

2. View submissions in Netlify Dashboard → Forms

## Analytics (Optional)

Enable Netlify Analytics:

1. Go to Site settings → Analytics
2. Enable Analytics ($9/month)
3. Get real-time visitor data

## Troubleshooting

### Build Fails

Check deploy logs in Netlify dashboard:

```bash
# Test build locally
npm run build

# Clear cache and rebuild
netlify build --clear-cache
```

### 404 on Page Refresh

Ensure `_redirects` file exists in `client/public/`:

```
/*    /index.html    200
```

This is already included in your template.

### Node Version Issues

Specify Node version in `netlify.toml`:

```toml
[build.environment]
  NODE_VERSION = "20"
```

Or create `.nvmrc` file:

```
20
```

## Deploy Contexts

Configure different settings for different branches:

```toml
[context.production]
  command = "npm run build"

[context.deploy-preview]
  command = "npm run build"

[context.branch-deploy]
  command = "npm run build"

[context.dev]
  command = "npm run dev"
```

## Split Testing (A/B Testing)

Test different versions:

1. Deploy different branches
2. Go to Site settings → Split testing
3. Configure traffic distribution

## Useful Commands

```bash
# Open Netlify dashboard
netlify open

# View deploy logs
netlify logs

# Link local repo to Netlify site
netlify link

# Run dev server with Netlify functions
netlify dev

# Check status
netlify status
```

## Performance

Your template is already optimized:
- ✅ CDN distribution (global edge network)
- ✅ Automatic HTTPS
- ✅ Brotli compression
- ✅ Image optimization
- ✅ Prerendering

## Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/)
- [Build Configuration](https://docs.netlify.com/configure-builds/overview/)
- [Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
