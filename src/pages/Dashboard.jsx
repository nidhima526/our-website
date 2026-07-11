import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, User, BookOpen, Briefcase, Scale, Monitor, Award, 
  CreditCard, Download, MessageSquare, Bell, Calendar as CalendarIcon, 
  HelpCircle, Settings, LogOut, Search, Plus, Moon, Globe, ChevronDown, 
  Menu, X, ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, FileText, 
  CloudSun, File, Bookmark, MoreVertical, ShieldCheck, Zap
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [role, setRole] = useState('student'); // student, business, legal, advocate
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [greeting, setGreeting] = useState('Good morning');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const getMenuItems = () => {
    const base = [
      { id: 'dash', icon: <LayoutDashboard size={20}/>, label: 'Dashboard', active: true },
      { id: 'profile', icon: <User size={20}/>, label: 'My Profile' }
    ];
    
    const specific = {
      student: [
        { id: 'courses', icon: <BookOpen size={20}/>, label: 'My Courses' },
        { id: 'internships', icon: <Briefcase size={20}/>, label: 'Internships' },
        { id: 'certificates', icon: <Award size={20}/>, label: 'Certificates' },
      ],
      business: [
        { id: 'projects', icon: <Monitor size={20}/>, label: 'Projects' },
        { id: 'services', icon: <Zap size={20}/>, label: 'Services' },
        { id: 'payments', icon: <CreditCard size={20}/>, label: 'Invoices' },
      ],
      legal: [
        { id: 'cases', icon: <Scale size={20}/>, label: 'Case Status' },
        { id: 'docs', icon: <FileText size={20}/>, label: 'Documents' },
        { id: 'appointments', icon: <CalendarIcon size={20}/>, label: 'Appointments' },
      ],
      advocate: [
        { id: 'cases', icon: <Scale size={20}/>, label: 'Active Cases' },
        { id: 'clients', icon: <User size={20}/>, label: 'Clients' },
        { id: 'drafts', icon: <FileText size={20}/>, label: 'Legal Drafts' },
      ]
    };

    const common = [
      { id: 'messages', icon: <MessageSquare size={20}/>, label: 'Messages', badge: 3 },
      { id: 'notifications', icon: <Bell size={20}/>, label: 'Notifications', badge: 5 },
      { id: 'calendar', icon: <CalendarIcon size={20}/>, label: 'Calendar' },
      { id: 'support', icon: <HelpCircle size={20}/>, label: 'Support Center' },
      { id: 'settings', icon: <Settings size={20}/>, label: 'Settings' }
    ];

    return [...base, ...(specific[role] || specific.student), ...common];
  };

  const getKPIs = () => {
    if (role === 'student') return [
      { title: 'Courses Enrolled', value: '4', trend: '+1 this week', positive: true },
      { title: 'Completion Rate', value: '78%', trend: '+5% this month', positive: true },
      { title: 'Certificates', value: '2', trend: 'View all', positive: true }
    ];
    if (role === 'business') return [
      { title: 'Active Projects', value: '3', trend: 'On schedule', positive: true },
      { title: 'Pending Invoices', value: '1', trend: 'Due in 5 days', positive: false },
      { title: 'Support Tickets', value: '0', trend: 'All resolved', positive: true }
    ];
    if (role === 'legal') return [
      { title: 'Active Cases', value: '2', trend: 'Updated today', positive: true },
      { title: 'Pending Documents', value: '3', trend: 'Requires signature', positive: false },
      { title: 'Appointments', value: '1', trend: 'Tomorrow 10 AM', positive: true }
    ];
    return [
      { title: 'Total Clients', value: '24', trend: '+2 this month', positive: true },
      { title: 'Active Cases', value: '12', trend: '3 hearings this week', positive: true },
      { title: 'Pending Drafts', value: '5', trend: '2 urgent', positive: false }
    ];
  };

  const getRecentActivity = () => {
    if (role === 'student') return [
      { title: 'Completed Module 4', desc: 'Python Masterclass', time: '2 hours ago', icon: <CheckCircle2 size={16} className="text-emerald-500"/> },
      { title: 'Assignment Graded', desc: 'UI/UX Fundamentals', time: 'Yesterday', icon: <Award size={16} className="text-primary"/> },
      { title: 'Joined Live Session', desc: 'Intro to React', time: '2 days ago', icon: <Monitor size={16} className="text-blue-500"/> }
    ];
    return [
      { title: 'Project Milestone Approved', desc: 'E-commerce App', time: '1 hour ago', icon: <CheckCircle2 size={16} className="text-emerald-500"/> },
      { title: 'Invoice #INV-2026 Paid', desc: '₹45,000', time: 'Yesterday', icon: <CreditCard size={16} className="text-primary"/> },
      { title: 'New Document Uploaded', desc: 'NDA_Draft_v2.pdf', time: '2 days ago', icon: <FileText size={16} className="text-purple-500"/> }
    ];
  };

  const Sidebar = () => (
    <div className={`db-sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="db-sidebar-header">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-serif font-bold">M</div>
          <span className="text-slate-900 hidden lg:block">ASHERVISION</span>
        </Link>
        <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(false)}><X size={24}/></button>
      </div>

      <div className="db-sidebar-menu custom-scrollbar">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-4 mt-4">Menu</div>
        {getMenuItems().map(item => (
          <a key={item.id} href="#" className={`db-menu-item ${item.active ? 'active' : ''}`}>
            {item.icon}
            <span className="flex-1">{item.label}</span>
            {item.badge && <span className="db-badge">{item.badge}</span>}
          </a>
        ))}
      </div>

      <div className="db-sidebar-footer">
        <a href="#" className="db-menu-item text-red-500 hover:bg-red-50 hover:text-red-600">
          <LogOut size={20}/>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );

  const Topbar = () => (
    <div className="db-topbar">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(true)}><Menu size={24}/></button>
        <div className="relative hidden md:block w-64 lg:w-96">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
          <input type="text" placeholder="Search projects, courses, or docs..." className="db-search-input" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Role Switcher (For Demo Purposes) */}
        <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-lg p-1 border border-slate-200">
          {['student', 'business', 'legal'].map(r => (
            <button 
              key={r} 
              onClick={() => setRole(r)}
              className={`px-3 py-1 text-xs font-bold rounded capitalize transition-all ${role === r ? 'bg-white shadow-sm text-primary' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {r}
            </button>
          ))}
        </div>

        <button className="hidden sm:flex btn btn-primary btn-sm gap-1"><Plus size={16}/> Create New</button>
        
        <div className="flex items-center gap-2 border-l border-slate-200 pl-4 ml-2">
          <button className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"><Moon size={18}/></button>
          <button className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors relative">
            <Bell size={18}/>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          
          <div className="flex items-center gap-2 ml-2 cursor-pointer hover:bg-slate-50 p-1 pr-2 rounded-full border border-transparent hover:border-slate-200 transition-all">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=NidhimaUser" alt="Profile" className="w-full h-full object-cover"/>
            </div>
            <span className="text-sm font-bold hidden xl:block">Nidhima V.</span>
            <ChevronDown size={16} className="text-slate-400 hidden xl:block"/>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="db-layout bg-background">
      <Sidebar />
      
      <div className="db-main-wrapper">
        <Topbar />
        
        <div className="db-content-grid">
          {/* CENTER MAIN CONTENT */}
          <div className="db-main custom-scrollbar">
            
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-main mb-1">{greeting}, Nidhima 👋</h1>
              <p className="text-muted text-sm lg:text-base">Here's what's happening with your {role === 'student' ? 'learning journey' : role === 'business' ? 'projects and services' : 'legal matters'} today.</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <button className="db-quick-card group">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"><CalendarIcon size={20}/></div>
                <span className="font-bold text-sm">Book Consult</span>
              </button>
              <button className="db-quick-card group">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"><BookOpen size={20}/></div>
                <span className="font-bold text-sm">Enroll Course</span>
              </button>
              <button className="db-quick-card group">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"><FileText size={20}/></div>
                <span className="font-bold text-sm">Upload Doc</span>
              </button>
              <button className="db-quick-card group">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"><HelpCircle size={20}/></div>
                <span className="font-bold text-sm">Get Support</span>
              </button>
            </div>

            {/* Personal Analytics KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {getKPIs().map((kpi, i) => (
                <div key={i} className="db-card">
                  <h4 className="text-slate-500 text-sm font-medium mb-1">{kpi.title}</h4>
                  <div className="text-3xl font-bold text-main mb-2">{kpi.value}</div>
                  <div className={`text-xs font-bold flex items-center gap-1 ${kpi.positive ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {kpi.positive ? <ArrowUpRight size={14}/> : <Clock size={14}/>}
                    {kpi.trend}
                  </div>
                </div>
              ))}
            </div>

            {/* Role-Specific Large Widgets */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
              
              {/* Left Widget (Varies by role) */}
              <div className="db-card flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">{role === 'student' ? 'My Courses' : role === 'business' ? 'Active Projects' : 'Active Cases'}</h3>
                  <button className="text-primary text-sm font-bold hover:underline">View All</button>
                </div>
                
                {role === 'student' ? (
                  <div className="space-y-4">
                    <div className="border border-slate-100 rounded-xl p-4 hover:border-slate-200 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold">Full-Stack React & Node.js</div>
                        <span className="text-[10px] font-bold bg-blue-50 text-primary px-2 py-1 rounded">In Progress</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted mb-2"><span>Module 5/12</span><span>45%</span></div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full"><div className="w-[45%] h-full bg-primary rounded-full"></div></div>
                    </div>
                    <div className="border border-slate-100 rounded-xl p-4 hover:border-slate-200 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold">UI/UX Masterclass</div>
                        <span className="text-[10px] font-bold bg-blue-50 text-primary px-2 py-1 rounded">In Progress</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted mb-2"><span>Module 8/10</span><span>80%</span></div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full"><div className="w-[80%] h-full bg-primary rounded-full"></div></div>
                    </div>
                  </div>
                ) : role === 'business' ? (
                  <div className="space-y-4">
                    <div className="border border-slate-100 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-bold">Corporate Website Redesign</div>
                          <div className="text-xs text-muted">Tech Solutions</div>
                        </div>
                        <span className="text-[10px] font-bold bg-blue-50 text-primary px-2 py-1 rounded">Development</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted mb-2 mt-4"><span>Deadline: Nov 15</span><span>60%</span></div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full"><div className="w-[60%] h-full bg-primary rounded-full"></div></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="border border-slate-100 rounded-xl p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-500"><Scale size={18}/></div>
                        <div>
                          <div className="font-bold">Trademark Registration</div>
                          <div className="text-xs text-muted">Ref: TM-2026-892</div>
                        </div>
                      </div>
                      <div className="bg-amber-50 text-amber-700 text-xs font-bold p-2 rounded flex items-center gap-2"><Clock size={14}/> Awaiting Government Response</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Widget (Recent Payments / Activity Table) */}
              <div className="db-card flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Recent Transactions</h3>
                  <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={18}/></button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="text-slate-400 border-b border-slate-100">
                        <th className="pb-3 font-medium">Invoice</th>
                        <th className="pb-3 font-medium">Amount</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-50">
                        <td className="py-3 font-medium text-main">INV-2026-001<div className="text-xs text-muted font-normal">React Course</div></td>
                        <td className="py-3 font-medium">₹4,999</td>
                        <td className="py-3"><span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-1 rounded">Paid</span></td>
                        <td className="py-3 text-right"><button className="text-slate-400 hover:text-primary"><Download size={16}/></button></td>
                      </tr>
                      <tr className="border-b border-slate-50">
                        <td className="py-3 font-medium text-main">INV-2026-002<div className="text-xs text-muted font-normal">Legal Consult</div></td>
                        <td className="py-3 font-medium">₹1,500</td>
                        <td className="py-3"><span className="text-[10px] font-bold bg-amber-50 text-amber-600 px-2 py-1 rounded">Pending</span></td>
                        <td className="py-3 text-right"><button className="text-slate-400 hover:text-primary"><Download size={16}/></button></td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-main">INV-2026-003<div className="text-xs text-muted font-normal">Web Hosting</div></td>
                        <td className="py-3 font-medium">₹2,999</td>
                        <td className="py-3"><span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-1 rounded">Paid</span></td>
                        <td className="py-3 text-right"><button className="text-slate-400 hover:text-primary"><Download size={16}/></button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Bottom Section: Progress & Recommended */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">Recommended for You</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="db-card flex gap-4 items-center group cursor-pointer hover:border-primary transition-colors">
                  <div className="w-14 h-14 rounded-lg bg-blue-50 text-primary flex items-center justify-center flex-shrink-0"><BookOpen size={24}/></div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">Advanced Node.js</h4>
                    <p className="text-xs text-muted">Complete your stack.</p>
                  </div>
                </div>
                <div className="db-card flex gap-4 items-center group cursor-pointer hover:border-primary transition-colors">
                  <div className="w-14 h-14 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0"><Briefcase size={24}/></div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 group-hover:text-emerald-600 transition-colors">Apply for Internship</h4>
                    <p className="text-xs text-muted">Gain real-world XP.</p>
                  </div>
                </div>
                <div className="db-card flex gap-4 items-center group cursor-pointer hover:border-primary transition-colors">
                  <div className="w-14 h-14 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0"><ShieldCheck size={24}/></div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 group-hover:text-purple-600 transition-colors">Privacy Policy Draft</h4>
                    <p className="text-xs text-muted">Secure your website.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT ACTIVITY PANEL */}
          <div className="db-right-panel custom-scrollbar hidden xl:block">
            
            {/* Weather / Date Widget */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-5 text-white mb-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <div className="text-2xl font-bold mb-1">24°C</div>
                  <div className="text-xs font-medium text-blue-100">Hyderabad, India</div>
                </div>
                <CloudSun size={28} className="text-yellow-300"/>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-center relative z-10">
                <span className="text-sm font-bold">Oct 12, 2026</span>
                <span className="text-xs text-blue-100">Monday</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-8">
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4">Recent Activity</h3>
              <div className="relative border-l border-slate-200 ml-3 space-y-6">
                {getRecentActivity().map((act, i) => (
                  <div key={i} className="relative pl-6">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <div className="text-sm font-bold">{act.title}</div>
                    <div className="text-xs text-slate-500 mb-1">{act.desc}</div>
                    <div className="text-[10px] text-slate-400 font-medium flex items-center gap-1"><Clock size={10}/> {act.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Files */}
            <div>
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4 flex items-center justify-between">
                <span>Recent Files</span>
                <button className="text-primary hover:underline capitalize text-xs">View all</button>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded bg-red-50 text-red-500 flex items-center justify-center"><FileText size={18}/></div>
                  <div className="flex-1 overflow-hidden">
                    <div className="text-sm font-bold truncate">NDA_Template.pdf</div>
                    <div className="text-xs text-slate-400">1.2 MB • PDF</div>
                  </div>
                  <Download size={14} className="text-slate-400"/>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded bg-blue-50 text-blue-500 flex items-center justify-center"><Award size={18}/></div>
                  <div className="flex-1 overflow-hidden">
                    <div className="text-sm font-bold truncate">React_Certificate.pdf</div>
                    <div className="text-xs text-slate-400">2.4 MB • PDF</div>
                  </div>
                  <Download size={14} className="text-slate-400"/>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
