import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FaqAccordion from '../components/FaqAccordion';
import FinalCTA from '../components/FinalCTA';
import { 
  CreditCard, ShieldCheck, CheckCircle2, ChevronRight, Lock, HelpCircle,
  Briefcase, GraduationCap, BookOpen, Code, PenTool, Scale, Building, TrendingUp
} from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('Legal Services');

  const tabs = [
    { name: "Legal Services", icon: <Scale size={16}/> },
    { name: "Education", icon: <GraduationCap size={16}/> },
    { name: "Courses", icon: <BookOpen size={16}/> },
    { name: "Internships", icon: <Briefcase size={16}/> },
    { name: "Tech Solutions", icon: <Code size={16}/> },
    { name: "Creative Services", icon: <PenTool size={16}/> }
  ];

  const pricingData = {
    "Legal Services": [
      { name: "Online Consultation", desc: "1-on-1 virtual legal advice.", price: "₹999", inc: ["30 min session", "Case evaluation", "Initial strategy"], time: "Same Day", btn: "Book Now" },
      { name: "Document Review", desc: "Thorough legal review of documents.", price: "₹2,499", inc: ["Up to 10 pages", "Risk assessment", "Correction notes"], time: "24-48 Hours", btn: "Book Now" },
      { name: "Legal Notice Drafting", desc: "Professional drafting of notices.", price: "₹3,999", inc: ["Custom drafting", "Format compliance", "Dispatch assistance"], time: "2-3 Days", btn: "Book Now" },
      { name: "Agreement Drafting", desc: "Contracts, NDAs, and SLAs.", price: "₹5,999", inc: ["Custom clauses", "2 Revisions", "Execution guide"], time: "3-5 Days", btn: "Book Now" },
      { name: "Property Documentation", desc: "Title deeds and lease agreements.", price: "₹8,999", inc: ["Verification", "Drafting", "Registration guidance"], time: "1 Week", btn: "Book Now" },
      { name: "Affidavit Drafting", desc: "Standard and custom affidavits.", price: "₹1,499", inc: ["Notary format", "Proofing", "Print-ready PDF"], time: "24 Hours", btn: "Book Now" },
      { name: "Family Law Consultation", desc: "Sensitive handling of family matters.", price: "₹1,499", inc: ["45 min session", "Options breakdown", "Confidential"], time: "Same Day", btn: "Book Now" },
      { name: "Business Legal Package", desc: "Complete startup legal compliance.", price: "Custom", inc: ["Incorporation", "Founder agreements", "IP protection"], time: "Ongoing", btn: "Request Quote" }
    ],
    "Education": [
      { name: "School Tuition (1-10)", desc: "Math, Science, and English.", price: "₹1,999/mo", inc: ["Live daily classes", "Weekly tests", "Monthly reports"], time: "Monthly", btn: "Enroll Now" },
      { name: "Intermediate (11-12)", desc: "Specialized subject coaching.", price: "₹2,499/mo", inc: ["Subject experts", "Doubt sessions", "Board prep"], time: "Monthly", btn: "Enroll Now" },
      { name: "Degree Subjects", desc: "B.Sc, B.Com, B.A tutorials.", price: "₹2,999/mo", inc: ["Semester focus", "Previous papers", "Project help"], time: "Monthly", btn: "Enroll Now" },
      { name: "B.Tech Coaching", desc: "Engineering subjects & programming.", price: "₹3,499/mo", inc: ["Core subjects", "Lab practicals", "Exam strategy"], time: "Monthly", btn: "Enroll Now" },
      { name: "Programming Basics", desc: "Introductory coding for kids.", price: "₹1,499/mo", inc: ["Block coding", "Logic building", "Fun projects"], time: "Monthly", btn: "Enroll Now" },
      { name: "Competitive Exams", desc: "Government and entrance exams.", price: "₹3,999/mo", inc: ["Mock tests", "Speed tricks", "Current affairs"], time: "Monthly", btn: "Enroll Now" },
      { name: "Spoken English", desc: "Fluency and grammar mastery.", price: "₹1,999/mo", inc: ["Group discussions", "Vocabulary", "Accent training"], time: "Monthly", btn: "Enroll Now" }
    ],
    "Courses": [
      { name: "Python Masterclass", desc: "Zero to hero in Python.", price: "₹4,999", inc: ["8 Weeks", "5 Projects", "Certificate", "Lifetime Access"], btn: "Enroll Now" },
      { name: "Java Programming", desc: "Core & Advanced Java.", price: "₹5,999", inc: ["10 Weeks", "4 Projects", "Certificate", "Lifetime Access"], btn: "Enroll Now" },
      { name: "Web Development", desc: "Full Stack MERN.", price: "₹7,999", inc: ["12 Weeks", "6 Projects", "Certificate", "Job Support"], btn: "Enroll Now" },
      { name: "AI Tools for Business", desc: "Automate your workflows.", price: "₹3,999", inc: ["4 Weeks", "2 Projects", "Certificate", "Lifetime Access"], btn: "Enroll Now" },
      { name: "Photoshop Pro", desc: "Advanced graphic design.", price: "₹4,499", inc: ["6 Weeks", "5 Projects", "Certificate", "Lifetime Access"], btn: "Enroll Now" },
      { name: "Canva Mastery", desc: "Quick social media design.", price: "₹1,999", inc: ["2 Weeks", "3 Projects", "Certificate", "Lifetime Access"], btn: "Enroll Now" },
      { name: "Video Editing", desc: "Premiere Pro basics.", price: "₹5,999", inc: ["8 Weeks", "4 Projects", "Certificate", "Lifetime Access"], btn: "Enroll Now" },
      { name: "Digital Marketing", desc: "SEO, Ads, and Social Media.", price: "₹6,999", inc: ["10 Weeks", "Real Campaigns", "Certificate", "Job Support"], btn: "Enroll Now" },
      { name: "Business Growth", desc: "Strategies for startups.", price: "₹5,999", inc: ["6 Weeks", "Case Studies", "Certificate", "Mentorship"], btn: "Enroll Now" }
    ],
    "Internships": [
      { name: "Basic Internship", desc: "For complete beginners.", price: "₹2,999", inc: ["1 Month Duration", "1 Minor Project", "Basic Mentorship", "Certificate of Completion"], btn: "Apply Now" },
      { name: "Professional Internship", desc: "Build core skills.", price: "₹4,999", inc: ["2 Months Duration", "2 Major Projects", "Weekly Review", "Certificate + LOR"], btn: "Apply Now" },
      { name: "Industry Internship", desc: "Live client projects.", price: "₹7,999", inc: ["3 Months Duration", "Live Projects", "1-on-1 Mentorship", "Placement Guidance"], btn: "Apply Now" },
      { name: "Premium Internship", desc: "Complete career launchpad.", price: "₹12,999", inc: ["6 Months Duration", "Full Portfolio", "Dedicated Mentor", "Interview Prep & Referrals"], btn: "Apply Now" }
    ],
    "Tech Solutions": [
      { name: "Landing Page", desc: "Single page for campaigns.", price: "From ₹9,999", inc: ["Custom Design", "Mobile Responsive", "Contact Form"], time: "1 Week", btn: "Request Quote" },
      { name: "Business Website", desc: "Standard 5-page website.", price: "From ₹24,999", inc: ["CMS Integration", "SEO Optimized", "1 Year Support"], time: "2-3 Weeks", btn: "Request Quote" },
      { name: "Portfolio Website", desc: "For creatives & freelancers.", price: "From ₹14,999", inc: ["Gallery Layouts", "Fast Loading", "Custom Domain Setup"], time: "2 Weeks", btn: "Request Quote" },
      { name: "School Website", desc: "Portal for institutions.", price: "From ₹34,999", inc: ["Notice Board", "Admission Forms", "Admin Panel"], time: "1 Month", btn: "Request Quote" },
      { name: "E-commerce Website", desc: "Sell products online.", price: "From ₹49,999", inc: ["Payment Gateway", "Inventory Mgt", "User Dashboard"], time: "1-2 Months", btn: "Request Quote" },
      { name: "Mobile App (Android/iOS)", desc: "Cross-platform application.", price: "From ₹89,999", inc: ["React Native", "Push Notifications", "App Store Submission"], time: "2-3 Months", btn: "Request Quote" },
      { name: "ERP System", desc: "Enterprise resource planning.", price: "Custom", inc: ["HR & Payroll", "Finance Tracking", "Full Scalability"], time: "3+ Months", btn: "Request Quote" },
      { name: "Custom Software", desc: "Complex bespoke solutions.", price: "Custom", inc: ["Requirement Analysis", "Dedicated Team", "Full Maintenance"], time: "Varies", btn: "Request Quote" }
    ],
    "Creative Services": [
      { name: "Video Editing", desc: "YouTube, Reels, Promos.", price: "From ₹2,499/vid", inc: ["Color Grading", "Motion Graphics", "1 Free Revision"], time: "24-48 Hours", btn: "Hire Now" },
      { name: "Podcast Editing", desc: "Audio mastering & cuts.", price: "From ₹1,499/ep", inc: ["Noise Removal", "Intro/Outro", "ID3 Tagging"], time: "24 Hours", btn: "Hire Now" },
      { name: "Graphic Design", desc: "Flyers, posters, banners.", price: "From ₹999", inc: ["Custom Vectors", "Print Ready", "Source Files"], time: "24 Hours", btn: "Hire Now" },
      { name: "Logo Design", desc: "Professional brand marks.", price: "From ₹4,999", inc: ["3 Concepts", "All File Formats", "Brand Guidelines Mini"], time: "3-5 Days", btn: "Hire Now" },
      { name: "Brand Identity", desc: "Complete visual system.", price: "From ₹14,999", inc: ["Logo, Typography, Colors", "Stationery", "Full Guidelines"], time: "2 Weeks", btn: "Hire Now" },
      { name: "Thumbnail Design", desc: "High-CTR YouTube covers.", price: "From ₹499", inc: ["Custom Text", "Image Retouching", "A/B Test Versions"], time: "Same Day", btn: "Hire Now" },
      { name: "Social Media Management", desc: "Monthly content retainer.", price: "From ₹14,999/mo", inc: ["15 Posts", "Caption Writing", "Basic Analytics"], time: "Monthly", btn: "Hire Now" }
    ]
  };

  const paymentMethods = [
    { name: "UPI", logo: "UPI" }, { name: "Credit Card", logo: "VISA" }, 
    { name: "Debit Card", logo: "MasterCard" }, { name: "Net Banking", logo: "Bank" }, 
    { name: "Wallets", logo: "Paytm/GPay" }, { name: "International", logo: "Stripe/PayPal" }
  ];

  return (
    <div className="app pricing-page">
      <Navbar />
      
      <main>
        {/* 1. HERO SECTION */}
        <section className="pr-hero">
          <div className="pr-hero-bg"></div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="pr-hero-content">
              <span className="hero-eyebrow text-accent flex items-center gap-2"><CreditCard size={16}/> Pricing Overview</span>
              <h1 className="hero-title mt-4 mb-6">Simple, Transparent Pricing for <span className="text-primary">Every Need</span></h1>
              <p className="hero-subtitle mb-8 text-muted">Choose the right solution for your goals. We offer flexible, straightforward pricing across legal, education, technology, and creative services with no hidden fees.</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">Book Consultation</button>
                <button className="btn btn-outline">Request Custom Quote</button>
              </div>
            </div>
            
            <div className="pr-hero-illustration hidden lg-flex relative h-[450px]">
              <div className="pr-dashboard premium-card glass-panel flex flex-col p-6 w-full max-w-md absolute right-0 top-1/2 -translate-y-1/2 z-10 overflow-hidden">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <div className="font-bold flex items-center gap-2"><Building size={20} className="text-primary"/> Billing Dashboard</div>
                  <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded flex items-center gap-1"><ShieldCheck size={14}/> Secure</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-4">
                    <div className="text-xs font-bold text-muted mb-1 flex items-center gap-1"><Code size={12}/> Tech Project</div>
                    <div className="text-lg font-bold">₹24,999</div>
                    <div className="text-[10px] text-green-600 mt-1">Paid via UPI</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-4">
                    <div className="text-xs font-bold text-muted mb-1 flex items-center gap-1"><Scale size={12}/> Legal Consult</div>
                    <div className="text-lg font-bold">₹999</div>
                    <div className="text-[10px] text-amber-600 mt-1">Pending</div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-primary">Invoice #INV-2026</span>
                    <span className="text-xs text-muted">Oct 24</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-accent"><BookOpen size={16}/></div>
                    <div>
                      <div className="font-bold text-sm">Python Masterclass</div>
                      <div className="text-xs text-muted">Professional Course</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PRICING NAVIGATION (Tabs) */}
        <section className="section bg-surface pt-4 pb-0 sticky top-[72px] z-30 border-b border-gray-200">
          <div className="container">
            <div className="flex overflow-x-auto pr-tabs-scroll gap-2 pb-4">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeTab === tab.name ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-muted border border-gray-200 hover:border-primary'}`}
                >
                  {tab.icon} {tab.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3-8. DYNAMIC PRICING GRIDS */}
        <section className="section bg-gray-50/50 min-h-[500px]">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">{activeTab} Pricing</h2>
              <p className="text-muted mt-4">Clear and transparent pricing for our {activeTab.toLowerCase()}.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pricingData[activeTab].map((item, idx) => (
                <div key={idx} className="premium-card bg-white p-6 flex flex-col hover:border-primary transition-all group hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-xs text-muted mb-6 h-8">{item.desc}</p>
                  
                  <div className="text-2xl font-bold text-main mb-2 group-hover:text-primary transition-colors">{item.price}</div>
                  {item.time && <div className="text-[10px] font-bold text-accent uppercase tracking-wider mb-6 pb-4 border-b border-gray-100">Delivered in {item.time}</div>}
                  {!item.time && <div className="mb-6 pb-4 border-b border-gray-100"></div>}
                  
                  <ul className="flex flex-col gap-3 mb-8 flex-grow">
                    {item.inc.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0"/> 
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`btn w-full mt-auto ${item.price === 'Custom' ? 'btn-outline border-slate-900 text-slate-900' : 'btn-outline border-gray-300 hover:border-primary group-hover:bg-primary group-hover:text-white'}`}>
                    {item.btn}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FEATURE COMPARISON */}
        <section className="section bg-white border-t border-gray-200">
          <div className="container">
            <div className="section-header text-center mb-16">
              <h2 className="text-3xl font-bold">Enterprise Service Tiers</h2>
              <p className="text-muted mt-4">A detailed breakdown of what's included in our technology and creative retainer plans.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left border-b-2 border-gray-200 w-1/4"></th>
                    <th className="p-4 text-center border-b-2 border-gray-200 w-[18%]"><h3 className="font-bold text-lg">Starter</h3><p className="text-xs font-normal text-muted mt-1">For individuals</p></th>
                    <th className="p-4 text-center border-b-2 border-primary w-[22%] relative"><div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Most Popular</div><h3 className="font-bold text-lg text-primary">Professional</h3><p className="text-xs font-normal text-muted mt-1">For growing teams</p></th>
                    <th className="p-4 text-center border-b-2 border-gray-200 w-[18%]"><h3 className="font-bold text-lg">Business</h3><p className="text-xs font-normal text-muted mt-1">For scale-ups</p></th>
                    <th className="p-4 text-center border-b-2 border-gray-200 w-[18%]"><h3 className="font-bold text-lg">Enterprise</h3><p className="text-xs font-normal text-muted mt-1">For large orgs</p></th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { f: "Support Level", s: "Email Support", p: "Priority Email", b: "Dedicated Manager", e: "24/7 Phone & Email" },
                    { f: "Delivery Time", s: "Standard", p: "Fast-Track", b: "Priority", e: "Immediate" },
                    { f: "Strategy Consultation", s: "1 Hour", p: "3 Hours/mo", b: "Weekly Strategy", e: "On-site/Daily" },
                    { f: "Customization", s: "Templates", p: "Semi-Custom", b: "Fully Custom", e: "Bespoke System" },
                    { f: "Revision Limits", s: "2 Revisions", p: "5 Revisions", b: "Unlimited", e: "Unlimited" }
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-bold text-slate-800 border-b border-gray-100">{row.f}</td>
                      <td className="p-4 text-center border-b border-gray-100 text-muted">{row.s}</td>
                      <td className="p-4 text-center border-b border-gray-100 font-bold bg-primary/5">{row.p}</td>
                      <td className="p-4 text-center border-b border-gray-100 font-medium">{row.b}</td>
                      <td className="p-4 text-center border-b border-gray-100 font-medium">{row.e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 10. CUSTOM QUOTE */}
        <section className="section bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container relative z-10 text-center max-w-3xl">
            <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <TrendingUp size={32} className="text-primary"/>
            </div>
            <h2 className="text-4xl font-bold mb-4">Need Something Custom?</h2>
            <p className="text-slate-400 text-lg mb-8">Every business is unique. Tell us about your specific goals, constraints, and project requirements, and our team will prepare a personalized, detailed proposal just for you.</p>
            <button className="btn btn-primary h-14 px-8 text-lg">Request Custom Quote</button>
          </div>
        </section>

        {/* 11 & 12. PAYMENTS AND POLICIES */}
        <section className="section bg-surface border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Payment Methods */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Lock className="text-primary"/> Secure Payments</h3>
                <p className="text-muted mb-8 text-sm">We process payments through industry-leading secure gateways. All transactions are encrypted and compliant with global security standards.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {paymentMethods.map((pm, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 p-4 rounded-lg flex flex-col items-center justify-center text-center gap-2 hover:border-primary transition-colors">
                      <span className="text-xs font-bold text-slate-800">{pm.logo}</span>
                      <span className="text-[10px] text-muted">{pm.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><HelpCircle className="text-accent"/> Important Policies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="premium-card p-5">
                    <h4 className="font-bold text-sm mb-2">Money-Back Guarantee</h4>
                    <p className="text-xs text-muted">Applicable on selected courses and services within the first 7 days if you are not satisfied.</p>
                  </div>
                  <div className="premium-card p-5">
                    <h4 className="font-bold text-sm mb-2">Cancellation Policy</h4>
                    <p className="text-xs text-muted">Consultations and services can be cancelled up to 24 hours before the scheduled time.</p>
                  </div>
                  <div className="premium-card p-5">
                    <h4 className="font-bold text-sm mb-2">EMI Options</h4>
                    <p className="text-xs text-muted">Available on credit cards for all services above ₹10,000.</p>
                  </div>
                  <div className="premium-card p-5">
                    <h4 className="font-bold text-sm mb-2">Invoicing</h4>
                    <p className="text-xs text-muted">GST compliant tax invoices provided for all B2B transactions.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 13 & 14: REUSED SECTIONS */}
        <FaqAccordion />
        
        <section className="section cta-section">
          <div className="container">
            <div className="cta-banner premium-card text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Let's Build Your Success Together</h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto">Whether you need legal advice, a new website, creative branding, or to learn a new skill, we have a solution for you.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn btn-primary" style={{backgroundColor: 'white', color: 'var(--color-primary)'}}>Book Consultation</button>
                <button className="btn btn-outline flex items-center gap-2" style={{borderColor: 'white', color: 'white'}}>Start Learning</button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
