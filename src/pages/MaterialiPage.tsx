import { motion } from 'framer-motion';
import { Bath, ArrowLeft, Package, Hammer, Paintbrush, Recycle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const MaterialiPage = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const packages = {
    'super-premium': {
      title: 'Servizio Super Premium - Pensiamo a tutto noi',
      description: 'Con il nostro servizio chiavi in mano, ci occupiamo dall\'inizio alla fine di ogni fase della ristrutturazione del tuo bagno.',
      color: 'from-yellow-500/20 to-orange-500/20',
      services: [
        { icon: Package, title: 'Trasporto materiali e arredo nuovo', description: 'Gestiamo ritiro e consegna in totale sicurezza' },
        { icon: Hammer, title: 'Rimozione professionale vecchi sanitari', description: 'Smontaggio accurato per evitare danni' },
        { icon: Hammer, title: 'Demolizione completa del bagno', description: 'Rottura pavimentazioni e rivestimenti' },
        { icon: Recycle, title: 'Smaltimento certificato', description: 'Smaltimento a norma di macerie e sanitari' },
        { icon: Bath, title: 'Realizzazione nuovi rivestimenti e pavimenti', description: 'Posa con finiture a scelta del cliente' },
        { icon: Bath, title: 'Installazione nuovi sanitari e rubinetteria', description: 'Montaggio preciso con test di funzionalità' },
        { icon: Paintbrush, title: 'Imbiancatura del soffitto', description: 'Preparazione fondo e tinteggiatura' },
        { icon: Package, title: 'Montaggio mobili e accessori bagno', description: 'Installazione arredo e illuminazione' },
        { icon: Sparkles, title: 'Pulizia finale del cantiere', description: 'Detersione completa per consegna' }
      ]
    },
    'premium': {
      title: 'Pacchetto Premium - Il giusto equilibrio',
      description: 'Pensiamo noi a tutte le operazioni fondamentali per consegnarti un ambiente rinnovato e pronto all\'uso.',
      color: 'from-blue-500/20 to-purple-500/20',
      services: [
        { icon: Hammer, title: 'Demolizione rivestimenti e pavimentazione', description: 'Rimozione materiali obsoleti' },
        { icon: Bath, title: 'Posa di pavimenti e rivestimenti', description: 'Installazione precisa con materiali professionali' },
        { icon: Package, title: 'Montaggio arredo bagno', description: 'Assemblaggio mobili e complementi' },
        { icon: Paintbrush, title: 'Tinteggiatura soffitto', description: 'Verniciatura con preparazione del fondo' },
        { icon: Sparkles, title: 'Pulizia post-lavori', description: 'Riordino e pulizia finale dell\'ambiente' }
      ]
    },
    'standard': {
      title: 'Pacchetto Standard - Essenziale, preciso',
      description: 'Un intervento mirato per rinfrescare e valorizzare il bagno senza interventi invasivi.',
      color: 'from-green-500/20 to-teal-500/20',
      services: [
        { icon: Bath, title: 'Fornitura e posa rivestimenti/pavimenti', description: 'Posa professionale con tagli di precisione' },
        { icon: Paintbrush, title: 'Tinteggiatura del soffitto', description: 'Preparazione e pittura con idropittura' },
        { icon: Sparkles, title: 'Pulizia finale dell\'ambiente', description: 'Eliminazione residui e polveri' }
      ]
    }
  };

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

      {/* Hero Section - Compact */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Bath size={40} className="text-primary" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ristrutturazione Bagno
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section - Text and Image Side by Side */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Servizi Completi per il Tuo Bagno
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Trasformiamo il tuo bagno con <strong className="text-foreground">soluzioni complete e professionali</strong>, 
                    dalla progettazione alla realizzazione finale.
                  </p>
                  <p>
                    Tre pacchetti pensati per ogni esigenza e budget, con <strong className="text-foreground">materiali di qualità superiore</strong> 
                    e maestranze specializzate.
                  </p>
                  <p>
                    Dalla demolizione alla pulizia finale, ci occupiamo di ogni dettaglio per consegnarti 
                    un <strong className="text-foreground">ambiente completamente rinnovato</strong> e pronto all'uso.
                  </p>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-primary font-semibold">
                      ✨ Ogni intervento è accompagnato da garanzia e assistenza post-vendita
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Dynamic Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="sticky top-8">
                <motion.div
                  className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-6 backdrop-blur-sm border border-border/50 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img 
                    key={selectedPackage}
                    src={!selectedPackage 
                      ? "/lovable-uploads/cea07f37-a634-457a-aaa8-9afa6497024b.png"
                      : selectedPackage === 'standard' 
                        ? "/lovable-uploads/93914c07-47ca-4dec-bc2d-80e52e4d99ea.png"
                        : selectedPackage === 'premium'
                          ? "/lovable-uploads/bda3bec9-3e7e-45a8-abe0-f591ef371d8b.png"
                          : "/lovable-uploads/819c5323-6436-4de6-9198-c17175c038bf.png"
                    }
                    alt={!selectedPackage 
                      ? "EDIL FAST MILANO Logo"
                      : selectedPackage === 'standard'
                        ? "Bagno in ristrutturazione con materiali e strumenti"
                        : selectedPackage === 'premium'
                          ? "Bagno moderno isometrico premium - Mid Package"
                          : "Bagno moderno isometrico luxury - Luxury Package"
                    }
                    className="w-full h-auto max-h-96 object-contain rounded-xl shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-primary rounded-full animate-pulse delay-1000"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Selection Section - Centered Below */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-muted/20 to-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Scegli il Tuo Pacchetto
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ogni pacchetto è studiato per offrire il massimo valore e la migliore esperienza. 
                Seleziona quello più adatto alle tue esigenze.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="max-w-lg mx-auto"
              >
                <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                  <SelectTrigger className="w-full h-16 text-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-background/80 backdrop-blur-sm">
                    <SelectValue placeholder="👆 Seleziona il pacchetto perfetto per te..." />
                  </SelectTrigger>
                  <SelectContent className="z-50 bg-background border border-border shadow-lg backdrop-blur-md min-w-[400px]">
                    <SelectItem value="super-premium" className="text-base py-6 focus:bg-accent/10">
                      <div className="flex items-start gap-3 w-full">
                        <span className="text-2xl mt-1">🏆</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-foreground mb-1">Servizio Super Premium</div>
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            Chiavi in mano - Pensiamo a tutto noi
                          </div>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="premium" className="text-base py-6 focus:bg-accent/10">
                      <div className="flex items-start gap-3 w-full">
                        <span className="text-2xl mt-1">⭐</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-foreground mb-1">Pacchetto Premium</div>
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            Il giusto equilibrio qualità-prezzo
                          </div>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="standard" className="text-base py-6 focus:bg-accent/10">
                      <div className="flex items-start gap-3 w-full">
                        <span className="text-2xl mt-1">✅</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-foreground mb-1">Pacchetto Standard</div>
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            Essenziale e preciso
                          </div>
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              
              {!selectedPackage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 max-w-md mx-auto"
                >
                  <p className="text-sm text-primary font-medium">
                    💡 Seleziona un pacchetto per vedere tutti i servizi inclusi e l'immagine di riferimento
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Details */}
      {selectedPackage && (
        <section className="py-16 bg-muted/20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              key={selectedPackage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`bg-gradient-to-br ${packages[selectedPackage as keyof typeof packages].color} rounded-2xl p-8 mb-8`}>
                <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
                  {packages[selectedPackage as keyof typeof packages].title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  {packages[selectedPackage as keyof typeof packages].description}
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {packages[selectedPackage as keyof typeof packages].services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full">
                        <CardHeader className="pb-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                            <service.icon size={24} className="text-primary" />
                          </div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{service.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Richiedi Preventivo per questo Pacchetto
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default MaterialiPage;