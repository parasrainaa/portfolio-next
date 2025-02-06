import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashwani Paras",
  description: "Software Engineer based in India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-2xl mx-auto px-4 py-8">
          <header className="flex justify-between items-center mb-8">
            <Link href="/" className="nav-link">
              <span className="font-medium">HOME</span>
            </Link>
            <Nav />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}