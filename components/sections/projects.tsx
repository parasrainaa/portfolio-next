"use client";

import { motion } from "framer-motion";
import { PatternCard } from "@/components/ui/pattern-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "MathDraw",
      description: "A mathematical recognition application using React/TypeScript and Python FastAPI that processes hand-drawn expressions through Google's Gemini AI.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Python", "Gemini AI", "MathJax"],
      link: "https://ai-calc-fe-sjgt.vercel.app/",
    },
    {
      title: "Space Bar",
      description: "A space-themed fun typing game with React.js, engaging users with interactive gameplay and dynamic content generation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Tailwind", "API Integration"],
      link: "https://space-bar-main.vercel.app/",
    },
    {
      title: "JunoPad",
      description: "Real-time collaborative notes application with authentication features and online publishing capabilities.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Tailwind", "Convex"],
      link: "https://juno-pad.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <PatternCard
                pattern={index % 2 === 0 ? "dots" : "lines"}
                className="h-full overflow-hidden group"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLinkIcon className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </a>
              </PatternCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}