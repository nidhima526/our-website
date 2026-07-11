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
              <h2 className="text-white text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-6">
                At ASHERVISION, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">2. The Data We Collect About You</h2>
              <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>

              <h2 className="text-white text-2xl font-bold mb-4">3. How We Use Your Personal Data</h2>
              <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>

              <h2 className="text-white text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="mb-6">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>

              <h2 className="text-white text-2xl font-bold mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
                <a href="mailto:privacy@ASHERVISION.com" className="text-blue-400 hover:text-blue-300">privacy@ASHERVISION.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </CorporateLayout>
  );
};

export default PrivacyPolicy;
