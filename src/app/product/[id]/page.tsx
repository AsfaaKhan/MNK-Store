import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
      } as Product;
    }

    return null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const isDataUrl = product.imageUrl?.startsWith('data:');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link
          href="/"
          className="text-orange-600 hover:text-orange-700 font-medium"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Product Details */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Product Image */}
          <div className="relative h-96 md:h-auto bg-gray-100">
            {isDataUrl ? (
              <img
                src={product.imageUrl}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={product.imageUrl || '/placeholder-product.jpg'}
                alt={product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>

          {/* Product Info */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full w-fit mb-4">
              {product.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <span className="text-4xl font-bold text-orange-600">
                Rs{product.price.toLocaleString()}
              </span>
            </div>

            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
            >
              <span>Buy on Daraz</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <p className="text-sm text-gray-500 mt-4">
              Clicking &quot;Buy on Daraz&quot; will redirect you to the official Daraz website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
