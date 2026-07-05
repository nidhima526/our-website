import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Video, FileEdit, Book, 
  Briefcase, Award, Target, MessageSquare, User, Search, Moon, 
  Menu, X, Camera, Shield, CreditCard, Bell, LogOut, CheckCircle2
} from 'lucide-react';
import './StudentDashboard.css';
import './Profile.css';

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  const menuItems = [
    { id: 'dash', icon: <LayoutDashboard size={18}/>, label: 'Dashboard', link: '/dashboard/student' },
    { id: 'courses', icon: <BookOpen size={18}/>, label: 'My Courses', link: '/dashboard/courses' },
    { id: 'assignments', icon: <FileEdit size={18}/>, label: 'Assignments & Quizzes', badge: 2, link: '/dashboard/assignments' },
    { id: 'study', icon: <Book size={18}/>, label: 'Study Materials', link: '/dashboard/materials' },
    { id: 'certificates', icon: <Award size={18}/>, label: 'Certificates & Achievements', link: '/dashboard/certificates' },
    { id: 'live', icon: <Video size={18}/>, label: 'Live Classes', badge: 1, link: '/dashboard/live' },
    { id: 'internships', icon: <Briefcase size={18}/>, label: 'Internships', link: '/dashboard/internships' },
    { id: 'messages', icon: <MessageSquare size={18}/>, label: 'Messages', badge: 5, link: '/dashboard/messages' },
    { id: 'profile', icon: <User size={18}/>, label: 'Profile', active: true, link: '/dashboard/profile' }
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
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-4 mt-4">Account</div>
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
        <h1 className="text-xl font-bold hidden sm:block">Account Settings</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 border-slate-200 dark:border-slate-700">
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
      case 'personal':
        return (
          <div className="animate-in fade-in duration-300">
            <h2 className="text-xl font-bold mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-input" defaultValue="Alex" />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-input" defaultValue="Doe" />
              </div>
              <div className="form-group md:col-span-2">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" defaultValue="alex.doe@example.com" />
              </div>
              <div className="form-group md:col-span-2">
                <label className="form-label">Bio</label>
                <textarea className="form-input form-textarea" defaultValue="Passionate UI/UX designer and frontend developer learning at MasterTech."></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">LinkedIn Profile (Optional)</label>
                <input type="url" className="form-input" placeholder="https://linkedin.com/in/..." />
              </div>
              <div className="form-group">
                <label className="form-label">GitHub Profile (Optional)</label>
                <input type="url" className="form-input" placeholder="https://github.com/..." />
              </div>
            </div>
            <div className="profile-actions">
              <button className="px-6 py-2.5 rounded-lg font-bold text-slate-600 hover:bg-slate-100 transition-colors">Cancel</button>
              <button className="px-6 py-2.5 rounded-lg font-bold bg-primary text-white hover:bg-blue-600 transition-colors">Save Changes</button>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="animate-in fade-in duration-300">
            <h2 className="text-xl font-bold mb-6">Security & Password</h2>
            
            <div className="form-group max-w-md">
              <label className="form-label">Current Password</label>
              <input type="password" className="form-input" />
            </div>
            <div className="form-group max-w-md">
              <label className="form-label">New Password</label>
              <input type="password" className="form-input" />
            </div>
            <div className="form-group max-w-md mb-8">
              <label className="form-label">Confirm New Password</label>
              <input type="password" className="form-input" />
            </div>

            <h3 className="font-bold text-lg mb-4 border-t border-slate-100 pt-6">Two-Factor Authentication</h3>
            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl mb-4 bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700">
              <div>
                <div className="font-bold mb-1 text-main">Authenticator App</div>
                <div className="text-sm text-muted">Use an app like Google Authenticator or Authy to secure your account.</div>
              </div>
              <div className="toggle-switch active">
                <div className="toggle-knob"></div>
              </div>
            </div>

            <div className="profile-actions">
              <button className="px-6 py-2.5 rounded-lg font-bold bg-primary text-white hover:bg-blue-600 transition-colors">Update Password</button>
            </div>
          </div>
        );
      case 'billing':
        return (
          <div className="animate-in fade-in duration-300">
            <h2 className="text-xl font-bold mb-6">Billing & Subscription</h2>
            
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 rounded-xl mb-8 flex justify-between items-center">
              <div>
                <div className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Current Plan</div>
                <div className="text-2xl font-bold flex items-center gap-2">MasterTech Pro <CheckCircle2 size={20} className="text-emerald-400"/></div>
              </div>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Manage Plan
              </button>
            </div>

            <h3 className="font-bold text-lg mb-4">Payment Methods</h3>
            <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 mb-4">
              <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center text-blue-600 font-bold italic">VISA</div>
              <div className="flex-1">
                <div className="font-bold text-main">Visa ending in 4242</div>
                <div className="text-sm text-muted">Expires 12/28</div>
              </div>
              <button className="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">Remove</button>
            </div>
            
            <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
              + Add Payment Method
            </button>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className={`lms-layout bg-background ${darkMode ? 'dark-theme' : ''}`}>
      <Sidebar />
      <div className="lms-main-wrapper flex flex-col">
        <Topbar />
        
        <div className="lms-main custom-scrollbar pt-8 px-6 lg:px-10 pb-20">
          
          <div className="profile-header">
            <div className="profile-cover">
              <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80" alt="Cover" />
            </div>
            <div className="profile-avatar-container">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=StudentOne" alt="Profile" />
              <div className="profile-avatar-overlay">
                <Camera size={24}/>
              </div>
            </div>
            <div className="pt-16 pb-6 px-8 flex justify-between items-end">
              <div>
                <h1 className="text-2xl font-bold text-main">Alex Doe</h1>
                <p className="text-slate-500">alex.doe@example.com • Student</p>
              </div>
            </div>
          </div>

          <div className="profile-grid">
            {/* Settings Navigation */}
            <div className="profile-nav custom-scrollbar">
              <button 
                onClick={() => setActiveTab('personal')}
                className={`profile-nav-btn ${activeTab === 'personal' ? 'active' : ''}`}
              >
                <User size={18}/> Personal Info
              </button>
              <button 
                onClick={() => setActiveTab('security')}
                className={`profile-nav-btn ${activeTab === 'security' ? 'active' : ''}`}
              >
                <Shield size={18}/> Security
              </button>
              <button 
                onClick={() => setActiveTab('billing')}
                className={`profile-nav-btn ${activeTab === 'billing' ? 'active' : ''}`}
              >
                <CreditCard size={18}/> Billing
              </button>
              <button 
                onClick={() => setActiveTab('preferences')}
                className={`profile-nav-btn ${activeTab === 'preferences' ? 'active' : ''}`}
              >
                <Bell size={18}/> Preferences
              </button>
              
              <div className="h-px bg-slate-200 dark:bg-slate-700 my-2 hidden lg:block"></div>
              
              <button className="profile-nav-btn text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 mt-auto">
                <LogOut size={18}/> Sign Out
              </button>
            </div>

            {/* Settings Content */}
            <div className="profile-content">
              {renderTabContent()}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
