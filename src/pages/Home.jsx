import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CorporateLayout from './CorporateLayout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, Monitor, Scale, Zap, GraduationCap, Briefcase, 
  Globe, Cpu, Award, CheckCircle 
} from 'lucide-react';
import ShinyText from '../components/ShinyText';
import HlsVideo from '../components/HlsVideo';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Hero Animation
    gsap.fromTo(textRefs.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    );

    // Section Scroll Animations (Tension and Movement)
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <CorporateLayout>
      {/* Fixed Full-Page Mux HLS Background Video */}
      <div className="fixed inset-0 overflow-hidden z-[-2] pointer-events-none bg-black">
        <HlsVideo 
          src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8"
          className="w-full h-full object-cover opacity-80 mix-blend-screen"
        />
      </div>
      {/* Dark Overlay to make text readable across all sections */}
      <div className="fixed inset-0 bg-black/60 z-[-1] pointer-events-none"></div>

      {/* 1. CINEMATIC HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen w-full flex flex-col justify-center items-center">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center mt-20">
          <div className="overflow-hidden mb-6">
            <h1 ref={el => textRefs.current[0] = el} className="font-sans font-black tracking-tighter leading-[0.85] text-6xl sm:text-8xl md:text-9xl text-white">
              MASTER
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 ref={el => textRefs.current[1] = el} className="font-sans font-black tracking-tighter leading-[0.85] text-6xl sm:text-8xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              YOUR FUTURE.
            </h1>
          </div>
          
          <div className="overflow-hidden mb-12 max-w-2xl">
            <p ref={el => textRefs.current[2] = el} className="text-gray-400 text-lg md:text-2xl font-light tracking-wide">
              Every decision feels deliberate. The movement has purpose. The spacing creates tension.
            </p>
          </div>

          <div ref={el => textRefs.current[3] = el} className="overflow-hidden mt-8">
            <Link 
              to="/contact" 
              className="group flex items-center gap-4 bg-white text-black font-black px-10 py-5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-500 ease-out"
            >
              Start The Journey
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE 5 PILLARS (DELIBERATE SPACING & TENSION) */}
      <section className="py-40 text-white relative z-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32" ref={el => sectionRefs.current[0] = el}>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">THE PILLARS.</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              We don't just generate possibilities. We shape structures. We control the rhythm. We refine details.
            </p>
          </div>

          <div className="flex flex-col gap-32">
            {/* Pillar 1 */}
            <div ref={el => sectionRefs.current[1] = el} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="h-[60vh] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 relative group">
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-transparent transition-colors duration-1000 z-10"></div>
                <img src="/custom_tech_logo.jpg" alt="Technology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-80 mix-blend-luminosity" />
              </div>
              <div>
                <Monitor size={48} className="text-blue-500 mb-8" />
                <h3 className="text-5xl font-black mb-6 tracking-tight">Technology</h3>
                <p className="text-gray-300 text-xl font-light leading-relaxed mb-10">Enterprise software, web & mobile applications, AI integration, ERP systems, and secure cloud infrastructure tailored to your exact operational needs.</p>
                <Link to="/contact" className="text-white border-b-2 border-orange-500 pb-2 text-lg font-bold hover:text-orange-500 transition-colors">Explore Tech Solutions</Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div ref={el => sectionRefs.current[2] = el} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <Scale size={48} className="text-orange-500 mb-8" />
                <h3 className="text-5xl font-black mb-6 tracking-tight">Legal</h3>
                <p className="text-gray-300 text-xl font-light leading-relaxed mb-10">Expert consultation, documentation, civil, criminal, and corporate legal representation with unwavering precision.</p>
                <Link to="/contact" className="text-white border-b-2 border-orange-500 pb-2 text-lg font-bold hover:text-orange-500 transition-colors">Consult Experts</Link>
              </div>
              <div className="order-1 md:order-2 h-[60vh] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 relative group">
                <div className="absolute inset-0 bg-orange-900/20 group-hover:bg-transparent transition-colors duration-1000 z-10"></div>
                <img src="/legalpage.jpg" alt="Legal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-80 mix-blend-luminosity" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div ref={el => sectionRefs.current[3] = el} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="h-[60vh] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 relative group">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-1000 z-10"></div>
                <img src="/digitalmarketing.jpg" alt="Creative" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-80 mix-blend-luminosity" />
              </div>
              <div>
                <Zap size={48} className="text-yellow-500 mb-8" />
                <h3 className="text-5xl font-black mb-6 tracking-tight">Creative</h3>
                <p className="text-gray-300 text-xl font-light leading-relaxed mb-10">Brand strategy, SEO, Google Ads, UI/UX design, and premium video editing services that make them pause.</p>
                <Link to="/contact" className="text-white border-b-2 border-orange-500 pb-2 text-lg font-bold hover:text-orange-500 transition-colors">Grow Your Brand</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREMIUM STATS */}
      <section className="py-40 bg-black/40 backdrop-blur-sm text-white relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            <div ref={el => sectionRefs.current[4] = el}>
              <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">500+</div>
              <div className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Clients</div>
            </div>
            <div ref={el => sectionRefs.current[5] = el}>
              <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">10K+</div>
              <div className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Students</div>
            </div>
            <div ref={el => sectionRefs.current[6] = el}>
              <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-800 mb-4">120+</div>
              <div className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Projects</div>
            </div>
            <div ref={el => sectionRefs.current[7] = el}>
              <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">4.9</div>
              <div className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section ref={el => sectionRefs.current[8] = el} className="py-40 bg-transparent relative overflow-hidden flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-12 border border-white/10 backdrop-blur-md">
          <Award size={48} className="text-white" strokeWidth={1} />
        </div>
        <h2 className="text-5xl md:text-8xl font-black mb-10 text-white tracking-tighter">THAT'S DIRECTION.</h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl font-light">
          The difference between something that exists and something that matters.
        </p>
        <Link to="/contact" className="group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black px-12 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-out text-xl">
          Work With Us
          <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
        </Link>
      </section>
    </CorporateLayout>
  );
};

export default Home;
