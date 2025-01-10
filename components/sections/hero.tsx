"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AsciiArt, AsciiPortrait } from "@/components/ascii-art";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20 font-mono">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-8"
        >
          <pre className="text-muted-foreground mb-4 whitespace-pre-wrap">
            {`
$ whoami
ashwani_paras
$ cat about.txt`}
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="w-full max-w-[300px] mx-auto md:mx-0">
            <AsciiArt art={AsciiPortrait} typewriter={true} speed={20} />
          </div>

          <div className="space-y-4">
            <h1 
              className="text-4xl font-bold glitch overflow-hidden text-ellipsis" 
              data-text="Ashwani Paras"
            >
              Ashwani Paras
            </h1>
            <div className="terminal-cursor">
              <p className="text-lg text-muted-foreground whitespace-pre-wrap">
                Software Engineer | Problem Solver | Tech Enthusiast
              </p>
            </div>

            <pre className="text-muted-foreground text-sm mt-4 whitespace-pre-wrap">
              {`
$ contact --info
> Loading contact information...`}
            </pre>

            <div className="space-y-2">
              <Button asChild variant="outline" className="w-full justify-start gap-2 font-mono">
                <a href="mailto:parasraina2021@gmail.com">
                  <MailIcon className="w-4 h-4" />
                  <span className="terminal-cursor truncate">parasraina2021@gmail.com</span>
                </a>
              </Button>
            </div>

            <pre className="text-muted-foreground text-sm mt-4 whitespace-pre-wrap">
              {`
$ social --links
> Fetching profiles...`}
            </pre>

            <div className="flex gap-4">
              <Button asChild variant="outline" size="icon">
                <a
                  href="https://github.com/ParasRaina01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </Button>
              
              <Button asChild variant="outline" size="icon">
                <a
                  href="https://www.linkedin.com/in/ashwani-paras-1160a6192/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}