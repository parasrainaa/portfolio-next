"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Code2 } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <Code2 className="w-8 h-8 text-primary" />
          <span className="font-bold text-xl gradient-text">AP</span>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            {["Projects", "Skills", "About", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}