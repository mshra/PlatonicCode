import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <div className="flex gap-8 items-center font-serif">
        <Button className="w-full sm:w-auto" onClick={() => signIn()}>
          <LogIn className="mr-2 h-4 w-4" />
          Sign In
        </Button>
      </div>
    </>
  );
}
