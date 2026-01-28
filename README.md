# GitHub Advanced CI/CD Demo

A Next.js project demonstrating continuous integration and continuous deployment using GitHub Actions.

## 🚀 CI/CD Setup Checklist

### 1. Project Configuration File ✅
- **File**: `package.json`
- Contains project dependencies and scripts
- Defines how to build and run the application

### 2. Runnable Commands ✅
```bash
npm install          # Install dependencies
npm run build        # Build the production application
npm run start        # Start the production server
npm run lint         # Run ESLint for code quality
npm run dev          # Start development server
```

### 3. CI Configuration File (.yml) ✅
- **Location**: `.github/workflows/main.yml`
- Defines automated workflows for testing and deployment
- Triggers on push and pull requests

### 4. Upload on GitHub ✅
```bash
git add .
git commit -m "Setup CI/CD pipeline"
git push origin main
```

---

## 📋 Understanding the GitHub Actions Workflow

### Workflow File: `.github/workflows/main.yml`

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run linter
        run: npm run lint
        
      - name: Build application
        run: npm run build
```

### What Each Section Does:

**`name`**: The workflow name displayed in GitHub Actions tab

**`on`**: Triggers that start the workflow
- `push` to `main` branch → Runs on every commit to main
- `pull_request` to `main` → Runs on every PR targeting main

**`jobs`**: Tasks to execute
- `build-and-test`: Job name
- `runs-on: ubuntu-latest`: Uses Ubuntu Linux environment

**`steps`**: Sequential actions
1. **Checkout code**: Downloads your repository code
2. **Setup Node.js**: Installs Node.js version 18
3. **Install dependencies**: Runs `npm ci` (clean install)
4. **Run linter**: Checks code quality with ESLint
5. **Build application**: Compiles the Next.js app

---

## 🔄 What Happens on Pull Requests?

### Scenario 1: Teammate Adds Good Code ✅

```
Developer creates PR → GitHub Actions triggers automatically
  ↓
1. Checkout code ✅
2. Setup Node.js ✅
3. Install dependencies ✅
4. Run linter ✅ (No errors found)
5. Build application ✅ (Build successful)
  ↓
Result: All checks pass ✅
  ↓
Green checkmark appears on PR
  ↓
Safe to merge! 🎉
```

**What you see:**
- ✅ Green checkmark next to the PR
- "All checks have passed" message
- Safe to merge into main branch
- Team can review and approve confidently

---

### Scenario 2: Teammate Adds Problematic Code ❌

```
Developer creates PR → GitHub Actions triggers automatically
  ↓
1. Checkout code ✅
2. Setup Node.js ✅
3. Install dependencies ✅
4. Run linter ❌ (ESLint errors detected!)
   OR
5. Build application ❌ (Build failed!)
  ↓
Result: Checks failed ❌
  ↓
Red X appears on PR
  ↓
Cannot merge until fixed! 🚫
```

**What you see:**
- ❌ Red X next to the PR
- "Some checks were not successful" message
- Detailed error logs in the Actions tab
- Merge button is blocked (if branch protection enabled)

**Common Issues Caught:**
- **Linting errors**: Unused variables, formatting issues, code style violations
- **Build errors**: Syntax errors, missing imports, type errors
- **Dependency issues**: Missing packages, version conflicts

**Developer must:**
1. Check the failed workflow logs
2. Fix the errors locally
3. Push new commits to the PR
4. Wait for checks to pass ✅
5. Then merge

---

## 🛡️ Benefits of This CI/CD Pipeline

- **Automated Quality Checks**: Every PR is tested automatically
- **Prevent Bad Code**: Broken code can't reach production
- **Fast Feedback**: Developers know immediately if something breaks
- **Consistent Standards**: Everyone's code is checked the same way
- **Safe Deployments**: Only working code gets merged

---

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

---

## 📚 Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint
- **CI/CD**: GitHub Actions
- **Deployment**: Ready for Vercel/Netlify/AWS

---

**Made by Desmond SIM ITClub GitHub Advanced 2026 Demo on CI/CD**
