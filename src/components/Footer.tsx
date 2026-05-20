import { Terminal, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export default function Footer() {
  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      id="main-architectural-footer" 
      className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-150 dark:border-slate-850 px-6 sm:px-8 relative z-10 text-slate-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left column logo */}
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <a
            href="#home"
            onClick={scrollTop}
            className="flex items-center gap-2 font-mono group"
          >
            <div className="w-6 h-6 rounded-md bg-[#104e5b] dark:bg-[#14b8a6] flex items-center justify-center text-white dark:text-[#07242a] font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
              <Terminal size={12} />
            </div>
            <span className="text-md font-bold tracking-tight text-slate-800 dark:text-white">
              {portfolioData.name}
            </span>
          </a>
          <p className="text-[11px] text-slate-450 dark:text-slate-550 max-w-xs mt-1 leading-relaxed">
            {portfolioData.designation} & CSE Student. algorithemic enthusiast & MERN Web Creator.
          </p>
        </div>

        {/* Dynamic centered navigation shortcuts */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
          <a href="#about" className="hover:text-[#14b8a6] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#14b8a6] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#14b8a6] transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-[#14b8a6] transition-colors">Certifications</a>
          <a href="#timeline" className="hover:text-[#14b8a6] transition-colors">Timeline</a>
          <a href="#contact" className="hover:text-[#14b8a6] transition-colors">Contact</a>
        </div>

        {/* Right column copyright and scroll to top */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4">
            <a 
              href={portfolioData.socials.github} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#14b8a6] transition-colors"
              aria-label="Connect Github"
            >
              <Github size={16} />
            </a>
            <a 
              href={portfolioData.socials.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#14b8a6] transition-colors"
              aria-label="Connect Linkedin"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href={`mailto:${portfolioData.email}`} 
              className="hover:text-[#14b8a6] transition-colors"
              aria-label="Connect Email"
            >
              <Mail size={16} />
            </a>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-slate-405 font-mono">
            <span>© {new Date().getFullYear()} {portfolioData.name.toUpperCase()}</span>
            <span>•</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top button bottom footer absolute offset */}
      <div className="mt-12 pt-8 border-t border-slate-200/40 dark:border-slate-850/60 max-w-7xl mx-auto flex justify-center">
        <button
          onClick={scrollTop}
          className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-350 rounded-full hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-[#14b8a6] hover:border-[#14b8a6]/30 transition-all shadow-md active:scale-95 group flex items-center gap-2 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <span className="text-[10px] font-mono font-bold tracking-wider pl-1 uppercase">Top</span>
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
