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
  title: "Bunyod Optom | Дистрибьюторская фирма",
  description: "Bunyod Optom - Eng yaxshi narxlar, keng assortiment, tez yetkazib berish",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}  antialiased`}
      >
        <Providers>
          <div className="min-h-[100dvh] flex flex-col">
            <Header />
            <main className="flex flex-auto flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
