import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 280, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is desktop
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    if (isMobile) return;

    // Enable body-wide cursor hide
    document.body.classList.add('custom-cursor-active');
    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track clickables for scale styling
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .interactive-card'
      );
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Periodically search for new interactive items to attach events to
    const interval = setInterval(addHoverListeners, 1500);
    addHoverListeners();

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(interval);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Circle */}
      <motion.div
        id="custom-cursor-outer"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-500/50 pointer-events-none z-50 mix-blend-difference hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-6px',
          translateY: '-6px',
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.25)' : 'rgba(16, 185, 129, 0)',
        }}
        transition={{ type: 'spring', damping: 20 }}
      />
      {/* Tiny Core Pointer */}
      <motion.div
        id="custom-cursor-inner"
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-emerald-400 rounded-full pointer-events-none z-50 pointer-events-none hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '3px',
          translateY: '3px',
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
