import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Video, FileEdit, HelpCircle, Book, 
  FileText, Briefcase, Award, Target, MessageSquare, Calendar as CalendarIcon, 
  User, Search, Bell, Moon, ChevronDown, Menu, X, Clock, PlayCircle, 
  Users, Video as VideoIcon, Mic, Monitor, Link as LinkIcon
} from 'lucide-react';
import './StudentDashboard.css';
import './LiveClasses.css';

const LiveClasses = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeDate, setActiveDate] = useState(4); // default selected date

  const menuItems = [
    { id: 'dash', icon: <LayoutDashboard size={18}/>, label: 'Dashboard', link: '/dashboard/student' },
    { id: 'courses', icon: <BookOpen size={18}/>, label: 'My Courses', link: '/dashboard/courses' },
    { id: 'assignments', icon: <FileEdit size={18}/>, label: 'Assignments & Quizzes', badge: 2, link: '/dashboard/assignments' },
    { id: 'study', icon: <Book size={18}/>, label: 'Study Materials', link: '/dashboard/materials' },
    { id: 'certificates', icon: <Award size={18}/>, label: 'Certificates & Achievements', link: '/dashboard/certificates' },
    { id: 'live', icon: <Video size={18}/>, label: 'Live Classes', badge: 1, active: true, link: '/dashboard/live' },
    { id: 'internships', icon: <Briefcase size={18}/>, label: 'Internships', link: '/dashboard/internships' },
    { id: 'messages', icon: <MessageSquare size={18}/>, label: 'Messages', badge: 5, link: '/dashboard/messages' },
    { id: 'profile', icon: <User size={18}/>, label: 'Profile', link: '/dashboard/profile' }
  ];

  const dates = [
    { day: "Mon", date: 1 },
    { day: "Tue", date: 2 },
    { day: "Wed", date: 3 },
    { day: "Thu", date: 4 },
    { day: "Fri", date: 5 },
    { day: "Sat", date: 6 },
    { day: "Sun", date: 7 },
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: "Advanced State Management in React",
      instructor: "Rahul Sharma",
      time: "10:00 AM - 11:30 AM",
      duration: "90 min",
      attendees: 145,
      type: "Webinar",
      course: "React Masterclass"
    },
    {
      id: 2,
      title: "UI Design Systems & Tokens",
      instructor: "Elena V.",
      time: "02:00 PM - 03:00 PM",
      duration: "60 min",
      attendees: 89,
      type: "Interactive Workshop",
      course: "UI/UX Pro"
    },
    {
      id: 3,
      title: "Dynamic Programming Q&A",
      instructor: "Dr. Rao",
      time: "04:30 PM - 05:30 PM",
      duration: "60 min",
      attendees: 210,
      type: "Doubt Clearing",
      course: "Data Structures"
    }
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
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-4 mt-4">Hub</div>
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
          <input type="text" placeholder="Search upcoming webinars..." className="lms-search-input" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 border-l border-slate-200 dark:border-slate-700 pl-4 ml-2">
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

  return (
    <div className={`lms-layout bg-background ${darkMode ? 'dark-theme' : ''}`}>
      <Sidebar />
      <div className="lms-main-wrapper">
        <Topbar />
        
        <div className="lms-main custom-scrollbar pt-8 px-6 lg:px-10 pb-20">
          
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-main mb-2">Live Classes</h1>
            <p className="text-muted text-sm lg:text-base">Join interactive webinars, doubt-clearing sessions, and masterclasses in real-time.</p>
          </div>

          {/* Active Live Class Hero */}
          <div className="live-hero">
            <div className="live-hero-image">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" alt="Webinar" />
            </div>
            <div className="live-hero-content">
              <div className="live-indicator">
                <div className="live-dot"></div>
                Live Now
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">System Design Interview Prep</h2>
              <p className="text-white/80 mb-6 max-w-lg">Join Dr. Rao in this interactive masterclass breaking down the architecture of Netflix. Microservices, CDNs, and Load Balancers.</p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=DrRao" alt="Instructor" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Dr. Rao</div>
                    <div className="text-xs text-white/60">Instructor</div>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/20 hidden sm:block"></div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users size={18}/> <span>1,240 watching</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock size={18}/> <span>Started 15 mins ago</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                  <VideoIcon size={20}/> Join Session
                </button>
                <button className="bg-white/10 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center gap-2">
                  <LinkIcon size={18}/> Copy Link
                </button>
              </div>
            </div>
          </div>

          {/* Date Selector */}
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-lg font-bold">Schedule</h3>
            <div className="text-sm font-bold text-primary cursor-pointer hover:underline">July 2026 <ChevronDown size={14} className="inline"/></div>
          </div>
          
          <div className="date-scroller mb-8">
            {dates.map((d) => (
              <div 
                key={d.date} 
                className={`date-card ${activeDate === d.date ? 'active' : ''}`}
                onClick={() => setActiveDate(d.date)}
              >
                <div className="date-day">{d.day}</div>
                <div className="date-num">{d.date}</div>
              </div>
            ))}
          </div>

          {/* Schedule Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {upcomingClasses.map((cls) => (
              <div key={cls.id} className="class-card">
                <div className="flex justify-between items-start mb-4">
                  <div className="class-time">
                    <Clock size={14} className="text-primary"/> {cls.time}
                  </div>
                  <span className="text-xs font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 uppercase tracking-wider">{cls.type}</span>
                </div>
                
                <h3 className="font-bold text-lg mb-1">{cls.title}</h3>
                <div className="text-sm text-muted mb-4">{cls.course}</div>
                
                <div className="flex items-center gap-3 mb-6 mt-auto">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${cls.instructor.replace(" ", "")}`} alt={cls.instructor} />
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider">Instructor</div>
                    <div className="text-sm font-bold">{cls.instructor}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <Users size={14}/> {cls.attendees} Registered
                  </div>
                  <button className="text-primary font-bold text-sm hover:underline">Register</button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default LiveClasses;
