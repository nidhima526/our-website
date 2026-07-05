import React from 'react';
import { Link } from 'react-router-dom';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import { 
  Shield, Scale, Monitor, GraduationCap, Briefcase, 
  ArrowRight, Building, Users, Star, ArrowUpRight, 
  CheckCircle, Zap, Globe, Cpu, Award 
} from 'lucide-react';
import ShinyText from '../components/ShinyText';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Home = () => {
  return (
    <CorporateLayout>
      {/* 1. ADVANCED VIDEO HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden bg-transparent flex flex-col justify-between">

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col pt-32 pb-16">
          
          {/* Top Info Text (2-columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full mt-8 md:mt-12">
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 text-sm md:text-base font-medium max-w-md"
            >
              We deliver transformative solutions that empower emerging businesses with cutting-edge expertise and vision to thrive globally.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 text-sm md:text-base font-medium lg:text-right"
            >
              10,000+ Students & Clients Served !
            </motion.p>
          </div>

          {/* Main Hero Typography */}
          <div className="flex flex-col items-center justify-center flex-grow text-center mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 font-bold"
            >
              Seats for Next Program Opening Soon
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-inter flex flex-col font-medium tracking-tighter leading-[0.85] text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl"
            >
              <span>Master Your</span>
              <ShinyText text="Future." className="font-extrabold pb-2" />
            </motion.h1>
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center mt-auto"
          >
            <Link 
              to="/contact" 
              className="group flex items-center gap-3 bg-black hover:bg-gray-900 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Apply for Next Enrollment 
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 2. THE 5 PILLARS (CORE DIVISIONS) - STAGGERED LAYOUT */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-blue-900">Our 5 Core Divisions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A multi-disciplinary approach to solving complex business, legal, and creative challenges.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6"
          >
            {/* Division 1: Technology (Large Card) */}
            <motion.div variants={fadeInUp} className="md:col-span-6 lg:col-span-8 bg-blue-50 rounded-[24px] border border-blue-100 overflow-hidden group hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] hover:border-orange-300 transition-all duration-500 relative flex flex-col md:flex-row -translate-y-0 hover:-translate-y-2">
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src="/custom_tech_logo.jpg" alt="Technology" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center bg-white group-hover:bg-blue-50 transition-colors duration-500">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors duration-500">
                  <Monitor size={28} />
                </div>
                <h3 className="text-2xl font-black mb-3 text-blue-950 group-hover:text-orange-600 transition-colors duration-300">Technology Solutions</h3>
                <p className="text-gray-600 mb-8 font-medium leading-relaxed">Enterprise software, web & mobile applications, AI integration, ERP systems, and secure cloud infrastructure tailored to your exact operational needs.</p>
                <Link to="/contact" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-4 group-hover:text-orange-600 transition-all mt-auto w-max text-lg">
                  Explore Tech <ArrowUpRight size={20} />
                </Link>
              </div>
            </motion.div>

            {/* Division 2: Legal (Medium Card) */}
            <motion.div variants={fadeInUp} className="md:col-span-3 lg:col-span-4 bg-white rounded-[24px] border border-blue-100 overflow-hidden group hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] hover:border-orange-300 transition-all duration-500 flex flex-col -translate-y-0 hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src="/legalpage.jpg" alt="Legal" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-grow flex flex-col bg-white">
                <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors duration-500">
                  <Scale size={24} />
                </div>
                <h3 className="text-xl font-black mb-2 text-blue-950 group-hover:text-orange-600 transition-colors duration-300">Legal Services</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow font-medium leading-relaxed">Expert consultation, documentation, civil, criminal, and corporate legal representation.</p>
                <Link to="/contact" className="text-blue-600 font-bold flex items-center gap-2 group-hover:text-orange-600 group-hover:gap-3 transition-all">
                  Consult Experts <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Division 3: Creative (Medium Card) */}
            <motion.div variants={fadeInUp} className="md:col-span-3 lg:col-span-4 bg-white rounded-[24px] border border-blue-100 overflow-hidden group hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] hover:border-orange-300 transition-all duration-500 flex flex-col -translate-y-0 hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src="/digitalmarketing.jpg" alt="Creative" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-grow flex flex-col bg-white">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors duration-500">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-black mb-2 text-blue-950 group-hover:text-orange-600 transition-colors duration-300">Digital & Creative</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow font-medium leading-relaxed">Brand strategy, SEO, Google Ads, UI/UX design, and premium video editing services.</p>
                <Link to="/contact" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 group-hover:text-orange-600 transition-all">
                  Grow Brand <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Division 4: Courses (Medium Card) */}
            <motion.div variants={fadeInUp} className="md:col-span-3 lg:col-span-4 bg-white rounded-[24px] border border-blue-100 overflow-hidden group hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] hover:border-orange-300 transition-all duration-500 flex flex-col -translate-y-0 hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/certificate.webp" alt="Courses" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-grow flex flex-col bg-white">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors duration-500">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-black mb-2 text-blue-950 group-hover:text-orange-600 transition-colors duration-300">Professional Courses</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow font-medium leading-relaxed">Industry-standard training in Programming, AI, Web Dev, and Digital Marketing.</p>
                <Link to="/contact" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 group-hover:text-orange-600 transition-all">
                  View Courses <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Division 5: Internships (Medium Card) */}
            <motion.div variants={fadeInUp} className="md:col-span-6 lg:col-span-4 bg-white rounded-[24px] border border-blue-100 overflow-hidden group hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] hover:border-orange-300 transition-all duration-500 flex flex-col -translate-y-0 hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src="/internship.png" alt="Internships" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-grow flex flex-col bg-white">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors duration-500">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-black mb-2 text-blue-950 group-hover:text-orange-600 transition-colors duration-300">Corporate Internships</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow font-medium leading-relaxed">Work on live projects with dedicated mentorship and secure placement assistance.</p>
                <Link to="/contact" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 group-hover:text-orange-600 transition-all">
                  Apply Now <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. PREMIUM ORANGE & BLUE STATS BANNER */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center divide-x divide-white/10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-5xl md:text-6xl font-black text-orange-400 mb-3 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">500+</div>
              <div className="text-sm font-bold tracking-widest uppercase text-blue-200">Enterprise Clients</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-5xl md:text-6xl font-black text-orange-400 mb-3 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">10K+</div>
              <div className="text-sm font-bold tracking-widest uppercase text-blue-200">Students Trained</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-5xl md:text-6xl font-black text-orange-400 mb-3 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">120+</div>
              <div className="text-sm font-bold tracking-widest uppercase text-blue-200">Projects Delivered</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="text-5xl md:text-6xl font-black text-orange-400 mb-3 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">4.9</div>
              <div className="text-sm font-bold tracking-widest uppercase text-blue-200">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PACKAGES */}
      <section className="py-32 bg-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-blue-950">Featured Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready-to-deploy, comprehensive service bundles designed for immediate impact.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Package 1 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[24px] p-8 border border-blue-100 shadow-lg hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:-translate-y-3 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute -top-6 -right-6 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 text-blue-600">
                <Globe size={180} />
              </div>
              <h3 className="text-3xl font-black text-blue-950 mb-2">Startup Website</h3>
              <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-8">Digital Foundation</p>
              <ul className="space-y-4 mb-10 text-gray-700 font-medium relative z-10">
                <li className="flex gap-3"><CheckCircle size={22} className="text-orange-500 shrink-0"/> Responsive Custom Website</li>
                <li className="flex gap-3"><CheckCircle size={22} className="text-orange-500 shrink-0"/> Admin Panel & Contact Form</li>
                <li className="flex gap-3"><CheckCircle size={22} className="text-orange-500 shrink-0"/> Technical SEO Basics</li>
                <li className="flex gap-3"><CheckCircle size={22} className="text-orange-500 shrink-0"/> Free Domain & Hosting Support</li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full bg-blue-50 text-blue-700 border-none hover:bg-orange-500 hover:text-white py-4 rounded-xl font-bold transition-colors">View Details</Link>
            </motion.div>

            {/* Package 2 - Premium Middle */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-[24px] p-8 border border-blue-800 shadow-[0_20px_40px_rgba(30,58,138,0.3)] hover:-translate-y-4 transition-all duration-500 relative overflow-hidden group transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-0"></div>
              <div className="absolute -top-6 -right-6 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 text-white z-0">
                <Cpu size={180} />
              </div>
              <h3 className="text-3xl font-black text-white mb-2 relative z-10">Business Growth</h3>
              <p className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-8 relative z-10 drop-shadow-md">Enterprise Scale</p>
              <ul className="space-y-4 mb-10 text-blue-100 font-medium relative z-10">
                <li className="flex gap-3"><CheckCircle size={22} className="text-orange-400 shrink-0"/> Advanced Corporate Website</li>
                <li className="flex gap-3"><CheckCircle size={22} className="text-orange-400 shrink-0"/> Custom CRM Integration</li>
                <li className="flex gap-3"><CheckCircle size={22} className="text-orange-400 shrink-0"/> Google & Meta Ads Setup</li>
                <li className="flex gap-3"><CheckCircle size={22} className="text-orange-400 shrink-0"/> Ongoing Maintenance</li>
              </ul>
              <Link to="/contact" className="btn-accent w-full relative z-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] border-none py-4 rounded-xl font-bold">Get Started Now</Link>
            </motion.div>

            {/* Package 3 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[24px] p-8 border border-blue-100 shadow-lg hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)] hover:-translate-y-3 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute -top-6 -right-6 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 text-orange-500">
                <Scale size={180} />
              </div>
              <h3 className="text-3xl font-black text-blue-950 mb-2">Law Firm Digital</h3>
              <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-8">Specialized Niche</p>
              <ul className="space-y-4 mb-10 text-gray-700 font-medium relative z-10">
                <li className="flex gap-3"><CheckCircle size={22} className="text-blue-600 shrink-0"/> Law Firm Authority Website</li>
                <li className="flex gap-3"><CheckCircle size={22} className="text-blue-600 shrink-0"/> Client Appointment Booking</li>
                <li className="flex gap-3"><CheckCircle size={22} className="text-blue-600 shrink-0"/> Secure Document Upload Portal</li>
                <li className="flex gap-3"><CheckCircle size={22} className="text-blue-600 shrink-0"/> Legal Blog & Resources</li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full bg-blue-50 text-blue-700 border-none hover:bg-orange-500 hover:text-white py-4 rounded-xl font-bold transition-colors">View Details</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-32 bg-blue-950 relative overflow-hidden border-t border-blue-900">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[150px] opacity-40 animate-pulse pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20 backdrop-blur-md">
              <Award size={48} className="text-orange-400" strokeWidth={1.5} />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight">Ready to Accelerate?</h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Contact our executive team today to discuss your enterprise requirements, legal needs, or career growth plans.
          </p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xl font-bold px-12 py-5 rounded-xl shadow-[0_10px_30px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.6)] hover:-translate-y-2 transition-all duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>

    </CorporateLayout>
  );
};

export default Home;
