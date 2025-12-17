# Modern Portfolio Template

A beautiful, performant, and customizable portfolio template built with React, TypeScript, and Vite. Configure your entire portfolio using simple Markdown files - no coding required!

![Portfolio Preview](https://via.placeholder.com/1200x600/0f172a/ffffff?text=Your+Portfolio+Preview)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with dark/light mode
- 📝 **Markdown Configuration** - Edit content without touching code
- ⚡ **Lightning Fast** - Optimized with Vite, code splitting, and lazy loading
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎯 **SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data
- 📄 **PDF Resume** - Auto-generate downloadable PDF resume
- 🎭 **Smooth Animations** - Framer Motion animations
- ♿ **Accessible** - WCAG compliant with ARIA labels
- 🚀 **Easy Deployment** - Deploy to Vercel, Netlify, or Cloudflare Pages
- 🎪 **Multiple Themes** - Light and dark mode support

## 🚀 Quick Start

### 1. Clone or Fork This Repository

```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Edit Your Content

All your portfolio content is in the `content/` folder. Edit these Markdown files:

- `content/profile.md` - Your name, title, contact info, career highlights
- `content/experience.md` - Work experience with achievements
- `content/projects.md` - Your projects and side projects
- `content/skills.md` - Technical skills organized by proficiency
- `content/education.md` - Educational background
- `content/certifications.md` - Certifications and languages

**Example:**

Open `content/profile.md` and update:

```markdown
name: John Doe
title: Full Stack Developer
email: john.doe@example.com
...
```

That's it! No coding required.

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 5. Build for Production

```bash
npm run build
```

Your portfolio will be built to the `dist/` folder.

## 📁 Project Structure

```
portfolio-template/
├── content/                 # 📝 Edit these files to customize your portfolio
│   ├── profile.md          # Personal info, contact, highlights
│   ├── experience.md       # Work experience
│   ├── projects.md         # Projects portfolio
│   ├── skills.md           # Technical skills
│   ├── education.md        # Education history
│   └── certifications.md   # Certifications & languages
│
├── client/
│   ├── public/             # Static assets
│   │   ├── _redirects      # SPA routing config
│   │   └── robots.txt      # SEO configuration
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── lib/            # Utilities
│   │   │   └── contentLoader.ts  # Markdown parser
│   │   └── pages/
│   │       └── home.tsx    # Main portfolio page
│   └── index.html          # HTML entry point
│
├── docs/                   # Deployment guides
│   ├── DEPLOY_VERCEL.md
│   ├── DEPLOY_NETLIFY.md
│   └── DEPLOY_CLOUDFLARE.md
│
├── vite.config.ts          # Vite configuration
├── wrangler.toml           # Cloudflare Pages config
└── package.json
```

## 🎨 Customization Guide

### Editing Content

All content is in Markdown files in the `content/` folder. Here's what each file controls:

#### profile.md
- Your name, title, and tagline
- Contact information (email, GitHub, LinkedIn, etc.)
- Career highlights badges
- Location and remote work status

#### experience.md
- Company name, role, and dates
- Job description
- Quantifiable achievements (use metrics!)
- Technologies used

#### projects.md
- Project title and description
- Project type (Enterprise, Open Source, etc.)
- Key metrics and impact
- Technology stack
- Links (GitHub, live demo)

#### skills.md
- Skills organized by proficiency level
- Expert, Advanced, Proficient, Familiar
- Tools & Platforms

#### education.md
- University/institution name
- Degree and field of study
- Graduation dates
- Courses taken
- Graduation project

#### certifications.md
- Professional certifications
- Language proficiencies

### Changing Colors/Theme

Edit `client/src/index.css` to customize colors:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --foreground: 222.2 84% 4.9%;
  /* ... more colors ... */
}
```

### Adding Social Links

Edit `content/profile.md`:

```markdown
## Contact
github: yourusername
linkedin: yourprofile
twitter: yourhandle
```

The template will automatically generate icon buttons.

## 📤 Deployment

Choose your preferred platform:

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

📖 [Full Vercel Guide](docs/DEPLOY_VERCEL.md)

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
npm run build
netlify deploy --prod --dir=dist
```

📖 [Full Netlify Guide](docs/DEPLOY_NETLIFY.md)

### Cloudflare Pages

```bash
# Install Wrangler
npm i -g wrangler

# Login and deploy
wrangler login
npm run build
npx wrangler pages deploy dist --project-name=your-portfolio
```

📖 [Full Cloudflare Guide](docs/DEPLOY_CLOUDFLARE.md)

### GitHub Pages

1. Update `vite.config.ts` base URL:
```typescript
base: '/your-repo-name/',
```

2. Build and deploy:
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 🎯 Best Practices

### Writing Achievement Bullets

❌ **Bad**: "Worked on improving the application"
✅ **Good**: "Improved application load time by 45% through Redis caching, reducing database queries by 60%"

Always include:
- **Action** - What you did
- **Metric** - Quantifiable result
- **Impact** - Business value

### Project Descriptions

Include:
- Problem you solved
- Technologies used
- Scale/impact (users, transactions, etc.)
- Your specific role

### Skills Organization

- **Expert**: Technologies you use daily
- **Advanced**: Technologies you're proficient with
- **Proficient**: Technologies you can work with effectively
- **Familiar**: Technologies you have experience with

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Type Checking
npm run check            # Run TypeScript type checking

# Testing (if added)
npm run test             # Run tests
```

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### TypeScript Errors

```bash
# Check for type errors
npm run check
```

### Content Not Updating

- Make sure you edited the correct `.md` file in `content/` folder
- Restart the dev server: `Ctrl+C` then `npm run dev`
- Clear browser cache

### PDF Download Not Working

The PDF is generated client-side using jsPDF. It's lazy-loaded for performance. If it's not working:
- Check browser console for errors
- Try a different browser
- Ensure JavaScript is enabled

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

## 💬 Support

- 📖 [Documentation](docs/)
- 🐛 [Issue Tracker](https://github.com/yourusername/portfolio-template/issues)
- 💡 [Discussions](https://github.com/yourusername/portfolio-template/discussions)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [trgcyln](https://turgay.io)
