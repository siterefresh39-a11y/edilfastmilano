import { motion } from 'framer-motion';
import { Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const EfficienzaPage = () => {
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
            <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap size={40} className="text-yellow-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Efficienza Energetica
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Progetti ottimizzati per il massimo risparmio energetico con soluzioni innovative
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
                Risparmio che si Vede
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ogni nostro progetto è progettato per raggiungere i più alti standard 
                  di efficienza energetica. Utilizziamo tecnologie passive e attive 
                  per minimizzare i consumi e massimizzare il comfort abitativo.
                </p>
                <p>
                  Dal design bioclimatico all'integrazione di fonti rinnovabili, 
                  ogni soluzione è calibrata per ottenere certificazioni energetiche 
                  di classe A+ e oltre, garantendo risparmi significativi sulle bollette.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">Classe A+</h3>
                  <p className="text-sm text-muted-foreground">Certificazione energetica superiore</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">Fino a 80%</h3>
                  <p className="text-sm text-muted-foreground">Riduzione consumi energetici</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Zap size={80} className="text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Energy Solutions */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-bold text-center text-foreground mb-12"
          >
            Le Nostre Soluzioni Energetiche
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Isolamento Termico",
                description: "Cappotto termico e serramenti ad alte prestazioni per eliminare dispersioni"
              },
              {
                title: "Pannelli Fotovoltaici",
                description: "Impianti solari dimensionati per coprire il fabbisogno energetico"
              },
              {
                title: "Pompe di Calore",
                description: "Sistemi di riscaldamento e raffrescamento ad alta efficienza"
              },
              {
                title: "Ventilazione Controllata",
                description: "Ricambio d'aria automatico con recupero di calore"
              },
              {
                title: "LED e Domotica",
                description: "Illuminazione intelligente e gestione automatica dei carichi"
              },
              {
                title: "Accumulo Energetico",
                description: "Batterie per massimizzare l'autoconsumo da fonti rinnovabili"
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-semibold text-card-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EfficienzaPage;