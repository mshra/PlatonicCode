import Providers from "@/providers/session-provider";
import { TestCaseStoreProvider } from "@/providers/testcase-store-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlatonicCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="overflow-x-hidden bg-[#0A0A0A] text-white">
        <Providers>
          <TestCaseStoreProvider>{children}</TestCaseStoreProvider>
        </Providers>
      </body>
    </html>
  );
}
