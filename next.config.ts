/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              
              script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:
                https://www.googletagmanager.com
                https://maps.googleapis.com
                https://www.google-analytics.com
                https://my.click.uz;
              
              script-src-elem 'self' 'unsafe-inline' blob:
                https://www.googletagmanager.com
                https://maps.googleapis.com
                https://www.google-analytics.com
                https://my.click.uz;

              style-src 'self' 'unsafe-inline';

              img-src 'self' data: blob: https:;

              font-src 'self' data: https:;

              connect-src 'self'
                https://api.bunyodoptom.uz
                https://www.bunyodoptom.uz
                https://api.click.uz
                https://api-dev.click.uz
                https://www.google-analytics.com
                https://region1.google-analytics.com
                https://my.click.uz
                blob:;

              frame-src 'self' https://my.click.uz https://www.googletagmanager.com;
              worker-src 'self' blob:;
            `.replace(/\s+/g, " "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
