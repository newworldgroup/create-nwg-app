/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // images: {
  //   domains: ["domain.com"],
  // },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
