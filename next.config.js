/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["c.tenor.com"],
  },
};

module.exports = nextConfig;
