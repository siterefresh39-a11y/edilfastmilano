import { useEffect, useRef, useState } from 'react';
import { Building, Hammer, Palette, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ServiziPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Building,
      title: 'Costruzioni',
      description: 'Edifici residenziali e commerciali di prestigio con tecnologie all\'avanguardia',
      delay: 0
    },
    {
      icon: Hammer,
      title: 'Ristrutturazioni',
      description: 'Rinnovo completo di spazi esistenti con design moderno e funzionale',
      delay: 200
    },
    {
      icon: Palette,
      title: 'Design & Planning',
      description: 'Progettazione architettonica personalizzata e consulenza specializzata',
      delay: 400
    },
    {
      icon: Shield,
      title: 'Manutenzione',
      description: 'Servizi di manutenzione preventiva e correttiva per durabilità nel tempo',
      delay: 600
    }
  ];

  return (
    <div className="relative">
      <Navigation />
      
      <main className="pt-32">
        <section
          ref={sectionRef}
          className="min-h-screen bg-accent/30 flex items-center py-24"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`text-center mb-20 transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <h1 className="text-5xl lg:text-6xl font-light text-secondary mb-6">
                I Nostri
                <span className="block text-primary font-medium">Servizi</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Offriamo soluzioni complete per ogni esigenza edilizia, 
                dalla progettazione alla realizzazione finale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${service.delay}ms` }}
                >
                  <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-muted rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 Edil Fast Milano. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServiziPage;