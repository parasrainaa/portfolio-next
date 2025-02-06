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
    skills: ["PostgreSQL", "Redis", "SQLite"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "AWS", "Linux"],
  },
];

export function SkillsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">
            My technical expertise spans across multiple domains
          </p>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2"
            >
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-muted text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-muted-foreground"
        >
          Always learning and exploring new technologies...
        </motion.div>
      </div>
    </section>
  );
}
