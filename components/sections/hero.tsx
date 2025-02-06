"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-5xl font-bold">Ashwani Paras</h1>
          <p className="text-xl text-muted-foreground">
            Software Engineer | Problem Solver | Tech Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Button asChild variant="outline" className="w-full justify-start gap-2">
              <a href="mailto:parasraina2021@gmail.com">
                <MailIcon className="w-4 h-4" />
                parasraina2021@gmail.com
              </a>
            </Button>
          </div>

          <div className="flex gap-4">
            <Button asChild variant="outline" size="icon">
              <a
                href="https://github.com/ParasRaina01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </Button>
            
            <Button asChild variant="outline" size="icon">
              <a
                href="https://www.linkedin.com/in/ashwani-paras-1160a6192/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
