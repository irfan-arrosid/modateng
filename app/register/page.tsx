"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    try {
      await axios.post("api/users", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      router.push("/login");
    } catch (error) {
      console.error("Register error:", error);
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
            <div className="text-neutral font-bold text-5xl mt-4">
              Create an account
            </div>
            <div className="form-control mt-10">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full text-base"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control mt-4">
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
            <div className="form-control mt-4">
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered w-full text-base"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mt-6 sm:mt-8 text-center">
              <button
                className="btn btn-secondary normal-case font-medium text-base text-base-100 w-full"
                type="submit"
                onClick={handleRegister}
              >
                Create account
              </button>
            </div>
            <div className="text-center mt-3">
              <div className="text-neutral text-base">
                Already have an account? <span> </span>
                <Link className="text-secondary" href="/login">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
