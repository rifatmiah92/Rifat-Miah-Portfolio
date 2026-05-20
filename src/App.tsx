import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundParticles from './components/BackgroundParticles';
import NotificationToast from './components/NotificationToast';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('rifat_portfolio_darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  }); // Default to Dark mode for premium feel
  const [toast, setToast] = useState(null);

  // Sync dark class on document markup
  useEffect(() => {
    localStorage.setItem('rifat_portfolio_darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div 
          id="root-portfolio-canvas"
          className="min-h-screen relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden font-sans select-none selection:bg-teal-500/35 selection:text-teal-900 dark:selection:text-teal-300"
        >
          {/* Custom Ambient Physics Cursor */}
          <CustomCursor />

          {/* Dynamic Background highlights & particle grid overlays */}
          <BackgroundParticles />

          {/* Sticky Nav Anchor Header */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Main Content Sections Layout */}
          <main id="main-content-timeline" className="relative z-10">
            {/* 1. Hero Section */}
            <Hero onNotify={setToast} />

            {/* 2. About Section */}
            <About />

            {/* 3. Skills Section */}
            <Skills />

            {/* 4. Projects Section */}
            <Projects onNotify={setToast} />

            {/* 5. Certifications Section */}
            <Certifications />

            {/* 6. Education & Work Experience Chronology */}
            <Timeline />

            {/* 7. Contact Section */}
            <Contact onNotify={setToast} />
          </main>

          {/* 8. Footer Section */}
          <Footer />

          {/* Multi-Purpose Toast Alert banner overlay */}
          <NotificationToast toast={toast} onClose={() => setToast(null)} />
        </div>
      )}
    </>
  );
}
