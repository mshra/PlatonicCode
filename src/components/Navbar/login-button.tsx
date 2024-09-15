import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="flex gap-8 items-center font-serif">
        <Button className="w-full sm:w-auto" onClick={() => signIn()}>
          <LogIn className="mr-2 h-4 w-4" />
          Sign In
        </Button>

        <Link href="/signup">
          <Button
            variant="outline"
            className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary-foreground"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Sign Up
          </Button>
        </Link>
      </div>
    </>
  );
}
