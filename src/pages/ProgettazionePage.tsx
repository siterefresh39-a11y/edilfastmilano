import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Home, Check, ChevronLeft, ChevronRight, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProgettazionePage = () => {
  const [selectedPackage, setSelectedPackage] = useState<'standard' | 'premium' | 'super-premium'>('standard');
  const [isAnimating, setIsAnimating] = useState(false);

  const packages = {
    'standard': {
      title: "Pacchetto Standard Sala",
      subtitle: "Rinnovo essenziale, risultato garantito",
      description: "Intervento rapido e professionale per rinfrescare la tua zona giorno con le lavorazioni più richieste, mantenendo ordine, qualità e tempi contenuti.",
      gradient: "from-blue-500 to-cyan-500",
      image: "/lovable-uploads/86953308-280f-46ea-93b3-e075597a20e2.png",
      imageAlt: "Sala living in ristrutturazione con parete arancione - Pacchetto Standard",
      services: [
        { icon: "🏠", title: "Posa pavimento", description: "Installazione di rivestimenti a scelta (parquet, gres, laminato, PVC) con precisione e pulizia nei dettagli" },
        { icon: "🎨", title: "Tinteggiatura", description: "Verniciatura con prodotti professionali per una resa uniforme e duratura" },
        { icon: "🪟", title: "Cambio accessori tapparelle", description: "Cambio corda, cintino e mascherine per un funzionamento fluido e un aspetto rinnovato" },
        { icon: "✨", title: "Pulizia finale", description: "Detersione di superfici e ambienti per consegnare uno spazio pronto all'uso" }
      ]
    },
    'premium': {
      title: "Pacchetto Premium Sala",
      subtitle: "Restyling completo e funzionale",
      description: "Un servizio su misura per chi desidera rinnovare e valorizzare la zona giorno, senza interventi strutturali ma con un impatto visivo e pratico notevole.",
      gradient: "from-purple-500 to-pink-500",
      image: "/lovable-uploads/e336e4cb-64dc-4a5c-91b8-e99c82e28e0f.png",
      imageAlt: "Sala living moderna con arredamento chiaro - Pacchetto Premium",
      services: [
        { icon: "📦", title: "Sgombero e trasloco", description: "Rimozione completa di mobili, oggetti e materiali, con eventuale trasporto in altro luogo" },
        { icon: "🏠", title: "Posa pavimento", description: "Installazione professionale di parquet, gres, PVC o laminato con finiture di precisione" },
        { icon: "🚪", title: "Sostituzione porte", description: "Rimozione delle vecchie porte e montaggio delle nuove, con rifiniture pulite e coordinate" },
        { icon: "🪟", title: "Cambio accessori tapparelle", description: "Cambio cintini, corde e mascherine per garantire funzionalità e pulizia estetica" },
        { icon: "🎨", title: "Tinteggiatura", description: "Verniciatura eseguita con materiali traspiranti e coprenti per un effetto omogeneo" },
        { icon: "🚚", title: "Trasporto gestione materiale", description: "Ritiro, stoccaggio e movimentazione di tutto ciò che serve per completare il lavoro" },
        { icon: "🛠️", title: "Montaggio nuovo arredi", description: "Assemblaggio e posizionamento preciso del nuovo arredamento, anche su progetto del cliente" },
        { icon: "✨", title: "Pulizia finale", description: "Rimozione di polveri e residui, lavaggio completo delle superfici" }
      ]
    },
    'super-premium': {
      title: "Pacchetto Super Premium Sala",
      subtitle: "Restyling completo chiavi in mano",
      description: "Un pacchetto pensato per chi desidera rinnovare totalmente il soggiorno con un intervento preciso, ordinato e di alto livello estetico. Ci occupiamo di ogni fase del lavoro.",
      gradient: "from-amber-500 to-orange-500",
      image: "/lovable-uploads/51ce46c8-7cfc-4749-a3b4-de44082c3c89.png",
      imageAlt: "Sala living elegante con mobili di lusso e parete bordeaux - Pacchetto Super Premium",
      services: [
        { icon: "📦", title: "Sgombero e trasloco dell'arredamento esistente", description: "Rimozione completa e trasporto degli arredi presenti, con possibilità di ricollocazione in altro spazio o smaltimento" },
        { icon: "🗑️", title: "Smaltimento vecchi mobili e porte", description: "Disassemblaggio e conferimento in discarica autorizzata di porte interne usurate, arredi fuori uso e materiali ingombranti" },
        { icon: "🏠", title: "Fornitura e posa nuova pavimentazione", description: "Installazione di pavimento a scelta tra gres, parquet o PVC, con preparazione fondo e finitura professionale" },
        { icon: "🚪", title: "Sostituzione porte interne", description: "Rimozione delle vecchie porte e installazione di nuove porte moderne o classiche, complete di telaio, cerniere e maniglie" },
        { icon: "🪟", title: "Sostituzione accessori tapparelle", description: "Cambio corde, cintini e mascherine delle tapparelle per migliorarne l'efficienza e l'estetica" },
        { icon: "🎨", title: "Tinteggiatura completa della sala", description: "Verniciatura professionale con idropittura lavabile, eseguita dopo preparazione fondo e stuccatura" },
        { icon: "💡", title: "Realizzazione controsoffitti, velette e illuminazione LED", description: "Progettazione e montaggio di controsoffitti in cartongesso o velette decorative, complete di impianto a faretti LED" },
        { icon: "🏛️", title: "Rivestimento decorativo delle pareti", description: "Applicazione di pannelli decorativi (in legno, pietra ricostruita o altri materiali su richiesta)" },
        { icon: "🚚", title: "Gestione completa logistica e trasporto materiali", description: "Fornitura, trasporto e movimentazione di tutti i materiali necessari alla realizzazione del progetto" },
        { icon: "🛠️", title: "Smontaggio vecchi arredi e montaggio dei nuovi mobili", description: "Rimozione arredi obsoleti, trasporto nuovi arredi da magazzino o punto vendita, assemblaggio e installazione" },
        { icon: "✨", title: "Pulizia professionale post-lavori", description: "Detersione profonda del cantiere, rimozione polveri e residui, lavaggio delle superfici" }
      ]
    }
  };

  const handlePackageChange = (packageType: 'standard' | 'premium' | 'super-premium') => {
    if (packageType === selectedPackage) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedPackage(packageType);
      setIsAnimating(false);
    }, 300);
  };

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
      
      {/* Hero Section con icona casa stilizzata */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl mb-8 shadow-lg">
            <Home className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Ristrutturazione Sala Living
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trasforma il cuore della tua casa con soluzioni innovative e design moderno
          </p>
        </div>
      </section>

      {/* Sezione di navigazione pacchetti innovativa */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-16">
            <div className="flex bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-xl border border-slate-200 dark:border-slate-700">
              {Object.entries(packages).map(([key, pkg]) => (
                <Button
                  key={key}
                  variant={selectedPackage === key ? "default" : "ghost"}
                  onClick={() => handlePackageChange(key as any)}
                  className={`
                    relative px-8 py-4 rounded-xl transition-all duration-300 font-semibold
                    ${selectedPackage === key 
                      ? `bg-gradient-to-r ${pkg.gradient} text-white shadow-lg scale-105` 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                    }
                  `}
                >
                  {selectedPackage === key && (
                    <motion.div
                      layoutId="activeTab"
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

          {/* Layout innovativo a cards sovrapposte */}
          <div className="relative max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <div
                key={selectedPackage}
                className="relative"
              >
                {/* Header del pacchetto con design futuristico e immagine */}
                <div className={`relative p-8 py-12 mb-8 rounded-3xl bg-gradient-to-r ${currentPackage.gradient} text-white shadow-2xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
                  
                  {/* Layout responsive: due colonne su desktop, immagine sopra su mobile */}
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
                    {/* Contenuto testuale - occupa metà spazio a sinistra su desktop */}
                    <div className="flex-1 lg:w-1/2 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          <Sparkles className="w-4 h-4 mr-2" />
                          {selectedPackage === 'standard' && 'Essenziale'}
                          {selectedPackage === 'premium' && 'Completo'}
                          {selectedPackage === 'super-premium' && 'Luxury'}
                        </Badge>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">{currentPackage.title}</h2>
                      <p className="text-xl font-medium mb-4 text-white/90">{currentPackage.subtitle}</p>
                      <p className="text-lg leading-relaxed text-white/80">{currentPackage.description}</p>
                    </div>
                    
                    {/* Immagine - occupa metà spazio a destra su desktop, sopra su mobile */}
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

                {/* Grid di servizi con layout a masonry innovativo */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {currentPackage.services.map((service, index) => (
                     <div
                       key={index}
                       className={`
                         group relative p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg
                         border border-slate-200 dark:border-slate-700
                         hover:shadow-2xl hover:scale-105 transition-all duration-300
                         ${index % 2 === 0 ? 'lg:mt-8' : ''}
                         ${index % 3 === 1 ? 'md:mt-4' : ''}
                       `}
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

                 {/* Call to action con design futuristico */}
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
                          Richiedi Preventivo {selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)}
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
                  
                  <p className="mt-6 text-muted-foreground">
                    🏡 Un vero e proprio lifting per il tuo soggiorno, con finiture su misura e un risultato che unisce comfort, estetica e valore abitativo.
                  </p>
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

export default ProgettazionePage;