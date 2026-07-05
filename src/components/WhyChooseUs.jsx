import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, DollarSign, Zap, Clock, Shield, Users, Video, Briefcase, Award } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    { title: 'Verified Professionals', icon: <Users size={24} color="#0B57D0"/> },
    { title: 'Affordable Pricing', icon: <DollarSign size={24} color="#22C55E"/> },
    { title: 'Fast Delivery', icon: <Zap size={24} color="#F59E0B"/> },
    { title: '24x7 Support', icon: <Clock size={24} color="#8B5CF6"/> },
    { title: 'Secure Payments', icon: <Shield size={24} color="#EF4444"/> },
    { title: 'Industry Experts', icon: <Award size={24} color="#D4AF37"/> },
    { title: 'Live Training', icon: <Video size={24} color="#0B57D0"/> },
    { title: 'Real Projects', icon: <Briefcase size={24} color="#22C55E"/> },
    { title: 'Premium Certificates', icon: <CheckCircle2 size={24} color="#D4AF37"/> }
  ];

  return (
    <section className="section why-choose-us" id="about">
      <div className="container">
        <div className="section-header text-center mb-6">
          <h2>Why Choose <span className="text-primary">MasterTech</span></h2>
          <p>We deliver excellence across all our services and programs.</p>
        </div>
        
        <div className="features-grid grid grid-cols-3">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
