import React, { useState } from 'react';
import CorporateLayout from './CorporateLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Clock, CheckCircle2, FileText, 
  UserCheck, Briefcase, ArrowRight, BookOpen, Layers, Target, 
  Code, Brain, Globe, Smartphone, Palette, Video, TrendingUp, Cloud, Award, MessageCircle, PlayCircle, Phone, ChevronRight
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const courseCategories = [
  { 
    id: "programming",
    title: "Programming & Software Development", 
    icon: <Code size={24} />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    iconColor: "text-blue-500",
    courses: ["Python Programming", "Java Programming", "C Programming", "C++ Programming", "JavaScript", "HTML5", "CSS3", "Bootstrap", "React.js", "Node.js", "Express.js", "MongoDB", "SQL & MySQL", "PHP Basics", "Git & GitHub"] 
  },
  { 
    id: "ai",
    title: "Artificial Intelligence & Data", 
    icon: <Brain size={24} />,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    iconColor: "text-purple-500",
    courses: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Prompt Engineering", "ChatGPT & AI Tools", "NLP Basics", "Computer Vision", "Data Science", "Data Analytics", "Power BI", "Microsoft Excel", "Tableau (Optional)"] 
  },
  { 
    id: "web",
    title: "Web Development", 
    icon: <Globe size={24} />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    iconColor: "text-teal-500",
    courses: ["Frontend Development", "Backend Development", "Full Stack Development", "Responsive Web Design", "REST API Development", "Firebase", "Website Deployment", "Portfolio Website Development"] 
  },
  { 
    id: "mobile",
    title: "Mobile App Development", 
    icon: <Smartphone size={24} />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    iconColor: "text-green-500",
    courses: ["Android App Development", "Flutter Basics", "React Native Basics", "Firebase Integration"] 
  },
  { 
    id: "design",
    title: "Graphic Design & Creative", 
    icon: <Palette size={24} />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    iconColor: "text-pink-500",
    courses: ["Adobe Photoshop", "Canva", "Adobe Illustrator", "Figma UI/UX Design", "Logo Design", "Poster Design", "Social Media Design", "Branding Design"] 
  },
  { 
    id: "video",
    title: "Video Editing & Content Creation", 
    icon: <Video size={24} />,
    image: "/video-editing.jpg",
    iconColor: "text-red-500",
    courses: ["Video Editing", "Premiere Pro", "CapCut", "DaVinci Resolve", "Podcast Editing", "Motion Graphics Basics", "Thumbnail Design", "YouTube Content Creation"] 
  },
  { 
    id: "marketing",
    title: "Digital Marketing", 
    icon: <TrendingUp size={24} />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    iconColor: "text-orange-500",
    courses: ["SEO", "Social Media Marketing", "Google Ads", "Meta Ads", "Email Marketing", "Affiliate Marketing", "YouTube Growth", "Instagram Growth", "Personal Branding"] 
  },
  { 
    id: "business",
    title: "Business & Career Skills", 
    icon: <Briefcase size={24} />,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    iconColor: "text-yellow-500",
    courses: ["Freelancing", "Resume Building", "LinkedIn Optimization", "Interview Preparation", "Business Growth", "Entrepreneurship", "Startup Basics", "Communication Skills", "Spoken English"] 
  },
  { 
    id: "cloud",
    title: "Cloud & DevOps", 
    icon: <Cloud size={24} />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    iconColor: "text-cyan-500",
    courses: ["Git & GitHub", "Linux Basics", "AWS Basics", "Azure Basics", "Docker Basics", "CI/CD Fundamentals"] 
  },
  { 
    id: "internships",
    title: "Internship Programs", 
    icon: <Award size={24} />,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
    iconColor: "text-amber-500",
    courses: ["Python Internship", "Web Development Internship", "AI Internship", "Full Stack Internship", "Digital Marketing Internship", "Graphic Design Internship", "Video Editing Internship"] 
  }
];

