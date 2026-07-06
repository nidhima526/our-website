import React, { useState } from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, ArrowRight, Shield, 
  Monitor, PenTool, GraduationCap, Briefcase, CheckCircle2,
  Cpu, Building, Globe
} from 'lucide-react';
import FadingVideo from '../components/FadingVideo';

const divisions = [
  { id: 'tech', label: 'Technology', icon: <Monitor size={16} /> },
  { id: 'legal', label: 'Legal Counsel', icon: <Shield size={16} /> },
  { id: 'creative', label: 'Digital Creative', icon: <PenTool size={16} /> },
  { id: 'academy', label: 'Academy (Courses/Internships)', icon: <GraduationCap size={16} /> },
];

const ContactPage = () => {
  const [selectedDivision, setSelectedDivision] = useState('tech');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const message = form.message.value;
    
    const divisionLabel = divisions.find(d => d.id === selectedDivision)?.label || selectedDivision;

    const whatsappMessage = `*New Inquiry via Website*
*Division:* ${divisionLabel}
*Name:* ${firstName} ${lastName}
*Email:* ${email}
*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/916281646302?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <CorporateLayout>
      <div className="min-h-screen bg-transparent text-white flex flex-col relative overflow-hidden pt-28 pb-20">
        
        {/* Dark Glass Overlay and Cinematic Video */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[30%] -bottom-[30%] left-0 right-0">
            <FadingVideo 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4" 
              className="w-full h-full object-cover translate-y-[17%]"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row gap-16">
          
          {/* LEFT PANEL: Contact Information */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 font-bold text-sm mb-6 shadow-sm backdrop-blur-md">
                <Globe size={18} />
                <span className="uppercase tracking-widest text-xs">Global Headquarters</span>
              </div>
              
              <h1 style={{ fontFamily: "'Instrument Serif', serif" }} className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 leading-tight text-white font-normal whitespace-nowrap">
                Get in Touch.
              </h1>
              
              <p className="text-gray-400 text-lg md:text-xl font-light mb-12 leading-relaxed">
                Whether you need elite software engineering, authoritative legal counsel, or digital marketing growth, our experts are ready.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Direct Lines */}
              <div className="liquid-glass p-6 rounded-[1.25rem] group relative z-10 transition-all duration-300">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Direct Lines</h3>
                    <a href="tel:+918184801842" className="block text-lg font-medium text-white hover:text-orange-400 transition-colors mb-1">+91 81848 01842 (Kalyan)</a>
                    <a href="tel:+916281646302" className="block text-lg font-medium text-white hover:text-orange-400 transition-colors">+91 62816 46302 (Nidhima)</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="liquid-glass p-6 rounded-[1.25rem] group relative z-10 transition-all duration-300">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Corporate Email</h3>
                    <a href="mailto:techwithnidhima@gmail.com" className="block text-lg font-medium text-white hover:text-blue-400 transition-colors">techwithnidhima@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="liquid-glass p-6 rounded-[1.25rem] group relative z-10 transition-all duration-300">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Headquarters</h3>
                    <p className="text-lg font-medium text-white leading-relaxed">
                      Ongole, Andhra Pradesh<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* RIGHT PANEL: Glassmorphism Form */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="liquid-glass p-8 md:p-12 rounded-[32px] relative overflow-hidden"
            >
              
              <h2 className="text-3xl font-extrabold text-white mb-2 relative z-10">Send an Inquiry</h2>
              <p className="text-gray-300 mb-8 font-medium relative z-10">Select a division and tell us how we can help you today.</p>
              
              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-10 text-center relative z-10">
                  <CheckCircle2 size={64} className="text-green-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
                  <h3 className="text-2xl font-bold text-white mb-3">Request Received!</h3>
                  <p className="text-green-100 text-lg">Our team will review your inquiry and get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  
                  {/* Division Selector */}
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">1. Select Division</label>
                    <div className="flex flex-wrap gap-3">
                      {divisions.map((div) => (
                        <button
                          key={div.id}
                          type="button"
                          onClick={() => setSelectedDivision(div.id)}
                          className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                            selectedDivision === div.id 
                              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-none shadow-[0_0_20px_rgba(249,115,22,0.4)] transform scale-105' 
                              : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30 hover:bg-white/10'
                          }`}
                        >
                          {div.icon}
                          {div.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-6">
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider">2. Your Details</label>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input type="text" id="firstName" name="firstName" className="block w-full px-5 py-4 text-white bg-black/30 border border-white/10 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 focus:bg-black/50 peer transition-all placeholder-transparent" placeholder="First Name" required />
                        <label htmlFor="firstName" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black/80 px-2 peer-focus:px-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:bg-black/80 left-3 rounded-md">First Name</label>
                      </div>
                      <div className="relative group">
                        <input type="text" id="lastName" name="lastName" className="block w-full px-5 py-4 text-white bg-black/30 border border-white/10 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 focus:bg-black/50 peer transition-all placeholder-transparent" placeholder="Last Name" required />
                        <label htmlFor="lastName" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black/80 px-2 peer-focus:px-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:bg-black/80 left-3 rounded-md">Last Name</label>
                      </div>
                    </div>

                    <div className="relative group">
                      <input type="email" id="email" name="email" className="block w-full px-5 py-4 text-white bg-black/30 border border-white/10 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 focus:bg-black/50 peer transition-all placeholder-transparent" placeholder="Email Address" required />
                      <label htmlFor="email" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black/80 px-2 peer-focus:px-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:bg-black/80 left-3 rounded-md">Corporate Email Address</label>
                    </div>

                    <div className="relative group">
                      <textarea id="message" name="message" rows="4" className="block w-full px-5 py-4 text-white bg-black/30 border border-white/10 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 focus:bg-black/50 peer transition-all placeholder-transparent resize-none" placeholder="Message" required></textarea>
                      <label htmlFor="message" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-black/80 px-2 peer-focus:px-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:bg-transparent peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-black/80 left-3 rounded-md">How can we assist you?</label>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg">
                    Submit Inquiry <ArrowRight size={22} />
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center font-medium">
                    By submitting, you agree to our <a href="#" className="text-gray-400 underline hover:text-white transition-colors">Privacy Policy</a>. We will never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </CorporateLayout>
  );
};

export default ContactPage;
