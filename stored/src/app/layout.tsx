// Top layout file for project. Has to be named exactly layout.tsx
import NavBar from "@/components/navbar/NavBar";
import { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stored",
  description: "A marketplace for storage and other spaces",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={rubik.className}>
        <SessionProvider session={session}>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
