import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Home, Scale, Cpu, BookOpen, Palette, Box, Briefcase, Phone } from 'lucide-react';
import { MagnificationDock } from './MagnificationDock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Legal', path: '/legal', icon: <Scale size={20} /> },
    { name: 'Tech', path: '/technology', icon: <Cpu size={20} /> },
    { name: 'Courses', path: '/courses', icon: <BookOpen size={20} /> },
    { name: 'Creative', path: '/creative', icon: <Palette size={20} /> },
    { name: 'Interior Design', path: '/interior-design', icon: <Box size={20} /> },
    { name: 'Internships', path: '/internships', icon: <Briefcase size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={20} /> }
  ];

  const isActive = (path) => location.pathname === path;

  const dockItems = navLinks.map(link => {
    const active = isActive(link.path);
    return {
      label: link.name,
      icon: link.icon,
      onClick: () => navigate(link.path),
      className: active ? 'bg-orange-500/20 border-orange-500/50 text-orange-400' : ''
    };
  });

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg py-3 border-b border-white/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1600px] px-4 lg:px-10 2xl:px-16 mx-auto">
        <div className="flex justify-between items-center gap-8">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img loading="lazy" src="/ashervisionlogo.png" alt="ASHERVISION Logo" className="h-10 md:h-14 object-contain mix-blend-screen" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-end gap-1 flex-1">
            {navLinks.map((link) => {
              if (link.name === 'Contact') return null; // Rendered separately
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive(link.path) 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <Link
              to="/contact"
              className="text-sm font-bold px-6 py-2.5 ml-2 rounded-full transition-all duration-300 bg-orange-500 text-white hover:bg-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.4)] shrink-0"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4 px-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${
                isActive(link.path) ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md' : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
