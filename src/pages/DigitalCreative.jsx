import React, { useEffect, useRef } from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "Video Editing",
    subtitle: "Cinematic Precision",
    services: [
      "YouTube Editing", "Podcast Video", "Reels & Shorts", "Corporate Video", "Promotional Ads", "Color Grading", "Motion Graphics", "Documentaries"
    ]
  },
  {
    title: "Podcast",
    subtitle: "Studio Quality",
    services: [
      "Audio Editing", "Noise Removal", "Intro & Outro", "Multi-Camera", "Publishing", "Social Clips"
    ]
  },
  {
    title: "Graphic Design",
    subtitle: "Visual Excellence",
    services: [
      "Brand Identity", "Logo Design", "Print Media", "Social Media Graphics", "Packaging", "Presentations"
    ]
  },
  {
    title: "Social Media",
    subtitle: "Digital Dominance",
    services: [
      "Account Management", "Content Calendar", "Engagement Strategy", "Daily Posting", "Community Growth"
    ]
  },
  {
    title: "Digital Marketing",
    subtitle: "Data-Driven Growth",
    services: [
      "SEO Strategy", "Google Ads", "Meta Ads", "Email Campaigns", "Lead Generation", "Automation"
    ]
  },
  {
    title: "YouTube Growth",
    subtitle: "Algorithmic Success",
    services: [
      "Channel Branding", "Thumbnail Design", "SEO Optimization", "Monetization Strategy", "Analytics"
    ]
  },
  {
    title: "Instagram",
    subtitle: "Viral Engagement",
    services: [
      "Profile Optimization", "Reel Strategy", "Feed Planning", "Organic Growth", "Content Creation"
    ]
  },
  {
    title: "Brand Strategy",
    subtitle: "Market Positioning",
    services: [
      "Brand Guidelines", "Naming & Taglines", "Market Research", "Positioning", "Corporate Identity"
    ]
  },
  {
    title: "Content Creation",
    subtitle: "Compelling Narrative",
    services: [
      "Copywriting", "Blog Writing", "Script Writing", "Ad Copy", "Newsletters", "Press Releases"
    ]
  },
  {
    title: "Business Growth",
    subtitle: "Scalable Solutions",
    services: [
      "Consultation", "Sales Funnels", "Landing Pages", "Conversion Optimization", "Online Presence"
    ]
  }
];

const DigitalCreative = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      panelsRef.current.forEach((panel, i) => {
        if (i === 0) return; // Skip hero section for pinning

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          end: "bottom top",
          snap: {
            snapTo: 1,
            duration: 0.8,
            ease: "power2.inOut"
          }
        });

        // Fade and slide text content block
        gsap.fromTo(
          panel.querySelector('.text-content'),
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top center",
              end: "center center",
              scrub: 1,
            }
          }
        );
        
        // Animate the image scale/pan as you scroll to simulate video movement
        gsap.fromTo(
          panel.querySelector('.bg-image'),
          { scale: 1.1, y: 0 },
          {
            scale: 1,
            y: -50,
            duration: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
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
      <div ref={containerRef} className="w-full bg-[#050505] relative selection:bg-white selection:text-black">
        
        {/* 0. Hero Section */}
        <section ref={(el) => setPanelRef(el, 0)} className="relative h-screen w-full flex items-center overflow-hidden z-10 pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 animate-pulse-slow mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          </div>
          
          <div className="relative z-20 w-full px-6 md:px-16 max-w-7xl mx-auto flex flex-col justify-center h-full">
            <span className="text-gray-400 tracking-[0.4em] uppercase text-xs font-bold mb-6 block border-l-2 border-white pl-4">Digital Marketing & Creative</span>
            <h1 className="text-6xl md:text-[8rem] font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Creative <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Dominance</span>
            </h1>
            <p className="text-gray-400 max-w-xl text-lg md:text-xl font-medium mb-12 border-l-2 border-gray-700 pl-4">
              Premium content, elite branding, and data-driven marketing to scale your enterprise.
            </p>
          </div>
        </section>

        {/* 1-10. Service Sections */}
        {servicesData.map((category, idx) => {
          return (
            <section key={idx} ref={(el) => setPanelRef(el, idx + 1)} className="relative h-screen w-full flex items-center overflow-hidden" style={{ zIndex: (idx + 1) * 10 }}>
              
              {/* Background Image with CSS Animation to simulate video */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={`/bg_${idx}.png`} 
                  alt={category.title}
                  className="bg-image w-full h-[120%] object-cover animate-slow-pan" 
                />
              </div>
              
              {/* Heavy Dark Overlay for stark text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent z-10"></div>
              
              <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16 text-content flex justify-start">
                <div className="max-w-4xl w-full">
                  
                  <span className="text-gray-400 tracking-[0.4em] uppercase text-xs font-bold block mb-4 border-l-2 border-white pl-4">0{idx + 1} / {category.subtitle}</span>
                  
                  {/* MASSIVE BOLD TYPOGRAPHY */}
                  <h2 className="text-5xl md:text-[6rem] lg:text-[7rem] text-white font-black uppercase tracking-tighter leading-[0.85] mb-12">
                    {category.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                    {category.services.map((service, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-4 group cursor-default">
                        <div className="w-8 h-[1px] bg-gray-600 group-hover:bg-white transition-colors duration-500"></div>
                        <span className="text-gray-300 text-sm md:text-base font-bold uppercase tracking-wider group-hover:text-white transition-colors duration-500">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
              
            </section>
          );
        })}

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slowPan {
          0% { transform: scale(1.05) translate(0, 0); }
          50% { transform: scale(1.15) translate(-2%, -2%); }
          100% { transform: scale(1.05) translate(0, 0); }
        }
        .animate-slow-pan {
          animation: slowPan 12s ease-in-out infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}} />
    </CorporateLayout>
  );
};

export default DigitalCreative;
