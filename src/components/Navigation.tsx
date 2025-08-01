import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Se non siamo nella home page, il menu è sempre visibile
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    // Solo nella home page, il menu appare con lo scroll
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/servizi', label: 'Servizi' },
    { path: '/progetti', label: 'Progetti' },
    { path: '/social', label: 'Social' },
    { path: '/contatti', label: 'Contatti' },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out",
          isVisible 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0"
        )}
      >
        <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-full shadow-lg px-4 md:px-8 py-3">
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full",
                    "hover:text-primary hover:bg-white/10",
                    location.pathname === item.path
                      ? "text-primary bg-white/15"
                      : "text-secondary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-secondary p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-lg font-medium tracking-wide transition-all duration-300 rounded-xl text-center",
                    "hover:bg-primary/10 hover:text-primary",
                    location.pathname === item.path
                      ? "text-primary bg-primary/15 font-semibold"
                      : "text-secondary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;