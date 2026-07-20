import React, { useRef, useState, useEffect } from 'react';
import CorporateLayout from './CorporateLayout';
import MagneticButton from '../components/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Video, PenTool, Smartphone, TrendingUp, Mic, MonitorPlay, ArrowRight, PlayCircle, Play, Pause, Volume2, VolumeX, CheckCircle2, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
      <video webkit-playsinline='true' preload='auto' 
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
  { id: 'video', icon: <video webkit-playsinline='true' preload='auto' size={32} />, title: "Video Editing", desc: "Cinematic precision for YouTube, Reels, and Commercials.", color: "from-blue-500 to-indigo-600", shadow: "shadow-blue-500/20", bgImage: "/video_editing_bg_ai.png", includes: ["High-retention YouTube Long-form Edits", "Viral-optimized Reels & TikToks", "Color Grading & Cinematic Audio Mixing", "Advanced Motion Graphics & VFX", "Corporate Commercials & Ads"] },
  { id: 'podcast', icon: <Mic size={32} />, title: "Podcast Production", desc: "Studio-quality audio & video multi-cam setups.", color: "from-slate-400 to-slate-600", shadow: "shadow-slate-500/20", bgImage: "/podcast_bg.png", includes: ["Multi-cam Video Switching & Editing", "Professional Audio Mastering & Noise Reduction", "Podcast Studio Setup Consultation", "Short-form Clip Extraction (Shorts/Reels)", "Show Notes & Transcript Generation"] },
  { id: 'graphic', icon: <PenTool size={32} />, title: "Graphic Design", desc: "Logos, brand identity, and stunning visual media.", color: "from-teal-400 to-emerald-600", shadow: "shadow-teal-500/20", bgImage: "/graphic_design_bg.png", includes: ["Brand Identity & Custom Logos", "UI/UX App & Web Interface Design", "Social Media Post Graphics & Carousels", "High-CTR Thumbnail Design", "Marketing Collateral & Pitch Decks"] },
  { id: 'social', icon: <Smartphone size={32} />, title: "Social Media", desc: "Dominating feeds with viral strategies and daily content.", color: "from-cyan-400 to-blue-500", shadow: "shadow-cyan-500/20", bgImage: "/social_media_bg.png", includes: ["Full Social Media Account Management", "Viral Content Strategy & Calendar", "Community Engagement & Growth", "Influencer Marketing & Outreach", "Trend Analysis & Rapid Adapting"] },
  { id: 'marketing', icon: <TrendingUp size={32} />, title: "Digital Marketing", desc: "Data-driven SEO, Google Ads, and Meta campaigns.", color: "from-zinc-400 to-zinc-600", shadow: "shadow-zinc-500/20", bgImage: "/digital_marketing_bg.png", includes: ["Search Engine Optimization (SEO)", "Google Search & Display Ads", "Meta (FB/IG) Advertising Campaigns", "Email Marketing Automation", "Conversion Rate Optimization (CRO)"] },
  { id: 'youtube', icon: <MonitorPlay size={32} />, title: "YouTube Growth", desc: "Thumbnails, SEO, and algorithmic hacking to scale views.", color: "from-blue-600 to-indigo-800", shadow: "shadow-blue-500/20", bgImage: "/youtube_growth_ai_new.png", includes: ["High-CTR Thumbnail Creation", "YouTube Title & Tag SEO Optimization", "Audience Retention & Analytics Analysis", "Channel Branding & Optimization", "Monetization Strategy & Scaling"] }
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
  { name: "Sarah Jenkins", role: "Marketing Director, TechFlow", quote: "Ashervision's video editing completely transformed our YouTube presence. Our retention rates doubled within a month.", rating: 5, image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "David Chen", role: "Founder, Zenith Apparel", quote: "The brand identity and commercials they produced look like they cost $100k+. Absolutely stunning cinematic quality.", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Elena Rodriguez", role: "Tech YouTuber", quote: "I handed them my raw podcast footage and they turned it into a viral shorts machine. Best ROI I've ever gotten.", rating: 5, image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Marcus Thorne", role: "CEO, Thorne Real Estate", quote: "Their team doesn't just shoot videos; they understand marketing psychology. Our ad conversions skyrocketed.", rating: 5, image: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Sophia Patel", role: "Creative Lead, Lumina", quote: "Fast turnaround, incredible attention to detail, and top-tier VFX. They are our go-to agency for all things creative.", rating: 5, image: "https://randomuser.me/api/portraits/women/32.jpg" }
];

