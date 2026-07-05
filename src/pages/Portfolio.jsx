import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SuccessStories from '../components/SuccessStories';
import FaqAccordion from '../components/FaqAccordion';
import FinalCTA from '../components/FinalCTA';
import { 
  FolderOpen, Search, Filter, Monitor, Smartphone, Layout, PenTool, 
  Scale, Video, GraduationCap, Briefcase, Award, TrendingUp, CheckCircle2,
  ChevronDown, ExternalLink, ArrowRight, Star, Clock, FileText, Globe, UploadCloud
} from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    "All", "Legal Services", "Web Development", "Mobile Apps", "UI/UX Design", 
    "Digital Marketing", "Graphic Design", "Video Editing", "Podcast Editing", 
    "Courses", "Internships", "Student Projects", "Business Branding", "Case Studies"
  ];

  const projects = [
    { title: "Enterprise Legal Portal", ind: "Law", client: "Corporate", svcs: "Web Dev, UI/UX", tech: "React, Node.js", dur: "4 Months", desc: "A secure portal for managing corporate legal documents and cases.", img: "from-slate-700 to-slate-900", tag: "Web Development" },
    { title: "EdTech Learning App", ind: "Education", client: "Startup", svcs: "Mobile App, UI/UX", tech: "React Native, Firebase", dur: "3 Months", desc: "A mobile application delivering courses to 50k+ students.", img: "from-blue-500 to-indigo-600", tag: "Mobile Apps" },
    { title: "Global E-commerce Redesign", ind: "Retail", client: "Enterprise", svcs: "UI/UX Design", tech: "Figma", dur: "2 Months", desc: "Complete overhaul of the user experience resulting in 40% more sales.", img: "from-purple-500 to-pink-500", tag: "UI/UX Design" },
    { title: "Healthcare Brand Identity", ind: "Healthcare", client: "Hospital", svcs: "Graphic Design, Branding", tech: "Illustrator", dur: "1 Month", desc: "Modern logo and complete brand identity system.", img: "from-emerald-400 to-teal-600", tag: "Graphic Design" },
    { title: "FinTech Social Campaign", ind: "Finance", client: "Startup", svcs: "Digital Marketing", tech: "Meta Ads, Canva", dur: "Ongoing", desc: "Generated 10k+ leads through targeted social media advertising.", img: "from-amber-400 to-orange-500", tag: "Digital Marketing" },
    { title: "Corporate Promo Video", ind: "Technology", client: "B2B SaaS", svcs: "Video Editing", tech: "Premiere Pro", dur: "2 Weeks", desc: "Cinematic promotional video for product launch.", img: "from-red-500 to-rose-700", tag: "Video Editing" },
    { title: "Property Dispute Resolution", ind: "Real Estate", client: "Individual", svcs: "Legal Consultation", tech: "Legal Drafting", dur: "1 Month", desc: "Successfully drafted and settled a complex property dispute out of court.", img: "from-slate-200 to-slate-400", tag: "Legal Services" },
    { title: "Business Podcast S1", ind: "Media", client: "Creator", svcs: "Podcast Editing", tech: "Audition", dur: "3 Months", desc: "Edited and mastered 12 episodes for a top-charting business podcast.", img: "from-cyan-400 to-blue-500", tag: "Podcast Editing" }
  ];

  const caseStudies = [
    { 
      title: "Scaling a Local Business Online", client: "Sharma Retailers",
      prob: "Local store struggling to reach customers outside their immediate neighborhood.",
      sol: "Developed a full-stack e-commerce website and launched a targeted local SEO campaign.",
      tech: "React, Node.js, Google Ads", timeline: "3 Months",
      res: "300% increase in online sales and expanded delivery radius to 50km.",
      feedback: "MasterTech transformed our traditional shop into a modern online business. The transition was seamless."
    },
    { 
      title: "Streamlining Corporate Legal Ops", client: "TechCorp India",
      prob: "Scattered legal documents and inefficient contract management.",
      sol: "Provided comprehensive legal consulting and drafted standardized templates for all vendor agreements.",
      tech: "Legal Drafting, Compliance", timeline: "1 Month",
      res: "Reduced contract turnaround time by 60% and ensured 100% regulatory compliance.",
      feedback: "Nidhima's legal expertise saved us from potential compliance nightmares. Highly professional."
    }
  ];

  const stats = [
    { title: "Projects Completed", value: "500+", icon: <CheckCircle2 size={32}/> },
    { title: "Happy Clients", value: "300+", icon: <Star size={32}/> },
    { title: "Students Trained", value: "50k+", icon: <GraduationCap size={32}/> },
    { title: "Legal Cases Assisted", value: "150+", icon: <Scale size={32}/> }
  ];

  const creativeGallery = [
    { title: "Startup Logo", cat: "Branding", style: "col-span-1 row-span-1 bg-gradient-to-br from-pink-400 to-rose-500" },
    { title: "Fintech Dashboard UI", cat: "UI/UX", style: "col-span-2 row-span-2 bg-gradient-to-br from-blue-600 to-indigo-800" },
    { title: "Social Media Post", cat: "Marketing", style: "col-span-1 row-span-1 bg-gradient-to-br from-amber-300 to-orange-400" },
    { title: "Podcast Cover Art", cat: "Design", style: "col-span-1 row-span-2 bg-gradient-to-br from-purple-500 to-fuchsia-600" },
    { title: "Corporate Brochure", cat: "Print", style: "col-span-2 row-span-1 bg-gradient-to-br from-emerald-400 to-teal-500" },
    { title: "YouTube Thumbnail", cat: "Media", style: "col-span-1 row-span-1 bg-gradient-to-br from-red-500 to-rose-700" }
  ];

  return (
    <div className="app portfolio-page">
      <Navbar />
      
      <main>
        {/* 1. HERO SECTION */}
        <section className="pf-hero">
          <div className="pf-hero-bg"></div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="pf-hero-content">
              <span className="hero-eyebrow text-accent flex items-center gap-2"><FolderOpen size={16}/> Portfolio & Success Stories</span>
              <h1 className="hero-title mt-4 mb-6">Real Projects. Real Results. <span className="text-primary">Real Success.</span></h1>
              <p className="hero-subtitle mb-8 text-muted">Discover how MasterTechGlobal has helped students, businesses, startups, professionals, and legal clients through technology, education, creative services, internships, and legal solutions.</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">Explore Portfolio</button>
                <button className="btn btn-outline">Start Your Project</button>
              </div>
            </div>
            
            <div className="pf-hero-illustration hidden lg-flex relative h-[450px]">
              <div className="pf-dashboard premium-card glass-panel flex flex-col p-6 w-full max-w-md absolute right-0 top-1/2 -translate-y-1/2 z-10 overflow-hidden">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <div className="font-bold flex items-center gap-2"><Layout size={20} className="text-primary"/> MasterTech Impact</div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <div className="text-blue-600 mb-2"><Code size={20}/></div>
                    <div className="text-2xl font-bold text-blue-900">120+</div>
                    <div className="text-xs font-bold text-blue-600/70">Tech Projects</div>
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-white">
                    <div className="text-slate-400 mb-2"><Scale size={20}/></div>
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-xs font-bold text-slate-400">Legal Cases</div>
                  </div>
                </div>

                <div className="bg-surface border border-gray-100 rounded-lg p-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full"></div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-bold flex items-center gap-2"><GraduationCap size={16} className="text-accent"/> Student Success</div>
                    <span className="text-xs text-success font-bold">+24%</span>
                  </div>
                  <div className="flex items-end gap-1 h-12 mt-2">
                    {[30, 45, 25, 60, 40, 75, 50, 85, 65, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-accent/20 rounded-t-sm hover:bg-accent transition-colors cursor-pointer relative group" style={{height: `${h}%`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. ACHIEVEMENTS (Stats) */}
        <section className="section bg-surface pt-0 relative z-20" style={{marginTop: '-40px'}}>
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="premium-card p-6 flex flex-col items-center text-center">
                  <div className="text-primary mb-3 p-3 bg-primary-light rounded-2xl">{stat.icon}</div>
                  <div className="text-3xl font-bold text-main mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-muted">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. FILTERABLE PORTFOLIO */}
        <section className="section" id="portfolio">
          <div className="container">
            <div className="section-header text-center mb-10">
              <h2 className="text-3xl font-bold mb-6">Our Featured Work</h2>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 max-w-5xl mx-auto">
                <div className="relative w-full md:w-64">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                  <input type="text" placeholder="Search projects..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <span className="text-sm text-muted font-medium">Sort By:</span>
                  <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-main focus:outline-none focus:border-primary">
                    <option>Newest</option><option>Popular</option><option>Industry</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                {filters.map(filter => (
                  <button 
                    key={filter} 
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeFilter === filter ? 'bg-slate-900 text-white shadow-md' : 'bg-gray-100 text-muted hover:bg-gray-200'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. FEATURED PROJECTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => activeFilter === 'All' || p.tag === activeFilter || p.tag.includes(activeFilter)).map((proj, idx) => (
                <div key={idx} className="premium-card p-0 flex flex-col group overflow-hidden cursor-pointer">
                  {/* CSS Gradient Thumbnail */}
                  <div className={`h-56 bg-gradient-to-br ${proj.img} relative flex items-center justify-center p-6`}>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <span className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">View Case Study <ArrowRight size={14}/></span>
                    </div>
                    {proj.tag === 'Web Development' && <Monitor size={48} className="text-white/30"/>}
                    {proj.tag === 'Mobile Apps' && <Smartphone size={48} className="text-white/30"/>}
                    {proj.tag === 'Legal Services' && <Scale size={48} className="text-slate-900/30"/>}
                    {proj.tag.includes('Design') && <PenTool size={48} className="text-white/30"/>}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary-light px-2 py-1 rounded">{proj.ind}</span>
                      <span className="text-xs text-muted flex items-center gap-1"><Clock size={12}/> {proj.dur}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{proj.title}</h3>
                    <p className="text-sm text-muted mb-4 line-clamp-2">{proj.desc}</p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="text-xs text-muted mb-1"><span className="font-bold text-main">Services:</span> {proj.svcs}</div>
                      <div className="text-xs text-muted"><span className="font-bold text-main">Tech:</span> {proj.tech}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="btn btn-outline">Load More Projects</button>
            </div>
          </div>
        </section>

        {/* 5. WEBSITE SHOWCASE (Responsive Mockups) */}
        <section className="section bg-slate-900 text-white overflow-hidden">
          <div className="container">
            <div className="section-header text-center mb-16">
              <h2 className="text-3xl font-bold">Responsive Digital Experiences</h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">We build websites and applications that look stunning and perform flawlessly across all devicesâ€”desktop, tablet, and mobile.</p>
            </div>
            
            <div className="relative max-w-5xl mx-auto h-[400px] md:h-[500px] flex items-end justify-center perspective-1000">
              {/* Desktop Mockup */}
              <div className="absolute w-[80%] md:w-[70%] h-[80%] bg-slate-800 rounded-t-xl border-t-8 border-x-8 border-slate-700 shadow-2xl flex flex-col overflow-hidden z-10 bottom-0">
                <div className="h-6 bg-slate-900 border-b border-slate-700 flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div><div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div><div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-blue-900 to-indigo-950 p-6 flex flex-col">
                  <div className="w-full h-12 bg-white/10 rounded mb-6"></div>
                  <div className="flex gap-6 flex-1">
                    <div className="w-1/3 h-full bg-white/5 rounded"></div>
                    <div className="w-2/3 h-full bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Tablet Mockup */}
              <div className="absolute w-[30%] md:w-[25%] h-[65%] bg-slate-800 rounded-xl border-8 border-slate-700 shadow-2xl overflow-hidden z-20 bottom-0 left-[5%] md:left-[10%] shadow-black/50">
                <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 p-3 flex flex-col">
                  <div className="w-full h-8 bg-white/20 rounded mb-4"></div>
                  <div className="w-full h-24 bg-white/10 rounded mb-4"></div>
                  <div className="flex-1 bg-white/5 rounded"></div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute w-[18%] md:w-[12%] h-[55%] bg-slate-800 rounded-3xl border-8 border-slate-700 shadow-2xl overflow-hidden z-30 bottom-0 right-[10%] md:right-[15%] shadow-black/50">
                <div className="w-full h-full bg-gradient-to-b from-emerald-800 to-teal-900 p-2 flex flex-col">
                  <div className="w-full h-6 bg-white/20 rounded-full mb-3"></div>
                  <div className="w-full h-20 bg-white/10 rounded-xl mb-2"></div>
                  <div className="w-full h-20 bg-white/10 rounded-xl mb-2"></div>
                  <div className="flex-1 bg-white/5 rounded-t-xl mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CASE STUDIES */}
        <section className="section bg-surface">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">In-Depth Case Studies</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, idx) => (
                <div key={idx} className="premium-card bg-white overflow-hidden flex flex-col h-full">
                  <div className="bg-slate-900 p-6 text-white">
                    <div className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{study.client}</div>
                    <h3 className="text-2xl font-bold">{study.title}</h3>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-red-500 mb-2 flex items-center gap-2">The Problem</h4>
                      <p className="text-sm text-muted">{study.prob}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">Our Solution</h4>
                      <p className="text-sm text-muted">{study.sol}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100 mt-auto">
                      <h4 className="text-sm font-bold text-green-700 mb-2 flex items-center gap-2"><TrendingUp size={16}/> The Results</h4>
                      <p className="text-sm text-green-800 font-medium">{study.res}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                      <div className="text-xs text-muted"><span className="font-bold text-main">Timeline:</span> {study.timeline}</div>
                      <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">Read Full Study <ArrowRight size={14}/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CREATIVE GALLERY */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Creative Design Gallery</h2>
              <p className="text-muted mt-4">Brand identities, UI kits, marketing assets, and video productions.</p>
            </div>
            
            <div className="pf-masonry">
              {creativeGallery.map((item, idx) => (
                <div key={idx} className={`pf-masonry-item rounded-xl overflow-hidden relative group cursor-pointer ${item.style}`}>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-sm p-4 text-center">
                    <div className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-2">{item.cat}</div>
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. LEGAL SUCCESS (Blurred Documents) */}
        <section className="section bg-slate-50 border-y border-gray-200">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">Legal Expertise</span>
              <h2 className="text-3xl font-bold mb-6">Confidential Legal Drafting & Consulting</h2>
              <p className="text-muted mb-6">Our legal team, led by Nidhima, has successfully drafted, reviewed, and finalized hundreds of sensitive corporate agreements, property documents, and consumer complaints.</p>
              <p className="text-sm text-muted mb-8 italic border-l-4 border-primary pl-4 py-2 bg-white rounded-r-lg shadow-sm">
                "Client confidentiality is our highest priority. The samples shown are heavily redacted and anonymized to protect attorney-client privilege."
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-bold text-main"><CheckCircle2 className="text-primary" size={18}/> Non-Disclosure Agreements (NDAs)</li>
                <li className="flex items-center gap-2 text-sm font-bold text-main"><CheckCircle2 className="text-primary" size={18}/> Software Licensing Contracts</li>
                <li className="flex items-center gap-2 text-sm font-bold text-main"><CheckCircle2 className="text-primary" size={18}/> Property & Lease Agreements</li>
                <li className="flex items-center gap-2 text-sm font-bold text-main"><CheckCircle2 className="text-primary" size={18}/> Consumer Protection Complaints</li>
              </ul>
              <button className="btn btn-outline border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">Request Legal Consultation</button>
            </div>
            
            <div className="relative">
              {/* Blurred Document Stack */}
              <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-200 transform rotate-2 relative z-20">
                <div className="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-6">
                  <h4 className="font-serif text-2xl font-bold">Service Agreement</h4>
                  <div className="text-xs font-bold bg-slate-900 text-white px-2 py-1">CONFIDENTIAL</div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-full pf-blur-text"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 pf-blur-text"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6 pf-blur-text"></div>
                  <div className="h-4 bg-gray-200 rounded w-full pf-blur-text mt-8"></div>
                  <div className="h-4 bg-gray-200 rounded w-full pf-blur-text"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/6 pf-blur-text"></div>
                  <div className="flex justify-between mt-12 pt-12">
                    <div className="w-32 border-t border-black text-center pt-2 text-xs font-bold">Party A</div>
                    <div className="w-32 border-t border-black text-center pt-2 text-xs font-bold">Party B</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 transform -rotate-3 absolute inset-0 z-10 translate-x-4 translate-y-4">
                <div className="h-full w-full bg-gray-50 flex items-center justify-center pf-blur-text">NDA Template</div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. RECOGNITIONS */}
        <section className="section pb-8">
          <div className="container">
            <div className="text-center mb-8">
              <h4 className="text-sm font-bold text-muted uppercase tracking-widest">Trusted By & Partnered With</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2 font-bold text-xl"><Globe/> StartupIndia</div>
              <div className="flex items-center gap-2 font-bold text-xl"><Award/> ISO Certified</div>
              <div className="flex items-center gap-2 font-bold text-xl"><Building/> TechCorp</div>
              <div className="flex items-center gap-2 font-bold text-xl"><GraduationCap/> EduTrust</div>
            </div>
          </div>
        </section>

        {/* 12. PROJECT ENQUIRY FORM */}
        <section className="section bg-surface" id="enquiry">
          <div className="container max-w-4xl">
            <div className="premium-card p-8 md:p-12 border-t-8 border-t-primary">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Start Your Project</h2>
                <p className="text-muted mt-2">Tell us what you want to build, design, or solve.</p>
              </div>
              
              <form className="pf-form flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="pf-input" required />
                  <input type="text" placeholder="Company / Organization" className="pf-input" />
                  <input type="email" placeholder="Email Address" className="pf-input" required />
                  <input type="tel" placeholder="Phone Number" className="pf-input" />
                  
                  <select className="pf-input text-muted" required>
                    <option value="" disabled selected>Primary Service Required</option>
                    <option>Web / App Development</option>
                    <option>UI/UX & Branding</option>
                    <option>Video & Podcast Production</option>
                    <option>Digital Marketing</option>
                    <option>Legal Consulting & Drafting</option>
                    <option>Corporate Training</option>
                  </select>

                  <select className="pf-input text-muted" required>
                    <option value="" disabled selected>Estimated Budget</option>
                    <option>Under â‚¹10,000</option>
                    <option>â‚¹10,000 - â‚¹50,000</option>
                    <option>â‚¹50,000 - â‚¹2,00,000</option>
                    <option>â‚¹2,00,000+</option>
                  </select>
                </div>

                <textarea placeholder="Describe your project, goals, and specific requirements in detail..." className="pf-input" rows="5" required></textarea>
                
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-white hover:border-primary transition-colors cursor-pointer flex flex-col items-center">
                  <UploadCloud size={32} className="text-gray-400 mb-2"/>
                  <span className="text-sm font-medium">Upload Reference Files (Optional)</span>
                  <span className="text-xs text-muted mt-1">PDF, DOCX, JPG, PNG (Max 10MB)</span>
                </div>
                
                <button type="submit" className="btn btn-primary w-full h-14 text-lg mt-2">Submit Project Brief</button>
              </form>
            </div>
          </div>
        </section>

        {/* 8, 9, 13, 14: REUSED SECTIONS */}
        <SuccessStories />
        <FaqAccordion />
        
        <section className="section cta-section">
          <div className="container">
            <div className="cta-banner premium-card text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Ready to Become Our Next Success Story?</h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto">Join hundreds of satisfied clients, successful students, and thriving businesses who chose MasterTech.</p>
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

export default Portfolio;
