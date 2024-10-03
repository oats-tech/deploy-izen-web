'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"appLogo.png": "b82c4e3a8251a65df5658422e4602cc4",
"assets/AssetManifest.bin": "9d560d83013a94b019e6d09ac9578595",
"assets/AssetManifest.bin.json": "c0885fbf073a339a4d8e8298d8b49106",
"assets/AssetManifest.json": "f95e83b0a1c77689a049f2c21a0488f9",
"assets/assets/audioFile/english_Bill/english-bill-1.m4a": "38ece84f69d2b8b28f988f0f2539b830",
"assets/assets/audioFile/english_Bill/english-bill-10.m4a": "fdfb4b51fdcf5bed4f445513d118af50",
"assets/assets/audioFile/english_Bill/english-bill-11.m4a": "38ffe27ed84463d2f23df5814f8ed8ae",
"assets/assets/audioFile/english_Bill/english-bill-12.m4a": "02a6eb5d8d8ea159a478b2fd92045afb",
"assets/assets/audioFile/english_Bill/english-bill-13.m4a": "c18a7b050ed0b1b52cf3f386a96a5c1f",
"assets/assets/audioFile/english_Bill/english-bill-14.m4a": "6795a68377f4a5ebaf05855c7d43d8d5",
"assets/assets/audioFile/english_Bill/english-bill-2.m4a": "158d83d84b5c089c7a658d8e6af0e828",
"assets/assets/audioFile/english_Bill/english-bill-3.m4a": "466016d2d07b9ba3f6deab4e8b6d21e4",
"assets/assets/audioFile/english_Bill/english-bill-4.m4a": "b8641fc0cc143ac37ff424a2c747e4a8",
"assets/assets/audioFile/english_Bill/english-bill-5.m4a": "5b53f4409ae015d03d4115baf54aed55",
"assets/assets/audioFile/english_Bill/english-bill-6.m4a": "224bd54f274d787b6f99d16a8bc9035c",
"assets/assets/audioFile/english_Bill/english-bill-7.m4a": "50d66f79d17e5e27894740abe930b5b4",
"assets/assets/audioFile/english_Bill/english-bill-8.m4a": "0f78f937bdb4c58e211ab1fe1763a126",
"assets/assets/audioFile/english_Bill/english-bill-9.m4a": "c582fb2dec0b4a5d1ae96943d1c9bcbd",
"assets/assets/audioFile/english_Mariah/english-mariah-1.m4a": "fd75485cc9325ebc4da16d152325ad53",
"assets/assets/audioFile/english_Mariah/english-mariah-10.m4a": "09ad168baa3011607837f931aa75b1ff",
"assets/assets/audioFile/english_Mariah/english-mariah-11.m4a": "a68a8e6a39fd77c12bc860879eea0694",
"assets/assets/audioFile/english_Mariah/english-mariah-12.m4a": "b0add33656f990c1b6da983757441f03",
"assets/assets/audioFile/english_Mariah/english-mariah-13.m4a": "f6a0aa0ac3894a5d9760f3a3223aa771",
"assets/assets/audioFile/english_Mariah/english-mariah-14.m4a": "e9c3585c0aeb864fb09e2989f8806e77",
"assets/assets/audioFile/english_Mariah/english-mariah-2.m4a": "5720c1374a3445a757b00975fc08496d",
"assets/assets/audioFile/english_Mariah/english-mariah-3.m4a": "cdb7d8f8dfb51bc620837934ac71651e",
"assets/assets/audioFile/english_Mariah/english-mariah-4.m4a": "31647ebf62d96a5f731c02025045f99c",
"assets/assets/audioFile/english_Mariah/english-mariah-5.m4a": "5b6a9a430704e387bbc7b1c46ac0254b",
"assets/assets/audioFile/english_Mariah/english-mariah-6.m4a": "05cca939c8ad9764271736de582fd3b7",
"assets/assets/audioFile/english_Mariah/english-mariah-7.m4a": "ff1040e6f8c035713ce6cc0dac1b7ffd",
"assets/assets/audioFile/english_Mariah/english-mariah-8.m4a": "d76caeb0a2f32024296fa06e8a6e2c6e",
"assets/assets/audioFile/english_Mariah/english-mariah-9.m4a": "8fdd51e050931dff018ab41db36f0796",
"assets/assets/audioFile/english_Stephanie/english-stephanie-1.m4a": "54b4a48d218b2543bb1f9b335f77e3d1",
"assets/assets/audioFile/english_Stephanie/english-stephanie-10.m4a": "2658e30656aafa73caddeac5b5a22fe9",
"assets/assets/audioFile/english_Stephanie/english-stephanie-11.m4a": "3987d9e9291c113aaaa86cfaa6992fd0",
"assets/assets/audioFile/english_Stephanie/english-stephanie-12.m4a": "571feb0d5613345bb2996607c526be90",
"assets/assets/audioFile/english_Stephanie/english-stephanie-13.m4a": "9835a33adf20108d0d82918307778909",
"assets/assets/audioFile/english_Stephanie/english-stephanie-14.m4a": "5e7de4ee38c159cfbfc3e15d008dbce1",
"assets/assets/audioFile/english_Stephanie/english-stephanie-2.m4a": "14df44ef2f2d158aa38bde858ba0a47c",
"assets/assets/audioFile/english_Stephanie/english-stephanie-3.m4a": "8e45f04c28f7915a6a8016b2ab9fc64c",
"assets/assets/audioFile/english_Stephanie/english-stephanie-4.m4a": "7a8eba602294e4cea41b53c0206feb2b",
"assets/assets/audioFile/english_Stephanie/english-stephanie-5.m4a": "04cd44912c8315fc4944977f74d4ce84",
"assets/assets/audioFile/english_Stephanie/english-stephanie-6.m4a": "bde1b3e9c303fb357f4d7d0634e8b6f1",
"assets/assets/audioFile/english_Stephanie/english-stephanie-7.m4a": "522f87907d7a5b73bfe1643ea1a9284e",
"assets/assets/audioFile/english_Stephanie/english-stephanie-8.m4a": "d8a632520a02a5272157ef80fea97d72",
"assets/assets/audioFile/english_Stephanie/english-stephanie-9.m4a": "88bc3355793806e24d3b029add23ed74",
"assets/assets/audioFile/Listen/birds/Birds_15m.ogg": "4ba8ad6fd6c5a949d74dc21626083a84",
"assets/assets/audioFile/Listen/cricket/Crickets_15mNew.ogg": "92fe2249c74b58d6c198c576e84c8ef6",
"assets/assets/audioFile/Listen/fire/Fire_15mnew.ogg": "a57514d359430489fb9ed20ac4be6049",
"assets/assets/audioFile/Listen/ocean/Ocean_15m.ogg": "38874121c919e7e1065ab5c3586bddbb",
"assets/assets/audioFile/Listen/rain/Rain_15m.ogg": "9cfc7af6c04b08f7ecc2b0b6324e4aa1",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-1.m4a": "444def4f9ce8251034e499395ebcf7ad",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-10.m4a": "78ef2305f0afbb412dd62f670d5ac98b",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-11.m4a": "6c35e75f68b30e0871efb33280d0a109",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-12.m4a": "b6c2c633847a4300cf20ad870d295328",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-13.m4a": "8615950dfe8df5be92d304be0997b2f9",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-14.m4a": "f8b4f92bee305b11849014bb721b6202",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-2.m4a": "627efc84017ecb6ff737dff2631c3f3c",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-3.m4a": "9f8a7848d6b74d12982e44ad96a62c97",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-4.m4a": "df28cfd923eec630b0fc8448f8bd873f",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-5.m4a": "76bbbba2b2730269527a7441a60a815e",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-6.m4a": "561063b42cf7ccb26f53356b88581a3b",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-7.m4a": "f6bb4afa7394f897cd2c3ccded1f9d4c",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-8.m4a": "8b60c9620e5fb80c06f05f62b7123843",
"assets/assets/audioFile/spanish_Agnarval/spanish-agnarval-9.m4a": "cf14096a4200d601a4262993db08db04",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-1.m4a": "c0034beba6abff9b33f75ec39bde7541",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-10.m4a": "61fda6939b80703d0096765fb2938d35",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-11.m4a": "4e9fd324e48f25b1e748e7bc3a704ba2",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-12.m4a": "e7c96f4d6d94c5d262c29c0424fcfdd1",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-13.m4a": "e538a59d288c890e667016f84d1d1d1d",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-14.m4a": "5d4271babf97a42967418c88ace594af",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-2.m4a": "d81e54e1b611fd1299e3eabdf30075e2",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-3.m4a": "53ccc5f64c7885ab2cff5e88f9d31f9c",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-4.m4a": "63bc9b1d104821883e984f7d2f241edd",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-5.m4a": "8d9df8873714e665de13f8a73721bb5e",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-6.m4a": "6308aac47a55cce8d952668455bc9f18",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-7.m4a": "4eaff2d8c4b3491ec7f2d2afe4cd4092",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-8.m4a": "7ff78c28b9816b35a16fb486627ccddf",
"assets/assets/audioFile/spanish_Arantxa/spanish-arantxa-9.m4a": "24ff492316084713a51fcb47f4203d25",
"assets/assets/font/Inter-Regular.ttf": "fdb50e0d48cdcf775fa1ac0dc3c33bd4",
"assets/assets/images/appLogo.png": "b82c4e3a8251a65df5658422e4602cc4",
"assets/assets/images/closeIcon.png": "0136ee06f5d199e283fbc9e318baab9b",
"assets/assets/images/menu_icon.png": "af5cfc5e02b386e173f54f407aee9c9c",
"assets/assets/images/minus_icon.png": "96de135a913b766f9b9775b8496483e8",
"assets/assets/images/playIcon.png": "d90738d11f811c4506707cba27c280f5",
"assets/assets/images/play_icon.png": "a8c7313d5bcc79331a5762f4e859ad68",
"assets/assets/images/plus_Icon.png": "ebe5b92198edbd3bfcc7615103264cc1",
"assets/assets/welcome_audio/english-bill.m4a": "84fb01c061f8d93e6b8098913540b434",
"assets/assets/welcome_audio/english-mariah.m4a": "5d70d9a0afdbd33f4496b0a80ab64c3b",
"assets/assets/welcome_audio/english-stephanie.m4a": "1db8b2e2069a1570a7673789242fabc7",
"assets/assets/welcome_audio/spanish-agnarval.m4a": "d89a3451c4899a58887a7b25a2736355",
"assets/assets/welcome_audio/spanish-arantxa.m4a": "105e5a9d5dfd1d9af20190350b24bfe6",
"assets/FontManifest.json": "7fa96396c705a02a47be8e2cea6927a1",
"assets/fonts/MaterialIcons-Regular.otf": "3842e84434faad907fb7f3ba02f181b4",
"assets/NOTICES": "02d19d67a7a636d62e38ce4c2baa86db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "9126d42daf99591ea351ea68e03c8206",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "9dfa4ceee145812b4cd34dc1c19a8f48",
"icons/Icon-512.png": "5319253407ba6498e3b91156178a72f4",
"icons/Icon-maskable-192.png": "9dfa4ceee145812b4cd34dc1c19a8f48",
"icons/Icon-maskable-512.png": "5319253407ba6498e3b91156178a72f4",
"index.html": "9a1c3c0f0d37e37822103152f0e68b30",
"/": "9a1c3c0f0d37e37822103152f0e68b30",
"iZen.png": "6dce8ef4781f5e889c321ecd361f1cff",
"main.dart.js": "108b2b21231084938b630d5a526bbe22",
"manifest.json": "41a0f2d147e8b79f1298b2507fd0e0f5",
"version.json": "e79e28d89da3e88988ad19c302da500d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
