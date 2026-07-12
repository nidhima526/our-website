import React, { useRef, useState } from 'react';
import CorporateLayout from './CorporateLayout';
import MagneticButton from '../components/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, PenTool, Smartphone, TrendingUp, Mic, MonitorPlay, ArrowRight, PlayCircle, Play, Pause, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const textRevealContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const textRevealItem = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const PortfolioVideoCard = ({ video, isHorizontal, isRotated, className }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleTogglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p || 0);
    }
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className={`group relative overflow-hidden bg-black cursor-pointer ${className || (isHorizontal ? 'sm:col-span-2 lg:col-span-3 aspect-video rounded-2xl border border-white/5 shadow-2xl' : 'aspect-[9/16] rounded-2xl border border-white/5 shadow-2xl')}`}
      onClick={handleTogglePlay}
    >
      <video 
        ref={videoRef}
        src={video.src}
        autoPlay loop muted playsInline
        onTimeUpdate={handleTimeUpdate}
        className={`absolute top-1/2 left-1/2 opacity-80 group-hover:opacity-100 transition-all duration-500 ${
          isRotated ? 'object-contain bg-black' : 'object-cover w-full h-full -translate-x-1/2 -translate-y-1/2'
        }`}
        style={isRotated ? {
          width: '56.25%',
          height: '177.77%',
          transform: 'translate(-50%, -50%) rotate(-90deg)'
        } : { transform: 'translate(-50%, -50%)' }}
      />

      <div className="absolute top-4 left-4 right-4 pointer-events-none z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-center">
          <h3 className="text-white font-heading tracking-wide text-sm md:text-base">{video.title}</h3>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end">
        <div className="px-4 pb-4 flex justify-between items-center pointer-events-auto">
          <button onClick={handleTogglePlay} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
          </button>
          
          <button onClick={handleToggleMute} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>

        <div className="w-full h-1 bg-white/20 cursor-pointer pointer-events-auto" onClick={handleSeek}>
          <div className="h-full bg-blue-500 transition-all duration-75 relative" style={{ width: `${progress}%` }}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] scale-0 group-hover:scale-100 transition-transform"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const servicesData = [
  { id: 'video', icon: <Video size={32} />, title: "Video Editing", desc: "Cinematic precision for YouTube, Reels, and Commercials.", color: "from-blue-500 to-indigo-600", shadow: "shadow-blue-500/20", bgImage: "/video-editing.jpg", includes: ["High-retention YouTube Long-form Edits", "Viral-optimized Reels & TikToks", "Color Grading & Cinematic Audio Mixing", "Advanced Motion Graphics & VFX", "Corporate Commercials & Ads"] },
  { id: 'podcast', icon: <Mic size={32} />, title: "Podcast Production", desc: "Studio-quality audio & video multi-cam setups.", color: "from-slate-400 to-slate-600", shadow: "shadow-slate-500/20", bgImage: "/podcast_bg.png", includes: ["Multi-cam Video Switching & Editing", "Professional Audio Mastering & Noise Reduction", "Podcast Studio Setup Consultation", "Short-form Clip Extraction (Shorts/Reels)", "Show Notes & Transcript Generation"] },
  { id: 'graphic', icon: <PenTool size={32} />, title: "Graphic Design", desc: "Logos, brand identity, and stunning visual media.", color: "from-teal-400 to-emerald-600", shadow: "shadow-teal-500/20", bgImage: "/graphic_design_bg.png", includes: ["Brand Identity & Custom Logos", "UI/UX App & Web Interface Design", "Social Media Post Graphics & Carousels", "High-CTR Thumbnail Design", "Marketing Collateral & Pitch Decks"] },
  { id: 'social', icon: <Smartphone size={32} />, title: "Social Media", desc: "Dominating feeds with viral strategies and daily content.", color: "from-cyan-400 to-blue-500", shadow: "shadow-cyan-500/20", bgImage: "/social_media_bg.png", includes: ["Full Social Media Account Management", "Viral Content Strategy & Calendar", "Community Engagement & Growth", "Influencer Marketing & Outreach", "Trend Analysis & Rapid Adapting"] },
  { id: 'marketing', icon: <TrendingUp size={32} />, title: "Digital Marketing", desc: "Data-driven SEO, Google Ads, and Meta campaigns.", color: "from-zinc-400 to-zinc-600", shadow: "shadow-zinc-500/20", bgImage: "/digital_marketing_bg.png", includes: ["Search Engine Optimization (SEO)", "Google Search & Display Ads", "Meta (FB/IG) Advertising Campaigns", "Email Marketing Automation", "Conversion Rate Optimization (CRO)"] },
  { id: 'youtube', icon: <MonitorPlay size={32} />, title: "YouTube Growth", desc: "Thumbnails, SEO, and algorithmic hacking to scale views.", color: "from-blue-600 to-indigo-800", shadow: "shadow-blue-500/20", bgImage: "/youtube_growth_bg.png", includes: ["High-CTR Thumbnail Creation", "YouTube Title & Tag SEO Optimization", "Audience Retention & Analytics Analysis", "Channel Branding & Optimization", "Monetization Strategy & Scaling"] }
];

