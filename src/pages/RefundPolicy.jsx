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
              <h2 className="text-white text-2xl font-bold mb-4">1. General Refund Rules</h2>
              <p className="mb-6">
                At MasterTechGlobal, we strive to ensure absolute satisfaction with our services. If you are not entirely satisfied with your purchase, we're here to help. This policy outlines your rights to a refund based on the type of service or course you have purchased.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">2. Professional Courses</h2>
              <p className="mb-4">For our educational and professional courses, the following refund conditions apply:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Within 7 Days:</strong> You may request a full refund within 7 days of your purchase if you have not completed more than 20% of the course material.</li>
                <li><strong>After 7 Days:</strong> No refunds are issued after 7 days from the date of purchase.</li>
                <li><strong>Live Classes:</strong> Refunds for live classes must be requested at least 48 hours before the scheduled start time.</li>
              </ul>

              <h2 className="text-white text-2xl font-bold mb-4">3. Technology & Legal Services</h2>
              <p className="mb-6">
                Refunds for consultation, technology implementations, or legal services are handled on a case-by-case basis. Generally, fees for services already rendered and time already spent are non-refundable. However, any unspent retainer fees or advance payments for unstarted work may be refunded upon mutual agreement.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">4. How to Request a Refund</h2>
              <p className="mb-4">To initiate a refund request, please follow these steps:</p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Email our support team at <a href="mailto:support@mastertechglobal.com" className="text-blue-400 hover:text-blue-300">support@mastertechglobal.com</a>.</li>
                <li>Include your order number and the email address associated with your account.</li>
                <li>Provide a brief explanation of why you are requesting a refund.</li>
              </ol>

              <h2 className="text-white text-2xl font-bold mb-4">5. Processing Time</h2>
              <p>
                Once your refund request is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies (typically 5-10 business days).
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </CorporateLayout>
  );
};

export default RefundPolicy;
