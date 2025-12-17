# 🚀 Quick Setup Guide

Welcome to the Portfolio Template! Follow these steps to create your own portfolio in minutes.

## ⚡ Quick Start (5 minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Edit Your Content

Open the `content/` folder and edit these Markdown files:

#### `content/profile.md`
```markdown
name: Your Name
title: Full Stack Developer
email: your.email@example.com
location: Your City, Country
# ... update with your info
```

#### `content/experience.md`
Add your work experience with achievements and metrics.

#### `content/projects.md`
Showcase your best projects with descriptions and links.

#### `content/skills.md`
List your technical skills organized by proficiency.

#### `content/education.md`
Add your educational background.

#### `content/certifications.md`
List certifications and language skills.

### 3. Preview Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 4. Deploy

Choose your preferred platform:

**Vercel (Recommended - Fastest)**
```bash
npm i -g vercel
vercel
```
📖 [Detailed Vercel Guide](docs/DEPLOY_VERCEL.md)

**Netlify**
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```
📖 [Detailed Netlify Guide](docs/DEPLOY_NETLIFY.md)

**Cloudflare Pages**
```bash
npm i -g wrangler
wrangler login
npm run build
npx wrangler pages deploy dist --project-name=your-portfolio
```
📖 [Detailed Cloudflare Guide](docs/DEPLOY_CLOUDFLARE.md)

## 📁 What's in the `content/` Folder?

- `profile.md` - Name, contact info, career highlights
- `experience.md` - Work history with achievements
- `projects.md` - Project portfolio
- `skills.md` - Technical skills
- `education.md` - Education background
- `certifications.md` - Certifications & languages

**Just edit these files - no coding needed!**

## 🎨 Customization Tips

### Change Colors/Theme

Edit `client/src/index.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --foreground: 222.2 84% 4.9%;
}
```

### Add/Remove Sections

Edit `client/src/pages/home.tsx` to show/hide sections.

### Update Social Links

Edit `content/profile.md` to add your social media links.

## 🐛 Troubleshooting

### Content not updating?
- Restart dev server: `Ctrl+C`, then `npm run dev`
- Clear browser cache

### Build errors?
```bash
npm run check  # Check TypeScript errors
npm run build  # Test build locally
```

### Need help?
- Check the [README.md](README.md)
- Read deployment guides in `docs/`
- Open an issue on GitHub

## 📚 Full Documentation

- [Complete README](README.md) - Detailed guide
- [Deployment Guides](docs/) - Platform-specific instructions
- [Contributing](CONTRIBUTING.md) - How to contribute
- [Project Summary](PROJECT_SUMMARY.md) - Technical overview

## ✨ Pro Tips

### Writing Achievements

❌ Bad: "Worked on improving the application"
✅ Good: "Improved load time by 45% through caching, serving 50+ clients"

Always include:
- **Action** - What you did
- **Metric** - Quantifiable result
- **Impact** - Business value

### Skills Organization

- **Expert**: Use daily
- **Advanced**: Very proficient
- **Proficient**: Can work effectively
- **Familiar**: Have experience

## 🎯 Next Steps

1. ✅ Edit Markdown files
2. ✅ Preview locally
3. ✅ Deploy to your platform
4. ✅ Add custom domain (optional)
5. ✅ Share your portfolio!

---

**Questions?** Check the [README.md](README.md) or open an issue!

Good luck with your portfolio! 🚀
