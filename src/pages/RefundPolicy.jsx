import React from 'react';
import { motion } from 'framer-motion';
import CorporateLayout from './CorporateLayout';
import { FaUndo } from 'react-icons/fa';

const RefundPolicy = () => {
  return (
    <CorporateLayout>
      <div className="pt-24 pb-20 relative bg-[#050b14] min-h-screen text-slate-300">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-400 mb-6 border border-green-500/20">
              <FaUndo className="text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Refund & Cancellation Policy</h1>
            <p className="text-xl text-green-200">Last updated: July 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0a1122] border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-white text-2xl font-bold mb-4">1. Strict No-Refund Policy</h2>
              <p className="mb-6">
                ASHERVISION operates on a strict <strong className="text-red-400">NO REFUND, NO CANCELLATION</strong> policy to protect the integrity of our professional time and intellectual property. By purchasing any of our services—including Legal Services, Technology Solutions, Professional Training, Interior Design, Digital Marketing, or Business Consulting—you acknowledge and agree that all sales are final and non-refundable under any circumstances.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">2. Professional Services & Consultation</h2>
              <p className="mb-6">
                Because our services involve the immediate allocation of highly skilled human resources, intellectual property, and proprietary strategy, once a consultation is booked or a project is initiated, the fee is entirely non-refundable. This applies regardless of whether you choose to utilize the delivered service, attend the scheduled consultation, or complete the project.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">3. Educational & Training Programs</h2>
              <p className="mb-6">
                Payments made for professional courses, internships, and educational programs are completely non-refundable and non-transferable. Once access is granted to our digital learning environments or a seat is reserved in a live class, you are strictly liable for the full fee, and no partial or full refunds will be entertained for dropouts, non-attendance, or dissatisfaction.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">4. Digital Assets and Products</h2>
              <p className="mb-6">
                Any digital products, architectural blueprints, legal drafts, software code, or digital marketing assets delivered to you are strictly exempt from refunds. Due to the easily reproducible nature of digital goods, all deliveries are considered final upon transmission.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">5. Dispute Resolution</h2>
              <p>
                Any attempt to illegally dispute a charge, initiate a chargeback through your bank, or commit payment fraud to bypass this strict No-Refund Policy will result in immediate termination of all services and will be aggressively prosecuted to the fullest extent of the law in the courts of <strong>Ongole, Andhra Pradesh, India</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </CorporateLayout>
  );
};

export default RefundPolicy;
