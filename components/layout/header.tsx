"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mr-4 flex"
        >
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Ashwani Paras</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link 
              href="#about" 
              className={`transition-colors ${
                pathname === "/#about" ? "text-foreground" : "text-foreground/60"
              } hover:text-foreground/80`}
            >
              About
            </Link>
            <Link 
              href="#skills" 
              className={`transition-colors ${
                pathname === "/#skills" ? "text-foreground" : "text-foreground/60"
              } hover:text-foreground/80`}
            >
              Skills
            </Link>
            <Link 
              href="#projects" 
              className={`transition-colors ${
                pathname === "/#projects" ? "text-foreground" : "text-foreground/60"
              } hover:text-foreground/80`}
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              className={`transition-colors ${
                pathname === "/#contact" ? "text-foreground" : "text-foreground/60"
              } hover:text-foreground/80`}
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}
