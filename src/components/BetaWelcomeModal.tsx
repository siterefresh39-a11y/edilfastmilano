import { useState, useEffect } from 'react';
import { AlertTriangle, Smartphone, Bug, Clock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const BetaWelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('beta-welcome-dismissed');
    if (!hasSeenWelcome) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('beta-welcome-dismissed', 'true');
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/20">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <DialogTitle className="text-xl font-semibold">
              Benvenuto nella versione Beta
            </DialogTitle>
          </div>
          <DialogDescription className="text-left space-y-4 text-base">
            <p className="leading-relaxed">
              Grazie per aver visitato il nostro sito! Ti informiamo che stai 
              navigando nella versione <strong>Beta</strong> del nostro sito web.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Smartphone className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>Non è ancora ottimizzato per la visualizzazione da smartphone</span>
              </div>
              
              <div className="flex items-start gap-3">
                <Bug className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>Potrebbero verificarsi bug o comportamenti inaspettati</span>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>Potresti riscontrare rallentamenti durante la navigazione</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
              💡 <strong>Consiglio:</strong> Per un'esperienza ottimale, ti consigliamo 
              di visitare il sito da desktop o tablet.
            </p>
            
            <p className="text-sm">
              Grazie per la tua pazienza mentre lavoriamo per migliorare l'esperienza utente!
            </p>
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="dont-show-again" 
              checked={dontShowAgain}
              onCheckedChange={(checked) => setDontShowAgain(checked === true)}
            />
            <label 
              htmlFor="dont-show-again" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Non mostrare più questo messaggio
            </label>
          </div>
          
          <Button onClick={handleClose} className="w-full">
            Ho capito
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BetaWelcomeModal;