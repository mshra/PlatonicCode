import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

function SignInButton() {
  return (
    <Button className="w-full sm:w-auto">
      <LogIn className="mr-2 h-4 w-4" />
      Sign In
    </Button>
  );
}

function SignUpButton() {
  return (
    <Button
      variant="outline"
      className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary-foreground"
    >
      <UserPlus className="mr-2 h-4 w-4" />
      Sign Up
    </Button>
  );
}

export default function Navbar() {
  return (
    <header className="w-full flex justify-between border-b rounded-full p-4">
      <title>Finance guru</title>
      <SignInButton />
      <SignUpButton />
    </header>
  );
}
