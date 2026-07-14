import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    // Calculate scroll progress for the SVG border
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;
    
    setScrollProgress(Number(scroll));

    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-[100px] right-6 z-[9999]"
        >
          <div 
            onClick={scrollToTop}
            className="relative cursor-pointer group flex items-center justify-center w-14 h-14"
          >
            {/* SVG Progress Circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
              <circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
              />
              <circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeDasharray="163.36" /* 2 * PI * r */
                strokeDashoffset={163.36 - (scrollProgress * 163.36)}
                className="transition-all duration-150 ease-out"
              />
            </svg>
            
            {/* Inner Button */}
            <div className="w-10 h-10 bg-black/80 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300 text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