const learningPaths = [
  {
    title: "Beginner Developer",
    tech: ["HTML", "CSS", "JavaScript", "Git"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Full Stack Developer",
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "AI Engineer",
    tech: ["Python", "Machine Learning", "Deep Learning", "Prompt Engineering", "AI Projects"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Digital Creator",
    tech: ["Photoshop", "Canva", "Video Editing", "Digital Marketing", "YouTube Growth"],
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop"
  }
];

const courseFeatures = [
  { icon: <Clock size={28} />, text: "Flexible Duration" },
  { icon: <Target size={28} />, text: "Beginner to Advanced" },
  { icon: <BookOpen size={28} />, text: "Comprehensive Syllabus" },
  { icon: <PlayCircle size={28} />, text: "Live Practical Sessions" },
  { icon: <FileText size={28} />, text: "Regular Assignments" },
  { icon: <Layers size={28} />, text: "Real-World Projects" },
  { icon: <Award size={28} />, text: "Certificate of Completion" },
  { icon: <UserCheck size={28} />, text: "1-on-1 Mentor Support" },
  { icon: <MessageCircle size={28} />, text: "Dedicated Doubt Support" }
];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState(courseCategories[0]);

  return (
    <CorporateLayout>
      <div className="w-full min-h-screen bg-transparent relative selection:bg-yellow-600 selection:text-white font-sans overflow-hidden">
        
        {/* FIXED BACKGROUND VIDEO FOR THE REMAINING PAGE */}
        <div className="fixed inset-0 z-[-1] bg-[#050505]">
          <video 
            src="https://v1.pinimg.com/videos/iht/expMp4/b1/2d/f7/b12df7408333d98039bb7b0fa7e03d93_720w.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
        </div>
        {/* 1. Hero Section */}
        <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden mb-16 rounded-b-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 z-0">
            <video 
              src="https://v1.pinimg.com/videos/iht/720p/00/b7/1a/00b71ac95a485aac1af1fc72f3415c6a.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover" 
            />
            {/* Minimal overlay just to blend the bottom edge with the next section without dulling the video */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto pt-32 pb-12 mt-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase mb-8 drop-shadow-lg"
            >
              Welcome to Ashervision Educations
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} 
              className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.3)] text-cyan-400"
            >
              <GraduationCap size={20} strokeWidth={2} />
              <span className="font-bold tracking-widest uppercase text-sm">Courses & Certifications</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} 
              className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1] uppercase"
              style={{ fontFamily: "'Space Grotesk', 'Orbitron', 'Inter', sans-serif" }}
            >
              Build Skills. <br className="hidden md:block" /><span className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">Earn Certifications.</span><br />
              Advance Your Career.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} 
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-12 drop-shadow-md"
            >
              Learn from industry-oriented courses designed for students, professionals, job seekers, and business owners. Every course includes practical learning, hands-on projects, and a certificate of completion.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <a href="#courses" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-600 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                <BookOpen size={18} />
                Explore Courses
              </a>
              <a href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#111] text-white border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-xl">
                <FileText size={18} />
                Enroll Now
              </a>
            </motion.div>
          </div>
        </div>

        {/* 2. WHAT EVERY COURSE INCLUDES */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white font-light mb-4" style={{ fontFamily: 'Georgia, serif' }}>What Every Course <span className="italic font-bold text-yellow-500">Includes</span></h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto"></div>
          </div>
          
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {courseFeatures.map((feature, idx) => (
              <motion.div 
                key={idx} variants={fadeInUp}
                className="bg-[#111]/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/5 hover:border-yellow-500/30 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="text-yellow-600 mb-4 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors">{feature.text}</h4>
              </motion.div>
            ))}
            
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-yellow-700 to-yellow-600 p-6 rounded-2xl shadow-[0_0_20px_rgba(202,138,4,0.3)] flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform duration-300">
              <a href="/contact" className="flex flex-col items-center">
                <FileText className="text-white mb-2" size={28} />
                <h4 className="font-bold text-sm text-white uppercase tracking-widest">Enroll Now</h4>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* 3. INTERACTIVE CINEMATIC COURSE CATALOG */}
        <div id="courses" className="text-center mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-600 font-bold tracking-[0.3em] uppercase text-xs block mb-4 drop-shadow-md">Comprehensive Curriculum</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white tracking-tight drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
            Explore Our <span className="italic font-bold text-yellow-500">Domains</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-300 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 bg-[#111]/70 backdrop-blur-xl rounded-[3rem] border border-white/5 p-4 lg:p-8 shadow-2xl">
            
            {/* Left Sidebar: Categories Navigation */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              {courseCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left p-5 rounded-2xl flex items-center justify-between transition-all duration-300 ${
                    activeCategory.id === category.id 
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white shadow-[0_10px_20px_rgba(202,138,4,0.3)] scale-[1.02]' 
                    : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#222] border border-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${activeCategory.id === category.id ? 'text-white' : 'text-yellow-600'}`}>
                      {category.icon}
                    </div>
                    <span className="font-bold text-sm md:text-base tracking-wide">{category.title}</span>
                  </div>
                  {activeCategory.id === category.id && <ChevronRight size={20} className="text-white" />}
                </button>
              ))}
            </div>

            {/* Right Content Area: Active Category Display */}
            <div className="w-full lg:w-2/3 bg-[#0a0a0a]/60 backdrop-blur-lg rounded-3xl border border-white/5 overflow-hidden flex flex-col relative min-h-[800px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  {/* Cinematic Header Image */}
                  <div className="relative w-full h-[300px] overflow-hidden shrink-0">
                    <img 
                      src={activeCategory.image} 
                      alt={activeCategory.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8 flex items-end gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-[#0a0a0a]/50 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/10 ${activeCategory.iconColor}`}>
                        {activeCategory.icon}
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">{activeCategory.title}</h3>
                        <p className="text-gray-300 mt-2 font-medium">{activeCategory.courses.length} specialized modules</p>
                      </div>
                    </div>
                  </div>

                  {/* Course Mini-Cards Grid */}
                  <div className="p-8 flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeCategory.courses.map((course, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                          className="bg-[#151515] border border-white/5 p-4 rounded-xl flex items-center gap-4 hover:border-yellow-600/40 hover:bg-[#1a1a1a] transition-all duration-300 group cursor-pointer"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-[#222] flex items-center justify-center group-hover:bg-yellow-600 group-hover:text-white transition-colors ${activeCategory.iconColor}`}>
                            <CheckCircle2 size={20} />
                          </div>
                          <span className="font-semibold text-gray-200 group-hover:text-white">{course}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Category Footer CTA */}
                  <div className="p-8 pt-0 mt-auto">
                     <a href="/contact" className="w-full py-4 rounded-xl bg-[#151515] border border-yellow-600/30 flex items-center justify-center gap-3 text-yellow-500 font-bold hover:bg-yellow-600 hover:text-white transition-colors duration-300 group">
                       Enroll in {activeCategory.title}
                       <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                     </a>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* 4. FEATURED LEARNING PATHS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>Featured <span className="italic font-bold text-yellow-500">Learning Paths</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="rounded-3xl p-10 min-h-[300px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-yellow-500/50 hover:shadow-[0_20px_50px_rgba(202,138,4,0.15)] transition-all duration-500 relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-sm">
                  <img src={path.image} alt={path.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-8 group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-lg">{path.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {path.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-black/60 backdrop-blur-md text-gray-300 border border-white/10 rounded-full text-sm font-bold tracking-wide shadow-inner group-hover:border-yellow-500/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5. FINAL CTA FOOTER */}
        <div className="w-full py-32 relative overflow-hidden flex items-center justify-center bg-[#050505]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(202,138,4,0.1),transparent_70%)] pointer-events-none"></div>
          
          <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
            <GraduationCap size={48} className="text-yellow-600 mx-auto mb-8 opacity-50" />
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Start Learning <span className="italic font-bold text-yellow-500">Today</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Gain practical skills, earn recognized certificates, and prepare for your next academic or professional opportunity.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/contact" className="flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-700 to-yellow-600 text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:from-yellow-600 hover:to-yellow-500 hover:-translate-y-1 transition-all shadow-[0_0_30px_rgba(202,138,4,0.3)]">
                <FileText size={20} />
                ENROLL NOW
              </a>
              <a href="/contact" className="flex items-center justify-center gap-3 bg-[#111] text-white border border-yellow-600/30 px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:bg-yellow-600/10 hover:-translate-y-1 transition-all shadow-xl">
                <Phone size={20} />
                CONTACT OUR ACADEMY
              </a>
            </div>
          </div>
        </div>

      </div>
    </CorporateLayout>
  );
};

export default Courses;



