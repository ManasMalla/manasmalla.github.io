'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a815512b5b77f88aa49b78fe6c396278",
"favicon.ico": "80b8925ab99831353c9ab5266f600c6e",
"index.html": "e47ba7fe6536ff36fbb0c0ad749cc74e",
"/": "e47ba7fe6536ff36fbb0c0ad749cc74e",
"main.dart.js": "95679d52a3e0937fdcfe70feef076c87",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "3a9a36a8d0a03ff82f3cdbf08b986922",
"icons/Icon-512.png": "e56b8dce32dde8fb67f803bb695457e9",
"manifest.json": "d11649244f091ca89015983ab2413101",
"assets/AssetManifest.json": "edfa9d71edc09997fff7395d799943ea",
"assets/NOTICES": "5c53944abeb48ce31980087158a94d9e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/home.svg": "20310f1b40078d4152f0a5216a4a5ea5",
"assets/assets/images/github.svg": "f829be60a659e00779f54ee79fad3d88",
"assets/assets/images/briefcase.svg": "33002edd3304fafcb8013afec193aac3",
"assets/assets/images/manasmalla.png": "4f631eb3b04b7fb6d3e24cf50169f03d",
"assets/assets/images/lion.svg": "6a8e46835b0bf0b860b8aa9eaba91e72",
"assets/assets/images/instagram.svg": "e70557eab16992300ddc3edf502a9ce7",
"assets/assets/images/gangleader.svg": "2d818fb80c0747b284619843daf82dcb",
"assets/assets/images/apple_logo.svg": "9b2cbea3dc45eb86fcdbc0133d34e976",
"assets/assets/images/mail.svg": "a8e251a05bc9aec11849b13b8a4c4c05",
"assets/assets/images/indian.svg": "3e41ed07fe73eaaab3878b8222316f09",
"assets/assets/images/heart_filled.svg": "b1347827f389f98d42fd25eb45b39af4",
"assets/assets/images/facebook.svg": "2fe7df2df9e1e415e221f2c28345264e",
"assets/assets/images/leaves.svg": "2341c9ced6f214a051b1db6554179274",
"assets/assets/images/social_card.png": "e2ab7c690a7b4404836919dbb8a7c1ef",
"assets/assets/images/youtube.svg": "94a89b9babc8dfab4d83ff10170f32d5",
"assets/assets/images/twitter.svg": "21765a7a4abcde15fbd06f4d7d23e774",
"assets/assets/images/developer.svg": "7df703ecbd9877962e427d3bb01547de",
"assets/assets/images/student.svg": "5cb57e8b14273b18990e56574c37cc17",
"assets/assets/images/heart.svg": "4cb03b7b976efe44195277f9d634237c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
