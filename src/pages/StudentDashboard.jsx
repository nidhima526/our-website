import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Video, FileEdit, HelpCircle, Book, 
  FileText, Briefcase, Award, Target, MessageSquare, Calendar as CalendarIcon, 
  CreditCard, Download, Settings, LogOut, User, Search, Bell, Moon, ChevronDown, 
  Menu, X, PlayCircle, Clock, Upload, Bookmark, Map, MoreVertical, 
  CheckCircle2, AlertCircle, ArrowUpRight, Trophy, Flame, Play, Pause, RotateCcw
} from 'lucide-react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [greeting, setGreeting] = useState('Good morning');
  
  // Study Timer State
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 mins

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const toggleTimer = () => setTimerActive(!timerActive);
  const resetTimer = () => { setTimerActive(false); setTimeLeft(25 * 60); };
  
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const menuItems = [
    { id: 'dash', icon: <LayoutDashboard size={18}/>, label: 'Dashboard', active: true, link: '/dashboard/student' },
    { id: 'courses', icon: <BookOpen size={18}/>, label: 'My Courses', link: '/dashboard/courses' },
    { id: 'assignments', icon: <FileEdit size={18}/>, label: 'Assignments & Quizzes', badge: 2, link: '/dashboard/assignments' },
    { id: 'live', icon: <video webkit-playsinline='true' preload='auto' size={18}/>, label: 'Live Classes', badge: 1, link: '/dashboard/live' },
    { id: 'quizzes', icon: <HelpCircle size={18}/>, label: 'Quizzes & Tests', link: '#' },
    { id: 'study', icon: <Book size={18}/>, label: 'Study Materials', link: '/dashboard/materials' },
    { id: 'internships', icon: <Briefcase size={18}/>, label: 'Internships', link: '/dashboard/internships' },
    { id: 'certificates', icon: <Award size={18}/>, label: 'Certificates & Achievements', link: '/dashboard/certificates' },
    { id: 'career', icon: <Target size={18}/>, label: 'Career Guidance', link: '#' },
    { id: 'messages', icon: <MessageSquare size={18}/>, label: 'Messages', badge: 5, link: '/dashboard/messages' },
    { id: 'calendar', icon: <CalendarIcon size={18}/>, label: 'Calendar', link: '#' },
    { id: 'payments', icon: <CreditCard size={18}/>, label: 'Payments', link: '#' },
    { id: 'support', icon: <FileText size={18}/>, label: 'Support', link: '#' },
    { id: 'profile', icon: <User size={18}/>, label: 'Profile', link: '/dashboard/profile' },
    { id: 'settings', icon: <Settings size={18}/>, label: 'Settings', link: '#' }
  ];

  const Sidebar = () => (
    <div className={`lms-sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="lms-sidebar-header">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-serif font-bold">M</div>
          <span className="text-slate-900 hidden lg:block">ASHERVISION</span>
        </Link>
        <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(false)}><X size={24}/></button>
      </div>

      <div className="lms-sidebar-menu custom-scrollbar">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-4 mt-4">Learning Hub</div>
        {menuItems.map(item => (
          <Link key={item.id} to={item.link || '#'} className={`lms-menu-item ${item.active ? 'active' : ''}`}>
            {item.icon}
            <span className="flex-1">{item.label}</span>
            {item.badge && <span className={`lms-badge ${item.active ? 'bg-primary text-white' : 'bg-red-500 text-white'}`}>{item.badge}</span>}
          </Link>
        ))}
      </div>

      <div className="lms-sidebar-footer">
        <a href="#" className="lms-menu-item text-slate-500 hover:bg-slate-50 hover:text-red-600 transition-colors">
          <LogOut size={18}/>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );

  const Topbar = () => (
    <div className="lms-topbar">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(true)}><Menu size={24}/></button>
        <div className="relative hidden md:block w-64 lg:w-96">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
          <input type="text" placeholder="Search courses, assignments, materials..." className="lms-search-input" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-xs font-bold border border-red-100 animate-pulse">
          <video webkit-playsinline='true' preload='auto' size={14}/> React Live Class in 15m
        </div>
        
        <div className="flex items-center gap-1 border-l border-slate-200 pl-4 ml-2">
          <button className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"><Moon size={18}/></button>
          <button className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors relative">
            <Bell size={18}/>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          
          <div className="flex items-center gap-2 ml-2 cursor-pointer hover:bg-slate-50 p-1 pr-2 rounded-full border border-transparent hover:border-slate-200 transition-all">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img loading="lazy" src="https://api.dicebear.com/7.x/notionists/svg?seed=StudentOne" alt="Profile" className="w-full h-full object-cover"/>
            </div>
            <span className="text-sm font-bold hidden xl:block">Student</span>
            <ChevronDown size={14} className="text-slate-400 hidden xl:block"/>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="lms-layout bg-background">
      <Sidebar />
      
      <div className="lms-main-wrapper">
        <Topbar />
        
        <div className="lms-content-grid">
          {/* CENTER MAIN CONTENT */}
          <div className="lms-main custom-scrollbar">
            
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-main mb-1">{greeting}, Student ðŸ‘‹</h1>
              <p className="text-muted text-sm lg:text-base">Continue your learning journey and achieve your academic goals.</p>
            </div>

            {/* Learning Overview KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="lms-card flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-primary flex items-center justify-center"><BookOpen size={20}/></div>
                <div>
                  <div className="text-2xl font-bold text-main leading-tight">4</div>
                  <div className="text-xs text-muted font-medium">Courses Enrolled</div>
                </div>
              </div>
              <div className="lms-card flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center"><FileEdit size={20}/></div>
                <div>
                  <div className="text-2xl font-bold text-main leading-tight">2</div>
                  <div className="text-xs text-muted font-medium">Pending Tasks</div>
                </div>
              </div>
              <div className="lms-card flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center"><Trophy size={20}/></div>
                <div>
                  <div className="text-2xl font-bold text-main leading-tight">1</div>
                  <div className="text-xs text-muted font-medium">Certificates</div>
                </div>
              </div>
              <div className="lms-card flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><Clock size={20}/></div>
                <div>
                  <div className="text-2xl font-bold text-main leading-tight">42h</div>
                  <div className="text-xs text-muted font-medium">Learning Hours</div>
                </div>
              </div>
            </div>

            {/* Continue Learning (Coursera Style) */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <h3 className="font-bold text-lg">Continue Learning</h3>
                <button className="text-primary text-sm font-bold hover:underline">View All Courses</button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                <div className="lms-card p-0 overflow-hidden flex flex-col sm:flex-row group cursor-pointer hover:shadow-md transition-all">
                  <div className="sm:w-1/3 h-32 sm:h-auto bg-slate-900 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <PlayCircle size={20}/>
                    </div>
                  </div>
                  <div className="p-4 sm:w-2/3 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Web Development</div>
                    <h4 className="font-bold text-main mb-1 group-hover:text-primary transition-colors">Full-Stack React & Node.js</h4>
                    <p className="text-xs text-muted mb-4">Module 5: React Hooks Deep Dive</p>
                    <div className="mt-auto">
                      <div className="flex justify-between text-[10px] font-bold text-muted mb-1"><span>45% Completed</span><span>12/24 Lessons</span></div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-primary rounded-full w-[45%]"></div></div>
                    </div>
                  </div>
                </div>

                <div className="lms-card p-0 overflow-hidden flex flex-col sm:flex-row group cursor-pointer hover:shadow-md transition-all">
                  <div className="sm:w-1/3 h-32 sm:h-auto bg-slate-900 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <PlayCircle size={20}/>
                    </div>
                  </div>
                  <div className="p-4 sm:w-2/3 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-purple-600 uppercase tracking-wider mb-1">Design</div>
                    <h4 className="font-bold text-main mb-1 group-hover:text-purple-600 transition-colors">UI/UX Masterclass</h4>
                    <p className="text-xs text-muted mb-4">Module 8: Prototyping in Figma</p>
                    <div className="mt-auto">
                      <div className="flex justify-between text-[10px] font-bold text-muted mb-1"><span>80% Completed</span><span>16/20 Lessons</span></div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-purple-600 rounded-full w-[80%]"></div></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Grid for Live Classes & Assignments */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              
              {/* Today's Live Classes */}
              <div className="lms-card flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg flex items-center gap-2">Live Classes <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full animate-pulse">Live</span></h3>
                </div>
                <div className="space-y-4">
                  <div className="border border-red-100 bg-red-50/30 rounded-xl p-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-xs font-bold text-red-600 mb-1">10:00 AM - 11:30 AM</div>
                        <div className="font-bold text-main">Advanced React Patterns</div>
                        <div className="text-xs text-muted">Tutor: Rahul Sharma</div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm"><video webkit-playsinline='true' preload='auto' size={16} className="text-red-500"/></div>
                    </div>
                    <button className="w-full py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors">Join Class Now</button>
                  </div>
                  
                  <div className="border border-slate-100 rounded-xl p-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-xs font-bold text-primary mb-1">02:00 PM - 03:00 PM</div>
                        <div className="font-bold text-main">Doubt Clearing Session</div>
                        <div className="text-xs text-muted">Tutor: Nidhima V.</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded"><video webkit-playsinline='true' preload='auto' size={16} className="text-slate-400"/></div>
                    </div>
                    <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-primary text-xs font-bold rounded-lg transition-colors border border-slate-200">Scheduled</button>
                  </div>
                </div>
              </div>

              {/* Pending Assignments */}
              <div className="lms-card flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Assignments</h3>
                  <button className="text-slate-400 hover:text-primary"><MoreVertical size={16}/></button>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0"><FileEdit size={18}/></div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-main mb-1">Build a Weather App</div>
                      <div className="text-xs text-muted mb-2">React Course â€¢ Due Tomorrow</div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Pending</span>
                        <button className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1"><Upload size={10}/> Upload Work</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0"><CheckCircle2 size={18}/></div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-main mb-1">Figma Prototype</div>
                      <div className="text-xs text-muted mb-2">UI/UX Course â€¢ Graded</div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">Score: 95/100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quizzes & Study Materials */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              
              <div className="lms-card">
                <h3 className="font-bold text-lg mb-4">Upcoming Quizzes</h3>
                <div className="bg-slate-900 rounded-xl p-5 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
                  <div className="relative z-10">
                    <div className="text-xs font-bold text-blue-300 mb-1">React Fundamentals</div>
                    <h4 className="text-xl font-bold mb-2">Module 5 Assessment</h4>
                    <div className="flex items-center gap-4 text-xs text-slate-300 mb-6">
                      <span className="flex items-center gap-1"><HelpCircle size={12}/> 20 Questions</span>
                      <span className="flex items-center gap-1"><Clock size={12}/> 30 Mins</span>
                    </div>
                    <button className="bg-primary hover:bg-blue-600 text-white text-sm font-bold py-2 px-6 rounded-lg transition-colors shadow-lg">Start Quiz</button>
                  </div>
                </div>
              </div>

              <div className="lms-card">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Study Materials</h3>
                  <button className="text-primary text-sm font-bold hover:underline">Browse Library</button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-red-50 text-red-500 flex items-center justify-center"><FileText size={14}/></div>
                      <div>
                        <div className="text-sm font-bold text-main group-hover:text-primary transition-colors">React_Hooks_Cheatsheet.pdf</div>
                        <div className="text-[10px] text-muted">Added today â€¢ 2.4 MB</div>
                      </div>
                    </div>
                    <Download size={16} className="text-slate-400 group-hover:text-primary"/>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-blue-50 text-blue-500 flex items-center justify-center"><video webkit-playsinline='true' preload='auto' size={14}/></div>
                      <div>
                        <div className="text-sm font-bold text-main group-hover:text-primary transition-colors">Lec 12: Context API Recording</div>
                        <div className="text-[10px] text-muted">Added yesterday â€¢ 45 Mins</div>
                      </div>
                    </div>
                    <PlayCircle size={16} className="text-slate-400 group-hover:text-primary"/>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT ACTIVITY PANEL */}
          <div className="lms-right-panel custom-scrollbar hidden xl:block">
            
            {/* User Profile Summary */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shadow-sm">
                <img loading="lazy" src="https://api.dicebear.com/7.x/notionists/svg?seed=StudentOne" alt="Profile" className="w-full h-full object-cover"/>
              </div>
              <div>
                <div className="font-bold text-main leading-tight">Student Name</div>
                <div className="text-xs text-muted flex items-center gap-1"><Flame size={12} className="text-orange-500"/> 12 Day Streak</div>
              </div>
            </div>

            {/* Study Timer Widget */}
            <div className="bg-slate-900 rounded-xl p-6 text-white mb-8 shadow-lg text-center relative overflow-hidden">
              <h3 className="font-bold text-sm text-slate-400 uppercase tracking-wider mb-2">Focus Timer</h3>
              <div className="text-5xl font-bold font-mono mb-6 text-white tracking-widest">{formatTime(timeLeft)}</div>
              <div className="flex items-center justify-center gap-4 relative z-10">
                <button onClick={toggleTimer} className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${timerActive ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-primary hover:bg-blue-600 text-white'}`}>
                  {timerActive ? <Pause size={20}/> : <Play size={20} className="ml-1"/>}
                </button>
                <button onClick={resetTimer} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors">
                  <RotateCcw size={16}/>
                </button>
              </div>
            </div>

            {/* Academic Calendar Mockup */}
            <div className="mb-8">
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4">Upcoming Schedule</h3>
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-sm">October 2026</span>
                  <div className="flex gap-1 text-slate-400"><ChevronLeft size={16}/><ChevronRight size={16}/></div>
                </div>
                {/* Mock Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-4 text-muted font-bold">
                  <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium">
                  <div className="text-slate-300">27</div><div className="text-slate-300">28</div><div className="text-slate-300">29</div><div className="text-slate-300">30</div><div className="py-1">1</div><div className="py-1">2</div><div className="py-1">3</div>
                  <div className="py-1">4</div><div className="py-1">5</div><div className="py-1">6</div><div className="py-1">7</div><div className="py-1">8</div><div className="py-1">9</div><div className="py-1">10</div>
                  <div className="py-1">11</div><div className="py-1 bg-primary text-white rounded-full font-bold shadow-md shadow-primary/30">12</div><div className="py-1 relative">13<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></span></div><div className="py-1">14</div><div className="py-1">15</div><div className="py-1 relative">16<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full"></span></div><div className="py-1">17</div>
                </div>
              </div>
            </div>

            {/* Leaderboard Snippet */}
            <div>
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4 flex items-center justify-between">
                <span>Top Learners</span>
                <Trophy size={14} className="text-amber-500"/>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="font-bold text-slate-400 text-xs w-3">1</div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden"><img loading="lazy" src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex" alt="User" className="w-full h-full object-cover"/></div>
                  <div className="flex-1 overflow-hidden">
                    <div className="text-sm font-bold truncate">Alex M.</div>
                  </div>
                  <div className="text-xs font-bold text-primary">2,450 pt</div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors bg-blue-50 border border-blue-100">
                  <div className="font-bold text-primary text-xs w-3">2</div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden"><img loading="lazy" src="https://api.dicebear.com/7.x/notionists/svg?seed=StudentOne" alt="User" className="w-full h-full object-cover"/></div>
                  <div className="flex-1 overflow-hidden">
                    <div className="text-sm font-bold truncate">You</div>
                  </div>
                  <div className="text-xs font-bold text-primary">2,120 pt</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

// Dummy icons
function ChevronLeft({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>; }
function ChevronRight({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>; }

export default StudentDashboard;


