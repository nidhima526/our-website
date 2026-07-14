import React, { useState } from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, ArrowRight, Shield, 
  Monitor, PenTool, GraduationCap, Briefcase, CheckCircle2,
  Cpu, Building, Globe, Star
} from 'lucide-react';

const divisions = [
  { id: 'tech', label: 'Technology', icon: <Monitor size={16} /> },
  { id: 'legal', label: 'Legal Counsel', icon: <Shield size={16} /> },
  { id: 'creative', label: 'Digital Creative', icon: <PenTool size={16} /> },
  { id: 'academy', label: 'Academy (Courses/Internships)', icon: <GraduationCap size={16} /> },
];

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const ContactPage = () => {
  const [selectedDivision, setSelectedDivision] = useState('tech');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const message = form.message.value;
    
    const divisionLabel = divisions.find(d => d.id === selectedDivision)?.label || selectedDivision;

    // Fetch automatic location
    let location = 'Unknown';
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      location = `${data.city}, ${data.region}, ${data.country_name}`;
    } catch (err) {
      console.error('Could not fetch location:', err);
    }

    // Format Date & Time for display
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    // Save to Firebase Database
    try {
      await addDoc(collection(db, "inquiries"), {
        date,
        time,
        timestamp: serverTimestamp(),
        name: `${firstName} ${lastName}`,
        email,
        phone: 'Not provided', // Contact form doesn't have phone
        service: divisionLabel,
        location,
        message
      });
    } catch (err) {
      console.error('Error saving to DB:', err);
    }

    // Redirect to WhatsApp
    const whatsappMessage = `*New Inquiry via Website*\n*Division:* ${divisionLabel}\n*Name:* ${firstName} ${lastName}\n*Email:* ${email}\n*Location:* ${location}\n*Message:* ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918184801842?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <CorporateLayout>
      <div className="min-h-screen bg-transparent text-white flex flex-col relative overflow-hidden pt-28 pb-20">
        
        {/* Cinematic Video Background (As requested by user) */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            style={{ objectPosition: '70% center' }}
          />
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
                    <a href="tel:+918184801842" className="block text-lg font-medium text-white hover:text-orange-400 transition-colors mb-1">+91 81848 01842</a>
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
                    <a href="mailto:ashervsions@gmail.com" className="block text-lg font-medium text-white hover:text-blue-400 transition-colors">ashervsions@gmail.com</a>
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

        {/* Testimonials Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-32 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">See what our clients say about our unwavering commitment to excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="liquid-glass p-8 rounded-3xl relative border border-white/5 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black/20">
              <div className="flex text-yellow-500 mb-6 gap-1">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"ASHERVISION transformed our digital infrastructure. Their technology solutions are robust, highly scalable, and their team is exceptionally professional."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-lg">RJ</div>
                <div>
                  <h4 className="text-white font-bold">Rajesh J.</h4>
                  <p className="text-sm text-gray-500">Tech Director</p>
                </div>
              </div>
            </div>

            <div className="liquid-glass p-8 rounded-3xl relative border border-white/5 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black/20">
              <div className="flex text-yellow-500 mb-6 gap-1">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"The legal counsel provided by ASHERVISION was nothing short of brilliant. They defended our enterprise with absolute precision and clarity."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-900/50 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-lg">SK</div>
                <div>
                  <h4 className="text-white font-bold">Sunita K.</h4>
                  <p className="text-sm text-gray-500">Corporate Client</p>
                </div>
              </div>
            </div>

            <div className="liquid-glass p-8 rounded-3xl relative border border-white/5 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black/20">
              <div className="flex text-yellow-500 mb-6 gap-1">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"Their creative marketing strategies literally doubled our engagement in one quarter. A premium agency that genuinely delivers on their promises."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-900/50 border border-yellow-500/30 flex items-center justify-center text-yellow-400 font-bold text-lg">MV</div>
                <div>
                  <h4 className="text-white font-bold">Mohammed V.</h4>
                  <p className="text-sm text-gray-500">Marketing Head</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </CorporateLayout>
  );
};

export default ContactPage;
