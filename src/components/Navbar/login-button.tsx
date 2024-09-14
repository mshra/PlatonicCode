import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useSession, signIn } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return <></>;
  }

  return (
    <Button className="w-full sm:w-auto" onClick={() => signIn()}>
      <LogIn className="mr-2 h-4 w-4" />
      Sign In
    </Button>
  );
}
