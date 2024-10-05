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
import { ChevronRight } from "lucide-react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import ShimmerButton from "./ui/shimmer-button";

const GetStarted = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="rounded-md text-black py-1 px-2 flex justify-center items-center">
          <ShimmerButton className="mt-4 flex justify-center items-center bg-white">
            <span className="flex gap-1 justify-center items-center whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Get Started <ChevronRight size={20} />
            </span>
          </ShimmerButton>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center justify-center gap-2">
              Sign In with
              <FcGoogle size={18} />
            </AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction
            className="mx-16 flex items-center justify-center"
            onClick={() => signIn("google")}
          >
            Continue
          </AlertDialogAction>
          <AlertDialogCancel className="mx-16 flex items-center justify-center">
            Cancel
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default GetStarted;
