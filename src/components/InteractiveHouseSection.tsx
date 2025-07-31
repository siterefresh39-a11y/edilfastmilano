import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home } from 'lucide-react';
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
    x: 45,
    y: 35,
    title: 'Progettazione 3D',
    description: 'Utilizziamo tecnologie avanzate per la progettazione tridimensionale, permettendo di visualizzare ogni dettaglio prima della costruzione.',
    icon: Home,
    link: '/progettazione'
  },
  {
    id: '2', 
    x: 60,
    y: 20,
    title: 'Materiali Sostenibili',
    description: 'Selezioniamo materiali eco-compatibili e di alta qualità per garantire efficienza energetica e durata nel tempo.',
    icon: Home,
    link: '/materiali'
  },
  {
    id: '3',
    x: 25,
    y: 55,
    title: 'Efficienza Energetica',
    description: 'Ogni progetto è ottimizzato per il massimo risparmio energetico con soluzioni innovative e certificazioni green.',
    icon: Home,
    link: '/efficienza'
  },
  {
    id: '4',
    x: 65,
    y: 40,
    title: 'Tempi Ridotti',
    description: 'Il nostro metodo EDIL FAST garantisce tempi di realizzazione ridotti del 40% rispetto ai metodi tradizionali.',
    icon: Home,
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
    }, 900);
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
            transition={{ duration: 0.4, delay: 0.5 }}
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
          className="relative w-full max-w-6xl mx-auto aspect-square md:aspect-[4/3]"
          animate={{
            opacity: isAnimating ? 0.8 : 1,
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeOut"
          }}
        >
          {/* Casa centrale - molto più grande e senza effetti 3D */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-4xl aspect-square">
              <img 
                src="/lovable-uploads/20b3c721-294a-443e-ba2d-afa196163db2.png"
                alt="Progetto EDIL FAST"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
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
                  scale: isAnimating && clickedPin?.id === pin.id ? 1.1 : 1,
                  opacity: isAnimating && clickedPin?.id !== pin.id ? 0.5 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
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
                  {/* Background glass effect - colori più scuri */}
                  <motion.div 
                    className="absolute inset-0 rounded-full backdrop-blur-md border-2 shadow-2xl"
                    style={{
                      backgroundColor: "rgba(60, 60, 60, 0.8)",
                      borderColor: "rgba(40, 40, 40, 0.9)"
                    }}
                    animate={{
                      backgroundColor: isAnimating && clickedPin?.id === pin.id 
                        ? "rgba(80, 80, 80, 0.9)" 
                        : "rgba(60, 60, 60, 0.8)",
                      borderColor: isAnimating && clickedPin?.id === pin.id 
                        ? "rgba(100, 100, 100, 0.9)" 
                        : "rgba(40, 40, 40, 0.9)"
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Icona casa con martello */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/cb8f97e5-a7ab-40df-b2e6-dd1c77820187.png" 
                      alt="EDIL FAST icon"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  
                  {/* Subtle glow - colore più scuro */}
                  <motion.div 
                    className="absolute inset-0 rounded-full blur-sm transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(40, 40, 40, 0.3)"
                    }}
                    animate={{
                      backgroundColor: isAnimating && clickedPin?.id === pin.id 
                        ? "rgba(60, 60, 60, 0.4)" 
                        : "rgba(40, 40, 40, 0.3)"
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            </button>
          ))}

          {/* Effetto di alone espansivo elegante */}
          <AnimatePresence>
            {isAnimating && clickedPin && (
              <>
                {/* Primo cerchio di luce */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ 
                    opacity: [0, 0.8, 0.4, 0],
                    scale: [0.1, 2, 4, 6]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${clickedPin.x}%`,
                    top: `${clickedPin.y}%`,
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    filter: 'blur(8px)'
                  }}
                />
                {/* Secondo cerchio più ampio */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ 
                    opacity: [0, 0.4, 0.2, 0],
                    scale: [0.1, 1.5, 3, 5]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${clickedPin.x}%`,
                    top: `${clickedPin.y}%`,
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 80%)',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    filter: 'blur(15px)'
                  }}
                />
              </>
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