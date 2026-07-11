import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Legal', path: '/legal' },
    { name: 'Tech', path: '/technology' },
    { name: 'Courses', path: '/courses' },
    { name: 'Creative', path: '/creative' },
    { name: 'Interior Design', path: '/interior-design' },
    { name: 'Internships', path: '/internships' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

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
            <img src="/logo.png" alt="ASHERVISION Logo" className="h-10 md:h-14 object-contain mix-blend-screen" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-end gap-1 2xl:gap-3 flex-1 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] 2xl:text-sm font-bold px-3 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                  link.name === 'Contact'
                    ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md ml-2'
                    : isActive(link.path) 
                      ? 'text-white bg-white/10 border border-white/20 shadow-inner' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
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
              className={`block px-4 py-3 rounded-xl font-bold transition-colors ${
                isActive(link.path) ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md' : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile CTA removed */}
        </div>
      )}
    </header>
  );
};

export default Header;

