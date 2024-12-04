"use client";

import { motion } from "framer-motion";
import { PatternCard } from "@/components/ui/pattern-card";
import { AwardIcon, BrainIcon, CodeIcon, TrophyIcon } from "lucide-react";

export function AboutSection() {
  const achievements = [
    {
      title: "LeetCode Weekly Contest 312",
      description: "Global Rank: 688",
      icon: TrophyIcon,
    },
    {
      title: "CodeChef Starters 56 Division 3",
      description: "Global Rank: 46",
      icon: AwardIcon,
    },
    {
      title: "LeetCode Knight (2053)",
      description: "Top 2.08% worldwide",
      link: "https://leetcode.com/parasraina_",
      icon: TrophyIcon,
    },
    {
      title: "CodeChef 3★",
      description: "Competitive Programming",
      link: "https://www.codechef.com/users/parasraina",
      icon: AwardIcon,
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Software Engineer with a passion for problem-solving and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PatternCard pattern="dots" className="h-full p-6">
              <div className="flex items-center gap-4 mb-4">
                <BrainIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">IIIT Bhubaneswar</h4>
                  <p className="text-muted-foreground">Information Technology (IT)</p>
                  <p className="text-sm text-muted-foreground">2019 - 2023</p>
                </div>
                <p className="text-muted-foreground">
                  Key coursework: Data Structures, Algorithms, OOPS, Databases, OS, Computer Networks
                </p>
              </div>
            </PatternCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PatternCard pattern="lines" className="h-full p-6">
              <div className="flex items-center gap-4 mb-4">
                <CodeIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div>
                <h4 className="font-semibold">Subex Limited</h4>
                <p className="text-muted-foreground">Software Engineer Intern</p>
                <p className="text-sm text-muted-foreground mb-4">Jan 2023 - July 2023</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Developed user interface for file retrieval using SFTP protocol</li>
                  <li>• Implemented "Champion Challenger Model" interface</li>
                  <li>• Engineered "model monitoring" interface for ML pipelines</li>
                  <li>• Developed comprehensive test cases and POC initiatives</li>
                </ul>
              </div>
            </PatternCard>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <PatternCard pattern="dots" className="h-full p-6">
                <achievement.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-muted-foreground">{achievement.description}</p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-2 inline-block"
                  >
                    View Profile
                  </a>
                )}
              </PatternCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}