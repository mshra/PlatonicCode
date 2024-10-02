"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import chat from "@/image/Screenshot 2024-10-01 182230.png"; 
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";
import { BackgroundGradient } from "./ui/background-gradient";
import VideoPlayer from "./video-player";


export function HeroScroll() {
  return (
    <div className="">
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
        <>
        {/* <Image
          src={chat}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-xl object-cover h-full object-left-top"
          draggable={false}
        /> */}

    {/* <video width="100%" height="auto" controls>
      <source src="/myvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
        <VideoPlayer/>
        </>
      </ContainerScroll>
     
      
    </div>
  );
}
