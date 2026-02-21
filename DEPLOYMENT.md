# Deployment Guide

This guide will help you deploy your Daraz Affiliate Store to production.

## Prerequisites

- Git installed on your computer
- GitHub account
- Vercel account (free tier is sufficient)
- Firebase project set up

## Step 1: Push to GitHub

### Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Daraz Affiliate Store"

# Create main branch
git branch -M main
```

### Connect to GitHub

1. Go to [GitHub](https://github.com) and create a new repository
2. Copy the repository URL
3. Connect your local repo:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. **Go to Vercel**: [https://vercel.com](https://vercel.com)
2. **Sign in** with your GitHub account
3. **Click "New Project"**
4. **Import your Git repository**:
   - Select your GitHub account
   - Find and select your repository
   - Click "Import"

5. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

6. **Add Environment Variables**:
   Click "Environment Variables" and add each variable from your `.env.local`:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_FIREBASE_API_KEY` | Your API key |
   | `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Your auth domain |
   | `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Your project ID |
   | `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Your storage bucket |
   | `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Your sender ID |
   | `NEXT_PUBLIC_FIREBASE_APP_ID` | Your app ID |

7. **Click "Deploy"**

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Step 3: Post-Deployment Configuration

### Update Firebase Authorized Domains

1. Go to Firebase Console
2. Navigate to Authentication → Settings
3. Under "Authorized domains", add your Vercel domain:
   - `your-app.vercel.app`
4. Click "Add domain"

### Update Firestore & Storage Rules

Make sure your security rules are deployed:

**Firestore Rules:**
1. Go to Firestore Database → Rules
2. Ensure rules from `firestore.rules` are published

**Storage Rules:**
1. Go to Storage → Rules
2. Ensure rules from `storage.rules` are published

## Step 4: Test Your Deployment

1. Visit your deployed URL: `https://your-app.vercel.app`
2. Test the following:
   - ✅ Home page loads with products
   - ✅ Product detail pages work
   - ✅ Admin login works
   - ✅ Can add/edit/delete products
   - ✅ Image uploads work
   - ✅ Affiliate links redirect correctly

## Step 5: Custom Domain (Optional)

### Add Custom Domain in Vercel

1. Go to your Vercel project
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

### Update Firebase Authorized Domains

Add your custom domain to Firebase Authentication authorized domains.

## Environment Variables Reference

All environment variables must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

## Build & Deploy Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Lint code
npm run lint
```

## Troubleshooting

### Build Fails

**Error: Environment variables not found**
- Ensure all `NEXT_PUBLIC_*` variables are added in Vercel settings
- Redeploy after adding variables

**Error: Firebase not initialized**
- Check environment variable names are correct
- Verify Firebase config values are accurate

### Runtime Errors

**Authentication not working**
- Check Firebase Authentication is enabled
- Verify authorized domains include your Vercel URL

**Images not uploading**
- Ensure Firebase Storage is enabled
- Check Storage rules allow authenticated writes
- Verify storage bucket name is correct

## Performance Optimization

### Enable ISR (Incremental Static Regeneration)

The app uses Server Components by default. For better performance, you can add revalidation:

```typescript
// In page.tsx files
export const revalidate = 60; // Revalidate every 60 seconds
```

### Image Optimization

Next.js automatically optimizes images. For external images (from Firebase Storage), add to `next.config.ts`:

```typescript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
}
```

## Monitoring

### Vercel Analytics

1. Go to Vercel Dashboard → Your Project
2. Navigate to Analytics
3. Enable for real-time metrics

### Firebase Console

Monitor usage in Firebase Console:
- **Firestore**: Database → Usage
- **Storage**: Storage → Usage
- **Auth**: Authentication → Users

## Cost Estimation

### Vercel (Free Tier)
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic SSL

### Firebase (Free Tier - Spark Plan)
- ✅ Firestore: 1GB storage, 50K reads/day
- ✅ Storage: 5GB storage, 1GB/day downloads
- ✅ Auth: 10K users/month

For most small stores, the free tier is sufficient. Upgrade as needed.

## Continuous Deployment

Every push to the `main` branch will automatically trigger a deployment:

```bash
git add .
git commit -m "Update products"
git push origin main
# Vercel automatically deploys
```

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Firebase Documentation](https://firebase.google.com/docs)
