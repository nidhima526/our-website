import React from 'react';
import { motion } from 'framer-motion';
import CorporateLayout from './CorporateLayout';
import { FaShieldAlt } from 'react-icons/fa';

const PrivacyPolicy = () => {
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 text-blue-400 mb-6 border border-blue-500/20">
              <FaShieldAlt className="text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-200">Last updated: July 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0a1122] border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-white text-2xl font-bold mb-4">1. Introduction & Scope</h2>
              <p className="mb-6">
                ASHERVISION ("we," "our," or "us"), co-founded by Kalyan and Nidhima, is a multi-disciplinary professional services firm offering Legal Services, Technology Solutions, Professional Training, Internships, Digital Marketing, and Business Consulting. This Privacy Policy is formulated in accordance with the Information Technology Act, 2000 (India) and applicable data protection regulations. It dictates how we collect, process, store, and share your personal data when you use our website or engage our services.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">2. Collection of Information</h2>
              <p className="mb-4">We collect information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services. The personal information we collect may include the following:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Personal Identification Data:</strong> Full name, email address, phone number, and residential/business address.</li>
                <li><strong>Professional Data:</strong> Company name, job title, and industry context required for consulting or B2B services.</li>
                <li><strong>Financial Data:</strong> Billing details, GST numbers, and payment routing information (processed securely via encrypted third-party gateways).</li>
                <li><strong>Technical & Usage Data:</strong> IP addresses, browser types, device identifiers, and analytics related to your interaction with our digital platforms.</li>
              </ul>

              <h2 className="text-white text-2xl font-bold mb-4">3. Use of Your Information</h2>
              <p className="mb-4">Your personal data is strictly utilized for the following authorized purposes:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>To facilitate, process, and deliver the professional services you have requested.</li>
                <li>To send administrative information, service updates, and legal notices.</li>
                <li>To comply with regulatory requirements, legal compliance, and statutory audits as mandated by Indian Law.</li>
                <li>To improve our digital platforms, user experience, and service offerings through anonymized data analysis.</li>
              </ul>

              <h2 className="text-white text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="mb-6">
                ASHERVISION maintains strict confidentiality. We do not sell, rent, or trade your personal data. We may share your information only under the following circumstances: with trusted third-party service providers bound by strict confidentiality agreements (e.g., cloud hosting, payment processors), during business transfers, or when legally compelled by a court of competent jurisdiction or government authority.
              </p>
              
              <h2 className="text-white text-2xl font-bold mb-4">5. Data Retention & Security</h2>
              <p className="mb-6">
                We implement robust, industry-standard administrative, technical, and physical security measures to safeguard your personal information against unauthorized access, alteration, disclosure, or destruction. We retain your personal data only for as long as is necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
              <p className="mb-6">
                Depending on your jurisdiction, you may have the right to request access to the personal data we collect from you, request corrections to inaccurate data, or request the deletion of your personal data. To exercise any of these rights, please contact our grievance officer.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">7. Contact Information</h2>
              <p>
                If you have questions, concerns, or grievances regarding this Privacy Policy or the handling of your data, please contact our Data Protection Officer at: <br/>
                <strong>Email:</strong> <a href="mailto:ashervsions@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">ashervsions@gmail.com</a><br/>
                <strong>Address:</strong> Ongole, Andhra Pradesh, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </CorporateLayout>
  );
};

export default PrivacyPolicy;
