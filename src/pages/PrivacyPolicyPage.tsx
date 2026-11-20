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
              Ultimo aggiornamento: 22/08/2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-8 text-center">
                  La presente informativa è redatta ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR) e descrive le modalità di trattamento dei dati personali raccolti attraverso il presente sito web.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>1. Titolare del trattamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Il titolare del trattamento è:</p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="font-semibold">EDILFAST – O.M.P. S.A.S. DI PALERMO ANTONIO &amp; C.</p>
                  <p>P.IVA 09786740960 – Via Dante 33, 22070 Carbonate (CO)</p>
                  <p>Email di contatto: <a href="mailto:edilfastmilan@gmail.com" className="text-primary hover:underline">edilfastmilan@gmail.com</a></p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>2. Tipologie di dati raccolti</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Attraverso il modulo di richiesta preventivo o di ricontatto, raccogliamo esclusivamente i seguenti dati personali:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Nome e cognome</li>
                  <li>• Numero di telefono</li>
                  <li>• Indirizzo email</li>
                  <li>• Preferenza su cosa si desidera ristrutturare</li>
                  <li>• Altre informazioni fornite volontariamente relative alla ristrutturazione</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>3. Finalità del trattamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">I dati personali sono trattati esclusivamente per le seguenti finalità:</p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Rispondere alle richieste inviate tramite il modulo di contatto</li>
                  <li>• Fornire preventivi e informazioni personalizzate in base alle esigenze espresse</li>
                  <li>• Offrire un servizio più preciso ed efficace</li>
                </ul>
                <p className="text-muted-foreground">I dati vengono raccolti solo previo consenso espresso da parte dell'utente tramite invio volontario del modulo.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>4. Base giuridica del trattamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  La base giuridica del trattamento è il consenso dell'interessato (art. 6, par. 1, lett. a del GDPR), che viene espresso attraverso l'invio del modulo di contatto.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>5. Modalità di trattamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I dati saranno trattati in forma elettronica, con strumenti adeguati a garantire la sicurezza e la riservatezza. Non utilizziamo i dati per fini commerciali non espressamente richiesti, né li cediamo a terzi.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>6. Conservazione dei dati</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I dati raccolti verranno conservati per il tempo strettamente necessario a soddisfare le finalità per cui sono stati raccolti, salvo diversi obblighi di legge.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>7. Diritti dell'utente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">In ogni momento l'utente ha il diritto di:</p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Accedere ai propri dati personali</li>
                  <li>• Chiederne la rettifica o la cancellazione</li>
                  <li>• Limitare o opporsi al trattamento</li>
                  <li>• Revocare il consenso precedentemente prestato</li>
                  <li>• Presentare reclamo all'Autorità Garante per la protezione dei dati personali</li>
                </ul>
                <p className="text-muted-foreground">
                  Per esercitare i propri diritti è possibile scrivere a: <a href="mailto:edilfastmilan@gmail.com" className="text-primary hover:underline">edilfastmilan@gmail.com</a>
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>9. Modifiche alla presente policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  La presente informativa potrà essere soggetta a modifiche nel tempo. In caso di cambiamenti rilevanti, gli utenti verranno informati tramite questo sito.
                </p>
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
