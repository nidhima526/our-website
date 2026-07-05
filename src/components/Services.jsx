import React from 'react';
import { Scale, Code, GraduationCap, ArrowRight, LineChart, Shield, Megaphone } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Legal & IP Services",
      desc: "Protect your business with expert legal counsel, intellectual property registration, and corporate compliance solutions.",
      icon: <Scale size={28} />,
      link: "#"
    },
    {
      id: 2,
      title: "Technology Solutions",
      desc: "Custom web and mobile app development, SaaS architecture, and enterprise software engineering.",
      icon: <Code size={28} />,
      link: "#"
    },
    {
      id: 3,
      title: "Professional Education",
      desc: "Upskill your workforce with certified professional courses and masterclasses led by industry veterans.",
      icon: <GraduationCap size={28} />,
      link: "#"
    },
    {
      id: 4,
      title: "Digital Marketing",
      desc: "Data-driven marketing, SEO, and brand strategy to scale your business and dominate your market.",
      icon: <Megaphone size={28} />,
      link: "#"
    },
    {
      id: 5,
      title: "Business Growth Strategy",
      desc: "Consulting services focused on revenue growth, operational efficiency, and market expansion.",
      icon: <LineChart size={28} />,
      link: "#"
    },
    {
      id: 6,
      title: "Cybersecurity & Protection",
      desc: "Secure your digital assets with comprehensive audits, compliance frameworks, and active threat monitoring.",
      icon: <Shield size={28} />,
      link: "#"
    }
  ];

  return (
    <section className="section bg-surface" id="services">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
          <h2 className="mt-2 text-3xl font-bold">Comprehensive Digital & Professional Services</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">We provide end-to-end solutions tailored for businesses that demand excellence, security, and exponential growth.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.id} className="service-card-pro premium-card">
              <div className="service-icon-wrapper">
                {svc.icon}
              </div>
              <h3 className="service-title mt-4">{svc.title}</h3>
              <p className="service-desc mt-2">{svc.desc}</p>
              <a href={svc.link} className="service-link mt-6 flex items-center gap-1 font-medium">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
