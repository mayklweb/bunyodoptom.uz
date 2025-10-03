import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/Providers/providers";
import { Footer, Header } from "./components";

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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  metadataBase: new URL("https://bunyodoptom.uz"),
  openGraph: {
    title: "Bunyod Optom distribyutorlik firmasi",
    description:
      "Bunyod Optom - Eng yaxshi narxlar, keng assortiment, tez yetkazib berish",
    url: "https://bunyodoptom.uz",
    siteName: "Bunyod Optom",
    images: [
      {
        url: "/logo1.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/logo1.svg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunyod Optom distribyutorlik firmasi",
    description:
      "Bunyod Optom - Eng yaxshi narxlar, keng assortiment, tez yetkazib berish",
    images: ["/logo1.svg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}  antialiased`}>
        <Providers>
          <div className="min-h-[100dvh] flex flex-col">
            <Header />
            <main className="flex flex-auto flex-col">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
