// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",        // service worker qayerda bo‘ladi
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // dev rejimda ishlamasin
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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

// PWA bilan birga export qilamiz
module.exports = withPWA(nextConfig);
