import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Topics",
};

export default function TopicsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
