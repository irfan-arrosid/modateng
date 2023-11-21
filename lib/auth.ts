import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { prisma } from "./db";
import { compare } from "bcrypt";

interface User {
  id: number,
  name: string,
  email: string,
  password: string
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Check if email is not exist
        const isEmailExist = await prisma.user.findFirst({
          where: { email: credentials?.email },
        });
        if (!isEmailExist) {
          return null;
        }

        const user: User = isEmailExist;

        // Password validation
        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );
        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     return token, user;
  //   },
  //   async session({ session, token }) {
  //     return session, token;
  //   },
  // },
};
