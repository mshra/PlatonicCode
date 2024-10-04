"use client";

import Navbar from "@/components/Navbar/Navbar";
import TopicsList from "@/components/TopicsList";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Topics() {
  useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  return (
    <>
      <Navbar />
      <TopicsList />
    </>
  );
}
