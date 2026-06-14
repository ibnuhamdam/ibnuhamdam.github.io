/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  basePath: '',
};

module.exports = nextConfig;