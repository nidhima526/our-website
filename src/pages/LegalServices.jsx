import React, { useState } from 'react';
import CorporateLayout from './CorporateLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scale, Building2, Users, Home, Briefcase, 
  ShoppingCart, Shield, FileText, ChevronRight, 
  ChevronDown, ArrowRight, ShieldCheck, Clock, 
  UserCheck, Lock, FileSignature, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const practiceAreas = [
  {
    icon: <Scale className="text-[#D4AF37]" size={32} />,
    title: 'Criminal Law',
    img: '/criminal_law_card.png',
    items: ['Criminal Consultation', 'Bail Guidance', 'FIR Guidance', 'Cyber Crime', 'Criminal Documentation', 'Criminal Appeals']
  },
  {
    icon: <Building2 className="text-[#D4AF37]" size={32} />,
    title: 'Civil Law',
    img: '/civil_law_card.png',
    items: ['Civil Disputes', 'Property Disputes', 'Contract Matters', 'Recovery Matters', 'Civil Litigation Support']
  },
  {
    icon: <Users className="text-[#D4AF37]" size={32} />,
    title: 'Family Law',
    img: '/family_law_card.png',
    items: ['Divorce Consultation', 'Child Custody', 'Maintenance Matters', 'Domestic Violence Guidance', 'Family Settlement']
  },
  {
    icon: <Home className="text-[#D4AF37]" size={32} />,
    title: 'Property Law',
    img: '/property_law_card.png',
    items: ['Property Verification', 'Sale Agreements', 'Property Documentation', 'Registration Guidance', 'Title Verification']
  },
  {
    icon: <Briefcase className="text-[#D4AF37]" size={32} />,
    title: 'Corporate & Business Law',
    img: '/business_law_card.png',
    items: ['Business Agreements', 'Partnership Agreements', 'Employment Contracts', 'Startup Legal Documentation', 'Legal Compliance']
  },
  {
    icon: <ShoppingCart className="text-[#D4AF37]" size={32} />,
    title: 'Consumer Law',
    img: '/consumer_law_card.png',
    items: ['Consumer Complaints', 'Refund Claims', 'Product Disputes', 'Service Disputes']
  },
  {
    icon: <Shield className="text-[#D4AF37]" size={32} />,
    title: 'Cyber Law',
    img: '/cyber_law_card.png',
    items: ['Online Fraud', 'Cyber Crime Guidance', 'Digital Evidence', 'Social Media Issues']
  },
  {
    icon: <FileText className="text-[#D4AF37]" size={32} />,
    title: 'Legal Documentation',
    img: '/legal_documentation_card.png',
    items: ['Affidavits', 'Legal Notices', 'Agreements', 'Contracts', 'MoUs', 'Petitions', 'Document Review']
  }
];

const timelineSteps = [
  'Book Consultation',
  'Understand Your Matter',
  'Legal Assessment',
  'Documentation',
  'Professional Legal Assistance'
];

const features = [
  'Professional Consultation',
  'Confidential Client Support',
  'Transparent Process',
  'Accurate Documentation',
  'Personalized Legal Guidance',
  'Timely Service',
  'Ethical Practice',
  'Client-Centered Approach'
];

const audiences = [
  'Individuals', 'Families', 'Property Owners', 'Businesses',
  'Startups', 'Educational Institutions', 'Corporate Clients', 'Professionals'
];

const faqs = [
  { q: 'How do I book a legal consultation?', a: 'You can book a consultation by clicking any of the "Book Consultation" buttons on this page and filling out our secure online form, or by contacting our legal team directly via phone.' },
  { q: 'Can I consult online?', a: 'Yes, we offer highly secure and confidential virtual consultations for clients worldwide.' },
  { q: 'What documents should I carry?', a: 'Please bring any relevant contracts, previous legal notices, identity proof, and a written summary of your legal matter.' },
  { q: 'How long does legal documentation take?', a: 'Timeline varies based on complexity. Standard agreements may take 2-3 business days, while complex corporate structuring may take longer.' },
  { q: 'How do I submit my documents?', a: 'Documents can be securely uploaded through our encrypted client portal or submitted in person at our physical offices.' }
];

