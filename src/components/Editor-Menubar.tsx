"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Play } from "lucide-react";
import Link from "next/link";

export function EditorMenubar() {
  return (
    <>
      <Menubar className="flex justify-around">
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"/"}>Home</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-center cursor-pointer">
            <Play />
            Run
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
