import { useEffect, useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      <div className="absolute inset-0 bg-no-repeat transition-all duration-1000 ease-out
                      bg-cover bg-[center_top_10%] 
                      md:bg-cover md:bg-[center_top_5%]
                      lg:bg-cover lg:bg-[center_top]
                      mobile:bg-contain mobile:bg-[center_top_20%]" 
            style={{
              backgroundImage: `url(/lovable-uploads/69e8ec4d-7f2e-4387-a5e0-facf174a7b69.png)`,
              opacity: opacity,
              transform: `scale(${scale})`
            }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>
      
      
      {/* Testo e pulsanti principali */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-36 pt-24 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
          Ristrutturazioni a Milano
        </h1>
        <p className="text-base md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
          Bagni, cucine e appartamenti. Sopralluogo e preventivo gratuiti.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="tel:+393515663803"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg shadow-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Chiama ora
          </a>
          <Link
            to="/contatti#contact-form"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-secondary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-lg transition-colors"
          >
            Richiedi preventivo gratuito
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden" style={{
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
