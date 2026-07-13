import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-gray-300 pt-20 pb-10 border-t border-yellow-500/20 z-50 overflow-hidden">
      
      {/* 4K HD Golden Wave Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/footer_bg.png" 
          alt="Golden Wave Background" 
          className="w-full h-full object-cover opacity-15 mix-blend-screen blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center group mb-6">
              <img src="/ashervisionlogo.png" alt="ASHERVISION Logo" className="h-16 md:h-20 object-contain shrink-0" />
            </Link>
            <p className="text-sm text-gray-400 mb-8 max-w-sm leading-relaxed">
              ASHERVISION is a multi-service professional firm providing Legal Services, Technology Solutions, Professional Training, Internships, Digital Marketing, and Business Consulting through one trusted platform.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-extrabold mb-6 text-lg tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div> Services
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/legal" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-orange-500/0 group-hover:text-orange-500 -ml-2 group-hover:ml-0 transition-all"/> Legal Services</Link></li>
              <li><Link to="/technology" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-orange-500/0 group-hover:text-orange-500 -ml-2 group-hover:ml-0 transition-all"/> Technology Services</Link></li>
              <li><Link to="/creative" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-orange-500/0 group-hover:text-orange-500 -ml-2 group-hover:ml-0 transition-all"/> Digital & Creative</Link></li>
              <li><Link to="/interior-design" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-orange-500/0 group-hover:text-orange-500 -ml-2 group-hover:ml-0 transition-all"/> Interior Design</Link></li>
              <li><Link to="/internships" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-orange-500/0 group-hover:text-orange-500 -ml-2 group-hover:ml-0 transition-all"/> Internships</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-extrabold mb-6 text-lg tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div> Quick Links
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-yellow-500/0 group-hover:text-yellow-500 -ml-2 group-hover:ml-0 transition-all"/> Home</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-yellow-500/0 group-hover:text-yellow-500 -ml-2 group-hover:ml-0 transition-all"/> Contact Us</Link></li>
              <li><Link to="/legal" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-yellow-500/0 group-hover:text-yellow-500 -ml-2 group-hover:ml-0 transition-all"/> Legal Services</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-yellow-500/0 group-hover:text-yellow-500 -ml-2 group-hover:ml-0 transition-all"/> Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-yellow-500/0 group-hover:text-yellow-500 -ml-2 group-hover:ml-0 transition-all"/> Terms & Conditions</Link></li>
              <li><Link to="/refund" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-yellow-500/0 group-hover:text-yellow-500 -ml-2 group-hover:ml-0 transition-all"/> Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-extrabold mb-6 text-lg tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div> Connect
            </h3>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-0.5 shrink-0" />
                <span className="text-gray-400">India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-500 shrink-0" />
                <span className="text-gray-400">+91 81848 01842</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <span className="text-gray-400">ashervsions@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left text-sm font-semibold text-gray-500">
            &copy; {new Date().getFullYear()} ASHERVISION. All Rights Reserved.
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;

