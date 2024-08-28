import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
  console.error("missing github id or github secret, update env vars");
}

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "example@email.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, _request) {
        try {
          if (!credentials?.email || !credentials.password) {
            throw new Error("Invalid login");
          }

          const user = await prisma.user.findUnique({
            where: { email: credentials?.email },
          });

          if (!user) {
            throw new Error("User not found");
          }

          if (!user.password) {
            console.error(
              "password for found user is empty, cannot authenticate",
            );

            // TODO: prompt user to reset password

            throw new Error("Invalid user account");
          }

          if (!user.emailVerified) {
            // TODO: on registration, send an email with a link that set
            // the flag to true

            console.error("User email address not verified");

            // throw new Error("User has not verified email address");
          }

          const passwordMatch = await bcrypt.compare(
            credentials?.password,
            user.password,
          );

          if (!passwordMatch) {
            throw new Error("Invalid login");
          }

          return user;
        } catch (error) {
          console.error("auth error (credentials):", error);

          return null;
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

export default handler;
