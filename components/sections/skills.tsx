"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Angular", "Tailwind CSS", "SCSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Django", "FastAPI", "Python"],
  },
  {
    name: "Database",
    skills: [ "PostgreSQL", "Redis", "SQLite"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "AWS", "Linux"],
  },
];

export function SkillsSection() {
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
$ cd skills
$ ./list-skills.sh
> Analyzing skill tree...`}
          </pre>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <pre className="text-muted-foreground whitespace-pre-wrap break-words">
                {`
+--- ${category.name} ${'-'.repeat(Math.max(20, 30 - category.name.length))}+
|`}
              </pre>
              {category.skills.map((skill, skillIndex) => (
                <pre key={skill} className="text-muted-foreground ml-4 whitespace-pre-wrap break-words">
                  {`|--- ${skill}`}
                </pre>
              ))}
              <pre className="text-muted-foreground whitespace-pre-wrap break-words">
                {`|
+${'-'.repeat(Math.max(24, 32))}+`}
              </pre>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12"
        >
          <pre className="text-muted-foreground whitespace-pre-wrap break-words">
            {`
$ echo "Always learning and exploring new technologies..."
> _`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}