const portfolioVideos = [
  { id: 1, title: "Commercial Edit", src: "/portfolio_1.mp4" },
  { id: 2, title: "Cinematic Reel", src: "/portfolio_2.mp4" },
  { id: 3, title: "Social Media Promo", src: "/portfolio_3.mp4" },
  { id: 4, title: "Brand Identity", src: "/portfolio_4.mp4" },
  { id: 5, title: "Podcast Highlight", src: "/portfolio_5.mp4" },
  { id: 6, title: "Creative Work", src: "/vedio1.mp4" },
  { id: 11, title: "Creative Work", src: "/vedio6.mp4" },
  { id: 8, title: "Creative Work", src: "/vedio3.mp4" },
  { id: 9, title: "Creative Work", src: "/vedio4.mp4" },
  { id: 10, title: "Creative Work", src: "/vedio5.mp4" },
  { id: 12, title: "Creative Work", src: "/vedio8.mp4" },
  { id: 13, title: "Creative Work", src: "/vedio7.mp4" }
];

const tools = [
  "Adobe Premiere Pro", "After Effects", "Photoshop", "Illustrator", 
  "DaVinci Resolve", "Figma", "Final Cut Pro", "Logic Pro", "Canva", "Blender"
];

const creativeProcess = [
  { id: '01', title: "Discovery & Strategy", desc: "Deep dive into your brand identity, target audience, and current algorithm trends to craft a winning blueprint.", image: "/process_discovery.png" },
  { id: '02', title: "Production & Filming", desc: "Execution using cinema-grade RED/ARRI cameras, professional lighting, and expert on-set direction.", image: "/process_filming.png" },
  { id: '03', title: "Editing & VFX", desc: "High-retention editing, cinematic color grading, sound design, and custom motion graphics.", image: "/process_editing.png" },
  { id: '04', title: "Delivery & Scaling", desc: "Multi-platform export formats and strategic publishing advice to maximize organic reach and conversions.", image: "/process_delivery.png" }
];

const testimonials = [
  { name: "Sarah Jenkins", role: "Marketing Director, TechFlow", quote: "Ashervision's video editing completely transformed our YouTube presence. Our retention rates doubled within a month.", rating: 5 },
  { name: "David Chen", role: "Founder, Zenith Apparel", quote: "The brand identity and commercials they produced look like they cost $100k+. Absolutely stunning cinematic quality.", rating: 5 },
  { name: "Elena Rodriguez", role: "Tech YouTuber", quote: "I handed them my raw podcast footage and they turned it into a viral shorts machine. Best ROI I've ever gotten.", rating: 5 },
  { name: "Marcus Thorne", role: "CEO, Thorne Real Estate", quote: "Their team doesn't just shoot videos; they understand marketing psychology. Our ad conversions skyrocketed.", rating: 5 },
  { name: "Sophia Patel", role: "Creative Lead, Lumina", quote: "Fast turnaround, incredible attention to detail, and top-tier VFX. They are our go-to agency for all things creative.", rating: 5 }
];

