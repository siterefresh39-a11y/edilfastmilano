import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const opacity = Math.max(0, 1 - scrollY / 600);
  const scale = Math.max(1, 1 + scrollY / 2000);
  return <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out" style={{
      backgroundImage: `url(/lovable-uploads/df7cdc40-846d-435b-94ad-e7adc8115c0c.png)`,
      opacity: opacity,
      transform: `scale(${scale})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce" style={{
      opacity: opacity
    }}>
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <div className="text-sm font-light tracking-wider">SCROLL</div>
          <div className="w-px h-8 bg-white/60"></div>
          <ChevronDown size={24} className="text-white/80" />
        </div>
      </div>
    </section>;
};
export default HeroSection;