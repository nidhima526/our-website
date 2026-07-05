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
              <h2 className="text-white text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="mb-6">
                By accessing our website and using our services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on MasterTechGlobal's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on MasterTechGlobal's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>

              <h2 className="text-white text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="mb-6">
                The materials on MasterTechGlobal's website are provided on an 'as is' basis. MasterTechGlobal makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="mb-6">
                In no event shall MasterTechGlobal or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MasterTechGlobal's website, even if MasterTechGlobal or a MasterTechGlobal authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which MasterTechGlobal operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </CorporateLayout>
  );
};

export default TermsConditions;
