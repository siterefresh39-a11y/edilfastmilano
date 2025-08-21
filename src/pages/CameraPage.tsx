import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BedDouble, Check, Sparkles, ArrowLeft, Hammer, Truck, Package, PaintBucket } from "lucide-react";
import { Link } from "react-router-dom";

const CameraPage = () => {
  const [selectedPackage, setSelectedPackage] = useState<'standard' | 'premium' | 'super-premium'>('standard');

  const packages = {
    'standard': {
      title: 'Pacchetto Standard Camera',
      subtitle: 'Essenziale e confortevole',
      description: 'Rinnovo mirato della camera da letto per un ambiente pulito, ordinato e accogliente.',
      gradient: 'from-indigo-500 to-blue-500',
      image: '/lovable-uploads/43abe474-7d1a-4008-8f45-f898dcf57153.png',
      imageAlt: 'Camera da letto in ristrutturazione - Pacchetto Standard',
      services: [
        { icon: '🛏️', title: 'Posa pavimento', description: 'Gres, parquet o laminato con finiture precise' },
        { icon: '🎨', title: 'Tinteggiatura pareti e soffitto', description: 'Verniciatura con prodotti lavabili' },
        { icon: '✨', title: 'Pulizia finale', description: 'Ambiente pronto all\'uso' }
      ]
    },
    'premium': {
      title: 'Pacchetto Premium Camera',
      subtitle: 'Restyling completo',
      description: 'Rinnovo completo con tutti i servizi standard più elementi premium: nuova illuminazione, finiture coordinate e servizi aggiuntivi specializzati.',
      gradient: 'from-fuchsia-500 to-pink-500',
      image: '/lovable-uploads/43129a15-d26b-471f-baba-eae072172a9c.png',
      imageAlt: 'Camera da letto moderna - Pacchetto Premium',
      services: [
        // Servizi dal pacchetto Standard
        { icon: '🛏️', title: 'Posa pavimento', description: 'Gres, parquet o laminato con finiture precise' },
        { icon: '🎨', title: 'Tinteggiatura pareti e soffitto', description: 'Verniciatura con prodotti lavabili' },
        // Servizi Premium esistenti
        { icon: '🛠️', title: 'Sostituzione porte/interruttori', description: 'Aggiornamento elementi interni' },
        { icon: '💡', title: 'Illuminazione LED', description: 'Nuovi punti luce e atmosfera regolabile' },
        { icon: '🪵', title: 'Boiserie o pannelli decorativi', description: 'Parete testata letto con elementi decorativi' },
        // Nuovi servizi richiesti
        { icon: '🔨', title: 'Creazione cartongesso/controsoffitti', description: 'Controsoffitti o velette in cartongesso su misura' },
        { icon: '🚚', title: 'Trasporto e montaggio arredo', description: 'Consegna e installazione mobili e complementi' },
        { icon: '📦', title: 'Trasporto materiale', description: 'Consegna di tutti i materiali necessari' },  
        { icon: '🎨', title: 'Imbiancatura', description: 'Verniciatura completa con finiture di qualità' },
        { icon: '✨', title: 'Pulizia finale', description: 'Sanificazione e riordino completo' }
      ]
    },
    'super-premium': {
      title: 'Pacchetto Super Premium Camera',
      subtitle: 'Chiavi in mano di livello superiore',
      description: 'Trasformazione completa all-inclusive che include tutti i servizi Standard e Premium più progettazione su misura e finiture di pregio per una camera da letto di livello superiore.',
      gradient: 'from-amber-500 to-orange-500',
      image: '/lovable-uploads/fbdca36a-9c95-4643-9c10-e98d29ed8c86.png',
      imageAlt: 'Camera da letto luxury - Pacchetto Super Premium',
      services: [
        // Servizi dal pacchetto Standard
        { icon: '🛏️', title: 'Posa pavimento', description: 'Gres, parquet o laminato con finiture precise' },
        { icon: '🎨', title: 'Tinteggiatura pareti e soffitto', description: 'Verniciatura con prodotti lavabili' },
        // Servizi dal pacchetto Premium
        { icon: '🛠️', title: 'Sostituzione porte/interruttori', description: 'Aggiornamento elementi interni' },
        { icon: '💡', title: 'Illuminazione LED', description: 'Nuovi punti luce e atmosfera regolabile' },
        { icon: '🪵', title: 'Boiserie o pannelli decorativi', description: 'Parete testata letto con elementi decorativi' },
        { icon: '🔨', title: 'Creazione cartongesso/controsoffitti', description: 'Controsoffitti o velette in cartongesso su misura' },
        { icon: '🚚', title: 'Trasporto e montaggio arredo', description: 'Consegna e installazione mobili e complementi' },
        { icon: '📦', title: 'Trasporto materiale', description: 'Consegna di tutti i materiali necessari' },  
        { icon: '🎨', title: 'Imbiancatura', description: 'Verniciatura completa con finiture di qualità' },
        // Servizi Super Premium esclusivi
        { icon: '📐', title: 'Progettazione su misura', description: 'Layout ottimizzato per comfort e ordine' },
        { icon: '🛏️', title: 'Cabina armadio/armadi su misura', description: 'Soluzioni contenitive personalizzate' },
        { icon: '💡', title: 'Illuminazione scenografica', description: 'LED perimetrali e luci d\'accento' },
        { icon: '✨', title: 'Pulizia e consegna', description: 'Collaudo e consegna chiavi in mano' }
      ]
    }
  } as const;

  const currentPackage = packages[selectedPackage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation with back to home */}
      <nav className="relative z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            Torna alla Home
          </Link>
        </div>
      </nav>

      {/* Hero Section con icona */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl mb-8 shadow-lg">
            <BedDouble className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Ristrutturazione Camera da letto
          </h1>
        </div>
      </section>

      {/* Sezione pacchetti in stile Sala Living */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-16 px-2">
            <div className="flex bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-xl border border-slate-200 dark:border-slate-700 w-full sm:w-auto overflow-x-auto">
              {(['standard','premium','super-premium'] as const).map((key) => (
                <Button
                  key={key}
                  variant={selectedPackage === key ? "default" : "ghost"}
                  onClick={() => setSelectedPackage(key)}
                  className={`
                    relative px-4 sm:px-8 py-4 rounded-xl transition-all duration-300 font-semibold flex-shrink-0 text-sm sm:text-base
                    ${selectedPackage === key 
                      ? `bg-gradient-to-r ${packages[key].gradient} text-white shadow-lg scale-105` 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                    }
                  `}
                >
                  {selectedPackage === key && (
                    <motion.div
                      layoutId="activeTabCamera"
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">
                    {key === 'standard' && 'Standard'}
                    {key === 'premium' && 'Premium'} 
                    {key === 'super-premium' && 'Super Premium'}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <div
                key={selectedPackage}
                className="relative"
              >
                {/* Header pacchetto */}
                <div className={`relative min-h-[280px] p-8 py-12 mb-8 rounded-3xl bg-gradient-to-r ${currentPackage.gradient} text-white shadow-2xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
                  
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex-1 lg:w-1/2 text-center lg:text-left max-w-lg">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
                        <Sparkles className="w-4 h-4 mr-2" />
                        {selectedPackage === 'standard' && 'Essenziale'}
                        {selectedPackage === 'premium' && 'Completo'}
                        {selectedPackage === 'super-premium' && 'Luxury'}
                      </Badge>
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">{currentPackage.title}</h2>
                      <p className="text-xl font-medium mb-4 text-white/90">{currentPackage.subtitle}</p>
                      <p className="text-base leading-relaxed text-white/80">{currentPackage.description}</p>
                    </div>
                    <div className="flex justify-center lg:justify-end lg:w-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 rounded-lg blur-md transform rotate-1" />
                        <img
                          src={currentPackage.image}
                          alt={currentPackage.imageAlt}
                          className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] object-cover rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-2 border-white/30"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Servizi */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {currentPackage.services.map((service, index) => (
                     <div
                       key={index}
                       className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                     >
                      <div className={`absolute inset-0 bg-gradient-to-r ${currentPackage.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                      <div className="relative z-10">
                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center mt-4">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-xs text-green-600 dark:text-green-400 font-medium">Incluso</span>
                        </div>
                      </div>
                     </div>
                  ))}
                </div>

                 {/* CTA */}
                 <div className="mt-16 text-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div className="relative inline-block">
                      <div className={`absolute inset-0 bg-gradient-to-r ${currentPackage.gradient} blur-xl opacity-50 rounded-2xl`} />
                      <Link to="/contatti#contact-form">
                        <Button 
                          size="lg" 
                          className={`relative z-10 bg-gradient-to-r ${currentPackage.gradient} hover:scale-105 transition-all duration-300 px-12 py-6 text-lg font-semibold shadow-2xl`}
                        >
                          <Sparkles className="w-5 h-5 mr-3" />
                          Richiedi Preventivo {selectedPackage === 'standard' ? 'Standard' : selectedPackage === 'premium' ? 'Premium' : 'Super Premium'}
                        </Button>
                      </Link>
                    </div>
                    
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
                 </div>
               </div>
             </AnimatePresence>
           </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CameraPage;
