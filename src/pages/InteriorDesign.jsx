import React from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import { 
  Home, Building2, Grid, Layers, Compass, 
  Hammer, MessageSquare, CheckCircle2, ArrowRight,
  Phone, Calendar, ClipboardList
} from 'lucide-react';

const servicesData = [
  {
    id: 'residential',
    title: 'Residential Interiors',
    img: 'https://i.pinimg.com/originals/2d/ee/76/2dee76f8cce388364323c9ed9d86e297.jpg',
    icon: <Home size={32} className="text-orange-500 mb-4" />,
    items: [
      'Living Room Design', 'Bedroom Design', 'Modular Kitchen Design', 
      'Dining Room Design', 'Kids Room Design', 'Pooja Room Design', 
      'Bathroom Design', 'Balcony Design', 'Home Office Design', 'Complete Home Interiors'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Interiors',
    img: '/interior_commercial.jpg',
    icon: <Building2 size={32} className="text-orange-500 mb-4" />,
    items: [
      'Office Interior Design', 'Corporate Office Interiors', 'Retail Store Interiors', 
      'Showroom Interiors', 'Restaurant & Café Interiors', 'Hotel & Resort Interiors', 
      'Clinic & Hospital Interiors', 'School & College Interiors', 'Salon & Spa Interiors', 'Co-working Space Design'
    ]
  },
  {
    id: 'modular',
    title: 'Modular Interior Solutions',
    img: 'https://i.pinimg.com/originals/9e/b2/37/9eb237155d0d477bf34f9b39820a348a.jpg',
    icon: <Grid size={32} className="text-orange-500 mb-4" />,
    items: [
      'Modular Kitchen', 'Modular Wardrobes', 'TV Unit Design', 
      'Crockery Unit', 'Study Unit', 'Office Workstations', 
      'Storage Solutions', 'Custom Furniture Design'
    ]
  },
  {
    id: 'ceiling',
    title: 'False Ceiling & Wall Design',
    img: '/interior_ceiling.jpg',
    icon: <Layers size={32} className="text-orange-500 mb-4" />,
    items: [
      'Gypsum False Ceiling', 'POP Ceiling Design', 'Wooden Ceiling Design', 
      'Wall Panel Design', 'Wallpaper Design', 'Decorative Wall Finishes', 
      'Accent Walls', 'Lighting Design'
    ]
  },
  {
    id: 'planning',
    title: 'Space Planning & Styling',
    img: '/interior_planning.jpg',
    icon: <Compass size={32} className="text-orange-500 mb-4" />,
    items: [
      'Space Planning', 'Furniture Layout', 'Color Consultation', 
      'Material Selection', 'Lighting Planning', 'Interior Styling', 
      'Home Décor Consultation', 'Vastu-Based Layout'
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    img: '/interior_renovation.jpg',
    icon: <Hammer size={32} className="text-orange-500 mb-4" />,
    items: [
      'Home Renovation', 'Office Renovation', 'Kitchen Remodeling', 
      'Bathroom Remodeling', 'Living Room Makeover', 'Commercial Space Renovation'
    ]
  }
];

const consultationData = [
  'Online Design Consultation', 'On-site Consultation', 
  'Interior Design Planning', 'Budget Planning', 
  'Material Guidance', 'Design Proposal'
];

const whyChooseUs = [
  'Customized Interior Solutions', 'Modern & Functional Designs', 
  'Space Optimization', 'Quality Material Guidance', 
  'Transparent Pricing', 'Professional Consultation', 
  'Timely Project Planning', 'Client-Centric Approach'
];

const interiorVideos = [
  { id: 1, title: 'Modern Aesthetic', src: 'https://v1.pinimg.com/videos/iht/expMp4/11/9a/7d/119a7db35a1d18e1795adc9f9c1ec521_720w.mp4', type: 'Residential' },
  { id: 2, title: 'Minimalist Elegance', src: 'https://v1.pinimg.com/videos/iht/720p/87/35/3c/87353c2827cc9a5ab528ac696657721a.mp4', type: 'Commercial' },
  { id: 3, title: 'Luxury Interiors', src: 'https://v1.pinimg.com/videos/iht/expMp4/9a/04/66/9a046671e63a7b0ae19d211bcca135e7_720w.mp4', type: 'Residential' },
  { id: 4, title: 'Bespoke Design', src: 'https://v1.pinimg.com/videos/iht/expMp4/4e/b2/fb/4eb2fb95734a8fbfd107b3f1d2f6c64b_720w.mp4', type: 'Commercial' },
  { id: 5, title: 'Premium Styling', src: 'https://v1.pinimg.com/videos/iht/hevcMp4V3/a5/df/ca/a5dfca0d14af8b3931a3acb125f03630_540w.mp4', type: 'Modular' },
  { id: 6, title: 'Architectural Flow', src: 'https://v1.pinimg.com/videos/mc/720p/1c/c5/a0/1cc5a0079852d9c6a73d90a3b380c1ee.mp4', type: 'Residential' }
];

const InteriorDesign = () => {
  return (
    <CorporateLayout>
      <div className="w-full min-h-screen bg-[#0a0a0a] relative selection:bg-orange-500 selection:text-white pb-24 overflow-x-hidden">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="relative z-10">
          
          {/* 1. Hero Section */}
          <div className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden mb-8 shadow-2xl">
            {/* 3D Background Image */}
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#0a0a0a]">
              <img src="/luxury_interior_hero_ai.png" alt="Luxury Interior Design" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/30 to-[#0a0a0a]"></div>
            </div>
            
            <div className="relative z-10 max-w-5xl mx-auto pt-24 pb-12 mt-16">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 uppercase mb-6 drop-shadow-lg"
              >
                Welcome to Ashervision Interiors
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-orange-500 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-6 drop-shadow-lg"
              >
                Premium Interior & Architectural Design
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-8xl font-light text-white leading-[1.1] mb-8 drop-shadow-2xl"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Design Your <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Dream Space</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12 drop-shadow-md"
              >
                Curated collections of ultra-premium interiors, luxury residential designs, and architectural surfaces for spaces that demand perfection.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <a href="#cta" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-600 text-white rounded-full hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-xs font-bold shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                  Start Your Journey
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>
          </div>

          {/* 2. Core Categories Grid (Reverted completely back to the 3-column grid) */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-white font-light mb-4" style={{ fontFamily: 'Georgia, serif' }}>Our <span className="italic text-orange-400">Services</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#141414] border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-colors group flex flex-col"
                >
                  <div className="w-full aspect-[4/5] sm:h-[400px] bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
                    {service.img ? (
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                        <div className="opacity-30 group-hover:scale-110 transition-transform duration-500">
                          {service.icon}
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="p-8 flex-1">
                    <h3 className="text-2xl text-white font-bold mb-6 group-hover:text-orange-400 transition-colors">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5 opacity-70" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3. Design Consultation & Planning */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Background Video */}
              <div className="absolute inset-0 z-0">
                <video src="https://v1.pinimg.com/videos/iht/expMp4/a2/5c/88/a25c88c051d1e6404123b2f7ed5f45be_720w.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60" />
              </div>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/60 to-transparent z-10"></div>
              
              <div className="relative z-20 p-8 md:p-16 w-full md:w-2/3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                  <MessageSquare size={14} /> Expert Advice
                </div>
                <h2 className="text-3xl md:text-5xl text-white font-light mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  Design <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Consultation</span>
                </h2>
                <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                  Every great space begins with a conversation. Let our experts guide you through the planning, budgeting, and material selection processes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                  {consultationData.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white">
                      <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                      <span className="font-medium text-sm md:text-base drop-shadow-md">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* 4. Why Choose Us */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center overflow-hidden">
            <h2 className="text-3xl md:text-4xl text-white font-light mb-12" style={{ fontFamily: 'Georgia, serif' }}>Why Choose <span className="italic text-orange-400">Us</span></h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {whyChooseUs.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-[#141414] border border-white/5 p-6 rounded-2xl hover:bg-[#1a1a1a] transition-colors flex flex-col items-center text-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-white font-medium text-sm leading-relaxed">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 4.5. WORK VIDEOS MARQUEE */}
          <div className="w-full py-20 bg-[#050505] relative overflow-hidden border-t border-white/5">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-white font-light mb-4" style={{ fontFamily: 'Georgia, serif' }}>Our Recent <span className="italic text-orange-400">Projects</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative flex overflow-x-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex animate-marquee-interior whitespace-nowrap group-hover:[animation-play-state:paused] py-4">
                {[...interiorVideos, ...interiorVideos].map((video, idx) => (
                  <div 
                    key={idx} 
                    className={`shrink-0 mx-4 whitespace-normal rounded-2xl overflow-hidden border border-white/10 bg-[#111] relative group/card transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:-translate-y-2 w-[400px] md:w-[500px]`} 
                    style={{ height: '350px' }}
                  >
                    <video 
                      src={video.src}
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500 pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/50 mb-2 text-orange-400 font-bold tracking-widest text-[10px] uppercase">
                        {video.type}
                      </div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide drop-shadow-lg">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Call To Action Footer */}
          <div id="cta" className="w-full py-32 relative overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="/cta_bg.png" alt="Blueprint CTA" className="w-full h-full object-cover opacity-40" />
            </div>
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]/90 z-10"></div>
            <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay z-10"></div>
            
            <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Ready to Transform Your Space?</h2>
              <p className="text-orange-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                Let's turn your vision into reality. Reach out to our design team today.
              </p>
              
              <div className="flex justify-center mt-4">
                <a href="/contact" className="flex items-center justify-center gap-3 bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:bg-orange-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                  <ClipboardList size={20} />
                  GO TO CONTACT FORM
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-interior {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-interior {
          animation: marquee-interior 30s linear infinite;
          width: fit-content;
        }
      `}} />
    </CorporateLayout>
  );
};

export default InteriorDesign;









