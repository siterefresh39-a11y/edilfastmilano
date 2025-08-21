import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import InteractiveHouseSection from '@/components/InteractiveHouseSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
const Index = () => {
  return <div className="relative">
      {/* Hero Section - Full screen with background image */}
      <div id="home">
        <HeroSection />
      </div>

      {/* Navigation - Fixed and appears on scroll */}
      <Navigation />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <AboutSection />
        <InteractiveHouseSection />
      </main>

      {/* CTA Section - Richiedi Preventivo */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-20 rounded-full" />
              <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pronto a Trasformare la Tua Casa?
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Richiedi subito un preventivo personalizzato e scopri come possiamo realizzare i tuoi progetti
            </p>
            
            <div className="relative group inline-block w-full sm:w-auto flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl opacity-50 rounded-2xl group-hover:opacity-70 transition-opacity duration-300" />
              <Link to="/contatti#contact-form" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="relative z-10 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 px-8 sm:px-12 py-6 text-lg font-semibold shadow-2xl group-hover:shadow-3xl w-full sm:w-auto"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mr-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </motion.div>
                  Richiedi Subito un Preventivo
                  <Sparkles className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Risposta garantita entro 24 ore • Sopralluogo gratuito
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>;
};
export default Index;