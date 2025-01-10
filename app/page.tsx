"use client";

import { motion } from "framer-motion";
import { TerminalNav } from "@/components/terminal-nav";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { AboutSection } from "@/components/sections/about";
import { Footer } from "@/components/layout/footer";
import { MatrixRain } from "@/components/matrix-rain";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <TerminalNav />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 pt-32"
      >
        <HeroSection />
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <Footer />
      </motion.main>

      <MatrixRain />
    </div>
  );
}