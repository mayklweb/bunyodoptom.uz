import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/Providers/providers";
import { Footer, Header } from "./components";
import Head from "next/head";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bunyod Optom distribyutorlik firmasi",
  description:
    "Bunyod Optom - Eng yaxshi narxlar, keng assortiment, tez yetkazib berish",
  icons: {
    icon: "/logo1.svg",
  },
  manifest: "/manifest.json",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Manifest va mobil sozlamalari */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Bunyod Optom" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

        {/* Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval'
        https://www.googletagmanager.com
        https://www.google-analytics.com
        https://my.click.uz
        https://overbridgenet.com
        blob:;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: blob: https:;
      connect-src 'self'
        https://api.bunyodoptom.uz
        http://localhost:4000
        https://www.google-analytics.com
        https://www.googletagmanager.com
        https://my.click.uz
        https://overbridgenet.com;
      font-src 'self' data:;
      frame-src 'self' https://www.googletagmanager.com;
      frame-ancestors 'self';
      worker-src 'self' blob:;
    `.replace(/\s+/g, " ")}
        />
      </Head>

      <body className={`${montserrat.variable}  antialiased`}>
        <Providers>
          <div className="min-h-[100dvh] flex flex-col">
            <Header />
            <main className="flex flex-auto flex-col">{children}</main>
            <Footer />
          </div>
        </Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5S5R83M4GN"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5S5R83M4GN');
  `}
        </Script>
        <Script
          src="https://my.click.uz/click.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
