# Daraz Affiliate Store

A modern e-commerce affiliate store built with Next.js 15 and Firebase. Browse products and get redirected to Daraz for purchases.

## 🚀 Features

- **Public Storefront**: Browse products in a beautiful grid layout
- **Product Details**: View full product information with large images
- **Admin Dashboard**: Secure CRUD operations for products
- **Image Upload**: Firebase Storage integration for product images
- **Authentication**: Firebase Auth for admin access
- **Responsive Design**: Works on all devices
- **Real-time Updates**: Live product updates using Firestore

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Backend**: Firebase (Firestore, Auth, Storage)
- **Hosting**: Vercel ready

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Firebase account

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable the following services:

   **Firestore Database:**
   - Go to Firestore Database → Create database
   - Start in **test mode** (we'll add security rules later)
   - Choose a location closest to your users

   **Authentication:**
   - Go to Authentication → Get started
   - Enable **Email/Password** sign-in method

   **Storage:**
   - Go to Storage → Get started
   - Start in **test mode** (we'll add security rules later)

4. Register a Web App:
   - Go to Project Settings (gear icon)
   - Scroll to "Your apps" section
   - Click the Web icon (`</>`)
   - Register your app with a nickname
   - Copy the Firebase configuration

5. Create `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

6. Paste your Firebase config into `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Deploy Security Rules

**Firestore Rules:**
1. Go to Firestore Database → Rules
2. Copy the contents of `firestore.rules`
3. Paste and publish

**Storage Rules:**
1. Go to Storage → Rules
2. Copy the contents of `storage.rules`
3. Paste and publish

### 4. Create Admin User

1. Run the development server:
```bash
npm run dev
```

2. Go to `http://localhost:3000/login`
3. Enter your desired admin email and password
4. You'll see an error (user doesn't exist yet)
5. Go to Firebase Console → Authentication → Users
6. Click "Add user" and create the same email/password

### 5. Start Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your store.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page (product grid)
│   ├── layout.tsx            # Root layout with Navbar
│   ├── login/
│   │   └── page.tsx          # Admin login page
│   ├── admin/
│   │   └── page.tsx          # Admin dashboard (CRUD)
│   └── product/
│       └── [id]/
│           └── page.tsx      # Product detail page
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── ProductCard.tsx       # Product card component
│   └── ProductCardSkeleton.tsx # Loading skeleton
├── contexts/
│   └── AuthContext.tsx       # Auth state provider
├── lib/
│   └── firebase.ts           # Firebase configuration
└── types/
    └── product.ts            # TypeScript interfaces
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme. The default uses orange (`#f97316`).

### Branding
Update the store name in:
- `src/app/layout.tsx` (metadata title)
- `src/components/Navbar.tsx` (logo text)

## 🚀 Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables (copy from `.env.local`)
5. Click "Deploy"

### 3. Environment Variables on Vercel

In your Vercel project settings:
1. Go to Settings → Environment Variables
2. Add all variables from `.env.local`
3. Redeploy after adding variables

## 📝 Usage Guide

### Adding Products

1. Login at `/login` with admin credentials
2. Click "Add Product" on the dashboard
3. Fill in product details:
   - Upload product image
   - Enter title, category, price
   - Add description
   - Paste Daraz affiliate link
4. Click "Add Product"

### Managing Products

- **Edit**: Click "Edit" on any product to modify details
- **Delete**: Click "Delete" to remove a product (confirms first)
- **View**: Click "View Details" to see the public product page

## 🔒 Security

- Only authenticated admins can manage products
- Public users can only view products
- Images are validated (max 5MB, images only)
- Firestore rules prevent unauthorized access

## 🐛 Troubleshooting

**Firebase not connecting:**
- Check `.env.local` values match Firebase console
- Ensure environment variables are prefixed with `NEXT_PUBLIC_`
- Restart dev server after changing env variables

**Image upload fails:**
- Verify Storage is enabled in Firebase
- Check Storage rules are deployed
- Ensure image is under 5MB

**Authentication fails:**
- Verify Email/Password auth is enabled
- Check user exists in Firebase Console → Authentication

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Support

For issues or questions, please check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
