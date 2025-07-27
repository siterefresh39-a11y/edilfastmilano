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
      title: 'Residence Milano Centro',
      category: 'Residenziale',
      year: '2024',
      description: 'Complesso residenziale di lusso nel cuore di Milano'
    },
    {
      title: 'Torre Corporate',
      category: 'Commerciale',
      year: '2023',
      description: 'Edificio per uffici con design architettonico innovativo'
    },
    {
      title: 'Villa Moderna',
      category: 'Residenziale',
      year: '2023',
      description: 'Villa unifamiliare con tecnologie smart home'
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
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 group-hover:from-primary/60 group-hover:to-secondary/60 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-light mb-2">{project.year}</div>
                      <div className="text-sm tracking-wider">{project.category.toUpperCase()}</div>
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