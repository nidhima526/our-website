import React from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import { 
  Scale, ShieldAlert, Users, Home, Briefcase, 
  ShoppingBag, HardHat, ShieldCheck, FileSignature, 
  Globe, CheckCircle2, ArrowRight
} from 'lucide-react';

const serviceWallData = [
  { 
    id: 1, 
    title: "Family & Divorce Law", 
    img: "/legal_1.png", 
    desc: "Compassionate mediation and strategic resolution for sensitive family matters and divorce proceedings." 
  },
  { 
    id: 2, 
    title: "Courtroom Litigation", 
    img: "/legal_2.png", 
    desc: "Fierce, confident, and highly authoritative representation in front of the judge and jury." 
  },
  { 
    id: 3, 
    title: "Corporate Disputes", 
    img: "/legal_3.png", 
    desc: "Expert intervention and negotiation to resolve high-stakes corporate and business conflicts." 
  },
  { 
    id: 4, 
    title: "Dedicated Consultation", 
    img: "/legal_4.png", 
    desc: "Deeply empathetic active listening to fully understand your situation and build a winning legal strategy." 
  }
];

const legalServicesData = [
  {
    title: "Criminal Law",
    icon: <ShieldAlert className="text-corporate-primary" size={28} />,
    services: [
      "Criminal Case Consultation", "Bail Guidance", "Anticipatory Bail Guidance", "FIR Guidance", "Police Complaint Guidance", "Cyber Crime Assistance", "White-Collar Crime Consultation", "Criminal Appeal Guidance"
    ]
  },
  {
    title: "Civil Law",
    icon: <Scale className="text-corporate-primary" size={28} />,
    services: [
      "Civil Dispute Consultation", "Property Disputes", "Money Recovery Matters", "Contract Disputes", "Injunction Matters", "Specific Performance Matters", "Partition Suits", "Recovery Suits"
    ]
  },
  {
    title: "Family Law",
    icon: <Users className="text-corporate-primary" size={28} />,
    services: [
      "Divorce Consultation", "Mutual Consent Divorce", "Child Custody", "Maintenance & Alimony", "Domestic Violence Matters", "Restitution of Conjugal Rights", "Adoption Guidance"
    ]
  },
  {
    title: "Corporate & Business Law",
    icon: <Briefcase className="text-corporate-primary" size={28} />,
    services: [
      "Business Agreements", "Partnership Agreements", "Company Documentation", "Startup Legal Support", "Employment Contracts", "Vendor Agreements", "Legal Compliance", "Contract Review"
    ]
  },
  {
    title: "Property Law",
    icon: <Home className="text-corporate-primary" size={28} />,
    services: [
      "Property Verification", "Sale Agreement", "Gift Deed", "Partition Deed", "Property Registration Guidance", "Title Verification", "Property Legal Opinion", "Land Documentation"
    ]
  },
  {
    title: "Documentation & Drafting",
    icon: <FileSignature className="text-corporate-primary" size={28} />,
    services: [
      "Legal Notices", "Affidavits", "Agreements", "Contracts", "MoUs", "Petitions", "Applications", "Replies to Legal Notices"
    ]
  }
];

const LegalServices = () => {
  return (
    <CorporateLayout>
      <div className="w-full min-h-screen relative bg-corporate-dark">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="relative z-10">
          
          {/* Page Header */}
          <div className="relative pt-32 pb-16 flex flex-col items-center text-center px-4">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center justify-center gap-3 mb-6 text-white px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-xl">
              <Scale size={20} strokeWidth={2} className="text-corporate-accent" />
              <span className="font-bold tracking-widest uppercase text-sm">Lead Counsel</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
              Advocate <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-accent to-yellow-200">Nidhima</span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Fierce representation, empathetic consultation, and strategic legal dominance in every scenario.
            </motion.p>
          </div>

          {/* AI SERVICE WALL */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-white font-bold tracking-widest uppercase mb-2">In Action</h2>
              <div className="w-24 h-1 bg-corporate-accent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceWallData.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="relative group overflow-hidden rounded-2xl h-[400px] md:h-[500px] cursor-pointer shadow-2xl"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Heavy Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6 max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detailed Services Grid */}
          <div className="w-full py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Comprehensive Legal Coverage</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
                  Explore our exhaustive list of practice areas and specific legal capabilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {legalServicesData.map((category, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="p-6 border-b border-white/10 flex items-center gap-4">
                      <div className="w-12 h-12 bg-black/50 rounded-xl flex items-center justify-center shrink-0">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-4">
                        {category.services.map((service, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                            <CheckCircle2 size={16} className="text-corporate-accent shrink-0 mt-1" />
                            <span className="leading-relaxed">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </CorporateLayout>
  );
};

export default LegalServices;
