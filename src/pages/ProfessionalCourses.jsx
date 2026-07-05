import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SuccessStories from '../components/SuccessStories';
import FaqAccordion from '../components/FaqAccordion';
import FinalCTA from '../components/FinalCTA';
import codingImage from '../assets/coding_workspace.png';
import { 
  BookOpen, PlayCircle, Search, Filter, Star, Award, CheckCircle2, 
  Users, Clock, Globe, ArrowRight, Laptop, Briefcase, FileText, ChevronDown, Play
} from 'lucide-react';
import './ProfessionalCourses.css';

const ProfessionalCourses = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    "Programming", "AI & Technology", "Creative Design", "Digital Marketing", 
    "Business", "Career Development", "School Academics", "B.Tech Subjects", 
    "Competitive Exams", "Professional Skills"
  ];

  const courses = [
    { title: "Python Programming", inst: "Nidhima", dur: "8 Weeks", lvl: "Beginner", lang: "English", proj: 5, rating: 4.9, students: "12k+", price: "₹4,999", cat: "Programming" },
    { title: "Java Programming", inst: "Rahul S.", dur: "10 Weeks", lvl: "Intermediate", lang: "English/Hindi", proj: 4, rating: 4.8, students: "8k+", price: "₹5,999", cat: "Programming" },
    { title: "C Programming", inst: "Priya M.", dur: "6 Weeks", lvl: "Beginner", lang: "English", proj: 3, rating: 4.7, students: "15k+", price: "₹3,499", cat: "Programming" },
    { title: "C++", inst: "Amit K.", dur: "8 Weeks", lvl: "Intermediate", lang: "English", proj: 4, rating: 4.8, students: "10k+", price: "₹4,499", cat: "Programming" },
    { title: "HTML & CSS", inst: "Sarah J.", dur: "4 Weeks", lvl: "Beginner", lang: "English", proj: 2, rating: 4.9, students: "20k+", price: "₹2,499", cat: "Programming" },
    { title: "JavaScript", inst: "Rahul S.", dur: "8 Weeks", lvl: "Intermediate", lang: "English", proj: 5, rating: 4.9, students: "18k+", price: "₹5,499", cat: "Programming" },
    { title: "React", inst: "Neha G.", dur: "10 Weeks", lvl: "Advanced", lang: "English", proj: 6, rating: 4.9, students: "14k+", price: "₹6,999", cat: "Programming" },
    { title: "Node.js", inst: "Amit K.", dur: "8 Weeks", lvl: "Advanced", lang: "English", proj: 4, rating: 4.8, students: "9k+", price: "₹6,499", cat: "Programming" },
    { title: "SQL", inst: "Priya M.", dur: "5 Weeks", lvl: "Beginner", lang: "English", proj: 3, rating: 4.7, students: "11k+", price: "₹3,999", cat: "Programming" },
    { title: "Data Structures", inst: "Nidhima", dur: "12 Weeks", lvl: "Advanced", lang: "English", proj: 8, rating: 5.0, students: "25k+", price: "₹7,999", cat: "Programming" },
    { title: "Machine Learning Basics", inst: "Dr. Rao", dur: "10 Weeks", lvl: "Beginner", lang: "English", proj: 4, rating: 4.8, students: "7k+", price: "₹8,999", cat: "AI & Technology" },
    { title: "AI Tools for Business", inst: "Karan B.", dur: "4 Weeks", lvl: "Beginner", lang: "English", proj: 2, rating: 4.9, students: "16k+", price: "₹3,999", cat: "AI & Technology" },
    { title: "Photoshop Masterclass", inst: "Elena V.", dur: "6 Weeks", lvl: "Beginner", lang: "English", proj: 5, rating: 4.9, students: "22k+", price: "₹4,499", cat: "Creative Design" },
    { title: "Canva Pro Design", inst: "Riya S.", dur: "2 Weeks", lvl: "Beginner", lang: "English/Hindi", proj: 3, rating: 4.8, students: "30k+", price: "₹1,999", cat: "Creative Design" },
    { title: "Graphic Design Theory", inst: "Elena V.", dur: "5 Weeks", lvl: "Intermediate", lang: "English", proj: 4, rating: 4.7, students: "12k+", price: "₹4,999", cat: "Creative Design" },
    { title: "Video Editing (Premiere)", inst: "Vikram R.", dur: "8 Weeks", lvl: "Intermediate", lang: "English", proj: 5, rating: 4.9, students: "14k+", price: "₹5,999", cat: "Creative Design" },
    { title: "Digital Marketing Complete", inst: "Ananya P.", dur: "12 Weeks", lvl: "Beginner", lang: "English", proj: 10, rating: 4.9, students: "28k+", price: "₹6,999", cat: "Digital Marketing" },
    { title: "Business Growth Strategy", inst: "Raj M.", dur: "6 Weeks", lvl: "Intermediate", lang: "English", proj: 3, rating: 4.8, students: "9k+", price: "₹5,999", cat: "Business" },
    { title: "Freelancing 101", inst: "Nidhima", dur: "4 Weeks", lvl: "Beginner", lang: "English", proj: 2, rating: 5.0, students: "35k+", price: "₹2,999", cat: "Career Development" },
    { title: "YouTube Growth", inst: "Kabir T.", dur: "5 Weeks", lvl: "Beginner", lang: "English/Hindi", proj: 3, rating: 4.8, students: "19k+", price: "₹3,999", cat: "Digital Marketing" },
    { title: "Instagram Growth", inst: "Sanya L.", dur: "4 Weeks", lvl: "Beginner", lang: "English", proj: 2, rating: 4.7, students: "24k+", price: "₹3,499", cat: "Digital Marketing" },
    { title: "Communication Skills", inst: "Dr. Meera", dur: "6 Weeks", lvl: "Beginner", lang: "English", proj: 4, rating: 4.9, students: "40k+", price: "₹2,999", cat: "Professional Skills" },
    { title: "Interview Preparation", inst: "Neha G.", dur: "3 Weeks", lvl: "Intermediate", lang: "English", proj: 2, rating: 4.9, students: "32k+", price: "₹1,999", cat: "Career Development" },
    { title: "Resume Building", inst: "Raj M.", dur: "1 Week", lvl: "Beginner", lang: "English", proj: 1, rating: 4.8, students: "50k+", price: "₹999", cat: "Career Development" }
  ];

  const benefits = [
    { title: "Lifetime Access", icon: <Clock size={24}/> },
    { title: "Mobile Friendly", icon: <Globe size={24}/> },
    { title: "Verified Certificates", icon: <Award size={24}/> },
    { title: "Real-world Projects", icon: <Briefcase size={24}/> },
    { title: "Assignments", icon: <FileText size={24}/> },
    { title: "Interactive Quizzes", icon: <CheckCircle2 size={24}/> },
    { title: "Live Doubt Sessions", icon: <Users size={24}/> },
    { title: "1-on-1 Mentorship", icon: <Star size={24}/> },
    { title: "Downloadable PDF Resources", icon: <BookOpen size={24}/> },
    { title: "Community Access", icon: <Laptop size={24}/> }
  ];

  const roadmaps = [
    { title: "Become a Web Developer", courses: "8 Courses", dur: "6 Months", outcome: "Full-Stack Engineer" },
    { title: "Become a Python Developer", courses: "5 Courses", dur: "4 Months", outcome: "Backend/Data Engineer" },
    { title: "Become a UI/UX Designer", courses: "6 Courses", dur: "5 Months", outcome: "Product Designer" },
    { title: "Become a Digital Marketer", courses: "7 Courses", dur: "4 Months", outcome: "Growth Marketer" },
    { title: "Become a Freelancer", courses: "4 Courses", dur: "2 Months", outcome: "Independent Consultant" },
    { title: "Become an AI Professional", courses: "9 Courses", dur: "8 Months", outcome: "AI/ML Engineer" }
  ];

  const instructors = [
    { name: "Nidhima", expert: "Software Engineering & Law", exp: "10+ Years", courses: 5, rating: 5.0 },
    { name: "Rahul S.", expert: "Full Stack Development", exp: "8 Years", courses: 12, rating: 4.9 },
    { name: "Elena V.", expert: "Creative & UI/UX Design", exp: "7 Years", courses: 8, rating: 4.9 },
    { name: "Dr. Rao", expert: "Machine Learning", exp: "15 Years", courses: 3, rating: 4.8 }
  ];

  const workflow = [
    "Choose Course", "Register", "Complete Payment", 
    "Start Learning", "Assignments", "Pass Assessment", "Receive Certificate"
  ];

  return (
    <div className="app courses-page">
      <Navbar />
      
      <main>
        {/* 1. HERO SECTION */}
        <section className="cr-hero">
          <div className="cr-hero-bg"></div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="cr-hero-content">
              <span className="hero-eyebrow text-accent flex items-center gap-2"><BookOpen size={16}/> Professional Courses</span>
              <h1 className="hero-title mt-4 mb-6">Upgrade Your Skills with <span className="text-primary">Industry-Focused Learning</span></h1>
              <p className="hero-subtitle mb-8 text-muted">MasterTech provides practical, project-based learning designed for students, professionals, freelancers, and entrepreneurs to build tomorrow's career today.</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">Browse Courses</button>
                <button className="btn btn-outline flex items-center gap-2"><PlayCircle size={18}/> Watch Demo Class</button>
              </div>
            </div>
            
            <div className="cr-hero-illustration hidden lg-flex relative h-[450px]">
              <div className="cr-dashboard premium-card glass-panel flex flex-col p-6 w-full max-w-md absolute right-0 top-1/2 -translate-y-1/2 z-10 overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <div className="font-bold flex items-center gap-2"><BookOpen size={20} className="text-primary"/> Student Hub</div>
                  <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-xs">NL</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-surface border border-gray-100 rounded-lg p-3">
                    <div className="text-xs text-muted mb-1 flex items-center gap-1"><Award size={12}/> Certificates</div>
                    <div className="text-xl font-bold">12</div>
                  </div>
                  <div className="bg-surface border border-gray-100 rounded-lg p-3">
                    <div className="text-xs text-muted mb-1 flex items-center gap-1"><CheckCircle2 size={12}/> Assignments</div>
                    <div className="text-xl font-bold text-success">48</div>
                  </div>
                </div>

                <div className="text-sm font-bold mb-3">Continue Learning</div>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Python Masterclass</span>
                    <span className="text-primary">82%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full mt-2 overflow-hidden"><div className="h-full bg-primary w-[82%]"></div></div>
                  <div className="text-[10px] text-muted mt-2">Next: Object Oriented Programming</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SEARCH & FILTER */}
        <section className="section bg-surface pt-8 pb-8 sticky top-[72px] z-30 border-b border-gray-200 shadow-sm">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input type="text" placeholder="Search for Python, React, Digital Marketing..." className="cr-search-input w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all" />
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-3 bg-white border border-gray-200 rounded-lg flex items-center gap-2 text-sm font-medium hover:border-primary transition-colors text-muted">
                  <Filter size={16}/> Category <ChevronDown size={14}/>
                </button>
                <button className="px-4 py-3 bg-white border border-gray-200 rounded-lg flex items-center gap-2 text-sm font-medium hover:border-primary transition-colors text-muted">
                  Level <ChevronDown size={14}/>
                </button>
                <div className="flex items-center bg-gray-100 p-1 rounded-lg ml-2">
                  <button className="px-4 py-1.5 bg-white shadow-sm rounded-md text-sm font-bold">Paid</button>
                  <button className="px-4 py-1.5 text-muted rounded-md text-sm font-medium hover:text-main">Free</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CATEGORIES (Placed above courses for logic flow) */}
        <section className="section pt-12 pb-6">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                onClick={() => setActiveCategory('All')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === 'All' ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-muted hover:bg-gray-200'}`}
              >
                All Courses
              </button>
              {categories.map((cat, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-muted hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FEATURED COURSES (Massive Grid) */}
        <section className="section pt-0 pb-20 bg-gray-50/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.filter(c => activeCategory === 'All' || c.cat === activeCategory).map((course, idx) => (
                <div key={idx} className="premium-card p-4 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-shadow group">
                  
                  {/* CSS Gradient Thumbnail */}
                  <div className="w-full sm:w-48 h-40 sm:h-auto rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-gray-100 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <BookOpen size={40} className="text-primary opacity-20 group-hover:scale-110 transition-transform"/>
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-primary">{course.cat}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-grow py-1">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-sm text-muted mb-3 flex items-center gap-1">By <span className="font-medium text-main">{course.inst}</span></p>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted mb-4">
                      <span className="flex items-center gap-1"><Clock size={12}/> {course.dur}</span>
                      <span className="flex items-center gap-1"><Briefcase size={12}/> {course.lvl}</span>
                      <span className="flex items-center gap-1"><Globe size={12}/> {course.lang}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center text-accent text-sm font-bold gap-1"><Star size={14} className="fill-accent"/> {course.rating}</div>
                      <span className="text-gray-300">|</span>
                      <span className="text-xs text-muted">({course.students} students)</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-xs text-success flex items-center gap-1"><Award size={12}/> Certificate</span>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-xl font-bold">{course.price}</div>
                      <button className="btn btn-outline text-xs h-8 px-4 border-gray-300 hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">Enroll Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="btn btn-outline">Load More Courses</button>
            </div>
          </div>
        </section>

        {/* 8. COURSE PREVIEW (Interactive UI) */}
        <section className="section bg-slate-900 text-white">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <span className="text-accent text-sm font-bold tracking-wider uppercase mb-2 block">Free Preview</span>
                <h2 className="text-3xl font-bold mb-6">See What Learning Looks Like</h2>
                
                {/* Simulated Video Player */}
                <div className="aspect-video bg-black rounded-xl border border-slate-700 relative flex items-center justify-center group cursor-pointer overflow-hidden shadow-2xl">
                  <img src={codingImage} alt="Coding workspace" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity" />
                  <div className="w-16 h-16 bg-primary/90 backdrop-blur rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-white ml-1 fill-white"/>
                  </div>
                  
                  {/* Fake Player Controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-4 text-xs font-medium z-10">
                    <Play size={16}/>
                    <div className="flex-grow h-1 bg-white/30 rounded-full relative"><div className="absolute left-0 top-0 bottom-0 w-1/3 bg-primary rounded-full"></div></div>
                    <span>12:45 / 45:00</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-lg mb-4">Course Curriculum</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { t: "1. Introduction to Programming", dur: "45m", active: true },
                    { t: "2. Setting up your environment", dur: "1h 20m", active: false },
                    { t: "3. Variables & Data Types", dur: "2h 15m", active: false },
                    { t: "4. Control Flow & Loops", dur: "3h 0m", active: false },
                    { t: "5. Functions & Modules", dur: "2h 45m", active: false },
                    { t: "6. Final Project: Build an App", dur: "5h 0m", active: false }
                  ].map((l, i) => (
                    <div key={i} className={`p-3 rounded-lg border flex justify-between items-center cursor-pointer ${l.active ? 'bg-primary/20 border-primary text-white' : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700'}`}>
                      <div className="flex items-center gap-3">
                        <PlayCircle size={16} className={l.active ? 'text-primary' : 'text-slate-400'}/>
                        <span className="text-sm font-medium">{l.t}</span>
                      </div>
                      <span className="text-xs opacity-70">{l.dur}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary w-full mt-6">Unlock Full Course</button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. LEARNING PATHS */}
        <section className="section bg-surface">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Guided Learning Paths</h2>
              <p className="text-muted mt-4">Follow a structured roadmap designed by industry experts to land your dream job.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmaps.map((map, idx) => (
                <div key={idx} className="premium-card p-6 flex flex-col border-t-4 border-t-accent hover:-translate-y-1 transition-transform cursor-pointer">
                  <h3 className="text-xl font-bold mb-4">{map.title}</h3>
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg text-sm text-muted mb-6">
                    <span className="flex items-center gap-1 font-bold text-main"><BookOpen size={16} className="text-primary"/> {map.courses}</span>
                    <span className="flex items-center gap-1 font-bold text-main"><Clock size={16} className="text-primary"/> {map.dur}</span>
                  </div>
                  <div className="text-sm text-muted mb-6">Outcome: <span className="font-bold text-main">{map.outcome}</span></div>
                  <button className="btn btn-outline w-full text-sm mt-auto">Start Journey</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. LEARNING BENEFITS */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Why Learn With MasterTech?</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {benefits.map((ben, idx) => (
                <div key={idx} className="premium-card p-5 flex flex-col items-center text-center justify-center gap-3 hover:border-primary transition-colors">
                  <div className="text-primary">{ben.icon}</div>
                  <span className="text-sm font-bold">{ben.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. INSTRUCTORS */}
        <section className="section bg-surface">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Learn from Industry Experts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instructors.map((inst, idx) => (
                <div key={idx} className="premium-card p-6 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-slate-200 mb-4 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${inst.name}`} alt={inst.name} className="w-full h-full object-cover"/>
                  </div>
                  <h3 className="font-bold text-lg">{inst.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4 mt-1">{inst.expert}</p>
                  <div className="flex gap-4 text-xs text-muted mb-6">
                    <span className="flex flex-col"><span className="font-bold text-main">{inst.exp}</span> Exp.</span>
                    <span className="flex flex-col"><span className="font-bold text-main">{inst.courses}</span> Courses</span>
                    <span className="flex flex-col"><span className="font-bold text-main flex items-center justify-center gap-1"><Star size={10} className="fill-accent text-accent"/>{inst.rating}</span> Rating</span>
                  </div>
                  <button className="text-primary font-bold text-sm w-full py-2 bg-primary-light rounded-lg hover:bg-primary hover:text-white transition-colors">View Profile</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. CERTIFICATIONS */}
        <section className="section">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Earn Industry-Recognized Certificates</h2>
              <p className="text-muted mb-6">Every course completion grants you a verifiable digital certificate. Share it on LinkedIn, add it to your resume, and prove your skills to employers.</p>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-success"/> Unique QR Code Verification</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-success"/> Unique Certificate ID</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-success"/> One-click LinkedIn Sharing</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-success"/> High-resolution PDF Download</li>
              </ul>
              <button className="btn btn-primary">View Sample Certificate</button>
            </div>
            <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
              {/* Simulated Certificate */}
              <div className="bg-white border-8 border-double border-gray-100 p-8 rounded-xl text-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-light rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
                <Award size={48} className="text-primary mx-auto mb-4 relative z-10"/>
                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-4 relative z-10">Certificate of Completion</h4>
                <h3 className="text-3xl font-serif font-bold text-main mb-2 relative z-10">Alex Doe</h3>
                <p className="text-sm text-muted mb-6 relative z-10">has successfully completed the course</p>
                <h4 className="text-xl font-bold text-primary mb-8 relative z-10">Advanced Python Programming</h4>
                <div className="flex justify-between items-end relative z-10 border-t border-gray-100 pt-6">
                  <div className="text-left">
                    <div className="text-xs text-muted">Issue Date</div>
                    <div className="font-bold text-sm">Oct 24, 2025</div>
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center border border-gray-200">
                    <span className="text-[8px] font-bold text-muted">QR CODE</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted">Certificate ID</div>
                    <div className="font-bold text-sm">MT-PY-9284</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. ENROLLMENT PROCESS */}
        <section className="section bg-slate-900 text-white overflow-hidden">
          <div className="container">
            <div className="section-header text-center mb-16">
              <h2 className="text-3xl font-bold">Your Learning Journey</h2>
            </div>
            
            <div className="cr-timeline flex flex-col md:flex-row justify-between items-start relative max-w-6xl mx-auto gap-8 md:gap-4 overflow-x-auto pb-8 snap-x">
              <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-slate-700 z-0"></div>
              
              {workflow.map((step, idx) => (
                <div key={idx} className="flex flex-row md:flex-col items-center md:text-center relative z-10 min-w-[140px] snap-center">
                  <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-sm mb-0 md:mb-4 shadow-xl flex-shrink-0 mr-4 md:mr-0 ${idx === 0 ? 'bg-primary border-primary text-white' : 'bg-slate-800 border-slate-600 text-slate-300'}`}>
                    {idx + 1}
                  </div>
                  <h4 className={`font-bold text-sm ${idx === 0 ? 'text-white' : 'text-slate-400'}`}>{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7, 12, 13: REUSED SECTIONS */}
        <SuccessStories />
        <FaqAccordion />
        
        <section className="section cta-section">
          <div className="container">
            <div className="cta-banner premium-card text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Your Future Starts with One Course</h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto">Join thousands of professionals upgrading their skills with MasterTech's industry-recognized certifications.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn btn-primary" style={{backgroundColor: 'white', color: 'var(--color-primary)'}}>Enroll Now</button>
                <button className="btn btn-outline flex items-center gap-2" style={{borderColor: 'white', color: 'white'}}><Search size={18}/> Explore All Courses</button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ProfessionalCourses;
