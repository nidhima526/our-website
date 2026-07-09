import React, { useEffect, useRef } from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Top 4 Featured Services (Cinematic Scroll)
const featuredServices = [
  {
    title: "Website Development",
    subtitle: "Enterprise Architecture",
    desc: "We build ultra-fast, responsive, and highly secure corporate websites and platforms.",
    mediaUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    services: ["Corporate Websites", "E-Commerce", "Web Applications"]
  },
  {
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform",
    desc: "High-performance iOS and Android applications engineered for scale.",
    mediaUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    services: ["iOS Apps", "Android Apps", "Cross-Platform"]
  },
  {
    title: "Software Development",
    subtitle: "Custom SaaS & ERP",
    desc: "Scalable custom software, billing systems, and complex enterprise resource planning solutions.",
    mediaUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    services: ["Custom Software", "ERP Systems", "CRM Software"]
  },
  {
    title: "AI & Automation",
    subtitle: "Intelligent Workflows",
    desc: "Cutting-edge AI chatbots and workflow automation to exponentially scale your efficiency.",
    mediaUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    services: ["AI Chatbots", "Workflow Automation", "OCR Solutions"]
  }
];

// Remaining 11 Services for Premium Bento Grid
const additionalServices = [
  { title: "UI / UX Design", items: ["Website UI Design", "Mobile App UI Design", "Dashboard UI Design", "Admin Panel Design", "SaaS Product Design", "Landing Page Design", "Wireframing", "Prototyping", "User Experience Design", "Design Systems", "Responsive UI Design"] },
  { title: "Database Solutions", items: ["MySQL Database Design", "PostgreSQL Database", "MongoDB Database", "Firebase Integration", "SQL Optimization", "Database Migration", "Backup & Recovery", "Performance Optimization"] },
  { title: "API Development & Integration", items: ["REST API Development", "Third-Party API Integration", "Payment Gateway Integration", "WhatsApp API Integration", "SMS API Integration", "Email Integration", "Google Maps API", "Authentication Systems", "Webhooks", "API Documentation"] },
  { title: "Cloud & Hosting Services", items: ["Domain Registration", "Web Hosting", "VPS Setup", "Cloud Deployment", "AWS Deployment", "Azure Deployment", "Firebase Hosting", "SSL Certificate Setup", "CDN Configuration", "Backup Solutions", "Server Monitoring"] },
  { title: "Website Security", items: ["SSL Installation", "Malware Removal", "Security Audit", "Website Firewall", "Backup & Restore", "Security Monitoring", "Spam Protection", "User Authentication", "Two-Factor Authentication"] },
  { title: "Website Optimization", items: ["Website Speed Optimization", "Core Web Vitals Optimization", "Mobile Optimization", "Performance Audit", "SEO Technical Optimization", "Image Optimization", "Code Optimization", "Database Optimization"] },
  { title: "E-Commerce Solutions", items: ["Online Store Development", "Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management", "Inventory Integration", "Customer Dashboard", "Admin Dashboard", "Shipping Integration", "GST Invoice System"] },
  { title: "Student Services", items: ["Final Year Projects", "Mini Projects", "Academic Projects", "Research Projects", "Python Projects", "Java Projects", "Web Development Projects", "Mobile App Projects", "AI & ML Projects", "Project Documentation", "Project Deployment", "Viva Preparation Support"] },
  { title: "Technical Support", items: ["Website Maintenance", "Bug Fixing", "Feature Enhancement", "Performance Monitoring", "Server Support", "Database Maintenance", "Technical Consultation", "Annual Maintenance Contract (AMC)"] },
  { title: "Business Solutions", items: ["Digital Transformation", "Business Automation", "IT Consulting", "Startup Technology Consulting", "Software Architecture", "Technology Audit", "Process Optimization", "Enterprise Solutions"] },
  { title: "Featured Tech Packages", items: ["Startup Website Package", "Business Growth Package", "E-Commerce Package", "Educational Package", "Law Firm Package"] }
];

