// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
