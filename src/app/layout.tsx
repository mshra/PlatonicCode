import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";
import { Cardo, Bellefair } from "next/font/google";

const cardo = Cardo({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
  variable: "--font-cardo",
  preload: true,
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-bellefair",
  preload: true,
});

export const metadata: Metadata = {
  title: "FinanceGuru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${cardo.className} ${bellefair.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
