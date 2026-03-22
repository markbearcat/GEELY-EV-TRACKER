// Geely EX5 EV Tracker — Service Worker
// Cache name — bump version to force update
const CACHE_NAME = 'ev-tracker-v1';

// Files to cache for offline use
const CACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  // External fonts & chart.js are fetched from CDN at runtime
  // They'll be cached on first load via the fetch handler
];

// ─── Install: pre-cache core assets ─────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ─── Activate: clean up old caches ──────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ─── Fetch: serve from cache, fall back to network ──────────
self.addEventListener('fetch', event => {
  // Skip non-GET requests and browser-extension requests
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Not in cache — fetch from network and cache the response
      return fetch(event.request).then(response => {
        // Only cache valid responses (not opaque errors)
        if (!response || response.status !== 200) return response;

        // Don't cache chrome-extension or data: URLs
        if (
          event.request.url.startsWith('chrome-extension') ||
          event.request.url.startsWith('data:')
        ) return response;

        const cloned = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, cloned);
        });
        return response;
      }).catch(() => {
        // Offline fallback: return index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
