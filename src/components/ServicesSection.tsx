import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

const ServicesSection = () => {
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
      image: '/lovable-uploads/36938368-ad52-4a38-b70d-1ae8cda58b44.png',
      link: '/cucina',
      delay: 0
    },
    {
      title: 'Living',
      description: 'Trasformazione del soggiorno in spazi eleganti e accoglienti',
      image: '/lovable-uploads/9ff1f306-f456-4b2a-a066-af82388974f8.png',
      link: '/progettazione',
      delay: 200
    },
    {
      title: 'Bagno',
      description: 'Ristrutturazione bagni con materiali di pregio e design contemporaneo',
      image: '/lovable-uploads/93914c07-47ca-4dec-bc2d-80e52e4d99ea.png',
      link: '/materiali',
      delay: 400
    },
    {
      title: 'Camera',
      description: 'Creazione di camere da letto rilassanti e personalizzate',
      image: '/lovable-uploads/52676327-6506-4e69-9589-d64478bf5833.png',
      link: '/efficienza',
      delay: 600
    },
    {
      title: 'Cantina',
      description: 'Realizzazione spazi interrati e cantine di design',
      image: '/lovable-uploads/df7cdc40-846d-435b-94ad-e7adc8115c0c.png',
      link: null,
      delay: 800,
      comingSoon: true
    }
  ];

  return (
    <section
      id="servizi"
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
          <h2 className="text-5xl lg:text-6xl font-light text-secondary mb-6">
            I Nostri
            <span className="block text-primary font-medium">Servizi</span>
          </h2>
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
              {room.link ? (
                <Link
                  to={room.link}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 h-full block cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 p-6">
                    <div className="aspect-video mb-4 rounded-xl overflow-hidden bg-gray-100">
                      <img 
                        src={room.image} 
                        alt={room.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
              ) : (
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 h-full cursor-default">
                  {room.comingSoon && (
                    <div className="absolute inset-0 bg-black/50 z-20 flex items-center justify-center rounded-3xl">
                      <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                        Work in Progress
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 p-6">
                    <div className="aspect-video mb-4 rounded-xl overflow-hidden bg-gray-100">
                      <img 
                        src={room.image} 
                        alt={room.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                      {room.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {room.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;