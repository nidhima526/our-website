import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Video, FileEdit, HelpCircle, Book, 
  FileText, Briefcase, Award, Target, MessageSquare, Calendar as CalendarIcon, 
  CreditCard, Download, Settings, LogOut, User, Search, Bell, Moon, ChevronDown, 
  Menu, X, UploadCloud, Clock, CheckCircle2, Code, Terminal, Play, PlayCircle,
  MoreVertical, Filter, AlertCircle, ChevronRight, Check
} from 'lucide-react';
import './StudentDashboard.css'; // Inheriting global dashboard layouts
import './Assignments.css';      // Custom assignment center styles

const Assignments = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('Assignments');
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState(null);

  const menuItems = [
    { id: 'dash', icon: <LayoutDashboard size={18}/>, label: 'Dashboard', link: '/dashboard/student' },
    { id: 'courses', icon: <BookOpen size={18}/>, label: 'My Courses', link: '/dashboard/courses' },
    { id: 'assignments', icon: <FileEdit size={18}/>, label: 'Assignments & Quizzes', active: true, link: '/dashboard/assignments' },
    { id: 'live', icon: <Video size={18}/>, label: 'Live Classes', badge: 1, link: '/dashboard/live' },
    { id: 'study', icon: <Book size={18}/>, label: 'Study Materials', link: '/dashboard/materials' },
    { id: 'internships', icon: <Briefcase size={18}/>, label: 'Internships', link: '/dashboard/internships' },
    { id: 'certificates', icon: <Award size={18}/>, label: 'Certificates & Achievements', link: '/dashboard/certificates' },
    { id: 'messages', icon: <MessageSquare size={18}/>, label: 'Messages', badge: 5, link: '/dashboard/messages' },
    { id: 'calendar', icon: <CalendarIcon size={18}/>, label: 'Calendar', link: '#' },
    { id: 'profile', icon: <User size={18}/>, label: 'Profile', link: '/dashboard/profile' }
  ];

  const assignmentsList = [
    { id: 1, title: "Build a Weather App in React", course: "Full-Stack React & Node.js", status: "Pending", deadline: "Today, 11:59 PM", marks: "100", type: "Project" },
    { id: 2, title: "UI Wireframes for E-commerce", course: "UI/UX Masterclass", status: "Submitted", deadline: "Oct 24, 2026", marks: "95/100", type: "Design" },
    { id: 3, title: "Contract Drafting Exercise", course: "Corporate Law Basics", status: "Graded", deadline: "Oct 15, 2026", marks: "88/100", type: "Document" }
  ];

  const quizzesList = [
    { id: 1, title: "React Hooks Deep Dive", course: "Full-Stack React", questions: 20, time: "30 Mins", difficulty: "Intermediate", attempts: "2/3" },
    { id: 2, title: "Figma Components", course: "UI/UX Masterclass", questions: 15, time: "20 Mins", difficulty: "Beginner", attempts: "1/1" }
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
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-4 mt-4">Assessment Hub</div>
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
          <input type="text" placeholder="Search assignments, quizzes..." className="lms-search-input" />
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
    switch (activeTab) {
      case 'Assignments':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <select className="text-sm border border-slate-200 rounded-md px-3 py-2 bg-white outline-none focus:border-primary">
                  <option>All Courses</option>
                  <option>React Masterclass</option>
                  <option>UI/UX Design</option>
                </select>
                <select className="text-sm border border-slate-200 rounded-md px-3 py-2 bg-white outline-none focus:border-primary">
                  <option>Status: All</option>
                  <option>Pending</option>
                  <option>Submitted</option>
                  <option>Graded</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Submission UI Mockup (Active Assignment) */}
              <div className="lms-card flex flex-col border-2 border-primary/20 shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">React Masterclass</div>
                    <h3 className="font-bold text-lg text-main">Build a Weather App</h3>
                  </div>
                  <div className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">Due Today</div>
                </div>
                <p className="text-sm text-muted mb-6">Build a React application that fetches weather data from the OpenWeather API and displays a 5-day forecast. Use TailwindCSS for styling.</p>
                
                <div className="ac-dropzone mb-4">
                  <UploadCloud size={32} className="text-primary mb-3"/>
                  <div className="font-bold text-sm mb-1">Drag & Drop your submission here</div>
                  <div className="text-xs text-muted">Supports .zip, .rar, .pdf (Max 50MB)</div>
                  <button className="mt-4 px-4 py-2 bg-white border border-slate-200 rounded-md text-sm font-bold text-main hover:border-primary transition-colors">Browse Files</button>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 bg-primary text-white font-bold py-2.5 rounded-lg text-sm hover:bg-blue-600 transition-colors">Submit Assignment</button>
                  <button className="px-4 bg-slate-100 text-main font-bold py-2.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">View Rubric</button>
                </div>
              </div>

              {/* Assignment List */}
              <div className="space-y-4">
                {assignmentsList.slice(1).map(assgn => (
                  <div key={assgn.id} className="lms-card p-4 flex gap-4 items-start group hover:border-primary transition-colors">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${assgn.status === 'Graded' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                      {assgn.status === 'Graded' ? <CheckCircle2 size={20}/> : <FileText size={20}/>}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-main mb-1 group-hover:text-primary transition-colors">{assgn.title}</h4>
                      <div className="text-xs text-muted mb-2">{assgn.course}</div>
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${assgn.status === 'Graded' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                          {assgn.status} {assgn.status === 'Graded' && `• ${assgn.marks}`}
                        </span>
                        <button className="text-xs font-bold text-primary hover:underline">View Feedback</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Quizzes':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Quiz Player Mockup */}
            <div className="ac-quiz-card mb-8">
              <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-bold text-lg">React Hooks Deep Dive</h3>
                  <div className="text-xs text-muted">Question 4 of 20</div>
                </div>
                <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full font-bold font-mono text-sm border border-red-100">
                  <Clock size={16}/> 18:45
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-base font-medium text-main mb-6 leading-relaxed">
                  Which Hook would you use to perform a side effect in a functional component, such as fetching data from an API?
                </h4>
                
                <div className="space-y-3">
                  {['useState', 'useEffect', 'useContext', 'useReducer'].map((opt, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedQuizAnswer(i)}
                      className={`ac-quiz-option ${selectedQuizAnswer === i ? 'selected' : ''}`}
                    >
                      <div className="ac-quiz-radio">
                        <div className="ac-quiz-radio-inner"></div>
                      </div>
                      <span className="font-medium text-sm">{opt}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                <button className="text-sm font-bold text-slate-400 hover:text-main">Previous</button>
                <div className="flex gap-3">
                  <button className="text-sm font-bold text-primary hover:underline px-4">Mark for Review</button>
                  <button className="bg-primary text-white font-bold px-6 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">Save & Next</button>
                </div>
              </div>
            </div>
            
            <h3 className="font-bold text-lg mb-4">Upcoming Quizzes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzesList.map(quiz => (
                <div key={quiz.id} className="lms-card group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <HelpCircle size={20}/>
                    </div>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">{quiz.difficulty}</span>
                  </div>
                  <h4 className="font-bold text-main mb-1 group-hover:text-primary transition-colors">{quiz.title}</h4>
                  <div className="text-xs text-muted mb-4">{quiz.course}</div>
                  
                  <div className="flex justify-between text-xs font-bold text-slate-500 mb-6">
                    <span className="flex items-center gap-1"><HelpCircle size={12}/> {quiz.questions} Qs</span>
                    <span className="flex items-center gap-1"><Clock size={12}/> {quiz.time}</span>
                  </div>
                  <button className="w-full bg-slate-900 text-white font-bold py-2 rounded-lg text-sm hover:bg-slate-800 transition-colors">Start Quiz</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Coding':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold">Two Sum Challenge</h2>
                <div className="text-sm text-muted">Data Structures & Algorithms</div>
              </div>
              <div className="flex gap-2">
                <select className="text-sm border border-slate-200 rounded-md px-3 py-1.5 bg-white outline-none">
                  <option>JavaScript (Node.js)</option>
                  <option>Python 3</option>
                  <option>Java</option>
                </select>
                <button className="bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-md flex items-center gap-2"><Play size={14} className="fill-white"/> Run</button>
                <button className="bg-emerald-500 text-white text-sm font-bold px-4 py-1.5 rounded-md">Submit</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
              {/* Problem Description */}
              <div className="lms-card overflow-y-auto">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded">Easy</span>
                  <span className="text-[10px] text-muted font-bold tracking-wider uppercase">Arrays</span>
                </div>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                  Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
                </p>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                  You may assume that each input would have exactly one solution, and you may not use the same element twice.
                </p>
                <h4 className="font-bold text-sm mb-2 mt-6">Example 1:</h4>
                <div className="bg-slate-50 p-3 rounded-md font-mono text-xs text-slate-700 mb-4 border border-slate-200">
                  Input: nums = [2,7,11,15], target = 9<br/>
                  Output: [0,1]<br/>
                  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                </div>
              </div>
              
              {/* Code Editor */}
              <div className="lg:col-span-2 ac-code-editor shadow-lg">
                <div className="ac-code-header">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-400">solution.js</div>
                  <Settings size={14} className="text-slate-400 cursor-pointer"/>
                </div>
                <div className="ac-code-body">
                  <div className="ac-code-lines">
                    1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7
                  </div>
                  <textarea className="ac-code-input" spellCheck="false" defaultValue={`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Write your solution here
    
};`}></textarea>
                </div>
                <div className="ac-code-console">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-bold text-slate-300">Test Results</div>
                    <ChevronDown size={14}/>
                  </div>
                  <div className="text-xs text-slate-500">Run your code to see output.</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Grades':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="lms-card bg-gradient-to-br from-primary to-blue-700 text-white">
                <div className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">Overall Average</div>
                <div className="text-4xl font-bold mb-1">92%</div>
                <div className="text-xs text-white/80">A+ Grade standing</div>
              </div>
              <div className="lms-card">
                <div className="text-muted text-xs font-bold uppercase tracking-wider mb-2">Total Credits Earned</div>
                <div className="text-4xl font-bold text-main mb-1">24</div>
                <div className="text-xs text-emerald-600 font-bold flex items-center gap-1"><ArrowUpRight size={12}/> +4 this semester</div>
              </div>
              <div className="lms-card">
                <div className="text-muted text-xs font-bold uppercase tracking-wider mb-2">Class Rank</div>
                <div className="text-4xl font-bold text-main mb-1">Top 5%</div>
                <div className="text-xs text-muted">Out of 2,450 students</div>
              </div>
            </div>

            <div className="lms-card p-0 overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold">Recent Grades</h3>
                <button className="text-sm font-bold text-primary flex items-center gap-1"><Download size={14}/> Transcript</button>
              </div>
              <div className="overflow-x-auto">
                <table className="ac-grade-table">
                  <thead>
                    <tr>
                      <th>Assignment / Exam</th>
                      <th>Course</th>
                      <th>Date</th>
                      <th>Score</th>
                      <th>Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-main">UI Wireframes</td>
                      <td className="text-sm text-muted">UI/UX Masterclass</td>
                      <td className="text-sm text-muted">Oct 24, 2026</td>
                      <td><span className="bg-emerald-100 text-emerald-700 font-bold px-2 py-1 rounded text-xs">95/100</span></td>
                      <td><button className="text-primary text-xs font-bold hover:underline">View Comments</button></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-main">React Midterm</td>
                      <td className="text-sm text-muted">Full-Stack React</td>
                      <td className="text-sm text-muted">Oct 18, 2026</td>
                      <td><span className="bg-emerald-100 text-emerald-700 font-bold px-2 py-1 rounded text-xs">88/100</span></td>
                      <td><button className="text-primary text-xs font-bold hover:underline">View Comments</button></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-main">Algorithm Quiz</td>
                      <td className="text-sm text-muted">Data Structures</td>
                      <td className="text-sm text-muted">Oct 10, 2026</td>
                      <td><span className="bg-amber-100 text-amber-700 font-bold px-2 py-1 rounded text-xs">75/100</span></td>
                      <td><span className="text-muted text-xs">-</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`lms-layout bg-background ${darkMode ? 'dark-theme' : ''}`}>
      <Sidebar />
      <div className="lms-main-wrapper">
        <Topbar />
        
        <div className="lms-content-grid">
          <div className="lms-main custom-scrollbar">
            
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-main mb-2">Assignments & Assessments</h1>
              <p className="text-muted text-sm lg:text-base">Manage your submissions, track deadlines, and review your grades.</p>
            </div>

            {/* Top KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="lms-card flex flex-col justify-center gap-1 border-t-4 border-t-blue-500">
                <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Pending Assignments</div>
                <div className="text-2xl font-bold text-main">2</div>
              </div>
              <div className="lms-card flex flex-col justify-center gap-1 border-t-4 border-t-emerald-500">
                <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Average Score</div>
                <div className="text-2xl font-bold text-main">92%</div>
              </div>
              <div className="lms-card flex flex-col justify-center gap-1 border-t-4 border-t-purple-500">
                <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Coding Challenges</div>
                <div className="text-2xl font-bold text-main">45</div>
              </div>
              <div className="lms-card flex flex-col justify-center gap-1 border-t-4 border-t-amber-500">
                <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Upcoming Quizzes</div>
                <div className="text-2xl font-bold text-main">1</div>
              </div>
            </div>

            {/* Custom Tabs */}
            <div className="ac-tabs">
              {['Assignments', 'Quizzes', 'Coding', 'Grades'].map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`ac-tab-btn ${activeTab === tab ? 'active' : ''}`}
                >
                  {tab === 'Assignments' && <FileEdit size={16}/>}
                  {tab === 'Quizzes' && <HelpCircle size={16}/>}
                  {tab === 'Coding' && <Code size={16}/>}
                  {tab === 'Grades' && <Award size={16}/>}
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
            
            <div className="lms-card bg-slate-900 text-white mb-8 border-none relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Clock size={100}/></div>
              <h3 className="font-bold text-sm text-slate-400 uppercase tracking-wider mb-4 relative z-10">Next Deadline</h3>
              <div className="text-xl font-bold mb-1 relative z-10">Weather App</div>
              <div className="text-sm text-slate-300 mb-4 relative z-10">React Masterclass</div>
              <div className="inline-block bg-red-500 text-white font-bold px-3 py-1.5 rounded text-sm relative z-10 animate-pulse">In 4 Hours</div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4">Instructor Feedback</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg border border-slate-100 hover:border-primary transition-colors cursor-pointer bg-slate-50 relative group">
                  <div className="absolute top-3 right-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity"><ChevronRight size={14}/></div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden"><img src="https://api.dicebear.com/7.x/notionists/svg?seed=Elena" alt="Inst"/></div>
                    <span className="text-xs font-bold">Elena V.</span>
                  </div>
                  <div className="font-bold text-sm mb-1">UI Wireframes</div>
                  <p className="text-xs text-muted line-clamp-2">"Excellent work on the grid layout. Consider improving the color contrast in the secondary buttons."</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-4">Achievements</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl flex flex-col items-center text-center">
                  <Flame size={24} className="text-amber-500 mb-2"/>
                  <span className="text-xl font-bold text-amber-700">12</span>
                  <span className="text-[10px] font-bold text-amber-600/70 uppercase">Day Streak</span>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl flex flex-col items-center text-center">
                  <Code size={24} className="text-blue-500 mb-2"/>
                  <span className="text-xl font-bold text-blue-700">45</span>
                  <span className="text-[10px] font-bold text-blue-600/70 uppercase">Problems</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
