import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            to="/contatti" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            Torna ai Contatti
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
              <Shield size={40} className="text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protezione dei dati e trasparenza per Edil Fast Milano
            </p>
          </motion.div>
        </div>
      </section>

      {/* Under Construction Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="text-center">
              <CardHeader className="pb-8">
                <div className="w-24 h-24 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Construction size={48} className="text-orange-500" />
                </div>
                <CardTitle className="text-3xl mb-4">Pagina in Costruzione</CardTitle>
                <CardDescription className="text-lg">
                  Stiamo attualmente lavorando alla nostra Privacy Policy per garantire la massima trasparenza nella gestione dei tuoi dati personali.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">
                    Cosa includerà la nostra Privacy Policy:
                  </h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li>• Tipologie di dati raccolti e modalità di raccolta</li>
                    <li>• Finalità del trattamento dei dati personali</li>
                    <li>• Basi giuridiche del trattamento</li>
                    <li>• Modalità di conservazione e sicurezza dei dati</li>
                    <li>• Diritti dell'interessato (accesso, rettifica, cancellazione)</li>
                    <li>• Condivisione dei dati con terze parti</li>
                    <li>• Uso dei cookies e tecnologie di tracciamento</li>
                    <li>• Informazioni di contatto del Responsabile della Protezione dei Dati</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-2">Nel frattempo...</h4>
                  <p className="text-muted-foreground">
                    I tuoi dati vengono trattati in conformità al GDPR (Regolamento UE 2016/679) 
                    e alla normativa italiana sulla privacy. Per qualsiasi domanda o richiesta 
                    relativa al trattamento dei tuoi dati personali, puoi contattarci.
                  </p>
                </div>

                <div className="pt-4">
                  <Link 
                    to="/contatti"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Contattaci per informazioni
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;