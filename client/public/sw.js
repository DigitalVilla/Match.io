
self.addEventListener('fetch', e => {
  const offLine = new Response('<h2>OFLINE</h2>You are Offline')

  const resp = fetch(e.request)
    .catch(() => offLine)


  e.respondWith(resp)
})