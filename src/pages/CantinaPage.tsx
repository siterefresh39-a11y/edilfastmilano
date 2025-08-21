import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Warehouse, Check, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CantinaPage = () => {
  const [selectedPackage, setSelectedPackage] = useState<'standard' | 'premium' | 'super-premium'>('standard');
  const [isAnimating, setIsAnimating] = useState(false);

  const getImageForPackage = (pkg: 'standard' | 'premium' | 'super-premium') => {
    switch (pkg) {
      case 'standard':
        return "/lovable-uploads/aad746f9-d1f0-4dc1-b61c-7f94b81c023f.png";
      case 'premium':
        return "/lovable-uploads/74a16436-45bc-41f9-8fb0-f7590d38d31a.png";
      case 'super-premium':
        return "/lovable-uploads/b08f3437-5c12-4ef7-a4ff-12503d3c6d11.png";
    }
  };

  const getImageAlt = (pkg: 'standard' | 'premium' | 'super-premium') => {
    switch (pkg) {
      case 'standard':
        return "Cantina standard in ristrutturazione - pulizia e rinnovamento base";
      case 'premium':
        return "Cantina premium in ristrutturazione - rinnovo completo e funzionale";
      case 'super-premium':
        return "Cantina super premium finita - ristrutturazione completa chiavi in mano";
    }
  };

  const packages = {
    'standard': {
      title: "Pacchetto Standard Cantina",
      subtitle: "Pulizia, protezione e rinnovamento base",
      description: "Un intervento mirato per riportare ordine e decoro nella tua cantina. Ideale per chi vuole liberare lo spazio, renderlo più salubre e visivamente ordinato, senza interventi strutturali.",
      gradient: "from-orange-500 to-red-500",
      image: getImageForPackage('standard'),
      imageAlt: getImageAlt('standard'),
      services: [
        { icon: "📦", title: 'Sgombero e movimentazione materiali', description: 'Rimozione completa di oggetti, scatoloni, arredi ingombranti o residui, con eventuale trasloco verso altra sede' },
        { icon: "🛡️", title: 'Trattamento murale antimuffa', description: 'Pulizia e preparazione delle superfici con successiva applicazione di pitture traspiranti e antimuffa' },
        { icon: "🏗️", title: 'Posa nuova pavimentazione funzionale', description: 'Installazione di pavimento resistente (piastrellato o laminato), perfetto per ripristinare la fruibilità' },
        { icon: "✨", title: 'Pulizia finale post-intervento', description: 'Pulizia profonda dell\'ambiente al termine dei lavori per uno spazio ordinato e immediatamente utilizzabile' }
      ]
    },
    'premium': {
      title: "Pacchetto Premium Cantina",
      subtitle: "Rinnovo pratico, completo e funzionale",
      description: "Un intervento pensato per chi desidera rinnovare completamente la cantina senza lavori invasivi, migliorandone l'aspetto, la salubrità e la funzionalità. Perfetto per chi vuole recuperare uno spazio inutilizzato in modo efficiente e ordinato.",
      gradient: "from-green-500 to-emerald-500",
      image: getImageForPackage('premium'),
      imageAlt: getImageAlt('premium'),
      services: [
        { icon: "🚚", title: 'Sgombero completo e trasloco', description: 'Rimozione di materiali, oggetti e arredi presenti, con gestione del trasporto presso nuova destinazione' },
        { icon: "🛡️", title: 'Trattamento murale contro muffa e condensa', description: 'Applicazione di prodotti professionali anti-muffa su pareti e soffitti per ambienti umidi e interrati' },
        { icon: "🎨", title: 'Verniciatura completa delle superfici', description: 'Preparazione del fondo, eventuale stuccatura e tinteggiatura con idropittura lavabile traspirante' },
        { icon: "🏗️", title: 'Fornitura e posa nuova pavimentazione', description: 'Posa di pavimento tecnico a scelta (piastrellato o laminato), con livellamento delle superfici' },
        { icon: "📦", title: 'Trasporto materiali e logistica', description: 'Gestione completa della logistica e consegna in loco di pavimenti, vernici, arredi e accessori' },
        { icon: "🔧", title: 'Montaggio arredi e installazione', description: 'Assemblaggio e fissaggio di mobili e complementi per trasformare la cantina in spazio ordinato' }
      ]
    },
    'super-premium': {
      title: "Pacchetto Super Premium Cantina",
      subtitle: "Ristrutturazione completa chiavi in mano",
      description: "Un servizio avanzato per chi desidera trasformare completamente la cantina in un ambiente asciutto, ordinato e soprattutto funzionale. Che si tratti di una lavanderia, un archivio, un deposito attrezzi o uno spazio ricreativo, pensiamo a tutto noi.",
      gradient: "from-purple-500 to-blue-500",
      image: getImageForPackage('super-premium'),
      imageAlt: getImageAlt('super-premium'),
      services: [
        { icon: "🚚", title: 'Sgombero e trasloco del contenuto', description: 'Rimozione e movimentazione professionale degli oggetti presenti, con trasporto verso altra sede' },
        { icon: "♻️", title: 'Smaltimento vecchi arredi e materiali', description: 'Disassemblaggio e smaltimento certificato di mobili, scaffalature, elettrodomestici' },
        { icon: "🛡️", title: 'Trattamento anti-umidità e antimuffa', description: 'Interventi mirati con prodotti tecnici traspiranti per garantire pareti e soffitti asciutti' },
        { icon: "🏗️", title: 'Fornitura e posa del nuovo pavimento', description: 'Scelta tra piastrelle in gres porcellanato o pavimentazione laminata effetto legno' },
        { icon: "🎨", title: 'Imbiancatura completa con pitture antimuffa', description: 'Preparazione superfici, rasatura e applicazione di pitture lavabili e traspiranti' },
        { icon: "🏠", title: 'Controsoffitto e isolamento termoacustico', description: 'Realizzazione di controsoffittature in cartongesso con eventuale isolamento interno' },
        { icon: "⚡", title: 'Realizzazione impianto elettrico', description: 'Installazione o adeguamento completo dell\'impianto con illuminazione LED ad alta efficienza' },
        { icon: "📦", title: 'Trasporto e gestione materiali', description: 'Coordinamento completo del trasporto e della logistica per tutti i materiali necessari' },
        { icon: "🔧", title: 'Montaggio arredi e mobili funzionali', description: 'Assemblaggio e installazione di arredi scelti dal cliente o progettati su misura' },
        { icon: "🎯", title: 'Progettazione spazi personalizzati', description: 'Studio e realizzazione di ambienti su misura: angolo bar, area relax, pareti attrezzate' },
        { icon: "✨", title: 'Pulizia finale professionale', description: 'Detersione profonda di tutte le superfici per consegnarti un ambiente pronto all\'uso' }
      ]
    }
  } as const;

  const handlePackageChange = (pkg: 'standard' | 'premium' | 'super-premium') => {
    if (pkg === selectedPackage) return;
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedPackage(pkg);
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

      {/* Hero Section con icona */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl mb-8 shadow-lg">
            <Warehouse className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Ristrutturazione Cantina
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trasformiamo la tua cantina in un ambiente funzionale, asciutto e ordinato
          </p>
        </div>
      </section>

      {/* Sezione pacchetti */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-16 px-2">
            <div className="flex bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-xl border border-slate-200 dark:border-slate-700 w-full sm:w-auto overflow-x-auto">
              {(['standard','premium','super-premium'] as const).map((key) => (
                <Button
                  key={key}
                  variant={selectedPackage === key ? "default" : "ghost"}
                  onClick={() => handlePackageChange(key)}
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
                      layoutId="activeTabCantina"
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

export default CantinaPage;