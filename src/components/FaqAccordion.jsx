import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FaqAccordion.css';

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What types of legal services do you offer?',
      answer: 'We offer comprehensive legal services including consultation, legal notices, property documentation, corporate agreements, family law, and court case assistance.'
    },
    {
      question: 'Are the courses suitable for beginners?',
      answer: 'Yes! We have courses designed for all levels, from complete beginners to advanced professionals looking to upskill in Programming, AI Tools, and Digital Marketing.'
    },
    {
      question: 'How does the internship program work?',
      answer: 'Our internship program provides hands-on experience through live projects. You will be assigned weekly tasks, receive mentorship, and upon successful assessment, you will get a certificate and placement guidance.'
    },
    {
      question: 'Do you build custom software for startups?',
      answer: 'Absolutely. We specialize in building responsive websites, mobile applications, ERP software, and AI solutions tailored specifically for startups and enterprises.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we have a transparent refund policy. If you are not satisfied with our courses within the first 7 days, you can request a full refund.'
    }
  ];

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-container">
        <div className="section-header text-center mb-8">
          <h2>Frequently Asked <span className="text-primary">Questions</span></h2>
          <p>Find answers to common questions about our platform.</p>
        </div>

        <div className="accordion-wrapper">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`accordion-item premium-card ${openIndex === index ? 'active' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="accordion-header flex justify-between items-center">
                <h4 className="accordion-title m-0">{faq.question}</h4>
                <div className={`accordion-icon ${openIndex === index ? 'rotate' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="accordion-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="accordion-content">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
