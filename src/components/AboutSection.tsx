import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="chi-siamo"
      ref={sectionRef}
      className="min-h-screen bg-background flex items-center py-32"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div
            className={`flex-1 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-secondary mb-6 md:mb-8 leading-tight">
              Chi
              <span className="block text-primary font-medium">Siamo</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Edil Fast Milano rappresenta l'eccellenza nell'edilizia moderna, 
                combinando tradizione artigianale e innovazione tecnologica per 
                creare spazi architettonici di prestigio.
              </p>
              <p>
                Con oltre 20 anni di esperienza nel settore, ci specializziamo 
                in progetti residenziali e commerciali di alta gamma, 
                garantendo qualità, tempistiche precise e design all'avanguardia.
              </p>
              <p>
                La nostra filosofia si basa sulla ricerca dell'eccellenza, 
                l'attenzione ai dettagli e la soddisfazione totale del cliente.
              </p>
            </div>
          </div>

          <div
            className={`w-full lg:w-80 transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-50 rounded-3xl overflow-hidden shadow-2xl max-w-80 mx-auto">
                <div className="absolute inset-4 bg-orange-50/80 backdrop-blur-sm border border-orange-200/40 rounded-2xl flex items-center justify-center p-6">
                  <img 
                    src="/lovable-uploads/012fb361-4926-4947-8016-0db47d733f90.png"
                    alt="EDIL FAST MILANO Logo"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-400 rounded-full opacity-20" />
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-teal-600 rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;