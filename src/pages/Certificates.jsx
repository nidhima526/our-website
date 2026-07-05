import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Video, FileEdit, HelpCircle, Book, 
  FileText, Briefcase, Award, Target, MessageSquare, Calendar as CalendarIcon, 
  CreditCard, Download, Settings, LogOut, User, Search, Bell, Moon, ChevronDown, 
  Menu, X, CheckCircle2, Trophy, Medal, Star, ShieldCheck, Share2, Printer, 
  Link as LinkIcon, QrCode, Clock, Flame, ChevronRight
} from 'lucide-react';
import './StudentDashboard.css';
import './Assignments.css';
import './Certificates.css';

const Certificates = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('Certificates');
  const [flippedCert, setFlippedCert] = useState(null);

  const menuItems = [
    { id: 'dash', icon: <LayoutDashboard size={18}/>, label: 'Dashboard', link: '/dashboard/student' },
    { id: 'courses', icon: <BookOpen size={18}/>, label: 'My Courses', link: '/dashboard/courses' },
    { id: 'assignments', icon: <FileEdit size={18}/>, label: 'Assignments & Quizzes', badge: 2, link: '/dashboard/assignments' },
    { id: 'certificates', icon: <Award size={18}/>, label: 'Certificates & Achievements', active: true, link: '/dashboard/certificates' },
    { id: 'live', icon: <Video size={18}/>, label: 'Live Classes', badge: 1, link: '/dashboard/live' },
    { id: 'study', icon: <Book size={18}/>, label: 'Study Materials', link: '/dashboard/materials' },
    { id: 'internships', icon: <Briefcase size={18}/>, label: 'Internships', link: '/dashboard/internships' },
    { id: 'messages', icon: <MessageSquare size={18}/>, label: 'Messages', badge: 5, link: '/dashboard/messages' },
    { id: 'profile', icon: <User size={18}/>, label: 'Profile', link: '/dashboard/profile' }
  ];

  const certificatesData = [
    {
      id: "CERT-2026-9482",
      course: "UI/UX Masterclass",
      instructor: "Elena V.",
      issueDate: "Oct 24, 2026",
      image: "https://images.unsplash.com/photo-1589330694653-afaae9128099?w=800&q=80",
      skills: ["Figma", "Wireframing", "Prototyping", "User Research"]
    },
    {
      id: "CERT-2026-1045",
      course: "Data Structures & Algorithms",
      instructor: "Dr. Rao",
      issueDate: "Sep 15, 2026",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      skills: ["Java", "Trees", "Graphs", "Dynamic Programming"]
    }
  ];

  const badgesData = [
    { id: 1, name: "Top Learner", description: "Top 5% of class in UI/UX Masterclass", icon: <Trophy size={48}/>, color: "gold", date: "Oct 2026" },
    { id: 2, name: "Code Ninja", description: "Completed 50 coding challenges", icon: <FileText size={48}/>, color: "purple", date: "Sep 2026" },
    { id: 3, name: "Perfect Attendance", description: "Attended all Live Classes", icon: <CheckCircle2 size={48}/>, color: "emerald", date: "Aug 2026" },
    { id: 4, name: "Early Bird", description: "Submitted 10 assignments early", icon: <Clock size={48}/>, color: "blue", date: "Jul 2026" }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  const Sidebar = () => (
    <div className={`lms-sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="lms-sidebar-header">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-serif font-bold">M</div>
          <span className="text-slate-900 hidden lg:block">MasterTech</span>
        </Link>
        <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(false)}><X size={24}/></button>
      </div>
      <div className="lms-sidebar-menu custom-scrollbar">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-4 mt-4">Credentials</div>
        {menuItems.map(item => (
          <Link key={item.id} to={item.link} className={`lms-menu-item ${item.active ? 'active' : ''}`}>
            {item.icon}
            <span className="flex-1">{item.label}</span>
            {item.badge && <span className={`lms-badge ${item.active ? 'bg-primary text-white' : 'bg-red-500 text-white'}`}>{item.badge}</span>}
          </Link>
        ))}
      </div>
    </div>
  );

  const Topbar = () => (
    <div className="lms-topbar">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(true)}><Menu size={24}/></button>
        <div className="relative hidden md:block w-64 lg:w-96">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
          <input type="text" placeholder="Search certificates and badges..." className="lms-search-input" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 border-l border-slate-200 pl-4 ml-2">
          <button onClick={toggleDarkMode} className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors">
            <Moon size={18}/>
          </button>
          <div className="flex items-center gap-2 ml-2 cursor-pointer hover:bg-slate-50 p-1 pr-2 rounded-full border border-transparent hover:border-slate-200 transition-all">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=StudentOne" alt="Profile" className="w-full h-full object-cover"/>
            </div>
            <span className="text-sm font-bold hidden xl:block">Alex Doe</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch(activeTab) {
      case 'Certificates':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {certificatesData.map((cert) => (
                <div key={cert.id} className="lms-card p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="cert-card-container">
                    <div className={`cert-card ${flippedCert === cert.id ? 'flipped' : ''}`}>
                      {/* Front of Certificate */}
                      <div className="cert-card-front relative group">
                        <img src={cert.image} alt={cert.course} />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => setFlippedCert(cert.id)}
                            className="bg-white text-slate-900 font-bold py-2 px-6 rounded-full hover:bg-slate-100 transition-colors mb-3"
                          >
                            Flip Certificate
                          </button>
                          <button className="text-white font-bold text-sm hover:underline flex items-center gap-2">
                            <Maximize size={16}/> View Fullscreen
                          </button>
                        </div>
                      </div>
                      
                      {/* Back of Certificate (Details & Verification) */}
                      <div className="cert-card-back">
                        <QrCode size={80} className="mb-4 text-slate-800 dark:text-white"/>
                        <h3 className="font-bold text-lg mb-1">{cert.course}</h3>
                        <p className="text-sm text-slate-500 mb-4">Instructor: {cert.instructor}</p>
                        
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded p-3 mb-4">
                          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Credential ID</div>
                          <div className="font-mono font-bold text-primary">{cert.id}</div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                          {cert.skills.map((skill, i) => (
                            <span key={i} className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full font-medium">{skill}</span>
                          ))}
                        </div>
                        
                        <button 
                          onClick={() => setFlippedCert(null)}
                          className="text-primary font-bold text-sm hover:underline"
                        >
                          Back to Front
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <h3 className="font-bold text-main">{cert.course}</h3>
                      <div className="text-sm text-muted">Issued on {cert.issueDate}</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 hover:text-primary transition-colors tooltip" title="Download PDF"><Download size={18}/></button>
                      <button className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:bg-[#005e93] transition-colors tooltip" title="Add to LinkedIn"><LinkIcon size={18}/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Badges':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {badgesData.map(badge => (
                <div key={badge.id} className="lms-card badge-card flex flex-col items-center text-center p-8 group">
                  <div className={`badge-hexagon ${badge.color}`}>
                    <div className="badge-icon">
                      {badge.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-main mb-2 mt-4">{badge.name}</h3>
                  <p className="text-xs text-muted mb-4 line-clamp-2">{badge.description}</p>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Earned {badge.date}</div>
                  
                  <div className="flex gap-2 w-full mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex-1 bg-slate-100 text-slate-700 text-xs font-bold py-2 rounded hover:bg-slate-200 transition-colors">View</button>
                    <button className="flex-1 bg-primary text-white text-xs font-bold py-2 rounded hover:bg-blue-600 transition-colors">Share</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Leaderboard':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="lms-card p-0 overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold mb-1">Global Ranking</h2>
                  <p className="text-sm text-muted">Compete with peers globally based on completed courses and challenges.</p>
                </div>
                <select className="text-sm border border-slate-200 rounded-md px-3 py-2 bg-white outline-none">
                  <option>This Month</option>
                  <option>All Time</option>
                </select>
              </div>
              <div className="overflow-x-auto">
                <table className="ac-grade-table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Student</th>
                      <th>Badges</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { rank: 1, name: "Sarah Jenkins", points: "12,450", badges: 15, me: false },
                      { rank: 2, name: "David Chen", points: "11,200", badges: 12, me: false },
                      { rank: 3, name: "Alex Doe", points: "10,850", badges: 10, me: true },
                      { rank: 4, name: "Priya Sharma", points: "9,950", badges: 8, me: false },
                      { rank: 5, name: "Michael Ross", points: "8,400", badges: 7, me: false }
                    ].map(user => (
                      <tr key={user.rank} className={user.me ? "bg-blue-50/50" : ""}>
                        <td>
                          {user.rank <= 3 ? (
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${user.rank === 1 ? 'bg-amber-400' : user.rank === 2 ? 'bg-slate-400' : 'bg-amber-700'}`}>
                              {user.rank}
                            </div>
                          ) : (
                            <div className="font-bold text-slate-400 ml-3">{user.rank}</div>
                          )}
                        </td>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                              <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${user.name}`} alt={user.name}/>
                            </div>
                            <span className={`font-bold ${user.me ? 'text-primary' : 'text-main'}`}>{user.name} {user.me && "(You)"}</span>
                          </div>
                        </td>
                        <td>
                          <div className="flex gap-1">
                            {[...Array(Math.min(user.badges, 5))].map((_, i) => (
                              <Medal key={i} size={16} className={i === 0 ? "text-amber-500" : "text-slate-400"}/>
                            ))}
                            {user.badges > 5 && <span className="text-xs text-muted ml-1">+{user.badges - 5}</span>}
                          </div>
                        </td>
                        <td className="font-bold text-primary">{user.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'Timeline':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-8">Learning History</h2>
            <div className="learning-timeline">
              <div className="timeline-item">
                <div className="timeline-dot flex items-center justify-center text-primary bg-white"><Award size={12}/></div>
                <div className="timeline-content">
                  <div className="text-xs font-bold text-slate-400 mb-1">October 24, 2026</div>
                  <h4 className="font-bold text-lg mb-2">Earned UI/UX Masterclass Certificate</h4>
                  <p className="text-sm text-slate-600 mb-4">Successfully completed the 8-week intensive design course with an overall grade of 95%.</p>
                  <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">View Certificate <ChevronRight size={14}/></button>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot flex items-center justify-center text-primary bg-white"><Trophy size={12}/></div>
                <div className="timeline-content">
                  <div className="text-xs font-bold text-slate-400 mb-1">September 28, 2026</div>
                  <h4 className="font-bold text-lg mb-2">Earned 'Code Ninja' Badge</h4>
                  <p className="text-sm text-slate-600">Completed 50 coding challenges on the MasterTech platform.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot flex items-center justify-center text-primary bg-white"><CheckCircle2 size={12}/></div>
                <div className="timeline-content">
                  <div className="text-xs font-bold text-slate-400 mb-1">September 15, 2026</div>
                  <h4 className="font-bold text-lg mb-2">Completed Data Structures & Algorithms</h4>
                  <p className="text-sm text-slate-600">Finished all modules and passed the final examination.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Verification':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
            <div className="lms-card p-8 text-center border-t-4 border-t-primary shadow-lg">
              <ShieldCheck size={64} className="text-primary mx-auto mb-6"/>
              <h2 className="text-2xl font-bold mb-2">Verify a Certificate</h2>
              <p className="text-slate-500 mb-8">MasterTech certificates are digitally signed and securely tracked. Enter a Credential ID below to verify its authenticity.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <input 
                  type="text" 
                  placeholder="e.g. CERT-2026-9482" 
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary font-mono"
                />
                <button className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">Verify</button>
              </div>
              
              <div className="flex items-center gap-4 justify-center">
                <div className="h-px bg-slate-200 flex-1"></div>
                <span className="text-xs font-bold text-slate-400 uppercase">OR</span>
                <div className="h-px bg-slate-200 flex-1"></div>
              </div>
              
              <button className="mt-8 bg-white border border-slate-200 text-slate-700 font-bold px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors inline-flex items-center gap-2">
                <QrCode size={20}/> Scan QR Code
              </button>
            </div>
          </div>
        );
      default: return null;
    }
  };

  const Maximize = ({size}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
  );

  return (
    <div className={`lms-layout bg-background ${darkMode ? 'dark-theme' : ''}`}>
      <Sidebar />
      <div className="lms-main-wrapper">
        <Topbar />
        
        <div className="lms-content-grid">
          <div className="lms-main custom-scrollbar">
            
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-main mb-2 flex items-center gap-3">
                My Certificates & Achievements <Award className="text-primary" size={32}/>
              </h1>
              <p className="text-muted text-sm lg:text-base">Celebrate your milestones, verify credentials, and share your success.</p>
            </div>

            {/* Top KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="lms-card flex flex-col justify-center gap-1">
                <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Certificates Earned</div>
                <div className="text-2xl font-bold text-main">2</div>
              </div>
              <div className="lms-card flex flex-col justify-center gap-1">
                <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Badges Earned</div>
                <div className="text-2xl font-bold text-main">4</div>
              </div>
              <div className="lms-card flex flex-col justify-center gap-1">
                <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Learning Hours</div>
                <div className="text-2xl font-bold text-main">145</div>
              </div>
              <div className="lms-card flex flex-col justify-center gap-1">
                <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Global Ranking</div>
                <div className="text-2xl font-bold text-primary flex items-center gap-1"><Trophy size={18}/> Top 3</div>
              </div>
            </div>

            {/* Custom Tabs */}
            <div className="ac-tabs">
              {['Certificates', 'Badges', 'Leaderboard', 'Timeline', 'Verification'].map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`ac-tab-btn ${activeTab === tab ? 'active' : ''}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Render Active View */}
            <div className="min-h-[500px]">
              {renderTabContent()}
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lms-right-panel custom-scrollbar hidden xl:block">
            
            {/* Share Widget */}
            <div className="lms-card bg-gradient-to-br from-primary to-blue-700 text-white mb-8 border-none text-center">
              <Share2 size={32} className="mx-auto mb-4 opacity-80"/>
              <h3 className="font-bold text-lg mb-2">Share Your Success</h3>
              <p className="text-sm text-white/80 mb-6">Add your newest UI/UX certificate directly to your LinkedIn profile.</p>
              <button className="w-full bg-white text-[#0077b5] font-bold py-2.5 rounded-lg text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                <LinkIcon size={16}/> Add to LinkedIn
              </button>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0"><Flame size={16}/></div>
                  <div>
                    <div className="text-sm font-bold text-main">12 Day Streak</div>
                    <div className="text-xs text-muted">2 hours ago</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center flex-shrink-0"><Medal size={16}/></div>
                  <div>
                    <div className="text-sm font-bold text-main">Top 5% Learner</div>
                    <div className="text-xs text-muted">Yesterday</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4">Download Center</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-slate-50 transition-colors group">
                  <span className="text-sm font-bold text-slate-600 group-hover:text-primary">Academic Transcript</span>
                  <Download size={16} className="text-slate-400 group-hover:text-primary"/>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-slate-50 transition-colors group">
                  <span className="text-sm font-bold text-slate-600 group-hover:text-primary">Completion Report</span>
                  <Download size={16} className="text-slate-400 group-hover:text-primary"/>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
