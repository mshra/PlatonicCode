"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Login from "./login-button";

const Profile = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session.user?.image as string} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-not-allowed">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex gap-8 items-center font-serif">
      <Login />
    </div>
  );
};

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <header className="flex justify-between items-center w-full border-b px-10 py-3">
        <Link
          href="/"
          className="font-cardo text-2xl hover:scale-110  transition-all ease-out"
        >
          <div className="flex gap-1 items-center">
            <Image src={"/logo.png"} height={50} width={50} alt={"logo"} />
            PlatonicCode
          </div>
        </Link>

        <div className="hover:scale-105 transition-all ease-out">
          <Profile />
        </div>
      </header>
    </motion.div>
  );
}
