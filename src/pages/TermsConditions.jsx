import React from 'react';
import { motion } from 'framer-motion';
import CorporateLayout from './CorporateLayout';
import { FaFileContract } from 'react-icons/fa';

const TermsConditions = () => {
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 text-orange-400 mb-6 border border-orange-500/20">
              <FaFileContract className="text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-xl text-orange-200">Last updated: July 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0a1122] border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-white text-2xl font-bold mb-4">1. Legally Binding Agreement</h2>
              <p className="mb-6">
                By accessing our website and utilizing the services provided by ASHERVISION (co-founded by Kalyan and Nidhima), you are entering into a legally binding agreement. If you do not unequivocally agree with all terms stated herein, you are strictly prohibited from using our services.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">2. "As Is" Service Disclaimer</h2>
              <p className="mb-6">
                All services—including Legal Services, Technology Solutions, Professional Training, Interior Design, Digital Marketing, and Business Consulting—are provided on a strict "AS IS" and "AS AVAILABLE" basis. ASHERVISION makes absolutely no representations, warranties, or guarantees, whether express or implied, regarding the outcome, profitability, or suitability of our services for your specific business needs.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">3. Absolute Limitation of Liability (Zero Loss Policy)</h2>
              <p className="mb-6">
                To the maximum extent permitted by applicable law, in no event shall ASHERVISION, its founders (Kalyan and Nidhima), directors, employees, or affiliates be held liable for any direct, indirect, incidental, special, consequential, or punitive damages. This includes, but is not limited to, loss of profits, data loss, business interruption, or financial ruin arising from the use or inability to use our services. <strong className="text-orange-400">Under no circumstances will ASHERVISION's total liability exceed the total amount paid by you directly to ASHERVISION for the specific service in dispute.</strong>
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">4. Indemnification</h2>
              <p className="mb-6">
                You agree to fully indemnify, defend, and hold harmless ASHERVISION and its founders against any and all claims, damages, obligations, losses, liabilities, costs, or debt (including but not limited to attorney's fees) arising from your use of our services, your violation of these Terms, or your violation of any third-party right.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
              <p className="mb-6">
                All content, code, digital assets, architectural plans, legal drafts, and educational materials provided by ASHERVISION remain our exclusive intellectual property. You are granted a limited, non-exclusive license strictly for personal or internal business use. Resale, redistribution, or unauthorized modification is strictly prohibited and will result in immediate legal action.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">6. Jurisdiction and Governing Law</h2>
              <p>
                These terms shall be exclusively governed by and construed in accordance with the laws of India. Any disputes, claims, or legal proceedings arising out of this agreement shall be subject to the exclusive jurisdiction of the competent courts situated in <strong>Ongole, Andhra Pradesh, India</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </CorporateLayout>
  );
};

export default TermsConditions;
