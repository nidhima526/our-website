import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Target, Users, BookOpen, Briefcase } from 'lucide-react';
import './InternshipSection.css';

const InternshipSection = () => {
  const features = [
    { text: 'Live Projects', icon: <Target size={20} color="#2563EB" /> },
    { text: 'Weekly Tasks', icon: <BookOpen size={20} color="#2563EB" /> },
    { text: 'Mentorship', icon: <Users size={20} color="#2563EB" /> },
    { text: 'Final Assessment', icon: <CheckCircle size={20} color="#2563EB" /> },
    { text: 'Certificate', icon: <Award size={20} color="#2563EB" /> },
    { text: 'Placement Guidance', icon: <Briefcase size={20} color="#2563EB" /> }
  ];

  return (
    <section className="section internship-section" id="internships">
      <div className="container grid grid-cols-2 gap-8 items-center internship-grid">
        
        {/* Left Side: Text and Features */}
        <div className="internship-content">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Launch Your Career with our <span className="text-primary">Internship Program</span>
          </motion.h2>
          <motion.p 
            className="mt-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Gain hands-on experience by working on real-world projects. Build your portfolio, get mentored by industry experts, and secure a premium certification.
          </motion.p>

          <motion.div 
            className="internship-features grid grid-cols-2 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {features.map((feature, idx) => (
              <div key={idx} className="intern-feature-item flex items-center gap-2">
                <div className="icon-box">{feature.icon}</div>
                <span className="font-semibold">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.button 
            className="btn btn-primary btn-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Apply Now
          </motion.button>
        </div>

        {/* Right Side: Certificate Preview */}
        <motion.div 
          className="certificate-preview-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="certificate-mockup glass-panel">
            <div className="cert-border">
              <div className="cert-header text-center">
                <h3>MASTERTECH</h3>
                <p className="text-sm">CERTIFICATE OF COMPLETION</p>
              </div>
              <div className="cert-body text-center mt-4">
                <p>This is proudly presented to</p>
                <h2 className="cert-name text-primary mt-2 mb-2">Student Name</h2>
                <p className="text-sm">For successfully completing the Full-Stack Web Development Internship Program.</p>
              </div>
              <div className="cert-footer flex justify-between mt-6">
                <div className="signature">
                  <div className="line"></div>
                  <span className="text-sm">Nidhima (CEO)</span>
                </div>
                <div className="seal">
                  <Award size={40} color="#D4AF37" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default InternshipSection;
