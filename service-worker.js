const CACHE_NAME = 'physio-v6';
const STATIC_FILES = [
  '/login.html', '/choose-role.html', '/choose-year.html', '/student-dashboard.html', '/index.html',
  '/plans.html', '/my-exercises.html', '/progress.html', '/pain-helper.html',
  '/patient-helper.html', '/patient-files.html',
  '/exercises-library.html', '/exercises-videos.html', '/guidelines.html',
  '/muscle-test.html', '/therapeutic-exercises.html', '/doctor-progress.html',
  '/database.html', '/profile.html', '/community.html', '/student-chat.html', '/css/theme.css', '/css/mobile.css',
  '/js/utils.js', '/js/firebase-config.js', '/js/login.js', '/js/db.js', '/manifest.json',
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(STATIC_FILES).catch(() => {})));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('firebase') || url.includes('googleapis') || url.includes('youtube') || url.includes('fonts.') || url.endsWith('.apk') || url.endsWith('.pdf')) return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && res.status === 200 && e.request.method === 'GET') {
        caches.open(CACHE_NAME).then(c => c.put(e.request, res.clone()));
      }
      return res;
    }).catch(() => caches.match(e.request).then(cached => cached || (e.request.destination === 'document' ? caches.match('/login.html') : null)))
  );
});
