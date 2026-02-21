# Quick Start Guide

Get your Daraz Affiliate Store running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable these services:
   - **Firestore Database** (start in test mode)
   - **Authentication** → Enable Email/Password
   - **Storage** (start in test mode)

4. Register a Web App:
   - Click gear icon → Project Settings
   - Scroll to "Your apps" → Click `</>` (Web)
   - Copy the config values

## Step 3: Configure Environment Variables

1. Copy the example file:
   ```bash
   # Windows Command Prompt
   copy .env.local.example .env.local
   
   # Or PowerShell
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` with your Firebase credentials:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

## Step 4: Deploy Security Rules

### Firestore Rules
1. Go to Firestore Database → Rules
2. Copy contents from `firestore.rules`
3. Paste and click **Publish**

### Storage Rules
1. Go to Storage → Rules
2. Copy contents from `storage.rules`
3. Paste and click **Publish**

## Step 5: Create Admin User

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:3000/login`

3. Try to login with your desired credentials (will fail)

4. Go to Firebase Console → Authentication → Users → **Add User**

5. Create the same email/password you tried

## Step 6: Start Adding Products!

1. Login at `http://localhost:3000/login`
2. Click "Add Product"
3. Upload image, fill details, add Daraz affiliate link
4. View your products at `http://localhost:3000`

---

## Project Structure

```
affiliate_daraz_store/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page
│   │   ├── login/page.tsx     # Admin login
│   │   ├── admin/page.tsx     # Dashboard
│   │   └── product/[id]/page.tsx  # Product details
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductCardSkeleton.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── lib/
│   │   └── firebase.ts
│   └── types/
│       └── product.ts
├── .env.local.example
├── firestore.rules
├── storage.rules
└── README.md
```

## Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Next Steps

- ✅ Add your first product
- ✅ Test all CRUD operations
- ✅ Customize colors/branding
- ✅ Deploy to Vercel (see DEPLOYMENT.md)

---

**Need Help?** Check `README.md` for detailed documentation.
