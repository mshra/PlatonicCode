"use client";
import { Construction, Hammer } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UnderConstruction() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-full">
      <Construction />
      <div
        className="hover:underline hover:decoration-red-400 cursor-pointer"
        onClick={() => router.push("/topics")}
      >
        Page under construction. Click here to Go back.
      </div>
      <Hammer />
    </div>
  );
}
