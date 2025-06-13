import Link from "next/link";
import { Form as LoginForm } from "./form";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="h-screen-minus-nav flex justify-center items-center bg-slate-100 dark:bg-neutral-800">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white dark:bg-neutral-600 rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl dark:text-neutral-100">Login</h1>
        <LoginForm />
        <div className="text-center">
          <span className="pr-2 dark:text-neutral-200">
            Need to create an account?
          </span>
          <Link
            className="text-indigo-500 hover:underline dark:text-indigo-300"
            href="/register"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
