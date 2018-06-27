

//Setting up listener for serviceWorker event "install"
self.addEventListener("install", function(event) {
  // Perform install steps
  console.log("[Servicework] Install");
  event.waitUntil(
    caches.open('restaurant').then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll([
        '/',
        'css/styles.css',
        'data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        'index.html',
        'restaurant.html',
        'sw.js',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg'
        //'https://normalize-css.googlecode.com/svn/trunk/normalize.css'
        ])
    })
  );
});



//Setting up listener for serviceWorker event "fetch"
self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
