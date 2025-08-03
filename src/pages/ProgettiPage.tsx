import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Zap, Leaf, Clock, Hammer } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Project {
  id: string;
  x: number; // percentuale dalla sinistra
  y: number; // percentuale dall'alto
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  year: string;
}

const projects: Project[] = [
  {
    id: '1',
    x: 25,
    y: 30,
    title: 'Residence Porta Nuova',
    description: 'Complesso residenziale di lusso con tecnologie smart home e certificazione LEED Gold',
    icon: Building,
    category: 'Residenziale',
    year: '2024'
  },
  {
    id: '2', 
    x: 45,
    y: 25,
    title: 'Torre Sustainable Energy',
    description: 'Edificio per uffici 100% autonomo energeticamente con pannelli solari integrati',
    icon: Zap,
    category: 'Commerciale',
    year: '2023'
  },
  {
    id: '3',
    x: 65,
    y: 35,
    title: 'Eco Village Navigli',
    description: 'Quartiere sostenibile con materiali riciclati e sistema di raccolta acqua piovana',
    icon: Leaf,
    category: 'Residenziale',
    year: '2023'
  },
  {
    id: '4',
    x: 35,
    y: 55,
    title: 'Fast Build Brera',
    description: 'Ristrutturazione completata in tempi record utilizzando il metodo EDIL FAST',
    icon: Clock,
    category: 'Ristrutturazione',
    year: '2024'
  },
  {
    id: '5',
    x: 75,
    y: 60,
    title: 'Milano Innovation Hub',
    description: 'Centro tecnologico con spazi flessibili e sistemi domotici avanzati',
    icon: Hammer,
    category: 'Commerciale',
    year: '2023'
  },
  {
    id: '6',
    x: 55,
    y: 70,
    title: 'Green Residences Sud',
    description: 'Complesso abitativo con giardini verticali e sistemi geotermici',
    icon: Leaf,
    category: 'Residenziale',
    year: '2024'
  }
];

const ProgettiPage = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative bg-background">
      <Navigation />
      
      <main className="pt-16 min-h-screen bg-background">
        {/* Header Section */}
        <div className="text-center py-16 px-6">
          <motion.h1 
            className="text-5xl lg:text-6xl font-light text-secondary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I Nostri
            <span className="block text-primary font-medium">Progetti</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Esplora i nostri progetti realizzati in tutta Milano. 
            Passa il mouse sui pin per scoprire i dettagli di ogni realizzazione.
          </motion.p>
        </div>

        {/* Interactive Map Section */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <motion.div 
            className="relative w-full aspect-[4/3] max-h-[80vh]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            onMouseMove={handleMouseMove}
          >
            {/* Milano Map */}
            <div className="absolute inset-0">
              <img 
                src="/lovable-uploads/b37da651-34fa-4a23-a57d-a86da509e8bc.png"
                alt="Mappa illustrata di Milano"
                className="w-full h-full object-cover"
              />
              
              {/* Fade effect on borders */}
              <div className="absolute inset-0 pointer-events-none" 
                style={{
                  background: `
                    linear-gradient(to right, transparent 0%, transparent 5%, transparent 95%, rgba(248, 250, 252, 0.8) 100%),
                    linear-gradient(to bottom, transparent 0%, transparent 5%, transparent 95%, rgba(248, 250, 252, 0.8) 100%),
                    linear-gradient(to left, transparent 0%, transparent 5%, transparent 95%, rgba(248, 250, 252, 0.8) 100%),
                    linear-gradient(to top, transparent 0%, transparent 5%, transparent 95%, rgba(248, 250, 252, 0.8) 100%)
                  `
                }}
              />
            </div>

            {/* Interactive Pins */}
            {projects.map((project) => (
              <div
                key={project.id}
                className="absolute z-10"
                style={{
                  left: `${project.x}%`,
                  top: `${project.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <motion.div
                  className="relative w-8 h-8 cursor-pointer group"
                  animate={{
                    scale: hoveredProject === project.id ? 1.15 : [1, 1.05, 1],
                  }}
                  transition={{
                    scale: hoveredProject === project.id ? { duration: 0.2 } : {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{
                    scale: 1.15,
                  }}
                >
                  {/* Pin Background with Glass Effect */}
                  <div className="absolute inset-0 rounded-full bg-secondary/90 backdrop-blur-md border-2 border-secondary shadow-lg">
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-full transition-all duration-300"
                      style={{
                        boxShadow: hoveredProject === project.id 
                          ? '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)'
                          : '0 0 10px rgba(0, 0, 0, 0.3)'
                      }}
                    />
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {(() => {
                      const IconComponent = project.icon;
                      return (
                        <IconComponent 
                          size={16} 
                          className="text-white stroke-[1.5] transition-colors duration-300" 
                        />
                      );
                    })()}
                  </div>
                </motion.div>
              </div>
            ))}

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredProject && (
                <motion.div
                  className="fixed z-50 pointer-events-none"
                  style={{
                    left: mousePosition.x + 20,
                    top: mousePosition.y - 10,
                  }}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/30 max-w-sm">
                    {(() => {
                      const project = projects.find(p => p.id === hoveredProject);
                      if (!project) return null;
                      
                      return (
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-muted rounded-lg flex items-center justify-center">
                              {(() => {
                                const IconComponent = project.icon;
                                return <IconComponent size={16} className="text-white" />;
                              })()}
                            </div>
                            <div>
                              <h3 className="font-semibold text-secondary text-sm">
                                {project.title}
                              </h3>
                              <div className="flex gap-2 text-xs text-muted-foreground">
                                <span>{project.category}</span>
                                <span>•</span>
                                <span>{project.year}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      );
                    })()}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Legend */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-lg border border-border/20">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-secondary border border-secondary"></div>
                <span className="text-sm text-muted-foreground">Progetti Realizzati</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Passa il mouse sui pin per maggiori dettagli
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgettiPage;