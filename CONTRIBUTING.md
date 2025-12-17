# Contributing to Portfolio Template

Thank you for your interest in contributing to the Portfolio Template! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-template.git
   cd portfolio-template
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Workflow

### Running the Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Type Checking

```bash
npm run check
```

## 🎯 What Can You Contribute?

### 1. Bug Fixes
- Found a bug? Please open an issue first
- Include steps to reproduce
- Then submit a PR with the fix

### 2. New Features
- Discuss major changes in an issue first
- Keep features modular and optional
- Update documentation

### 3. Documentation
- Fix typos and grammar
- Add examples
- Improve explanations
- Add translations

### 4. Performance Improvements
- Profile before and after
- Include benchmarks in PR description

### 5. Design Improvements
- Follow existing design system
- Maintain dark/light mode compatibility
- Ensure responsive design

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's style
- [ ] TypeScript types are correct (`npm run check`)
- [ ] No console.log statements (except intentional)
- [ ] Responsive design tested
- [ ] Dark mode tested
- [ ] Documentation updated
- [ ] Deployment guides updated (if needed)

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How did you test this?

## Screenshots (if applicable)
Add screenshots here
```

## 🎨 Code Style

### TypeScript

```typescript
// ✅ Good
interface UserProps {
  name: string;
  email: string;
}

export function UserCard({ name, email }: UserProps) {
  return <div>{name}</div>;
}

// ❌ Avoid
function UserCard(props: any) {
  return <div>{props.name}</div>;
}
```

### React Components

```typescript
// ✅ Functional components with TypeScript
export function MyComponent({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

// ❌ Avoid class components
class MyComponent extends React.Component {
  // ...
}
```

### CSS/Tailwind

```typescript
// ✅ Use Tailwind classes
<div className="flex items-center gap-4 p-6">

// ❌ Avoid inline styles
<div style={{ display: 'flex', padding: '24px' }}>
```

## 🧪 Testing Guidelines

Currently, this project doesn't have automated tests, but when adding them:

- Use Jest for unit tests
- Use Cypress or Playwright for E2E tests
- Aim for >80% coverage for new features

## 📚 Documentation Standards

### Code Comments

```typescript
// ✅ Good comments explain "why"
// Lazy load PDF library to improve initial load time
const { jsPDF } = await import("jspdf");

// ❌ Bad comments explain "what" (obvious from code)
// Create a new jsPDF instance
const doc = new jsPDF();
```

### README Updates

- Keep it concise
- Add examples
- Update table of contents
- Check all links work

## 🐛 Reporting Bugs

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. Windows 11]
- Browser: [e.g. Chrome 120]
- Node version: [e.g. 20.10.0]

**Additional context**
Any other context about the problem.
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution**
A clear description of what you want to happen.

**Describe alternatives**
Other solutions you've considered.

**Additional context**
Any other context or screenshots.
```

## 🔄 Commit Message Guidelines

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add blog section to portfolio
fix: resolve mobile menu background issue
docs: update deployment guide for Vercel
style: format code with prettier
refactor: extract content loader to separate file
perf: implement lazy loading for PDF library
test: add tests for content parser
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, semicolons, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Maintenance (dependencies, build, etc.)

## 🏗️ Project Structure

```
portfolio-template/
├── content/           # Markdown content files
├── client/
│   ├── public/       # Static assets
│   └── src/
│       ├── components/  # React components
│       ├── lib/         # Utilities
│       └── pages/       # Page components
├── docs/             # Documentation
└── dist/             # Build output (ignored)
```

## 📦 Adding Dependencies

### When to Add

- Solves a real problem
- No existing solution in project
- Well-maintained (check last update)
- Small bundle size
- TypeScript support

### How to Add

```bash
npm install package-name
```

Update documentation if the dependency affects:
- Build process
- Deployment
- User configuration

## 🎉 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Given credit in documentation

## 📞 Questions?

- Open a [Discussion](https://github.com/yourusername/portfolio-template/discussions)
- Create an [Issue](https://github.com/yourusername/portfolio-template/issues)
- Contact maintainers

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive criticism
- Respect different viewpoints
- Show empathy

Thank you for contributing! 🙏
