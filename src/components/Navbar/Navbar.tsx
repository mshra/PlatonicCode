"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Login from "./login-button";

import { LogOut } from "lucide-react";


export default function Navbar() {
  const {data:session} = useSession(); 

  return (
    <header className="w-full flex justify-around border-b rounded-full p-4">
      <Link href="/" className="font-cardo text-4xl">
        FinanceGuru
      </Link>
      <div className="flex gap-8 items-center font-serif">
        {!session?.user && <Login/>}
        {session?.user && (
           <Button 
           variant="outline"
           className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary-foreground" 
           onClick={() => signOut()}
           >
           <LogOut className="mr-2 h-4 w-4" />
           Sign Out
           </Button>
        )}
        
      </div>
    </header>
  );
}
