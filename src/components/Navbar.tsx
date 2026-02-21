'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Daraz Store</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === '/'
                  ? 'text-white'
                  : 'text-orange-100 hover:text-white'
              }`}
            >
              Home
            </Link>

            {!loading && (
              <>
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/admin"
                      className={`text-sm font-medium transition-colors ${
                        pathname === '/admin'
                          ? 'text-white'
                          : 'text-orange-100 hover:text-white'
                      }`}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-sm font-medium text-orange-100 hover:text-white transition-colors"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className={`text-sm font-medium transition-colors ${
                      pathname === '/login'
                        ? 'text-white'
                        : 'text-orange-100 hover:text-white'
                    }`}
                  >
                    Admin Login
                  </Link>
                )}
              </>
            )}
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
