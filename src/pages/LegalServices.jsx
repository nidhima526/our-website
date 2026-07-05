import React from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import { 
  Scale, ShieldAlert, Users, Home, Briefcase, 
  ShoppingBag, HardHat, ShieldCheck, FileSignature, 
  Globe, CheckCircle2 
} from 'lucide-react';

const legalServicesData = [
  {
    title: "Criminal Law",
    icon: <ShieldAlert className="text-corporate-primary" size={28} />,
    services: [
      "Criminal Case Consultation", "Bail Guidance", "Anticipatory Bail Guidance", "FIR Guidance", "Police Complaint Guidance", "Cyber Crime Assistance", "Theft Cases", "Cheating & Fraud Cases", "Assault Cases", "Domestic Violence Matters", "Dowry Harassment Matters", "Sexual Offence Case Guidance", "White-Collar Crime Consultation", "Criminal Appeal Guidance"
    ]
  },
  {
    title: "Civil Law",
    icon: <Scale className="text-corporate-primary" size={28} />,
    services: [
      "Civil Dispute Consultation", "Property Disputes", "Money Recovery Matters", "Contract Disputes", "Injunction Matters", "Specific Performance Matters", "Partition Suits", "Recovery Suits", "Civil Appeals", "Legal Notice for Civil Disputes"
    ]
  },
  {
    title: "Family Law",
    icon: <Users className="text-corporate-primary" size={28} />,
    services: [
      "Divorce Consultation", "Mutual Consent Divorce", "Child Custody", "Maintenance & Alimony", "Domestic Violence Matters", "Restitution of Conjugal Rights", "Adoption Guidance", "Marriage Registration Guidance", "Family Settlement Agreements"
    ]
  },
  {
    title: "Property Law",
    icon: <Home className="text-corporate-primary" size={28} />,
    services: [
      "Property Verification", "Sale Agreement", "Gift Deed", "Partition Deed", "Property Registration Guidance", "Title Verification", "Property Legal Opinion", "Property Dispute Consultation", "Land Documentation"
    ]
  },
  {
    title: "Corporate & Business Law",
    icon: <Briefcase className="text-corporate-primary" size={28} />,
    services: [
      "Business Agreements", "Partnership Agreements", "Company Documentation", "Startup Legal Support", "Employment Contracts", "Vendor Agreements", "Legal Compliance", "Contract Review", "NDA Drafting", "MoU Drafting"
    ]
  },
  {
    title: "Consumer Law",
    icon: <ShoppingBag className="text-corporate-primary" size={28} />,
    services: [
      "Consumer Complaints", "Online Consumer Disputes", "Product & Service Complaints", "Refund Claims", "Compensation Claims", "E-commerce Consumer Issues"
    ]
  },
  {
    title: "Labour & Employment Law",
    icon: <HardHat className="text-corporate-primary" size={28} />,
    services: [
      "Employment Agreements", "Wrongful Termination Guidance", "Salary Recovery Matters", "Labour Law Consultation", "HR Documentation", "Workplace Dispute Guidance"
    ]
  },
  {
    title: "Cyber Law",
    icon: <ShieldCheck className="text-corporate-primary" size={28} />,
    services: [
      "Cyber Crime Complaints", "Online Fraud Guidance", "Social Media Legal Issues", "Data Privacy Consultation", "Digital Evidence Guidance", "Cyber Defamation Matters"
    ]
  },
  {
    title: "Documentation & Drafting",
    icon: <FileSignature className="text-corporate-primary" size={28} />,
    services: [
      "Legal Notices", "Affidavits", "Agreements", "Contracts", "MoUs", "Petitions", "Applications", "Replies to Legal Notices", "Document Review"
    ]
  },
  {
    title: "Online Legal Services",
    icon: <Globe className="text-corporate-primary" size={28} />,
    services: [
      "Online Legal Consultation", "Appointment Booking", "Secure Document Upload", "Track Legal Request", "Online Fee Payment", "Download Legal Documents", "Client Support"
    ]
  }
];

const LegalServices = () => {
  return (
    <CorporateLayout>
      {/* Full Page Background Wrapper */}
      <div className="w-full min-h-screen relative">
        {/* Dark Glass Overlay for the whole page */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          
          {/* Page Header */}
          <div className="relative pt-32 pb-28 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-corporate-accent rounded-full blur-[120px] opacity-20 pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center justify-center gap-3 mb-6 text-white px-5 py-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-xl">
            <Scale size={20} strokeWidth={2} className="text-corporate-accent" />
            <span className="font-bold tracking-widest uppercase text-sm">Legal Services Department</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.15]">
            Corporate & Civil <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-accent to-yellow-200">Legal Counsel</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Protecting your enterprise with expert legal consultation, rigorous compliance checks, and comprehensive corporate law services.
          </motion.p>
        </div>
      </div>

      <div className="w-full py-20 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Our Legal Practice Areas</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              From criminal defense to corporate documentation, explore our comprehensive suite of legal services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalServicesData.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 overflow-hidden hover:border-corporate-accent/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="p-6 bg-white/5 border-b border-white/10 flex items-center gap-4 group-hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-corporate-dark rounded-lg shadow-sm border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-corporate-accent transition-colors duration-300">
                    {React.cloneElement(category.icon, { className: "text-white group-hover:text-corporate-dark transition-colors duration-300" })}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="p-6 h-[280px] overflow-y-auto custom-scrollbar">
                  <ul className="space-y-3">
                    {category.services.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200">
                        <CheckCircle2 size={16} className="text-corporate-accent shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
        </div>
      </div>
      
      {/* Custom Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8; 
        }
      `}} />
    </CorporateLayout>
  );
};

export default LegalServices;
