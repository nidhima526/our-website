import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay before showing to make it feel natural
      const timer = setTimeout(() => setShowConsent(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const handleDecline = () => {
    // Setting false so we don't ask again on reload, but represents declining tracking
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-sm bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 z-[9999] shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-[#D4AF37]/20 p-2 rounded-full shrink-0">
              <span className="text-xl">🍪</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">We value your privacy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/privacy" className="text-[#D4AF37] hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 mt-4">
            <button 
              onClick={handleDecline}
              className="flex-1 px-4 py-2.5 bg-transparent border border-white/20 text-white rounded-lg text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              Decline
            </button>
            <button 
              onClick={handleAccept}
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-[#D4AF37] text-black rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 transition-all"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
