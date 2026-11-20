// Gestione del consenso cookie e del tag Google (Google Ads).
// Il tag Google viene caricato SOLO dopo il consenso esplicito dell'utente.

const STORAGE_KEY = 'edilfast_consent_v1';
const GOOGLE_TAG_ID = 'GTM-WB39ZVJ7';
const AW_FORM = 'AW-18581256772/c8l8CIODq7odEMT0nZxF';
const AW_PHONE = 'AW-18581256772/I8YcCKfYt7wdEMT0nZxF';
const SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000;

export const OPEN_SETTINGS_EVENT = 'edilfast:open-cookie-settings';

type Choice = 'granted' | 'denied';
type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

const w = window as GtagWindow;

function ensureGtag() {
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
  }
}

export function getStoredChoice(): Choice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const { choice, ts } = JSON.parse(raw) as { choice: Choice; ts: number };
    if (choice !== 'granted' && choice !== 'denied') return null;
    // Dopo 6 mesi la scelta va richiesta di nuovo
    if (Date.now() - ts > SIX_MONTHS_MS) return null;
    return choice;
  } catch {
    return null;
  }
}

let tagLoaded = false;

function loadGoogleTag() {
  if (tagLoaded) return;
  tagLoaded = true;
  ensureGtag();
  w.gtag!('js', new Date());
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_ID}`;
  document.head.appendChild(s);
}

function deleteGoogleCookies() {
  const host = window.location.hostname;
  const domains = [host, `.${host}`, host.replace(/^www\./, ''), `.${host.replace(/^www\./, '')}`];
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (/^(_gcl_|_gac_|_ga|_gid)/.test(name)) {
      domains.forEach((d) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
      });
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  });
}

// Da chiamare una volta all'avvio dell'app: imposta il consenso predefinito
// su "negato" e, se l'utente aveva già accettato, carica il tag.
export function initConsent() {
  ensureGtag();
  w.gtag!('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
  if (getStoredChoice() === 'granted') {
    w.gtag!('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'denied',
    });
    loadGoogleTag();
  }
}

export function saveChoice(choice: Choice) {
  const previous = getStoredChoice();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() }));
  } catch {
    /* nessuna azione: la scelta vale per questa visita */
  }
  ensureGtag();
  if (choice === 'granted') {
    w.gtag!('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'denied',
    });
    loadGoogleTag();
  } else {
    w.gtag!('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    if (previous === 'granted') deleteGoogleCookies();
  }
}

function trackConversion(sendTo: string) {
  // Nessun invio senza consenso: gli eventi non vengono nemmeno messi in coda
  if (getStoredChoice() !== 'granted') return;
  ensureGtag();
  w.gtag!('event', 'conversion', { send_to: sendTo, value: 1.0, currency: 'EUR' });
}

export function trackFormConversion() {
  trackConversion(AW_FORM);
}

// Conta il clic su qualsiasi numero di telefono (link tel:) del sito
export function initPhoneClickTracking() {
  document.addEventListener('click', (e) => {
    const target = e.target as Element | null;
    const link = target?.closest?.('a[href^="tel:"]');
    if (link) trackConversion(AW_PHONE);
  });
}
