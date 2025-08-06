import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Zap, Leaf, Clock, Hammer, TrendingUp, Calendar, Euro } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';

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
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Attico Porta Nuova',
    description: 'Ristrutturazione completa di attico con vista skyline, tecnologie smart home e finiture di lusso',
    beforeImage: '/lovable-uploads/012fb361-4926-4947-8016-0db47d733f90.png',
    afterImage: '/lovable-uploads/20b3c721-294a-443e-ba2d-afa196163db2.png',
    category: 'Residenziale Premium',
    year: '2024',
    area: '180 m²',
    duration: '4 mesi',
    investment: '€280.000',
    valueIncrease: '€420.000',
    roi: '+50%',
    location: 'Porta Nuova, Milano'
  },
  {
    id: '2',
    title: 'Villa Moderna Brianza',
    description: 'Trasformazione completa di villa anni \'70 in moderna residenza eco-sostenibile',
    beforeImage: '/lovable-uploads/36938368-ad52-4a38-b70d-1ae8cda58b44.png',
    afterImage: '/lovable-uploads/3901b7c0-4d51-4c4c-be57-f18c9ea1fb35.png',
    category: 'Residenziale',
    year: '2023',
    area: '350 m²',
    duration: '6 mesi',
    investment: '€450.000',
    valueIncrease: '€650.000',
    roi: '+44%',
    location: 'Monza e Brianza'
  },
  {
    id: '3',
    title: 'Loft Industriale Navigli',
    description: 'Conversione di ex-fabbrica in lussuoso loft con design industriale contemporaneo',
    beforeImage: '/lovable-uploads/4daa0b20-6767-4ff7-a2f4-0d8a007514e7.png',
    afterImage: '/lovable-uploads/52676327-6506-4e69-9589-d64478bf5833.png',
    category: 'Conversione',
    year: '2024',
    area: '220 m²',
    duration: '5 mesi',
    investment: '€320.000',
    valueIncrease: '€480.000',
    roi: '+50%',
    location: 'Navigli, Milano'
  },
  {
    id: '4',
    title: 'Appartamento Brera',
    description: 'Ristrutturazione conservativa con materiali di pregio e tecnologie integrate',
    beforeImage: '/lovable-uploads/819c5323-6436-4de6-9198-c17175c038bf.png',
    afterImage: '/lovable-uploads/864e5ad9-2366-4aba-824b-9a51a154d926.png',
    category: 'Ristrutturazione',
    year: '2023',
    area: '120 m²',
    duration: '3 mesi',
    investment: '€180.000',
    valueIncrease: '€260.000',
    roi: '+44%',
    location: 'Brera, Milano'
  },
  {
    id: '5',
    title: 'Penthouse Citylife',
    description: 'Creazione di penthouse di lusso con terrazza panoramica e domotica avanzata',
    beforeImage: '/lovable-uploads/8c69dd49-3b04-426a-addf-0157c027eb9a.png',
    afterImage: '/lovable-uploads/93914c07-47ca-4dec-bc2d-80e52e4d99ea.png',
    category: 'Luxury',
    year: '2024',
    area: '280 m²',
    duration: '7 mesi',
    investment: '€550.000',
    valueIncrease: '€850.000',
    roi: '+55%',
    location: 'CityLife, Milano'
  },
  {
    id: '6',
    title: 'Casa Storica Centro',
    description: 'Restauro conservativo di palazzo storico con modernizzazione degli impianti',
    beforeImage: '/lovable-uploads/9ff1f306-f456-4b2a-a066-af82388974f8.png',
    afterImage: '/lovable-uploads/a40ad856-6cad-4b3d-8aa6-0c9ef4e19ff6.png',
    category: 'Restauro',
    year: '2023',
    area: '200 m²',
    duration: '8 mesi',
    investment: '€380.000',
    valueIncrease: '€520.000',
    roi: '+37%',
    location: 'Centro Storico, Milano'
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [sliderValue, setSliderValue] = useState([0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => !isDragging && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated slider value for hover effect */}
      <motion.div
        animate={isHovered && !isDragging ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
        onAnimationComplete={() => {
          if (isHovered && !isDragging) {
            // Animate slider to 100% on hover
            const interval = setInterval(() => {
              setSliderValue(prev => {
                const newValue = Math.min(prev[0] + 2, 100);
                if (newValue >= 100) {
                  clearInterval(interval);
                }
                return [newValue];
              });
            }, 16);
          } else if (!isHovered && !isDragging) {
            // Animate back to 0% when not hovered
            const interval = setInterval(() => {
              setSliderValue(prev => {
                const newValue = Math.max(prev[0] - 2, 0);
                if (newValue <= 0) {
                  clearInterval(interval);
                }
                return [newValue];
              });
            }, 16);
          }
        }}
      />
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Before/After Images */}
          <div className="relative w-full h-full">
            <img
              src={project.beforeImage}
              alt={`${project.title} - Prima`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                clipPath: `polygon(0 0, ${sliderValue[0]}% 0, ${sliderValue[0]}% 100%, 0 100%)`
              }}
            />
            <img
              src={project.afterImage}
              alt={`${project.title} - Dopo`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                clipPath: `polygon(${sliderValue[0]}% 0, 100% 0, 100% 100%, ${sliderValue[0]}% 100%)`
              }}
            />
            
            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-lg z-10 flex items-center justify-center"
              style={{ left: `${sliderValue[0]}%`, transform: 'translateX(-50%)' }}
            >
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
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                onPointerDown={() => setIsDragging(true)}
                onPointerUp={() => setIsDragging(false)}
                max={100}
                step={1}
                className="w-full h-full opacity-0 cursor-grab active:cursor-grabbing"
              />
            </div>

            {/* Value Increase Overlay */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-6"
                >
                  <div className="text-center text-white">
                    <div className="flex items-center gap-2 justify-center mb-2">
                      <TrendingUp size={20} className="text-green-400" />
                      <span className="text-2xl font-bold text-green-400">{project.roi}</span>
                    </div>
                    <div className="text-sm opacity-90">Aumento di valore</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
    </motion.div>
  );
};

const ProgettiPage = () => {
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
            Scopri le trasformazioni straordinarie dei nostri progetti. 
            Trascina il cursore per vedere il prima e dopo di ogni ristrutturazione.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Trasforma anche tu la tua casa
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ogni progetto inizia con un'idea e si realizza con la nostra esperienza. 
                Contattaci per scoprire come possiamo aumentare il valore della tua proprietà.
              </p>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl font-medium tracking-wide hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Richiedi Consulenza Gratuita</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgettiPage;