import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';
import { portfolioData } from '../data';

const NAV_ITEMS = [
  { label: 'Home', id: '#home' },
  { label: 'About', id: '#about' },
  { label: 'Skills', id: '#skills' },
  { label: 'Projects', id: '#projects' },
  { label: 'Certifications', id: '#certifications' },
  { label: 'Timeline', id: '#timeline' },
  { label: 'Contact', id: '#contact' }
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('#home');
  const [scrollPast, setScrollPast] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle glassy navbar shadow
      if (window.scrollY > 20) {
        setScrollPast(true);
      } else {
        setScrollPast(false);
      }

      // Intersection tracking for highlights
      const scrollPos = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id.replace('#', ''));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.getElementById(id.replace('#', ''));
    if (target) {
      const offset = 80; // height of the navbar
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      id="main-navigation-header"
      className="fixed top-4 inset-x-0 z-40 transition-all duration-300 px-4 sm:px-6"
    >
      <div 
        className={`max-w-6xl mx-auto rounded-full py-3.5 px-6 sm:px-8 flex justify-between items-center transition-all bg-[#104e5b] dark:bg-[#07242a] border border-[#166070] dark:border-[#103d47] shadow-xl`}
      >
        {/* Logo Text */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2 font-mono group"
        >
          <div className="w-7 h-7 rounded-md bg-[#14b8a6] flex items-center justify-center text-white font-bold text-xs shadow-md shadow-[#14b8a6]/20 group-hover:scale-105 transition-transform">
            <Terminal size={14} />
          </div>
          <span className="text-md font-extrabold tracking-wider uppercase text-white transition-colors">
            {portfolioData.name.split(' ')[0]}<span className="text-[#14b8a6] font-mono">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1.5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#14b8a6] ${
                activeSection === item.id
                  ? 'text-[#14b8a6]'
                  : 'text-slate-100'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-white/10 rounded-full -z-1"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}

          {/* Theme Switcher Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 p-2 rounded-full text-slate-100 hover:text-[#14b8a6] bg-white/10 border border-white/5 transition-all active:scale-95"
            aria-label="Toggle theme mode"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-slate-100 bg-white/10 border border-white/5"
            aria-label="Toggle theme mode mobile"
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-slate-100 bg-white/10 border border-white/5 transition-colors"
            aria-label="Open navigation menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Slider Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="lg:hidden mt-2 bg-[#104e5b]/95 dark:bg-[#07242a]/95 backdrop-blur-md rounded-2xl border border-[#166070] dark:border-[#103d47] overflow-hidden shadow-2xl"
          >
            <div className="px-5 py-4 flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                    activeSection === item.id
                      ? 'bg-white/10 text-[#14b8a6]'
                      : 'text-slate-100 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
