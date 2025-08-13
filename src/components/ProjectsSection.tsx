import { useEffect, useRef, useState } from 'react';

const ProjectsSection = () => {
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

  const projects = [
    {
      title: 'Ristrutturazione Camera da Letto Moderna',
      category: 'Residenziale',
      year: '2024',
      description: 'Trasformazione completa di camera da letto con armadi su misura e parquet',
      beforeImage: '/lovable-uploads/473e2cec-e809-4bbb-9b84-5b8ef7a1a2b5.png',
      afterImage: '/lovable-uploads/243b5db1-cf12-4b29-a8c9-2c2538519289.png'
    },
    {
      title: 'Ristrutturazione Camera con Armadi Integrati',
      category: 'Residenziale', 
      year: '2024',
      description: 'Renovazione camera con soluzioni di storage personalizzate e pavimentazione in legno',
      beforeImage: '/lovable-uploads/193b9d28-2a7e-4284-a0fe-be68e97eac7c.png',
      afterImage: '/lovable-uploads/cb484ba9-08f9-49ab-bc96-f407a0bc4a9e.png'
    },
    {
      title: 'Ristrutturazione Cucina Moderna',
      category: 'Residenziale',
      year: '2024',
      description: 'Completo restyling cucina con design contemporaneo e funzionalità ottimizzate',
      beforeImage: '/lovable-uploads/168b1c0d-0330-4212-80c7-57e78676e204.png',
      afterImage: '/lovable-uploads/089ccc2c-1d21-46d8-883d-03f85be2cd58.png'
    }
  ];

  return (
    <section
      id="progetti"
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
          <h2 className="text-5xl lg:text-6xl font-light text-secondary mb-6">
            I Nostri
            <span className="block text-primary font-medium">Progetti</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Scopri le nostre realizzazioni più prestigiose che definiscono 
            il futuro dell'architettura milanese
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] relative overflow-hidden">
                  {/* Before Image */}
                  <img 
                    src={project.beforeImage} 
                    alt={`${project.title} - Prima`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* After Image */}
                  <img 
                    src={project.afterImage} 
                    alt={`${project.title} - Dopo`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-light mb-2">{project.year}</div>
                      <div className="text-sm tracking-wider">{project.category.toUpperCase()}</div>
                      <div className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Passa il mouse per vedere il dopo
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-muted text-white rounded-2xl font-medium tracking-wide hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Visualizza Tutti i Progetti</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;