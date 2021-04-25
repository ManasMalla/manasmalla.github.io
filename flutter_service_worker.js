'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a815512b5b77f88aa49b78fe6c396278",
"favicon.ico": "80b8925ab99831353c9ab5266f600c6e",
"index.html": "8c7480bd924fdc26cd4eb9dee9850e20",
"/": "8c7480bd924fdc26cd4eb9dee9850e20",
"main.dart.js": "1588d9fd5bd580d7a87bb8fccd737045",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "3a9a36a8d0a03ff82f3cdbf08b986922",
"icons/Icon-512.png": "e56b8dce32dde8fb67f803bb695457e9",
"manifest.json": "d11649244f091ca89015983ab2413101",
".git/config": "c750a473d7d804200eadce4d8333ea1a",
".git/objects/0d/530a7255ecc637aca1233037115c7c93541904": "9b1b218a5058ecf474e29db9ab59865b",
".git/objects/95/92fbb4f51348b593bb960e79c7b6ba615054eb": "de64d91519f87f768c1f9489e232b26d",
".git/objects/50/a6b9d07004f17c6ea211fee9c40f7801313475": "f24ce15c293e2ec3b450b2bee682c2ee",
".git/objects/0b/8b891c19b70304d17651a2d0487b731bef2480": "64a3c21679b19546cc591956a6bb652c",
".git/objects/94/b48b2b7ddba0ea315fec571579140532c0cab0": "1ce2ca2f92e494a523a24cffee00d572",
".git/objects/5a/d4f16ef1169dde382d87f0cba66db4817ca114": "4a740285999d309b3932c2e77e235c7c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/be82451e413c13e434faec0cce72696b290f7e": "c4e5f4f5d1b877daaaf253ca6624c77d",
".git/objects/c9/d9d11ba1a374bfe982f216126c5d0bcf6aebb6": "87dad4b6bf49c3ae47c39e070c5eaab6",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/18/f1c72ab5c0afab508ecd461f5e1f9dbbcfcc1f": "c765f38105beaef53af7162b0475a32a",
".git/objects/16/500cf249621100f00752776e9b1331ad549113": "c1534119467f13521f8014c5b347d9b6",
".git/objects/1a/c5a47335e778aac502d820234157732ee78fe6": "f190966886221d62307b42fc825b6586",
".git/objects/8a/2e1202f16a25dec9101dd9a7bd185af536889f": "07802688f5a8249ef09d9857dd5161c7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/21233abbd46abe63a12aec0ff52ade0331580e": "235d5336135780604a88f5546e2be13c",
".git/objects/43/5521bb184c520008959806767111d1aa85e71c": "83e965273de6f0b07a6935f81c7740ab",
".git/objects/09/5056163535bea6a216696077b8f00fd821a140": "379fb3d279914b29a42a47892b97adbb",
".git/objects/91/d7c0032524ae5541a1a13073f89526da405a27": "81e706a28fc54bec4dd04fc31f9aad3c",
".git/objects/3f/0b3bd3fcdf360249a4c4e560acb1b6cd7e053f": "f5f3e61fbd2e1bf2b64dd7af4a49bc1d",
".git/objects/08/3f006d163ef1f5e05d0f8574d0ceb82a08a9d9": "607566fe4df0d05533001ab20501e3e1",
".git/objects/6d/0b78f437394547150625d44c1358384710843a": "31db2b4515cd0df927ed0dabea6f9daf",
".git/objects/6c/ed71eb9e64be337c34822f2adabfaf0369daf4": "dfbafc348964316718452b99c414905b",
".git/objects/39/02c024ec05702112d276607dfb4baa8edf79c1": "7b14f8df111b3a6260bcd5834fe934bc",
".git/objects/64/73e346c6ea711370e80409cec9b58708187f41": "18787576b20d56e45a95cc61ae5131d1",
".git/objects/a7/06d919732ed8c82c6232e2a78935fd021d024a": "ebfa052ee7c1dd99820a85d528577de9",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/82d4ad4020530f62b87d46b695fedb899efaaf": "0657e5ac5afd3f471f99e8984364b5ae",
".git/objects/f9/abca8eb44311126fd6db0d4a0ecea2203d7dcc": "86c3e4297440a04e0e4497d59df5b49d",
".git/objects/c5/52d35c7f9247a5ec0c9c56c910c5a18c475210": "bc225bca89587f12bdaeea30e54eb97b",
".git/objects/f6/d4d83fe58b10b177fe5303e628c4817055cca0": "916a79916d8105c1674ca7872814f8e8",
".git/objects/cb/226fa48c89f664102209d732335267bf1a2f9f": "a85bd75092c096f8e3f210fa09d5c6c9",
".git/objects/f8/73388463bc2ae305159adc380a5c244fcb23ad": "3be666caa4cd8ba27988670c827e7518",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/a20f735278e4c2e22bcd19f1303f280b5f5899": "7dcc77fbef143975aca2f179111e4769",
".git/objects/41/a35364929c001036288244f2d5d6e122ad822c": "d47516be369cb690d7d31450ae7ccb9a",
".git/objects/70/234ca9d851593c1d354bbf588a061ded39d2ab": "644e57df1028e2502db7ba7bfd75634d",
".git/objects/70/d8025fdef8dfd1d1725207c20ad0e249600638": "eb3d04e95c72e6a15f2ad2ebf4406108",
".git/objects/24/bb6bd7dc7f20274a122b97cff3c8dbb5af7c6f": "ced0873eac81642f00a4301058a37797",
".git/objects/15/2e9b8db18a88ea91ff199e67edec1758090843": "0218d32a1bdb9d705450df63a5973ef8",
".git/objects/15/a6a6905560df29c70e4fe826266cbce6d0a461": "5b2ca4a18e78c56dafd9c38bd69906b6",
".git/objects/8c/3e09876dc136361c76aecfac6af97af903012a": "324740c2f4dcc71a86b7cf3d8ed6d31c",
".git/objects/85/7ed65a9768ec6e67f611521beb3902c2519be8": "0714b73d7f48c6f78889589d85f7ca52",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f6c235b7b7fd18d576e82473c3714900",
".git/logs/refs/heads/master": "f6c235b7b7fd18d576e82473c3714900",
".git/logs/refs/remotes/origin/master": "b4f84d36653eae3c0087cd2ea2b55dd3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "61ebfbfd42c4c3fcd7aae7a9369d8965",
".git/refs/remotes/origin/master": "61ebfbfd42c4c3fcd7aae7a9369d8965",
".git/index": "7c3fa3331ef91b6093c34753584297da",
".git/COMMIT_EDITMSG": "c085f9acd3be1296f727b0ea4e7dda0d",
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
