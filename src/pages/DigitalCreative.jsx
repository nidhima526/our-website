import React, { useRef, useState } from 'react';
import CorporateLayout from './CorporateLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, PenTool, Smartphone, TrendingUp, Mic, MonitorPlay, ArrowRight, PlayCircle, Play, Pause, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const PortfolioVideoCard = ({ video, isHorizontal, isRotated }) => {
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
      className={`group relative rounded-3xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl cursor-pointer ${
        isHorizontal ? 'sm:col-span-2 lg:col-span-3 aspect-video' : 'aspect-[9/16]'
      }`}
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
  { id: 'video', icon: <Video size={32} />, title: "Video Editing", desc: "Cinematic precision for YouTube, Reels, and Commercials.", color: "from-pink-500 to-rose-600", shadow: "shadow-pink-500/20", bgVideo: "/video_editing_bg.mp4", includes: ["High-retention YouTube Long-form Edits", "Viral-optimized Reels & TikToks", "Color Grading & Cinematic Audio Mixing", "Advanced Motion Graphics & VFX", "Corporate Commercials & Ads"] },
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
  { id: 7, title: "Creative Work 2", src: "/vedio2.mp4" },
  { id: 4, title: "Brand Identity", src: "/portfolio_4.mp4" },
  { id: 5, title: "Podcast Highlight", src: "/portfolio_5.mp4" },
  { id: 6, title: "Creative Work 1", src: "/vedio1.mp4" },
  { id: 11, title: "Creative Work 6", src: "/vedio6.mp4" },
  { id: 8, title: "Creative Work 3", src: "/vedio3.mp4" },
  { id: 9, title: "Creative Work 4", src: "/vedio4.mp4" },
  { id: 10, title: "Creative Work 5", src: "/vedio5.mp4" },
  { id: 12, title: "Creative Work 8", src: "/vedio8.mp4" },
  { id: 13, title: "Creative Work 7", src: "/vedio7.mp4" }
];

const tools = [
  "Adobe Premiere Pro", "After Effects", "Photoshop", "Illustrator", 
  "DaVinci Resolve", "Figma", "Final Cut Pro", "Logic Pro", "Canva", "Blender"
];

