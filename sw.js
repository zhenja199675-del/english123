const CACHE = 'en-app-v20';
const FILES = ['./', 'index.html', 'theme.css?v=3', 'data.js?v=5', 'exercises.js?v=1', 'theory.js?v=1', 'audio/manifest.json', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png',
  'murphy/u1-2.jpg', 'murphy/u1-3.jpg', 'murphy/u2-4.jpg', 'murphy/u2-5.jpg',
  'murphy/u3-6.jpg', 'murphy/u3-7.jpg', 'murphy/u4-8.jpg', 'murphy/u4-9.jpg',
  'murphy/key-a.jpg', 'murphy/key-b.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isPage = e.request.mode === 'navigate';

  if (isPage){
    // страницу всегда сначала из сети, офлайн — из кеша
    e.respondWith(
      fetch(e.request, { cache:'reload' }).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('index.html', copy)).catch(() => {});
        return res;
      }).catch(() => caches.match('index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }))
  );
});
