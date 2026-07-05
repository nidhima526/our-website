import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import CorporateLayout from './CorporateLayout';
import { 
  ArrowRight, Target, Compass, Globe, Mail, CheckCircle, 
  Shield, Users, Award, Clock, Star, Heart, Briefcase, 
  Code, Megaphone, Scale, ChevronRight
} from 'lucide-react';

// Reusable Animated Counter Hook
const useAnimatedCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

const StatCard = ({ title, endValue, suffix = '+' }) => {
  const { count, ref } = useAnimatedCounter(endValue, 2500);
  return (
    <motion.div 
      ref={ref} 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-corporate shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-corporate hover:border-corporate-primary/30"
    >
      <div className="text-4xl font-extrabold text-corporate-primary mb-2 font-sans tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{title}</div>
    </motion.div>
  );
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const AboutUs = () => {
  return (
    <CorporateLayout>
      
      {/* Full Page Background Wrapper */}
      <div 
        className="w-full min-h-screen relative pt-20 pb-20"
      >
        {/* Dark Glass Overlay for the whole page */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Wrapper */}
        <div className="relative z-10">

          {/* SECTION 1: HERO */}
          <section className="text-white pt-24 pb-28 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 font-bold text-[10px] sm:text-xs mb-8 uppercase tracking-[0.2em] text-orange-400 backdrop-blur-sm shadow-xl"
              >
                About MasterTechwith NIDHIMA
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] max-w-5xl mx-auto drop-shadow-lg"
              >
                Empowering Through <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Technology, Legal Expertise</span> <br className="hidden md:block"/>
                & Digital Innovation.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light px-4 drop-shadow-md"
              >
                Building Careers. Creating Digital Solutions. Delivering Trusted Legal Services. We unite professional training, enterprise tech, and legal consulting under one definitive brand.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link to="/contact" className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-lg px-8 py-3 rounded-xl shadow-[0_10px_20px_rgba(249,115,22,0.3)] border-none hover:shadow-[0_15px_30px_rgba(249,115,22,0.4)] transition-all">
                  Explore Services <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-secondary bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:text-orange-300 text-lg px-8 py-3 rounded-xl backdrop-blur-sm transition-all shadow-xl">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </section>

          {/* SECTION 2: OUR STORY */}
          <section className="py-20 relative z-20 border-b border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">Our Journey</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Founded in 2025 with a steadfast vision to make professional education, uncompromising legal support, and enterprise technology services accessible and impactful.
                </p>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  { phase: "PHASE 1", title: "Foundation", desc: "Established the core vision to unite legal, tech, and educational domains under one roof." },
                  { phase: "PHASE 2", title: "Growth", desc: "Providing premium services to students, startups, and professionals across multiple domains." },
                  { phase: "PHASE 3", title: "Expansion", desc: "Scaling operations to serve enterprise businesses with end-to-end digital transformation." },
                  { phase: "PHASE 4", title: "Future Vision", desc: "Becoming India's leading unified platform for multi-disciplinary professional solutions." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} variants={fadeInUp}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 p-6 rounded-[24px] shadow-2xl group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="text-xs font-black text-orange-400 mb-3 tracking-widest">{item.phase}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* SECTION 3 & 4: MISSION & VISION */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                variants={staggerContainer}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <motion.div variants={fadeInUp} className="bg-blue-900/20 backdrop-blur-2xl border border-blue-500/30 p-8 sm:p-10 rounded-[32px] shadow-2xl relative overflow-hidden group hover:bg-blue-900/30 transition-colors duration-500">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/20 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-700 ease-out blur-2xl"></div>
                  <Target size={40} strokeWidth={2} className="text-blue-400 mb-6 relative z-10" />
                  <h3 className="text-2xl font-extrabold mb-4 text-white relative z-10">Our Mission</h3>
                  <p className="text-base text-gray-300 leading-relaxed font-medium relative z-10">
                    To empower students, professionals, and businesses through high-quality education, innovative technology solutions, trusted legal services, and creative digital strategies while maintaining absolute professionalism, integrity, and customer satisfaction.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-orange-900/20 backdrop-blur-2xl border border-orange-500/30 p-8 sm:p-10 rounded-[32px] shadow-2xl relative overflow-hidden group hover:bg-orange-900/30 transition-colors duration-500">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-orange-500/20 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-700 ease-out blur-2xl"></div>
                  <Compass size={40} strokeWidth={2} className="text-orange-400 mb-6 relative z-10" />
                  <h3 className="text-2xl font-extrabold mb-4 text-white relative z-10">Our Vision</h3>
                  <p className="text-base text-gray-300 leading-relaxed font-medium relative z-10">
                    To become one of India's most trusted and respected companies in education, legal services, and technology by consistently delivering innovative, reliable, and affordable solutions for everyone.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 5: MEET OUR FOUNDERS */}
          <section className="py-20 border-y border-white/10 bg-black/20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">Executive Leadership</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">The visionaries steering MasterTechwith NIDHIMA towards global excellence.</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                
                {/* Founder 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-xl rounded-[24px] p-6 sm:p-8 shadow-2xl border border-white/20 hover:border-orange-500/30 transition-all duration-300 flex flex-col sm:flex-row gap-6 lg:gap-8 group"
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-[16px] overflow-hidden shadow-inner border border-white/10 relative mx-auto sm:mx-0">
                    <img src="/nidhima.jpg" alt="Nidhima - Co-Founder & Director" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-2xl font-black text-white mb-1 group-hover:text-orange-400 transition-colors">NIDHIMA</h3>
                    <p className="text-gray-300 font-bold text-sm mb-4 tracking-wide">Co-Founder & Director</p>
                    
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6">
                      <span className="text-[10px] sm:text-xs bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-full font-bold border border-orange-500/30 uppercase tracking-wider">Technology</span>
                      <span className="text-[10px] sm:text-xs bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-full font-bold border border-orange-500/30 uppercase tracking-wider">Legal</span>
                      <span className="text-[10px] sm:text-xs bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-full font-bold border border-orange-500/30 uppercase tracking-wider">Training</span>
                    </div>
                    
                    <div className="mb-6 text-left inline-block sm:block">
                      <h4 className="text-[10px] font-black text-gray-400 mb-3 uppercase tracking-[0.15em]">Key Responsibilities</h4>
                      <ul className="text-sm font-medium text-gray-300 space-y-2">
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-orange-500 shrink-0"/> Technology Strategy</li>
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-orange-500 shrink-0"/> Software Solutions</li>
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-orange-500 shrink-0"/> Student Training</li>
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-orange-500 shrink-0"/> Legal Coordination</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Founder 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-xl rounded-[24px] p-6 sm:p-8 shadow-2xl border border-white/20 hover:border-blue-500/30 transition-all duration-300 flex flex-col sm:flex-row gap-6 lg:gap-8 group"
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-[16px] overflow-hidden shadow-inner border border-white/10 relative mx-auto sm:mx-0">
                    <img src="/kalyan.jpg" alt="Kalyan - Co-Founder & Director" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-2xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">KALYAN</h3>
                    <p className="text-gray-300 font-bold text-sm mb-4 tracking-wide">Co-Founder & Director</p>
                    
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6">
                      <span className="text-[10px] sm:text-xs bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full font-bold border border-blue-500/30 uppercase tracking-wider">Digital Marketing</span>
                      <span className="text-[10px] sm:text-xs bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full font-bold border border-blue-500/30 uppercase tracking-wider">Creative Services</span>
                    </div>
                    
                    <div className="mb-6 text-left inline-block sm:block">
                      <h4 className="text-[10px] font-black text-gray-400 mb-3 uppercase tracking-[0.15em]">Key Responsibilities</h4>
                      <ul className="text-sm font-medium text-gray-300 space-y-2">
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-blue-500 shrink-0"/> Brand Strategy & SEO</li>
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-blue-500 shrink-0"/> Video & Podcast Editing</li>
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-blue-500 shrink-0"/> Graphic Design</li>
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-blue-500 shrink-0"/> Creative Direction</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* SECTION 6: WHY CHOOSE US */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">The MASTERTECH Advantage</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">We engineer excellence through transparent processes, dedicated support, and multi-disciplinary expertise.</p>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
              >
                {[
                  { title: "Professional Team", img: "/prof_team.png" },
                  { title: "Trusted Services", img: "/trust_icon.png" },
                  { title: "Affordable Pricing", img: "/price_icon.png" },
                  { title: "Quality Assurance", img: "/quality_icon.png" },
                  { title: "Timely Delivery", img: "/time_icon.png" },
                  { title: "Personal Support", img: "/support_icon.png" },
                  { title: "Secure Process", img: "/secure_icon.png" },
                  { title: "Clear Communication", img: "/comm_icon.png" }
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx} variants={fadeInUp}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] p-5 sm:p-6 flex flex-col items-center text-center hover:bg-white/15 hover:border-orange-500/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                  >
                    <div className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform duration-500 rounded-2xl overflow-hidden shadow-inner border border-white/10 bg-white/5 p-3">
                      <img src={feature.img} alt={feature.title} className="w-full h-full object-contain" />
                    </div>
                    <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-orange-400 transition-colors">{feature.title}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* SECTION 7: OUR VALUES */}
          <section className="py-16 relative overflow-hidden bg-black/30 backdrop-blur-md border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-white tracking-tight">Our Core Values</h2>
                <p className="text-gray-300 text-base">The principles that guide our every decision.</p>
              </div>
              <motion.div 
                variants={staggerContainer}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
              >
                {['Integrity', 'Innovation', 'Commitment', 'Professionalism', 'Learning', 'Quality', 'Customer Satisfaction'].map((val, idx) => (
                  <motion.div 
                    key={idx} variants={fadeInUp}
                    className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full font-bold text-sm sm:text-base border border-white/20 text-white hover:bg-orange-500 hover:border-orange-400 shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    {val}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* SECTION 8: COMPANY STATS */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { title: "Students Trained", endValue: 10000 },
                  { title: "Projects Completed", endValue: 120 },
                  { title: "Legal Consults", endValue: 350 },
                  { title: "Happy Clients", endValue: 450 },
                  { title: "Websites Built", endValue: 85 },
                  { title: "Courses Offered", endValue: 25 },
                  { title: "Interns Placed", endValue: 800 },
                  { title: "Years Excellence", endValue: 5, suffix: "" }
                ].map((stat, idx) => (
                   <motion.div 
                     key={idx}
                     whileHover={{ y: -5 }}
                     className="bg-white/10 backdrop-blur-xl p-6 rounded-[24px] shadow-2xl border border-white/20 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-orange-500/50 hover:bg-white/15"
                   >
                     <div className="text-4xl font-extrabold text-white mb-2 font-sans tracking-tight">
                       {stat.endValue}{stat.suffix || '+'}
                     </div>
                     <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">{stat.title}</div>
                   </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 9: OUR WORK PROCESS */}
          <section className="py-24 bg-black/20 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">Execution Methodology</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">Our systematic 6-step approach to delivering flawless enterprise solutions.</p>
              </motion.div>

              <div className="relative max-w-5xl mx-auto">
                {/* Connecting Line (hidden on small screens) */}
                <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-white/20 -translate-y-1/2 z-0"></div>
                
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 relative z-10"
                >
                  {[
                    { step: 1, title: 'Consultation' },
                    { step: 2, title: 'Planning' },
                    { step: 3, title: 'Execution' },
                    { step: 4, title: 'Quality Check' },
                    { step: 5, title: 'Delivery' },
                    { step: 6, title: 'Support' },
                  ].map((process) => (
                    <motion.div key={process.step} variants={fadeInUp} className="flex flex-col items-center group">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl text-white font-black flex items-center justify-center text-2xl shadow-xl border-4 border-white/20 mb-4 group-hover:bg-gradient-to-br from-orange-500 to-yellow-500 group-hover:border-transparent group-hover:scale-110 transition-all duration-500">
                        {process.step}
                      </div>
                      <h4 className="font-bold text-center text-white text-sm group-hover:text-orange-400 transition-colors">{process.title}</h4>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 10: CALL TO ACTION */}
          <section className="py-24 text-center relative overflow-hidden sm:m-6 lg:mx-8 lg:mb-8 rounded-[32px] border border-white/20 bg-black/40 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            
            <div className="max-w-3xl mx-auto px-6 relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                Let's Build Something <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Extraordinary</span> Together.
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-1">
                  Book Consultation
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </CorporateLayout>
  );
};

export default AboutUs;
