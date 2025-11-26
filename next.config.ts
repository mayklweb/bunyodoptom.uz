const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

// CSP headerlari
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      script-src 'self' 'unsafe-inline' blob: https://my.click.uz https://click.uz https://www.googletagmanager.com https://maps.googleapis.com https://www.google-analytics.com;
      script-src-elem 'self' 'unsafe-inline' blob: https://my.click.uz https://click.uz https://www.googletagmanager.com https://maps.googleapis.com https://www.google-analytics.com;
      object-src 'none';
      base-uri 'self';
    `.replace(/\s{2,}/g, " "),
  },
];

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

  // ⭐⭐ MUHIM: CSP shu yerga qo‘shiladi
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
