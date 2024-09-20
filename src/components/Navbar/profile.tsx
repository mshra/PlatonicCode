"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Avatar, AvatarImage } from "@/components/ui/avatar";
  import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Login from "./login-button";
import { useRouter } from "next/navigation";



export const Profile = () => {
    const { data: session } = useSession();
    const router = useRouter();

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
            <DropdownMenuItem onClick={()=>{router.push(`${session.user?.email}`)}}>Profile</DropdownMenuItem>
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
    