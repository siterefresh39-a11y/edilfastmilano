import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ContattiPage = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefono',
      value: '+39 02 1234 5678',
      action: 'tel:+390212345678'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@edilfastmilano.it',
      action: 'mailto:info@edilfastmilano.it'
    },
    {
      icon: MapPin,
      title: 'Indirizzo',
      value: 'Via Brera 10, 20121 Milano',
      action: null
    },
    {
      icon: Clock,
      title: 'Orari',
      value: 'Lun-Ven 8:00-18:00',
      action: null
    }
  ];

  return (
    <div className="relative">
      <Navigation />
      
      <main className="pt-32">
        <section
          ref={sectionRef}
          className="min-h-screen bg-gradient-to-br from-secondary/5 to-primary/10 flex items-center py-24"
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
                Inizia Ora
                <span className="block text-primary font-medium">Il Tuo Progetto</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Contattaci per una consulenza gratuita e trasforma la tua visione 
                in realtà architettonica
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.title}
                      className={`flex items-center space-x-6 transition-all duration-700 ${
                        isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-12'
                      }`}
                      style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-muted rounded-2xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-secondary mb-1">
                          {info.title}
                        </h3>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-border/50">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                          placeholder="Il tuo nome"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">
                          Cognome *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                          placeholder="Il tuo cognome"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                        placeholder="la-tua-email@esempio.it"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                        placeholder="+39 123 456 7890"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Messaggio *
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                        placeholder="Descrivi il tuo progetto..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-muted text-white rounded-2xl font-medium tracking-wide hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10">Invia Richiesta</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>
                  </form>
                </div>
              </div>
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

export default ContattiPage;