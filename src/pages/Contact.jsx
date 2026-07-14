import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white font-sans selection:bg-blue-500/30">
      
      {/* Global Background Video (Fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video webkit-playsinline='true' preload='auto' 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover pointer-events-none opacity-40"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/80 via-transparent to-[#0c0c0c]/90"></div>
      </div>

      {/* Guide lines from Aura prompt (Optional but fits the cinematic aesthetic) */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/5 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/5 z-[5]" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                Get in Touch
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Let's start a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">conversation.</span>
              </h1>
              
              <p className="text-lg text-white/60 max-w-md leading-relaxed mb-12">
                Whether you need technical consulting, educational services, or design solutions, our team is ready to help you build the future.
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-1">Email Us</h3>
                    <p className="text-lg font-medium">hello@eliteacademy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-1">Call Us</h3>
                    <p className="text-lg font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-1">Visit Us</h3>
                    <p className="text-lg font-medium">100 Innovation Drive<br/>Tech District, CA 94103</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form (Liquid Glass Style) */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative rounded-[2rem] bg-white/[0.02] border border-white/10 p-8 md:p-10 backdrop-blur-xl shadow-2xl overflow-hidden"
              style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.5)' }}
            >
              {/* Form subtle glow */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

              <h2 className="text-2xl font-bold mb-8">Send us a message</h2>

              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-white/60">We've received your inquiry and will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-white/50 uppercase tracking-widest ml-1">First Name</label>
                      <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" placeholder="Jane" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-white/50 uppercase tracking-widest ml-1">Last Name</label>
                      <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/50 uppercase tracking-widest ml-1">Email Address</label>
                    <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" placeholder="jane@company.com" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/50 uppercase tracking-widest ml-1">Message</label>
                    <textarea required rows="4" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit" 
                    className="mt-4 w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-semibold text-sm px-5 py-4 transition-all hover:bg-white/90 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    {formStatus !== 'submitting' && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

