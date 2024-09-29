import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "editor",
};

export default function UserProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
