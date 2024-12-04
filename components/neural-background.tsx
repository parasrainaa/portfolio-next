"use client";

import { useEffect, useRef } from 'react';
import { NeuralParticles } from '@/lib/animations/neural-particles';

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const neuralParticles = new NeuralParticles(canvasRef.current);
    
    return () => {
      neuralParticles.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none bg-background/80"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}