import React from 'react';
import { motion } from 'framer-motion';
import './Statistics.css';

const Statistics = () => {
  const stats = [
    { value: '1000+', label: 'Students Trained', color: 'text-primary' },
    { value: '500+', label: 'Happy Clients', color: 'text-success' },
    { value: '200+', label: 'Projects Delivered', color: 'text-accent' },
    { value: '50+', label: 'Professional Courses', color: 'text-primary' },
    { value: '98%', label: 'Client Satisfaction', color: 'text-success' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="section stats-section">
      <div className="container">
        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="stat-card" variants={itemVariants}>
              <h2 className={`stat-value ${stat.color}`}>{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
