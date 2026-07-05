import React from 'react';
import CorporateLayout from './CorporateLayout';
import { motion } from 'framer-motion';
import { 
  Monitor, Smartphone, Code, Cpu, LayoutTemplate, Database, 
  Network, Cloud, ShieldCheck, Zap, ShoppingCart, 
  GraduationCap, Wrench, Briefcase, Package, CheckCircle2 
} from 'lucide-react';

const techServicesData = [
  {
    title: "Website Development",
    icon: <Monitor className="text-corporate-primary" size={28} />,
    services: [
      "Business Website Development", "Corporate Website Development", "Personal Portfolio Websites", "Educational Institution Websites", "School Websites", "College Websites", "Coaching Institute Websites", "Law Firm Websites", "Hospital Websites", "Clinic Websites", "NGO Websites", "Restaurant Websites", "Hotel Websites", "Real Estate Websites", "E-Commerce Websites", "Landing Pages", "Blog Websites", "News Portal Websites", "Event Websites", "Membership Websites", "Custom Web Applications", "Website Redesign", "Website Migration", "Website Maintenance"
    ]
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="text-corporate-primary" size={28} />,
    services: [
      "Android App Development", "iOS App Development", "Cross-Platform Apps", "Business Apps", "Educational Apps", "Hospital Management Apps", "School Apps", "E-Commerce Apps", "Food Delivery Apps", "Appointment Booking Apps", "Chat Applications", "AI-Based Mobile Apps", "Maintenance & Updates"
    ]
  },
  {
    title: "Software Development",
    icon: <Code className="text-corporate-primary" size={28} />,
    services: [
      "Custom Software Development", "Desktop Applications", "Billing Software", "Inventory Management Software", "ERP Software", "CRM Software", "HR Management System", "Payroll System", "School Management System", "College Management System", "Hospital Management System", "Library Management System", "Attendance Management System", "Examination Management System", "Hotel Management System", "Clinic Management System"
    ]
  },
  {
    title: "AI & Automation",
    icon: <Cpu className="text-corporate-primary" size={28} />,
    services: [
      "AI Chatbot Development", "AI Virtual Assistant", "Workflow Automation", "Business Process Automation", "AI Integration", "OCR Solutions", "Document Automation", "AI Content Tools", "AI Customer Support", "AI Analytics Solutions"
    ]
  },
  {
    title: "UI / UX Design",
    icon: <LayoutTemplate className="text-corporate-primary" size={28} />,
    services: [
      "Website UI Design", "Mobile App UI Design", "Dashboard UI Design", "Admin Panel Design", "SaaS Product Design", "Landing Page Design", "Wireframing", "Prototyping", "User Experience Design", "Design Systems", "Responsive UI Design"
    ]
  },
  {
    title: "Database Solutions",
    icon: <Database className="text-corporate-primary" size={28} />,
    services: [
      "MySQL Database Design", "PostgreSQL Database", "MongoDB Database", "Firebase Integration", "SQL Optimization", "Database Migration", "Backup & Recovery", "Performance Optimization"
    ]
  },
  {
    title: "API Development & Integration",
    icon: <Network className="text-corporate-primary" size={28} />,
    services: [
      "REST API Development", "Third-Party API Integration", "Payment Gateway Integration", "WhatsApp API Integration", "SMS API Integration", "Email Integration", "Google Maps API", "Authentication Systems", "Webhooks", "API Documentation"
    ]
  },
  {
    title: "Cloud & Hosting Services",
    icon: <Cloud className="text-corporate-primary" size={28} />,
    services: [
      "Domain Registration", "Web Hosting", "VPS Setup", "Cloud Deployment", "AWS Deployment", "Azure Deployment", "Firebase Hosting", "SSL Certificate Setup", "CDN Configuration", "Backup Solutions", "Server Monitoring"
    ]
  },
  {
    title: "Website Security",
    icon: <ShieldCheck className="text-corporate-primary" size={28} />,
    services: [
      "SSL Installation", "Malware Removal", "Security Audit", "Website Firewall", "Backup & Restore", "Security Monitoring", "Spam Protection", "User Authentication", "Two-Factor Authentication"
    ]
  },
  {
    title: "Website Optimization",
    icon: <Zap className="text-corporate-primary" size={28} />,
    services: [
      "Website Speed Optimization", "Core Web Vitals Optimization", "Mobile Optimization", "Performance Audit", "SEO Technical Optimization", "Image Optimization", "Code Optimization", "Database Optimization"
    ]
  },
  {
    title: "E-Commerce Solutions",
    icon: <ShoppingCart className="text-corporate-primary" size={28} />,
    services: [
      "Online Store Development", "Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management", "Inventory Integration", "Customer Dashboard", "Admin Dashboard", "Shipping Integration", "GST Invoice System"
    ]
  },
  {
    title: "Student Services",
    icon: <GraduationCap className="text-corporate-primary" size={28} />,
    services: [
      "Final Year Projects", "Mini Projects", "Academic Projects", "Research Projects", "Python Projects", "Java Projects", "Web Development Projects", "Mobile App Projects", "AI & ML Projects", "Project Documentation", "Project Deployment", "Viva Preparation Support"
    ]
  },
  {
    title: "Technical Support",
    icon: <Wrench className="text-corporate-primary" size={28} />,
    services: [
      "Website Maintenance", "Bug Fixing", "Feature Enhancement", "Performance Monitoring", "Server Support", "Database Maintenance", "Technical Consultation", "Annual Maintenance Contract (AMC)"
    ]
  },
  {
    title: "Business Solutions",
    icon: <Briefcase className="text-corporate-primary" size={28} />,
    services: [
      "Digital Transformation", "Business Automation", "IT Consulting", "Startup Technology Consulting", "Software Architecture", "Technology Audit", "Process Optimization", "Enterprise Solutions"
    ]
  },
  {
    title: "Featured Technology Packages",
    icon: <Package className="text-corporate-primary" size={28} />,
    services: [
      "🚀 Startup Website Package (Responsive Website, Contact Form, SEO Basics, Admin Panel, Domain & Hosting)",
      "🏢 Business Growth Package (Corporate Website, Admin Dashboard, CRM Integration, SEO Optimization, Maintenance)",
      "🛒 E-Commerce Package (Online Store, Payment Gateway, Order Tracking, Inventory, Customer Dashboard)",
      "🎓 Educational Package (School/College Website, Student Portal, Faculty Portal, Admission & Result Management)",
      "⚖️ Law Firm Package (Law Firm Website, Appointment Booking, Document Upload, Legal Blog, Contact Forms)"
    ]
  }
];

