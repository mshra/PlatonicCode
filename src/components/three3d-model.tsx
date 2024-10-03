import Spline from "@splinetool/react-spline";
import { StarsBackground } from "./ui/stars-background";

export default function App() {
  return (
    <div className="relative h-screen  w-[600px]">
      <Spline scene="https://prod.spline.design/bSPnKs7byL1FS411/scene.splinecode" />
      <div className="bg-[#0A0A0A] w-[700px] py-6 absolute z-10 bottom-2"></div>
      <StarsBackground />
    </div>
  );
}
