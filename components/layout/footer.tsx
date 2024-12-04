import * as React from 'react';
import { Heart, Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center 
      text-sm text-muted-foreground space-y-2 p-4 
      transition-all duration-300 hover:text-primary">
      <div className="flex items-center space-x-2">
        <span>Crafted with</span>
        <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
        <span>and</span>
        <Coffee className="w-4 h-4 text-brown-500" />
      </div>
      <div className="opacity-70">
        © {currentYear} Paras | All Rights Reserved
      </div>
    </footer>
  );
}