import React from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import { Megaphone, PenTool, Image, Search, MousePointer, Share2, MonitorPlay, Video, Hash, Mic, Palette, Smartphone, TrendingUp, Briefcase, LineChart, CheckCircle2 } from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const servicesData = [
  {
    title: "Video Editing",
    icon: <Video className="text-corporate-primary" size={28} />,
    services: [
      "YouTube Video Editing", "Podcast Video Editing", "Instagram Reel Editing", "Facebook Video Editing", "Shorts Editing", "Corporate Video Editing", "Promotional Videos", "Advertisement Videos", "Educational Video Editing", "Online Course Video Editing", "Wedding Video Editing", "Event Video Editing", "Vlog Editing", "Documentary Editing", "Cinematic Video Editing", "Motion Graphics", "Intro & Outro Creation", "Subtitle & Caption Editing", "Green Screen Editing", "Color Correction & Color Grading"
    ]
  },
  {
    title: "Podcast Services",
    icon: <Mic className="text-corporate-primary" size={28} />,
    services: [
      "Podcast Audio Editing", "Podcast Video Editing", "Noise Removal", "Audio Enhancement", "Intro & Outro Music", "Podcast Branding", "Podcast Cover Design", "Multi-Camera Podcast Editing", "Podcast Publishing Support", "Podcast Clips for Social Media"
    ]
  },
  {
    title: "Graphic Design",
    icon: <Palette className="text-corporate-primary" size={28} />,
    services: [
      "Logo Design", "Brand Identity", "Business Card Design", "Letterhead Design", "Invoice Design", "Brochure Design", "Flyer Design", "Poster Design", "Banner Design", "Certificate Design", "Invitation Design", "Social Media Posts", "Carousel Designs", "Infographics", "Menu Card Design", "Packaging Design", "Presentation Design (PPT)", "Resume Design", "CV Design", "Portfolio Design"
    ]
  },
  {
    title: "Social Media Management",
    icon: <Smartphone className="text-corporate-primary" size={28} />,
    services: [
      "Instagram Management", "Facebook Management", "LinkedIn Management", "X (Twitter) Management", "Content Calendar", "Daily Posting", "Story Design", "Caption Writing", "Hashtag Research", "Community Management", "Profile Optimization", "Engagement Strategy"
    ]
  },
  {
    title: "Digital Marketing",
    icon: <TrendingUp className="text-corporate-primary" size={28} />,
    services: [
      "Search Engine Optimization (SEO)", "Local SEO", "Technical SEO", "Google Business Profile Optimization", "Google Ads", "Meta Ads (Facebook & Instagram)", "LinkedIn Ads", "YouTube Ads", "Email Marketing", "WhatsApp Marketing", "SMS Marketing", "Content Marketing", "Affiliate Marketing", "Influencer Marketing", "Lead Generation", "Marketing Automation"
    ]
  },
  {
    title: "YouTube Services",
    icon: <FaYoutube className="text-red-600" size={28} />,
    services: [
      "YouTube Channel Setup", "Channel Branding", "Banner Design", "Logo Design", "Thumbnail Design", "SEO Optimization", "Video Upload & Optimization", "Playlist Management", "Monetization Guidance", "Analytics Reports", "Channel Growth Strategy"
    ]
  },
  {
    title: "Instagram Services",
    icon: <FaInstagram className="text-pink-600" size={28} />,
    services: [
      "Account Setup", "Profile Optimization", "Reel Strategy", "Story Design", "Highlight Covers", "Feed Planning", "Organic Growth", "Engagement Strategy", "Content Creation", "Monthly Management"
    ]
  },
  {
    title: "Branding Services",
    icon: <Briefcase className="text-corporate-primary" size={28} />,
    services: [
      "Brand Strategy", "Brand Identity", "Visual Identity", "Brand Guidelines", "Business Naming", "Tagline Creation", "Brand Positioning", "Marketing Materials", "Corporate Profile Design"
    ]
  },
  {
    title: "Content Creation",
    icon: <PenTool className="text-corporate-primary" size={28} />,
    services: [
      "Blog Writing", "Website Content Writing", "Product Descriptions", "Copywriting", "Ad Copy", "Social Media Content", "Script Writing", "Newsletter Content", "Press Releases"
    ]
  },
  {
    title: "Business Growth Services",
    icon: <LineChart className="text-corporate-primary" size={28} />,
    services: [
      "Business Consultation", "Startup Branding", "Marketing Strategy", "Personal Branding", "Sales Funnel Design", "Landing Page Optimization", "Lead Generation Strategy", "Online Presence Development"
    ]
  }
];

const DigitalCreative = () => {
  return (
    <CorporateLayout>
      {/* Full Page Background Wrapper */}
      <div 
        className="w-full min-h-screen relative pt-20"
      >
        {/* Dark Glass Overlay for the whole page */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          
          {/* Page Header */}
          <div className="text-white pt-20 pb-16 flex flex-col items-center text-center px-4">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center justify-center gap-3 mb-6 text-white px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-xl">
              <Megaphone size={20} strokeWidth={2} className="text-purple-400" />
              <span className="font-bold tracking-widest uppercase text-sm">Digital Marketing & Creative</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.15] drop-shadow-lg">
              Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Business Growth</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              Comprehensive brand strategy, high-conversion ad campaigns, and professional creative design to elevate your brand presence.
            </motion.p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md">Our Complete Service Catalog</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto drop-shadow-md">
                From ideation to execution, explore our comprehensive suite of digital and creative services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((category, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-xl rounded-[24px] shadow-2xl border border-white/20 overflow-hidden hover:border-purple-400/50 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="p-6 bg-black/20 border-b border-white/10 flex items-center gap-4 group-hover:bg-black/30 transition-colors">
                    <div className="w-14 h-14 bg-black/40 text-white rounded-xl shadow-inner border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/30 group-hover:text-purple-300 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{category.title}</h3>
                  </div>
                  <div className="p-6 h-[320px] overflow-y-auto custom-scrollbar">
                    <ul className="space-y-4">
                      {category.services.map((service, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-3 text-sm text-gray-200 hover:text-white transition-colors">
                          <CheckCircle2 size={18} className="text-orange-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Custom Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8; 
        }
      `}} />
    </CorporateLayout>
  );
};

export default DigitalCreative;
