"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/Navbar/Navbar";
import { HeroScroll } from "@/components/scroll-hero";

import Particles from "@/components/three3d-model";
import GridPattern from "@/components/ui/animated-grid-pattern";
import BlurFade from "@/components/ui/blur-fade";
import ShimmerButton from "@/components/ui/shimmer-button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight";
import { StarsBackground } from "@/components/ui/stars-background";


import TypingAnimation from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
 

  return (
    <div className="h-screen">
      <Navbar />
      <StarsBackground/>

      <div className="flex justify-center items-center h-screen border-none ">

        <div className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden rounded-lg  bg-background p-20 md:shadow-xl">
          <div className="flex flex-col">

            <BlurFade duration={0.5}>
              <p className="z-10 whitespace-pre-wrap text-center text-5xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-2">
                Unlock the Power of Thought-Driven Learning
              </p>
            </BlurFade>
            <BlurFade duration={0.6}>
              <TypingAnimation
                duration={100}
                text="Empowering students to learn and think using AI"
                className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mt-2"
              />
            </BlurFade>
            <BlurFade>
              <div className="flex justify-center items-center">
                <ShimmerButton className="mt-4 flex justify-center items-center">
                  <span className="flex gap-1 justify-center items-center whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Get Started <ChevronRight size={20} />
                  </span>
                </ShimmerButton>
              </div>
            </BlurFade>

            <ShootingStars />
          <StarsBackground/>
          
           
          </div>

          {/* <GridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        /> */}
        </div>
        <div>
          <div className="">
            <Particles />
          </div>

        </div>
      </div>
      <div className="">
        <HeroScroll />

      </div>

      <div>
        <hr className="bg-white my-4" />
        <Footer />
        
      </div>

    </div>
  );
}
