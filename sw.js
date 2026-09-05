/* Treino do Glau — service worker
   Suba a versão sempre que alterar o index.html, para forçar atualização. */
const VERSAO = 'treino-glau-v11';
const ARQUIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', ev => {
  ev.waitUntil(
    caches.open(VERSAO)
      .then(c => c.addAll(ARQUIVOS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', ev => {
  const req = ev.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;   // fontes e YouTube passam direto

  if (req.mode === 'navigate') {
    // rede primeiro para a página, com o cache como rede de segurança offline
    ev.respondWith(
      fetch(req)
        .then(r => { const c = r.clone(); caches.open(VERSAO).then(k => k.put('./index.html', c)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  ev.respondWith(
    caches.match(req).then(r => r || fetch(req).then(res => {
      const c = res.clone();
      caches.open(VERSAO).then(k => k.put(req, c));
      return res;
    }).catch(() => r))
  );
});
