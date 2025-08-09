import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { ChefHat, Check, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CucinaPage = () => {
  const [selectedPackage, setSelectedPackage] = useState<'standard' | 'premium' | 'super-premium'>('standard');
  const [isAnimating, setIsAnimating] = useState(false);

  const getImageForPackage = (pkg: 'standard' | 'premium' | 'super-premium') => {
    switch (pkg) {
      case 'standard':
        return "/lovable-uploads/36938368-ad52-4a38-b70d-1ae8cda58b44.png"; // entry-level (rosso)
      case 'premium':
        return "/lovable-uploads/b413d1ec-e2d9-46b5-ac7e-7c0586505184.png"; // premium (verde)
      case 'super-premium':
        return "/lovable-uploads/8c69dd49-3b04-426a-addf-0157c027eb9a.png"; // super premium (blu)
    }
  };

  const getImageAlt = (pkg: 'standard' | 'premium' | 'super-premium') => {
    switch (pkg) {
      case 'standard':
        return "Cucina standard in ristrutturazione con parete rossa";
      case 'premium':
        return "Cucina premium in ristrutturazione con parete verde";
      case 'super-premium':
        return "Cucina super premium finita con eleganti finiture";
    }
  };

  const packages = {
    'standard': {
      title: "Pacchetto Standard Cucina",
      subtitle: "Funzionale ed efficiente",
      description: "Una soluzione completa e accessibile per rinnovare la tua cucina mantenendo funzionalità e stile.",
      gradient: "from-orange-500 to-red-500",
      image: getImageForPackage('standard'),
      imageAlt: getImageAlt('standard'),
      services: [
        { icon: "🍳", title: 'Mobili base componibili', description: 'Arredi modulari standard di buona qualità' },
        { icon: "🎨", title: 'Verniciatura pareti', description: 'Tinteggiatura con idropittura lavabile' },
        { icon: "📦", title: 'Elettrodomestici essenziali', description: 'Fornello, frigorifero e lavastoviglie base' },
        { icon: "🔧", title: 'Allacci idraulici ed elettrici', description: 'Collegamenti sicuri e a norma' },
        { icon: "✨", title: 'Pulizia post installazione', description: 'Ambiente pronto per l\'utilizzo immediato' }
      ]
    },
    'premium': {
      title: "Pacchetto Premium Cucina",
      subtitle: "Qualità e stile",
      description: "Il perfetto equilibrio tra qualità superiore e investimento ragionevole per una cucina moderna e funzionale.",
      gradient: "from-green-500 to-emerald-500",
      image: getImageForPackage('premium'),
      imageAlt: getImageAlt('premium'),
      services: [
        { icon: "🛠️", title: 'Demolizione controllata', description: 'Rimozione elementi obsoleti con precisione' },
        { icon: "🍳", title: 'Mobili cucina di qualità', description: 'Arredi modulari con finiture curate' },
        { icon: "⚡", title: 'Adeguamento impianti base', description: 'Aggiornamento impianti alle normative' },
        { icon: "📦", title: 'Elettrodomestici di marca', description: 'Fornitura apparecchi efficienti e moderni' },
        { icon: "🎨", title: 'Pavimenti e rivestimenti', description: 'Posa materiali resistenti e facili da pulire' },
        { icon: "✨", title: 'Finitura e pulizia ambiente', description: 'Completamento lavori e sanificazione' }
      ]
    },
    'super-premium': {
      title: "Pacchetto Super Premium Cucina",
      subtitle: "Servizio chiavi in mano",
      description: "Con il nostro servizio chiavi in mano, realizziamo la cucina dei tuoi sogni dall'inizio alla fine con finiture di lusso.",
      gradient: "from-purple-500 to-blue-500",
      image: getImageForPackage('super-premium'),
      imageAlt: getImageAlt('super-premium'),
      services: [
        { icon: "📐", title: 'Progettazione personalizzata 3D', description: 'Design su misura con rendering fotorealistici' },
        { icon: "🛠️", title: 'Demolizione completa ambiente', description: 'Rimozione impianti e strutture esistenti' },
        { icon: "🔧", title: 'Rifacimento impianti', description: 'Impianti elettrico, idraulico e gas certificati' },
        { icon: "♻️", title: 'Smaltimento certificato materiali', description: 'Gestione rifiuti con documentazione' },
        { icon: "🍳", title: 'Mobili cucina su misura premium', description: 'Arredi di alta qualità con ante personalizzate' },
        { icon: "⚙️", title: 'Elettrodomestici classe A+++', description: 'Fornitura e installazione elettrodomestici top' },
        { icon: "🎨", title: 'Finiture di lusso complete', description: 'Top in quarzo, pavimenti e rivestimenti premium' },
        { icon: "✨", title: 'Collaudo e consegna finale', description: 'Test funzionalità e pulizia professionale' }
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
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl mb-8 shadow-lg"
          >
            <ChefHat className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6"
          >
            Ristrutturazione Cucina
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Realizziamo la cucina dei tuoi sogni con soluzioni complete e professionali
          </motion.p>
        </div>
      </section>

      {/* Sezione pacchetti in stile Sala Living */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-16">
            <div className="flex bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-xl border border-slate-200 dark:border-slate-700">
              {(['standard','premium','super-premium'] as const).map((key) => (
                <Button
                  key={key}
                  variant={selectedPackage === key ? "default" : "ghost"}
                  onClick={() => handlePackageChange(key)}
                  className={`
                    relative px-8 py-4 rounded-xl transition-all duration-300 font-semibold
                    ${selectedPackage === key 
                      ? `bg-gradient-to-r ${packages[key].gradient} text-white shadow-lg scale-105` 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                    }
                  `}
                >
                  {selectedPackage === key && (
                    <motion.div
                      layoutId="activeTabCucina"
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

          <motion.div className="relative max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPackage}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                {/* Header pacchetto */}
                <div className={`relative p-8 py-12 mb-8 rounded-3xl bg-gradient-to-r ${currentPackage.gradient} text-white shadow-2xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
                  
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex-1 lg:w-1/2 text-center lg:text-left">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
                        <Sparkles className="w-4 h-4 mr-2" />
                        {selectedPackage === 'standard' && 'Essenziale'}
                        {selectedPackage === 'premium' && 'Completo'}
                        {selectedPackage === 'super-premium' && 'Luxury'}
                      </Badge>
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">{currentPackage.title}</h2>
                      <p className="text-xl font-medium mb-4 text-white/90">{currentPackage.subtitle}</p>
                      <p className="text-lg leading-relaxed text:white/80">{currentPackage.description}</p>
                    </div>
                    <div className="flex justify-center lg:justify-end lg:w-1/2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-lg blur-md transform rotate-1" />
                        <img
                          src={currentPackage.image}
                          alt={currentPackage.imageAlt}
                          className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] object-cover rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-2 border-white/30"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Servizi */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentPackage.services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
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
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-16 text-center"
                >
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
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CucinaPage;
