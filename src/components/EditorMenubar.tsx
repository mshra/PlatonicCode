"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Play, Settings } from "lucide-react";
import Link from "next/link";

export function EditorMenubar() {
  return (
    <>
      <Menubar className="flex justify-around m-2">
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-gray-700">
            <Link href={"/"}>Home</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer hover:bg-gray-700">
            <Play className="text-[#28c244]" />
            Run
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Settings />
            Settings
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
