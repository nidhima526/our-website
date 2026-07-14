import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Home from './pages/Home';
import LegalServices from './pages/LegalServices';
import TechnologyServices from './pages/TechnologyServices';
import Courses from './pages/Courses';
import DigitalCreative from './pages/DigitalCreative';
import Internships from './pages/Internships';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import InteriorDesign from './pages/InteriorDesign';
import StudentDashboard from './pages/StudentDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AIChatbot from './components/AIChatbot';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
// Wrapper to handle dynamic SEO titles
const PageWrapper = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | ASHERVISION`;
  }, [title]);
  
  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};



const GrandOpeningSplash = ({ pageName, onOpen, isOpening }) => (
  <motion.div 
    className="fixed inset-0 z-[9999] flex flex-col cursor-pointer"
    onClick={onOpen}
  >
    {/* CONFETTI OVERLAY */}
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "-10vh", opacity: 0 }}
          animate={{ 
            y: ["-10vh", "110vh"], 
            opacity: [0, 1, 1, 0], 
            rotate: [0, Math.random() * 720], 
            x: [Math.random() * 50 - 25, Math.random() * 200 - 100] 
          }}
          transition={{ 
            duration: 2 + Math.random() * 3, 
            repeat: Infinity, 
            delay: Math.random() * 2,
            ease: "linear"
          }}
          className="text-3xl absolute"
          style={{ left: `${Math.random() * 100}%` }}
        >
          {['🎉', '🎊', '✨', '🎈', '⭐'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}
    </div>

    {/* TOP HALF RIBBON BACKGROUND */}
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isOpening ? "-100%" : 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="absolute top-0 left-0 w-full h-1/2 bg-[#050505] z-20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
    >
      <div className="absolute bottom-0 w-full h-8 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 shadow-[0_-5px_20px_rgba(234,179,8,0.3)] border-b border-yellow-200/50"></div>
    </motion.div>

    {/* BOTTOM HALF RIBBON BACKGROUND */}
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isOpening ? "100%" : 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050505] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
    >
      <div className="absolute top-0 w-full h-8 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 shadow-[0_5px_20px_rgba(234,179,8,0.3)] border-t border-yellow-900/50"></div>
    </motion.div>
    
    {/* CENTER BOW IMAGE */}
    <motion.div
      initial={{ scale: 1, opacity: 1, y: 0 }}
      animate={{ 
        scale: isOpening ? 2 : 1, 
        opacity: isOpening ? 0 : 1, 
        y: isOpening ? 100 : 0 
      }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-25 w-full max-w-[800px] px-4 flex justify-center pointer-events-none"
    >
      <img loading="lazy" src="/ai_ribbon_gold.png" alt="Grand Opening Ribbon" className="w-full object-contain drop-shadow-[0_0_50px_rgba(234,179,8,0.5)]" />
    </motion.div>

    {/* CENTERED TEXT OVERLAY */}
    <motion.div
      initial={{ opacity: 1, scale: 1, y: 0 }}
      animate={{ 
        opacity: isOpening ? 0 : 1, 
        scale: isOpening ? 1.2 : 1, 
        y: isOpening ? -50 : 0 
      }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      className="absolute inset-0 flex flex-col items-center justify-center z-40 drop-shadow-2xl pointer-events-none"
    >
      <div className="text-center px-6 py-12 rounded-3xl backdrop-blur-sm bg-black/30 border border-yellow-500/10 shadow-[0_0_100px_rgba(234,179,8,0.15)] max-w-5xl mx-auto w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-black text-yellow-500 tracking-[0.4em] uppercase mb-6 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]">
          Grand Opening
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-light tracking-[0.1em] text-white uppercase leading-[1.1]" style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}>
          Welcome To<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 block mt-2 drop-shadow-lg font-bold tracking-widest">
            Ashervision {pageName}
          </span>
        </h2>

        {!isOpening && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 text-yellow-400 font-sans tracking-[0.2em] uppercase text-sm font-bold bg-black/50 px-6 py-3 rounded-full border border-yellow-500/30 inline-block pointer-events-none"
          >
            Click Anywhere To Enter
          </motion.div>
        )}
      </div>
    </motion.div>
  </motion.div>
);

function App() {
  const { pathname } = useLocation();

  const getPageName = () => {
    switch (pathname) {
      case '/legal': return 'Legal';
      case '/technology': return 'Tech';
      case '/creative': return 'Creative';
      case '/internships': return 'Internships';
      case '/interior-design': return 'Interior';
      case '/courses': return 'Academy';
      default: return '';
    }
  };

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);



  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper title="Home"><Home /></PageWrapper>} />
        <Route path="/legal" element={<PageWrapper title="Legal Services"><LegalServices /></PageWrapper>} />
        <Route path="/technology" element={<PageWrapper title="Technology Solutions"><TechnologyServices /></PageWrapper>} />
        <Route path="/courses" element={<PageWrapper title="Professional Academy"><Courses /></PageWrapper>} />
        <Route path="/creative" element={<PageWrapper title="Digital & Creative"><DigitalCreative /></PageWrapper>} />
        <Route path="/internships" element={<PageWrapper title="Corporate Internships"><Internships /></PageWrapper>} />
        <Route path="/interior-design" element={<PageWrapper title="Interior & Architectural Design"><InteriorDesign /></PageWrapper>} />
        
        {/* Auxiliary Pages */}
        <Route path="/contact" element={<PageWrapper title="Contact Us"><ContactPage /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper title="Privacy Policy"><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper title="Terms & Conditions"><TermsConditions /></PageWrapper>} />
        <Route path="/refund" element={<PageWrapper title="Refund Policy"><RefundPolicy /></PageWrapper>} />
        
        <Route path="/admin" element={<PageWrapper title="Admin Dashboard"><AdminDashboard /></PageWrapper>} />
        
        {/* Fallback route */}
        <Route path="*" element={<PageWrapper title="Home"><Home /></PageWrapper>} />
      </Routes>

      {/* Global Minimal Dark Background (Tharun Speaks Inspired) */}
      <div className="fixed inset-0 z-[-1] bg-[#030712] pointer-events-none">
        <img loading="lazy" src="/creative-bg.png" alt="Global Background" className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030712_100%)] opacity-80 pointer-events-none"></div>
      </div>

      {/* Global WhatsApp Floating Button */}
      <a 
        href="https://wa.me/918184801842" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[100] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] cursor-pointer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>



      {/* Global Scroll to Top Button */}
      <ScrollToTop />

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </>
  );
}

export default App;

