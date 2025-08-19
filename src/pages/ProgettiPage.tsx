import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Zap, Leaf, Clock, Hammer, TrendingUp, Calendar, Euro, X, ChevronLeft, ChevronRight, MapPin, Construction } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
interface Project {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
  year: string;
  area: string;
  duration: string;
  investment: string;
  valueIncrease: string;
  roi: string;
  location: string;
  gallery: string[];
  features: string[];
  fullDescription: string;
  client: string;
  challenges: string[];
  isPlaceholder?: boolean;
}
const projects: Project[] = [{
  id: '1',
  title: 'Ristrutturazione Bagno Premium',
  description: 'Trasformazione completa di bagno con finiture di pregio, doppio lavabo e cabina doccia in cristallo',
  beforeImage: '/lovable-uploads/c15b2e02-5ad6-4a92-badf-34df1fda79ed.png',
  afterImage: '/lovable-uploads/7af50e1d-329a-4409-9f15-dfbe30a8643f.png',
  category: 'Bagno Premium',
  year: '2024',
  area: '12 m²',
  duration: '3 settimane',
  investment: '€18.000',
  valueIncrease: '€28.000',
  roi: '+55%',
  location: 'Residenza privata',
  gallery: ['/lovable-uploads/c15b2e02-5ad6-4a92-badf-34df1fda79ed.png', '/lovable-uploads/7af50e1d-329a-4409-9f15-dfbe30a8643f.png'],
  features: ['Rivestimenti in gres effetto marmo', 'Doppio lavabo con top in legno', 'Cabina doccia su misura', 'Illuminazione LED integrata', 'Termoarredo di design'],
  fullDescription: 'Completa ristrutturazione di un bagno principale con demolizione e ricostruzione totale. Il progetto ha previsto la riorganizzazione degli spazi per ottimizzare la funzionalità, l\'installazione di rivestimenti in gres porcellanato effetto marmo grigio e la realizzazione di un mobile bagno su misura con doppio lavabo. La cabina doccia in cristallo temperato e il sistema di illuminazione LED creano un ambiente moderno e rilassante.',
  client: 'Famiglia privata',
  challenges: ['Rifacimento impianti', 'Coordinamento tempi ristretti', 'Smaltimento materiali', 'Impermeabilizzazione avanzata']
}, {
  id: '2',
  title: 'Progetto Residenziale',
  description: 'Completa trasformazione di camera da letto con ristrutturazione totale, parquet in legno e armadi su misura',
  beforeImage: '/lovable-uploads/e043ab21-2898-4ebc-b299-8bfb4886f621.png',
  afterImage: '/lovable-uploads/6241ae0f-2a26-4e53-860d-8db5b1e1c98c.png',
  category: 'Residenziale',
  year: '2024',
  area: '18 m²',
  duration: '4 settimane',
  investment: '€15.000',
  valueIncrease: '€25.000',
  roi: '+67%',
  location: 'Residenza privata',
  gallery: ['/lovable-uploads/e043ab21-2898-4ebc-b299-8bfb4886f621.png', '/lovable-uploads/6241ae0f-2a26-4e53-860d-8db5b1e1c98c.png'],
  features: ['Demolizione e ricostruzione spazi interni', 'Parquet in legno di alta qualità', 'Armadi su misura a tutta parete', 'Sistema illuminazione LED integrato', 'Impianto elettrico completamente nuovo'],
  fullDescription: 'Completa trasformazione di ambiente residenziale con ristrutturazione totale di camera da letto. Il progetto ha previsto la demolizione e ricostruzione degli spazi interni, installazione di parquet in legno di alta qualità, realizzazione di armadi su misura a tutta parete con sistema di illuminazione LED integrato, e installazione di impianto elettrico completamente nuovo con punti luce moderni e funzionali.',
  client: 'Famiglia privata',
  challenges: ['Coordinamento demolizione e ricostruzione', 'Integrazione sistema elettrico avanzato', 'Realizzazione armadi su misura perfettamente integrati', 'Gestione tempi per minimizzare disagi']
}, {
  id: '3',
  title: 'Trasformazione Camera con Armadi a Ponte',
  description: 'Completa trasformazione da stanza di servizio a camera da letto moderna con armadi a ponte su misura',
  beforeImage: '/lovable-uploads/d48d0757-ef92-4c70-b99c-5a1f521a9cf7.png',
  afterImage: '/lovable-uploads/19ef2037-c5fa-4553-98d9-d0643f1edda1.png',
  category: 'Residenziale',
  year: '2024',
  area: '16 m²',
  duration: '5 settimane',
  investment: '€22.000',
  valueIncrease: '€35.000',
  roi: '+59%',
  location: 'Appartamento privato',
  gallery: ['/lovable-uploads/d48d0757-ef92-4c70-b99c-5a1f521a9cf7.png', '/lovable-uploads/19ef2037-c5fa-4553-98d9-d0643f1edda1.png'],
  features: ['Armadi a ponte su misura in legno', 'Letto integrato con testiera imbottita', 'Parquet in legno pregiato', 'Illuminazione LED incassata', 'Ottimizzazione spazi di storage'],
  fullDescription: 'Straordinaria trasformazione di una stanza di servizio in una camera da letto moderna e funzionale. Il progetto ha previsto la progettazione e realizzazione di armadi a ponte su misura che massimizzano lo spazio disponibile, l\'installazione di parquet in legno di alta qualità e la creazione di un sistema letto integrato con testiera imbottita. L\'illuminazione LED incassata nel soffitto e negli armadi crea un\'atmosfera accogliente e moderna.',
  client: 'Famiglia privata',
  challenges: ['Massimizzazione spazi ridotti', 'Integrazione sistema storage complesso', 'Coordinamento misure su misura', 'Illuminazione LED integrata perfettamente']
}];
const ProjectCard = ({
  project,
  index,
  onOpenModal
}: {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}) => {
  const [sliderValue, setSliderValue] = useState([0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Clean animation function
  const cleanAnimation = useCallback(() => {
    if (animationRef.current) {
      clearInterval(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  // Handle hover animations with proper cleanup
  useEffect(() => {
    if (isDragging) return;

    cleanAnimation();

    if (isHovered) {
      // Animate to 100% on hover
      animationRef.current = setInterval(() => {
        setSliderValue(prev => {
          const newValue = Math.min(prev[0] + 3, 100);
          if (newValue >= 100) {
            if (animationRef.current) {
              clearInterval(animationRef.current);
              animationRef.current = null;
            }
          }
          return [newValue];
        });
      }, 16);
    } else {
      // Animate back to 0% when not hovered
      animationRef.current = setInterval(() => {
        setSliderValue(prev => {
          const newValue = Math.max(prev[0] - 3, 0);
          if (newValue <= 0) {
            if (animationRef.current) {
              clearInterval(animationRef.current);
              animationRef.current = null;
            }
          }
          return [newValue];
        });
      }, 16);
    }

    return cleanAnimation;
  }, [isHovered, isDragging, cleanAnimation]);

  // Cleanup on unmount
  useEffect(() => {
    return cleanAnimation;
  }, [cleanAnimation]);

  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    delay: index * 0.1
  }} className="group" onMouseEnter={() => !isDragging && setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer" onClick={() => onOpenModal(project)}>
        <div className="relative aspect-[4/3] overflow-hidden">
          {project.isPlaceholder ? (
            /* Construction Placeholder */
            <div className="relative w-full h-full bg-muted/20 flex items-center justify-center">
              <div className="text-center">
                <Construction size={64} className="text-muted-foreground/40 mx-auto mb-4" />
                <div className="text-muted-foreground/60 text-sm font-medium">In Costruzione</div>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                  In Preparazione
                </Badge>
              </div>
            </div>
          ) : (
            /* Before/After Images */
            <div className="relative w-full h-full">
              <img src={project.beforeImage} alt={`${project.title} - Prima`} className="absolute inset-0 w-full h-full object-cover" style={{
              clipPath: `polygon(0 0, ${sliderValue[0]}% 0, ${sliderValue[0]}% 100%, 0 100%)`
            }} />
              <img src={project.afterImage} alt={`${project.title} - Dopo`} className="absolute inset-0 w-full h-full object-cover" style={{
              clipPath: `polygon(${sliderValue[0]}% 0, 100% 0, 100% 100%, ${sliderValue[0]}% 100%)`
            }} />
              
              {/* Slider Handle */}
              <div className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-lg z-10 flex items-center justify-center" style={{
              left: `${sliderValue[0]}%`,
              transform: 'translateX(-50%)'
            }}>
                <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-1 h-4 bg-gray-400 rounded-full mx-0.5"></div>
                  <div className="w-1 h-4 bg-gray-400 rounded-full mx-0.5"></div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-sm font-medium">Prima</span>
              </div>
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-sm font-medium">Dopo</span>
              </div>

              {/* Hidden Slider for Interaction */}
              <div className="absolute inset-0">
                <Slider value={sliderValue} onValueChange={setSliderValue} onPointerDown={() => setIsDragging(true)} onPointerUp={() => setIsDragging(false)} max={100} step={1} className="w-full h-full opacity-0 cursor-grab active:cursor-grabbing" />
              </div>

              {/* Value Increase Overlay */}
              <AnimatePresence>
                {isHovered && <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: 20
              }} className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-6">
                    <div className="text-center text-white">
                      <div className="flex items-center gap-2 justify-center mb-2">
                        <TrendingUp size={20} className="text-green-400" />
                        <span className="text-2xl font-bold text-green-400">{project.roi}</span>
                      </div>
                      <div className="text-sm opacity-90">Aumento di valore</div>
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </div>
          )}
        </div>

        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {project.category}
                </span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Building size={16} className="text-primary" />
                <span className="text-muted-foreground">{project.area}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={16} className="text-primary" />
                <span className="text-muted-foreground">{project.duration}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Euro size={16} className="text-primary" />
                <span className="text-muted-foreground">{project.investment}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp size={16} className="text-green-600" />
                <span className="text-green-600 font-medium">{project.valueIncrease}</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-border/50">
            <div className="text-sm text-muted-foreground">
              📍 {project.location}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>;
};
const ProgettiPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };
  return <div className="relative bg-background">
      <Navigation />
      
      <main className="pt-16 min-h-screen bg-background">
        {/* Header Section */}
        <div className="text-center py-16 px-6">
          <motion.h1 className="text-5xl lg:text-6xl font-light text-secondary mb-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            I Nostri
            <span className="block text-primary font-medium">Progetti</span>
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            Scopri le trasformazioni straordinarie dei nostri progetti. 
            Trascina il cursore per vedere il prima e dopo di ogni ristrutturazione.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpenModal={handleOpenModal} />)}
          </div>

          {/* CTA Section */}
          <motion.div className="text-center mt-16" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Trasforma anche tu la tua casa
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ogni progetto inizia con un'idea e si realizza con la nostra esperienza. 
                Contattaci per scoprire come possiamo aumentare il valore della tua proprietà.
              </p>
              <button 
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl font-medium tracking-wide hover:shadow-2xl transition-all duration-300 overflow-hidden"
                onClick={() => navigate('/contatti')}
              >
                <span className="relative z-10">Richiedi Preventivo</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-7xl w-full max-h-[95vh] lg:h-[90vh] p-0 overflow-hidden">
          <DialogDescription className="sr-only">
            Dettagli del progetto di ristrutturazione
          </DialogDescription>
          {selectedProject && <div className="flex flex-col lg:grid lg:grid-cols-2 h-full">
              {/* Image Gallery Section */}
              <div className="relative bg-secondary/5 h-[40vh] lg:h-full">
                <DialogHeader className="absolute top-4 right-4 z-10">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-white/90 hover:bg-white" onClick={() => setSelectedProject(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </DialogHeader>
                
                <div className="relative h-full">
                  {selectedProject.isPlaceholder ? (
                    <div className="w-full h-full flex items-center justify-center bg-muted/10">
                      <div className="text-center">
                        <Construction size={120} className="text-muted-foreground/30 mx-auto mb-6" />
                        <h3 className="text-2xl font-semibold text-muted-foreground/60 mb-2">Contenuto in Preparazione</h3>
                        <p className="text-muted-foreground/50">Questo progetto sarà disponibile presto con foto e dettagli completi.</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img src={selectedProject.gallery[currentImageIndex]} alt={`${selectedProject.title} - Immagine ${currentImageIndex + 1}`} className="w-full h-full object-cover" />
                      
                      {/* Navigation arrows */}
                      {selectedProject.gallery.length > 1 && <>
                          <Button variant="outline" size="sm" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0 bg-white/90 hover:bg-white" onClick={() => setCurrentImageIndex(prev => prev === 0 ? selectedProject.gallery.length - 1 : prev - 1)}>
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="absolute right-4 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0 bg-white/90 hover:bg-white" onClick={() => setCurrentImageIndex(prev => prev === selectedProject.gallery.length - 1 ? 0 : prev + 1)}>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </>}
                      
                      {/* Image indicators */}
                      {selectedProject.gallery.length > 1 && <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {selectedProject.gallery.map((_, index) => <button key={index} className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`} onClick={() => setCurrentImageIndex(index)} />)}
                        </div>}
                    </>
                  )}
                </div>
              </div>

              {/* Content Section with ScrollArea */}
              <div className="flex-1 lg:h-full">
                <ScrollArea className="h-[55vh] lg:h-full">
                  <div className="p-6 lg:p-8 space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {selectedProject.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{selectedProject.year}</span>
                      </div>
                      <DialogTitle className="text-2xl lg:text-3xl font-bold text-secondary mb-4">
                        {selectedProject.title}
                      </DialogTitle>
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{selectedProject.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{selectedProject.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Building className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{selectedProject.area}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Euro className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{selectedProject.investment}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-green-600 font-medium">{selectedProject.roi}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-primary">👤</span>
                          <span>{selectedProject.client}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-3">Caratteristiche Principali</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedProject.features.map((feature, index) => <div key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </div>)}
                      </div>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-3">Sfide Superate</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedProject.challenges.map((challenge, index) => <div key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{challenge}</span>
                          </div>)}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t sticky bottom-0 bg-background/95 backdrop-blur-sm">
                      <Button className="w-full" onClick={() => navigate('/contatti')}>
                        Richiedi Preventivo per Progetto Simile
                      </Button>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>}
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppButton />
    </div>;
};
export default ProgettiPage;