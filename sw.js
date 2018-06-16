//Cache created
const cache_mws = "restaurant";
const files_Cache = [
  '/',
  '/css/styles.css',
  '/data/restaurant.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/resturant_info.js',
  '/js/SWreg.js',
  '/index.html',
  '/package-lock.json',
  '/restaurant.html',
  '/sw.js'
  //'https://normalize-css.googlecode.com/svn/trunk/normalize.css'
  ];


//Setting up listener for serviceWorker event "install"
self.addEventListener("install", function(event) {
  // Perform install steps
  console.log("[Servicework] Install");
  event.waitUntil(
    caches.open(cache_mws).then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(files_Cache);
    })
  );
});

//Setting up listener for serviceWorker event "activate"
self.addEventListener("activate", function(event) {
  console.log("[Servicework] Activate");
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cache_mws) {
          console.log("[ServiceWorker] Removing old cache shell", key);
          return caches.delete(key);
        }
      }));
    })
  );
});

//Setting up listener for serviceWorker event "fetch"
self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] Fetch");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );

});
