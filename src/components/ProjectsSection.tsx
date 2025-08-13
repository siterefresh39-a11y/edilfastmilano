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
      title: 'Progetto Residenziale',
      category: 'Residenziale',
      year: '2024',
      description: 'Completa trasformazione di ambiente residenziale con ristrutturazione totale di camera da letto. Il progetto ha previsto la demolizione e ricostruzione degli spazi interni, installazione di parquet in legno di alta qualità, realizzazione di armadi su misura a tutta parete con sistema di illuminazione LED integrato, e installazione di impianto elettrico completamente nuovo con punti luce moderni.',
      beforeImage: '/lovable-uploads/e043ab21-2898-4ebc-b299-8bfb4886f621.png',
      afterImage: '/lovable-uploads/6241ae0f-2a26-4e53-860d-8db5b1e1c98c.png'
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