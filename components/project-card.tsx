"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="font-mono w-full"
    >
      <div className="border border-border bg-background/50 backdrop-blur">
        <div className="border-b border-border p-4">
          <pre className="text-muted-foreground text-sm overflow-x-auto whitespace-pre-wrap break-words">
            {`$ project info "${title}"
> Name: ${title}
> Description: ${description}`}
          </pre>
        </div>

        <div className="p-4 border-b border-border">
          <pre className="text-muted-foreground text-sm overflow-x-auto whitespace-pre-wrap break-words">
            {`$ ls technologies/
> ${technologies.join(", ")}`}
          </pre>
        </div>

        <div className="p-4 flex flex-wrap gap-2">
          {githubUrl && (
            <Button asChild variant="outline" size="sm" className="h-8">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <GithubIcon className="w-3 h-3" />
                <span className="terminal-cursor text-xs">View Source</span>
              </a>
            </Button>
          )}
          
          {liveUrl && (
            <Button asChild variant="outline" size="sm" className="h-8">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLinkIcon className="w-3 h-3" />
                <span className="terminal-cursor text-xs">Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
} 