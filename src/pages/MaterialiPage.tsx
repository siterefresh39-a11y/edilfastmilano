import { motion } from 'framer-motion';
import { Leaf, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MaterialiPage = () => {
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
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf size={40} className="text-green-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Materiali Sostenibili
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Selezioniamo materiali eco-compatibili e di alta qualità per efficienza energetica e durata
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
                Costruire Responsabilmente
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  La nostra filosofia si basa sulla selezione di materiali che rispettano 
                  l'ambiente senza compromettere la qualità e la durata. Ogni componente 
                  viene scelto secondo rigorosi criteri di sostenibilità e performance.
                </p>
                <p>
                  Investiamo in materiali innovativi che garantiscono isolamento termico 
                  superiore, resistenza agli agenti atmosferici e un impatto ambientale 
                  minimo durante tutto il ciclo di vita dell'edificio.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">Certificazioni</h3>
                  <p className="text-sm text-muted-foreground">Materiali con certificazione green</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">Durabilità</h3>
                  <p className="text-sm text-muted-foreground">Garanzia a lungo termine</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/52676327-6506-4e69-9589-d64478bf5833.png"
                  alt="Materiali Sostenibili"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-bold text-center text-foreground mb-12"
          >
            I Nostri Materiali Eco-Friendly
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Legno Certificato FSC",
                description: "Proveniente da foreste gestite in modo sostenibile"
              },
              {
                title: "Isolanti Naturali",
                description: "Fibra di legno, sughero e materiali a base vegetale"
              },
              {
                title: "Calcestruzzo Verde",
                description: "Formulazioni a basso impatto di carbonio"
              },
              {
                title: "Acciaio Riciclato",
                description: "Strutture metalliche da materiale di recupero"
              },
              {
                title: "Vernici Ecologiche",
                description: "A base d'acqua, senza solventi tossici"
              },
              {
                title: "Pannelli Solari",
                description: "Integrazione di energie rinnovabili"
              }
            ].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-semibold text-card-foreground mb-3">{material.title}</h3>
                <p className="text-muted-foreground text-sm">{material.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaterialiPage;