"use client";

import { motion } from "framer-motion";
import { PatternCard } from "@/components/ui/pattern-card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Languages & Core",
      skills: ["C++", "Python", "TypeScript", "JavaScript", "SQL"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Angular", "HTML/CSS", "Tailwind"],
    },
    {
      category: "Backend & Tools",
      skills: ["Node.js", "FastAPI", "Docker", "Git", "PostgreSQL"],
    },
  ];

  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "parasraina_",
      url: "https://leetcode.com/parasraina_",
    },
    {
      platform: "CodeChef",
      username: "parasraina",
      url: "https://www.codechef.com/users/parasraina",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">Technical Arsenal</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <PatternCard pattern="dots" className="h-full p-6 group">
                <h3 className="text-xl font-semibold mb-6 group-hover:text-primary transition-colors">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: skillIndex * 0.1,
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 hover:bg-primary/20 cursor-default transform hover:scale-110 transition-transform"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </PatternCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Coding Profiles</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {codingProfiles.map((profile, index) => (
              <motion.a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">{profile.platform}</span>
                <span className="text-muted-foreground">@{profile.username}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}