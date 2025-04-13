"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../project-card";
import { title } from "process";

const projects = [
  {
    title: "MathDraw",
    description: "A mathematical recognition application that processes hand-drawn expressions through Google's Gemini AI.",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "Gemini AI"],
    githubUrl: "https://github.com/parasrainaa/MathDraw",
    liveUrl: "https://ai-calc-fe-sjgt.vercel.app/",
  },
  {
    title: "Quizify",
    description: "A quiz application powered by AI to generate quizzes on any topic instantly.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/parasrainaa/quizifyy",
    liveUrl: "https://quizify-gules.vercel.app/",
  },
  {
    title: "Space Bar",
    description: "A space-themed typing game with interactive gameplay and dynamic content generation.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/parasrainaa/SpaceBar",
    liveUrl: "https://space-bar-main.vercel.app/",
  },
  {
    title: "JunoPad",
    description: "Real-time collaborative notes application with authentication and online publishing.",
    technologies: ["Next.js", "Tailwind CSS", "Convex"],
    githubUrl: "https://github.com/parasrainaa/JunoPad",
    liveUrl: "https://juno-pad.vercel.app/",
  },
  {
    title: "Portfolio",
    description: "A minimalist portfolio website.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/parasrainaa/portfolio",
    liveUrl: "https://parasraina.vercel.app",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <pre className="text-muted-foreground mb-4 whitespace-pre-wrap">
            {`
$ cd projects
$ ls -la
> Displaying all projects...`}
          </pre>
          
          <div className="w-full h-px bg-border mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
