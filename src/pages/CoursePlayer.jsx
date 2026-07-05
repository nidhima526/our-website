import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, Search, Bell, User, X, Play, Pause, Maximize, Settings, 
  Volume2, SkipForward, ChevronLeft, ChevronRight, CheckCircle2, 
  Lock, FileText, Download, PlayCircle, MessageSquare, HelpCircle, 
  Clock, Award, ThumbsUp, Share2, MoreVertical, Star, ChevronDown, Check
} from 'lucide-react';
import './CoursePlayer.css';

const CoursePlayer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isPlaying, setIsPlaying] = useState(false);
  
  const courseData = {
    title: "Full-Stack React & Node.js Masterclass",
    instructor: {
      name: "Rahul Sharma",
      role: "Senior Software Engineer",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=RahulS",
      rating: "4.9",
      students: "12,450"
    },
    progress: 45,
    completedLessons: 12,
    totalLessons: 24,
    lastUpdated: "October 2026",
    difficulty: "Intermediate",
    category: "Web Development"
  };

  const curriculum = [
    {
      module: "Module 1: Introduction",
      lessons: [
        { title: "Welcome to the Course", duration: "5:30", type: "video", status: "completed" },
        { title: "Setting up the Environment", duration: "12:45", type: "video", status: "completed" },
        { title: "Course Resources", duration: "2:00", type: "document", status: "completed" }
      ]
    },
    {
      module: "Module 2: React Fundamentals",
      lessons: [
        { title: "Components and Props", duration: "18:20", type: "video", status: "completed" },
        { title: "State Management with useState", duration: "24:15", type: "video", status: "completed" },
        { title: "Component Lifecycle", duration: "15:40", type: "video", status: "completed" },
        { title: "Quiz: React Basics", duration: "10:00", type: "quiz", status: "completed" }
      ]
    },
    {
      module: "Module 3: React Hooks Deep Dive",
      lessons: [
        { title: "useEffect Dependencies", duration: "22:10", type: "video", status: "completed" },
        { title: "Custom Hooks", duration: "16:30", type: "video", status: "current" },
        { title: "useContext and useReducer", duration: "28:45", type: "video", status: "locked" },
        { title: "Assignment: Build a Cart", duration: "45:00", type: "assignment", status: "locked" }
      ]
    },
    {
      module: "Module 4: Node.js Backend",
      lessons: [
        { title: "Express Server Setup", duration: "20:00", type: "video", status: "locked" },
        { title: "REST API Design", duration: "35:20", type: "video", status: "locked" },
        { title: "Database Integration", duration: "42:15", type: "video", status: "locked" }
      ]
    }
  ];

  const Topbar = () => (
    <div className="player-topbar">
      <div className="flex items-center gap-4">
        <button className="text-slate-400 hover:text-white" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu size={24}/>
        </button>
        <Link to="/dashboard/courses" className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white border-r border-slate-700 pr-4 mr-2">
          <ChevronLeft size={16}/> Back to Courses
        </Link>
        <div className="font-bold text-white hidden lg:block">{courseData.title}</div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs font-bold text-white">{courseData.progress}% Completed</div>
            <div className="text-[10px] text-slate-400">{courseData.completedLessons}/{courseData.totalLessons} Lessons</div>
          </div>
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{width: `${courseData.progress}%`}}></div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-l border-slate-700 pl-6">
          <button className="text-slate-400 hover:text-white transition-colors"><Search size={20}/></button>
          <button className="text-slate-400 hover:text-white transition-colors relative">
            <Bell size={20}/>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden cursor-pointer border border-slate-600 hover:border-slate-400 transition-colors">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=StudentOne" alt="Profile" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className={`player-sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
      <div className="p-4 border-b border-slate-700/50 flex justify-between items-center bg-slate-800/50">
        <h3 className="font-bold text-sm text-slate-200">Course Content</h3>
        <button className="lg:hidden text-slate-400" onClick={() => setSidebarOpen(false)}><X size={20}/></button>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {curriculum.map((mod, i) => (
          <div key={i} className="curriculum-module">
            <div className="curriculum-module-header">
              <div className="font-bold text-sm text-slate-200">{mod.module}</div>
              <ChevronDown size={16} className="text-slate-500"/>
            </div>
            <div>
              {mod.lessons.map((lesson, j) => (
                <div key={j} className={`curriculum-lesson ${lesson.status === 'current' ? 'active' : ''}`}>
                  <div className="mt-0.5 flex-shrink-0">
                    {lesson.status === 'completed' && <CheckCircle2 size={16} className="text-emerald-500"/>}
                    {lesson.status === 'current' && <PlayCircle size={16} className="text-primary"/>}
                    {lesson.status === 'locked' && <Lock size={16} className="text-slate-600"/>}
                  </div>
                  <div>
                    <div className={`text-sm ${lesson.status === 'current' ? 'font-bold text-white' : lesson.status === 'locked' ? 'text-slate-500' : 'text-slate-300'}`}>
                      {lesson.title}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-1">
                      {lesson.type === 'video' && <Play size={10}/>}
                      {lesson.type === 'document' && <FileText size={10}/>}
                      {lesson.type === 'quiz' && <HelpCircle size={10}/>}
                      {lesson.type === 'assignment' && <FileText size={10}/>}
                      {lesson.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const VideoPlayer = () => (
    <div className="video-container group">
      {/* Mock Video Placeholder */}
      <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80" alt="Video frame" className="video-placeholder" />
      
      {/* Large Center Play Button */}
      <div className="video-overlay-play" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <Pause size={32} className="fill-white"/> : <Play size={32} className="ml-1 fill-white"/>}
      </div>

      {/* Top Gradient for Title (YouTube style) */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-between items-start">
        <div className="text-white font-bold text-lg drop-shadow-md">Custom Hooks</div>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-black/60 transition-colors"><Share2 size={16}/></button>
          <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-black/60 transition-colors"><Bookmark size={16}/></button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="video-controls">
        <div className="video-timeline">
          <div className="video-progress"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white">
            <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-primary transition-colors">
              {isPlaying ? <Pause size={20} className="fill-white"/> : <Play size={20} className="fill-white"/>}
            </button>
            <button className="hover:text-primary transition-colors"><SkipForward size={20}/></button>
            <div className="flex items-center gap-2 group/vol cursor-pointer">
              <Volume2 size={20} className="hover:text-primary transition-colors"/>
              <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-300 h-1 bg-white/30 rounded-full flex items-center">
                <div className="w-2/3 h-full bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-xs font-medium ml-2 font-mono">05:20 / 16:30</div>
          </div>
          
          <div className="flex items-center gap-4 text-white">
            <button className="text-xs font-bold border border-white/30 px-2 py-0.5 rounded hover:bg-white/10 transition-colors">CC</button>
            <button className="text-xs font-bold hover:text-primary transition-colors">1x</button>
            <button className="hover:text-primary transition-colors"><Settings size={20}/></button>
            <button className="hover:text-primary transition-colors"><Maximize size={20}/></button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch(activeTab) {
      case 'Overview':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-2xl font-bold mb-4">About this lesson</h2>
              <p className="text-slate-300 leading-relaxed text-sm">
                In this lesson, we dive deep into Custom Hooks in React. Custom Hooks let you extract component logic into reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
              </p>
            </div>
            
            <div className="flex items-center gap-6 p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-700">
                <img src={courseData.instructor.avatar} alt="Instructor" className="w-full h-full object-cover"/>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Instructor</div>
                <h3 className="text-lg font-bold text-white mb-1">{courseData.instructor.name}</h3>
                <div className="text-sm text-slate-400">{courseData.instructor.role}</div>
              </div>
              <div className="text-right hidden sm:block">
                <div className="flex items-center gap-1 justify-end text-amber-400 font-bold mb-1"><Star size={16} className="fill-amber-400"/> {courseData.instructor.rating}</div>
                <div className="text-xs text-slate-400">{courseData.instructor.students} Students</div>
                <button className="mt-2 text-xs font-bold text-primary hover:underline">View Profile</button>
              </div>
            </div>
          </div>
        );
      case 'Notes':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Notes</h2>
              <button className="player-btn-primary"><FileText size={16}/> Create Note</button>
            </div>
            <div className="player-card mb-4 relative group">
              <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                <button className="w-8 h-8 rounded bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"><FileEdit size={14}/></button>
              </div>
              <div className="text-xs font-bold text-primary mb-2 flex items-center gap-2"><Clock size={12}/> 05:20</div>
              <p className="text-slate-300 text-sm">Remember to always start custom hooks with "use" so that React can automatically check for rules of hooks violations.</p>
            </div>
            <div className="player-card relative group">
              <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                <button className="w-8 h-8 rounded bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"><FileEdit size={14}/></button>
              </div>
              <div className="text-xs font-bold text-primary mb-2 flex items-center gap-2"><Clock size={12}/> 12:45</div>
              <p className="text-slate-300 text-sm">Custom hooks can call other hooks inside them (like useState or useEffect).</p>
            </div>
          </div>
        );
      case 'Resources':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
            <h2 className="text-xl font-bold mb-6">Downloadable Resources</h2>
            {[
              { name: "custom-hooks-cheatsheet.pdf", type: "PDF", size: "1.2 MB", icon: <FileText size={20} className="text-red-400"/> },
              { name: "lesson-source-code.zip", type: "ZIP", size: "4.5 MB", icon: <Download size={20} className="text-blue-400"/> },
              { name: "presentation-slides.pdf", type: "PDF", size: "2.8 MB", icon: <FileText size={20} className="text-amber-400"/> }
            ].map((res, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center">
                    {res.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white group-hover:text-primary transition-colors">{res.name}</div>
                    <div className="text-xs text-slate-400">{res.type} • {res.size}</div>
                  </div>
                </div>
                <button className="text-slate-400 group-hover:text-white transition-colors"><Download size={20}/></button>
              </div>
            ))}
          </div>
        );
      case 'Discussion':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Q&A Discussion</h2>
              <button className="player-btn-outline"><MessageSquare size={16}/> Ask Question</button>
            </div>
            
            {/* Search Discussion */}
            <div className="relative mb-8">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
              <input type="text" placeholder="Search questions..." className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg py-3 pl-12 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary" />
            </div>

            <div className="space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="player-card">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex-shrink-0 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=User${i}`} alt="User"/>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm">Alex Developer</span>
                        <span className="text-[10px] text-slate-500">2 days ago</span>
                      </div>
                      <h4 className="font-bold text-white mb-2">Issue with dependency array in custom hook</h4>
                      <p className="text-sm text-slate-300 mb-4">When I pass an object to my custom hook, the useEffect inside triggers infinitely. How do I fix this?</p>
                      <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                        <button className="flex items-center gap-1 hover:text-white"><ThumbsUp size={14}/> 12</button>
                        <button className="flex items-center gap-1 hover:text-white"><MessageSquare size={14}/> 3 Replies</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <div className="text-slate-400 text-center py-12">Content for {activeTab} coming soon.</div>;
    }
  };

  return (
    <div className="player-layout">
      <Topbar />
      <Sidebar />
      
      <div className="player-main-wrapper custom-scrollbar">
        <VideoPlayer />
        
        <div className="player-content">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
                <span>{courseData.category}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                <span>Module 3, Lesson 2</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Custom Hooks</h1>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="player-btn-outline flex-1 sm:flex-none"><ChevronLeft size={16}/> Prev</button>
              <button className="player-btn-primary flex-1 sm:flex-none">Next <ChevronRight size={16}/></button>
            </div>
          </div>

          <div className="player-tabs">
            {['Overview', 'Notes', 'Resources', 'Assignment', 'Quiz', 'Discussion'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`player-tab ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            {renderTabContent()}
          </div>
        </div>
      </div>

      <div className="player-right-panel custom-scrollbar">
        {/* Certificate Progress */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-5 mb-6 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 text-slate-700/30">
            <Award size={100}/>
          </div>
          <h3 className="font-bold text-sm text-slate-300 uppercase tracking-wider mb-4 relative z-10">Certificate Status</h3>
          <div className="flex items-end gap-2 mb-2 relative z-10">
            <span className="text-3xl font-bold text-white">{courseData.progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700 rounded-full mb-3 overflow-hidden relative z-10">
            <div className="h-full bg-emerald-500 rounded-full" style={{width: `${courseData.progress}%`}}></div>
          </div>
          <p className="text-xs text-slate-400 relative z-10">Complete 100% of the lessons and all assignments to unlock your certificate.</p>
        </div>

        {/* Study Timer Widget */}
        <div className="player-card mb-6 text-center">
          <h3 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Focus Session</h3>
          <div className="text-3xl font-bold font-mono text-white tracking-widest mb-4">25:00</div>
          <button className="w-full py-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2">
            <Play size={14} className="fill-primary"/> Start Timer
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-left text-sm font-medium text-slate-300 hover:text-white">
              <Bookmark size={16} className="text-amber-400"/> View Bookmarks
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-left text-sm font-medium text-slate-300 hover:text-white">
              <MessageSquare size={16} className="text-blue-400"/> Message Instructor
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-left text-sm font-medium text-slate-300 hover:text-white">
              <HelpCircle size={16} className="text-emerald-400"/> Report an Issue
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoursePlayer;
