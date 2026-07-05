import React from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Clock, CheckCircle2, FileText, 
  UserCheck, Star, Briefcase, ArrowRight, Zap, Target, Award
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Courses = () => {
  const courses = [
    { title: 'Python Enterprise Development', category: 'Programming', duration: '12 Weeks', fee: '₹14,999', logo: '/python_course_logo.png', highlight: true },
    { title: 'Java Full Stack Architecture', category: 'Programming', duration: '16 Weeks', fee: '₹19,999', logo: '/java_course_logo.png' },
    { title: 'React & Next.js Specialization', category: 'Web Development', duration: '10 Weeks', fee: '₹12,999', logo: '/react_course_logo.png' },
    { title: 'Artificial Intelligence & ML', category: 'AI Tools', duration: '14 Weeks', fee: '₹18,999', logo: '/ai_course_logo.png', highlight: true },
    { title: 'C & C++ Systems Programming', category: 'Programming', duration: '8 Weeks', fee: '₹9,999', logo: '/cpp_course_logo.png' },
    { title: 'Digital Marketing Mastery', category: 'Business Growth', duration: '10 Weeks', fee: '₹11,999', logo: '/digital_marketing_logo.png' },
    { title: 'Professional Freelancing', category: 'Business Growth', duration: '4 Weeks', fee: '₹4,999', logo: '/freelancing_logo.png' },
    { title: 'UI/UX Design with Canva & Figma', category: 'Design', duration: '8 Weeks', fee: '₹9,999', logo: '/uiux_design_logo.png' },
  ];

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
          
          {/* Page Header */}
          <div className="text-white pt-20 pb-16 flex flex-col items-center text-center px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} 
              className="inline-flex items-center justify-center gap-3 mb-6 text-white px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-xl"
            >
              <GraduationCap size={20} strokeWidth={2} className="text-green-400" />
              <span className="font-bold tracking-widest uppercase text-sm">Professional Academy</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1] drop-shadow-lg"
            >
              Master the Skills <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300">Enterprises Demand.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} 
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md"
            >
              Intensive, project-based training programs designed by senior architects. Complete your certification and step directly into the corporate world.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a href="#courses" className="btn-primary bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-[0_10px_20px_rgba(74,222,128,0.3)] hover:shadow-[0_15px_30px_rgba(74,222,128,0.4)] transition-all">
                Explore Programs
              </a>
            </motion.div>
          </div>

          {/* 2. CORE METHODOLOGY - FROSTED GLASS */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              {[
                { icon: <UserCheck size={32}/>, title: 'Senior Architects', desc: 'Learn directly from industry veterans.', color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-400/30' },
                { icon: <FileText size={32}/>, title: 'Live Projects', desc: 'Build real-world enterprise apps.', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-400/30' },
                { icon: <Award size={32}/>, title: 'Global Certification', desc: 'Verifiable credentials for your resume.', color: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-400/30' },
                { icon: <Briefcase size={32}/>, title: 'Placement Assistance', desc: 'Direct corporate interview access.', color: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-400/30' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-xl p-8 rounded-[24px] shadow-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 ${item.bg} ${item.color} border ${item.border} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h4 className="font-extrabold text-xl mb-3 text-white">{item.title}</h4>
                  <p className="text-base text-gray-300 font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 3. PREMIUM COURSE CATALOG */}
          <div id="courses" className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-2 block drop-shadow-md">Our Curriculum</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight drop-shadow-md">Enterprise Certification Programs</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-md">
              Choose from our highly specialized tracks designed for immediate career impact.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {courses.map((course, idx) => (
                <motion.div 
                  key={idx} variants={fadeInUp}
                  className={`bg-white/10 backdrop-blur-xl rounded-[24px] transition-all duration-300 overflow-hidden flex flex-col group relative ${course.highlight ? 'border border-green-400/50 shadow-[0_0_20px_rgba(74,222,128,0.2)]' : 'border border-white/20 shadow-2xl hover:border-blue-400/50 hover:bg-white/15 hover:-translate-y-2'}`}
                >
                  {course.highlight && (
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-green-400 to-blue-500 z-20"></div>
                  )}
                  
                  <div className="p-8 flex-grow flex flex-col relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-[16px] flex items-center justify-center shadow-inner border border-white/10 overflow-hidden group-hover:scale-110 transition-transform p-2">
                        <img src={course.logo} alt={course.title} className="w-full h-full object-contain" />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full ${course.highlight ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-white/10 text-gray-300 border border-white/20'}`}>
                        {course.category}
                      </span>
                    </div>

                    <h3 className={`text-xl font-black mb-4 leading-snug transition-colors ${course.highlight ? 'text-white group-hover:text-green-300' : 'text-white group-hover:text-blue-300'}`}>{course.title}</h3>
                    
                    <div className="space-y-3 mb-8 mt-auto">
                      <div className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                        <Clock size={18} className="text-gray-400" /> {course.duration} Intensive
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                        <CheckCircle2 size={18} className="text-green-400" /> Live Project Included
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                      <div className="text-2xl font-black text-white">{course.fee}</div>
                      <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${course.highlight ? 'bg-green-500 text-white shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'bg-white/10 text-white hover:bg-blue-500 shadow-sm border border-white/20'}`}>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 4. LEARNING OUTCOME SECTION */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-green-900/60 to-blue-900/60 backdrop-blur-2xl border border-white/10 text-white rounded-[40px] p-10 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/30 rounded-full blur-[120px] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight drop-shadow-md">Ready to build your corporate career?</h2>
                  <p className="text-xl text-green-100 font-light mb-8 drop-shadow-sm">
                    Join 10,000+ students who have transformed their careers through our industry-aligned curriculum.
                  </p>
                  <button className="bg-white text-green-900 font-bold hover:bg-green-50 px-8 py-4 rounded-xl text-lg shadow-xl shadow-green-900/50 hover:-translate-y-1 transition-all">
                    Download Complete Syllabus
                  </button>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                  <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/30 transition-colors">
                    <Target className="text-green-400 mb-4" size={32} />
                    <h4 className="text-xl font-bold mb-2">Focused Learning</h4>
                    <p className="text-gray-300 text-sm">No fluff. Only what the industry demands.</p>
                  </div>
                  <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 mt-8 hover:bg-black/30 transition-colors">
                    <Zap className="text-yellow-400 mb-4" size={32} />
                    <h4 className="text-xl font-bold mb-2">Fast-Track</h4>
                    <p className="text-gray-300 text-sm">Accelerated programs for quick deployment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </CorporateLayout>
  );
};

export default Courses;
