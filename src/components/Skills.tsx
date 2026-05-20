import { motion } from 'motion/react';
import { BrainCircuit } from 'lucide-react';
import { portfolioData } from '../data';

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-24 relative px-6 sm:px-8 bg-slate-50/10 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-900/40"
    >
      <div className="max-w-7xl mx-auto relative z-10">

         {/* Section Title */}
        <div className="text-left max-w-xl mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-[#14b8a6] font-bold block mb-2"
          >
            S02 // COMPETENCES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-white mb-3 tracking-tight"
          >
            Skills & Expertise
          </motion.h2>
          <div className="w-12 h-1 bg-[#104e5b] dark:bg-[#14b8a6] rounded-full" />
        </div>

        {/* Grouped Skills List as beautiful responsive pill-badge layouts */}
        <div className="space-y-12">
          {portfolioData.skills.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-5 text-left">
              <motion.h3 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-sans text-xl font-bold text-[#104e5b] dark:text-[#14b8a6]"
              >
                {cat.category}
              </motion.h3>

              <div className="flex flex-wrap gap-3.5 sm:gap-4">
                {cat.items.map((skillName, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: itemIdx * 0.03 }}
                    className="bg-[#0a4646] dark:bg-[#093539] text-white hover:bg-[#105a5a] dark:hover:bg-[#124d52] font-sans font-bold text-sm sm:text-[15px] px-6 py-3 rounded-full shadow-sm hover:scale-[1.03] active:scale-98 transition-all inline-flex items-center justify-center border border-[#14b8a6]/10 cursor-default"
                  >
                    {skillName}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Accents Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#104e5b] dark:bg-[#07242a] text-white rounded-[2rem] p-6 sm:p-8 border border-[#166070] dark:border-[#103d47] flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 bg-white/10 text-[#14b8a6] rounded-xl hidden sm:block">
              <BrainCircuit size={28} />
            </div>
            <div>
              <h4 className="font-bold text-white">Analytical & Algorithmic Problem Solving</h4>
              <p className="text-xs text-slate-200 mt-1 max-w-xl">
                Tackle high-persistence technical bottlenecks with algorithmic rigor and robust logic, certified by comprehensive LeetCode and Aspire Leadership training.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl border border-white/20 text-white hover:bg-white hover:text-[#104e5b] transition-all text-xs font-bold uppercase tracking-wider whitespace-nowrap"
          >
            Review LeetCode Profiles
          </a>
        </motion.div>

      </div>
    </section>
  );
}
