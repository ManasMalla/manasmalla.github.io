'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1e42ef5a72c7057a1aca67829e1250f8",
"index.html": "3b35f0411adb2bca79ab837fca30b23c",
"/": "3b35f0411adb2bca79ab837fca30b23c",
"main.dart.js": "5643687e8049d985bf2e7364feb49fcd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "161bc6f27cd0ddacc6348d0cef9521a0",
"assets/AssetManifest.json": "5c2883f4aa99df8d00d8d14de8a217de",
"assets/NOTICES": "da9f8d51670caf1930bbfbab705e52a1",
"assets/FontManifest.json": "0b776b880bac01658f90795873d89013",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/fonts/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"assets/fonts/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"assets/fonts/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/fonts/Quicksand-Light.ttf": "188ca708e4cbbbe3837c3d904b8eeb61",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/ic_aarogya_sedentary.png": "8d3a643a15e2c382a9d05f8711f439c0",
"assets/assets/images/weight_scale.png": "8161b48468b529d18e7c4b543fe8166d",
"assets/assets/images/fruits.png": "cfa0d376c2c2d6d6fc5f8baa522e7593",
"assets/assets/images/pillow.png": "8c55f2df5886569e1f54afd2937863d6",
"assets/assets/images/diabetes.png": "207a768c650118276b9edc5863bb03f6",
"assets/assets/images/ruler.png": "70f13ae4f8b7faad9f7c2b79e8f598d0",
"assets/assets/images/thyroid.psd": "bcf69531fb85b312cdee681e075ffec2",
"assets/assets/images/arrow_right.png": "0786e8e9fe8da7425c699f97880ea5e2",
"assets/assets/images/cake.png": "af2562839182c7585a2e08373ae8fd58",
"assets/assets/images/twitter_logo.svg": "922d9097b264fe48bf8975361fed3d01",
"assets/assets/images/gender_boy.png": "e3e3f7a825be930b3f26972d90f83189",
"assets/assets/images/protien_indicator.png": "22176871051a13189877ea35e5f2c58a",
"assets/assets/images/girl_gender.png": "226e49e77b293696e8580ad0968ff9e4",
"assets/assets/images/Thyroid%2520copy.psd": "74b3efafc595115b3ed91510074b025a",
"assets/assets/images/thyroid.png": "e62f66a633c421dc6f569f195ccf4517",
"assets/assets/images/ic_aarogya_hectic.png": "047fb35bfaf64270edb222cf5b8b4cf0",
"assets/assets/images/about_me_background.png": "f91888539be0065ead88514dac56729a",
"assets/assets/images/weight_page_indicator.png": "3d01942c31f1d340b44aa8253ca54b73",
"assets/assets/images/yoga_review.png": "99a6ec101c44d336d7767691b18dd6c9",
"assets/assets/images/doctor_manas.png": "73a5311a3a7897e54cec91e59ac9b599",
"assets/assets/images/facebook_logo.svg": "fde37ea3b8435ac02cd832f9cbb4ed48",
"assets/assets/images/apple_logo.svg": "d26cc692bf5bc793d0dead7da4e205b1",
"assets/assets/images/aarogya_vrukasana.png": "131b32852338ad3e855657c185cc0cd6",
"assets/assets/images/about_you.png": "66ec9ef146f5a8d7d2ec16e8acf7bd6e",
"assets/assets/images/cholestrol_indicator.png": "41f2945e1fafc906c100cb2f720cd36d",
"assets/assets/images/yoga_review_aarogya.png": "8b8b4582a7be75646255851507e2e1a9",
"assets/assets/images/carbohydrate_indicator.png": "6d0b6ea944e26f2c51b23f47ed91890d",
"assets/assets/images/_Group_.psd": "3973f946d1a1cfedc721a6e0315b21c7",
"assets/assets/images/calorie_indicator.png": "713723ed6aa130e8436d12b8c1479a9a",
"assets/assets/images/arrow_right.svg": "04fc05bd27a3127c8348313abb90299b",
"assets/assets/images/microsoft_logo.svg": "7c81ec38b5d0c5695a28dd3e83b0c634",
"assets/assets/images/fat_indicator.png": "0b017ec872e497f231e59721f11700bf",
"assets/assets/images/activity_page_indicator.png": "e64167933d0201e9fb1ebd3bb1bd1cd4",
"assets/assets/images/ic_aarogya_hectic_flip.png": "f4c2eacf92bf9468444fe53aeec2040e",
"assets/assets/images/New%2520Project.png": "bcece0fb8ea7adda379e12aa5141c254",
"assets/assets/images/doctor_aarogya.png": "ef221bcc6ced64676407cbe9ac572056",
"assets/assets/images/ic_aarogya_height.png": "dc22b677b126c3d86049856e0c92dda8",
"assets/assets/images/login_screen_background.png": "ab29a67541f2efac1fc0ce3575818d69",
"assets/assets/images/age_page_indicator.png": "00ebc4161c003310c7bc28b9449139be",
"assets/assets/images/water_glass.png": "5042a61c7b58da20806eb6125f6823c6",
"assets/assets/images/im_all_well.png": "f315f6b35383191a289df85151d2ef09",
"assets/assets/images/ic_drop_down.svg": "968baa23ae79bcb26f5c7f624a55a78f",
"assets/assets/images/aarogya_meditation.png": "4cb594afb79973892a1561c1d983749d",
"assets/assets/images/ic_aarogya_weight.png": "418de0a1e31a952beb01087b63971f75",
"assets/assets/images/health_page_indicator.png": "0c5f0557644d7dd2cbfc9e0fe1b20b4b",
"assets/assets/images/login_card.png": "a348988a4f1f09e9bb7cfa2d182342bd",
"assets/assets/images/ic_aarogya_active.png": "fb1fb1e04ef55442e6406e424ca6b86c",
"assets/assets/images/fibre_indicator.png": "8ac44bcdfa224287e4e2222bd2c924cf",
"assets/assets/images/image.psd": "fd90263c47f6fa1bbc1d0449bf90763e",
"assets/assets/images/google_logo.svg": "b7727941c0e8a117b6cfd8f06a1cb7ed",
"assets/assets/images/aarogya_meditation_land.png": "838659c766a5f4bea1ff9d9a349ef1cd",
"assets/assets/images/bottom_clip_next_button.svg": "d16f8374108a91a0bab4c1e3178d9bdb",
"assets/assets/images/height_page_indicator.png": "32821e36339d7cfc8e3754b4bcce5184",
"assets/assets/images/add_profile_pic.png": "6638369fdb2adff4cbac517919d22796",
"assets/assets/images/gender_page_indicator.png": "59599f311592e4b0bc992b1ca1dc031a",
"assets/assets/images/sofa_background.png": "5a8bad983220c182918f3a565dcd0866"
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
