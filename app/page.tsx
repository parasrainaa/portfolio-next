"use client";

import { motion } from "framer-motion";
import { NeuralBackground } from "@/components/neural-background";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <NeuralBackground />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 pt-16"
      >
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        {/* <ContactSection /> */}
        <Footer/>
      </motion.main>
    </div>
  );
}