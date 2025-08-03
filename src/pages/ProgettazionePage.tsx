import { motion } from 'framer-motion';
import { Hammer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const ProgettazionePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            Torna alla Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Hammer size={40} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Progettazione 3D
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tecnologie avanzate per visualizzare ogni dettaglio prima della costruzione
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Il Futuro della Progettazione Edile
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Utilizziamo software CAD avanzati e tecnologie di modellazione 3D per creare 
                  rappresentazioni precise e dettagliate di ogni progetto. Questo approccio 
                  innovativo permette ai nostri clienti di visualizzare completamente il 
                  risultato finale prima ancora di iniziare i lavori.
                </p>
                <p>
                  La progettazione tridimensionale ci consente di identificare potenziali 
                  problematiche in fase di planning, ottimizzare gli spazi e garantire la 
                  massima efficienza nella realizzazione.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">Precisione</h3>
                  <p className="text-sm text-muted-foreground">Modelli accurati al millimetro</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">Visualizzazione</h3>
                  <p className="text-sm text-muted-foreground">Rendering fotorealistici</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/3901b7c0-4d51-4c4c-be57-f18c9ea1fb35.png"
                  alt="Progettazione 3D"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-bold text-center text-foreground mb-12"
          >
            Tecnologie Avanzate
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "CAD 3D Professionale",
                description: "Software di ultima generazione per modellazione architettonica completa"
              },
              {
                title: "Rendering Real-time",
                description: "Visualizzazione immediata delle modifiche durante la progettazione"
              },
              {
                title: "Realtà Virtuale",
                description: "Tour immersivi per esplorare gli spazi prima della costruzione"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <h3 className="font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProgettazionePage;