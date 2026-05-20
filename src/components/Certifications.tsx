import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldAlert, BadgeCheck, Lightbulb, Heart, Globe, Calendar, ChevronDown, ChevronUp, BookOpen, BrainCircuit } from 'lucide-react';
import { portfolioData } from '../data';

// Map specific certificate IDs/types to beautiful theme icons and gradient coloring
const CERT_STYLING = {
  1: { icon: Award, color: 'from-blue-500/10 to-indigo-500/10 text-blue-500 hover:text-blue-600', hash: 'AI-LEAD-9031245' },
  2: { icon: BadgeCheck, color: 'from-amber-500/10 to-orange-500/10 text-orange-500 hover:text-orange-600', hash: 'PH-MERN-8329402' },
  3: { icon: BrainCircuit, color: 'from-purple-500/10 to-violet-500/10 text-purple-500 hover:text-purple-600', hash: 'CIQ-ML-6043291' },
  4: { icon: ShieldAlert, color: 'from-red-500/10 to-rose-500/10 text-red-500 hover:text-red-600', hash: 'OU-CYBER-7412984' },
  5: { icon: Globe, color: 'from-emerald-500/10 to-teal-500/10 text-emerald-500 hover:text-emerald-600', hash: 'UNU-NZ-5521940' },
  6: { icon: Heart, color: 'from-pink-500/10 to-rose-500/10 text-pink-500 hover:text-pink-600', hash: 'AI-HR-4412093' }
};

export default function Certifications() {
  const [expandedCertId, setExpandedCertId] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const toggleLearn = (id) => {
    setExpandedCertId(expandedCertId === id ? null : id);
  };

  return (
    <section 
      id="certifications" 
      className="py-24 relative px-6 sm:px-8 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900/40"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-[#14b8a6] font-bold block mb-2"
          >
            S04 // CREDENTIALS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-white mb-3 tracking-tight"
          >
            Certifications & Training
          </motion.h2>
          <div className="w-12 h-1 bg-[#104e5b] dark:bg-[#14b8a6] mx-auto rounded-full" />
        </div>

        {/* Dynamic 6 certification cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certificates.map((cert, index) => {
            const styling = CERT_STYLING[cert.id] || { icon: Award, color: 'from-slate-100 to-slate-200 text-slate-600', hash: 'VER-992140' };
            const IconComp = styling.icon;
            const isExpanded = expandedCertId === cert.id;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="interactive-card bg-white dark:bg-[#0c2e36] border border-slate-200/40 dark:border-[#103d47] rounded-3xl p-5 shadow-sm hover:shadow-lg hover:border-[#14b8a6]/40 dark:hover:border-[#14b8a6]/25 transition-all flex flex-col justify-between hover:-translate-y-1.5 duration-300"
              >
                {/* Credentials Image or Fallback */}
                {(!imageErrors[cert.id] && cert.image) ? (
                  <div className="relative aspect-square rounded-xl mb-5 overflow-hidden border border-slate-200/40 dark:border-[#103d47]/80 bg-slate-100 dark:bg-slate-950 flex items-center justify-center group">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      onError={() => {
                        setImageErrors(prev => ({ ...prev, [cert.id]: true }));
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  /* Credentials Image Placeholder with verified Seal */
                  <div className={`relative aspect-square rounded-xl mb-5 flex flex-col justify-between p-4 bg-gradient-to-br ${styling.color}`}>
                    {/* Subtle Grid Pattern overlay */}
                    <div 
                      className="absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                        backgroundSize: '12px 12px',
                      }}
                    />

                    {/* Header stamp */}
                    <div className="flex justify-between items-center w-full relative z-10">
                      <span className="font-mono text-[9px] tracking-widest font-bold opacity-60">
                        SECURE_LICENSE_ACCREDITED
                      </span>
                      <Award size={13} className="opacity-75" />
                    </div>

                    {/* Centered Graphic Icon Seal */}
                    <div className="flex flex-col items-center justify-center gap-1.5 relative z-10 my-auto">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-950 flex items-center justify-center border border-current shadow-md group-hover:scale-110 transition-transform">
                        <IconComp size={18} />
                      </div>
                      <span className="font-mono text-[9px] font-bold tracking-wider opacity-90 uppercase text-center max-w-[150px] truncate">
                        {cert.name.split(' ')[0]} VERIFIED
                      </span>
                    </div>

                    {/* License serial metadata */}
                    <div className="flex justify-between items-center w-full relative z-10 text-[8px] font-mono opacity-60">
                      <span>REG: {styling.hash}</span>
                      <span>ONLINE_VERIFIED</span>
                    </div>
                  </div>
                )}

                {/* Details context block */}
                <div className="space-y-3 font-sans">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#14b8a6]" />
                      {cert.date}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#104e5b] text-[10px] text-white font-extrabold shadow-sm">
                      CREDENTIAL
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-[#104e5b] dark:text-slate-100 leading-snug mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                      Issued by <strong className="font-semibold text-slate-650 dark:text-slate-300">{cert.tech}</strong>
                    </p>
                    <p className="text-xs text-[#14b8a6] font-mono mt-1 font-bold">
                      {cert.description}
                    </p>
                  </div>

                  {/* learned accordions */}
                  <div className="border border-slate-150 dark:border-[#103d47] rounded-xl overflow-hidden mt-2">
                    <button
                      onClick={() => toggleLearn(cert.id)}
                      className="w-full flex items-center justify-between px-3 py-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/40"
                    >
                      <span className="flex items-center gap-1">
                        <BookOpen size={11} className="text-[#14b8a6]" />
                        Scope of Learning
                      </span>
                      {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="p-3.5 bg-slate-50/50 dark:bg-[#0c2e36]/40 border-t border-slate-150 dark:border-[#103d47]/60 text-[11px] font-sans text-slate-655 dark:text-slate-300 leading-relaxed max-h-48 overflow-y-auto">
                            <ul className="space-y-2">
                              {cert.learned.split('. ').map((point, index) => {
                                if (!point.trim()) return null;
                                const parts = point.split(': ');
                                const title = parts.length > 1 ? parts[0] : '';
                                const body = parts.length > 1 ? parts.slice(1).join(': ') : parts[0];
                                
                                return (
                                  <li key={index} className="relative pl-3.5 text-left">
                                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
                                    {title && <strong className="font-bold text-slate-800 dark:text-slate-200">{title}: </strong>}
                                    <span>{body.replace(/^\./, '').trim()}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
