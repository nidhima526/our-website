import React, { useEffect, useRef } from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InteriorDesign = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the sections
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

        // Fade in text for the panel
        gsap.fromTo(
          panel.querySelector('.text-content'),
          { opacity: 0, y: 50 },
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
      <div ref={containerRef} className="w-full bg-[#0F0F0F] relative selection:bg-orange-500 selection:text-white">
        
        {/* Global Film Grain Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[50] overflow-hidden mix-blend-difference opacity-[0.03]">
          <div className="absolute -inset-[50%] h-[200%] w-[200%] animate-grain" 
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'matrix\' values=\'1 0 0 0 0, 1 0 0 0 0, 1 0 0 0 0, 0 0 0 1 0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat',
              backgroundSize: '150px 150px'
            }}>
          </div>
        </div>

        {/* 1. Hero Section (vd1) */}
        <section ref={(el) => setPanelRef(el, 0)} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 pt-20">
          <div className="absolute inset-0 z-0">
            <video src="/interior_vd1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/40 to-[#0F0F0F]/90 z-10"></div>
          
          <div className="relative z-20 w-full text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-orange-500 tracking-[0.35em] uppercase text-xs md:text-sm font-semibold mb-8"
            >
              Premium Interior & Architectural Design
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-[#F6F4EE] leading-[1.1] mb-8"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Design Your <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">Dream Space</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-[#F6F4EE]/70 max-w-2xl text-lg md:text-xl font-light leading-relaxed mb-12"
            >
              Curated collections of ultra-premium interiors, luxury residential designs, and architectural surfaces for spaces that demand perfection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <a href="#explore" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-500 group uppercase tracking-widest text-xs font-bold">
                Explore Collections
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. Residential Section (vd2) */}
        <section id="explore" ref={(el) => setPanelRef(el, 1)} className="relative h-screen w-full flex items-center overflow-hidden z-20">
          <div className="absolute inset-0 z-0">
            <video src="/interior_vd2.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover scale-105" />
          </div>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10"></div>
          
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 text-content flex justify-end">
            <div className="max-w-2xl w-full bg-[#0F0F0F]/95 backdrop-blur-3xl border border-white/20 p-10 md:p-14 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <span className="text-orange-500 tracking-[0.2em] uppercase text-xs font-bold mb-4 block">01 / Collection</span>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-8" style={{ fontFamily: 'Georgia, serif' }}>Residential <span className="italic text-gray-400">Sanctuaries</span></h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {["Living Room Design", "Bedroom Design", "Modular Kitchen", "Dining Room", "Bathroom Design", "Kids Room", "Pooja Room", "Balcony Design", "Home Office", "Complete Home Interior"].map((service, i) => (
                  <div key={i} className="flex items-center gap-4 text-white text-base md:text-lg font-medium">
                    <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] shrink-0"></div>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Commercial Section (v3) */}
        <section ref={(el) => setPanelRef(el, 2)} className="relative h-screen w-full flex items-center overflow-hidden z-30">
          <div className="absolute inset-0 z-0">
            <video src="/interior_v3.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover scale-105" />
          </div>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10"></div>
          
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 text-content flex justify-start">
            <div className="max-w-2xl w-full bg-[#0F0F0F]/95 backdrop-blur-3xl border border-white/20 p-10 md:p-14 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <span className="text-orange-500 tracking-[0.2em] uppercase text-xs font-bold mb-4 block">02 / Collection</span>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-8" style={{ fontFamily: 'Georgia, serif' }}>Commercial <span className="italic text-gray-400">Excellence</span></h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {["Office Interior", "Corporate Office", "Retail Store", "Showroom Design", "Restaurant Interior", "Café Interior", "Hotel Interior", "Clinic & Hospital", "School & College", "Co-working Space"].map((service, i) => (
                  <div key={i} className="flex items-center gap-4 text-white text-base md:text-lg font-medium">
                    <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] shrink-0"></div>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Architectural Section (vd4) */}
        <section ref={(el) => setPanelRef(el, 3)} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden z-40">
          <div className="absolute inset-0 z-0">
            <video src="/interior_vd4.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover scale-105" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/40 to-black/60 z-10"></div>
          
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center text-content mt-24">
            <div className="w-full bg-[#0F0F0F]/95 backdrop-blur-3xl border border-white/20 p-10 md:p-14 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] text-left">
              <span className="text-orange-500 tracking-[0.2em] uppercase text-xs font-bold mb-4 block">03 / Architecture</span>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-10" style={{ fontFamily: 'Georgia, serif' }}>
                Architectural & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">3D Planning</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                {["House Planning", "Villa Design", "Duplex Design", "Apartment Planning", "Elevation Design", "2D Floor Plans", "3D Floor Plans", "Site Planning", "Space Planning", "Landscape Planning", "3D Visualization", "Civil Engineering"].map((service, i) => (
                  <div key={i} className="flex items-center gap-4 text-white text-base md:text-lg font-medium">
                    <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] shrink-0"></div>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </CorporateLayout>
  );
};

export default InteriorDesign;
