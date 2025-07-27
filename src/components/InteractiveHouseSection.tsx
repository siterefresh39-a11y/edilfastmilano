import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hammer, Leaf, Home, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Pin {
  id: string;
  x: number; // percentuale dalla sinistra
  y: number; // percentuale dall'alto
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  link: string;
}

const pins: Pin[] = [
  {
    id: '1',
    x: 25,
    y: 30,
    title: 'Progettazione 3D',
    description: 'Utilizziamo tecnologie avanzate per la progettazione tridimensionale, permettendo di visualizzare ogni dettaglio prima della costruzione.',
    icon: Hammer,
    link: '/progettazione'
  },
  {
    id: '2', 
    x: 50,
    y: 20,
    title: 'Materiali Sostenibili',
    description: 'Selezioniamo materiali eco-compatibili e di alta qualità per garantire efficienza energetica e durata nel tempo.',
    icon: Leaf,
    link: '/materiali'
  },
  {
    id: '3',
    x: 75,
    y: 35,
    title: 'Smart Technology',
    description: 'Integriamo sistemi domotici avanzati per il controllo intelligente di illuminazione, climatizzazione e sicurezza.',
    icon: Home,
    link: '/smart-tech'
  },
  {
    id: '4',
    x: 30,
    y: 60,
    title: 'Efficienza Energetica',
    description: 'Ogni progetto è ottimizzato per il massimo risparmio energetico con soluzioni innovative e certificazioni green.',
    icon: Zap,
    link: '/efficienza'
  },
  {
    id: '5',
    x: 70,
    y: 65,
    title: 'Tempi Ridotti',
    description: 'Il nostro metodo EDIL FAST garantisce tempi di realizzazione ridotti del 40% rispetto ai metodi tradizionali.',
    icon: Clock,
    link: '/tempi'
  }
];

const InteractiveHouseSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            L'Esperienza EDIL FAST
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scopri come trasformiamo le tue idee in realtà attraverso tecnologie innovative 
            e un approccio all'avanguardia
          </p>
        </div>

        <div 
          className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[4/3] cursor-none"
          onMouseMove={handleMouseMove}
        >
          {/* Casa centrale */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-full max-w-2xl aspect-square"
              animate={{
                rotateY: (mousePosition.x - 50) * 0.1,
                rotateX: (mousePosition.y - 50) * -0.05,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img 
                src="/lovable-uploads/3901b7c0-4d51-4c4c-be57-f18c9ea1fb35.png"
                alt="Progetto EDIL FAST"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Pin interattivi */}
          {pins.map((pin) => (
            <Link 
              key={pin.id}
              to={pin.link}
              className="absolute z-10 block"
              style={{
                left: `${pin.x}%`,
                top: `${pin.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                {/* Pin moderno con effetto glass e breathing */}
                <motion.div 
                  className="relative w-12 h-12 rounded-full cursor-pointer group"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 20px rgba(255, 255, 255, 0.3)",
                      "0 0 30px rgba(255, 255, 255, 0.5)", 
                      "0 0 20px rgba(255, 255, 255, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 40px rgba(255, 255, 255, 0.7)"
                  }}
                >
                  {/* Background glass effect */}
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 shadow-2xl" />
                  
                  {/* Icona */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {(() => {
                      const IconComponent = pin.icon;
                      return <IconComponent size={20} className="text-white/90 stroke-[1.5]" />;
                    })()}
                  </div>
                  
                  {/* Subtle glow */}
                  <div className="absolute inset-0 rounded-full bg-white/5 blur-sm group-hover:bg-white/10 transition-all duration-300" />
                </motion.div>
              </motion.div>
            </Link>
          ))}

        </div>

        {/* Istruzioni aggiornate */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Clicca sui pin per scoprire nel dettaglio i punti di forza del nostro metodo
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHouseSection;