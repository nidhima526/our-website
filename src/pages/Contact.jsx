import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FaqAccordion from '../components/FaqAccordion';
import FinalCTA from '../components/FinalCTA';
import { 
  Calendar, Clock, Video, Phone, MapPin, Mail, MessageSquare, 
  UploadCloud, FileText, CheckCircle2, Search, ArrowRight, Shield, 
  Globe, User, Building, Briefcase, GraduationCap, Code, PenTool, Scale
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [activeDate, setActiveDate] = useState(null);
  const [activeTime, setActiveTime] = useState(null);
  const [trackerId, setTrackerId] = useState('');
  const [trackingState, setTrackingState] = useState(0); // 0: input, 1: loading, 2: result
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const quickOptions = [
    { title: "Legal Consultation", icon: <Scale size={24}/>, color: "text-slate-800", bg: "bg-slate-100" },
    { title: "Enroll in Course", icon: <GraduationCap size={24}/>, color: "text-accent", bg: "bg-blue-50" },
    { title: "Website Development", icon: <Code size={24}/>, color: "text-primary", bg: "bg-blue-50" },
    { title: "Creative Services", icon: <PenTool size={24}/>, color: "text-pink-600", bg: "bg-pink-50" },
    { title: "Internship Programs", icon: <Briefcase size={24}/>, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "General Enquiry", icon: <Message
<truncated 22699 bytes>
d strictly confidential.</p>
          </div>
        </section>

        {/* 10, 11, 12: REUSED SECTIONS */}
        <FaqAccordion />
        
        <section className="section bg-slate-900 border-y border-slate-800 py-16 text-center">
          <div className="container max-w-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-6">Subscribe to receive legal awareness updates, new course announcements, and tech insights.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="ct-input flex-1 bg-slate-800 border-slate-700 text-white focus:border-accent" />
              <button className="btn btn-primary px-6">Subscribe</button>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <div className="cta-banner premium-card text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto">Take the first step towards resolving your legal matters, mastering new skills, or building your digital product.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#scheduler" className="btn btn-primary" style={{backgroundColor: 'white', color: 'var(--color-primary)'}}>Book Consultation</a>
                <a href="#quote" className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>Request a Quote</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
