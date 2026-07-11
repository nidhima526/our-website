import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CorporateLayout from './CorporateLayout';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Monitor, Scale, Zap, Box, BookOpen, Briefcase, Award, ChevronRight, ChevronLeft 
} from 'lucide-react';
import HlsVideo from '../components/HlsVideo';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Technology Solutions",
      subtitle: "ENGINEERING THE DIGITAL FUTURE",
      desc: "Enterprise software, AI integration, and secure cloud infrastructure tailored to your exact operational needs.",
      bgImage: "/tech_bg.png",
      link: "/technology",
      color: "from-blue-500"
    },
    {
      title: "Legal Services",
      subtitle: "UNWAVERING LEGAL PRECISION",
      desc: "Expert civil, criminal, and corporate legal representation focused on protecting your rights and enterprise.",
      bgImage: "/ap_telangana_court.png", 
      link: "/legal",
      color: "from-orange-500"
    },
    {
      title: "Interior Design",
      subtitle: "SHAPING YOUR DREAM SPACE",
      desc: "Premium 3D interior design, architectural planning, and turnkey execution services.",
      bgImage: "/interior_hero_generated.png",
      link: "/interior-design",
      color: "from-purple-500"
    },
    {
      title: "Creative & Marketing",
      subtitle: "BRAND STRATEGIES THAT PAUSE",
      desc: "SEO, Google Ads, UI/UX design, and premium media services that command absolute attention.",
      bgImage: "/digitalmarketing.jpg",
      link: "/contact",
      color: "from-yellow-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const services = [
    {
      title: "Technology Solutions",
      desc: "Enterprise software, AI integration, and secure cloud infrastructure.",
      icon: <img src="/tech_logo.png" alt="Tech Solutions" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />,
      link: "/technology",
      color: "from-blue-600/20 to-blue-900/20",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Legal Services",
      desc: "Civil, criminal, and corporate legal representation with unwavering precision.",
      icon: <img src="/legal_logo.png" alt="Legal Services" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />,
      link: "/legal",
      color: "from-orange-600/20 to-orange-900/20",
      border: "hover:border-orange-500/50"
    },
    {
      title: "Creative & Marketing",
      desc: "Brand strategy, SEO, and premium digital presence that commands attention.",
      icon: <img src="/creative_logo.png" alt="Creative & Marketing" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />,
      link: "/contact", 
      color: "from-yellow-600/20 to-yellow-900/20",
      border: "hover:border-yellow-500/50"
    },
    {
      title: "Interior & 3D Design",
      desc: "Architectural planning and turnkey execution shaping your dream space.",
      icon: <img src="/interior_logo.png" alt="Interior Design" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />,
      link: "/interior-design",
      color: "from-purple-600/20 to-purple-900/20",
      border: "hover:border-purple-500/50"
    },
    {
      title: "Educational Courses",
      desc: "Master your future with elite training in AI, Java, Python, and more.",
      icon: <img src="/courses_logo.png" alt="Educational Courses" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />,
      link: "/courses",
      color: "from-green-600/20 to-green-900/20",
      border: "hover:border-green-500/50"
    }
  ];

  return (
    <CorporateLayout>
      <div ref={containerRef} className="relative bg-[#050505]">
        
        {/* 1. DYNAMIC HERO CAROUSEL SECTION */}
        <section className="relative h-screen w-full overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
            >
              <img 
                src={heroSlides[currentSlide].bgImage} 
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide + 'text'}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${heroSlides[currentSlide].color} to-white animate-pulse`}></span>
                      <span className="text-xs md:text-sm font-bold text-gray-300 tracking-[0.2em]">{heroSlides[currentSlide].subtitle}</span>
                    </div>
                    
                    <h1 className="font-sans font-black tracking-tighter leading-[0.9] text-5xl sm:text-7xl md:text-[5.5rem] text-white mb-8">
                      {heroSlides[currentSlide].title}
                    </h1>
                    
                    <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide leading-relaxed mb-10 max-w-xl">
                      {heroSlides[currentSlide].desc}
                    </p>
                    
                    <Link 
                      to={heroSlides[currentSlide].link} 
                      className="inline-flex items-center gap-4 bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                      Explore {heroSlides[currentSlide].title.split(' ')[0]}
                      <ArrowRight size={20} />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Carousel Controls & Progress */}
            <div className="absolute bottom-12 left-4 md:left-8 right-4 md:right-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-sm text-white">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-sm text-white">
                  <ChevronRight size={20} />
                </button>
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-1/3">
                {heroSlides.map((_, idx) => (
                  <div key={idx} className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden cursor-pointer" onClick={() => setCurrentSlide(idx)}>
                    <motion.div 
                      className="h-full bg-white"
                      initial={{ width: "0%" }}
                      animate={{ width: currentSlide === idx ? "100%" : currentSlide > idx ? "100%" : "0%" }}
                      transition={{ duration: currentSlide === idx ? 6 : 0, ease: "linear" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10">
          {/* 2. OUR MOTTO SECTION */}
          <section className="py-32 px-4 border-t border-white/5 bg-black/40 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-16 items-center"
              >
                <div className="md:w-1/3">
                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">OUR MOTTO.</h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl md:text-5xl font-light text-gray-200 leading-tight">
                    "To engineer <span className="text-white font-bold">possibility</span>, 
                    defend <span className="text-white font-bold">integrity</span>, and 
                    design <span className="text-white font-bold">brilliance</span> in everything we touch."
                  </h3>
                  <p className="mt-8 text-xl text-gray-500 font-light">
                    We believe that true excellence requires a multi-disciplinary approach. That's why we bring together elite minds across technology, law, and design to provide comprehensive solutions that never compromise.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 3. OUR SERVICES BENTO BOX */}
          <section className="py-32 px-4 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
                >
                  ALL SERVICES.
                </motion.h2>
                <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                  Comprehensive expertise across multiple domains, delivered with absolute precision.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                  >
                    <Link to={service.link} className={`block h-full p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 ${service.border}`}>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.color} border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-8">{service.desc}</p>
                      <div className="flex items-center text-sm font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors mt-auto">
                        Explore <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* 4. PREMIUM STATS */}
          <section className="py-24 bg-black/40 backdrop-blur-sm text-white border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {[
                  { num: "500+", label: "Clients" },
                  { num: "10K+", label: "Students" },
                  { num: "120+", label: "Projects" },
                  { num: "4.9", label: "Rating" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">{stat.num}</div>
                    <div className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. COMPANY DATA & CTA SECTION */}
          <section className="py-32 bg-[#050505] px-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Side: Logo */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex justify-center lg:justify-start lg:sticky lg:top-32"
                >
                  <div className="relative p-12 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-sm w-full flex justify-center">
                    <img 
                      src="/logo.png" 
                      alt="ASHERVISION Logo" 
                      className="w-64 md:w-80 object-contain mix-blend-screen drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]" 
                    />
                  </div>
                </motion.div>

                {/* Right Side: Company Data & CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="flex flex-col text-center lg:text-left"
                >
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 w-fit mb-6 mx-auto lg:mx-0">
                    <Award size={16} />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">About Ashervision</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tighter leading-tight capitalize">
                    Prosperity Meets Precious.
                  </h2>
                  
                  <div className="space-y-6 text-left">
                    <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                      ASHERVISION is a multidisciplinary professional services company co-founded by Kalyan and Nidhima bringing together expertise in Technology Solutions, Legal Services, Professional Education, Interior Design, and Digital Creative Services under one trusted brand.
                    </p>
                    <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                      Driven by innovation, integrity, and a client-first approach, we partner with students, professionals, startups, businesses, and institutions to deliver practical solutions that solve real-world challenges. Every project is built with attention to quality, professionalism, and long-term value.
                    </p>
                    <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                      At ASHERVISION, we believe every idea has the potential to create meaningful impact. Whether it's developing digital platforms, providing legal guidance, designing inspiring spaces, delivering industry-focused training, or building powerful brand identities, our mission is to help our clients move forward with confidence.
                    </p>
                  </div>
                </motion.div>
                
              </div>
              
              {/* Vision, Center Button, Mission Section */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-32 w-full flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-16 relative z-10"
              >
                {/* Our Vision */}
                <div className="flex-1 bg-white/[0.03] p-10 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md text-center flex flex-col items-center justify-center hover:bg-white/[0.05] transition-colors shadow-2xl">
                  <h3 className="text-3xl font-black text-white mb-6 tracking-widest uppercase">Our Vision</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mb-8 rounded-full"></div>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                    To become one of India's most trusted multidisciplinary professional service companies, delivering innovative solutions in technology, legal services, education, design, and digital transformation while building lasting relationships with our clients.
                  </p>
                </div>

                {/* Our Mission */}
                <div className="flex-1 bg-white/[0.03] p-10 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md text-center flex flex-col items-center justify-center hover:bg-white/[0.05] transition-colors shadow-2xl">
                  <h3 className="text-3xl font-black text-white mb-6 tracking-widest uppercase">Our Mission</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mb-8 rounded-full"></div>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                    To empower individuals, businesses, and institutions by providing reliable professional services, innovative technology solutions, quality education, creative excellence, and trusted consultation that contribute to sustainable growth and long-term success.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </CorporateLayout>
  );
};

export default Home;
