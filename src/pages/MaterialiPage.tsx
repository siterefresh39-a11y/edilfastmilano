import { motion } from 'framer-motion';
import { Bath, ArrowLeft, Package, Hammer, Paintbrush, Recycle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
              <Bath size={40} className="text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Ristrutturazione Bagno
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trasformiamo il tuo bagno con soluzioni complete e professionali
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Scegli il Pacchetto Perfetto per Te
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Seleziona dal menu a tendina il pacchetto che fa per te
            </p>
            
            <div className="max-w-md mx-auto">
              <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                <SelectTrigger className="w-full h-12 text-lg">
                  <SelectValue placeholder="Seleziona un pacchetto..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="super-premium">🏆 Servizio Super Premium</SelectItem>
                  <SelectItem value="premium">⭐ Pacchetto Premium</SelectItem>
                  <SelectItem value="standard">✅ Pacchetto Standard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Hero Image */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/cb8f97e5-a7ab-40df-b2e6-dd1c77820187.png"
                alt="Ristrutturazione Bagno"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
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
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {packages[selectedPackage as keyof typeof packages].title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
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
    </div>
  );
};

export default MaterialiPage;