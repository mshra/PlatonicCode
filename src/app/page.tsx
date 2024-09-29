"use client";
import Navbar from "@/components/Navbar/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    redirect("/topics");
  }

  return (
    <>
      <Navbar />
    </>
  );
}
