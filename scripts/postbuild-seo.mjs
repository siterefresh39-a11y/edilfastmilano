// Dopo "vite build": crea una pagina HTML vera per ogni indirizzo del sito,
// con titolo, descrizione e indirizzo canonico propri.
// Così GitHub Pages risponde "200 OK" alle sottopagine (prima rispondeva 404)
// e Google legge i dati giusti già dall'HTML, senza dover eseguire JavaScript.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const cfg = JSON.parse(readFileSync('src/config/seo-routes.json', 'utf8'));
const dist = 'dist';
const base = readFileSync(join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function setTag(html, re, replacement, label) {
  if (!re.test(html)) throw new Error(`Tag non trovato in index.html: ${label}`);
  return html.replace(re, () => replacement);
}

const urlFor = (path) => cfg.siteUrl + (path === '/' ? '/' : `${path}/`);

function render(path, r) {
  const url = urlFor(path);
  let h = base;
  h = setTag(h, /<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`, 'title');
  h = setTag(h, /<meta name="description"[^>]*>/, `<meta name="description" content="${esc(r.description)}" />`, 'description');
  h = setTag(h, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`, 'canonical');
  h = setTag(h, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(r.title)}" />`, 'og:title');
  h = setTag(h, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(r.description)}" />`, 'og:description');
  h = setTag(h, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`, 'og:url');
  h = setTag(h, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(r.title)}" />`, 'twitter:title');
  h = setTag(h, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(r.description)}" />`, 'twitter:description');
  return h;
}

// Pagina di errore (indirizzi che non esistono): resta 404 e non va indicizzata
const notFound = setTag(
  base,
  /<link rel="canonical"[^>]*>/,
  '<meta name="robots" content="noindex" />',
  'canonical (404)'
);
writeFileSync(join(dist, '404.html'), notFound);

let count = 0;
for (const [path, r] of Object.entries(cfg.routes)) {
  const html = render(path, r);
  if (path === '/') {
    writeFileSync(join(dist, 'index.html'), html);
  } else {
    const dir = join(dist, path.replace(/^\//, ''));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }
  count += 1;
}
console.log(`SEO: create ${count} pagine statiche + 404.html`);
