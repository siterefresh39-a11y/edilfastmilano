import { motion } from 'framer-motion';
import { Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TempiPage = () => {
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
            <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={40} className="text-purple-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Tempi Ridotti
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Il metodo EDIL FAST garantisce tempi di realizzazione ridotti del 40%
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
                Velocità senza Compromessi
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Il nostro metodo EDIL FAST rappresenta una rivoluzione nel settore 
                  edilizio. Attraverso l'ottimizzazione dei processi, la prefabbricazione 
                  intelligente e una gestione digitale del cantiere, riduciamo drasticamente 
                  i tempi di costruzione.
                </p>
                <p>
                  Questa efficienza si traduce in vantaggi concreti: meno stress per il 
                  cliente, riduzione dei costi di cantiere e possibilità di abitare 
                  la propria casa molto prima rispetto ai metodi tradizionali.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">-40% Tempo</h3>
                  <p className="text-sm text-muted-foreground">Rispetto ai metodi tradizionali</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">Qualità</h3>
                  <p className="text-sm text-muted-foreground">Standard elevati mantenuti</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <Clock size={80} className="text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Comparison */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-bold text-center text-foreground mb-12"
          >
            Confronto Tempi di Realizzazione
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-red-50 border border-red-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-red-800 mb-4">Metodo Tradizionale</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-red-700">Progettazione</span>
                  <span className="text-red-700 font-semibold">3-4 mesi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">Permessi</span>
                  <span className="text-red-700 font-semibold">6-8 mesi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">Costruzione</span>
                  <span className="text-red-700 font-semibold">12-18 mesi</span>
                </div>
                <hr className="border-red-300" />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-red-800">Totale</span>
                  <span className="text-red-800">21-30 mesi</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-green-50 border border-green-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-green-800 mb-4">Metodo EDIL FAST</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-700">Progettazione</span>
                  <span className="text-green-700 font-semibold">1-2 mesi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Permessi</span>
                  <span className="text-green-700 font-semibold">3-4 mesi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Costruzione</span>
                  <span className="text-green-700 font-semibold">6-8 mesi</span>
                </div>
                <hr className="border-green-300" />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-green-800">Totale</span>
                  <span className="text-green-800">10-14 mesi</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Prefabbricazione",
                description: "Elementi costruttivi preparati in fabbrica durante le fasi di progettazione"
              },
              {
                title: "Gestione Digitale",
                description: "Coordinamento del cantiere attraverso software avanzati di project management"
              },
              {
                title: "Team Specializzato",
                description: "Squadre di lavoro esperte e coordinate per massima efficienza operativa"
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <h3 className="font-semibold text-card-foreground mb-3">{method.title}</h3>
                <p className="text-muted-foreground text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TempiPage;