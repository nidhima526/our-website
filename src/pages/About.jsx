import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SuccessStories from '../components/SuccessStories';
import FaqAccordion from '../components/FaqAccordion';
import FinalCTA from '../components/FinalCTA';
import founderImage from '../assets/advocate_nidhima.png';
import { 
  Building2, Users, Target, Shield, Zap, Sparkles, Scale, GraduationCap, 
  Code, PenTool, CheckCircle2, TrendingUp, Award, Globe, Heart, Briefcase, 
  ChevronRight, Mail, Search, MessageSquare, Monitor, Video
} from 'lucide-react';
import './About.css';

const About = () => {
  const storyTimeline = [
    { year: "2018", title: "The Idea", desc: "Recognized the gap in accessible legal and tech education." },
    { year: "2019", title: "Continuous Learning", desc: "Mastered core legal frameworks and enterprise tech stacks." },
    { year: "2020", title: "Initial Growth", desc: "Started consulting for local startups and students." },
    { year: "2021", title: "Serving Clients", desc: "Expanded to full-scale web development and legal drafting." },
    { year: "2022", title: "Building Products", desc: "Launched proprietary educational frameworks and tools." },
    { year: "2023", title: "Creating Opportunities", desc: "Introduced formal internship and placement programs." },
    { year: "2024", title: "Expanding Services", desc: "Added creative digital services and podcast production." },
    { year: "Future", title: "The Vision", desc: "To become India's most trusted multi-service ecosystem." }
  ];

  const coreValues = [
    { title: "Integrity", icon: <Shield size={24}/>, desc: "We do the right thing, always." },
    { title: "Innovation", icon: <Zap size={24}/>, desc: "Pushing boundaries in tech & law." },
    { title: "Excellence", icon: <Award size={24}/>, desc: "Delivering only premium quality." },
    { title: "Transparency", icon: <Search size={24}/>, desc: "Clear communication and pricing." },
    { title: "Client Success", icon: <TrendingUp size={24}/>, desc: "Your growth is our primary goal." },
    { title: "Continuous Learning", icon: <GraduationCap size={24}/>, desc: "We never stop improving." },
    { title: "Collaboration", icon: <Users size={24}/>, desc: "Working together to achieve more." },
    { title: "Trust", icon: <Heart size={24}/>, desc: "Building long-term relationships." },
    { title: "Professionalism", icon: <Briefcase size={24}/>, desc: "Respectful and reliable service." }
  ];

  const services = [
    { title: "Legal Services", icon: <Scale size={24}/> },
    { title: "Online Education", icon: <Monitor size={24}/> },
    { title: "Professional Courses", icon: <BookOpenIcon size={24}/> },
    { title: "Internships", icon: <Briefcase size={24}/> },
    { title: "Website Development", icon: <Code size={24}/> },
    { title: "Mobile Apps", icon: <SmartphoneIcon size={24}/> },
    { title: "Custom Software", icon: <Monitor size={24}/> },
    { title: "AI Solutions", icon: <Zap size={24}/> },
    { title: "Graphic Design", icon: <PenTool size={24}/> },
    { title: "Video Editing", icon: <Video size={24}/> },
    { title: "Podcast Editing", icon: <MicIcon size={24}/> },
    { title: "Digital Marketing", icon: <TrendingUp size={24}/> },
    { title: "Career Guidance", icon: <Target size={24}/> },
    { title: "Business Solutions", icon: <Building2 size={24}/> }
  ];

  const team = [
    { name: "Legal Experts", role: "Corporate & Family Law", exp: "15+ Years Combined" },
    { name: "Technology Team", role: "Full Stack & AI", exp: "20+ Years Combined" },
    { name: "Educators", role: "Course Instructors", exp: "Industry Veterans" },
    { name: "Creative Team", role: "Designers & Editors", exp: "Award Winning" },
    { name: "Mentors", role: "Internship Guides", exp: "Top Tech Alumni" },
    { name: "Support Team", role: "Client Relations", exp: "24/7 Availability" }
  ];

  const stats = [
    { title: "Students Trained", value: "50,000+" },
    { title: "Clients Served", value: "1,200+" },
    { title: "Projects Delivered", value: "850+" },
    { title: "Courses Published", value: "45+" },
    { title: "Certificates Issued", value: "25,000+" },
    { title: "Internships Completed", value: "5,000+" },
    { title: "Legal Consultations", value: "3,000+" },
    { title: "Client Satisfaction", value: "99.8%" }
  ];

  const trustFactors = [
    "Verified Professionals", "Transparent Pricing", "Quality Assurance", 
    "Secure Payments", "Expert Support", "Modern Technology", 
    "Personalized Guidance", "Long-Term Support"
  ];

  const careers = [
    "Expert Tutor", "Legal Associate", "Full Stack Developer", 
    "UI/UX Designer", "Video Editor", "Student Mentor", "Marketing Executive"
  ];

  // Dummy icons for ones missing from lucide import
  function BookOpenIcon({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>; }
  function SmartphoneIcon({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>; }
  function MicIcon({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>; }
  function LinkedinIcon({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>; }

  return (
    <div className="app about-page">
      <Navbar />
      
      <main>
        {/* 1. HERO SECTION */}
        <section className="ab-hero">
          <div className="ab-hero-bg"></div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="ab-hero-content">
              <span className="hero-eyebrow text-accent flex items-center gap-2"><Building2 size={16}/> About ASHERVISION</span>
              <h1 className="hero-title mt-4 mb-6">Building a Better Future Through <span className="text-primary">Knowledge, Tech & Law.</span></h1>
              <p className="hero-subtitle mb-8 text-muted">ASHERVISION is a premium multi-service platform dedicated to helping students, businesses, professionals, and individuals through trusted legal services, education, technology, internships, and creative digital solutions.</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">Explore Services</button>
                <button className="btn btn-outline">Book Consultation</button>
              </div>
            </div>
            
            <div className="ab-hero-illustration hidden lg-flex relative h-[450px]">
              <div className="ab-ecosystem w-full h-full relative">
                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary text-white rounded-full flex flex-col items-center justify-center shadow-2xl z-20 pulse-glow">
                  <span className="font-bold text-lg">ASHERVISION</span>
                </div>
                
                {/* Orbit Nodes */}
                <div className="ab-orbit-node" style={{top: '10%', left: '20%'}}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-blue-600"><Code size={24}/></div>
                  <span className="text-xs font-bold mt-2 bg-white px-2 py-1 rounded shadow-sm">Technology</span>
                </div>
                <div className="ab-orbit-node" style={{top: '10%', right: '20%'}}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-slate-800"><Scale size={24}/></div>
                  <span className="text-xs font-bold mt-2 bg-white px-2 py-1 rounded shadow-sm">Legal Services</span>
                </div>
                <div className="ab-orbit-node" style={{bottom: '15%', left: '15%'}}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-accent"><GraduationCap size={24}/></div>
                  <span className="text-xs font-bold mt-2 bg-white px-2 py-1 rounded shadow-sm">Education</span>
                </div>
                <div className="ab-orbit-node" style={{bottom: '15%', right: '15%'}}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-pink-500"><PenTool size={24}/></div>
                  <span className="text-xs font-bold mt-2 bg-white px-2 py-1 rounded shadow-sm">Creative</span>
                </div>
                
                {/* Connecting SVG Lines */}
                <svg className="absolute inset-0 w-full h-full z-10" style={{pointerEvents: 'none'}}>
                  <path d="M 120 90 Q 200 200 280 220" stroke="rgba(11,87,208,0.2)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="ab-line-anim"/>
                  <path d="M 440 90 Q 350 200 280 220" stroke="rgba(11,87,208,0.2)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="ab-line-anim"/>
                  <path d="M 100 370 Q 200 250 280 220" stroke="rgba(11,87,208,0.2)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="ab-line-anim"/>
                  <path d="M 460 370 Q 350 250 280 220" stroke="rgba(11,87,208,0.2)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="ab-line-anim"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. MISSION AND VISION */}
        <section className="section bg-surface pt-0 relative z-20" style={{marginTop: '-40px'}}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="premium-card p-10 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 text-white/10 group-hover:scale-110 transition-transform duration-500"><Target size={180}/></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 flex items-center gap-2"><Target className="text-accent"/> Our Mission</h3>
                <p className="text-lg text-blue-100 relative z-10 leading-relaxed font-medium">To empower individuals and organizations by providing accessible, high-quality legal solutions, cutting-edge technology services, and transformative educational programs that drive real-world success.</p>
              </div>
              
              <div className="premium-card p-10 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 text-white/10 group-hover:scale-110 transition-transform duration-500"><Sparkles size={180}/></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 flex items-center gap-2"><Sparkles className="text-accent"/> Our Vision</h3>
                <p className="text-lg text-slate-300 relative z-10 leading-relaxed font-medium">To become India's most trusted, unified platform where students, entrepreneurs, and established businesses can seamlessly access the knowledge, technology, and legal protection they need to thrive globally.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. MEET THE FOUNDER */}
        <section className="section">
          <div className="container max-w-5xl">
            <div className="premium-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-slate-100 relative min-h-[350px]">
                  <img src={founderImage} alt="Advocate Nidhima" className="absolute inset-0 w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold">Adv. Nidhima</h3>
                    <p className="text-accent font-medium text-sm tracking-wider uppercase">Founder & CEO</p>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center mb-6">
                    <Award size={24}/>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Leadership Through Expertise</h2>
                  <p className="text-muted mb-6 leading-relaxed">Advocate Nidhima brings a unique, powerful combination of legal acumen and technological vision to ASHERVISION. With years of experience consulting for startups, navigating complex legal frameworks, and building scalable digital solutions, she founded ASHERVISION with a simple goal: to democratize access to premium professional services.</p>
                  <p className="text-muted mb-8 leading-relaxed">Under her leadership, the platform has grown from a specialized consulting practice into a massive, multi-vertical ecosystem empowering thousands of students and businesses daily.</p>
                  <div className="flex gap-4">
                    <button className="btn btn-primary flex items-center gap-2"><LinkedinIcon size={18}/> Connect</button>
                    <button className="btn btn-outline flex items-center gap-2"><Mail size={18}/> Book Consultation</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OUR STORY TIMELINE */}
        <section className="section bg-surface overflow-hidden">
          <div className="container">
            <div className="section-header text-center mb-16">
              <h2 className="text-3xl font-bold">Our Journey</h2>
              <p className="text-muted mt-4">From a simple idea to a multi-service enterprise platform.</p>
            </div>
            
            <div className="ab-timeline-container relative max-w-4xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 md:-translate-x-1/2"></div>
              
              {storyTimeline.map((item, idx) => (
                <div key={idx} className={`relative flex items-center justify-between mb-12 w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-[45%]"></div>
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary shadow-lg transform -translate-x-[14px] md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div className="ml-12 md:ml-0 w-full md:w-[45%] premium-card p-6 relative hover:-translate-y-1 transition-transform">
                    <div className="text-accent font-bold text-sm mb-1">{item.year}</div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CORE VALUES */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => (
                <div key={idx} className="premium-card p-6 flex flex-col items-center text-center hover:border-primary transition-colors group">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-slate-700 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {val.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                  <p className="text-sm text-muted">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. ACHIEVEMENTS */}
        <section className="section bg-slate-900 text-white">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHAT WE DO */}
        <section className="section bg-surface">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">An Ecosystem of Excellence</h2>
              <p className="text-muted mt-4">Comprehensive services designed to solve problems and create opportunities.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {services.map((svc, idx) => (
                <div key={idx} className="premium-card p-4 flex flex-col items-center text-center justify-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
                  <div className="text-primary">{svc.icon}</div>
                  <span className="text-xs font-bold leading-tight">{svc.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. OUR TEAM */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">The Team Behind The Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {team.map((t, idx) => (
                <div key={idx} className="premium-card p-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-slate-200 mb-4 overflow-hidden shadow-inner border-4 border-white">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${t.name}`} alt={t.name} className="w-full h-full object-cover"/>
                  </div>
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2 mt-1">{t.role}</p>
                  <p className="text-sm text-muted">{t.exp}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. WHY PEOPLE TRUST US */}
        <section className="section bg-surface">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Why People Trust Us</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustFactors.map((factor, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-4 rounded-lg flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-success flex-shrink-0"/>
                  <span className="text-sm font-bold text-slate-700">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. PARTNERS & COLLABORATIONS */}
        <section className="section border-t border-gray-200">
          <div className="container">
            <div className="text-center mb-10">
              <h4 className="text-sm font-bold text-muted uppercase tracking-widest">Our Partners & Network</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2 font-bold text-xl"><Globe/> StartupIndia</div>
              <div className="flex items-center gap-2 font-bold text-xl"><Building2/> LegalTech Corp</div>
              <div className="flex items-center gap-2 font-bold text-xl"><Code/> DevAlliance</div>
              <div className="flex items-center gap-2 font-bold text-xl"><GraduationCap/> EduTrust Network</div>
              <div className="flex items-center gap-2 font-bold text-xl"><Award/> ISO Certified</div>
            </div>
          </div>
        </section>

        {/* 13. CAREERS */}
        <section className="section bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="container relative z-10 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
            <p className="text-slate-400 mb-10">We are always looking for passionate educators, brilliant legal minds, creative designers, and exceptional developers to join our mission.</p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {careers.map((job, idx) => (
                <span key={idx} className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full text-sm font-medium">{job}</span>
              ))}
            </div>
            
            <button className="btn btn-primary">View Open Positions</button>
          </div>
        </section>

        {/* 11, 14, 15: REUSED SECTIONS */}
        <SuccessStories />
        <FaqAccordion />
        
        <section className="section cta-section">
          <div className="container">
            <div className="cta-banner premium-card text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Let's Build the Future Together.</h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto">Join thousands of students, professionals, and businesses who trust ASHERVISION to drive their success.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn btn-primary" style={{backgroundColor: 'white', color: 'var(--color-primary)'}}>Explore Services</button>
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

export default About;
