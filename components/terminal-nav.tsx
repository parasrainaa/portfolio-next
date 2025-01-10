"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const commands = [
  { command: 'ls', description: 'List all sections' },
  { command: 'cd projects', description: 'Go to projects' },
  { command: 'cd skills', description: 'Go to skills' },
  { command: 'cd about', description: 'Go to about' },
  { command: 'clear', description: 'Clear terminal' },
  { command: 'help', description: 'Show available commands' },
];

export function TerminalNav(): JSX.Element {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [showCommands, setShowCommands] = useState(false);

  const handleCommand = (command: string) => {
    setHistory(prev => [...prev, `$ ${command}`]);
    
    switch (command.toLowerCase()) {
      case 'ls':
        setHistory(prev => [...prev, '> Available sections:', '  projects/', '  skills/', '  about/']);
        break;
      case 'cd projects':
        setHistory(prev => [...prev, '> Navigating to projects...']);
        window.scrollTo({ 
          top: document.getElementById('projects')?.offsetTop, 
          behavior: 'smooth' 
        });
        break;
      case 'cd skills':
        setHistory(prev => [...prev, '> Navigating to skills...']);
        window.scrollTo({ 
          top: document.getElementById('skills')?.offsetTop, 
          behavior: 'smooth' 
        });
        break;
      case 'cd about':
        setHistory(prev => [...prev, '> Navigating to about...']);
        window.scrollTo({ 
          top: document.getElementById('about')?.offsetTop, 
          behavior: 'smooth' 
        });
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'help':
        setHistory(prev => [
          ...prev,
          '> Available commands:',
          ...commands.map(cmd => `  ${cmd.command.padEnd(15)} - ${cmd.description}`)
        ]);
        break;
      default:
        setHistory(prev => [...prev, `> Command not found: ${command}`]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input.trim());
      setInput('');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      setShowCommands(prev => !prev);
    }
  };

  useEffect(() => {
    setHistory(['Welcome! Type "help" for available commands or press "Tab" for quick access']);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border"
    >
      <div className="max-w-4xl mx-auto p-4">
        <div className="font-mono text-sm">
          {history.map((line, i) => (
            <div key={i} className="text-muted-foreground">
              {line}
            </div>
          ))}
          <div className="flex items-center">
            <span className="text-primary">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 bg-transparent border-none outline-none px-2 font-mono text-sm"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>

        <AnimatePresence>
          {showCommands && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-background border border-border mt-1 p-2"
            >
              {commands.map((cmd) => (
                <button
                  key={cmd.command}
                  onClick={() => {
                    handleCommand(cmd.command);
                    setShowCommands(false);
                  }}
                  className="block w-full text-left px-2 py-1 text-sm hover:bg-primary/10 text-muted-foreground"
                >
                  {cmd.command} - {cmd.description}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
} 