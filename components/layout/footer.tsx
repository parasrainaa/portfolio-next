"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="flex gap-6">
            <Link
              href="https://github.com/ParasRaina01"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/ashwani-paras"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </Link>
            <Link
              href="parasraina2021@email.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MailIcon className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear}  Made with ❤️ by Ashwani Paras.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
