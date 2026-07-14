import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import heroImage from '../assets/professional_team_hero.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-gradient"></div>
      <div className="container hero-container grid grid-cols-2">
        {/* Left Text Content */}
        <div className="hero-content flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-eyebrow">Professional Services Agency</span>
            <h1 className="hero-title mt-2">
              Expert Solutions. <br />
              <span className="text-primary">Measurable Results.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="hero-subtitle mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We partner with students, professionals, and businesses to provide top-tier Legal Services, Digital Solutions, and Professional Education. Trust the experts.
          </motion.p>
          
          <motion.div 
            className="hero-actions flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="btn btn-primary">
              Book a Free Consultation <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary">Our Services</button>
          </motion.div>
        </div>

        {/* Right Professional Image */}
        <motion.div 
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="professional-image-wrapper">
            <div className="professional-image overflow-hidden shadow-2xl rounded-2xl relative" style={{ height: '400px', width: '100%', position: 'relative' }}>
              <img loading="lazy" src={heroImage} alt="Professional Team" className="w-full h-full object-cover object-center absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Trust Badges */}
            <motion.div 
              className="floating-badge badge-1 glass-panel flex items-center gap-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="badge-icon-bg success"><CheckCircle2 size={16} color="white"/></div>
              <div>
                <div className="badge-title">Verified Experts</div>
                <div className="badge-desc">Legal & Tech Pros</div>
              </div>
            </motion.div>

            <motion.div 
              className="floating-badge badge-2 glass-panel flex items-center gap-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <div className="badge-icon-bg primary"><ShieldCheck size={16} color="white"/></div>
              <div>
                <div className="badge-title">100% Secure</div>
                <div className="badge-desc">Client Confidentiality</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

