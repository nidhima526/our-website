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
      bgVideo: "/home_tech_bg.mp4",
      link: "/technology",
      color: "from-blue-500"
    },
    {
      title: "Legal Services",
      subtitle: "UNWAVERING LEGAL PRECISION",
      desc: "Expert civil, criminal, and corporate legal representation focused on protecting your rights and enterprise.",
      bgVideo: "https://v1.pinimg.com/videos/mc/720p/fb/3d/1c/fb3d1c70e4969f2df7555cfe4095c753.mp4", 
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
      bgVideo: "/creative_hero_new.mp4",
      link: "/contact",
      color: "from-yellow-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 30000); // 30 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const services = [
    {
      title: "Technology Solutions",
      desc: "Enterprise software, AI integration, and secure cloud infrastructure.",
      video: "/home_tech_bg.mp4",
      link: "/technology",
      color: "from-blue-600/20 to-blue-900/20",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Legal Services",
      desc: "Civil, criminal, and corporate legal representation with unwavering precision.",
      video: "https://v1.pinimg.com/videos/mc/720p/fb/3d/1c/fb3d1c70e4969f2df7555cfe4095c753.mp4",
      link: "/legal",
      color: "from-orange-600/20 to-orange-900/20",
      border: "hover:border-orange-500/50"
    },
    {
      title: "Creative & Marketing",
      desc: "Brand strategy, SEO, and premium digital presence that commands attention.",
      video: "/creative_hero_new.mp4",
      link: "/contact", 
      color: "from-yellow-600/20 to-yellow-900/20",
      border: "hover:border-yellow-500/50"
    },
    {
      title: "Interior & 3D Design",
      desc: "Architectural planning and turnkey execution shaping your dream space.",
      image: "/service_interior.png",
      link: "/interior-design",
      color: "from-purple-600/20 to-purple-900/20",
      border: "hover:border-purple-500/50"
    },
    {
      title: "Educational Courses",
      desc: "Master your future with elite training in AI, Java, Python, and more.",
      image: "/service_education.png",
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
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 z-0"
            >
              {heroSlides[currentSlide].bgVideo ? (
                heroSlides[currentSlide].bgVideo.endsWith('.m3u8') ? (
                  <>
                    <HlsVideo src={heroSlides[currentSlide].bgVideo} className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 scale-110" />
                    <HlsVideo src={heroSlides[currentSlide].bgVideo} className="absolute inset-0 w-full h-full object-contain" />
                  </>
                ) : (
                  <>
                    <video src={heroSlides[currentSlide].bgVideo} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 scale-110" />
                    <video src={heroSlides[currentSlide].bgVideo} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-contain z-10" />
                  </>
                )
              ) : (
                <img loading="lazy" 
                  src={heroSlides[currentSlide].bgImage} 
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              )}
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

                    <h1 className="font-sans font-black tracking-tighter leading-tight pb-6 pt-2 text-6xl sm:text-7xl md:text-[7rem] mb-2 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      <span className="box-decoration-clone pr-4 text-transparent bg-clip-text bg-gradient-to-b from-[#F5D76E] via-[#D4AF37] to-[#AA7C11]">
                        {heroSlides[currentSlide].title}
                      </span>
                    </h1>
                    
                    <p className="text-gray-300 text-lg md:text-xl font-sans font-light tracking-wide leading-relaxed mb-10 max-w-xl drop-shadow-lg">
                      {heroSlides[currentSlide].desc}
                    </p>
                    
                    <Link 
                      to={heroSlides[currentSlide].link} 
                      className="inline-flex items-center gap-4 bg-white text-black font-bold tracking-wide text-base px-8 py-4 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      Explore {heroSlides[currentSlide].title.split(' ')[0]}
                      <ArrowRight size={20} />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Carousel Controls & Progress */}
            <div className="absolute bottom-4 left-4 md:left-8 right-4 md:right-8 flex justify-between items-center gap-6 z-20">
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
                      transition={{ duration: currentSlide === idx ? 30 : 0, ease: "linear" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10">
          {/* 2. CORPORATE VISION SECTION */}
          <section className="py-28 px-4 bg-[#050b14] border-y border-white/5">
            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-xs md:text-sm font-sans font-bold text-[#D4AF37] tracking-[0.3em] uppercase mb-8">
                  Our Philosophy
                </h2>
                
                <h3 className="text-3xl md:text-5xl font-sans font-black tracking-tighter text-gray-100 leading-[1.2] pb-4 mb-6">
                  "To engineer <span className="text-[#D4AF37]">possibility</span>, defend <span className="text-[#D4AF37]">integrity</span>, and design <span className="text-[#D4AF37]">brilliance</span> in everything we touch."
                </h3>
                
                <div className="w-16 h-[1px] bg-[#D4AF37]/50 mx-auto mb-10"></div>
                
                <p className="text-lg text-gray-400 font-sans font-light max-w-3xl mx-auto leading-relaxed">
                  We believe that true excellence requires a multi-disciplinary approach. AsherVision brings together elite minds across technology, law, and design to provide comprehensive, uncompromising solutions for your enterprise.
                </p>
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-600">ASHERVISION</span> SERVICES.
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
                    <Link to={service.link} className={`block h-full flex flex-col rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 ${service.border}`}>
                      <div className="w-full h-48 overflow-hidden relative">
                        {service.video ? (
                          service.video.endsWith('.m3u8') ? (
                            <>
                              <HlsVideo src={service.video} className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-110" />
                              <HlsVideo src={service.video} className="absolute inset-0 w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out z-10" />
                            </>
                          ) : (
                            <>
                              <video src={service.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-110" />
                              <video src={service.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out z-10" />
                            </>
                          )
                        ) : (
                          <img loading="lazy" src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                        )}
                        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                      </div>
                      <div className="p-8 pt-0 flex flex-col flex-grow relative z-10">
                        <h3 className="text-3xl md:text-4xl font-sans font-black tracking-tighter pb-3 pt-1 text-transparent bg-clip-text bg-gradient-to-br from-[#F5D76E] via-[#D4AF37] to-[#AA7C11] mb-2 group-hover:brightness-125 transition-all drop-shadow-sm">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">{service.desc}</p>
                        <div className="flex items-center text-sm font-black tracking-widest uppercase text-amber-400 group-hover:text-white transition-colors mt-auto">
                          Explore <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
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
                  { num: "5.0", label: "Rating" }
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
                
                {/* Left Side: Holographic Graphic Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="flex justify-center lg:justify-start lg:sticky lg:top-32 w-full"
                >
                  <div className="relative w-full h-[400px] flex justify-center items-center group cursor-pointer">
                    
                    {/* Inner intense glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#D4AF37]/10 blur-[80px] rounded-full animate-pulse"></div>

                    {/* The Logo itself (Free-floating, no box) */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotateY: 15, rotateX: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="relative z-10"
                    >
                      <motion.img 
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        src="/ashervisionlogo.png" 
                        alt="ASHERVISION Logo" 
                        className="w-72 md:w-96 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]" 
                      />
                    </motion.div>
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
                      ASHERVISION is a multidisciplinary professional services company founded by Kalyan bringing together expertise in Technology Solutions, Legal Services, Professional Education, Interior Design, and Digital Creative Services under one trusted brand.
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

