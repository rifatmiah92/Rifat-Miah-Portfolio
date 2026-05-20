import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const BOOT_MESSAGES = [
  'system_init --verbose',
  'fetching_skills --source="abraham_rifat.json"',
  'MERN_stack_loaded: version="React 19 & Next.js"',
  'loading_academic_credentials --id="Presidency_University_CSE"',
  'compiling_algorithms --solved="500+ items"',
  'portfolio_mounted: welcome_session="active"'
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Increment progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600); // Allow exit animations to finish
          }, 400);
          return 100;
        }
        // Accelerate near the end
        const increment = prev > 70 ? Math.random() * 4 + 1 : Math.random() * 8 + 3;
        return Math.min(Math.round(prev + increment), 100);
      });
    }, 120);

    // Rotate custom loading diagnostic boot lines
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev < BOOT_MESSAGES.length - 1) return prev + 1;
        return prev;
      });
    }, 380);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="preloader-overlay"
          className="fixed inset-0 bg-slate-950 font-mono flex flex-col justify-between p-8 sm:p-12 z-[99999]"
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Header Code Details */}
          <div className="flex justify-between items-center text-xs text-slate-500">
            <span>ABRAHAM_RIFAT // PORTFOLIO_V2.0</span>
            <span className="animate-pulse">● LIVE_SYSTEM_ESTABLISHED</span>
          </div>

          {/* Central Progress Frame */}
          <div className="max-w-xl w-full mx-auto my-auto flex flex-col gap-6">
            {/* Visual Indicator */}
            <div className="flex justify-between items-end">
              <div>
                <motion.h1 
                  className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Rifat<span className="text-emerald-400">.</span>
                </motion.h1>
                <p className="text-slate-400 text-sm font-sans">
                  CSE Student • MERN Stack Engineer
                </p>
              </div>
              <span className="text-3xl text-emerald-400 font-bold tabular-nums">
                {progress}%
              </span>
            </div>

            {/* Diagnostic Box */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl min-h-[140px] flex flex-col justify-end gap-1.5 shadow-xl">
              {BOOT_MESSAGES.slice(0, messageIndex + 1).map((msg, idx) => (
                <div key={idx} className="flex gap-2 text-xs sm:text-sm items-center text-slate-300">
                  <span className="text-emerald-500 select-none">&gt;</span>
                  <span className={idx === messageIndex ? 'text-emerald-400' : 'text-slate-400'}>
                    {msg}
                  </span>
                  {idx === messageIndex && (
                    <span className="w-1.5 h-3.5 bg-emerald-400 animate-pulse ml-0.5" />
                  )}
                </div>
              ))}
            </div>

            {/* Neon Bar Track */}
            <div className="w-full h-1.5 bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
                style={{ width: `${progress}%` }}
                layoutId="loaderBar"
              />
            </div>
          </div>

          {/* Bottom Footer Frame */}
          <div className="flex justify-between items-center text-[10px] text-slate-600">
            <span>© 2026 ABRAHAM RIFAT. ALL RIGHTS SERVICED.</span>
            <span>PRESIDENCY_UNIVERSITY_CSE_DEPT</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