const DigitalCreative = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <CorporateLayout>
      <div className="w-full min-h-screen bg-[#050505] relative selection:bg-pink-600 selection:text-white font-sans overflow-hidden">
        
        {/* FIXED ABSTRACT BACKGROUND */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative w-full min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden z-10">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-md mb-8 text-pink-400 font-bold tracking-widest text-sm uppercase">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                Digital & Creative Agency
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter leading-[0.9] uppercase mb-6" style={{ fontFamily: "'Space Grotesk', 'Orbitron', 'Inter', sans-serif" }}>
                Creative <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                  Dominance
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto font-medium mb-12">
                Elite video production, high-converting graphic design, and data-driven marketing to scale your enterprise to the next level.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
                <a href="#work" className="px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(236,72,153,0.4)] flex items-center gap-3">
                  <PlayCircle size={20} /> View Our Work
                </a>
                <a href="#services" className="px-10 py-5 bg-[#111] border border-pink-500/30 hover:bg-pink-500/10 text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:-translate-y-1 shadow-xl">
                  Explore Services
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. REAL WORK PORTFOLIO (DRIVE VIDEOS) */}
        <section id="work" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">Our <span className="text-pink-500">Masterpieces</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">Browse our latest commercial edits, podcast highlights, and design work.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioVideos.map((video) => (
                <PortfolioVideoCard 
                  key={video.id} 
                  video={video} 
                  isHorizontal={[7, 11, 12, 13].includes(video.id)} 
                  isRotated={[7, 11, 12, 13].includes(video.id)} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. SERVICES SLIDER */}
        <section id="services" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">Full-Spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span></h2>
                <p className="text-gray-400 max-w-xl text-lg">We handle the entire creative pipeline. From filming and design to distribution and marketing algorithms.</p>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => document.getElementById('services-slider').scrollBy({ left: -400, behavior: 'smooth' })}
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md"
                >
                  <ArrowRight size={24} className="rotate-180" />
                </button>
                <button 
                  onClick={() => document.getElementById('services-slider').scrollBy({ left: 400, behavior: 'smooth' })}
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>

            <div 
              id="services-slider"
              className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {servicesData.map((service, idx) => (
                <motion.div 
                  key={idx}
                  onClick={() => {
                    setActiveService(activeService === service.id ? null : service.id);
                    setTimeout(() => document.getElementById('included-services')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
                  }}
                  initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className={`snap-start shrink-0 w-[85vw] sm:w-[400px] group relative p-10 rounded-3xl bg-[#0a0a0a] border transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col ${
                    activeService === service.id ? 'border-white/40 ring-1 ring-white/20' : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-[50px] transition-all duration-700 rounded-full group-hover:scale-150`}></div>
                  
                  <div className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} ${service.shadow} shadow-lg flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    {React.cloneElement(service.icon, { size: 36 })}
                  </div>
                  
                  <h3 className="relative z-10 text-3xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{service.title}</h3>
                  <p className="relative z-10 text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">{service.desc}</p>
                  
                  <div className="relative z-10 flex items-center text-sm font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors mt-8 pt-6 border-t border-white/5 group-hover:border-white/20">
                    {activeService === service.id ? "Close Details" : "Explore Service"} 
                    <ArrowRight size={18} className={`ml-2 transition-all duration-500 ${activeService === service.id ? 'rotate-90' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* EXPANDED INCLUDED SERVICES SECTION */}
            <AnimatePresence>
              {activeService && (
                <motion.div
                  id="included-services"
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  className="mt-8 relative z-20"
                >
                  <div className="p-8 md:p-12 border border-white/20 rounded-3xl relative overflow-hidden shadow-2xl min-h-[400px] flex items-center">
                    {(() => {
                      const service = servicesData.find(s => s.id === activeService);
                      return (
                        <>
                          {service.bgVideo ? (
                            <div className="absolute inset-0 z-0">
                              <video src={service.bgVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/60"></div>
                            </div>
                          ) : service.bgImage ? (
                            <div className="absolute inset-0 z-0">
                              <img src={service.bgImage} alt={service.title} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/60"></div>
                            </div>
                          ) : (
                            <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-xl"></div>
                          )}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 w-full">
                          <div className="flex flex-col justify-center">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
                              {React.cloneElement(service.icon, { size: 16, className: 'text-white' })}
                              <span className="text-xs font-bold tracking-widest uppercase text-white">Full Breakdown</span>
                            </div>
                            <h3 className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${service.color} mb-6`}>{service.title}</h3>
                            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8">{service.desc}</p>
                            <a href="/contact" className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r ${service.color} text-white font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform w-fit`}>
                              Request {service.title}
                            </a>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h4 className="text-white font-bold tracking-widest uppercase mb-8 flex items-center gap-3">
                              <CheckCircle2 className="text-gray-400" size={24} /> What's Included
                            </h4>
                            <ul className="space-y-6">
                              {service.includes.map((item, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors text-base md:text-lg"
                                >
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 shrink-0 shadow-[0_0_10px_currentColor]`}></div>
                                  <span className="leading-snug">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        </>
                      );
                    })()}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 4. TOOLS MARQUEE */}
        <section className="relative z-10 py-16 border-y border-white/5 bg-black/50 backdrop-blur-md overflow-hidden flex items-center">
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

        {/* 5. CTA SECTION */}
        <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-[3rem] p-12 md:p-20 text-center border border-pink-500/20 shadow-[0_0_50px_rgba(236,72,153,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-8">Ready to dominate <br className="hidden md:block"/> your niche?</h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">Stop blending in. Let our team craft the premium assets your brand deserves.</p>
              <a href="/contact" className="inline-flex items-center gap-3 px-12 py-6 bg-white text-black hover:bg-gray-200 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 hover:-translate-y-1 shadow-2xl">
                Start Your Project <ArrowRight size={20} />
              </a>
            </motion.div>
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
