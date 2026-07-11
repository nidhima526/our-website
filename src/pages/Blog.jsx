import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FaqAccordion from '../components/FaqAccordion';
import FinalCTA from '../components/FinalCTA';
import { 
  BookOpen, Search, Filter, Clock, Eye, Share2, Bookmark, BookmarkCheck,
  Download, ArrowRight, TrendingUp, Star, PlayCircle, Map, Target,
  Scale, GraduationCap, Code, Smartphone, Zap, Building, PenTool, Video, Mic, Briefcase, Mail
} from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [bookmarked, setBookmarked] = useState({});

  const toggleBookmark = (id) => {
    setBookmarked(prev => ({...prev, [id]: !prev[id]}));
  };

  const categories = [
    { name: "Legal Awareness", icon: <Scale size={18}/>, count: 42 },
    { name: "Education", icon: <GraduationCap size={18}/>, count: 85 },
    { name: "Programming", icon: <Code size={18}/>, count: 120 },
    { name: "Website Development", icon: <MonitorIcon size={18}/>, count: 64 },
    { name: "Mobile Apps", icon: <Smartphone size={18}/>, count: 38 },
    { name: "Artificial Intelligence", icon: <Zap size={18}/>, count: 56 },
    { name: "Business Growth", icon: <Building size={18}/>, count: 91 },
    { name: "Graphic Design", icon: <PenTool size={18}/>, count: 47 },
    { name: "Video Editing", icon: <Video size={18}/>, count: 32 },
    { name: "Podcasting", icon: <Mic size={18}/>, count: 18 },
    { name: "Career Development", icon: <Target size={18}/>, count: 104 },
    { name: "Internships", icon: <Briefcase size={18}/>, count: 27 }
  ];

  const articles = [
    { id: 1, title: "The Ultimate Guide to React 19 Features", cat: "Programming", desc: "Explore the new hooks and compiler optimizations coming to React.", author: "Tech Team", date: "Oct 12, 2026", time: "8 min", views: "12k", img: "bg-blue-600", featured: true },
    { id: 2, title: "Understanding Data Privacy Laws in 2026", cat: "Legal Awareness", desc: "What every startup founder needs to know about the latest data protection regulations.", author: "Adv. Nidhima", date: "Oct 10, 2026", time: "5 min", views: "8.4k", img: "bg-slate-800" },
    { id: 3, title: "How to Build a High-Converting Landing Page", cat: "Website Development", desc: "Design principles and psychology behind landing pages that actually sell.", author: "Design Team", date: "Oct 08, 2026", time: "6 min", views: "15k", img: "bg-emerald-600" },
    { id: 4, title: "Top 10 AI Tools Every Business Needs", cat: "Artificial Intelligence", desc: "Automate your workflows and save hundreds of hours with these tools.", author: "Tech Team", date: "Oct 05, 2026", time: "7 min", views: "22k", img: "bg-purple-600" },
    { id: 5, title: "Acing Your First Tech Interview", cat: "Career Development", desc: "Step-by-step roadmap to prepare for algorithmic and behavioral rounds.", author: "Education Team", date: "Oct 01, 2026", time: "10 min", views: "34k", img: "bg-amber-500" },
    { id: 6, title: "The Importance of NDA Agreements", cat: "Legal Awareness", desc: "Why a Non-Disclosure Agreement is your company's first line of defense.", author: "Adv. Nidhima", date: "Sep 28, 2026", time: "4 min", views: "6.2k", img: "bg-rose-600" }
  ];

  const resources = [
    { title: "Startup Legal Checklist", type: "PDF Guide", icon: <Scale size={24}/>, color: "text-slate-800", bg: "bg-slate-100" },
    { title: "Frontend Developer Roadmap", type: "Study Guide", icon: <Map size={24}/>, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Freelance Contract Template", type: "Doc Template", icon: <FileTextIcon size={24}/>, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "SEO Strategy Playbook", type: "eBook", icon: <TrendingUp size={24}/>, color: "text-purple-600", bg: "bg-purple-50" }
  ];

  const authors = [
    { name: "Advocate Nidhima", role: "Founder & Legal Expert", articles: 45, img: "notionists/svg?seed=Nidhima" },
    { name: "ASHERVISION Devs", role: "Engineering Team", articles: 120, img: "notionists/svg?seed=Tech" },
    { name: "Creative Studio", role: "Design & Media", articles: 38, img: "notionists/svg?seed=Design" }
  ];

  // Dummy icons for missing lucide imports
  function MonitorIcon({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>; }
  function FileTextIcon({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>; }

  const filteredArticles = articles.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'All' || a.cat === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="app blog-page">
      <Navbar />
      
      <main>
        {/* 1. HERO SECTION */}
        <section className="bg-hero">
          <div className="bg-hero-bg"></div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="bg-hero-content">
              <span className="hero-eyebrow text-accent flex items-center gap-2"><BookOpen size={16}/> Knowledge Center</span>
              <h1 className="hero-title mt-4 mb-6">Knowledge That Helps You <span className="text-primary">Learn, Build & Protect.</span></h1>
              <p className="hero-subtitle mb-8 text-muted">Explore expert articles, legal awareness guides, technology insights, educational resources, and business strategies from the experts at ASHERVISION.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#articles" className="btn btn-primary">Explore Articles</a>
                <a href="#newsletter" className="btn btn-outline">Subscribe</a>
              </div>
            </div>
            
            <div className="bg-hero-illustration hidden lg-flex relative h-[450px]">
              <div className="bg-dashboard premium-card glass-panel flex flex-col p-6 w-full max-w-md absolute right-0 top-1/2 -translate-y-1/2 z-10 overflow-hidden">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <div className="font-bold flex items-center gap-2"><Star size={20} className="text-primary"/> Reading Dashboard</div>
                  <div className="text-xs font-bold text-muted">Oct 2026</div>
                </div>
                
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-700">Weekly Goal</span>
                    <span className="text-xs font-bold text-primary">3 / 5 Articles</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[60%]"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Your Bookmarks</div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-slate-800 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-xs font-bold line-clamp-1">Data Privacy Laws in 2026</div>
                      <div className="text-[10px] text-muted">Legal Awareness</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-blue-600 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-xs font-bold line-clamp-1">React 19 Features Guide</div>
                      <div className="text-[10px] text-muted">Programming</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SEARCH & FILTER INTERFACE */}
        <section className="section bg-surface pt-6 pb-0 sticky top-[72px] z-30 border-b border-gray-200 shadow-sm" id="articles">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
              <div className="relative w-full md:max-w-md">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input 
                  type="text" 
                  placeholder="Search articles, topics, or authors..." 
                  className="bg-input pl-10 h-12 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                <span className="text-sm font-bold text-muted flex items-center gap-1"><Filter size={16}/> Sort:</span>
                <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-main font-medium focus:outline-none focus:border-primary">
                  <option>Latest Published</option>
                  <option>Most Popular</option>
                  <option>Editor's Picks</option>
                </select>
              </div>
            </div>
            
            <div className="flex overflow-x-auto gap-2 pb-4 hide-scrollbar">
              <button 
                onClick={() => setActiveCategory('All')}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${activeCategory === 'All' ? 'bg-slate-900 text-white' : 'bg-white text-muted border border-gray-200 hover:border-primary'}`}
              >
                All Topics
              </button>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${activeCategory === cat.name ? 'bg-slate-900 text-white' : 'bg-white text-muted border border-gray-200 hover:border-primary'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2 & 4. ARTICLE GRID */}
        <section className="section bg-gray-50/50 min-h-[500px]">
          <div className="container">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-20 text-muted">
                <Search size={48} className="mx-auto mb-4 opacity-20"/>
                <h3 className="text-xl font-bold mb-2">No articles found</h3>
                <p>Try adjusting your search or filter criteria.</p>
                <button className="btn btn-outline mt-4" onClick={() => {setSearchQuery(''); setActiveCategory('All');}}>Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <div key={article.id} className={`premium-card bg-white flex flex-col group overflow-hidden ${article.featured && activeCategory === 'All' && !searchQuery ? 'md:col-span-2 lg:col-span-3 lg:flex-row' : ''}`}>
                    <div className={`relative overflow-hidden ${article.featured && activeCategory === 'All' && !searchQuery ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-56'}`}>
                      <div className={`absolute inset-0 ${article.img} opacity-90 group-hover:scale-105 transition-transform duration-500`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                          {article.cat}
                        </span>
                      </div>
                    </div>
                    
                    <div className={`p-6 flex flex-col flex-grow ${article.featured && activeCategory === 'All' && !searchQuery ? 'lg:w-1/2 lg:p-10 justify-center' : ''}`}>
                      <div className="flex items-center gap-4 text-xs text-muted mb-3 font-medium">
                        <span className="flex items-center gap-1"><Clock size={14}/> {article.time} read</span>
                        <span className="flex items-center gap-1"><Eye size={14}/> {article.views}</span>
                      </div>
                      
                      <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors ${article.featured && activeCategory === 'All' && !searchQuery ? 'text-3xl' : 'text-xl'}`}>
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-muted mb-6 flex-grow">
                        {article.desc}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                            <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${article.author}`} alt={article.author} className="w-full h-full object-cover"/>
                          </div>
                          <div>
                            <div className="text-xs font-bold text-main">{article.author}</div>
                            <div className="text-[10px] text-muted">{article.date}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-blue-50 transition-colors">
                            <Share2 size={16}/>
                          </button>
                          <button 
                            onClick={() => toggleBookmark(article.id)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${bookmarked[article.id] ? 'bg-primary text-white' : 'bg-gray-50 text-gray-500 hover:text-primary hover:bg-blue-50'}`}
                          >
                            {bookmarked[article.id] ? <BookmarkCheck size={16}/> : <Bookmark size={16}/>}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="text-center mt-12">
              <button className="btn btn-outline">Load More Articles</button>
            </div>
          </div>
        </section>

        {/* 5. POPULAR CATEGORIES */}
        <section className="section bg-white border-y border-gray-200">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Explore by Category</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="bg-surface border border-gray-200 p-4 rounded-xl flex flex-col items-center text-center hover:border-primary hover:shadow-md transition-all cursor-pointer group">
                  <div className="text-slate-400 group-hover:text-primary transition-colors mb-2">{cat.icon}</div>
                  <h4 className="font-bold text-xs mb-1 group-hover:text-primary transition-colors">{cat.name}</h4>
                  <span className="text-[10px] text-muted font-bold bg-gray-100 px-2 py-0.5 rounded-full">{cat.count} articles</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FREE RESOURCES */}
        <section className="section bg-slate-900 text-white">
          <div className="container">
            <div className="section-header mb-12 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold mb-2">Free Resources & Templates</h2>
                <p className="text-slate-400">Download premium assets created by our experts.</p>
              </div>
              <button className="hidden md:flex btn btn-outline border-slate-700 text-white hover:bg-slate-800">View All Resources</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((res, idx) => (
                <div key={idx} className="bg-slate-800 border border-slate-700 p-6 rounded-xl flex flex-col hover:-translate-y-1 transition-transform group">
                  <div className={`w-12 h-12 rounded-lg ${res.bg} ${res.color} flex items-center justify-center mb-4`}>
                    {res.icon}
                  </div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">{res.type}</span>
                  <h3 className="font-bold text-lg mb-6 flex-grow group-hover:text-blue-400 transition-colors">{res.title}</h3>
                  <button className="flex items-center justify-center gap-2 w-full py-2 bg-slate-700/50 hover:bg-primary rounded-lg text-sm font-bold transition-colors">
                    <Download size={16}/> Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. AUTHOR SPOTLIGHT */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold">Meet Our Authors</h2>
              <p className="text-muted mt-2">Learn from industry experts, legal veterans, and tech innovators.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {authors.map((author, idx) => (
                <div key={idx} className="premium-card p-6 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                    <img src={`https://api.dicebear.com/7.x/${author.img}`} alt={author.name} className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-bold text-main">{author.name}</h4>
                    <p className="text-xs text-primary font-bold mb-1">{author.role}</p>
                    <p className="text-xs text-muted font-medium">{author.articles} articles published</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. NEWSLETTER */}
        <section className="section bg-surface border-t border-gray-200" id="newsletter">
          <div className="container max-w-4xl">
            <div className="premium-card p-8 md:p-12 text-center border-t-8 border-t-accent">
              <div className="w-16 h-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32}/>
              </div>
              <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
              <p className="text-muted mb-8 max-w-xl mx-auto">Subscribe to our premium newsletter to receive the latest legal awareness updates, technology insights, and career growth strategies directly in your inbox.</p>
              
              <form className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Enter your email address..." className="bg-input h-14 flex-1 text-base px-6" required/>
                <button type="submit" className="btn btn-primary h-14 px-8 text-base shadow-lg">Subscribe Free</button>
              </form>
              <p className="text-xs text-muted mt-4 flex items-center justify-center gap-1"><CheckCircle2 size={14} className="text-success"/> No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>

        {/* 11 & 12: REUSED SECTIONS */}
        <FaqAccordion />
        
        <section className="section cta-section">
          <div className="container">
            <div className="cta-banner premium-card text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Continue Learning with ASHERVISION</h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto">Beyond articles, we provide hands-on courses, legal consulting, and robust technology solutions to help you succeed.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn btn-primary" style={{backgroundColor: 'white', color: 'var(--color-primary)'}}>Explore Services</button>
                <button className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>Book Consultation</button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Blog;
