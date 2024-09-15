"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Login from "./login-button";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const { data: session } = useSession();

  if (session) {
    const profilePicture = session.user?.image as string;

    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={profilePicture} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
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
    <header className="w-full flex justify-around border-b rounded-full p-4">
      <Link href="/" className="font-cardo text-4xl">
        FinanceGuru
      </Link>
      <Profile />
    </header>
  );
}
