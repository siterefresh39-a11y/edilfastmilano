import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seo from '@/config/seo-routes.json';

type Route = { title: string; description: string };
const routes = seo.routes as Record<string, Route>;

function setMeta(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

// Aggiorna titolo e descrizione quando si cambia pagina dentro il sito.
// (Per Google e per le anteprime sui social le stesse informazioni sono già
// scritte nell'HTML di ogni pagina dallo script scripts/postbuild-seo.mjs.)
const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    const route = routes[path];
    if (!route) {
      document.title = `Pagina non trovata | ${seo.siteName}`;
      return;
    }
    document.title = route.title;
    setMeta(
      'meta[name="description"]',
      () => {
        const m = document.createElement('meta');
        m.setAttribute('name', 'description');
        return m;
      },
      'content',
      route.description
    );
    setMeta(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement('link');
        l.setAttribute('rel', 'canonical');
        return l;
      },
      'href',
      seo.siteUrl + (path === '/' ? '/' : `${path}/`)
    );
  }, [pathname]);

  return null;
};

export default SeoManager;
