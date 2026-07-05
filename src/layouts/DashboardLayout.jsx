import React, { useState } from 'react';
import { Menu, Bell, User, Search, Settings, Home, BookOpen, Briefcase, FileText, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = ({ children, userName = "Admin User" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: <Home size={20}/>, path: '/dashboard' },
    { name: 'Projects', icon: <Briefcase size={20}/>, path: '#' },
    { name: 'Courses', icon: <BookOpen size={20}/>, path: '#' },
    { name: 'Documents', icon: <FileText size={20}/>, path: '#' },
    { name: 'Settings', icon: <Settings size={20}/>, path: '#' }
  ];

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
          <Link to="/" className="ds-sidebar-logo">MASTER<span className="text-primary">TECH</span></Link>
        </div>
        
        <nav className="ds-sidebar-nav">
          <div className="ds-nav-section-title">Menu</div>
          {navItems.map((item, idx) => (
            <Link 
              key={idx} 
              to={item.path} 
              className={`ds-nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="ds-sidebar-footer">
          <div className="ds-user-card premium-card">
            <div className="ds-avatar-sm">
              <User size={16}/>
            </div>
            <div className="ds-user-info">
              <span className="ds-user-name">{userName}</span>
              <span className="ds-user-role">Client Portal</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ds-dashboard-main">
        {/* Topbar */}
        <header className="ds-topbar glass-panel">
          <div className="flex items-center gap-4">
            <button className="ds-menu-btn" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="ds-search-bar hidden md-flex">
              <Search size={18} className="ds-search-icon"/>
              <input type="text" placeholder="Search projects, courses..." className="ds-search-input" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="ds-icon-btn premium-card" style={{padding: '8px'}}><Bell size={20}/></button>
            <div className="ds-profile-menu flex items-center gap-2 cursor-pointer">
              <div className="ds-avatar-sm" style={{backgroundColor: 'var(--color-primary)', color: 'white'}}><User size={16}/></div>
              <ChevronDown size={16} className="text-muted hidden md-block"/>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="ds-page-content">
          <div className="container">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
