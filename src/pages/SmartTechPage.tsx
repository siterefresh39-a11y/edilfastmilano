import { motion } from 'framer-motion';
import { Home, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const SmartTechPage = () => {
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
            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Home size={40} className="text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Smart Technology
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistemi domotici avanzati per il controllo intelligente di ogni aspetto della casa
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
                La Casa del Futuro, Oggi
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Integriamo sistemi domotici all'avanguardia che trasformano la tua casa 
                  in un ambiente intelligente e reattivo. Dal controllo dell'illuminazione 
                  alla gestione del clima, dalla sicurezza all'intrattenimento.
                </p>
                <p>
                  Ogni sistema è progettato per essere intuitivo, efficiente e facilmente 
                  espandibile nel tempo. La tecnologia diventa invisibile, migliorando 
                  la qualità della vita quotidiana.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">Controllo Vocale</h3>
                  <p className="text-sm text-muted-foreground">Assistenti intelligenti integrati</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">App Mobile</h3>
                  <p className="text-sm text-muted-foreground">Controllo da remoto completo</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/df7cdc40-846d-435b-94ad-e7adc8115c0c.png"
                  alt="Smart Technology"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-bold text-center text-foreground mb-12"
          >
            Sistemi Intelligenti Integrati
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Illuminazione Smart",
                description: "Controllo automatico e personalizzato dell'illuminazione in ogni ambiente"
              },
              {
                title: "Climatizzazione Intelligente",
                description: "Gestione ottimale della temperatura con apprendimento delle abitudini"
              },
              {
                title: "Sistema di Sicurezza",
                description: "Videosorveglianza, allarmi e controllo accessi integrati"
              },
              {
                title: "Gestione Energia",
                description: "Monitoraggio e ottimizzazione dei consumi energetici"
              },
              {
                title: "Audio/Video Multiroom",
                description: "Intrattenimento distribuito in tutta la casa"
              },
              {
                title: "Irrigazione Automatica",
                description: "Cura del giardino con sensori di umidità e meteo"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Trasforma la tua casa in una Smart Home
            </h3>
            <p className="text-muted-foreground mb-8">
              Scopri come i nostri sistemi intelligenti possono migliorare il comfort e l'efficienza della tua abitazione
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contatti#contact-form">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-all duration-300 px-12 py-6 text-lg font-semibold shadow-2xl"
                >
                  <Sparkles className="w-5 h-5 mr-3" />
                  Richiedi Preventivo Smart Home
                </Button>
              </Link>
              
              <Link to="/progetti">
                <Button 
                  variant="outline"
                  size="lg"
                  className="px-12 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 border-2"
                >
                  Vedi i Nostri Progetti
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SmartTechPage;