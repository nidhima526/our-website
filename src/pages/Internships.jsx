import React, { useRef, useEffect } from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import Hls from 'hls.js';
import { 
  Briefcase, Code, Monitor, PenTool, Megaphone, 
  CheckCircle2, FileText, Award, ArrowRight, Target, Users
} from 'lucide-react';

const Internships = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8";

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.error("Video play failed", e));
      });
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.error("HLS Video play failed", e));
      });
      
      return () => {
        hls.destroy();
      };
    }
  }, []);

  const programs = [
    { title: 'Python Development Internship', category: 'Backend Engineering', duration: '6 Months', logo: '/python_course_logo.png' },
    { title: 'Web Development Internship', category: 'Full Stack', duration: '3 Months', logo: '/web_app_logo.png' },
    { title: 'AI Engineering Internship', category: 'Machine Learning', duration: '6 Months', logo: '/ai_course_logo.png' },
    { title: 'UI/UX Design Internship', category: 'Product Design', duration: '3 Months', logo: '/uiux_design_logo.png' },
    { title: 'Digital Marketing Internship', category: 'Growth Strategy', duration: '3 Months', logo: '/digital_marketing_logo.png' },
    { title: 'Graphic Design Internship', category: 'Creative', duration: '3 Months', logo: '/uiux_design_logo.png' },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <CorporateLayout>
      {/* Full Page Background Wrapper */}
      <div className="w-full min-h-screen relative pt-20 pb-20 font-body">
        
        {/* HLS Background Video */}
        <div className="fixed inset-0 overflow-hidden z-[-2] pointer-events-none bg-black">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            crossOrigin="anonymous"
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          
          {/* Page Header */}
          <div className="text-white pt-20 pb-16 flex flex-col items-center text-center px-4">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase mb-8 drop-shadow-lg"
            >
              Welcome to Ashervision Internships
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} 
              className="liquid-glass inline-flex items-center justify-center gap-3 mb-6 text-white px-6 py-2.5 rounded-full shadow-xl"
            >
              <Briefcase size={20} strokeWidth={2} className="text-cyan-400" />
              <span className="font-bold tracking-widest uppercase text-sm font-body">Corporate Internships</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1] drop-shadow-lg"
            >
              Accelerate Your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-heading italic font-normal tracking-[-2px]">Professional Career.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} 
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md font-body"
            >
              Bridge the gap between academic learning and enterprise execution. Work on live, industry-grade projects under the guidance of our senior engineering and marketing teams.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <a href="#apply" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-lg px-10 py-4 rounded-[1.25rem] shadow-[0_10px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 font-body">
                Apply for Internship
              </a>
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
            <div className="flex flex-col lg:flex-row gap-12">
              
              <div className="flex-[2]">
                
                {/* PROGRAM FEATURES */}
                <motion.div 
                  variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
                >
                  {[
                    { icon: <Target size={28}/>, title: 'Live Projects', desc: 'Work on actual enterprise codebases and client campaigns.', bg: 'bg-cyan-500/20', color: 'text-cyan-400', border: 'border-cyan-500/30' },
                    { icon: <Users size={28}/>, title: 'Senior Mentorship', desc: 'Direct guidance from industry experts.', bg: 'bg-blue-500/20', color: 'text-blue-400', border: 'border-blue-500/30' },
                    { icon: <Award size={28}/>, title: 'Recommendation Letter', desc: 'Official LOR for top-performing interns.', bg: 'bg-purple-500/20', color: 'text-purple-400', border: 'border-purple-500/30' },
                    { icon: <Briefcase size={28}/>, title: 'Placement Assistance', desc: 'Direct referrals for top tech firms.', bg: 'bg-indigo-500/20', color: 'text-indigo-400', border: 'border-indigo-500/30' }
                  ].map((feat, idx) => (
                    <motion.div key={idx} variants={fadeInUp} className="liquid-glass p-6 rounded-[1.25rem] shadow-2xl flex items-start gap-5 hover:-translate-y-2 hover:bg-white/5 transition-all duration-300">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${feat.border} shrink-0 ${feat.bg} ${feat.color}`}>
                        {feat.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1 font-body">{feat.title}</h4>
                        <p className="text-sm text-gray-300 leading-relaxed font-light font-body">{feat.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* AVAILABLE PROGRAMS */}
                <div className="mb-8">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-md font-body">Available Programs</h2>
                  <p className="text-gray-300 mt-2 drop-shadow-md font-body">Select the track that aligns with your career goals.</p>
                </div>
                
                <motion.div 
                  variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {programs.map((prog, idx) => (
                    <motion.div 
                      key={idx} variants={fadeInUp} 
                      className="liquid-glass p-6 rounded-[1.5rem] shadow-2xl hover:border-cyan-500/50 hover:bg-white/5 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col"
                    >
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full opacity-50 group-hover:scale-[2] transition-transform duration-700 pointer-events-none blur-xl"></div>
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center overflow-hidden shadow-inner border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shrink-0 p-2">
                          <img src={prog.logo} alt={prog.title} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-body">
                          {prog.category}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-xl text-white mb-4 group-hover:text-cyan-400 transition-colors relative z-10 font-body">{prog.title}</h3>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-300 font-medium mb-6 relative z-10 font-body">
                        <CheckCircle2 size={16} className="text-cyan-400" /> {prog.duration} Program
                      </div>
                      
                      <div className="mt-auto pt-5 border-t border-white/10 relative z-10">
                        <a href="#apply" className="text-sm font-bold text-cyan-400 flex items-center gap-2 group-hover:text-cyan-300 transition-colors font-body">
                          Select Program <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

              </div>

              {/* APPLICATION FORM */}
              <div className="flex-[1]" id="apply">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="liquid-glass p-8 md:p-10 sticky top-24 overflow-hidden relative rounded-[2rem]"
                >
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-bl-full opacity-50 blur-[40px] pointer-events-none"></div>
                  
                  <h3 className="text-2xl font-extrabold mb-3 text-white tracking-tight relative z-10 font-body">Internship Registration</h3>
                  <p className="text-gray-300 text-sm mb-8 font-light relative z-10 font-body">Applications for the upcoming cohort are currently open. Apply early to secure your spot.</p>
                  
                  <form className="space-y-6 relative z-10 font-body">
                    <div className="relative group">
                      <input type="text" id="intName" className="block w-full px-5 py-4 text-white bg-black/40 border border-white/10 rounded-xl appearance-none focus:outline-none focus:border-cyan-500 focus:bg-black/60 peer transition-all placeholder-transparent" placeholder="Full Name" required />
                      <label htmlFor="intName" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black/80 px-2 peer-focus:px-2 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:bg-black/80 left-3 rounded-md">Full Name</label>
                    </div>
                    
                    <div className="relative group">
                      <input type="email" id="intEmail" className="block w-full px-5 py-4 text-white bg-black/40 border border-white/10 rounded-xl appearance-none focus:outline-none focus:border-cyan-500 focus:bg-black/60 peer transition-all placeholder-transparent" placeholder="Email Address" required />
                      <label htmlFor="intEmail" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black/80 px-2 peer-focus:px-2 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:bg-black/80 left-3 rounded-md">Email Address</label>
                    </div>

                    <div className="relative group">
                      <input type="tel" id="intPhone" className="block w-full px-5 py-4 text-white bg-black/40 border border-white/10 rounded-xl appearance-none focus:outline-none focus:border-cyan-500 focus:bg-black/60 peer transition-all placeholder-transparent" placeholder="Phone Number" required />
                      <label htmlFor="intPhone" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black/80 px-2 peer-focus:px-2 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:bg-black/80 left-3 rounded-md">Phone Number</label>
                    </div>
                    
                    <div>
                      <select className="block w-full px-5 py-4 text-white bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-black/60 transition-colors appearance-none font-medium">
                        <option value="" disabled selected className="text-gray-900">Select Program</option>
                        <option className="text-gray-900">Python Development</option>
                        <option className="text-gray-900">Web Development</option>
                        <option className="text-gray-900">AI Engineering</option>
                        <option className="text-gray-900">UI/UX Design</option>
                        <option className="text-gray-900">Digital Marketing</option>
                      </select>
                    </div>
                    
                    <div className="relative group">
                      <input type="text" id="intCollege" className="block w-full px-5 py-4 text-white bg-black/40 border border-white/10 rounded-xl appearance-none focus:outline-none focus:border-cyan-500 focus:bg-black/60 peer transition-all placeholder-transparent" placeholder="College / University" required />
                      <label htmlFor="intCollege" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black/80 px-2 peer-focus:px-2 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:bg-black/80 left-3 rounded-md">College / University</label>
                    </div>

                    <button type="button" className="w-full mt-6 py-4 rounded-xl shadow-[0_10px_20px_rgba(6,182,212,0.3)] bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white hover:shadow-[0_15px_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 text-sm font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 group">
                      Submit Application <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </motion.div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </CorporateLayout>
  );
};

export default Internships;
