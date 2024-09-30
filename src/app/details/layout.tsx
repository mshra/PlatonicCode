import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fill Details",
};

export default function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