const DigitalCreative = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const interval = setInterval(() => {
      if (video.duration && !isNaN(video.duration)) {
        if (video.currentTime >= video.duration - 7) {
          video.currentTime = 0;
          video.play().catch(e => console.log(e));
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      <div ref={containerRef} className="w-full min-h-screen relative selection:bg-blue-600 selection:text-white">

        {/* 1. HERO SECTION */}
        <section className="relative w-full min-h-screen flex items-center justify-center pt-[208px] pb-16 px-4 overflow-hidden z-10 -mt-[80px]">
          {/* BACKGROUND VIDEO */}
          <div className="absolute inset-0 z-0">
            <video 
              ref={heroVideoRef}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-60"
              src="https://v1.pinimg.com/videos/mc/720p/e0/e5/50/e0e5504b09b22881608031623a28830d.mp4" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#000510]/80 via-[#000510]/30 to-[#000510]"></div>
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto mt-12">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
              
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md mb-8 text-[#D4AF37] font-sans tracking-widest text-xs uppercase">
                <span className="w-2 h-2 rounded-full bg-[#F5D76E] animate-pulse shadow-[0_0_10px_rgba(245,215,110,0.8)]"></span>
                Elite Creative Agency
              </motion.div>
              
              <motion.div variants={textRevealContainer} initial="hidden" animate="visible" className="mb-6 overflow-hidden py-2">
                <motion.h1 variants={textRevealItem} className="text-5xl md:text-7xl lg:text-[7.5rem] font-sans font-black text-white tracking-tighter leading-[1] mb-4">
                  Crafting Digital <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D76E] via-[#D4AF37] to-[#AA7C11] drop-shadow-[0_0_30px_rgba(212,175,55,0.2)] font-sans font-black tracking-tighter">
                    Masterpieces.
                  </span>
                </motion.h1>
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto font-sans font-light mb-12 leading-relaxed">
                Transforming ambitious ideas into visually stunning realities. We combine cinematic video production and elite design to elevate your brand's digital presence.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
                <MagneticButton>
                  <a href="#services" className="h-14 w-full sm:w-[260px] bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:brightness-110 text-black rounded-full font-sans font-extrabold text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    View Our Masterpieces
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#contact" className="h-14 w-full sm:w-[220px] bg-transparent border border-white/20 hover:border-white/60 hover:bg-white/5 text-white rounded-full font-sans font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3">
                    Book Strategy Call
                  </a>
                </MagneticButton>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* 2. OUR MASTERPIECES (SCROLLING YOUTUBE SHORTS) */}
        <section id="work" className="relative z-10 py-32 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-white tracking-tighter mb-4">
              Our <span className="font-sans font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Masterpieces</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-sans font-light">Browse our latest viral edits and cinematic productions.</p>
          </div>

          <div 
            className={`relative flex overflow-x-auto group cursor-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory ${selectedVideo ? '' : ''}`}
            onMouseEnter={() => {
              if (!selectedVideo) document.getElementById('custom-scroll-cursor').style.opacity = '1';
            }}
            onMouseLeave={() => {
              const cursor = document.getElementById('custom-scroll-cursor');
              if (cursor) cursor.style.opacity = '0';
            }}
            onMouseMove={(e) => {
              const cursor = document.getElementById('custom-scroll-cursor');
              if (cursor) {
                cursor.style.transform = `translate(${e.clientX - 48}px, ${e.clientY - 48}px)`;
                if (selectedVideo) {
                  cursor.style.opacity = '0';
                } else {
                  cursor.style.opacity = '1';
                }
              }
            }}
          >
            {/* Custom Follow Cursor */}
            <div 
              id="custom-scroll-cursor"
              className="fixed top-0 left-0 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center pointer-events-none z-[60] text-xs font-bold tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-opacity duration-300 opacity-0"
              style={{ transform: 'translate(-100px, -100px)' }}
            >
              SCROLL
            </div>

            {/* Gradient Fades for Smooth Scroll Edges */}
            <div className="sticky left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#000510] to-transparent z-10 pointer-events-none shrink-0"></div>
            
            <div className="flex whitespace-nowrap py-4 items-center">
              {[
                "ug6oueoqbmI", 
                "KGYqKhlGI6Y", 
                "DiH9Pek312c", 
                "me3sFZCXxlg", 
                "C-yZlQXN3rQ", 
                "DLND-0I2FmM",
                "ug6oueoqbmI", 
                "KGYqKhlGI6Y", 
              ].map((videoId, idx) => {
                const isSelected = selectedVideo === videoId;
                return (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedVideo(isSelected ? null : videoId)}
                    className={`snap-center aspect-[9/16] shrink-0 mx-4 md:mx-6 rounded-2xl overflow-hidden border transition-all duration-700 bg-black relative flex items-center justify-center cursor-none group/card
                      ${isSelected 
                        ? 'w-[320px] md:w-[380px] scale-[1.15] z-50 border-white/50 shadow-[0_0_60px_rgba(255,255,255,0.2)]' 
                        : 'w-[280px] md:w-[320px] border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-[1.05] hover:border-white/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] z-10'
                      }
                    `}
                  >
                    <div className={`absolute inset-0 z-20 pointer-events-none transition-colors ${isSelected ? 'bg-transparent' : 'bg-black/40 group-hover/card:bg-transparent'}`}></div>
                    
                    {/* Play Button Overlay (hides when selected) */}
                    <div className={`absolute inset-0 z-30 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isSelected ? 'opacity-0' : 'opacity-0 group-hover/card:opacity-100'}`}>
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        <Play className="text-white w-8 h-8 ml-1" fill="currentColor" />
                      </div>
                    </div>

                    <iframe 
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isSelected ? '0' : '1'}&controls=${isSelected ? '1' : '0'}&loop=1&playlist=${videoId}&modestbranding=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3`} 
                      title={`YouTube Short ${idx}`}
                      frameBorder="0" 
                      allow="autoplay; encrypted-media" 
                      className="w-[150%] h-[150%] scale-[1.1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    ></iframe>
                    
                    {/* Invisible overlay to catch clicks if NOT selected, but allow youtube controls if selected */}
                    {!isSelected && <div className="absolute inset-0 z-40 pointer-events-auto"></div>}
                  </div>
                );
              })}
            </div>

            <div className="sticky right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#000510] to-transparent z-10 pointer-events-none shrink-0"></div>
          </div>
        </section>

        {/* 3. APPLE-STYLE CINEMATIC SCROLL SECTIONS */}
        <div className="relative w-full overflow-hidden bg-black py-20 text-center z-10 border-y border-white/5">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black text-white tracking-tighter mb-6">
            Full-Spectrum <span className="font-sans font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Services</span>
          </h2>
          <div className="w-20 h-[1px] bg-white/20 mx-auto"></div>
          <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-sans font-light">
            We handle the entire creative pipeline. From filming and design to distribution and marketing algorithms.
          </p>
        </div>

        {servicesData.map((service, idx) => (
          <section key={idx} ref={(el) => setPanelRef(el, idx)} className="relative w-full h-screen overflow-hidden bg-[#000510]">
            <div className="absolute inset-0 z-0">
              {service.bgVideo ? (
                <video webkit-playsinline='true' preload='auto' 
                  src={service.bgVideo} 
                  autoPlay loop muted playsInline
                  className="bg-media w-full h-full object-cover origin-center opacity-70"
                />
              ) : (
                <img loading="lazy" 
                  src={service.bgImage} 
                  alt={service.title}
                  className="bg-media w-full h-full object-cover origin-center opacity-70"
                />
              )}
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#000510] via-black/60 to-transparent pointer-events-none"></div>
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-group pointer-events-none">
              <h2 className={`text-5xl md:text-7xl lg:text-[8rem] font-sans font-black tracking-tighter leading-[0.9] mb-8 ${service.id === 'graphic' ? 'drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]' : 'drop-shadow-2xl text-white'}`}>
                {service.id === 'graphic' ? (
                  <span className="box-decoration-clone pr-4 text-transparent bg-clip-text bg-gradient-to-b from-[#F5D76E] via-[#D4AF37] to-[#AA7C11]">
                    {service.title}
                  </span>
                ) : (
                  service.title
                )}
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-sans font-light leading-relaxed mb-12 drop-shadow-md">
                {service.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {service.includes.map((sub, sIdx) => (
                  <div key={sIdx} className="px-6 py-3 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white font-sans font-light tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    {sub}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* 4. OUR CREATIVE PROCESS */}
        <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black/40 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-white tracking-tighter mb-6">
                How We <span className="font-sans font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Operate</span>
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
                    <img loading="lazy" src={step.image} alt={step.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000510] to-transparent"></div>
                    <div className="absolute top-6 left-6 text-6xl font-sans font-black italic tracking-tighter text-white/10 group-hover:text-blue-500/20 transition-colors duration-500">
                      {step.id}
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0 flex-grow relative z-10">
                    <h3 className="text-xl font-sans font-black tracking-tighter text-white mb-4 group-hover:text-blue-400 transition-colors">{step.title}</h3>
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
                {tool} <span className="mx-12 text-blue-500/20 font-sans">â€¢</span>
              </div>
            ))}
          </div>
        </section>



        {/* 6. SERVICE DELIVERY SECTION */}
        <section className="relative z-10 py-32 md:py-48 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#030712] overflow-hidden">
          
          {/* FULL SECTION BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0">
            <img loading="lazy" src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop" alt="Edit Suite setup" className="w-full h-full object-cover opacity-40 object-right mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6 text-blue-400 font-sans font-bold text-xs uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  Unmatched Delivery Standard
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black text-white tracking-tighter mb-6 leading-[1.1]">
                  Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-white">Post-Production</span> & Design.
                </h2>
                <p className="text-gray-300 text-lg md:text-xl font-sans font-light leading-relaxed mb-8 drop-shadow-md">
                  We don't just edit videos; we engineer them for maximum retention and conversion. Using industry-leading workflows and elite visual effects, we deliver assets that dominate the algorithm and elevate your brand identity to a premium level.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-white text-black rounded-full font-sans font-bold text-sm tracking-wide hover:scale-105 transition-transform duration-300 shadow-2xl">
                    Book A Consultation
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Floating Badge over the background */}
          <div className="absolute bottom-10 right-6 lg:right-20 bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-20">
            <div className="flex -space-x-3">
              <img loading="lazy" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a]" />
              <img loading="lazy" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a]" />
              <img loading="lazy" src="https://randomuser.me/api/portraits/men/68.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a]" />
            </div>
            <span className="text-white font-sans font-bold text-sm ml-2">100M+ Views Generated</span>
          </div>
        </section>

        {/* 7. CLIENT TESTIMONIALS */}
        <section className="relative z-10 py-32 border-t border-white/5 bg-black/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-white tracking-tighter mb-4">
              Client <span className="font-sans font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Success</span>
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
                    <div className="flex gap-1 mb-6 text-[#D4AF37]">
                      {[...Array(test.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                    </div>
                    <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed mb-8 flex-grow">"{test.quote}"</p>
                    <div className="flex items-center gap-4">
                      {test.image ? (
                        <img loading="lazy" src={test.image} alt={test.name} className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-sans font-black text-xl uppercase">
                          {test.name.charAt(0)}
                        </div>
                      )}
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


