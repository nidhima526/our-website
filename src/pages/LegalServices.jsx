import React from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import { 
  Scale, Shield, FileText, Briefcase, Users, 
  CheckCircle2, ArrowRight, Gavel
} from 'lucide-react';

const legalServices = [
  { 
    id: 1, 
    src: '/criminal_law.jpg',
    title: 'Criminal Law', 
    desc: 'Aggressive and strategic defense in complex criminal litigation. Our elite team of attorneys specializes in high-stakes defense, navigating intricate legal labyrinths to protect your rights, liberty, and reputation at every critical stage of the legal process. From pre-indictment investigations to trial representation and appeals, we ensure absolute legal dominance and relentless advocacy when you need it most.',
    icon: <Shield size={24} className="text-yellow-500" />
  },
  { 
    id: 2, 
    src: '/civil_law.jpg',
    title: 'Civil Law', 
    desc: 'Resolving disputes with precision. Expert handling of property disputes, breach of contract, and civil liabilities.',
    icon: <Gavel size={24} className="text-yellow-500" />
  },
  { 
    id: 3, 
    src: '/family_law.jpg', 
    title: 'Family Law', 
    desc: 'Empathetic consultation paired with strong advocacy in matrimonial disputes, custody, and settlements.',
    icon: <Users size={24} className="text-yellow-500" />
  },
  { 
    id: 4, 
    src: '/corporate_law.jpg',
    title: 'Corporate Law', 
    desc: 'Comprehensive legal structuring and advisory services for modern businesses. We safeguard your commercial interests through meticulous handling of mergers, acquisitions, and intricate compliance frameworks. Our elite corporate counsel team is dedicated to mitigating risks and navigating complex regulatory environments, ensuring your enterprise is built on an unbreakable legal foundation that accelerates long-term growth and global expansion.',
    icon: <Briefcase size={24} className="text-yellow-500" />
  },
  { 
    id: 5, 
    src: '/drafting.png',
    title: 'Documentation & Drafting', 
    desc: 'Flawless precision in contracts, agreements, and legal notices to ensure absolute legal immunity.',
    icon: <FileText size={24} className="text-yellow-500" />
  }
];

const values = [
  'Absolute Confidentiality', 'Fierce Representation', 
  'Strategic Legal Dominance', 'Transparent Communication'
];

const LegalServices = () => {
  return (
    <CorporateLayout>
      <div className="w-full min-h-screen bg-[#0a0a0a] relative selection:bg-yellow-600 selection:text-white pb-24 overflow-x-hidden font-sans">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="relative z-10">
          
          {/* 1. Hero Section */}
          <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden mb-16 rounded-b-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            {/* 3D Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="/legal_hero_bg.png" alt="Premium Law Office" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]"></div>
            </div>
            
            <div className="relative z-10 max-w-5xl mx-auto pt-32 pb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm"
              >
                <Scale size={16} /> Lead Counsel
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-8xl font-light text-white leading-[1.1] mb-8 drop-shadow-2xl"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Advocate <br />
                <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200">Nidhima</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12 drop-shadow-md"
              >
                Fierce representation, empathetic consultation, and strategic legal dominance in every scenario. We protect what matters most to you.
              </motion.p>
            </div>
          </div>

          {/* 2. Practice Areas Grid */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl text-white font-light mb-6" style={{ fontFamily: 'Georgia, serif' }}>Our <span className="italic text-yellow-500">Practice Areas</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-300 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalServices.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-yellow-500/50 transition-colors group flex flex-col shadow-xl"
                >
                  {service.src && (
                    <div className="w-full bg-[#0a0a0a] overflow-hidden relative">
                      <img 
                        src={service.src} 
                        alt={service.title} 
                        className="w-full h-auto block group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  )}
                  
                  <div className={`p-8 flex-1 flex flex-col relative z-10 ${service.src ? '-mt-8' : ''}`}>
                    <div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:bg-yellow-500/10 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl text-white font-bold mb-4 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                      {service.desc}
                    </p>
                    <div className="w-full h-[1px] bg-white/10 mt-auto"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3. Core Values Strip */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
             <div className="bg-gradient-to-r from-[#1a1a1a] to-[#111] rounded-[2rem] border border-white/5 p-8 md:p-12 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  {values.map((val, i) => (
                    <div key={i} className="flex flex-col items-center text-center pt-6 md:pt-0 px-4 group">
                      <CheckCircle2 className="text-yellow-600 mb-4 group-hover:scale-110 transition-transform" size={28} />
                      <span className="text-white font-medium text-sm md:text-base tracking-wide">{val}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* 4. Action Footer */}
          <div className="w-full py-32 relative overflow-hidden mt-12 flex items-center justify-center bg-[#050505]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="/legal_cta_bg.png" alt="Legal Counsel Background" className="w-full h-full object-cover opacity-40" />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a] z-10"></div>
            <div className="absolute inset-0 bg-yellow-600/10 mix-blend-overlay z-10"></div>
            
            <div className="relative z-20 max-w-3xl mx-auto px-4 text-center">
              <Scale size={48} className="text-yellow-600 mx-auto mb-8 opacity-50" />
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Require Legal Counsel?
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
                Secure your consultation today. We provide immediate strategic advice and aggressive representation.
              </p>
              
              <div className="flex justify-center">
                <a href="/contact" className="flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-700 to-yellow-600 text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:from-yellow-600 hover:to-yellow-500 hover:scale-105 transition-all shadow-[0_0_30px_rgba(202,138,4,0.3)]">
                  <FileText size={20} />
                  SCHEDULE CONSULTATION
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </CorporateLayout>
  );
};

export default LegalServices;


