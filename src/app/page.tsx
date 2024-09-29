"use client";

import GridPattern from "@/components/ui/animated-grid-pattern";
import BlurFade from "@/components/ui/blur-fade";
import ShimmerButton from "@/components/ui/shimmer-button";

import TypingAnimation from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";


export default function Home() {

  return (
    <>
      
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <div className="flex flex-col gap-2">
      <BlurFade duration={0.5}>
      <p className="z-10 whitespace-pre-wrap text-center text-7xl font-medium tracking-tighter text-black dark:text-white">
        Unlock the power of learning
      </p>
      </BlurFade>
      <BlurFade duration={0.6}>
      <TypingAnimation duration={100} text="Empowering students to learn, think, and solve using AI"/>
      </BlurFade>
      <BlurFade>
     <div className="flex justify-center items-center">
     <ShimmerButton className="flex justify-center items-center">
      <span className=" flex gap-1 justify-center items-center whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Get Started <ChevronRight size={20}/>
        </span>
      </ShimmerButton>
     </div>
      </BlurFade>
      </div>
      
    
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
    </>
  );
}


