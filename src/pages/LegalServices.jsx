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
    items: ['Criminal Consultation', 'Bail Guidance', 'FIR Guidance', 'Cyber Crime', 'Criminal Documentation', 'Criminal Appeals']
  },
  {
    icon: <Building2 className="text-[#D4AF37]" size={32} />,
    title: 'Civil Law',
    items: ['Civil Disputes', 'Property Disputes', 'Contract Matters', 'Recovery Matters', 'Civil Litigation Support']
  },
  {
    icon: <Users className="text-[#D4AF37]" size={32} />,
    title: 'Family Law',
    items: ['Divorce Consultation', 'Child Custody', 'Maintenance Matters', 'Domestic Violence Guidance', 'Family Settlement']
  },
  {
    icon: <Home className="text-[#D4AF37]" size={32} />,
    title: 'Property Law',
    items: ['Property Verification', 'Sale Agreements', 'Property Documentation', 'Registration Guidance', 'Title Verification']
  },
  {
    icon: <Briefcase className="text-[#D4AF37]" size={32} />,
    title: 'Corporate & Business Law',
    items: ['Business Agreements', 'Partnership Agreements', 'Employment Contracts', 'Startup Legal Documentation', 'Legal Compliance']
  },
  {
    icon: <ShoppingCart className="text-[#D4AF37]" size={32} />,
    title: 'Consumer Law',
    items: ['Consumer Complaints', 'Refund Claims', 'Product Disputes', 'Service Disputes']
  },
  {
    icon: <Shield className="text-[#D4AF37]" size={32} />,
    title: 'Cyber Law',
    items: ['Online Fraud', 'Cyber Crime Guidance', 'Digital Evidence', 'Social Media Issues']
  },
  {
    icon: <FileText className="text-[#D4AF37]" size={32} />,
    title: 'Legal Documentation',
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
      <div className="w-full bg-white font-['Inter',sans-serif] text-[#0F2D5C] selection:bg-[#D4AF37] selection:text-white pb-0">
        
        {/* SECTION 1: HERO */}
        <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20 pb-20 bg-[#0F2D5C]">
          <div className="absolute inset-0 z-0">
            {/* Fallback to dark solid if image fails to load, but using hero image */}
            <img src="/legal_hero_bg.png" alt="Courthouse Architecture" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5C]/90 to-[#0F2D5C]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto pt-16">
            <motion.p 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-semibold mb-6"
            >
              Prosperity Meets Precious.
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
            >
              Professional Legal Services You Can Trust
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12"
            >
              ASHERVISION provides reliable legal consultation, documentation, strategic guidance and professional legal assistance for individuals, families, startups, businesses and organizations.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="bg-[#D4AF37] text-[#0F2D5C] hover:bg-white hover:text-[#0F2D5C] px-8 py-4 rounded font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                Book Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-4 rounded font-semibold transition-all duration-300 flex items-center justify-center">
                Request Legal Assistance
              </Link>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: PRACTICE AREAS */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#fafafa]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D5C] mb-4">Legal Practice Areas</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-[0_4px_20px_rgba(15,45,92,0.05)] hover:shadow-[0_8px_30px_rgba(15,45,92,0.1)] transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className="mb-6">{area.icon}</div>
                <h3 className="text-xl font-bold text-[#0F2D5C] mb-6 pb-4 border-b border-gray-100">{area.title}</h3>
                <ul className="space-y-3 flex-grow">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm leading-relaxed">
                      <span className="text-[#D4AF37] mr-2 mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: CONSULTATION PROCESS */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D5C] mb-4">Legal Consultation Process</h2>
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>

            <div className="relative">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
              
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
                    <div className="w-12 h-12 bg-white border-2 border-[#D4AF37] rounded-full flex items-center justify-center text-[#0F2D5C] font-bold text-lg mb-6 relative z-10 group-hover:bg-[#0F2D5C] group-hover:text-white transition-colors duration-300 shadow-md">
                      {idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-[#0F2D5C]">{step}</h4>
                    {/* Mobile Arrow */}
                    {idx < timelineSteps.length - 1 && (
                      <div className="md:hidden text-gray-300 my-4">
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
        <section className="py-24 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D5C] mb-4">Why Choose ASHERVISION</h2>
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white p-6 rounded border border-gray-100 flex items-center gap-4 hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="text-[#D4AF37] shrink-0" size={20} />
                  <span className="text-[#0F2D5C] font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: WHO WE SERVE */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D5C] mb-4">Who We Serve</h2>
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {audiences.map((audience, idx) => (
                <div key={idx} className="bg-[#0F2D5C] text-white py-6 px-4 rounded text-center text-sm md:text-base font-medium hover:bg-[#0c244a] transition-colors duration-300">
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQ */}
        <section className="py-24 bg-[#fafafa] border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D5C] mb-4">Frequently Asked Questions</h2>
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-[#0F2D5C] pr-4">{faq.q}</span>
                    <ChevronDown className={`shrink-0 text-[#D4AF37] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 text-gray-600 leading-relaxed text-sm"
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
        <section className="py-24 bg-[#0F2D5C] text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need Professional Legal Guidance?</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Our legal team is ready to assist you with consultation, documentation and professional legal support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-[#D4AF37] text-[#0F2D5C] hover:bg-white hover:text-[#0F2D5C] px-8 py-4 rounded font-semibold transition-all duration-300 shadow-lg">
                Book Consultation
              </Link>
              <Link to="/contact" className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-4 rounded font-semibold transition-all duration-300">
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
