import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Home from './pages/Home';
import LegalServices from './pages/LegalServices';
import TechnologyServices from './pages/TechnologyServices';
import Courses from './pages/Courses';
import DigitalCreative from './pages/DigitalCreative';
import Internships from './pages/Internships';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
// Wrapper to handle dynamic SEO titles
const PageWrapper = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | MasterTechGlobal`;
  }, [title]);
  
  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

// Custom Splash Screen Component
const SplashScreen = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="fixed inset-0 z-[9999] bg-[#050b14] flex flex-col items-center justify-center"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <div className="w-24 h-24 mb-6 relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-orange-500 rounded-full blur-[30px] opacity-50 animate-pulse"></div>
        {/* Logo shape placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)] relative z-10 border border-white/20">
          <span className="text-4xl font-black text-white">M</span>
        </div>
      </div>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
      >
        MasterTech<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Global</span>
      </motion.h1>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className="h-1 bg-gradient-to-r from-blue-500 to-orange-500 mt-8 rounded-full max-w-[200px]"
      />
    </motion.div>
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <SplashScreen />}
      </AnimatePresence>
      
      {!loading && (
        <Routes>
          <Route path="/" element={<PageWrapper title="Home"><Home /></PageWrapper>} />
          <Route path="/legal" element={<PageWrapper title="Legal Services"><LegalServices /></PageWrapper>} />
          <Route path="/technology" element={<PageWrapper title="Technology Solutions"><TechnologyServices /></PageWrapper>} />
          <Route path="/courses" element={<PageWrapper title="Professional Academy"><Courses /></PageWrapper>} />
          <Route path="/creative" element={<PageWrapper title="Digital & Creative"><DigitalCreative /></PageWrapper>} />
          <Route path="/internships" element={<PageWrapper title="Corporate Internships"><Internships /></PageWrapper>} />
          
          {/* Auxiliary Pages */}
          <Route path="/about" element={<PageWrapper title="About Us"><AboutUs /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper title="Contact Us"><ContactPage /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper title="Privacy Policy"><PrivacyPolicy /></PageWrapper>} />
          <Route path="/terms" element={<PageWrapper title="Terms & Conditions"><TermsConditions /></PageWrapper>} />
          <Route path="/refund" element={<PageWrapper title="Refund Policy"><RefundPolicy /></PageWrapper>} />
          
          {/* Fallback route */}
          <Route path="*" element={<PageWrapper title="Home"><Home /></PageWrapper>} />
        </Routes>
      )}

      {/* Global Fixed Video Background */}
      <div className="fixed inset-0 w-full h-full z-[-1] bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Global WhatsApp Floating Button */}
      <a 
        href="https://wa.me/916281646302" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] cursor-pointer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </>
  );
}

export default App;
