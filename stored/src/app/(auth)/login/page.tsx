import Link from "next/link";
import { Form as LoginForm } from "./form";

export default function LoginPage() {
  return (
    <div className="h-screen-minus-nav flex justify-center items-center bg-slate-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl">Login</h1>
        <LoginForm />
        <div className="text-center">
          <span className="pr-2">Need to create an account?</span>
          <Link className="text-indigo-500 hover:underline" href="/login">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
