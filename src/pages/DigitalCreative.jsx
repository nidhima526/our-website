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
      className={`group relative overflow-hidden bg-black cursor-pointer ${className || (isHorizontal ? 'sm:col-span-2 lg:col-span-3 aspect-video rounded-3xl border border-white/10 shadow-2xl' : 'aspect-[9/16] rounded-3xl border border-white/10 shadow-2xl')}`}
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
          width: '56.25%', // 9/16 of parent width
          height: '177.77%', // 16/9 of parent height
          transform: 'translate(-50%, -50%) rotate(-90deg)'
        } : { transform: 'translate(-50%, -50%)' }}
      />

      {/* Glassmorphism title overlay */}
      <div className="absolute top-4 left-4 right-4 pointer-events-none z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-center">
          <h3 className="text-white font-bold text-sm md:text-base">{video.title}</h3>
        </div>
      </div>

      {/* Custom Controls Container - Appears on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end">
        
        {/* Buttons Row */}
        <div className="px-4 pb-4 flex justify-between items-center pointer-events-auto">
          <button onClick={handleTogglePlay} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-pink-500 transition-all">
            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
          </button>
          
          <button onClick={handleToggleMute} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-pink-500 transition-all">
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-white/20 cursor-pointer pointer-events-auto" onClick={handleSeek}>
          <div className="h-full bg-pink-500 transition-all duration-75 relative" style={{ width: `${progress}%` }}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)] scale-0 group-hover:scale-100 transition-transform"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const servicesData = [
  { id: 'video', icon: <Video size={32} />, title: "Video Editing", desc: "Cinematic precision for YouTube, Reels, and Commercials.", color: "from-pink-500 to-rose-600", shadow: "shadow-pink-500/20", bgImage: "/video-editing.jpg", includes: ["High-retention YouTube Long-form Edits", "Viral-optimized Reels & TikToks", "Color Grading & Cinematic Audio Mixing", "Advanced Motion Graphics & VFX", "Corporate Commercials & Ads"] },
  { id: 'podcast', icon: <Mic size={32} />, title: "Podcast Production", desc: "Studio-quality audio & video multi-cam setups.", color: "from-purple-500 to-indigo-600", shadow: "shadow-purple-500/20", bgImage: "/podcast_bg.png", includes: ["Multi-cam Video Switching & Editing", "Professional Audio Mastering & Noise Reduction", "Podcast Studio Setup Consultation", "Short-form Clip Extraction (Shorts/Reels)", "Show Notes & Transcript Generation"] },
  { id: 'graphic', icon: <PenTool size={32} />, title: "Graphic Design", desc: "Logos, brand identity, and stunning visual media.", color: "from-cyan-400 to-blue-600", shadow: "shadow-cyan-500/20", bgImage: "/graphic_design_bg.png", includes: ["Brand Identity & Custom Logos", "UI/UX App & Web Interface Design", "Social Media Post Graphics & Carousels", "High-CTR Thumbnail Design", "Marketing Collateral & Pitch Decks"] },
  { id: 'social', icon: <Smartphone size={32} />, title: "Social Media", desc: "Dominating feeds with viral strategies and daily content.", color: "from-orange-400 to-red-500", shadow: "shadow-orange-500/20", bgImage: "/social_media_bg.png", includes: ["Full Social Media Account Management", "Viral Content Strategy & Calendar", "Community Engagement & Growth", "Influencer Marketing & Outreach", "Trend Analysis & Rapid Adapting"] },
  { id: 'marketing', icon: <TrendingUp size={32} />, title: "Digital Marketing", desc: "Data-driven SEO, Google Ads, and Meta campaigns.", color: "from-emerald-400 to-teal-600", shadow: "shadow-emerald-500/20", bgImage: "/digital_marketing_bg.png", includes: ["Search Engine Optimization (SEO)", "Google Search & Display Ads", "Meta (FB/IG) Advertising Campaigns", "Email Marketing Automation", "Conversion Rate Optimization (CRO)"] },
  { id: 'youtube', icon: <MonitorPlay size={32} />, title: "YouTube Growth", desc: "Thumbnails, SEO, and algorithmic hacking to scale views.", color: "from-red-500 to-rose-700", shadow: "shadow-red-500/20", bgImage: "/youtube_growth_bg.png", includes: ["High-CTR Thumbnail Creation", "YouTube Title & Tag SEO Optimization", "Audience Retention & Analytics Analysis", "Channel Branding & Optimization", "Monetization Strategy & Scaling"] }
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
      <div className="w-full min-h-screen bg-[#050505] relative selection:bg-pink-600 selection:text-white font-sans overflow-hidden">
        
        {/* FIXED NEON GRID BACKGROUND */}
        <div className="fixed inset-0 z-0">
          <img src="/creative_grid_bg.jpg" alt="Neon Grid Background" className="w-full h-full object-cover opacity-40 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/50 to-[#050505]/90"></div>
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative w-full min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden z-10">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 uppercase mb-8 drop-shadow-lg"
              >
                Welcome to Ashervision Creative
              </motion.h2>

              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-md mb-8 text-pink-400 font-bold tracking-widest text-sm uppercase">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                Digital & Creative Agency
              </motion.div>
              
              <motion.div variants={textRevealContainer} initial="hidden" animate="visible" className="mb-6 overflow-hidden py-2">
                <motion.h1 variants={textRevealItem} className="text-6xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter leading-[0.9] uppercase" style={{ fontFamily: "'Space Grotesk', 'Orbitron', 'Inter', sans-serif" }}>
                  Creative <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                    Dominance
                  </span>
                </motion.h1>
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto font-medium mb-12">
                Elite video production, high-converting graphic design, and data-driven marketing to scale your enterprise to the next level.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
                <MagneticButton>
                  <a href="#work" className="h-16 w-full sm:w-[260px] bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.4)] flex items-center justify-center gap-3">
                    <PlayCircle size={20} /> View Our Work
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#services" className="h-16 w-full sm:w-[260px] bg-[#111] border border-pink-500/30 hover:bg-pink-500/10 text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-xl flex items-center justify-center gap-3">
                    Explore Services
                  </a>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Work section moved to bottom */}
        {/* 2. REAL WORK PORTFOLIO (VIDEO WALL) */}
        <section id="work" className="relative z-10 py-32 border-y border-white/5 bg-[#050505]/60 backdrop-blur-md overflow-visible">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">Our <span className="text-pink-500">Masterpieces</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Browse our latest commercial edits, podcast highlights, and design work.</p>
          </div>
          
          <div className="w-full px-2 md:px-8 relative z-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
              {portfolioVideos.map((video, idx) => (
                <div 
                  key={idx} 
                  className="relative group/card aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-black cursor-pointer transition-all duration-300 hover:scale-[1.15] hover:z-50 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]"
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
                    className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90 group-hover/card:opacity-60 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300 pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-pink-500/20 backdrop-blur-md border border-pink-500/50 mb-2 text-pink-400 font-bold tracking-widest text-[8px] uppercase">
                      {[7, 11, 12, 13].includes(video.id) ? 'Short / Reel' : 'Commercial'}
                    </div>
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wide drop-shadow-md leading-tight line-clamp-2">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID (BENTO STYLE) */}
        <section id="services" className="relative z-10 py-32 bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.05)_0%,transparent_80%)] pointer-events-none"></div>

          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8">Full-Spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Services</span></h2>
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-pink-600 to-transparent mx-auto"></div>
              <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                We handle the entire creative pipeline. From filming and design to distribution and marketing algorithms.
              </p>
            </div>

            {/* Massive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 auto-rows-min">
              {servicesData.map((service, idx) => (
                <div 
                  key={idx} 
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                  }}
                  className={`bento-card relative group p-8 lg:p-10 bg-white/[0.02] rounded-[2rem] border border-white/5 hover:border-pink-500/30 transition-all duration-700 overflow-hidden flex flex-col shadow-2xl hover:shadow-[0_0_50px_rgba(236,72,153,0.15)] min-h-[500px]`}
                >
                  <div className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                       style={{
                         background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(236,72,153,0.15), transparent 40%)`
                       }}
                  />
                  
                  {/* Background Image Generated by AI */}
                  <div className="absolute inset-0 z-0">
                    {service.bgVideo ? (
                      <>
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700">
                          <source src={service.bgVideo} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
                      </>
                    ) : (
                      <>
                        <img src={service.bgImage} alt={service.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 mix-blend-screen" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
                      </>
                    )}
                  </div>
                  
                  {/* Subtle Top Border Glow on hover */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent group-hover:w-[80%] transition-all duration-700 opacity-0 group-hover:opacity-100 z-20`}></div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Minimalist sleek header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        {React.cloneElement(service.icon, { size: 24 })}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider drop-shadow-xl">{service.title}</h3>
                    </div>
                    
                    {/* Highly legible, beautifully spaced list */}
                    <ul className="space-y-4 flex-1 mt-4">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2.5 shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.8)]`}></div>
                          <span className="text-sm md:text-base font-medium leading-snug drop-shadow-md">{item}</span>
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
        <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#050505] overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">How We <span className="text-pink-500">Operate</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">Our proven four-step blueprint to turn your vision into high-converting premium assets.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {creativeProcess.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                  }}
                  className="group relative bg-[#111] border border-white/10 rounded-[2rem] overflow-hidden hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-500 flex flex-col"
                >
                  <div className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                       style={{
                         background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(236,72,153,0.15), transparent 40%)`
                       }}
                  />
                  {/* Top Image */}
                  <div className="h-56 w-full relative overflow-hidden shrink-0">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-8 text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-transparent group-hover:from-pink-500/80 group-hover:to-purple-500/30 transition-colors duration-500">
                      {step.id}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 pt-4 bg-gradient-to-b from-[#111] to-[#0a0a0a] flex-grow relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TOOLS MARQUEE */}
        <section className="relative z-10 py-16 border-t border-white/5 bg-black/50 backdrop-blur-md overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
          
          <div className="flex animate-marquee whitespace-nowrap">
            {[...tools, ...tools, ...tools].map((tool, idx) => (
              <div key={idx} className="mx-8 text-2xl md:text-4xl font-black text-white/10 uppercase tracking-widest hover:text-white/40 transition-colors duration-300 cursor-default">
                {tool} <span className="mx-8 text-pink-500/30">•</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CTA SECTION */}
        <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden relative shadow-[0_0_50px_rgba(236,72,153,0.2)] group">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video 
                src="/creative_bg.mp4" 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
              <div className="absolute inset-0 bg-pink-900/20 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 p-12 md:p-24 text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-pink-500/50 bg-black/50 backdrop-blur-md mb-8 text-pink-400 font-bold tracking-widest text-xs uppercase shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
                  Let's Create Magic
                </div>
                
                <motion.div 
                  variants={textRevealContainer}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="mb-6 overflow-hidden py-2"
                >
                  <motion.h2 
                    variants={textRevealItem}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-2xl"
                  >
                    Ready to <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Dominate?</span>
                  </motion.h2>
                </motion.div>
                
                <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-medium drop-shadow-md">
                  Stop blending in. Let our team craft the premium cinematic assets your brand deserves.
                </p>
                
                <a href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-500 hover:to-purple-500 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                  Start Your Project <ArrowRight size={20} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. CLIENT TESTIMONIALS (MARQUEE) */}
        <section className="relative z-10 py-32 border-t border-white/5 bg-black/40 backdrop-blur-md overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Success</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Don't just take our word for it. Here is what industry leaders say about our work.</p>
          </div>

          <div className="relative flex overflow-x-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-marquee-testimonials whitespace-nowrap group-hover:[animation-play-state:paused] py-4">
              {[...testimonials, ...testimonials].map((test, idx) => (
                <div key={idx} className="w-[400px] md:w-[500px] shrink-0 mx-4 whitespace-normal">
                  <div className="bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 h-full flex flex-col hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl">
                    <div className="flex gap-1 mb-6 text-yellow-500">
                      {[...Array(test.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mb-8 flex-grow">"{test.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl uppercase shadow-lg">
                        {test.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{test.name}</h4>
                        <p className="text-gray-500 text-sm">{test.role}</p>
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
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
        @keyframes marquee-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-testimonials {
          animation: marquee-testimonials 40s linear infinite;
          width: fit-content;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(236, 72, 153, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(236, 72, 153, 0.6);
        }
      `}} />
    </CorporateLayout>
  );
};

export default DigitalCreative;
