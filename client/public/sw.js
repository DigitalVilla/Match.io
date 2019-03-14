const STATIC_CACHE = 'static-v2';
// const static_cache = 'static-v1';
// const static_cache = 'static-v1';

const APP_SHELL = [
  '/',
  'index.html',
  'favicon.ico',
  'img/icon.png',
  'static/js/2.488b67ad.chunk.js',
  'static/js/main.710a3af1.chunk.js',
  'static/js/runtime~main.fdfcfda2.js',
  'static/css/main.1b2d548a.chunk.css',
]

//Save main files in the cache
self.addEventListener('install', e => {
  const cacheStatic = caches.open(STATIC_CACHE)
    .then(cache => cache.addAll(APP_SHELL));

  e.waitUntil(Promise.all([cacheStatic]));
})

//Update changes in main files
self.addEventListener('activate', e => {
  const resp = caches.keys()
    .then(keys => {
      keys.forEach(key => {
        if (key !== STATIC_CACHE && key.includes('static'))
          return caches.delete(key)
      })
    });

  e.waitUntil(resp);
})

self.addEventListener('fetch', e => {

  const resp = caches.match(e.request).then(res => {
    // test dynamic cache
    if (res) return res
    else console.log(e.request.url);


  })

  e.respondWith(resp)
})
