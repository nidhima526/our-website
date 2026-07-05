import React from 'react';
import { motion } from 'framer-motion';

const ShinyText = ({ text, className = '' }) => {
  return (
    <motion.span
      className={`relative inline-block overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(100deg, #64CEFB 20%, #ffffff 50%, #64CEFB 80%)',
        backgroundSize: '200% auto',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      animate={{
        backgroundPosition: ['0% center', '200% center']
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
