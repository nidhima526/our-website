import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Video, FileEdit, HelpCircle, Book, 
  FileText, Briefcase, Award, Target, MessageSquare, Calendar as CalendarIcon, 
  User, Search, Bell, Moon, ChevronDown, Menu, X, ShoppingCart, Star, 
  Download, Lock, Unlock, CreditCard, ArrowRight, ShieldCheck, Trash2
} from 'lucide-react';
import './StudentDashboard.css';
import './StudyMaterials.css';

const StudyMaterials = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 'dash', icon: <LayoutDashboard size={18}/>, label: 'Dashboard', link: '/dashboard/student' },
    { id: 'courses', icon: <BookOpen size={18}/>, label: 'My Courses', link: '/dashboard/courses' },
    { id: 'assignments', icon: <FileEdit size={18}/>, label: 'Assignments & Quizzes', badge: 2, link: '/dashboard/assignments' },
    { id: 'study', icon: <Book size={18}/>, label: 'Study Materials', active: true, link: '/dashboard/materials' },
    { id: 'certificates', icon: <Award size={18}/>, label: 'Certificates & Achievements', link: '/dashboard/certificates' },
    { id: 'live', icon: <video webkit-playsinline='true' preload='auto' size={18}/>, label: 'Live Classes', badge: 1, link: '/dashboard/live' },
    { id: 'internships', icon: <Briefcase size={18}/>, label: 'Internships', link: '/dashboard/internships' },
    { id: 'messages', icon: <MessageSquare size={18}/>, label: 'Messages', badge: 5, link: '/dashboard/messages' },
    { id: 'profile', icon: <User size={18}/>, label: 'Profile', link: '/dashboard/profile' }
  ];

  const categories = ["All", "E-Books", "Mock Exams", "Lecture Notes", "Software Tools", "Cheat Sheets"];

  const products = [
    {
      id: 1,
      title: "Complete React Developer Guide (2026)",
      author: "Rahul Sharma",
      category: "E-Books",
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.9,
      reviews: 1240,
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
      premium: true,
      purchased: false
    },
    {
      id: 2,
      title: "UI/UX Masterclass - Official Workbook",
      author: "Elena V.",
      category: "E-Books",
      price: 19.99,
      originalPrice: 25.00,
      rating: 4.8,
      reviews: 890,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      premium: true,
      purchased: true
    },
    {
      id: 3,
      title: "Data Structures Full Mock Exam Pack",
      author: "Dr. Rao",
      category: "Mock Exams",
      price: 14.99,
      originalPrice: 20.00,
      rating: 4.7,
      reviews: 450,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      premium: false,
      purchased: false
    },
    {
      id: 4,
      title: "Corporate Law Core Concepts Notes",
      author: "Adv. Nidhima",
      category: "Lecture Notes",
      price: 9.99,
      originalPrice: 15.00,
      rating: 4.9,
      reviews: 210,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
      premium: false,
      purchased: false
    }
  ];

  const addToCart = (product) => {
    if(!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

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
    </div>
  );

  const Topbar = () => (
    <div className="lms-topbar">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(true)}><Menu size={24}/></button>
        <div className="relative hidden md:block w-64 lg:w-96">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
          <input type="text" placeholder="Search the premium store..." className="lms-search-input" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setCartOpen(true)}
          className="relative w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors"
        >
          <ShoppingCart size={20}/>
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900">
              {cart.length}
            </span>
          )}
        </button>

        <div className="flex items-center gap-1 border-l border-slate-200 dark:border-slate-700 pl-4 ml-2">
          <button onClick={toggleDarkMode} className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors">
            <Moon size={18}/>
          </button>
          <div className="flex items-center gap-2 ml-2 cursor-pointer hover:bg-slate-50 p-1 pr-2 rounded-full border border-transparent hover:border-slate-200 transition-all">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img loading="lazy" src="https://api.dicebear.com/7.x/notionists/svg?seed=StudentOne" alt="Profile" className="w-full h-full object-cover"/>
            </div>
            <span className="text-sm font-bold hidden xl:block">Alex Doe</span>
          </div>
        </div>
      </div>
    </div>
  );

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className={`lms-layout bg-background ${darkMode ? 'dark-theme' : ''}`}>
      <Sidebar />
      <div className="lms-main-wrapper relative">
        <Topbar />
        
        <div className="lms-main custom-scrollbar pt-8 px-6 lg:px-10 pb-20">
          
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-main mb-2">Premium Study Materials</h1>
            <p className="text-muted text-sm lg:text-base">Unlock high-quality eBooks, mock exams, and resources to accelerate your learning.</p>
          </div>

          {/* Promotional Hero */}
          <div className="sm-hero">
            <div className="relative z-10 max-w-lg">
              <div className="sm-hero-badge">Limited Time Offer</div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ultimate Developer Toolkit</h2>
              <p className="text-white/80 mb-6">Get 3 premium React & Node.js E-Books plus 10 full mock exams at a massive 50% discount. Master full-stack development faster.</p>
              <div className="flex items-center gap-4">
                <button className="bg-white text-[#1e3a8a] font-bold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors">View Bundle</button>
                <div className="flex items-center gap-2 font-bold text-xl">
                  <span>$49.99</span>
                  <span className="text-sm text-white/60 line-through">$99.99</span>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="sm-categories mb-8">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`sm-category-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Store Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="sm-product-card">
                <div className="sm-product-cover">
                  {product.premium && <div className="sm-product-badge premium">Premium</div>}
                  <img loading="lazy" src={product.image} alt={product.title} />
                  {product.purchased && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm z-20">
                      <div className="bg-white text-slate-900 font-bold px-4 py-2 rounded-lg flex items-center gap-2">
                        <Unlock size={16}/> Owned
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="sm-product-body">
                  <div className="text-xs text-primary font-bold tracking-wider uppercase mb-2">{product.category}</div>
                  <h3 className="font-bold text-main mb-1 line-clamp-2">{product.title}</h3>
                  <div className="text-sm text-muted mb-3">By {product.author}</div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-bold text-amber-500">{product.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-amber-500 text-amber-500" : "text-slate-300"}/>
                      ))}
                    </div>
                    <span className="text-xs text-muted">({product.reviews})</span>
                  </div>
                  
                  <div className="sm-price-tag">
                    <span className="sm-price-current">${product.price}</span>
                    {product.originalPrice && (
                      <>
                        <span className="sm-price-original">${product.originalPrice}</span>
                        <span className="sm-price-discount">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
                      </>
                    )}
                  </div>
                  
                  {product.purchased ? (
                    <button className="w-full bg-slate-100 dark:bg-slate-800 text-main font-bold py-2.5 rounded-lg text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                      <Download size={16}/> Download PDF
                    </button>
                  ) : (
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-primary text-white font-bold py-2.5 rounded-lg text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={16}/> Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Shopping Cart Slide-out Overlay */}
        <div className={`sm-cart-overlay ${cartOpen ? 'open' : ''}`}>
          <div className="absolute inset-0" onClick={() => setCartOpen(false)}></div>
          <div className="sm-cart-panel relative">
            <div className="sm-cart-header">
              <h2 className="text-xl font-bold flex items-center gap-2"><ShoppingCart size={24}/> Your Cart</h2>
              <button onClick={() => setCartOpen(false)} className="text-slate-400 hover:text-main"><X size={24}/></button>
            </div>
            
            <div className="sm-cart-body custom-scrollbar">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <ShoppingCart size={48} className="mx-auto mb-4 opacity-50"/>
                  <p>Your cart is currently empty.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 p-3 border border-slate-100 rounded-lg relative group">
                      <div className="w-20 h-20 bg-slate-100 rounded overflow-hidden flex-shrink-0">
                        <img loading="lazy" src={item.image} alt="thumb" className="w-full h-full object-cover"/>
                      </div>
                      <div className="flex-1 pr-6">
                        <h4 className="font-bold text-sm mb-1 line-clamp-2">{item.title}</h4>
                        <div className="text-xs text-muted mb-2">{item.category}</div>
                        <div className="font-bold text-primary">${item.price}</div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-3 right-3 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 size={16}/>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="sm-cart-footer shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-slate-500">Total</span>
                  <span className="text-2xl font-bold text-main">${cartTotal}</span>
                </div>
                <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors flex justify-center items-center gap-2 mb-3">
                  <CreditCard size={18}/> Secure Checkout
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-emerald-600 font-medium">
                  <ShieldCheck size={14}/> 100% Secure Payment via Stripe
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudyMaterials;


