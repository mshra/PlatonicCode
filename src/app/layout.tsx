import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";
import Navbar from "@/components/Navbar/Navbar";
import icon from "@/app/favicon.ico"
import Providers from "@/providers/session-provider";
import { TestCaseStoreProvider } from "@/providers/testcase-store-provider";
  
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
        <Providers>
          <TestCaseStoreProvider>{children}</TestCaseStoreProvider>
        </Providers>
      </body>
    </html>
  );
}