const DigitalCreative = () => {

  return (
    <CorporateLayout>
      <div className="w-full min-h-screen bg-black relative selection:bg-blue-600 selection:text-white overflow-hidden">
        
        {/* THARUN SPEAKS STYLE DARK NAVY TO BLACK BACKGROUND */}
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#001a33] via-[#000510] to-[#000000]">
          {/* Subtle noise/texture overlay for premium feel */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          {/* Glowing orbs for depth */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#09f]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#001a33]/40 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative w-full min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
              
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-gray-300 font-sans tracking-widest text-xs uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                Digital & Creative Agency
              </motion.div>
              
              <motion.div variants={textRevealContainer} initial="hidden" animate="visible" className="mb-6 overflow-hidden py-2">
                <motion.h1 variants={textRevealItem} className="text-5xl md:text-7xl lg:text-[7.5rem] font-heading text-white tracking-tight leading-[1] mb-4">
                  Creative <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white drop-shadow-2xl font-heading italic">
                    Dominance.
                  </span>
                </motion.h1>
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto font-sans font-light mb-12">
                Elite video production, high-converting graphic design, and data-driven marketing to scale your enterprise.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
                <MagneticButton>
                  <a href="#work" className="h-14 w-full sm:w-[220px] bg-white hover:bg-gray-200 text-black rounded-full font-sans font-semibold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3">
                    View Our Work
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#services" className="h-14 w-full sm:w-[220px] bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full font-sans font-medium text-sm transition-all duration-300 flex items-center justify-center gap-3">
                    Explore Services
                  </a>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. REAL WORK PORTFOLIO (VIDEO WALL) */}
        <section id="work" className="relative z-10 py-32 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-visible">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight mb-4">
              Our <span className="font-heading italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Masterpieces</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-sans font-light">Browse our latest commercial edits, podcast highlights, and design work.</p>
          </div>
          
          <div className="w-full px-4 md:px-8 relative z-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {portfolioVideos.map((video, idx) => (
                <div 
                  key={idx} 
                  className="relative group/card aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-black cursor-pointer transition-all duration-500 hover:scale-[1.1] hover:z-50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
                  onMouseEnter={(e) => {
                    const vid = e.currentTarget.querySelector('video');
                    if (vid) { vid.muted = false; }
                  }}
                  onMouseLeave={(e) => {
                    const vid = e.currentTarget.querySelector('video');
                    if (vid) { vid.muted = true; }
                  }}
                >
                  <video 
                    src={video.src}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover opacity-70 group-hover/card:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000510] via-transparent to-transparent opacity-90 group-hover/card:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300 pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3 text-gray-300 font-sans font-medium text-[9px] uppercase tracking-widest">
                      {[7, 11, 12, 13].includes(video.id) ? 'Short / Reel' : 'Commercial'}
                    </div>
                    <h3 className="text-sm md:text-base font-sans font-semibold text-white drop-shadow-md leading-tight line-clamp-2">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID (BENTO STYLE) */}
        <section id="services" className="relative z-10 py-32 overflow-hidden">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading text-white tracking-tight mb-6">
                Full-Spectrum <span className="font-heading italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Services</span>
              </h2>
              <div className="w-20 h-[1px] bg-white/20 mx-auto"></div>
              <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-sans font-light">
                We handle the entire creative pipeline. From filming and design to distribution and marketing algorithms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-min">
              {servicesData.map((service, idx) => (
                <div 
                  key={idx} 
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                  }}
                  className={`bento-card relative group p-8 lg:p-10 bg-white/[0.02] rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden flex flex-col min-h-[450px] backdrop-blur-sm`}
                >
                  <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                       style={{
                         background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`
                       }}
                  />
                  
                  <div className="absolute inset-0 z-0">
                    <img src={service.bgImage} alt={service.title} className="w-full h-full object-cover opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-105 transition-all duration-1000 grayscale mix-blend-lighten" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000510] via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-5 mb-8">
                      <div className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-500`}>
                        {React.cloneElement(service.icon, { size: 20 })}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-heading text-white tracking-wide">{service.title}</h3>
                    </div>
                    
                    <ul className="space-y-4 flex-1 mt-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-sans font-light">
                          <div className="mt-2 shrink-0 text-white/40 group-hover:text-blue-400 transition-colors">
                            <CheckCircle2 size={14} />
                          </div>
                          <span className="text-sm md:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OUR CREATIVE PROCESS */}
        <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black/40 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight mb-6">
                How We <span className="font-heading italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Operate</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg font-sans font-light">Our proven four-step blueprint to turn your vision into high-converting premium assets.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {creativeProcess.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="group relative bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col"
                >
                  <div className="h-48 w-full relative overflow-hidden shrink-0">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 grayscale mix-blend-lighten" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000510] to-transparent"></div>
                    <div className="absolute top-6 left-6 text-6xl font-heading italic text-white/10 group-hover:text-blue-500/20 transition-colors duration-500">
                      {step.id}
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0 flex-grow relative z-10">
                    <h3 className="text-xl font-heading text-white mb-4 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm font-sans font-light group-hover:text-gray-300">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TOOLS MARQUEE */}
        <section className="relative z-10 py-16 border-y border-white/5 overflow-hidden flex items-center bg-black/60 backdrop-blur-md">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-marquee whitespace-nowrap">
            {[...tools, ...tools, ...tools].map((tool, idx) => (
              <div key={idx} className="mx-12 text-3xl font-heading text-white/10 uppercase tracking-widest hover:text-white/30 transition-colors duration-300 cursor-default">
                {tool} <span className="mx-12 text-blue-500/20 font-sans">•</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CTA SECTION */}
        <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative group border border-white/10">
            <div className="absolute inset-0 z-0">
              <video 
                src="/creative_bg.mp4" 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-20 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000510] via-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10 p-12 md:p-24 text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-gray-300 font-sans text-xs uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  Let's Create Magic
                </div>
                
                <motion.h2 
                  variants={textRevealItem}
                  className="text-4xl md:text-6xl lg:text-7xl font-heading text-white tracking-tight mb-6"
                >
                  Ready to <br className="hidden md:block"/>
                  <span className="font-heading italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Dominate?</span>
                </motion.h2>
                
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans font-light">
                  Stop blending in. Let our team craft the premium cinematic assets your brand deserves.
                </p>
                
                <a href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black hover:bg-gray-200 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  Start Your Project <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. CLIENT TESTIMONIALS */}
        <section className="relative z-10 py-32 border-t border-white/5 bg-black/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-heading text-white tracking-tight mb-4">
              Client <span className="font-heading italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Success</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-sans font-light">Don't just take our word for it. Here is what industry leaders say.</p>
          </div>

          <div className="relative flex overflow-x-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-marquee-testimonials whitespace-nowrap group-hover:[animation-play-state:paused] py-4">
              {[...testimonials, ...testimonials].map((test, idx) => (
                <div key={idx} className="w-[350px] md:w-[450px] shrink-0 mx-4 whitespace-normal">
                  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 h-full flex flex-col hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex gap-1 mb-6 text-white/80">
                      {[...Array(test.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                    </div>
                    <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed mb-8 flex-grow">"{test.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-heading text-xl uppercase">
                        {test.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-sans font-medium">{test.name}</h4>
                        <p className="text-gray-500 font-sans text-sm font-light">{test.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: fit-content;
        }
        @keyframes marquee-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-testimonials {
          animation: marquee-testimonials 50s linear infinite;
          width: fit-content;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </CorporateLayout>
  );
};

export default DigitalCreative;
