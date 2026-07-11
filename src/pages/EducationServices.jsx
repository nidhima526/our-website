import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SuccessStories from '../components/SuccessStories';
import FaqAccordion from '../components/FaqAccordion';
import FinalCTA from '../components/FinalCTA';
import { 
  GraduationCap, BookOpen, Video, Users, Search, PlayCircle, Trophy, 
  Code, Target, Laptop, FileText, CheckCircle2, ChevronRight, Star, User, Activity, Download
} from 'lucide-react';
import './EducationServices.css';

const EducationServices = () => {
  const quickActions = [
    { title: 'Find Your Class', icon: <Search size={24}/> },
    { title: 'Browse Courses', icon: <BookOpen size={24}/> },
    { title: 'Book Free Demo', icon: <Video size={24}/> },
    { title: 'Programming Training', icon: <Code size={24}/> },
    { title: 'Competitive Exams', icon: <Target size={24}/> },
    { title: 'Career Guidance', icon: <Users size={24}/> }
  ];

  const tuitions = [
    "Class 1–5", "Class 6–8", "Class 9–10", "Intermediate", "Degree", "B.Tech"
  ];

  const programmingCourses = [
    { title: "Python", level: "Beginner", duration: "8 Weeks", price: "₹4,999" },
    { title: "Java", level: "Intermediate", duration: "10 Weeks", price: "₹5,999" },
    { title: "C Programming", level: "Beginner", duration: "6 Weeks", price: "₹3,499" },
    { title: "C++", level: "Intermediate", duration: "8 Weeks", price: "₹4,499" },
    { title: "HTML", level: "Beginner", duration: "3 Weeks", price: "₹1,999" },
    { title: "CSS", level: "Beginner", duration: "4 Weeks", price: "₹2,499" },
    { title: "JavaScript", level: "Intermediate", duration: "8 Weeks", price: "₹5,499" },
    { title: "React", level: "Advanced", duration: "10 Weeks", price: "₹6,999" },
    { title: "Node.js", level: "Advanced", duration: "8 Weeks", price: "₹6,499" },
    { title: "SQL", level: "Beginner", duration: "5 Weeks", price: "₹3,999" },
    { title: "Data Structures", level: "Advanced", duration: "12 Weeks", price: "₹7,999" },
    { title: "AI Basics", level: "Beginner", duration: "6 Weeks", price: "₹4,999" },
    { title: "Machine Learning", level: "Advanced", duration: "14 Weeks", price: "₹9,999" }
  ];

  const competitiveExams = [
    "IIT Foundation", "NEET Foundation", "EAMCET", "JEE", "SSC", 
    "Bank Exams", "Aptitude", "Reasoning", "Spoken English", "Interview Preparation"
  ];

  const professionalSkills = [
    "Photoshop", "Canva", "Video Editing", "Graphic Design", "AI Tools", 
    "Digital Marketing", "Business Growth", "Freelancing", "YouTube Growth", 
    "Instagram Growth", "Podcast Editing"
  ];

  const featuresList = [
    "Live Online Classes", "Recorded Lessons", "Assignments", "Weekly Tests", 
    "Doubt Solving", "Progress Tracking", "Certificates", "Mentorship", 
    "Parent Progress Reports", "Career Guidance"
  ];

  const instructors = [
    { name: "Nidhima", expert: "Tech & Law", exp: "10+ Years", courses: 5, rating: 5.0 },
    { name: "Rahul S.", expert: "Full Stack Dev", exp: "8 Years", courses: 12, rating: 4.9 },
    { name: "Priya M.", expert: "Mathematics", exp: "15 Years", courses: 8, rating: 4.8 }
  ];

  const freeResources = [
    { title: "Free Notes", icon: <FileText size={24}/> },
    { title: "Sample Videos", icon: <PlayCircle size={24}/> },
    { title: "Practice PDFs", icon: <Download size={24}/> },
    { title: "Mock Tests", icon: <Activity size={24}/> },
    { title: "Career Roadmaps", icon: <Target size={24}/> },
    { title: "Study Planners", icon: <Calendar size={24} className="lucide lucide-calendar"/> } // Used string class instead of importing Calendar to save space
  ];

  const timeline = [
    "Choose Program", "Register", "Attend Demo", "Enroll", 
    "Learn", "Complete Assessments", "Receive Certificate"
  ];

  return (
    <div className="app education-page">
      <Navbar />
      
      <main>
        {/* 1. HERO SECTION */}
        <section className="edu-hero">
          <div className="edu-hero-bg"></div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="edu-hero-content">
              <span className="hero-eyebrow text-accent">ASHERVISION Education</span>
              <h1 className="hero-title mt-4 mb-6">Empowering Students to <span className="text-primary">Learn, Grow, and Succeed</span></h1>
              <p className="hero-subtitle mb-8 text-muted">ASHERVISION offers expert online tutoring, professional courses, programming training, career guidance, competitive exam coaching, and skill development for students from Class 1 to B.Tech.</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">Enroll Now</button>
                <button className="btn btn-secondary flex items-center gap-2"><Video size={18}/> Book Free Demo</button>
                <button className="btn btn-outline flex items-center gap-2"><PlayCircle size={18}/> Watch Intro</button>
              </div>
            </div>
            
            <div className="edu-hero-illustration hidden lg-flex relative h-[450px]">
              <div className="edu-dashboard premium-card glass-panel flex flex-col p-6 w-full max-w-md absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="font-bold flex items-center gap-2"><GraduationCap size={24} className="text-primary"/> Student Portal</div>
                  <User size={20} className="text-muted"/>
                </div>
                
                <div className="bg-primary-light text-primary font-bold text-sm px-4 py-3 rounded-lg mb-4 flex justify-between items-center">
                  <span>Live Class: Python Basics</span>
                  <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> Live</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-surface border border-gray-100 rounded-lg p-3">
                    <div className="text-xs text-muted mb-1">Course Progress</div>
                    <div className="text-lg font-bold">78%</div>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full mt-2 overflow-hidden"><div className="h-full bg-primary w-[78%]"></div></div>
                  </div>
                  <div className="bg-surface border border-gray-100 rounded-lg p-3">
                    <div className="text-xs text-muted mb-1">Quiz Score</div>
                    <div className="text-lg font-bold text-success">92/100</div>
                    <div className="text-xs text-muted mt-1">Top 5% of class</div>
                  </div>
                </div>
                
                <div className="text-sm font-bold mb-2">Upcoming Sessions</div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs p-2 bg-gray-50 rounded"><span>Data Structures</span><span className="text-muted">Today, 4 PM</span></div>
                  <div className="flex justify-between text-xs p-2 bg-gray-50 rounded"><span>Web Dev Mentorship</span><span className="text-muted">Tomorrow, 10 AM</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUICK ACTIONS */}
        <section className="section pt-0 relative z-20" style={{marginTop: '-40px'}}>
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              {quickActions.map((action, idx) => (
                <div key={idx} className="edu-action-card premium-card p-4 flex flex-col items-center text-center cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary mb-3">
                    {action.icon}
                  </div>
                  <span className="text-sm font-bold">{action.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TUITION PROGRAMS */}
        <section className="section bg-surface" id="tuitions">
          <div className="container">
            <div className="section-header text-center mb-12">
              <span className="hero-eyebrow text-accent mb-4">Academic Excellence</span>
              <h2 className="text-3xl font-bold mt-2">Premium Tuition Programs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tuitions.map((cls, idx) => (
                <div key={idx} className="premium-card p-6 flex flex-col border-t-4 border-t-primary">
                  <h3 className="text-xl font-bold mb-4">{cls}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs bg-primary-light text-primary px-2 py-1 rounded font-medium">All Subjects</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-medium">Live + Recorded</span>
                  </div>
                  <ul className="text-sm text-muted flex flex-col gap-2 mb-6 flex-grow">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success"/> Weekly Tests & Quizzes</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success"/> Detailed Assignments</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success"/> 1-on-1 Doubt Sessions</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success"/> Parent Progress Reports</li>
                  </ul>
                  <button className="btn btn-outline w-full text-sm">Enroll in {cls}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PROGRAMMING COURSES */}
        <section className="section" id="programming">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Coding & Programming Courses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {programmingCourses.map((course, idx) => (
                <div key={idx} className="premium-card overflow-hidden flex flex-col p-0">
                  <div className="h-32 bg-gray-100 flex items-center justify-center border-b border-gray-100" style={{background: 'linear-gradient(135deg, rgba(11, 87, 208, 0.1), rgba(11, 87, 208, 0.02))'}}>
                    <Code size={40} className="text-primary opacity-50"/>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{course.title}</h4>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded font-semibold">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted mb-4">
                      <span>{course.duration}</span>
                      <span className="flex items-center gap-1 text-accent"><Star size={12} className="fill-accent"/> 4.8</span>
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-muted mb-6 flex-grow">
                      <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-success"/> 3+ Real-world Projects</span>
                      <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-success"/> Certificate Included</span>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-bold text-primary text-lg">{course.price}</span>
                      <button className="btn btn-primary" style={{padding: '6px 12px', fontSize: '0.875rem'}}>Enroll</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COMPETITIVE EXAMS & 6. SKILLS */}
        <section className="section bg-surface">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Exams */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Target className="text-primary"/> Competitive Exams</h2>
                <div className="grid grid-cols-2 gap-4">
                  {competitiveExams.map((exam, idx) => (
                    <div key={idx} className="premium-card p-4 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                      <h4 className="font-bold text-sm mb-3">{exam}</h4>
                      <div className="text-xs text-muted flex flex-col gap-1 mb-4">
                        <span>• Practice Tests</span>
                        <span>• Mentorship</span>
                      </div>
                      <button className="text-primary text-xs font-bold text-left">View Details <ChevronRight size={12} className="inline"/></button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Laptop className="text-primary"/> Professional Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                  {professionalSkills.map((skill, idx) => (
                    <div key={idx} className="premium-card p-4 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                      <h4 className="font-bold text-sm mb-3">{skill}</h4>
                      <div className="text-xs text-muted flex flex-col gap-1 mb-4">
                        <span>• Practical Projects</span>
                        <span>• Certificate</span>
                      </div>
                      <button className="text-primary text-xs font-bold text-left">View Details <ChevronRight size={12} className="inline"/></button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. LEARNING FEATURES */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Premium Learning Features</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              {featuresList.map((feat, idx) => (
                <div key={idx} className="premium-card p-4 flex flex-col items-center justify-center aspect-square">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary mb-3">
                    <Trophy size={20}/>
                  </div>
                  <span className="text-sm font-bold">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FEATURED INSTRUCTORS */}
        <section className="section bg-surface">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Learn from the Best</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {instructors.map((inst, idx) => (
                <div key={idx} className="premium-card p-6 text-center flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-400">
                    <User size={40}/>
                  </div>
                  <h3 className="font-bold text-lg">{inst.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{inst.expert}</p>
                  <div className="w-full flex justify-between text-xs text-muted mb-6 bg-gray-50 p-2 rounded">
                    <div className="flex flex-col"><span>Exp.</span><span className="font-bold text-main">{inst.exp}</span></div>
                    <div className="flex flex-col"><span>Courses</span><span className="font-bold text-main">{inst.courses}</span></div>
                    <div className="flex flex-col"><span>Rating</span><span className="font-bold text-main">{inst.rating}</span></div>
                  </div>
                  <button className="btn btn-outline w-full text-sm h-10">View Profile</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FREE RESOURCES */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Free Learning Resources</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              {freeResources.map((res, idx) => (
                <div key={idx} className="premium-card p-4 flex flex-col items-center text-center">
                  <div className="text-primary mb-3">{res.icon}</div>
                  <span className="text-sm font-bold mb-4">{res.title}</span>
                  <button className="text-xs text-primary font-bold">Download</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. HOW IT WORKS TIMELINE */}
        <section className="section bg-surface">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">How It Works</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-stretch justify-between relative max-w-5xl mx-auto">
              {/* Line connector for desktop */}
              <div className="hidden lg-block absolute top-1/2 left-0 right-0 h-1 bg-primary opacity-20 -translate-y-1/2 z-0"></div>
              
              {timeline.map((step, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center relative z-10 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4 shadow-md">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-sm max-w-[120px]">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. ENROLLMENT FORM */}
        <section className="section">
          <div className="container max-w-3xl">
            <div className="premium-card p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Enrollment Form</h2>
                <p className="text-muted mt-2">Ready to start learning? Fill out the details below.</p>
              </div>
              
              <form className="edu-form flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Student Name" className="ds-input" required />
                  <input type="text" placeholder="Parent Name (if applicable)" className="ds-input" />
                  <input type="tel" placeholder="Phone Number" className="ds-input" required />
                  <input type="email" placeholder="Email Address" className="ds-input" required />
                  
                  <select className="ds-input text-muted" required>
                    <option value="" disabled selected>Select Class/Level</option>
                    <option>Class 1-5</option><option>Class 6-8</option><option>Class 9-10</option>
                    <option>Intermediate</option><option>Degree</option><option>B.Tech</option>
                    <option>Professional/Other</option>
                  </select>

                  <select className="ds-input text-muted" required>
                    <option value="" disabled selected>Select Program/Course</option>
                    <option>Tuition (All Subjects)</option>
                    <option>Programming Course</option>
                    <option>Competitive Exam Coaching</option>
                    <option>Professional Skill Course</option>
                  </select>

                  <select className="ds-input text-muted" required>
                    <option value="" disabled selected>Preferred Timing</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>Weekend Only</option>
                  </select>

                  <select className="ds-input text-muted" required>
                    <option value="" disabled selected>Learning Mode</option>
                    <option>Live Online</option>
                    <option>Recorded Only</option>
                  </select>
                </div>

                <textarea placeholder="Any specific requirements or questions?" className="ds-input" rows="4"></textarea>
                
                <button type="submit" className="btn btn-primary w-full mt-4 h-12 text-lg">Submit Application</button>
              </form>
            </div>
          </div>
        </section>

        {/* 9, 13, 14: REUSED SECTIONS */}
        <SuccessStories />
        <FaqAccordion />
        
        <section className="section cta-section">
          <div className="container">
            <div className="cta-banner premium-card text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Start Your Learning Journey Today</h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto">Join thousands of students mastering new skills, passing exams, and achieving their academic goals with ASHERVISION.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn btn-primary" style={{backgroundColor: 'white', color: 'var(--color-primary)'}}>Enroll Now</button>
                <button className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>Book Free Demo</button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default EducationServices;
