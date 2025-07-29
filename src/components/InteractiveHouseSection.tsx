import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer, Leaf, Home, Zap, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [clickedPin, setClickedPin] = useState<Pin | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAnimating) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handlePinClick = (pin: Pin, e: React.MouseEvent) => {
    e.preventDefault();
    setClickedPin(pin);
    setIsAnimating(true);

    // Navigate after animation completes
    setTimeout(() => {
      navigate(pin.link);
    }, 1800);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      {/* Fade overlay per la transizione */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.3 }}
            className="fixed inset-0 bg-white z-50"
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          animate={{
            opacity: isAnimating ? 0 : 1,
            y: isAnimating ? -20 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            L'Esperienza EDIL FAST
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scopri come trasformiamo le tue idee in realtà attraverso tecnologie innovative 
            e un approccio all'avanguardia
          </p>
        </motion.div>

        <motion.div 
          className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[4/3] cursor-none"
          onMouseMove={handleMouseMove}
          animate={{
            scale: isAnimating ? 2.5 : 1,
            rotateY: isAnimating ? 15 : 0,
            rotateX: isAnimating ? -5 : 0,
          }}
          transition={{ 
            duration: 1.5, 
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Background blur overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-transparent via-white/20 to-white/60 backdrop-blur-sm rounded-lg"
            animate={{
              opacity: isAnimating ? 1 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Casa centrale */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-full max-w-2xl aspect-square"
              animate={{
                rotateY: isAnimating ? 0 : (mousePosition.x - 50) * 0.1,
                rotateX: isAnimating ? 0 : (mousePosition.y - 50) * -0.05,
                scale: isAnimating ? 1.1 : 1,
              }}
              transition={{ 
                type: isAnimating ? "tween" : "spring", 
                stiffness: 50, 
                damping: 15,
                duration: isAnimating ? 1.2 : undefined,
                ease: isAnimating ? [0.25, 0.1, 0.25, 1] : undefined
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.img 
                src="/lovable-uploads/3901b7c0-4d51-4c4c-be57-f18c9ea1fb35.png"
                alt="Progetto EDIL FAST"
                className="w-full h-full object-contain drop-shadow-2xl"
                animate={{
                  filter: isAnimating ? "brightness(1.2) contrast(1.1)" : "brightness(1) contrast(1)",
                }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </div>

          {/* Pin interattivi */}
          {pins.map((pin) => (
            <button
              key={pin.id}
              onClick={(e) => handlePinClick(pin, e)}
              className="absolute z-10 block"
              style={{
                left: `${pin.x}%`,
                top: `${pin.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              disabled={isAnimating}
            >
              <motion.div
                whileHover={!isAnimating ? { scale: 1.1 } : {}}
                whileTap={!isAnimating ? { scale: 0.95 } : {}}
                className="relative"
                animate={{
                  scale: isAnimating && clickedPin?.id === pin.id ? 1.8 : 1,
                  opacity: isAnimating && clickedPin?.id !== pin.id ? 0.3 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Pin moderno con effetto glass e breathing */}
                <motion.div 
                  className="relative w-12 h-12 rounded-full cursor-pointer group"
                  animate={{
                    scale: isAnimating && clickedPin?.id === pin.id 
                      ? [1, 1.2, 1] 
                      : !isAnimating 
                      ? [1, 1.05, 1] 
                      : 1,
                    boxShadow: isAnimating && clickedPin?.id === pin.id
                      ? [
                          "0 0 20px rgba(255, 255, 255, 0.3)",
                          "0 0 60px rgba(255, 255, 255, 0.8)",
                          "0 0 40px rgba(255, 255, 255, 0.6)"
                        ]
                      : !isAnimating
                      ? [
                          "0 0 20px rgba(255, 255, 255, 0.3)",
                          "0 0 30px rgba(255, 255, 255, 0.5)", 
                          "0 0 20px rgba(255, 255, 255, 0.3)"
                        ]
                      : "0 0 20px rgba(255, 255, 255, 0.3)"
                  }}
                  transition={{
                    duration: isAnimating ? 1 : 3,
                    repeat: isAnimating ? 2 : Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={!isAnimating ? {
                    scale: 1.15,
                    boxShadow: "0 0 40px rgba(255, 255, 255, 0.7)"
                  } : {}}
                >
                  {/* Background glass effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 shadow-2xl"
                    animate={{
                      backgroundColor: isAnimating && clickedPin?.id === pin.id 
                        ? "rgba(255, 255, 255, 0.3)" 
                        : "rgba(255, 255, 255, 0.1)",
                      borderColor: isAnimating && clickedPin?.id === pin.id 
                        ? "rgba(255, 255, 255, 0.6)" 
                        : "rgba(255, 255, 255, 0.3)"
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Icona */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {(() => {
                      const IconComponent = pin.icon;
                      return <IconComponent size={20} className="text-white/90 stroke-[1.5]" />;
                    })()}
                  </div>
                  
                  {/* Subtle glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-white/5 blur-sm group-hover:bg-white/10 transition-all duration-300"
                    animate={{
                      backgroundColor: isAnimating && clickedPin?.id === pin.id 
                        ? "rgba(255, 255, 255, 0.2)" 
                        : "rgba(255, 255, 255, 0.05)"
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            </button>
          ))}

          {/* Effetto di luce spotlight */}
          <AnimatePresence>
            {isAnimating && clickedPin && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 3, 4]
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute pointer-events-none"
                style={{
                  left: `${clickedPin.x}%`,
                  top: `${clickedPin.y}%`,
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  filter: 'blur(20px)'
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Istruzioni aggiornate */}
        <motion.div 
          className="text-center mt-12"
          animate={{
            opacity: isAnimating ? 0 : 1,
            y: isAnimating ? 20 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground">
            Clicca sui pin per scoprire nel dettaglio i punti di forza del nostro metodo
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveHouseSection;