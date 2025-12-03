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
              
              /* JS scripts */
              script-src 
                'self' 
                'unsafe-inline' 
                https://www.googletagmanager.com 
                https://www.google-analytics.com 
                https://maps.googleapis.com;

              /* Styles */
              style-src 
                'self' 
                'unsafe-inline';

              /* Images */
              img-src 
                'self' 
                blob: 
                data: 
                https:;

              /* Fonts */
              font-src 
                'self' 
                data: 
                https:;

              /* Connections (Very Important!) */
              connect-src 
                'self' 
                https://api.bunyodoptom.uz 
                http://localhost:4000 
                https://www.google-analytics.com 
                https://www.googletagmanager.com;

              /* iFrames */
              frame-src 
                'self' 
                https://www.googletagmanager.com;

              frame-ancestors 'self';

              /* Workers */
              worker-src 'self' blob:;
            `.replace(/\s+/g, " "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
