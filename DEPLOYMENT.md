# Deployment Guide

## Deploying to Vercel

1. **Push to GitHub**:
   - Initialize a git repository: `git init`
   - Add files: `git add .`
   - Commit: `git commit -m "Initial commit"`
   - Create a new repository on GitHub and push your code.

2. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard).
   - Click "Add New..." -> "Project".
   - Import your GitHub repository.

3. **Configure Project**:
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**:
   - Click "Deploy".
   - Vercel will build and deploy your site.

## Environment Variables
If you add backend features later, add your environment variables in the Vercel project settings.

## Analytics
To enable Vercel Analytics:
1. Go to your project dashboard on Vercel.
2. Click on the "Analytics" tab.
3. Click "Enable".
