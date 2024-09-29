import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-white rounded-md text-black py-1 px-2 flex justify-center items-center">
        <LogIn className="mr-2 h-4 w-4" />
        Sign In
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center justify-center gap-2">
            Sign In with
            <FcGoogle size={18} />
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogAction className="mx-16 flex items-center justify-center" onClick={() => signIn("google")}>
          Continue
        </AlertDialogAction>
        <AlertDialogCancel className="mx-16 flex items-center justify-center">Cancel</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}
