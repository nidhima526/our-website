import React from 'react';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import './TeamSection.css';

const TeamSection = () => {
  return (
    <section className="section bg-background" id="team">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Experts</span>
          <h2 className="mt-2 text-3xl font-bold">Meet Your Consulting Partners</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Led by Nidhima, our team of legal advisors, tech architects, and growth consultants are dedicated to your success.
          </p>
        </div>

        <div className="team-grid">
          {/* Founder Card */}
          <div className="team-card founder-card premium-card">
            <div className="team-avatar-wrapper">
              <div className="team-avatar founder-avatar overflow-hidden">
                <img loading="lazy" src="https://api.dicebear.com/7.x/notionists/svg?seed=Nidhima" alt="Nidhima" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="team-info">
              <h3 className="team-name">Adv. Nidhima</h3>
              <p className="team-role text-primary font-medium">Founder & Principal Consultant</p>
              <p className="team-bio mt-4 text-muted">
                Visionary leader blending legal expertise with technology innovation to build comprehensive digital ecosystems for modern enterprises.
              </p>
              <div className="team-social mt-6 flex gap-3">
                <a href="#" className="social-icon"><FaLinkedin size={18}/></a>
                <a href="#" className="social-icon"><FaTwitter size={18}/></a>
                <a href="#" className="social-icon"><Mail size={18}/></a>
              </div>
            </div>
          </div>

          {/* Expert Card 1 */}
          <div className="team-card premium-card">
            <div className="team-avatar-wrapper">
              <div className="team-avatar overflow-hidden">
                <img loading="lazy" src="https://api.dicebear.com/7.x/notionists/svg?seed=Priya" alt="Priya Desai" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="team-info">
              <h3 className="team-name">Priya Desai</h3>
              <p className="team-role text-primary font-medium">Senior Legal Counsel</p>
              <p className="team-bio mt-4 text-muted">
                Specialized in corporate structuring, intellectual property, and international compliance for modern startups.
              </p>
            </div>
          </div>

          {/* Expert Card 2 */}
          <div className="team-card premium-card">
            <div className="team-avatar-wrapper">
              <div className="team-avatar overflow-hidden">
                <img loading="lazy" src="https://api.dicebear.com/7.x/notionists/svg?seed=Rohan" alt="Rohan Sharma" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="team-info">
              <h3 className="team-name">Rohan Sharma</h3>
              <p className="team-role text-primary font-medium">Head of Technology</p>
              <p className="team-bio mt-4 text-muted">
                Architecting scalable, secure web solutions and managing enterprise-grade infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

