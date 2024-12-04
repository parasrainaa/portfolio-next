"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Ashwani Paras
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Engineer | Problem Solver | Tech Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button asChild variant="outline" className="gap-2">
            <a href="tel:+919797097492">
              <PhoneIcon className="w-4 h-4" />
              +91 9797097492
            </a>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <a href="mailto:parasraina2021@gmail.com">
              <MailIcon className="w-4 h-4" />
              parasraina2021@gmail.com
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com/ParasRaina01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashwani-paras-1160a6192/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <LinkedinIcon size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}