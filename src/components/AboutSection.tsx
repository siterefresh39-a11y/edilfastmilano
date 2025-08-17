const AboutSection = () => {
  return (
    <section
      id="chi-siamo"
      className="py-16 md:py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-2">
                Chi Siamo
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Siamo i fratelli di Edil Fast Milano, il nostro obiettivo è semplice: aumentare realmente il valore della tua casa con ristrutturazioni pensate su misura per te.
                Siamo nati per portare un nuovo modo di lavorare nel settore edile: più rapido, più trasparente e totalmente incentrato sulle tue esigenze.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🚀</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Tempistiche veloci</h3>
                    <p className="text-sm">
                      Ogni giorno dimostriamo che qualità e velocità possono andare d'accordo. Pianifichiamo ogni intervento nei minimi dettagli per ridurre al minimo i tempi di esecuzione, senza compromessi sul risultato finale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📄</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Preventivi gratuiti e su misura</h3>
                    <p className="text-sm">
                      Ti ascoltiamo, analizziamo le tue necessità e ti forniamo un preventivo chiaro, personalizzato e completamente gratuito. Nessuna sorpresa, solo trasparenza.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">💬</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Comunicazione velocissima</h3>
                    <p className="text-sm">
                      Per noi il dialogo è fondamentale. Rispondiamo velocemente, ti aggiorniamo in tempo reale sull'andamento dei lavori e siamo sempre disponibili per qualsiasi esigenza o modifica.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">💰</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Il prezzo lo decide il cliente</h3>
                    <p className="text-sm">
                      Siamo convinti che ogni persona debba poter scegliere in piena libertà. Per questo, ti proponiamo più soluzioni, sarai tu a decidere quella che ritieni più adatta al tuo budget.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📈</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Ristrutturiamo per aumentare il reale valore del tuo immobile</h3>
                    <p className="text-sm">
                      Ogni nostra scelta progettuale ha un obiettivo preciso: aumentare il valore dell'immobile.
                      Non ci limitiamo a "rifare una stanza", ma studiamo il potenziale reale degli spazi e li trasformiamo in veri investimenti.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/30 pt-6 mt-8">
                <div className="text-center">
                  <h3 className="font-bold text-foreground text-lg mb-2">Edil Fast Milano</h3>
                  <p className="text-sm font-medium">
                    Veloci. Precisi. Concreti.
                  </p>
                  <p className="text-sm mt-1">
                    E sempre focalizzati su ciò che conta davvero: valorizzare la tua casa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="order-1 lg:order-2">
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-background to-muted/20 rounded-3xl p-12 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30">
                <img 
                  src="/lovable-uploads/012fb361-4926-4947-8016-0db47d733f90.png"
                  alt="EDIL FAST MILANO Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;