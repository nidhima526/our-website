import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#030712]/95 backdrop-blur-2xl text-gray-300 pt-20 pb-10 border-t border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src="/logo.png" alt="MasterTechwith Nidhima Logo" className="h-12 md:h-14 object-contain rounded-md shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 group-hover:scale-105 transition-all shrink-0" />
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-black tracking-tight text-white leading-none">
                  MasterTechwith <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">NIDHIMA</span>
                </div>
                <div className="text-xs text-gray-400 italic tracking-widest mt-1.5 font-serif">
                  Prosperity meets a priceless treasure
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-8 max-w-sm leading-relaxed">
              MasterTechGlobal is a multi-service professional firm providing Legal Services, Technology Solutions, Professional Training, Internships, Digital Marketing, and Business Consulting through one trusted platform.
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
              <li><Link to="/creative" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-orange-500/0 group-hover:text-orange-500 -ml-2 group-hover:ml-0 transition-all"/> Digital Marketing</Link></li>
              <li><Link to="/creative" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-orange-500/0 group-hover:text-orange-500 -ml-2 group-hover:ml-0 transition-all"/> Creative Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-orange-500/0 group-hover:text-orange-500 -ml-2 group-hover:ml-0 transition-all"/> Business Consulting</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-extrabold mb-6 text-lg tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> Quick Links
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-blue-500/0 group-hover:text-blue-500 -ml-2 group-hover:ml-0 transition-all"/> About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-blue-500/0 group-hover:text-blue-500 -ml-2 group-hover:ml-0 transition-all"/> Courses</Link></li>
              <li><Link to="/internships" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-blue-500/0 group-hover:text-blue-500 -ml-2 group-hover:ml-0 transition-all"/> Internships</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-blue-500/0 group-hover:text-blue-500 -ml-2 group-hover:ml-0 transition-all"/> Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-extrabold mb-6 text-lg tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div> Connect
            </h3>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-400 mt-0.5 shrink-0" />
                <span className="text-gray-400">Ongole, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <span className="text-gray-400">+91 62816 46302</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-green-400 shrink-0" />
                <span className="text-gray-400">techwithnidhima@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left text-sm font-semibold text-gray-500">
            &copy; {new Date().getFullYear()} MasterTechGlobal. All Rights Reserved.
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
