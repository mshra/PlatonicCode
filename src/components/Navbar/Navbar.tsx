"use client";
import Link from "next/link";
import { Profile } from "./profile";






  
export default function Navbar() {
  return (
    <header className="w-screen flex justify-around border-b rounded-full p-4">
      <Link href="/" className="font-cardo text-4xl">
        FinanceGuru
      </Link>
      <Profile />
    </header>
  );
}
