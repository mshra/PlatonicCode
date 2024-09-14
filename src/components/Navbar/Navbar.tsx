"use client";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Login from "./login-button";

function SignUp() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Link href="/">
        <Button
          variant="outline"
          className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary-foreground"
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Sign Up
        </Button>
      </Link>
    );
  }
}

export default function Navbar() {
  return (
    <header className="w-full flex justify-around border-b rounded-full p-4">
      <Link href="/" className="font-cardo text-4xl">
        FinanceGuru
      </Link>
      <div className="flex gap-8 items-center font-serif">
        <Login />
        <SignUp />
      </div>
    </header>
  );
}
