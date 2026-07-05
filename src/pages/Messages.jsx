import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Video, FileEdit, Book, 
  Briefcase, Award, Target, MessageSquare, User, Search, Moon, 
  Menu, X, Send, Paperclip, Smile, Image as ImageIcon, MoreVertical, Phone, Video as VideoIcon
} from 'lucide-react';
import './StudentDashboard.css';
import './Messages.css';

const Messages = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeChat, setActiveChat] = useState(1);
  const [messageInput, setMessageInput] = useState("");

  const menuItems = [
    { id: 'dash', icon: <LayoutDashboard size={18}/>, label: 'Dashboard', link: '/dashboard/student' },
    { id: 'courses', icon: <BookOpen size={18}/>, label: 'My Courses', link: '/dashboard/courses' },
    { id: 'assignments', icon: <FileEdit size={18}/>, label: 'Assignments & Quizzes', badge: 2, link: '/dashboard/assignments' },
    { id: 'study', icon: <Book size={18}/>, label: 'Study Materials', link: '/dashboard/materials' },
    { id: 'certificates', icon: <Award size={18}/>, label: 'Certificates & Achievements', link: '/dashboard/certificates' },
    { id: 'live', icon: <Video size={18}/>, label: 'Live Classes', badge: 1, link: '/dashboard/live' },
    { id: 'internships', icon: <Briefcase size={18}/>, label: 'Internships', link: '/dashboard/internships' },
    { id: 'messages', icon: <MessageSquare size={18}/>, label: 'Messages', badge: 5, active: true, link: '/dashboard/messages' },
    { id: 'profile', icon: <User size={18}/>, label: 'Profile', link: '/dashboard/profile' }
  ];

  const chats = [
    { id: 1, name: "UI/UX Masterclass Cohort", isGroup: true, preview: "Elena: Make sure to check the Figma link.", time: "10:42 AM", unread: 3, online: true, image: "UI" },
    { id: 2, name: "Dr. Rao (Instructor)", isGroup: false, preview: "Your solution to the graph problem was excellent.", time: "Yesterday", unread: 0, online: true, image: "DrRao" },
    { id: 3, name: "Project Team Alpha", isGroup: true, preview: "Alex: I'll deploy the backend tonight.", time: "Yesterday", unread: 2, online: false, image: "PTA" },
    { id: 4, name: "Support Team", isGroup: false, preview: "Your payment has been verified successfully.", time: "Mon", unread: 0, online: true, image: "Support" },
  ];

  const messages = [
    { id: 1, sender: "Elena V.", text: "Welcome to week 4 everyone! How are the prototypes coming along?", time: "10:30 AM", isMe: false, avatar: "ElenaV" },
    { id: 2, sender: "Alex Doe", text: "Working on the micro-interactions right now. It's taking a bit longer than expected.", time: "10:35 AM", isMe: true, avatar: "StudentOne" },
    { id: 3, sender: "David Chen", text: "I'm having trouble with the auto-layout in Figma for the navbar.", time: "10:38 AM", isMe: false, avatar: "DavidChen" },
    { id: 4, sender: "Elena V.", text: "David, I just posted a quick tutorial in the Resources tab. Make sure to check the Figma link.", time: "10:42 AM", isMe: false, avatar: "ElenaV" },
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
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-4 mt-4">Communication</div>
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
    <div className="lms-topbar border-b-0 shadow-none pb-0">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(true)}><Menu size={24}/></button>
        <h1 className="text-xl font-bold hidden sm:block">Messages</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button onClick={toggleDarkMode} className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors">
            <Moon size={18}/>
          </button>
          <div className="flex items-center gap-2 ml-2 cursor-pointer hover:bg-slate-50 p-1 pr-2 rounded-full border border-transparent hover:border-slate-200 transition-all">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=StudentOne" alt="Profile" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`lms-layout bg-background ${darkMode ? 'dark-theme' : ''}`}>
      <Sidebar />
      <div className="lms-main-wrapper flex flex-col">
        <Topbar />
        
        <div className="flex-1 p-6 lg:p-8 pt-4 pb-0 overflow-hidden">
          <div className="chat-layout h-full">
            
            {/* Left Sidebar - Chat List */}
            <div className="chat-sidebar hidden md:flex">
              <div className="chat-search-container">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                  <input type="text" placeholder="Search messages..." className="chat-search" />
                </div>
              </div>
              <div className="chat-list custom-scrollbar">
                {chats.map(chat => (
                  <div 
                    key={chat.id} 
                    className={`chat-list-item ${activeChat === chat.id ? 'active' : ''}`}
                    onClick={() => setActiveChat(chat.id)}
                  >
                    <div className="chat-avatar">
                      {chat.isGroup ? (
                        <div className="w-full h-full rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                          {chat.image}
                        </div>
                      ) : (
                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${chat.image}`} alt={chat.name}/>
                      )}
                      {chat.online && <div className="online-dot"></div>}
                    </div>
                    <div className="chat-info">
                      <div className="chat-name-row">
                        <span className="chat-name">{chat.name}</span>
                        <span className="chat-time">{chat.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="chat-preview">{chat.preview}</span>
                        {chat.unread > 0 && <span className="unread-badge">{chat.unread}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Active Chat */}
            <div className="chat-main">
              {/* Chat Header */}
              <div className="chat-header">
                <div className="flex items-center gap-3">
                  <div className="chat-avatar">
                    <div className="w-full h-full rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                      UI
                    </div>
                    <div className="online-dot"></div>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg leading-tight">UI/UX Masterclass Cohort</h2>
                    <div className="text-xs text-emerald-500 font-medium">42 members online</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors hidden sm:flex"><Phone size={18}/></button>
                  <button className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors hidden sm:flex"><VideoIcon size={18}/></button>
                  <button className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors"><MoreVertical size={18}/></button>
                </div>
              </div>

              {/* Chat History */}
              <div className="chat-history custom-scrollbar">
                <div className="text-center text-xs font-bold text-slate-400 uppercase tracking-wider my-4">Today</div>
                
                {messages.map(msg => (
                  <div key={msg.id} className={`message-row ${msg.isMe ? 'me' : ''}`}>
                    {!msg.isMe && (
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 flex-shrink-0 self-end mb-4">
                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${msg.avatar}`} alt={msg.sender}/>
                      </div>
                    )}
                    <div>
                      {!msg.isMe && <div className="text-xs text-slate-500 mb-1 ml-1 font-medium">{msg.sender}</div>}
                      <div className="message-bubble">{msg.text}</div>
                      <div className="message-meta">
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="chat-input-area">
                <div className="chat-input-container">
                  <button className="chat-action-btn"><Paperclip size={18}/></button>
                  <button className="chat-action-btn"><ImageIcon size={18}/></button>
                  <textarea 
                    className="chat-textarea custom-scrollbar" 
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    rows={1}
                  ></textarea>
                  <button className="chat-action-btn"><Smile size={18}/></button>
                  <button className="chat-action-btn chat-send-btn"><Send size={16}/></button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
