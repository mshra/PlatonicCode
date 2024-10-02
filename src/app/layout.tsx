import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";
import { Cardo, Bellefair } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import icon from "@/app/favicon.ico"


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
  title: "PlatonicCode",
  description:"Socratic AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
