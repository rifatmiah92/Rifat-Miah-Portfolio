import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function BackgroundParticles() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="ambient-overlay-bg" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Cyber Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial Gradient Ambient Highlights */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-3xl opacity-60 dark:opacity-40" />
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl opacity-50 dark:opacity-30" />
      <div className="absolute bottom-1/4 -right-1/4 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-3xl opacity-40 dark:opacity-20" />

      {/* Floating Interactive Orbs reacting to Mouse */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.8,
          y: mousePosition.y * 0.8,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 100 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -0.6,
          y: mousePosition.y * -0.6,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 100 }}
      />

      {/* Tiny Ambient Floating Sparkles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={i}
              className="absolute bg-emerald-400/20 dark:bg-emerald-400/40 rounded-full"
              style={{
                width: size,
                height: size,
                left,
                top,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.7, 0.1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
