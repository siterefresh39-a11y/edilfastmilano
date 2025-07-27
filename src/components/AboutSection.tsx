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
      className="min-h-screen bg-background flex items-center py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-5xl lg:text-6xl font-light text-secondary mb-8 leading-tight">
              Chi
              <span className="block text-primary font-medium">Siamo</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
            className={`transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-light mb-4">20+</div>
                    <div className="text-sm tracking-wider">ANNI DI ESPERIENZA</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-20" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;