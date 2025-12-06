# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages using GitHub Actions.

## Prerequisites

1. A GitHub account
2. Your project already pushed to a GitHub repository

## Step-by-Step Instructions

### 1. Push Your Code to GitHub

If you haven't already, initialize git and push your code:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/aandrewjuan1/portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/aandrewjuan1/portfolio`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions` (not "Deploy from a branch")
5. Save the settings

### 3. Configure Base Path (Important!)

Since your repository is named `portfolio` (not `username.github.io`), you need to set the base path:

1. Open `vite.config.js`
2. The base path should be set to `/portfolio/` (already configured)
3. If you rename your repository, update the base path accordingly

### 4. Trigger the Deployment

The GitHub Actions workflow will automatically run when you:
- Push to the `main` or `master` branch
- Manually trigger it from the **Actions** tab

### 5. Access Your Site

After deployment completes (usually takes 1-2 minutes), your site will be available at:
- `https://aandrewjuan1.github.io/portfolio/`

## Manual Workflow Trigger

You can also manually trigger the deployment:
1. Go to the **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the branch and click **Run workflow**

## Troubleshooting

### Site shows 404 or blank page
- Check that the base path in `vite.config.js` matches your repository name
- Ensure the workflow completed successfully in the Actions tab
- Wait a few minutes for GitHub Pages to propagate changes

### Build fails
- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Assets not loading
- Make sure the base path is correctly set in `vite.config.js`
- Check that image paths are relative (not absolute starting with `/`)

## Updating Your Site

Simply push changes to the `main` branch:
```bash
git add .
git commit -m "Update portfolio"
git push
```

The workflow will automatically rebuild and redeploy your site.
