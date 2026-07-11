import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Briefcase, GitMerge, Flag, FolderOpen, CreditCard, 
  FileText, MessageSquare, Calendar, HelpCircle, CheckSquare, Bell, 
  Settings, LogOut, User, Search, Plus, Moon, ChevronDown, Menu, X, 
  MoreVertical, Download, Upload, CheckCircle2, AlertCircle, Clock, 
  PlayCircle, RefreshCw, BarChart2, Video
} from 'lucide-react';
import './BusinessDashboard.css';

const BusinessDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dash', icon: <LayoutDashboard size={18}/>, label: 'Dashboard', active: true },
    { id: 'projects', icon: <Briefcase size={18}/>, label: 'My Projects', badge: 2 },
    { id: 'timeline', icon: <GitMerge size={18}/>, label: 'Project Timeline' },
    { id: 'milestones', icon: <Flag size={18}/>, label: 'Milestones' },
    { id: 'files', icon: <FolderOpen size={18}/>, label: 'Files' },
    { id: 'invoices', icon: <FileText size={18}/>, label: 'Invoices', badge: 1 },
    { id: 'payments', icon: <CreditCard size={18}/>, label: 'Payments' },
    { id: 'contracts', icon: <FileText size={18}/>, label: 'Contracts' },
    { id: 'messages', icon: <MessageSquare size={18}/>, label: 'Messages', badge: 3 },
    { id: 'meetings', icon: <Calendar size={18}/>, label: 'Meetings' },
    { id: 'support', icon: <HelpCircle size={18}/>, label: 'Support Tickets' },
    { id: 'approvals', icon: <CheckSquare size={18}/>, label: 'Approvals', badge: 4 },
    { id: 'notifications', icon: <Bell size={18}/>, label: 'Notifications' },
    { id: 'profile', icon: <User size={18}/>, label: 'Profile' },
    { id: 'settings', icon: <Settings size={18}/>, label: 'Settings' }
  ];

  const Sidebar = () => (
    <div className={`b2b-sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="b2b-sidebar-header">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-serif font-bold">M</div>
          <span className="text-slate-900 hidden lg:block">ASHERVISION B2B</span>
        </Link>
        <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(false)}><X size={24}/></button>
      </div>

      <div className="b2b-sidebar-menu custom-scrollbar">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-4 mt-4">Workspace</div>
        {menuItems.map(item => (
          <a key={item.id} href="#" className={`b2b-menu-item ${item.active ? 'active' : ''}`}>
            {item.icon}
            <span className="flex-1">{item.label}</span>
            {item.badge && <span className={`b2b-badge ${item.active ? 'bg-primary text-white' : 'bg-red-500 text-white'}`}>{item.badge}</span>}
          </a>
        ))}
      </div>

      <div className="b2b-sidebar-footer">
        <a href="#" className="b2b-menu-item text-slate-500 hover:bg-slate-50 hover:text-red-600 transition-colors">
          <LogOut size={18}/>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );

  const Topbar = () => (
    <div className="b2b-topbar">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(true)}><Menu size={24}/></button>
        <div className="relative hidden md:block w-64 lg:w-96">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
          <input type="text" placeholder="Search projects, invoices, or files..." className="b2b-search-input" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:flex btn btn-primary btn-sm gap-1 shadow-sm shadow-primary/20"><Plus size={16}/> New Project</button>
        
        <div className="flex items-center gap-1 border-l border-slate-200 pl-4 ml-2">
          <button className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"><Moon size={18}/></button>
          <button className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors relative">
            <Bell size={18}/>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          
          <div className="flex items-center gap-2 ml-2 cursor-pointer hover:bg-slate-50 p-1 pr-2 rounded-full border border-transparent hover:border-slate-200 transition-all">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=AcmeCorp" alt="Profile" className="w-full h-full object-cover"/>
            </div>
            <div className="hidden xl:block">
              <span className="text-sm font-bold block leading-none">Acme Corp</span>
              <span className="text-[10px] text-muted">Enterprise Client</span>
            </div>
            <ChevronDown size={14} className="text-slate-400 hidden xl:block ml-1"/>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="b2b-layout bg-background">
      <Sidebar />
      
      <div className="b2b-main-wrapper">
        <Topbar />
        
        <div className="b2b-content-grid">
          {/* CENTER MAIN CONTENT */}
          <div className="b2b-main custom-scrollbar">
            
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-main mb-1">Welcome back, Acme Corp 👋</h1>
              <p className="text-muted text-sm lg:text-base">Track your active projects, approve deliverables, and manage billing in one place.</p>
            </div>

            {/* KPI Overview (ClickUp/Monday Style) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="b2b-card group hover:border-primary transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform"><Briefcase size={18}/></div>
                  <span className="text-2xl font-bold text-main">2</span>
                </div>
                <div className="text-xs text-muted font-medium">Active Projects</div>
              </div>
              <div className="b2b-card group hover:border-amber-500 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform"><CheckSquare size={18}/></div>
                  <span className="text-2xl font-bold text-main">4</span>
                </div>
                <div className="text-xs text-muted font-medium">Pending Approvals</div>
              </div>
              <div className="b2b-card group hover:border-red-500 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform"><FileText size={18}/></div>
                  <span className="text-2xl font-bold text-main">1</span>
                </div>
                <div className="text-xs text-muted font-medium">Unpaid Invoices</div>
              </div>
              <div className="b2b-card group hover:border-emerald-500 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform"><HelpCircle size={18}/></div>
                  <span className="text-2xl font-bold text-main">0</span>
                </div>
                <div className="text-xs text-muted font-medium">Open Support Tickets</div>
              </div>
            </div>

            {/* Active Projects (ClickUp Style Cards) */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Active Projects</h3>
                <button className="text-primary text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                <div className="b2b-card flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">High Priority</span>
                        <span className="text-xs text-muted">Web App</span>
                      </div>
                      <h4 className="font-bold text-main text-lg">Acme E-Commerce Platform</h4>
                    </div>
                    <button className="text-slate-400 hover:text-primary"><MoreVertical size={18}/></button>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-xs">
                    <div className="flex items-center gap-1.5"><Calendar size={14} className="text-slate-400"/> Due Nov 15</div>
                    <div className="flex items-center gap-1.5"><User size={14} className="text-slate-400"/> PM: Nidhima</div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-primary">Development Phase</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-primary rounded-full w-[65%]"></div></div>
                  </div>
                </div>

                <div className="b2b-card flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Normal</span>
                        <span className="text-xs text-muted">Legal Services</span>
                      </div>
                      <h4 className="font-bold text-main text-lg">Terms & Privacy Policy Draft</h4>
                    </div>
                    <button className="text-slate-400 hover:text-primary"><MoreVertical size={18}/></button>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-xs">
                    <div className="flex items-center gap-1.5"><Calendar size={14} className="text-slate-400"/> Due Oct 20</div>
                    <div className="flex items-center gap-1.5"><User size={14} className="text-slate-400"/> Adv. Sharma</div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-amber-500">Client Review</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-amber-500 rounded-full w-[90%]"></div></div>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Project Timeline & Deliverables */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
              
              {/* Timeline (Linear Style Stepper) */}
              <div className="b2b-card">
                <h3 className="font-bold text-lg mb-6">E-Commerce App Timeline</h3>
                <div className="relative border-l-2 border-slate-100 ml-3 space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center"><CheckCircle2 size={12}/></div>
                    <div className="text-sm font-bold text-main">Discovery & Requirements</div>
                    <div className="text-xs text-muted">Approved by John Doe on Sep 01</div>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center"><CheckCircle2 size={12}/></div>
                    <div className="text-sm font-bold text-main">UI/UX Design</div>
                    <div className="text-xs text-muted">Approved by Jane Smith on Sep 15</div>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-[-11px] top-[-2px] w-5 h-5 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                    </div>
                    <div className="text-sm font-bold text-primary">Core Development</div>
                    <div className="text-xs text-muted mb-2">In Progress • Estimated Oct 30</div>
                    <div className="bg-slate-50 p-3 rounded-lg text-xs border border-slate-100">
                      Backend APIs deployed to staging. Frontend integration at 40%.
                    </div>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center"><Clock size={12}/></div>
                    <div className="text-sm font-bold text-slate-400">Testing & QA</div>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center"><Flag size={12}/></div>
                    <div className="text-sm font-bold text-slate-400">Final Deployment</div>
                  </div>
                </div>
              </div>

              {/* Deliverables needing Approval */}
              <div className="b2b-card flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg flex items-center gap-2">Pending Approvals <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded-full">4</span></h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border border-amber-200 bg-amber-50/30 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-amber-100 text-amber-600 flex items-center justify-center"><FileText size={18}/></div>
                        <div>
                          <div className="font-bold text-main text-sm">Privacy Policy v2.pdf</div>
                          <div className="text-xs text-muted">Legal • Sent 2 days ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg transition-colors shadow-sm shadow-amber-500/30">Approve</button>
                      <button className="flex-1 py-1.5 bg-white hover:bg-slate-50 text-slate-600 text-xs font-bold rounded-lg transition-colors border border-slate-200 flex items-center justify-center gap-1"><RefreshCw size={12}/> Revision</button>
                    </div>
                  </div>

                  <div className="border border-slate-100 hover:border-amber-200 rounded-xl p-4 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-blue-50 text-primary flex items-center justify-center"><Video size={18}/></div>
                        <div>
                          <div className="font-bold text-main text-sm">Homepage Hero Animation.mp4</div>
                          <div className="text-xs text-muted">Design • Sent yesterday</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg transition-colors shadow-sm shadow-amber-500/30">Approve</button>
                      <button className="flex-1 py-1.5 bg-white hover:bg-slate-50 text-slate-600 text-xs font-bold rounded-lg transition-colors border border-slate-200">Review Note</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Invoices (Stripe Style) */}
            <div className="b2b-card mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Recent Invoices</h3>
                <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1"><CreditCard size={14}/> Manage Billing</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-100">
                      <th className="pb-3 font-medium">Invoice Number</th>
                      <th className="pb-3 font-medium">Project</th>
                      <th className="pb-3 font-medium">Amount</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Due Date</th>
                      <th className="pb-3 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="py-3 font-bold text-main">INV-2026-892</td>
                      <td className="py-3 text-muted">Legal Retainer Oct</td>
                      <td className="py-3 font-medium">₹15,000</td>
                      <td className="py-3"><span className="text-[10px] font-bold bg-red-50 text-red-600 px-2 py-1 rounded">Overdue</span></td>
                      <td className="py-3 text-red-500 text-xs font-medium">Oct 10, 2026</td>
                      <td className="py-3 text-right">
                        <button className="bg-primary text-white text-xs font-bold px-3 py-1 rounded hover:bg-blue-600 mr-2 shadow-sm">Pay Now</button>
                        <button className="text-slate-400 hover:text-primary"><Download size={14}/></button>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="py-3 font-bold text-main">INV-2026-891</td>
                      <td className="py-3 text-muted">E-Commerce Milestone 2</td>
                      <td className="py-3 font-medium">₹75,000</td>
                      <td className="py-3"><span className="text-[10px] font-bold bg-amber-50 text-amber-600 px-2 py-1 rounded">Pending</span></td>
                      <td className="py-3 text-slate-500 text-xs">Oct 30, 2026</td>
                      <td className="py-3 text-right">
                        <button className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded hover:bg-slate-200 mr-2">Pay Now</button>
                        <button className="text-slate-400 hover:text-primary"><Download size={14}/></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 font-bold text-main">INV-2026-890</td>
                      <td className="py-3 text-muted">E-Commerce Milestone 1</td>
                      <td className="py-3 font-medium">₹75,000</td>
                      <td className="py-3"><span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-1 rounded">Paid</span></td>
                      <td className="py-3 text-slate-500 text-xs">Sep 01, 2026</td>
                      <td className="py-3 text-right">
                        <button className="text-slate-400 hover:text-primary mr-2"><Download size={14}/></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Jira Style Support Tickets */}
            <div>
              <h3 className="font-bold text-lg mb-4">Support Tickets</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center text-slate-400 hover:bg-slate-50 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                  <HelpCircle size={24} className="mb-2"/>
                  <span className="font-bold text-sm">Open New Ticket</span>
                </div>
                {/* Empty state for tickets since KPI says 0 Open */}
                <div className="col-span-2 border border-slate-100 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-slate-50/50">
                  <CheckCircle2 size={32} className="text-emerald-400 mb-3"/>
                  <h4 className="font-bold text-main mb-1">All clear!</h4>
                  <p className="text-xs text-muted">You have no open support tickets. Our team is ready if you need anything.</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT ACTIVITY PANEL */}
          <div className="b2b-right-panel custom-scrollbar hidden xl:block">
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              <button className="bg-slate-50 hover:bg-primary hover:text-white text-slate-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors border border-slate-100 hover:border-primary group">
                <Upload size={18} className="group-hover:scale-110 transition-transform"/>
                <span className="text-xs font-bold">Upload File</span>
              </button>
              <button className="bg-slate-50 hover:bg-primary hover:text-white text-slate-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors border border-slate-100 hover:border-primary group">
                <Calendar size={18} className="group-hover:scale-110 transition-transform"/>
                <span className="text-xs font-bold">Book Call</span>
              </button>
            </div>

            {/* Pinned Projects */}
            <div className="mb-8">
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4">Pinned Projects</h3>
              <div className="space-y-3">
                <div className="p-3 border border-slate-100 rounded-lg hover:border-primary transition-colors cursor-pointer group flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-50 text-primary flex items-center justify-center flex-shrink-0"><Briefcase size={14}/></div>
                  <div className="flex-1 overflow-hidden">
                    <div className="text-sm font-bold text-main truncate group-hover:text-primary transition-colors">E-Commerce App</div>
                    <div className="text-[10px] text-muted">Web Dev</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Meetings */}
            <div className="mb-8">
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4">Upcoming Meetings</h3>
              <div className="bg-slate-900 rounded-xl p-4 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-300 mb-1">
                    <Calendar size={12}/> Today, 3:00 PM
                  </div>
                  <h4 className="text-sm font-bold mb-3">Project Review: Phase 2</h4>
                  <div className="flex -space-x-2 mb-4">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-200 overflow-hidden"><img src="https://api.dicebear.com/7.x/notionists/svg?seed=Nidhima" alt="User"/></div>
                    <div className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-200 overflow-hidden"><img src="https://api.dicebear.com/7.x/notionists/svg?seed=Dev" alt="User"/></div>
                  </div>
                  <button className="w-full bg-primary hover:bg-blue-600 text-white text-xs font-bold py-2 rounded-lg transition-colors">Join Google Meet</button>
                </div>
              </div>
            </div>

            {/* Productivity Tips (Notion Style) */}
            <div>
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4">ASHERVISION Tips</h3>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-amber-900">
                <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                  <span className="text-lg">💡</span> Speed up approvals!
                </div>
                <p className="text-xs leading-relaxed opacity-80">
                  Did you know you can leave inline comments directly on video deliverables? Try it on the Homepage Animation asset to request specific frame edits.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
