"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AsciiPortrait = `
    ░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░████████░░░░░
    ░░░░░██        ██░░░
    ░░░██            ██░
    ░░██    ▄▄  ▄▄    █
    ░░█    █▀▀██▀▀█    
    ░██     ▀▄▄▄▄▀     
    ░█   ▄██▄    ▄██▄  
    ██    ▀▀██████▀▀   
    █          ██      █
    █     ▄████  ████▄ 
    █    ██          ██
    ██     ▀██████▀   █
    ░██         ██   ██
    ░░███▄▄▄▄▄▄██▄▄██░
    ░░░░░░░░░░░░░░░░░░
`;

const AsciiDivider = `
+------------------+
|                  |
+------------------+
`;

interface AsciiArtProps {
  art: string;
  className?: string;
  typewriter?: boolean;
  speed?: number;
}

export function AsciiArt({ art, className = "", typewriter = false, speed = 50 }: AsciiArtProps) {
  const [displayText, setDisplayText] = useState(typewriter ? "" : art);

  useEffect(() => {
    if (typewriter) {
      let currentText = "";
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex < art.length) {
          currentText += art[currentIndex];
          setDisplayText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [art, typewriter, speed]);

  return (
    <motion.pre
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`ascii-container ${className}`}
    >
      {displayText}
    </motion.pre>
  );
}
export { AsciiPortrait, AsciiDivider }; 