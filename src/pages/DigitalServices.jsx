import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SuccessStories from '../components/SuccessStories';
import FaqAccordion from '../components/FaqAccordion';
import FinalCTA from '../components/FinalCTA';
import { 
  Megaphone, Video, Mic, Palette, Share2, Play, AudioWaveform, 
  PenTool, Image as ImageIcon, Layout, Star, ChevronRight, CheckCircle2,
  Clock, UploadCloud, Users
} from 'lucide-react';
import './DigitalServices.css';

const DigitalServices = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const quickServices = [
    { title: "Video Editing", icon: <Video size={24}/>, time: "24-48 Hrs" },
    { title: "Podcast Editing", icon: <Mic size={24}/>, time: "24 Hrs" },
    { title: "Graphic Design", icon: <Palette size={24}/>, time: "Same Day" },
    { title: "Logo Design", icon: <PenTool size={24}/>, time: "3-5 Days" },
    { title: "Brand Identity", icon: <Layout size={24}/>, time: "1 Week" },
    { title: "Thumbnail Design", icon: <ImageIcon size={24}/>, time: "Same Day" },
    { title: "Social Media Mgt.", icon: <Share2 size={24}/>, time: "Monthly" },
    { title: "YouTube Growth", icon: <Play size={24}/>, time: "Monthly" },
    { title: "Instagram Growth", icon: <Users size={24}/>, time: "Monthly" },
    { title: "Content Strategy", icon: <Star size={24}/>, time: "Consulting" }
  ];

  const videoServices = [
    "YouTube Videos", "Instagram Reels", "Shorts", "Corporate Videos", 
    "Educational Videos", "Wedding Videos", "Promo Videos", "Advertisement Videos", 
    "Documentary Editing", "Motion Graphics", "Color Grading", "Subtitle Creation"
  ];

  const podcastServices = [
    "Audio Editing", "Noise Removal", "Mixing", "Mastering", "Video Podcast Editing", 
    "Podcast Clips", "Podcast Branding", "Publishing Assistance", "Spotify Optimization"
  ];

  const graphicServices = [
    "Logo Design", "Brand Identity", "Business Cards", "Letterheads", "Flyers", 
    "Brochures", "Posters", "Certificates", "Presentation Design", "Social Media Posts", 
    "Infographics", "Resume Design"
  ];

  const socialMediaServices = [
    { title: "Instagram Growth", icon: <Share2 size={20}/> },
    { title: "YouTube Growth", icon: <Play size={20}/> },
    { title: "Facebook Management", icon: <Users size={20}/> },
    { title: "LinkedIn Branding", icon: <Layout size={20}/> },
    { title: "Content Calendar", icon: <Clock size={20}/> },
    { title: "Reel Editing", icon: <Video size={20}/> },
    { title: "Shorts Editing", icon: <Video size={20}/> },
    { title: "Thumbnail Design", icon: <ImageIcon size={20}/> },
    { title: "SEO Optimization", icon: <SearchIcon size={20}/> },
    { title: "Channel Branding", icon: <Palette size={20}/> }
  ];

  // Dummy SearchIcon component since we ran out of space in the import
  function SearchIcon({size}) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
  }

  const portfolioFilters = ["All", "Videos", "Podcasts", "Branding", "Social Media"];
  
  const portfolioItems = [
    { title: "Tech Startup Brand Identity", category: "Branding", client: "Startup", gradient: "from-blue-500 to-purple-600" },
    { title: "Fitness Influencer Reels", category: "Videos", client: "Creator", gradient: "from-pink-500 to-orange-400" },
    { title: "Business Podcast Season 1", category: "Podcasts", client: "Agency", gradient: "from-emerald-400 to-cyan-500" },
    { title: "Real Estate Social Campaign", category: "Social Media", client: "Corporate", gradient: "from-amber-400 to-red-500" },
    { title: "Corporate Promo Video", category: "Videos", client: "Corporate", gradient: "from-blue-600 to-indigo-700" },
    { title: "Educational YouTube Series", category: "Videos", client: "Creator", gradient: "from-purple-500 to-pink-500" },
    { title: "Minimalist Logo Design", category: "Branding", client: "Startup", gradient: "from-slate-700 to-slate-900" },
    { title: "True Crime Audio Mix", category: "Podcasts", client: "Creator", gradient: "from-red-600 to-rose-800" }
  ];

  const workflow = [
    "Submit Requirement", "Strategy Discussion", "Creative Planning", 
    "Design & Editing", "Review & Feedback", "Final Delivery", "Ongoing Support"
  ];

  const features = [
    "Professional Editors", "Creative Designers", "Fast Delivery", 
    "Unlimited Revisions", "Premium Quality", "Affordable Pricing", 
    "Secure File Sharing", "Dedicated Manager", "Latest Creative Tools"
  ];

  const pricingPlans = [
    { name: "Starter", price: "₹2,999", desc: "Perfect for single projects.", features: ["1 Video/Design", "2 Revisions", "48h Delivery", "Email Support"] },
    { name: "Professional", price: "₹9,999", desc: "For growing creators.", features: ["4 Videos/Designs", "Unlimited Revisions", "24h Delivery", "Priority Support"] },
    { name: "Business", price: "₹24,999", desc: "Full social media management.", features: ["15 Assets/Month", "Dedicated Manager", "Custom Strategy", "Analytics Report"] },
    { name: "Enterprise", price: "Custom", desc: "Large scale production.", features: ["Unlimited Assets", "On-demand Team", "Brand Identity", "24/7 Support"] }
  ];

  return (
    <div className="app digital-services-page">
      <Navbar />
      
      <main>
        {/* 1. HERO SECTION */}
        <section className="ds-hero">
          <div className="ds-hero-bg"></div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="ds-hero-content">
              <span className="hero-eyebrow text-accent flex items-center gap-2"><Megaphone size={16}/> ASHERVISION Creative</span>
              <h1 className="hero-title mt-4 mb-6">Creative Services That <span className="text-primary">Elevate Your Brand</span></h1>
              <p className="hero-subtitle mb-8 text-muted">We help businesses and creators with professional video editing, podcast editing, graphic design, branding, social media content, and digital marketing assets.</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">Hire Our Team</button>
                <button className="btn btn-outline">View Portfolio</button>
              </div>
            </div>
            
            <div className="ds-hero-illustration hidden lg-flex relative h-[450px]">
              <div className="ds-dashboard premium-card glass-panel flex flex-col p-6 w-full max-w-md absolute right-0 top-1/2 -translate-y-1/2 z-10 overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <div className="font-bold flex items-center gap-2"><Palette size={20} className="text-primary"/> Creative Workspace</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                {/* Simulated Video Timeline */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-muted mb-2 flex items-center gap-1"><Video size={14}/> Video Timeline</div>
                  <div className="h-24 bg-slate-100 rounded-lg border border-slate-200 relative overflow-hidden flex flex-col justify-between p-1">
                    <div className="flex gap-1 h-8"><div className="w-1/3 bg-blue-400 rounded"></div><div className="w-1/2 bg-blue-500 rounded"></div></div>
                    <div className="flex gap-1 h-6"><div className="w-1/4 bg-purple-400 rounded"></div><div className="w-1/3 bg-purple-500 rounded ml-4"></div></div>
                    <div className="flex gap-1 h-4"><div className="w-full bg-emerald-400 rounded"></div></div>
                    <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-red-500 z-10"></div>
                  </div>
                </div>

                {/* Simulated Audio & Brand */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
                    <div className="text-xs font-bold text-muted mb-2 flex items-center gap-1"><Mic size={12}/> Audio</div>
                    <div className="flex items-end gap-0.5 h-8 justify-center opacity-70">
                      {[1,3,2,5,3,4,2,6,3,2,1].map((h,i) => <div key={i} className="w-1.5 bg-primary rounded-t" style={{height: `${h*15}%`}}></div>)}
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 flex flex-col justify-between">
                    <div className="text-xs font-bold text-muted flex items-center gap-1"><Layout size={12}/> Brand Kit</div>
                    <div className="flex gap-2 mt-2">
                      <div className="w-6 h-6 rounded-full bg-primary shadow-sm"></div>
                      <div className="w-6 h-6 rounded-full bg-purple-500 shadow-sm"></div>
                      <div className="w-6 h-6 rounded-full bg-slate-900 shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUICK SERVICES */}
        <section className="section bg-surface pt-0 relative z-20" style={{marginTop: '-40px'}}>
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {quickServices.map((service, idx) => (
                <div key={idx} className="ds-action-card premium-card p-4 flex flex-col items-center text-center cursor-pointer hover:border-primary transition-colors">
                  <div className="text-primary mb-3">
                    {service.icon}
                  </div>
                  <span className="text-sm font-bold mb-1">{service.title}</span>
                  <span className="text-xs text-muted bg-gray-100 px-2 py-0.5 rounded-full">{service.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. VIDEO EDITING */}
        <section className="section" id="video">
          <div className="container">
            <div className="section-header text-center mb-12">
              <div className="w-16 h-16 bg-primary-light text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video size={32} />
              </div>
              <h2 className="text-3xl font-bold">Premium Video Editing</h2>
              <p className="text-muted mt-4 max-w-2xl mx-auto">High-retention editing for YouTubers, engaging Reels for Instagram, and cinematic corporate videos.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {videoServices.map((service, idx) => (
                <div key={idx} className="premium-card p-0 overflow-hidden group cursor-pointer">
                  <div className="h-28 bg-gray-100 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <Play size={32} className="text-white relative z-10 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"/>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-2">{service}</h4>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xs text-muted">24-48h Delivery</span>
                      <button className="text-primary text-xs font-bold">Hire Now <ChevronRight size={12} className="inline"/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PODCAST SERVICES */}
        <section className="section bg-surface" id="podcast">
          <div className="container">
            <div className="section-header text-center mb-12">
              <div className="w-16 h-16 bg-primary-light text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mic size={32} />
              </div>
              <h2 className="text-3xl font-bold">Podcast Production</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {podcastServices.map((service, idx) => (
                <div key={idx} className="premium-card p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer border border-transparent hover:border-primary">
                  <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                    <AudioWaveform size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{service}</h4>
                    <span className="text-xs text-muted">Professional Quality</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. GRAPHIC DESIGN */}
        <section className="section" id="graphics">
          <div className="container">
            <div className="section-header text-center mb-12">
              <div className="w-16 h-16 bg-primary-light text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Palette size={32} />
              </div>
              <h2 className="text-3xl font-bold">Graphic Design & Branding</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {graphicServices.map((service, idx) => (
                <div key={idx} className="premium-card p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-primary">
                  <PenTool size={28} className="text-slate-300 mb-4"/>
                  <h4 className="font-bold text-sm mb-4 flex-grow">{service}</h4>
                  <button className="btn btn-outline w-full text-xs" style={{height: '32px', padding: '0'}}>Hire Designer</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PORTFOLIO GRID */}
        <section className="section bg-surface" id="portfolio">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Featured Creative Work</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {portfolioFilters.map(filter => (
                  <button 
                    key={filter} 
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter ? 'bg-primary text-white' : 'bg-white text-muted border border-gray-200 hover:border-primary'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioItems.filter(item => activeFilter === 'All' || item.category === activeFilter).map((item, idx) => (
                <div key={idx} className="premium-card p-0 overflow-hidden group cursor-pointer">
                  {/* CSS Gradient serving as simulated project thumbnail */}
                  <div className={`h-48 bg-gradient-to-br ${item.gradient} relative flex items-center justify-center`}>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-sm">
                      <span className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">View Project</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{item.category}</div>
                    <h4 className="font-bold text-sm mb-1 line-clamp-1">{item.title}</h4>
                    <div className="text-xs text-muted">{item.client} Client</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. WORKFLOW TIMELINE */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center mb-16">
              <h2 className="text-3xl font-bold">Our Creative Process</h2>
            </div>
            <div className="ds-workflow flex flex-col lg:flex-row justify-between items-center lg:items-start relative max-w-5xl mx-auto gap-8 lg:gap-0">
              <div className="hidden lg-block absolute top-[24px] left-[5%] right-[5%] h-0.5 bg-gray-200 z-0"></div>
              
              {workflow.map((step, idx) => (
                <div key={idx} className="flex flex-row lg:flex-col items-center lg:text-center relative z-10 w-full lg:w-32 gap-4 lg:gap-0">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-lg mb-0 lg:mb-4 shadow-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-sm">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. PRICING */}
        <section className="section bg-surface" id="pricing">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Transparent Pricing</h2>
              <p className="text-muted mt-4">Simple, straightforward plans for every creative need.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans.map((plan, idx) => (
                <div key={idx} className={`premium-card p-6 flex flex-col ${idx === 1 ? 'border-2 border-primary relative transform lg:-translate-y-4 shadow-xl' : ''}`}>
                  {idx === 1 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>}
                  <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
                  <p className="text-muted text-sm mb-6 h-10">{plan.desc}</p>
                  <div className="text-3xl font-bold text-main mb-8">{plan.price}</div>
                  
                  <ul className="flex flex-col gap-3 mb-8 flex-grow">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle2 size={16} className="text-success flex-shrink-0"/> {feat}
                      </li>
                    ))}
                  </ul>
                  <button className={`btn w-full ${idx === 1 ? 'btn-primary' : 'btn-outline'}`}>Choose {plan.name}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. ENQUIRY FORM */}
        <section className="section">
          <div className="container max-w-4xl">
            <div className="premium-card p-8 md:p-12 border-t-8 border-t-primary">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Start Your Creative Project</h2>
                <p className="text-muted mt-2">Tell us about your brand and what you're looking to build.</p>
              </div>
              
              <form className="ds-form flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="ds-input" required />
                  <input type="text" placeholder="Company / Channel Name" className="ds-input" />
                  <input type="email" placeholder="Email Address" className="ds-input" required />
                  <input type="tel" placeholder="Phone Number" className="ds-input" />
                  
                  <select className="ds-input text-muted" required>
                    <option value="" disabled selected>Service Required</option>
                    <option>Video Editing</option><option>Podcast Production</option>
                    <option>Graphic Design</option><option>Social Media Management</option>
                    <option>Complete Brand Identity</option>
                  </select>

                  <select className="ds-input text-muted" required>
                    <option value="" disabled selected>Estimated Budget</option>
                    <option>₹5,000 - ₹15,000</option>
                    <option>₹15,000 - ₹50,000</option>
                    <option>₹50,000+</option>
                  </select>
                </div>

                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center bg-gray-50 hover:border-primary transition-colors cursor-pointer flex flex-col items-center">
                  <UploadCloud size={32} className="text-gray-400 mb-2"/>
                  <span className="text-sm font-medium">Upload Brief / References (Optional)</span>
                  <span className="text-xs text-muted mt-1">Drag and drop or click to browse</span>
                </div>

                <textarea placeholder="Tell us about your project, target audience, and goals..." className="ds-input" rows="4" required></textarea>
                
                <button type="submit" className="btn btn-primary w-full h-14 text-lg mt-2">Request Custom Quote</button>
              </form>
            </div>
          </div>
        </section>

        {/* 11, 13, 14: REUSED SECTIONS */}
        <SuccessStories />
        <FaqAccordion />
        
        <section className="section cta-section">
          <div className="container">
            <div className="cta-banner premium-card text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing Together</h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto">Ready to elevate your brand's visual identity and content strategy? Our creative team is on standby.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn btn-primary" style={{backgroundColor: 'white', color: 'var(--color-primary)'}}>Start Your Project</button>
                <button className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>Book Consultation</button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default DigitalServices;
