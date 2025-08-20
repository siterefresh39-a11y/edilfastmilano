import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Sofa, Bath, Bed, Warehouse, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import WhatsAppButton from '@/components/WhatsAppButton';

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

  const rooms = [
    {
      title: 'Cucina',
      description: 'Progettazione e ristrutturazione cucine moderne e funzionali',
      icon: ChefHat,
      link: '/cucina',
      delay: 0
    },
    {
      title: 'Living',
      description: 'Trasformazione del soggiorno in spazi eleganti e accoglienti',
      icon: Sofa,
      link: '/progettazione',
      delay: 200
    },
    {
      title: 'Bagno',
      description: 'Ristrutturazione bagni con materiali di pregio e design contemporaneo',
      icon: Bath,
      link: '/materiali',
      delay: 400
    },
    {
      title: 'Camera',
      description: 'Creazione di camere da letto rilassanti e personalizzate',
      icon: Bed,
      link: '/camera',
      delay: 600
    },
    {
      title: 'Cantina',
      description: 'Realizzazione spazi interrati e cantine di design',
      icon: Warehouse,
      link: '/cantina',
      delay: 800
    }
  ];

  return (
    <div className="relative bg-background">
      <Navigation />
      
      <main className="pt-16">
        <section
          ref={sectionRef}
          className="min-h-screen bg-background flex items-center py-24"
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {rooms.map((room, index) => (
                <div
                  key={room.title}
                  className={`transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${room.delay}ms` }}
                >
                  <Link
                    to={room.link}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 h-full block cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 p-6">
                      <div className="aspect-video mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/50">
                        <room.icon 
                          size={64}
                          className="text-primary group-hover:text-secondary transition-colors duration-300"
                        />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                        {room.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {room.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sezione Social CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="mb-8">
                <Instagram size={48} className="text-primary mx-auto mb-4" />
                <h2 className="text-3xl lg:text-4xl font-light text-secondary mb-4">
                  Vuoi vedere più progetti?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Scopri tutti i nostri lavori completati sui nostri canali social. 
                  Troverai tante ispirazioni e idee per la tua casa.
                </p>
              </div>
              
              <Link to="/social">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 px-12 py-6 text-lg font-semibold shadow-xl group"
                >
                  <Instagram className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Visita i Nostri Social
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiziPage;