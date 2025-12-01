const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' blob: https://my.click.uz https://www.googletagmanager.com https://maps.googleapis.com https://www.google-analytics.com;
      connect-src 'self' https://my.click.uz;
      frame-src https://my.click.uz;
      img-src 'self' data: blob:;
      style-src 'self' 'unsafe-inline';
    `.replace(/\s{2,}/g, " "),
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: "/((?!api|checkout|payment|callback).*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
            default-src 'self';
            script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://maps.googleapis.com https://www.google-analytics.com;
            style-src 'self' 'unsafe-inline';
            img-src 'self' blob: data: https:;
            connect-src 'self' https://api.bunyodoptom.uz http://localhost:4000;
            frame-ancestors 'self';
          `.replace(/\s+/g, " "),
          },
        ],
      },
    ];
  },
};
