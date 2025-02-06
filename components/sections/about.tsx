"use client";

import { motion } from "framer-motion";

const aboutText = `I'm a passionate software engineer with a love for building innovative solutions. 
Currently, interested in low level systems programming and AI/ML. 

Always eager to take on new challenges and collaborate on interesting projects.`;

export function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            {aboutText}
          </p>
          <p className="text-muted-foreground">
            Open to new opportunities and collaborations...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
