import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Code2, Sparkles, ShoppingBag, BookOpen, Layers, Terminal, ChevronDown, ChevronUp, Cpu, Globe } from 'lucide-react';
import { portfolioData } from '../data';

// Map specific project IDs to beautiful theme icons
const PROJECT_ICONS = {
  1: ShoppingBag,
  2: Cpu,
  3: BookOpen,
  4: Layers,
  5: Terminal,
  6: Globe
};

export default function Projects({ onNotify }) {
  const [expandedProjId, setExpandedProjId] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const handleAction = (e, type, url, projTitle) => {
    e.preventDefault();
    onNotify({
      title: `${type} Triggered`,
      message: `Navigating to ${projTitle}'s ${type.toLowerCase()} directly in a new tab.`,
      type: 'success'
    });
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  const toggleDetails = (id) => {
    setExpandedProjId(expandedProjId === id ? null : id);
  };

  return (
    <section 
      id="projects" 
      className="py-24 relative px-6 sm:px-8 border-t border-slate-100 dark:border-slate-900/40 bg-slate-50/50 dark:bg-slate-950/20"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-[#14b8a6] font-bold block mb-2"
          >
            S03 // CREATIONS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-white mb-3 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 bg-[#104e5b] dark:bg-[#14b8a6] mx-auto rounded-full" />
        </div>

        {/* 6 projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((proj, idx) => {
            const IconComp = PROJECT_ICONS[proj.id] || Globe;
            const isExpanded = expandedProjId === proj.id;
            
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="interactive-card flex flex-col justify-between bg-white dark:bg-[#0c2e36] border border-slate-200/40 dark:border-[#103d47] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:border-[#14b8a6]/40 dark:hover:border-[#14b8a6]/20 hover:-translate-y-1.5"
              >
                
                {/* 1. Project Image Area Placeholder */}
                <div className="relative aspect-square bg-slate-100 dark:bg-slate-950 border-b border-slate-200/50 dark:border-slate-800/80 flex flex-col justify-between p-4 group overflow-hidden">
                  {/* Subtle Blueprint grid background */}
                  <div 
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px), 
                                        linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Dynamic Corner Brackets */}
                  <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-slate-300 dark:border-slate-805" />
                  <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-slate-300 dark:border-slate-805" />
                  <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-slate-300 dark:border-slate-805" />
                  <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-slate-300 dark:border-slate-805" />

                  {/* Header labels */}
                  <div className="flex justify-between items-center relative z-10 w-full">
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">
                      PROJECT_BUILD_0{proj.id}
                    </span>
                    <Sparkles size={11} className="text-[#14b8a6] dark:text-[#14b8a6]/60 animate-pulse" />
                  </div>

                  {/* Real product image or fallback graphic */}
                  <div className="absolute inset-0 flex items-center justify-center p-2 mt-4">
                    {!imageErrors[proj.id] ? (
                      <img 
                        src={proj.image} 
                        alt={proj.name}
                        onError={() => {
                          setImageErrors(prev => ({ ...prev, [proj.id]: true }));
                        }}
                        className="w-full h-full object-cover rounded-xl border border-slate-200/50 dark:border-slate-800/50 z-10 transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Floating Fallback card layer */
                      <div className="absolute inset-2 bg-gradient-to-tr from-[#104e5b]/90 to-[#07242a]/95 flex flex-col justify-center items-center rounded-xl p-3 text-center border border-[#14b8a6]/20 z-10">
                        <div className="w-10 h-10 rounded-xl bg-[#14b8a6]/15 border border-[#14b8a6]/20 flex items-center justify-center text-[#14b8a6] mb-1">
                          <IconComp size={18} />
                        </div>
                        <span className="block text-slate-100 font-bold text-xs uppercase tracking-tight">{proj.name}</span>
                        <span className="block text-[9px] text-[#14b8a6]/80 font-mono mt-0.5 truncate max-w-xs">{proj.tech}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center relative z-10 w-full text-[9px] text-slate-450 dark:text-slate-500 font-mono">
                    <span>FRAME_STABLE</span>
                    <span>HTTPS_ENCRYPTED</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 flex-1 flex flex-col justify-between font-sans">
                  <div>
                    {/* Title */}
                    <div className="mb-3 font-sans">
                      <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-[#14b8a6] transition-colors">
                        {proj.name}
                      </h3>
                      <p className="text-slate-650 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-1 font-sans">
                        {proj.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.tech.split(',').map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-350 text-[10px] font-mono font-medium border border-slate-200/30 dark:border-slate-850"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>

                    {/* Collapsible Disclosure Tray */}
                    <div className="border border-slate-150 dark:border-[#103d47] rounded-xl overflow-hidden mb-5">
                      <button
                        onClick={() => toggleDetails(proj.id)}
                        className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/40 hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <Terminal size={12} className="text-[#14b8a6]" />
                          Engineering Insight
                        </span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-4 bg-slate-50/50 dark:bg-slate-900/10 text-[11px] space-y-3.5 border-t border-slate-150 dark:border-slate-800 font-sans leading-relaxed">
                              <div>
                                <strong className="block text-slate-755 dark:text-slate-200 font-bold mb-1 font-mono uppercase text-[9px] tracking-wider text-rose-500">
                                  ⚡ Technical Bottlenecks Faced
                                </strong>
                                <p className="text-slate-600 dark:text-slate-405">{proj.challenges}</p>
                              </div>
                              <div>
                                <strong className="block text-slate-755 dark:text-slate-200 font-bold mb-1 font-mono uppercase text-[9px] tracking-wider text-[#14b8a6]">
                                  🚀 Upcoming Scope Expansion
                                </strong>
                                <p className="text-slate-605 dark:text-slate-300">{proj.futurePlans}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                  {/* 2 Working buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-[#103d47]/60">
                    <a
                      id={`proj-${proj.id}-live-btn`}
                      href={proj.liveLink}
                      onClick={(e) => handleAction(e, 'Live Demo', proj.liveLink, proj.name)}
                      className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#104e5b] hover:bg-[#156170] dark:bg-[#14b8a6] dark:text-[#07242a] text-white font-bold text-xs transition-all active:scale-95 text-center shadow-md cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={12} />
                    </a>

                    <a
                      id={`proj-${proj.id}-git-btn`}
                      href={proj.githubLink}
                      onClick={(e) => handleAction(e, 'Source Code', proj.githubLink, proj.name)}
                      className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 hover:bg-slate-105 dark:hover:bg-[#104e5b]/35 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-[#103d47] text-xs transition-all active:scale-95 text-center cursor-pointer"
                    >
                      <Code2 size={12} />
                      <span>Source Code</span>
                    </a>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
