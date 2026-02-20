/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'framer-motion': require('path').resolve(__dirname, 'lib/framer-motion.tsx')
    };
    return config;
  }
};

module.exports = nextConfig;
