import React, { useState } from 'react';
import { Menu, Bell, User, Search, Settings, Home, BookOpen, Briefcase } from 'lucide-react';
import './DashboardLayout.css';

export const DashboardLayout = ({ children, userName = "Admin" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="ds-dashboard-wrapper">
      {/* Sidebar Overlay (Mobile) */}
      <div 
        className={`ds-sidebar-overlay ${sidebarOpen ? 'open' : ''}`} 
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside className={`ds-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="ds-sidebar-header">
          <h2 className="ds-sidebar-logo">MASTER<span>TECH</span></h2>
        </div>
        <nav className="ds-sidebar-nav">
          <a href="#" className="ds-nav-item active"><Home size={20}/> Dashboard</a>
          <a href="#" className="ds-nav-item"><BookOpen size={20}/> Courses</a>
          <a href="#" className="ds-nav-item"><Briefcase size={20}/> Internships</a>
          <a href="#" className="ds-nav-item"><Settings size={20}/> Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ds-dashboard-main">
        {/* Topbar */}
        <header className="ds-topbar">
          <div className="flex items-center gap-4">
            <button className="ds-menu-btn" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="ds-search-bar hidden md-flex">
              <Search size={18} className="ds-search-icon"/>
              <input type="text" placeholder="Search resources..." className="ds-search-input" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="ds-icon-btn"><Bell size={20}/></button>
            <div className="ds-profile-menu flex items-center gap-2">
              <div className="ds-avatar-sm bg-primary text-white"><User size={16}/></div>
              <span className="hidden md-block font-medium">{userName}</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="ds-page-content">
          {children}
        </div>
      </main>
    </div>
  );
};
