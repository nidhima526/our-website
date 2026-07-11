import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Video, FileEdit, HelpCircle, Book, 
  FileText, Briefcase, Award, Target, MessageSquare, Calendar as CalendarIcon, 
  CreditCard, Download, Settings, LogOut, User, Search, Bell, Moon, ChevronDown, 
  Menu, X, PlayCircle, Clock, Upload, Bookmark, Map, MoreVertical, 
  CheckCircle2, AlertCircle, ArrowUpRight, Trophy, Flame, Play, Pause, RotateCcw,
  Star, ChevronRight, BarChart2
} from 'lucide-react';
import './StudentDashboard.css';
import './MyCourses.css';

const MyCourses = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [darkMode, setDarkMode] = useState(false);

  const menuItems = [
    { id: 'dash', icon: <LayoutDashboard size={18}/>, label: 'Dashboard', link: '/dashboard/student' },
    { id: 'courses', icon: <BookOpen size={18}/>, label: 'My Courses', active: true, link: '/dashboard/courses' },
    { id: 'assignments', icon: <FileEdit size={18}/>, label: 'Assignments & Quizzes', badge: 2, link: '/dashboard/assignments' },
    { id: 'live', icon: <Video size={18}/>, label: 'Live Classes', badge: 1, link: '/dashboard/live' },
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

  const categories = [
    "All", "Programming", "AI", "Design", "Business", "Marketing", "School", "Degree", "B.Tech", "Legal"
  ];

  const myCoursesData = [
    { 
      id: 1, 
      title: "Full-Stack React & Node.js", 
      instructor: "Rahul Sharma", 
      category: "Programming", 
      difficulty: "Intermediate",
      duration: "12 Weeks", 
      progress: 45, 
      completed: 12, 
      total: 24, 
      hasCertificate: true,
      isFavorite: true,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
    },
    { 
      id: 2, 
      title: "UI/UX Masterclass", 
      instructor: "Elena V.", 
      category: "Design", 
      difficulty: "All Levels",
      duration: "8 Weeks", 
      progress: 80, 
      completed: 16, 
      total: 20, 
      hasCertificate: true,
      isFavorite: true,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    { 
      id: 3, 
      title: "Corporate Law Basics", 
      instructor: "Adv. Nidhima", 
      category: "Legal", 
      difficulty: "Beginner",
      duration: "4 Weeks", 
      progress: 15, 
      completed: 3, 
      total: 20, 
      hasCertificate: false,
      isFavorite: false,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80"
    },
    { 
      id: 4, 
      title: "Digital Marketing Complete", 
      instructor: "Ananya P.", 
      category: "Marketing", 
      difficulty: "Beginner",
      duration: "10 Weeks", 
      progress: 0, 
      completed: 0, 
      total: 35, 
      hasCertificate: true,
      isFavorite: false,
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
    },
    { 
      id: 5, 
      title: "B.Tech Data Structures", 
      instructor: "Dr. Rao", 
      category: "B.Tech", 
      difficulty: "Advanced",
      duration: "14 Weeks", 
      progress: 100, 
      completed: 40, 
      total: 40, 
      hasCertificate: true,
      isFavorite: true,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
    }
  ];

  const recommendedCourses = [
    { title: "Advanced React Patterns", category: "Programming", match: "98%" },
    { title: "Figma Prototyping", category: "Design", match: "92%" },
    { title: "Freelancing 101", category: "Career", match: "85%" }
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
          <span className="text-slate-900 hidden lg:block">ASHERVISION</span>
        </Link>
        <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(false)}><X size={24}/></button>
      </div>

      <div className="lms-sidebar-menu custom-scrollbar">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-4 mt-4">Learning Hub</div>
        {menuItems.map(item => (
          <Link key={item.id} to={item.link} className={`lms-menu-item ${item.active ? 'active' : ''}`}>
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
          <input type="text" placeholder="Search across your courses..." className="lms-search-input" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 border-l border-slate-200 pl-4 ml-2">
          <button onClick={toggleDarkMode} className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors">
            <Moon size={18}/>
          </button>
          <button className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors relative">
            <Bell size={18}/>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          
          <div className="flex items-center gap-2 ml-2 cursor-pointer hover:bg-slate-50 p-1 pr-2 rounded-full border border-transparent hover:border-slate-200 transition-all">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=StudentOne" alt="Profile" className="w-full h-full object-cover"/>
            </div>
            <span className="text-sm font-bold hidden xl:block">Alex Doe</span>
            <ChevronDown size={14} className="text-slate-400 hidden xl:block"/>
          </div>
        </div>
      </div>
    </div>
  );

  const filteredCourses = activeFilter === 'All' 
    ? myCoursesData 
    : myCoursesData.filter(c => c.category === activeFilter);

  const activeCourse = myCoursesData.find(c => c.progress > 0 && c.progress < 100); // Find a course to continue

  return (
    <div className={`lms-layout bg-background ${darkMode ? 'dark-theme' : ''}`}>
      <Sidebar />
      
      <div className="lms-main-wrapper">
        <Topbar />
        
        <div className="lms-content-grid">
          {/* CENTER MAIN CONTENT */}
          <div className="lms-main custom-scrollbar">
            
            {/* Top Section */}
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-main mb-2">My Learning Library</h1>
              <p className="text-muted text-sm lg:text-base">Welcome back, Alex. All your learning, organized in one place.</p>
            </div>

            {/* Display Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="lms-card flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center"><BookOpen size={18}/></div>
                <div>
                  <div className="text-xl font-bold text-main">5</div>
                  <div className="text-[10px] text-muted font-bold uppercase tracking-wider">Total Courses</div>
                </div>
              </div>
              <div className="lms-card flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={18}/></div>
                <div>
                  <div className="text-xl font-bold text-main">1</div>
                  <div className="text-[10px] text-muted font-bold uppercase tracking-wider">Completed</div>
                </div>
              </div>
              <div className="lms-card flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center"><RotateCcw size={18}/></div>
                <div>
                  <div className="text-xl font-bold text-main">3</div>
                  <div className="text-[10px] text-muted font-bold uppercase tracking-wider">In Progress</div>
                </div>
              </div>
              <div className="lms-card flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center"><Award size={18}/></div>
                <div>
                  <div className="text-xl font-bold text-main">1</div>
                  <div className="text-[10px] text-muted font-bold uppercase tracking-wider">Certificates</div>
                </div>
              </div>
            </div>

            {/* Continue Learning */}
            {activeCourse && (
              <div className="mb-10">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><PlayCircle size={20} className="text-primary"/> Continue Learning</h2>
                <div className="mc-continue-card group">
                  <div className="mc-continue-thumb">
                    <img src={activeCourse.image} alt={activeCourse.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <Play size={24} className="text-white fill-white ml-1"/>
                      </div>
                    </div>
                  </div>
                  <div className="mc-continue-content">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-[10px] font-bold text-primary uppercase tracking-wider">{activeCourse.category}</div>
                      <div className="text-xs font-bold text-muted bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1"><Clock size={12}/> Est. 45m remaining</div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{activeCourse.title}</h3>
                    <p className="text-sm text-muted mb-6">Current Lesson: <strong>React Hooks Deep Dive - useState vs useReducer</strong></p>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between text-xs font-bold text-main mb-2">
                        <span>{activeCourse.progress}% Completed</span>
                        <span>{activeCourse.completed}/{activeCourse.total} Lessons</span>
                      </div>
                      <div className="mc-progress-bar-container h-2">
                        <div className="mc-progress-bar bg-primary" style={{width: `${activeCourse.progress}%`}}></div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-6">
                      <Link to="/player" className="mc-btn-ripple bg-primary hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors flex-1 text-center flex items-center justify-center gap-2">
                        Resume Lesson <ChevronRight size={16}/>
                      </Link>
                      <button className="bg-white border border-slate-200 hover:border-slate-300 text-main font-bold py-2.5 px-4 rounded-lg text-sm transition-colors">
                        Course Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Filter Bar */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Course Library</h2>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted font-bold">Sort By:</span>
                <select className="text-sm border border-slate-200 rounded-md px-2 py-1 bg-white outline-none focus:border-primary">
                  <option>Recently Viewed</option>
                  <option>Recently Added</option>
                  <option>Most Progress</option>
                  <option>Alphabetical</option>
                </select>
              </div>
            </div>
            
            <div className="mc-filter-bar mb-6">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveFilter(cat)}
                  className={`mc-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Course Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
                {filteredCourses.map(course => (
                  <div key={course.id} className="mc-course-card group">
                    <div className="mc-course-thumb">
                      <img src={course.image} alt={course.title} />
                      <div className="mc-course-badge">{course.category}</div>
                      <button className={`mc-course-fav ${course.isFavorite ? 'active' : ''}`}>
                        <Bookmark size={16} className={course.isFavorite ? "fill-red-500 text-red-500" : ""} />
                      </button>
                      {course.progress > 0 && course.progress < 100 && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <PlayCircle size={40} className="text-white"/>
                        </div>
                      )}
                    </div>
                    
                    <div className="mc-course-body">
                      <h3 className="font-bold text-main mb-1 group-hover:text-primary transition-colors line-clamp-1">{course.title}</h3>
                      <p className="text-xs text-muted mb-3 flex justify-between">
                        <span>By {course.instructor}</span>
                        <span className="flex items-center gap-1"><BarChart2 size={12}/> {course.difficulty}</span>
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-slate-50">
                        {course.progress === 100 ? (
                          <div className="bg-emerald-50 text-emerald-600 text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 mb-3">
                            <Award size={14}/> Course Completed
                          </div>
                        ) : course.progress > 0 ? (
                          <>
                            <div className="flex justify-between text-[10px] font-bold text-muted">
                              <span>{course.progress}%</span>
                              <span>{course.completed}/{course.total} Lessons</span>
                            </div>
                            <div className="mc-progress-bar-container">
                              <div className="mc-progress-bar" style={{width: `${course.progress}%`}}></div>
                            </div>
                          </>
                        ) : (
                          <div className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-1"><Clock size={12}/> Not started yet</div>
                        )}
                        
                        <div className="flex gap-2">
                          {course.progress === 100 ? (
                            <button className="flex-1 bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 text-xs font-bold py-2 rounded-md transition-colors">View Certificate</button>
                          ) : course.progress > 0 ? (
                            <Link to="/player" className="flex-1 flex justify-center items-center bg-primary text-white hover:bg-blue-600 text-xs font-bold py-2 rounded-md transition-colors">Continue</Link>
                          ) : (
                            <Link to="/player" className="flex-1 flex justify-center items-center bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold py-2 rounded-md transition-colors">Start Course</Link>
                          )}
                          <button className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors"><MoreVertical size={14}/></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mc-empty-state mb-10">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
                  <Search size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2">No Courses Found</h3>
                <p className="text-sm text-muted mb-6">You haven't enrolled in any courses in the "{activeFilter}" category yet.</p>
                <button className="btn btn-primary">Browse New Courses</button>
              </div>
            )}

            {/* Recently Watched Carousel */}
            <div className="mb-10">
              <h2 className="text-lg font-bold mb-4">Recently Watched</h2>
              <div className="mc-carousel">
                {myCoursesData.filter(c => c.progress > 0).map(course => (
                  <div key={`recent-${course.id}`} className="mc-carousel-item lms-card p-3 flex items-center gap-4 hover:border-primary cursor-pointer transition-colors group">
                    <div className="w-20 h-14 rounded-lg overflow-hidden relative flex-shrink-0">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover"/>
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <Play size={16} className="text-white"/>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold truncate group-hover:text-primary transition-colors">{course.title}</h4>
                      <p className="text-[10px] text-muted truncate">Lesson {course.completed + 1}: Introduction</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT ACTIVITY PANEL */}
          <div className="lms-right-panel custom-scrollbar hidden lg:block">
            
            {/* Study Goals */}
            <div className="mc-goal-module shadow-lg">
              <h3 className="font-bold text-sm text-white/70 uppercase tracking-wider mb-4 flex justify-between items-center">
                <span>Weekly Goal</span>
                <Target size={16}/>
              </h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold">12</span>
                <span className="text-white/70 font-medium mb-1">/ 15 Hours</span>
              </div>
              <div className="w-full h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden">
                <div className="h-full bg-green-400 rounded-full w-[80%]"></div>
              </div>
              <p className="text-xs text-white/80">You're doing great! Just 3 more hours to hit your goal this week.</p>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4">Achievements</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl flex flex-col items-center text-center">
                  <Flame size={24} className="text-amber-500 mb-2"/>
                  <span className="text-xl font-bold text-amber-700">12</span>
                  <span className="text-[10px] font-bold text-amber-600/70 uppercase">Day Streak</span>
                </div>
                <div className="bg-purple-50 border border-purple-100 p-3 rounded-xl flex flex-col items-center text-center">
                  <Award size={24} className="text-purple-500 mb-2"/>
                  <span className="text-xl font-bold text-purple-700">1</span>
                  <span className="text-[10px] font-bold text-purple-600/70 uppercase">Certificates</span>
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="mb-8">
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                <Star size={14} className="text-primary"/> AI Recommendations
              </h3>
              <div className="space-y-3">
                {recommendedCourses.map((rec, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-xl border border-slate-100 hover:border-primary hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
                      <BookOpen size={16}/>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="text-xs font-bold text-primary mb-0.5">{rec.category}</div>
                      <h4 className="text-sm font-bold text-main truncate group-hover:text-primary transition-colors">{rec.title}</h4>
                      <div className="text-[10px] font-bold text-emerald-500 mt-1 bg-emerald-50 inline-block px-1.5 py-0.5 rounded">{rec.match} Match</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloads / Resources */}
            <div>
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4">Recent Downloads</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-red-400"/>
                    <span className="text-sm font-medium text-main group-hover:text-primary">React_CheatSheet.pdf</span>
                  </div>
                  <Download size={14} className="text-slate-400"/>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-blue-400"/>
                    <span className="text-sm font-medium text-main group-hover:text-primary">Corporate_Law_Notes.pdf</span>
                  </div>
                  <Download size={14} className="text-slate-400"/>
                </div>
              </div>
              <button className="text-xs font-bold text-primary mt-3 w-full text-center hover:underline">View All Resources</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