const LegalServices = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <CorporateLayout>
      <div className="w-full bg-[#050505] font-['Inter',sans-serif] text-white selection:bg-orange-500 selection:text-white pb-0">
        
        {/* SECTION 1: HERO */}
        <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20 pb-20">
          <div className="absolute inset-0 z-0">
            {/* Fallback to dark solid if image fails to load, but using hero image */}
            <img src="/legal_hero_bg_new.jpg" alt="High Court Architecture" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#050505]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#0a0a0a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto pt-16">
            <motion.p 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-semibold mb-6 drop-shadow-md"
            >
              Prosperity Meets Precious.
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-xl"
            >
              Professional Legal Services You Can Trust
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-md"
            >
              ASHERVISION provides reliable legal consultation, documentation, strategic guidance and professional legal assistance for individuals, families, startups, businesses and organizations.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-500 hover:to-orange-400 px-8 py-4 rounded font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2">
                Book Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="bg-transparent border border-white/30 text-white hover:bg-white/5 hover:border-white/50 px-8 py-4 rounded font-semibold transition-all duration-300 flex items-center justify-center">
                Request Legal Assistance
              </Link>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: PRACTICE AREAS */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="https://v1.pinimg.com/videos/iht/expMp4/0e/15/ba/0e15ba096d727c11d929b323f2a23d1e_720w.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/80"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Legal Practice Areas</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-[#D4AF37] mx-auto shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#050505] rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 border border-black/20 flex flex-col h-full group"
              >
                {area.img ? (
                  <div className="w-full h-48 relative overflow-hidden bg-[#050505]">
                    <img src={area.img} alt={area.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                      {React.cloneElement(area.icon, { size: 24 })}
                      <h3 className="text-xl font-bold text-white drop-shadow-md">{area.title}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 pb-0">
                    <div className="mb-6">{area.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">{area.title}</h3>
                  </div>
                )}
                
                <div className={`flex-grow flex flex-col ${area.img ? 'p-6' : 'px-8 pb-8'}`}>
                  <ul className="space-y-3 flex-grow">
                    {area.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-400 text-sm leading-relaxed">
                        <span className="text-orange-500 mr-2 mt-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </section>

        {/* SECTION 3: CONSULTATION PROCESS */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Legal Consultation Process</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-[#D4AF37] mx-auto"></div>
            </div>

            <div className="relative">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {timelineSteps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative flex flex-col items-center text-center group"
                  >
                    <div className="w-12 h-12 bg-[#050505] border-2 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-lg mb-6 relative z-10 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                      {idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-white">{step}</h4>
                    {/* Mobile Arrow */}
                    {idx < timelineSteps.length - 1 && (
                      <div className="md:hidden text-white/20 my-4">
                        <ArrowRight className="rotate-90" size={24} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY CHOOSE US */}
        <section className="py-24 bg-[#f97316] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 drop-shadow-sm">Why Choose ASHERVISION</h2>
              <div className="w-16 h-1 bg-black mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-[#050505] p-6 rounded border border-black/20 flex items-center gap-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  <CheckCircle className="text-[#D4AF37] shrink-0" size={20} />
                  <span className="text-white font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: WHO WE SERVE */}
        <section className="py-24 bg-[#050505]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who We Serve</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-[#D4AF37] mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {audiences.map((audience, idx) => (
                <div key={idx} className="bg-white/[0.05] border border-white/10 text-gray-300 py-6 px-4 rounded text-center text-sm md:text-base font-medium hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300">
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQ */}
        <section className="relative py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/faq_bg.png" alt="FAQ Background" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-[#050505]/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Frequently Asked Questions</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-[#D4AF37] mx-auto shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#050505]/70 backdrop-blur-md border border-white/10 rounded overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/[0.05] transition-colors"
                  >
                    <span className="font-bold text-white pr-4">{faq.q}</span>
                    <ChevronDown className={`shrink-0 text-orange-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 text-gray-400 leading-relaxed text-sm border-t border-white/5 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="py-24 bg-[#050505] text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Need Professional Legal Guidance?</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Our legal team is ready to assist you with consultation, documentation and professional legal support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-400 px-8 py-4 rounded font-bold transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Book Consultation
              </Link>
              <Link to="/contact" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded font-semibold transition-all duration-300">
                Contact Legal Team
              </Link>
            </div>
          </div>
        </section>

      </div>
    </CorporateLayout>
  );
};

export default LegalServices;
