"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    const signInData = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (signInData?.error) {
      console.log("Login error: ", signInData?.error);
    } else {
      router.refresh();
      router.push("/home");
    }
  };

  return (
    <div>
      <div className="h-screen flex justify-center">
        <div className="bg-neutral hidden lg:block lg:w-1/3"></div>
        <div className="w-full lg:w-2/3 flex justify-center items-center px-2.5 sm:px-5 lg:px-10">
          <div className="w-full max-w-sm">
            <Link className="text-primary font-bold text-2xl" href="/">
              Modateng
            </Link>
            <div className="text-neutral font-bold text-5xl mt-4">Log in</div>
            <div className="form-control mt-10">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between mt-4 text-base text-light-gray">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <Link href="#" className="underline">
                Forgot password?
              </Link>
            </div>
            <div className="mt-6 sm:mt-8 text-center">
              <button
                className="btn btn-secondary normal-case font-medium text-base text-base-100 w-full"
                type="submit"
                onClick={handleLogin}
              >
                Log in
              </button>
            </div>
            <div className="text-center mt-3">
              <div className="text-neutral text-base">
                Dont have an account?<span> </span>
                <Link className="text-secondary" href="/register">
                  Create now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
