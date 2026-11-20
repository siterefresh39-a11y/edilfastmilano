import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { OPEN_SETTINGS_EVENT, getStoredChoice, saveChoice } from '@/lib/consent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [adsOn, setAdsOn] = useState(false);

  useEffect(() => {
    // Se non c'è una scelta valida (o è passato più di 6 mesi) mostra il banner
    if (getStoredChoice() === null) setVisible(true);

    const reopen = () => {
      setAdsOn(getStoredChoice() === 'granted');
      setCustomizing(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  const choose = (choice: 'granted' | 'denied') => {
    saveChoice(choice);
    setVisible(false);
    setCustomizing(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferenze cookie"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background p-4 shadow-2xl md:p-5"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-sm text-foreground">
          Questo sito usa cookie tecnici, necessari al suo funzionamento. Con il tuo consenso usa
          anche i cookie di Google per misurare quante richieste arrivano dai nostri annunci.
          Puoi scegliere liberamente e cambiare idea in qualsiasi momento.{' '}
          <Link to="/privacy-policy#cookie" className="underline">
            Maggiori informazioni
          </Link>
        </p>

        {customizing && (
          <div className="mt-4 space-y-3 rounded-md border border-border p-3 text-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium">Cookie tecnici</p>
                <p className="text-muted-foreground">Necessari al funzionamento. Sempre attivi.</p>
              </div>
              <Switch checked disabled aria-label="Cookie tecnici sempre attivi" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium">Misurazione pubblicitaria (Google Ads)</p>
                <p className="text-muted-foreground">
                  Ci dice quante richieste e quante chiamate arrivano dagli annunci.
                </p>
              </div>
              <Switch
                checked={adsOn}
                onCheckedChange={setAdsOn}
                aria-label="Misurazione pubblicitaria Google Ads"
              />
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
          {customizing ? (
            <Button onClick={() => choose(adsOn ? 'granted' : 'denied')}>Salva la mia scelta</Button>
          ) : (
            <>
              <Button variant="outline" onClick={() => setCustomizing(true)}>
                Personalizza
              </Button>
              <Button onClick={() => choose('denied')}>Rifiuta</Button>
              <Button onClick={() => choose('granted')}>Accetta</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
