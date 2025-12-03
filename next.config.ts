/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/((?!api|checkout|payment|callback).*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              
              script-src 'self' 'unsafe-inline' 'unsafe-eval'
                https://www.googletagmanager.com
                https://www.google-analytics.com
                https://my.click.uz
                https://overbridgenet.com
                blob:;
              
              style-src 'self' 'unsafe-inline';
              
              img-src 'self' blob: data: https:;
              
              font-src 'self' data:;
              
              connect-src 'self'
                https://api.bunyodoptom.uz
                http://localhost:4000
                https://www.google-analytics.com
                https://www.googletagmanager.com
                https://my.click.uz
                https://overbridgenet.com;
              
              frame-src 'self' https://www.googletagmanager.com;
              
              frame-ancestors 'self';
              
              worker-src 'self' blob:;
            `.replace(/\s+/g, " "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
