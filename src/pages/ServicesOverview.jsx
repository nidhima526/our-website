import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SuccessStories from '../components/SuccessStories';
import FaqAccordion from '../components/FaqAccordion';
import FinalCTA from '../components/FinalCTA';
import { ArrowRight, Scale, GraduationCap, Code, Megaphone, BookOpen, Briefcase, PlayCircle, ShieldCheck, CheckCircle2, ChevronRight, Clock, MapPin, Video, Monitor, Award, Star } from 'lucide-react';
import './ServicesOverview.css';

const ServicesOverview = () => {
  
  const categories = [
    { id: 1, title: 'Legal Services', desc: 'Expert legal counsel & compliance.', count: 12, icon: <Scale size={32}/>, link: '/legal-services' },
    { id: 2, title: 'Education & Tutoring', desc: '1-to-1 mentoring & academic tuition.', count: 8, icon: <GraduationCap size={32}/>, link: '/education' },
    { id: 3, title: 'Web & App Development', desc: 'Custom enterprise software solutions.', count: 9, icon: <Code size={32}/>, link: '#tech' },
    { id: 4, title: 'Digital Creative Services', desc: 'Video, audio, & brand design.', count: 8, icon: <Megaphone size={32}/>, link: '/digital-services' },
    { id: 5, title: 'Professional Courses', desc: 'Industry-certified masterclasses.', count: 11, icon: <BookOpen size={32}/>, link: '/courses' },
    { id: 6, title: 'Internship Programs', desc: 'Real-world projects & placement.', count: 8, icon: <Briefcase size={32}/>, link: '/internships' }
  ];

  const legalServices = [
    "Legal Consultation", "Legal Notices", "Legal Drafting", "Property Documentation", 
    "Sale Agreements", "Rental Agreements", "Affidavits", "Consumer Complaints", 
    "Family Law", "Civil Matters", "Criminal Matters", "Court Case Assistance"
  ];

  const educationServices = [
    "1â€“10 Tuition", "Intermediate", "Degree", "B.Tech", 
    "Programming Languages", "Competitive Exams", "Spoken English", "Career Guidance"
  ];

  const techServices = [
    { title: "Business Websites", tech: "React, Node, AWS", time: "2-4 Weeks", img: "linear-gradient(135deg, #0B57D0, #0842A0)" },
    { title: "Portfolio Websites", tech: "Next.js, Tailwind", time: "1-2 Weeks", img: "linear-gradient(135deg, #1E293B, #0F172A)" },
    { title: "E-commerce Websites", tech: "Shopify, Stripe, React", time: "4-6 Weeks", img: "linear-gradient(135deg, #D4AF37, #B8972E)" },
    { title: "School Websites", tech: "WordPress, PHP", time: "2-3 Weeks", img: "linear-gradient(135deg, #2563EB, #1D4ED8)" },
    { title: "College Projects", tech: "Python, Java, MERN", time: "1-4 Weeks", img: "linear-gradient(135deg, #22C55E, #16A34A)" },
    { title: "ERP Software", tech: "Java, Spring Boot", time: "8-12 Weeks", img: "linear-gradient(135deg, #F59E0B, #D97706)" },
    { title: "Custom Software", tech: "Full Stack Custom", time: "Varies", img: "linear-gradient(135deg, #EF4444, #DC2626)" },
    { title: "Mobile Apps", tech: "Flutter, React Native", time: "6-10 Weeks", img: "linear-gradient(135deg, #0B57D0, #0842A0)" },
    { title: "AI Automation", tech: "Python, OpenAI", time: "4-8 Weeks", img: "linear-gradient(135deg, #0F172A, #000000)" }
  ];

  const digitalServices = [
    "Video Editing", "Podcast Editing", "Graphic Design", "Logo Design", 
    "Brand Identity", "YouTube Management", "Instagram Growth", "Thumbnail Design"
  ];

  const courses = [
    { title: "Python Masterclass", duration: "8 Weeks", level: "Beginner to Pro", price: "$199", rating: 4.9 },
    { title: "Java Enterprise", duration: "10 Weeks", level: "Intermediate", price: "$249", rating: 4.8 },
    { title: "C Programming", duration: "6 Weeks", level: "Beginner", price: "$149", rating: 4.7 },
    { title: "HTML CSS JavaScript", duration: "8 Weeks", level: "Beginner", price: "$199", rating: 4.9 },
    { title: "Photoshop Pro", duration: "4 Weeks", level: "All Levels", price: "$129", rating: 4.8 },
    { title: "Canva Design", duration: "2 Weeks", level: "Beginner", price: "$49", rating: 4.6 },
    { title: "AI Tools & Automation", duration: "4 Weeks", level: "All Levels", price: "$199", rating: 5.0 },
    { title: "Business Growth", duration: "6 Weeks", level: "Advanced", price: "$299", rating: 4.9 },
    { title: "Digital Marketing", duration: "8 Weeks", level: "Beginner to Pro", price: "$249", rating: 4.8 },
    { title: "Video Editing", duration: "6 Weeks", level: "All Levels", price: "$179", rating: 4.7 },
    { title: "Freelancing 101", duration: "3 Weeks", level: "Beginner", price: "$99", rating: 4.9 }
  ];

  const internships = [
    "Web Development", "Python", "Java", "UI/UX", 
    "Graphic Design", "Video Editing", "Digital Marketing", "AI"
  ];

  const features = [
    "Verified Experts", "Affordable Pricing", "Secure Payments", "Industry Experience", 
    "Fast Delivery", "Premium Quality", "24/7 Support", "Live Mentorship", "Trusted by Students & Businesses"
  ];

  const timeline = [
    { title: "Choose Service", desc: "Select the perfect solution from our extensive catalog." },
    { title: "Submit Requirement", desc: "Provide details about your project, goals, or legal needs." },
    { title: "Receive Consultation", desc: "Talk to our experts to align on strategy and pricing." },
    { title: "Project Starts", desc: "Our team begins execution with full transparency." },
    { title: "Delivery", desc: "Receive high-quality, fully tested deliverables." },
    { title: "Support", desc: "Enjoy ongoing maintenance, support, and mentorship." }
  ];

  return (
    <div className="app services-page">
      <Navbar />
      
      <main>
        {/* 1. HERO SECTION */}
        <section className="svc-hero">
          <div className="svc-hero-bg"></div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="svc-hero-content">
              <span className="hero-eyebrow">Services Overview</span>
              <h1 className="hero-title mt-4 mb-6">Everything You Need. <br/><span className="text-primary">All in One Platform.</span></h1>
              <p className="hero-subtitle mb-8 text-muted">From legal solutions and education to technology, internships, and digital services, MasterTechGlobal provides complete professional support under one trusted platform.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/legal-services" className="btn btn-primary">Explore Legal Services <ArrowRight size={18}/></a>
                <button className="btn btn-secondary">Talk to an Expert</button>
              </div>
            </div>
            <div className="svc-hero-illustration">
              <div className="svc-globe-graphic premium-card glass-panel flex items-center justify-center">
                <div className="svc-node node-center"><Monitor size={48} color="var(--color-primary)"/></div>
                <div className="svc-node node-1 premium-card"><Scale size={24} color="var(--color-primary)"/></div>
                <div className="svc-node node-2 premium-card"><GraduationCap size={24} color="var(--color-primary)"/></div>
                <div className="svc-node node-3 premium-card"><Briefcase size={24} color="var(--color-primary)"/></div>
                <div className="svc-node node-4 premium-card"><Megaphone size={24} color="var(--color-primary)"/></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CATEGORY GRID */}
        <section className="section bg-surface pt-0">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative" style={{marginTop: '-60px', zIndex: 10}}>
              {categories.map(cat => (
                <div key={cat.id} className="premium-card svc-cat-card">
                  <div className="svc-cat-icon">{cat.icon}</div>
                  <h3 className="mt-4 text-xl font-bold">{cat.title}</h3>
                  <p className="mt-2 text-muted text-sm">{cat.desc}</p>
                  <div className="mt-6 flex justify-between items-center w-full">
                    <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">{cat.count} Services</span>
                    <a href={cat.link} className="btn-link font-medium flex items-center gap-1">View All <ChevronRight size={16}/></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. LEGAL SERVICES */}
        <section className="section" id="legal">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">âš– Legal Services</h2>
              <p className="text-muted mt-2">Expert legal counsel and document drafting.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {legalServices.map((svc, idx) => (
                <div key={idx} className="premium-card text-center p-6 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary mb-4">
                    <Scale size={20}/>
                  </div>
                  <h4 className="font-bold mb-2">{svc}</h4>
                  <p className="text-xs text-muted mb-6">Professional assistance and consultation.</p>
                  <button className="btn btn-outline w-full mt-auto" style={{fontSize: '0.875rem', height: '40px'}}>Book Consultation</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. EDUCATION SECTION */}
        <section className="section bg-surface" id="education">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">ðŸŽ“ Education & Online Tutoring</h2>
              <p className="text-muted mt-2">1-to-1 mentoring and structured academic tuition.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationServices.map((svc, idx) => (
                <div key={idx} className="premium-card flex flex-col p-6">
                  <h4 className="font-bold text-lg mb-4">{svc}</h4>
                  <div className="flex flex-col gap-2 mb-6">
                    <span className="text-xs text-muted flex items-center gap-2"><Clock size={14}/> Flexible Duration</span>
                    <span className="text-xs text-muted flex items-center gap-2"><Video size={14}/> Online Mode</span>
                  </div>
                  <button className="btn btn-primary w-full mt-auto" style={{fontSize: '0.875rem', height: '40px'}}>Enroll Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TECHNOLOGY SECTION */}
        <section className="section" id="tech">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">ðŸ’» Technology Solutions</h2>
              <p className="text-muted mt-2">Custom website, app, and enterprise software development.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techServices.map((svc, idx) => (
                <div key={idx} className="premium-card p-0 overflow-hidden flex flex-col">
                  <div className="h-32 w-full flex items-center justify-center text-white font-bold" style={{background: svc.img}}>
                    {svc.title}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="font-bold text-lg mb-4">{svc.title}</h4>
                    <div className="flex flex-col gap-2 mb-6 text-sm">
                      <span className="text-muted flex justify-between"><span>Tech Stack:</span> <span className="font-medium text-main">{svc.tech}</span></span>
                      <span className="text-muted flex justify-between"><span>Timeline:</span> <span className="font-medium text-main">{svc.time}</span></span>
                    </div>
                    <button className="btn btn-secondary w-full mt-auto">Get Quote</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. DIGITAL SERVICES */}
        <section className="section bg-surface" id="digital">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">ðŸŽ¬ Digital Creative Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {digitalServices.map((svc, idx) => (
                <div key={idx} className="premium-card p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-primary mb-4 border border-gray-200">
                    <PlayCircle size={24}/>
                  </div>
                  <h4 className="font-bold mb-2">{svc}</h4>
                  <span className="text-xs font-semibold text-success bg-success-light px-2 py-1 rounded mb-6">Fast Delivery</span>
                  <button className="btn btn-primary w-full mt-auto" style={{height: '40px'}}>Hire Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PROFESSIONAL COURSES */}
        <section className="section" id="courses">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">ðŸ“š Professional Courses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, idx) => (
                <div key={idx} className="premium-card p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg max-w-[70%]">{course.title}</h4>
                    <span className="text-xl font-bold text-primary">{course.price}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted mb-6">
                    <span className="flex items-center gap-1"><Clock size={14}/> {course.duration}</span>
                    <span className="flex items-center gap-1"><Star size={14} className="text-accent fill-accent"/> {course.rating}</span>
                  </div>
                  <span className="text-sm font-medium mb-6">Level: {course.level}</span>
                  <button className="btn btn-outline w-full mt-auto">Enroll Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. INTERNSHIPS */}
        <section className="section bg-surface" id="internships">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">ðŸŽ“ Internship Programs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internships.map((svc, idx) => (
                <div key={idx} className="premium-card p-6 border-t-4 border-t-primary">
                  <h4 className="font-bold text-lg mb-4">{svc}</h4>
                  <ul className="text-sm text-muted flex flex-col gap-2 mb-6">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success"/> Certificate Included</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success"/> Live Projects</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success"/> Mentorship</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success"/> Placement Assistance</li>
                  </ul>
                  <button className="btn btn-secondary w-full mt-auto">Apply Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. WHY CHOOSE US */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Why Choose Us</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              {features.map((feat, idx) => (
                <div key={idx} className="premium-card p-4 flex flex-col items-center justify-center aspect-square">
                  <ShieldCheck size={32} className="text-primary mb-3"/>
                  <span className="text-sm font-bold">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. HOW IT WORKS */}
        <section className="section bg-surface">
          <div className="container max-w-4xl">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">How It Works</h2>
            </div>
            <div className="svc-timeline">
              {timeline.map((step, idx) => (
                <div key={idx} className="svc-timeline-item">
                  <div className="svc-timeline-dot"></div>
                  <div className="premium-card w-full p-6">
                    <h4 className="text-lg font-bold mb-2">Step {idx + 1}: {step.title}</h4>
                    <p className="text-muted">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11-13 Reused Sections */}
        <SuccessStories />
        <FaqAccordion />
        <FinalCTA />
      </main>
      
      {/* 14. FOOTER */}
      <Footer />
    </div>
  );
};

export default ServicesOverview;
