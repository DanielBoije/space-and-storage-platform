import Link from "next/link";
import { RegistrationForm } from "./form";

export default function RegisterPage() {
  return (
    <div className="h-screen-minus-nav flex justify-center items-center bg-slate-100 dark:bg-neutral-800">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12 dark:bg-neutral-600">
        <h1 className="font-semibold text-2xl dark:text-neutral-200">
          Create your Account
        </h1>
        <RegistrationForm />
        <div className="text-center">
          <span className="pr-2 dark:text-neutral-200">Have an account?</span>
          <Link
            className="text-indigo-500 hover:underline dark:text-indigo-300"
            href="/login"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
