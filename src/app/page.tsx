"use client";

import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import Navbar from "@/components/Navbar/Navbar";
import { HeroScroll } from "@/components/scroll-hero";
import Particles from "@/components/three3d-model";
import BlurFade from "@/components/ui/blur-fade";
import ShimmerButton from "@/components/ui/shimmer-button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import TypingAnimation from "@/components/ui/typing-animation";
import { ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    redirect("/topics");
  }

  return (
    <div className="h-screen">
      <Navbar />

      <div className="flex justify-center items-center h-screen border-none ">
        <div className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden rounded-lg  bg-background p-20 md:shadow-xl">
          <div className="flex flex-col">
            <BlurFade duration={0.5}>
              <p className="z-10 whitespace-pre-wrap text-center text-5xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-2">
                Level up your undestanding with interactive based learning
              </p>
            </BlurFade>
            <BlurFade duration={0.6}>
              <TypingAnimation
                duration={100}
                text="Empowering learning and thinking for students using AI."
                className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mt-2"
              />
            </BlurFade>
            

            <ShootingStars />
            <StarsBackground />
            <BlurFade>
              <div className="flex justify-center items-center">
                <GetStarted/>
              </div>
            </BlurFade>
          </div>
        </div>
        <div>
          <div className="">
            <Particles />
          </div>
        </div>
      </div>
      <HeroScroll />

      <div>
        <hr className="bg-white my-4" />
        <Footer />
      </div>
    </div>
  );
}
