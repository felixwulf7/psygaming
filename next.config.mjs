/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nextjs.org'], // Allow images from nextjs.org (for the default template)
  },
  // Enable ISR for quick rebuilds
  experimental: {
    cacheMaxMemorySize: 50, // Number of ISR pages to cache in memory
  },
};

export default nextConfig;
