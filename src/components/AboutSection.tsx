const AboutSection = () => {
  return (
    <section
      id="chi-siamo"
      className="py-16 md:py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-2">
                Chi Siamo
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
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

          {/* Logo */}
          <div className="order-1 lg:order-2">
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-card border border-border rounded-2xl p-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/012fb361-4926-4947-8016-0db47d733f90.png"
                  alt="EDIL FAST MILANO Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;