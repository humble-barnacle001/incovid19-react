if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"eea38e1bf91b9267048ba588b5705f07","url":"404.html"},{"revision":"cb28d6aeb439fd6b3211ec0606be09f7","url":"98c45929971ca7637598.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"eea38e1bf91b9267048ba588b5705f07","url":"index.html"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"a1f5e14da36e6095e34815abe65d8b20","url":"static/css/22.f2d25b90.chunk.css"},{"revision":"ce3aec4c9c8ce12b4516e2279b43ea4b","url":"static/css/3.1432c553.chunk.css"},{"revision":"3d0130ea8efd2561a6192c71f3757dab","url":"static/js/0.6f89c99d.chunk.js"},{"revision":"2468987b1bcb5101dc9f39a5708c6b72","url":"static/js/1.853b8681.chunk.js"},{"revision":"a4af98d83bfc9eabd98246c8601dfaf2","url":"static/js/12.9346bcda.chunk.js"},{"revision":"03bad50026546676d3edddaa2cab90d1","url":"static/js/13.5d654b95.chunk.js"},{"revision":"e558166406768fa8e501bbc0ce775958","url":"static/js/14.8aa34620.chunk.js"},{"revision":"2dc875947049cb97c9f032bbfa861e3b","url":"static/js/15.8f108068.chunk.js"},{"revision":"40ee7226881734de9331c65bd87f9744","url":"static/js/16.3613e2e5.chunk.js"},{"revision":"cd6d6d81d1c2588d3f132d1cb09b4d60","url":"static/js/17.f06a10d3.chunk.js"},{"revision":"1ed54091cfb12d4e44bd57d8e2d3dbe9","url":"static/js/18.d7208265.chunk.js"},{"revision":"e870bdba0c63946a2bdc5d56aea23c43","url":"static/js/19.ee749e91.chunk.js"},{"revision":"55895975363950a1d2ab7b9f5d3c41b7","url":"static/js/2.9b05d02c.chunk.js"},{"revision":"92eb56c339c61cdb85efc73d2e36f670","url":"static/js/20.d3fb8f52.chunk.js"},{"revision":"5d836990fec32d3ffa33721f69986ea0","url":"static/js/21.cecfb0c7.chunk.js"},{"revision":"6417331c2a00427e58ac0770dc8e2226","url":"static/js/22.3f62a067.chunk.js"},{"revision":"d570ea3402f7e0f0bdce3c31ef770fb8","url":"static/js/23.2115774d.chunk.js"},{"revision":"cfccd23ba8f4b6cc2b0d55df5a6c483c","url":"static/js/24.72367bad.chunk.js"},{"revision":"10759d7a4b9525263b8b6f0c7348c1e3","url":"static/js/25.7da5e1f0.chunk.js"},{"revision":"d2cacc303e53b888140e80aed604f47c","url":"static/js/26.0438299c.chunk.js"},{"revision":"85394fd2d25624db04adc9984cc78f9c","url":"static/js/27.4fb5a9aa.chunk.js"},{"revision":"416771e155f03899047af2962d3bc110","url":"static/js/28.75415310.chunk.js"},{"revision":"3722b5ef0cc2c02209a80ecedf29d2af","url":"static/js/29.a8841398.chunk.js"},{"revision":"3779440f934877a092871e4ea1ceb3a8","url":"static/js/3.3dc73908.chunk.js"},{"revision":"304cd2de6a2faf032b3d9c17de8261b8","url":"static/js/30.dc9a0140.chunk.js"},{"revision":"6c7a0c17d0a905ca75a222bddf434d8a","url":"static/js/31.e5bb9a3c.chunk.js"},{"revision":"dfe73be6542e5e1133cf09ad946ad076","url":"static/js/32.829c4358.chunk.js"},{"revision":"32f344c0100698696daaefc0d49d2578","url":"static/js/33.659959df.chunk.js"},{"revision":"9861e19cd7356bafd916ba4e368e76e4","url":"static/js/34.decb9fb2.chunk.js"},{"revision":"7ff6c7c7f29401d67c193c9eb155b7d7","url":"static/js/35.7e478ee1.chunk.js"},{"revision":"1c183e3ccf38e06105babbe4451b16df","url":"static/js/36.64d60e11.chunk.js"},{"revision":"a974d20dedaa187f916968cb7f594603","url":"static/js/37.5c4c890e.chunk.js"},{"revision":"16ab0d507e1b0a2ed035ae4d56189a3d","url":"static/js/38.1d508100.chunk.js"},{"revision":"ed0e8dd9dd3ad49b3f966d64e1278b99","url":"static/js/39.03e56701.chunk.js"},{"revision":"75d3e347cfc6e6018581478fbfe575ce","url":"static/js/4.27634487.chunk.js"},{"revision":"ea7ebe81d508449fceebe1884de7cf36","url":"static/js/40.9050d13c.chunk.js"},{"revision":"27473fc8c60cd1ea491ccc39d18cf2c7","url":"static/js/41.b9aa7fb8.chunk.js"},{"revision":"22873588c72647c5d6bd021facdee654","url":"static/js/42.e52e6904.chunk.js"},{"revision":"694c1c8d82ab866b7a301b3efff16574","url":"static/js/43.fad6d733.chunk.js"},{"revision":"9f555120a45cdb01fe5361f3043aa1da","url":"static/js/44.e697067b.chunk.js"},{"revision":"d46ea7ae99593133b59782e493314438","url":"static/js/45.280eafd0.chunk.js"},{"revision":"627c57d292f283d3d7e7aaaafd0dedd7","url":"static/js/46.070f98c8.chunk.js"},{"revision":"ef3c65b44ecdbab896e5edd97a5da8c0","url":"static/js/47.1d44126c.chunk.js"},{"revision":"22b0fb68106baa2830e40761842204ef","url":"static/js/48.6ada0cad.chunk.js"},{"revision":"69d312345a360030bcde9ae73cc3c876","url":"static/js/49.45339184.chunk.js"},{"revision":"1b61688dced154d2e0d948465a5753c6","url":"static/js/5.e8f75ad1.chunk.js"},{"revision":"5e78d9082b9d3b94993ffe7f8dab36fd","url":"static/js/6.8a00f94e.chunk.js"},{"revision":"318f41abe9ae4456a6d8b0ab9de8a71d","url":"static/js/7.527c94e8.chunk.js"},{"revision":"e819ee9a1bda46086703410c803f6440","url":"static/js/8.1116fd1d.chunk.js"},{"revision":"b8fe2ce4154f24d8c9b36737dfda1be2","url":"static/js/9.0d5934e8.chunk.js"},{"revision":"d68cbddb2cc9b9094f70b9b6862270ec","url":"static/js/main.7116272e.chunk.js"},{"revision":"a9b13802b6196fbea293ab01a65fd37e","url":"static/js/runtime-main.78596796.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.incovid19\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
