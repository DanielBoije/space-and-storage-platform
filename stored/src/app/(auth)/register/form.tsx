"use client";

import ErrorCode from "@/app/_constants/errorCodes";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<ReactNode>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      router.push("/");
    } else {
      const error = await response.json();

      if (error.code === ErrorCode.EMAIL_ALREADY_IN_USE) {
        setError(
          <div>
            <p>{error.message}</p>
            <Link className="text-indigo-200" href="/forgot-password">
              Forgot password?
            </Link>
          </div>,
        );
      } else {
        setError(error.message ?? "Unknown error");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12 w-full sm:w-[400px]">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          className="w-full"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
        />
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      <div className="w-full">
        <Button className="w-full" size="lg">
          Register
        </Button>
      </div>
      {!!error && (
        <div className="border border-red-400 text-neutral-200 py-2 px-4 rounded-md">
          <p className="font-bold">Registration failed</p>
          {error}
        </div>
      )}
    </form>
  );
};
