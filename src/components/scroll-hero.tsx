"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import chat from "@/image/Screenshot 2024-10-01 182230.png"; 

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="font-cardo text-4xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Master Data Structures and Algorithms with  <br />
              <span className="text-3xl md:text-[6rem] font-bold mt-1 leading-none">
              Socratic AI
              </span>
            </p>
          </>
        }
      >
        <Image
          src={chat}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
