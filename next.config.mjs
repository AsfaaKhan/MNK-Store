/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
    // Allow unoptimized images for data URLs
    unoptimized: false,
  },
};

export default nextConfig;
