import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="section cta-section">
      <div className="container">
        <motion.div 
          className="cta-banner premium-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Elevate Your Business?</h2>
        <p className="cta-subtitle mt-4 mb-8">
          Book a free 30-minute consultation with Nidhima and our expert team. Let's discuss your goals and build a strategy for success.
        </p>
        
        <div className="flex flex-col sm-flex-row justify-center gap-4">
          <button className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
            Book Consultation Now
          </button>
          <button className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
            View Our Services
          </button>
            </div>
          </div>
          
          <div className="cta-bg-shape"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
