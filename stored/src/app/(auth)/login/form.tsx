"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const Form = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("Invalid email or password");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  function handleGithubLogin() {
    signIn("github", {
      callbackUrl,
    }).catch((error) => {
      console.error("failed to sign in with Github:", error);

      setError("Github login failed");
    });
  }

  if (error) {
  }

  return (
    <form
      onSubmit={handleCredentialsLogin}
      className="space-y-12 w-full sm:w-[400px]"
    >
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full color"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      <div className="w-full">
        <Button variant="default" className="w-full" size="lg">
          Login
        </Button>
      </div>
      <hr />
      <Button type="button" onClick={handleGithubLogin} className="w-full">
        <span className="mr-2">Sign in with Github</span> <FaGithub />
      </Button>
    </form>
  );
};
