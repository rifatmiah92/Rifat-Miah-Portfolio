import { motion } from 'motion/react';
import { Award, GraduationCap, Code2, Users, Flame, Database, BrainCircuit, Heart } from 'lucide-react';
import { portfolioData } from '../data';

const STATS_ITEMS = [
  { value: '50+', label: 'DSA Solved', icon: Code2, desc: 'LeetCode analytical problem-solving challenges' },
  { value: '40+', label: 'GitHub Projects', icon: Database, desc: 'Full-stack MERN & Next.js repositories' },
  { value: '30 Hrs', label: 'Rigorous Training', icon: GraduationCap, desc: 'Founded by Harvard University Professors (Aspire)' },
  { value: '19 Hrs', label: 'Coding Marathon', icon: Flame, desc: 'Consecutive coding session endurance' }
];

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 relative px-6 sm:px-8 border-t border-slate-100 dark:border-slate-900/40 bg-slate-50/50 dark:bg-slate-950/20"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-[#14b8a6] font-bold block mb-2"
          >
            S01 // BACKGROUND
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-white mb-3 tracking-tight"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-[#104e5b] dark:bg-[#14b8a6] mx-auto rounded-full" />
        </div>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between bg-white dark:bg-[#0c2e36] border border-slate-200/40 dark:border-[#103d47] p-8 rounded-[2rem] shadow-sm"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-[#14b8a6] flex items-center justify-center">
                  <Flame size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#104e5b] dark:text-white">My Journey</h3>
                  <p className="text-xs text-slate-400 font-mono">B.Sc. CSE STUDENT AT PRESIDENCY UNIVERSITY</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  I am <strong className="font-semibold text-[#104e5b] dark:text-white">{portfolioData.name}</strong>, a MERN Stack Developer and computer science student currently studying at <span className="underline decoration-[#14b8a6] decoration-2 font-medium">Presidency University</span>.
                </p>
                <p>
                  {portfolioData.about.journey}
                </p>
                
                {/* Hobbies list */}
                <div className="mt-8">
                  <span className="block font-mono text-xs uppercase tracking-widest text-[#104e5b] dark:text-[#14b8a6] font-extrabold mb-3">WHEN I'M NOT CODING, I ENJOY:</span>
                  <div className="flex flex-wrap gap-2.5">
                    {portfolioData.about.hobbies.map((hobby, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#104e5b] text-white text-xs font-mono font-bold tracking-wide shadow-sm hover:scale-[1.03] transition-transform">
                        <Heart size={11} className="text-rose-400 fill-rose-400" />
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote indicator */}
            <div className="border-t border-slate-100 dark:border-[#103d47]/60 mt-8 pt-6 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-teal-500/15 text-[#14b8a6] flex items-center justify-center font-mono text-xs font-bold leading-none select-none">
                “
              </div>
              <p className="font-mono text-xs text-slate-400 dark:text-slate-300 italic">
                Optimized complexity, strategic security mindset, and continuous learning are my core engineering baselines.
              </p>
            </div>
          </motion.div>

          {/* Quick Metrics Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STATS_ITEMS.map((stat, index) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="interactive-card bg-white dark:bg-[#0c2e36] border border-slate-200/40 dark:border-[#103d47] p-6 rounded-2xl flex flex-col justify-between hover:border-[#14b8a6] dark:hover:border-[#14b8a6]/40 transition-all hover:shadow-lg hover:shadow-teal-500/5 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl font-mono font-bold text-[#104e5b] dark:text-white tracking-tight">
                      {stat.value}
                    </span>
                    <div className="p-2 rounded-lg bg-teal-500/10 text-[#14b8a6]">
                      <IconComp size={18} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 mb-1">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans leading-snug">
                      {stat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Mini Interactive Core Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="sm:col-span-2 bg-gradient-to-br from-[#104e5b] to-[#14b8a6] text-white p-6 rounded-2xl flex items-center gap-4 shadow-lg shadow-teal-500/10"
            >
              <div className="p-3 bg-white/20 rounded-xl">
                <BrainCircuit size={28} />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-teal-100">Current Study Goal</span>
                <span className="block font-sans font-bold text-md leading-tight mt-0.5">
                  Strategic Leadership & Secured Modern MERN Enterprise Integration
                </span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
