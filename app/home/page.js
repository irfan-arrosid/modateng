import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Navbar />
      {session?.user ? (
        <h1>Hi, {session?.user.name}. Welcome to HOME</h1>
      ) : (
        <div>
          <h1>You cannot access this page. Please login first!</h1>
        </div>
      )}
      <Footer />
    </div>
  );
}
