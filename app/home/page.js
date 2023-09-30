import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session?.user ? (
        <h1>Hi, {session?.user.name}. Welcome to HOME</h1>
      ) : (
        <div>
          <h1>You cannot access this page. Please login first!</h1>
          <Link
            className="btn btn-ghost text-black font-medium normal-case text-base"
            href="/login"
          >
            Log In
          </Link>
        </div>
      )}
    </div>
  );
}
