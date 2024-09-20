"use client"

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Login from "./login-button";

export const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleProfileClick = () => {
    if (session?.user?.email) {
      const username = session.user.email.split('@')[0];
      router.push(`/${username}`);
    }
  };

  if (!session) {
    return (
      <div className="flex gap-8 items-center font-serif">
        <Login />
      </div>
    );
  }

  const { name, image } = session.user || {};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar>
          <AvatarImage src={image || ''} alt={name || 'User'} />
          <AvatarFallback><User /></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleProfileClick}>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;