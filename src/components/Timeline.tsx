import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Trophy, Code2 } from 'lucide-react';
import { portfolioData } from '../data';

export default function Timeline() {
  const combinedTimeline = [
    {
      year: portfolioData.education[0].year,
      type: 'education',
      title: portfolioData.education[0].degree,
      subtitle: portfolioData.education[0].institution,
      desc: portfolioData.education[0].description,
      icon: GraduationCap,
      side: 'left'
    },
    {
      year: '2023 - Present',
      type: 'experience',
      title: 'Competitive Algorithmic Programmer',
      subtitle: '50+ DSA Problems Handled',
      desc: 'Active solver on LeetCode and competitive programming platforms. Refined analytical capacities to evaluate complex algorithmic routes and strategic solutions.',
      icon: Trophy,
      side: 'right'
    },
    {
      year: '2024 - Present',
      type: 'experience',
      title: 'MERN Stack Web Developer',
      subtitle: 'Powerhouse Portfolio of 40+ GitHub Projects',
      desc: 'Designing creative frontend UI/UX layouts in Next.js/React and wiring them to MongoDB structures, JWT secure gates, and Cloud database endpoints.',
      icon: Briefcase,
      side: 'left'
    },
    {
      year: portfolioData.education[1].year,
      type: 'education',
      title: portfolioData.education[1].degree,
      subtitle: portfolioData.education[1].institution,
      desc: portfolioData.education[1].description,
      icon: GraduationCap,
      side: 'right'
    }
  ];

  return (
    <section 
      id="timeline" 
      className="py-24 relative px-6 sm:px-8 border-t border-slate-100 dark:border-slate-900/40 bg-slate-50/50 dark:bg-slate-950/20"
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
            S05 // CHRONOLOGY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-white mb-3 tracking-tight"
          >
            Experience & Education Space
          </motion.h2>
          <div className="w-12 h-1 bg-[#104e5b] dark:bg-[#14b8a6] mx-auto rounded-full" />
        </div>

        {/* Vertical Line Container */}
        <div className="relative mt-20">
          {/* Centered Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#104e5b] via-[#14b8a6] to-transparent transform -translate-x-1/2" />

          {/* Cards collection */}
          <div className="space-y-12">
            {combinedTimeline.map((node, index) => {
              const NodeIcon = node.icon;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    node.side === 'left' ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  
                  {/* Timeline bullet element */}
                  <div className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-slate-900 dark:bg-slate-950 border-2 border-[#14b8a6] flex items-center justify-center text-[#14b8a6] z-10 transform -translate-x-1/2 shadow-lg shadow-teal-500/20">
                    <NodeIcon size={16} />
                  </div>

                  {/* Info Box */}
                  <motion.div
                    initial={{ opacity: 0, x: node.side === 'left' ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`ml-14 md:ml-0 md:w-[45%] bg-white dark:bg-[#0c2e36] border border-slate-200/45 dark:border-[#103d47] p-6 rounded-[2rem] shadow-sm ${
                      node.side === 'left' ? 'md:mr-12' : 'md:ml-12'
                    } hover:border-[#14b8a6]/40 dark:hover:border-[#14b8a6]/25 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300`}
                  >
                    {/* Date badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#14b8a6]/15 text-[#14b8a6] text-xs font-mono font-bold">
                        {node.year}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#14b8a6] font-bold">
                        {node.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1 leading-snug">
                      {node.title}
                    </h3>
                    
                    <h4 className="text-sm font-semibold text-[#14b8a6] mb-4">
                      {node.subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-605 dark:text-slate-200 text-xs sm:text-sm leading-relaxed font-sans text-left">
                      {node.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
