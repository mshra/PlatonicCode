"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import VideoPlayer from "./video-player";

export function HeroScroll() {
  return (
    <div className="">
      <ContainerScroll
        titleComponent={
          <>
            <p className="font-cardo text-4xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Learn programming with <br />
              <span className="text-3xl md:text-[6rem] font-bold mt-1 leading-none">
                Agentic Teaching AI
              </span>
            </p>
          </>
        }
      >
        <VideoPlayer />
      </ContainerScroll>
    </div>
  );
}
