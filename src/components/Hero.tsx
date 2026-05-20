import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight, Github, Linkedin, Facebook, Code2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data';

const TYPING_WORDS = [
  'Junior Frontend Developer',
  'MERN Stack Developer',
  'CSE Undergrad Student',
  'Algorithmic Problem Solver'
];

export default function Hero({ onNotify }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");

  // Super stable high-performance React Typewriter State Machine
  useEffect(() => {
    if (subIndex === TYPING_WORDS[wordIdx].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % TYPING_WORDS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, wordIdx]);

  useEffect(() => {
    setTypedText(TYPING_WORDS[wordIdx].substring(0, subIndex));
  }, [subIndex, wordIdx]);

  const handleDownloadCV = () => {
    onNotify({
      title: 'Transmission Success',
      message: 'Opening Rifat\'s official Google Drive resume link in a new tab.',
      type: 'success'
    });
    setTimeout(() => {
      window.open(portfolioData.resumeLink, '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden bg-slate-50/10 dark:bg-transparent"
    >
      {/* Background soft ambient particles & radial light backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14b8a6]/5 dark:bg-[#14b8a6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Metadata & Copy Blocks */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left order-last lg:order-first"
          >
            {/* Top Badge: Availability status bar */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 dark:bg-teal-500/15 border border-teal-500/20 text-[#104e5b] dark:text-[#14b8a6] text-xs font-mono font-extrabold tracking-wider mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14b8a6]"></span>
              </span>
              AVAILABLE FOR TECHNICAL INTERNSHIPS
            </motion.div>

            {/* Headline / Developer Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#0d3d48] dark:text-white leading-none mb-3">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#104e5b] via-teal-600 to-[#14b8a6] dark:from-[#14b8a6] dark:to-teal-300">{portfolioData.name}</span>
            </h1>

            {/* Designation Typewriter Loop container */}
            <div className="h-8 mb-6 flex items-center">
              <span className="font-mono text-md sm:text-lg font-bold text-slate-700 dark:text-slate-200">
                I am a <span className="text-[#14b8a6] bg-[#14b8a6]/5 px-2 py-0.5 rounded border border-[#14b8a6]/20 inline-block font-mono font-extrabold">{typedText}</span><span className="text-[#14b8a6] animate-pulse font-extrabold">|</span>
              </span>
            </div>

            {/* Summary block */}
            <p className="text-slate-650 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-sans">
              {portfolioData.summary}
            </p>

            {/* Action CTAs Area */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                id="cta-cv-button"
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-6 py-3.5 bg-[#104e5b] hover:bg-[#156170] dark:bg-[#14b8a6] dark:text-[#07242a] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-[1.03] active:scale-98 shadow-lg shadow-teal-500/10 cursor-pointer"
              >
                <Download size={15} />
                <span>Download Resume</span>
              </button>
              
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-[#0c2e36] border border-slate-200 dark:border-[#103d47] hover:border-[#14b8a6]/30 text-slate-705 dark:text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 dark:hover:bg-[#104e5b]/20 transition-all hover:scale-[1.03] active:scale-98 shadow-sm cursor-pointer"
              >
                <span>Let's Discuss</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Professional Social anchor row */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase font-bold text-slate-400 dark:text-slate-350 tracking-wider mr-2">Digital Nodes:</span>
              <a 
                href={portfolioData.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white dark:bg-[#0c2e36] border border-slate-200 dark:border-[#103d47] hover:border-[#14b8a6]/30 text-slate-600 dark:text-slate-300 hover:text-[#14b8a6] transition-all rounded-xl hover:-translate-y-1 shadow-sm"
                aria-label="Connect GitHub"
              >
                <Github size={16} />
              </a>
              <a 
                href={portfolioData.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white dark:bg-[#0c2e36] border border-slate-200 dark:border-[#103d47] hover:border-[#14b8a6]/30 text-slate-600 dark:text-slate-300 hover:text-[#14b8a6] transition-all rounded-xl hover:-translate-y-1 shadow-sm"
                aria-label="Connect LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href={portfolioData.socials.leetcode} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white dark:bg-[#0c2e36] border border-slate-200 dark:border-[#103d47] hover:border-[#14b8a6]/30 text-slate-600 dark:text-slate-300 hover:text-[#14b8a6] transition-all rounded-xl hover:-translate-y-1 font-mono hover:font-bold text-xs shadow-sm flex items-center justify-center text-center"
                aria-label="Review LeetCode metrics"
              >
                LC
              </a>
              <a 
                href={portfolioData.socials.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white dark:bg-[#0c2e36] border border-slate-200 dark:border-[#103d47] hover:border-[#14b8a6]/30 text-slate-600 dark:text-slate-300 hover:text-[#14b8a6] transition-all rounded-xl hover:-translate-y-1 shadow-sm"
                aria-label="Connect Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </motion.div>
          
          {/* Right Column: Holographic Developer Console Graphic block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center order-first lg:order-last"
          >
            <div className="relative w-full max-w-[310px] sm:max-w-[360px] lg:max-w-none">
              
              {/* Complex holographic neon circles & grid structures backing */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#14b8a6]/20 to-cyan-500/10 dark:from-[#14b8a6]/30 dark:to-transparent rounded-[2.5rem] blur-2xl opacity-40 animate-pulse pointer-events-none" />
              
              {/* Absolute system terminal coordinate tags */}
              <div className="absolute top-2 left-6 z-20 font-mono text-[8px] tracking-widest text-[#14b8a6]/70 uppercase hidden sm:block pointer-events-none">
                SYS.CORE // PU_BANGLADESH
              </div>
              <div className="absolute bottom-2 right-6 z-20 font-mono text-[8px] tracking-widest text-[#14b8a6]/70 uppercase hidden sm:block pointer-events-none">
                STATUS // ONLINE_SECURE
              </div>

              {/* Developer Frame wrapper */}
              <div className="relative aspect-square w-full rounded-[2.2rem] p-3 border border-slate-200/60 dark:border-[#103d47] bg-white dark:bg-[#0c2e36]/95 shadow-2xl overflow-hidden group">
                
                {/* Micro tech grid overlay background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-[2.2rem]" />

                {/* Actual personal Photo window */}
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-slate-100 dark:bg-[#07242a] border border-slate-200/50 dark:border-[#103d47]/70">
                  
                  <img
                    src={portfolioData.photo}
                    alt={portfolioData.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.opacity = '0';
                      e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-slate-800 text-white font-mono text-4xl">${portfolioData.name.charAt(0)}</div>`;
                    }}
                  />

                  {/* Shimmer laser scanning bar sweeping down */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#14b8a6] to-transparent shadow-[0_0_15px_#14b8a6] animate-scan pointer-events-none" />

                  {/* Gradient bottom dim glaze for better contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 dark:from-slate-950/70 to-transparent pointer-events-none" />
                </div>

                {/* Floating verify seal indicator badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#104e5b]/90 text-white border border-[#14b8a6]/40 text-[9px] font-mono font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm z-20">
                  <Sparkles size={10} className="text-[#14b8a6] animate-spin" />
                  <span>DEVELOPER OK</span>
                </div>

                {/* Floating coordinate marker lines */}
                <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t border-r border-[#14b8a6]/40 rounded-tr" />
                <span className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t border-l border-[#14b8a6]/40 rounded-tl" />
                <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b border-r border-[#14b8a6]/40 rounded-br" />
                <span className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b border-l border-[#14b8a6]/40 rounded-bl" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
