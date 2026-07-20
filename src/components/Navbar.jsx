import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Scale, Cpu, Palette, Box, GraduationCap, Briefcase, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MagnificationDock } from './MagnificationDock';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={22} /> },
    { name: 'Legal', path: '/legal', icon: <Scale size={22} /> },
    { name: 'Tech', path: '/technology', icon: <Cpu size={22} /> },
    { name: 'Creative', path: '/creative', icon: <Palette size={22} /> },
    { name: 'Interior Design', path: '/interior-design', icon: <Box size={22} /> },
    { name: 'Courses', path: '/courses', icon: <GraduationCap size={22} /> },
    { name: 'Internships', path: '/internships', icon: <Briefcase size={22} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={22} /> }
  ];

  const dockItems = navLinks.map(link => {
    const isActive = location.pathname === link.path;
    return {
      label: link.name,
      icon: link.icon,
      onClick: () => navigate(link.path),
      className: isActive ? 'bg-orange-500/20 border-orange-500/50 text-orange-400' : ''
    };
  });

  return (
    <>
      {/* Top Navbar */}
      <nav className={`fixed top-0 w-full z-[90] transition-all duration-300 ${isScrolled ? 'py-4 bg-[#050b14]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img loading="lazy" src="/ashervisionlogo.png" alt="ASHERVISION Logo" className="h-10 md:h-12 object-contain mix-blend-screen" />
            </Link>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-all transform hover:-translate-y-0.5 border border-orange-400/50">
                Get in Touch
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white focus:outline-none" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] border-b border-white/10 shadow-2xl' : 'max-h-0'}`}>
          <div className="bg-[#050b14]/95 backdrop-blur-xl px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`px-4 py-3 rounded-xl text-base font-bold transition-colors flex items-center gap-3 ${isActive ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
            <Link 
              to="/contact" 
              className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-center px-6 py-4 rounded-xl shadow-lg shadow-orange-500/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Floating Dock - Hidden on Mobile, Visible on Desktop */}
      <div className="hidden lg:block fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]">
        <MagnificationDock 
          items={dockItems} 
          panelHeight={64}
          baseItemSize={48}
          magnification={70}
        />
      </div>
    </>
  );
};

export default Navbar;

