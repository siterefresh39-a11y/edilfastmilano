import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);

      // Update active section based on scroll position
      const sections = ['home', 'chi-siamo', 'servizi', 'progetti', 'contatti'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'chi-siamo', label: 'Chi Siamo' },
    { id: 'servizi', label: 'Servizi' },
    { id: 'progetti', label: 'Progetti' },
    { id: 'contatti', label: 'Contatti' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out",
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-0"
      )}
    >
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-full shadow-lg px-8 py-3">
        <div className="flex items-center justify-center space-x-8">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full",
                  "hover:text-primary hover:bg-white/10",
                  activeSection === item.id
                    ? "text-primary bg-white/15"
                    : "text-secondary"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-secondary p-2 rounded-full hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;