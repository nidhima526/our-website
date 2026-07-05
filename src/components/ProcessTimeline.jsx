import React from 'react';
import { motion } from 'framer-motion';
import './ProcessTimeline.css';

const ProcessTimeline = () => {
  const steps = [
    { num: "01", title: "Discovery Call", desc: "A free consultation to understand your business goals, legal needs, and technical requirements." },
    { num: "02", title: "Strategy & Proposal", desc: "We design a comprehensive blueprint tailored to your exact needs and present a clear roadmap." },
    { num: "03", title: "Execution & Delivery", desc: "Our expert team gets to work—building software, drafting legal frameworks, or deploying marketing campaigns." },
    { num: "04", title: "Growth & Support", desc: "We provide ongoing support, monitoring, and optimization to ensure your long-term success." }
  ];

  return (
    <section className="section bg-surface" id="process">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How We Work</span>
          <h2 className="mt-2 text-3xl font-bold">Our Proven Consulting Process</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">A streamlined, transparent four-step approach to taking your business to the next level.</p>
        </div>

        <div className="timeline-container">
          {steps.map((step, idx) => (
            <div key={idx} className="timeline-step">
              <div className="timeline-number">{step.num}</div>
              <div className="timeline-content premium-card">
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-desc mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
