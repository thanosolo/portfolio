import type { Metadata } from "next";
import Link from "next/link";

import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from "./_components/nav-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanos Dimitriades",
  description: "Portfolio and Personal blog made by Thanos Dimitriades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
