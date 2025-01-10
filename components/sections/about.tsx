"use client";

import { motion } from "framer-motion";

const aboutText = `I'm a passionate software engineer with a love for building innovative solutions. 
My journey in tech started with competitive programming and evolved into full-stack development. 
I enjoy working with modern technologies and am always excited to learn something new.

When I'm not coding, you might find me solving algorithmic problems, 
contributing to open-source projects, or exploring new technologies.

I believe in writing clean, maintainable code and creating intuitive user experiences.
Always eager to take on new challenges and collaborate on interesting projects.`;

export function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <pre className="text-muted-foreground mb-4 whitespace-pre-wrap">
            {`
$ cat about.md
> Loading personal information...

${aboutText.split('\n').map(line => line ? '> ' + line : '>').join('\n')}

$ echo "Open to new opportunities and collaborations..."
> _`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}