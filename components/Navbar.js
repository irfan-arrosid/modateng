import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import ButtonLogOut from "./ButtonLogOut";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="navbar h-[70px] px-2.5 sm:px-5 lg:px-10">
      <Link className="logo text-primary font-bold text-2xl" href="/">
        Modateng
      </Link>
      {session?.user ? (
        <ButtonLogOut />
      ) : (
        <ul className="flex ml-auto items-center gap-2">
          <li>
            <Link
              className="btn btn-ghost text-black font-medium normal-case text-base"
              href="/login"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              className="btn btn-secondary text-base-100 font-medium normal-case text-base"
              href="/register"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
