// Top layout file for project. Has to be named exactly layout.tsx
import NavBar from "@/components/navbar/NavBar";
import { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stored",
  description: "A marketplace for storage and other spaces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
