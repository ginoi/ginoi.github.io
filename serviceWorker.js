// serviceWorker.js
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
});
  
self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
});
  
// Need this to be detected valid
self.addEventListener('fetch', function(event) {});