const TechnologyServices = () => {
  return (
    <CorporateLayout>
      {/* Full Page Background Wrapper */}
      <div className="w-full min-h-screen relative">
        {/* Dark Glass Overlay for the whole page */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          
          {/* Page Header */}
          <div className="relative pt-32 pb-28 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-20 -mt-20 -mr-20 pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center justify-center gap-3 mb-6 text-white px-5 py-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-xl">
            <Monitor size={20} strokeWidth={2} className="text-corporate-accent" />
            <span className="font-bold tracking-widest uppercase text-sm">Technology Division</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.15]">
            Engineering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-accent to-yellow-200">Your Enterprise</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Enterprise-grade digital transformation, software engineering, and cloud solutions. Building robust, scalable, and secure technology for modern businesses.
          </motion.p>
        </div>
      </div>

      <div className="w-full py-20 relative">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Our Technology Service Portfolio</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              From custom development to scalable cloud architecture, explore our full spectrum of enterprise IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techServicesData.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 overflow-hidden hover:border-corporate-accent/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="p-6 bg-white/5 border-b border-white/10 flex items-center gap-4 group-hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-corporate-dark rounded-lg shadow-sm border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-corporate-accent transition-colors duration-300">
                    {React.cloneElement(category.icon, { className: "text-white group-hover:text-corporate-dark transition-colors duration-300" })}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="p-6 h-[320px] overflow-y-auto custom-scrollbar">
                  <ul className="space-y-3">
                    {category.services.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200">
                        <CheckCircle2 size={16} className="text-corporate-accent shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
        </div>
      </div>
      
      {/* Custom Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8; 
        }
      `}} />
    </CorporateLayout>
  );
};

export default TechnologyServices;
