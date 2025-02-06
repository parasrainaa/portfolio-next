"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "BLOG", path: "/blog" },
  { name: "WORK", path: "/work" },
  { name: "ABOUT", path: "/about" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`nav-link ${
            pathname === item.path ? "text-foreground" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
} 