const TechnologyServices = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. APPLE-STYLE CINEMATIC SCROLL for Top 4 Services
      panelsRef.current.forEach((panel) => {
        if (!panel) return;
        
        const bg = panel.querySelector('.bg-media');
        const textGroup = panel.querySelector('.text-group');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "+=120%", 
            pin: true,
            scrub: 1, 
          }
        });

        tl.fromTo(bg, { scale: 1 }, { scale: 1.15, duration: 1, ease: "none" }, 0);
        
        tl.fromTo(textGroup, 
          { opacity: 0, y: 100, scale: 0.95 }, 
          { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }, 
          0.1
        );
        
        tl.to(textGroup, 
          { opacity: 0, y: -100, scale: 1.05, duration: 0.3, ease: "power2.in" }, 
          0.7
        );
      });

      // 2. BENTO GRID ENTRANCE ANIMATIONS
      const bentoCards = document.querySelectorAll('.bento-card');
      bentoCards.forEach((card, i) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 100 },
          {
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const setPanelRef = (el, index) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current[index] = el;
    }
  };

  return (
    <CorporateLayout>
      <div ref={containerRef} className="w-full bg-[#020617] relative selection:bg-sky-500 selection:text-white">
        
        {/* HERO SECTION */}
        <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none"></div>
          
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center justify-center gap-3 mb-6 text-sky-400 px-6 py-2.5 rounded-full border border-sky-400/30 bg-sky-400/10 backdrop-blur-md shadow-xl relative z-10">
            <Monitor size={20} strokeWidth={2} />
            <span className="font-bold tracking-widest uppercase text-sm">Technology Division</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} 
            className="text-6xl md:text-[6rem] lg:text-[8rem] font-black text-white tracking-tighter mb-8 leading-[0.9] relative z-10 uppercase"
          >
            Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">The Future.</span>
          </motion.h1>
        </div>

        {/* APPLE-STYLE CINEMATIC SCROLL SECTIONS */}
        {featuredServices.map((service, idx) => (
          <section key={idx} ref={(el) => setPanelRef(el, idx)} className="relative w-full h-screen overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
              <img 
                src={service.mediaUrl} 
                alt={service.title}
                className="bg-media w-full h-full object-cover origin-center"
              />
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-group pointer-events-none">
              <span className="text-sky-400 tracking-[0.4em] uppercase text-sm md:text-base font-bold mb-6 drop-shadow-lg">
                0{idx + 1} &mdash; {service.subtitle}
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl max-w-6xl">
                {service.title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-medium leading-relaxed mb-12 drop-shadow-md">
                {service.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {service.services.map((sub, sIdx) => (
                  <div key={sIdx} className="px-6 py-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white font-bold tracking-wide">
                    {sub}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* PREMIUM BENTO GRID SECTION (Replaces the 3D Tunnel) */}
        <section className="w-full bg-[#020617] py-32 z-30 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05)_0%,#020617_80%)] pointer-events-none"></div>

          <div className="max-w-[95rem] mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8">Comprehensive Coverage</h2>
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto"></div>
              <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                An exhaustive suite of technical capabilities designed to scale your enterprise.
              </p>
            </div>

            {/* Massive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 auto-rows-min">
              {additionalServices.map((category, idx) => (
                <div 
                  key={idx} 
                  className="bento-card relative group p-10 lg:p-12 bg-white/[0.02] rounded-[2rem] border border-white/5 hover:border-sky-500/30 transition-all duration-700 overflow-hidden flex flex-col justify-between shadow-2xl hover:shadow-[0_0_50px_rgba(56,189,248,0.1)]"
                >
                  
                  {/* Massive subtle background number instead of cheap icons */}
                  <div className="absolute -bottom-10 -right-4 text-[10rem] md:text-[12rem] font-black text-white/[0.02] leading-none pointer-events-none group-hover:text-sky-500/[0.05] group-hover:-translate-y-4 transition-all duration-700">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                  
                  {/* Subtle Top Border Glow on hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent group-hover:w-[80%] transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

                  <div>
                    {/* Minimalist sleek header */}
                    <div className="flex items-center gap-4 mb-10 relative z-10">
                      <div className="w-10 h-[2px] bg-sky-500/50 group-hover:bg-sky-400 transition-colors duration-500"></div>
                      <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">{category.title}</h3>
                    </div>
                    
                    {/* Highly legible, beautifully spaced list */}
                    <ul className="space-y-4 relative z-10">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                          {/* Premium subtle glowing dot */}
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-500/40 group-hover:bg-sky-400 group-hover:shadow-[0_0_10px_#38bdf8] mt-2.5 shrink-0 transition-all duration-500"></div>
                          <span className="text-base md:text-lg font-light leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </CorporateLayout>
  );
};

export default TechnologyServices;
