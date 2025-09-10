'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2f8461bb4cab3c7c9d3a89d81e45ae7d",
"version.json": "7c4935291a3e8ff63b28ee71dfd4773e",
"index.html": "178af5db3e829056ad5827f4f53c932c",
"/": "178af5db3e829056ad5827f4f53c932c",
"main.dart.js": "ee55e4b2c4427986ffb9dc7da03cb946",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "6de307da830331bdf270002ae6b1fc19",
"icons/android-chrome-192x192.png": "6de307da830331bdf270002ae6b1fc19",
"icons/apple-touch-icon.png": "e60fe6421dc93f5f520a3c33c90c121b",
"icons/android-chrome-512x512.png": "263e3358e6feb2cd04139ba044bf50c3",
"manifest.json": "49e3c9a7fed4ff28f5446f9510f5f01d",
".git/config": "654d89e1ccc6be75f3de804ebd2331ea",
".git/objects/66/20027e69346fa0f5ed903e1d7405d5330f96ef": "3707bd6df47f33c201a90f5d71224e10",
".git/objects/03/4e848032092eaf8ef96eac731b6ed5961987f3": "48656088a404ba3cc86c18b39084d243",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/fc95beb6ffb73bcde6e3e0d2c17cec65d27621": "36fa80b8da7d52d5029a5cc2468bc0eb",
".git/objects/32/3e6fcdfdc80bbab0a20ab1b65b99a15ebe6df3": "92dc6a7b274e0291bdc162e8c6667eff",
".git/objects/93/6a6d5470b87e248a17d2d407baecc475c3c962": "aab5dec49721fd1ec19d56dab58da3e1",
".git/objects/33/e23c9e157d60befe0abfbe3f528bb4fae596db": "4ef63e32841c1146d8190c838161eea7",
".git/objects/ad/3b711db49ba672c6b09ab49c95f38e01292ddc": "3a0b0e954dad7f0127ed5f09c208cc8c",
".git/objects/d7/2344f0e056db55ed1475a4bafc1293e051e79b": "05ce5e02b0dacf0ce8b1fe3bce743154",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/0acb14ebac4c22e4aaca01545b07a62e64d13e": "8d49ae58e287ceb5f718610233643d75",
".git/objects/da/c37ba1f7597e9f396052e6ec587cdb3562a8ca": "7da872141cae35d02868c1f32335bf56",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/15652f2e50d11cfa3e3a63215f8bdf8ab400b0": "e5390e49a878c6a0279b9876f4dfeba2",
".git/objects/c7/9ee4a9562ffa9dedb8785652f2d061f15f65bb": "8d0b67ee6994383c01701f1129c88de1",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fd/a98471a851e45765ea3205cedfd20946c6331c": "3f6ea512e6c543f8f24e9a43b0d1ee1a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ec/b27b6f2e53e9a5df5d6a817b5b9b39072dab4f": "7cc9189ffb3ee5d5898e6b3bca29ea77",
".git/objects/20/44ac3834d8ab25093b334f2eab4a1cee193af8": "f96c0c2a0615f8b4f1626a41c99283df",
".git/objects/11/f5dc2e11647c39c9054a7d810e1b4225e57f41": "be2905b8dcff5342421a56bd92ff7d12",
".git/objects/42/629bb8b245759ce2c8c40931140e25492200b1": "a94d07f46beb10f967ea2c17a2489644",
".git/objects/45/d1398c350bf23d89f6714627be6b6a72d15a00": "07479577dfa692803c4c1d6376fb71c4",
".git/objects/1f/11e2f17b0bc75c748aaaf3066da139cbe73fe6": "d7cfb39a9a9a1d75b687c324d7de6b2e",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/28/6047b2ca0bf78ea0d156e29569a944653be9f6": "b9aaf28b7959d8bb0e9bd5f6192e1361",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/0e2f2a75bff407589c0fa11ed3ff6f682b2495": "b9ef6341983c1c4d8727c9bea64a16d7",
".git/objects/75/1d2380ffd50b2e8160c45318b583f4aa777e5a": "a492941913667ece7760e0e72fec9e29",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/a9ed170cfa2067423bf844b4caea1cc0b5a3ba": "9828e76d7957fc58af6e62d6aeb90ee1",
".git/objects/88/765b877d3bcd4979569de1df1f6426dae8f71d": "2e28cb31df32ca50a3c45bf6a34a704e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/09/bf19a980f418d8f3201e825f851a8abb8bc9ea": "59addfff4cfb4923cc064d3e4c5714d3",
".git/objects/96/16070f201cf03ea99b89e7adc071b01e01a929": "b91a6e440989af155c6686473cce7a7e",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/30/f335a1759dc9b0fa98fbf347caec9cc547aa85": "33197f01ec089ff1491c021467e99ec2",
".git/objects/5e/fe7863c24037ccea175542e879bc2b9994695a": "0ed7175509ae3d69702e219621620c46",
".git/objects/6d/268ff14cd81197125d7579c8eefb3197bf591b": "b6de1aa6c3c1bfd6a6f751f48838a797",
".git/objects/0a/903f6220d8b15e708ecc24b83edb6122e9024c": "b83bf62906d290f2a822cc4d9d762fe6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/8bf854d0278c86471a3bb150612d9839aa71a8": "1beb677e0e1339e5c4e7cddcc5605dbf",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/af/4cdadd15abcbddd967a61ad7bdf3266e0c021d": "49e6520c89d6c3c3771825476ea5c95d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/a9d434fe43ac4681e2419d1e89a7fc4004f128": "e43ddc3efbd976d17ccfdc7ba18f4507",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/652d82698f74ce58bcd9e03aae35a7239815ec": "3fe3a1dec4983dc2314c6611c6af445f",
".git/objects/a1/6245a9c5b2d2251c5d03694f13660e17bb7608": "fc365b5b31017f3c228b9b06ac1ee200",
".git/objects/c4/f6ee7671eda122f57f78a57751c00af817c8c5": "afb7835481cc75b8e1d6dcad6c650b14",
".git/objects/cd/25b17a17291ce21239a0a79341192ce989b28c": "ba4ac86a45937d206cbebab9efb80fca",
".git/objects/e6/e58a8be584c3d2e9a6e3b4a1d9b60cdbc969b4": "ae8066b24ac1a2c17a229a65eb59ea16",
".git/objects/e8/9eb96193e1a40439eccf298f7c44787e8618e1": "9cdde100c7915b11624f58f540637dfd",
".git/objects/ff/e37033a2336bd62f4d0af0e42188a0d8e824cc": "f838d7bb8b24aa0d48eaf2f20dc82ca0",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/5350b5e3af5dd15016344c3387abf1a5e6a783": "d08e612cd064b85b570e6ac9e8a4b9c9",
".git/objects/f8/34218974625c4fa974237db508ce7e05b70f69": "ed51a69665e17d38badd030208fe2d1a",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/85/2d08fc327e16e63e7a11d4fe04088184728998": "cb7b8d3e025497051b68ad9937502565",
".git/objects/1d/780a73dc632acc1bb45267d62ecfdc7f6471ee": "ae5065065fa9129fbf9c62d3c3189712",
".git/objects/76/968ae281d887c385b98df142a07df7b816ca5c": "f26c684f09127df1ef2cf16f142f764f",
".git/objects/2e/dd1787a3e5b972e18561c3bd4b561630f855f7": "bfc4d1b088146558f78f5a7f0b1287c7",
".git/objects/2b/e09c64dfad5ff170124320d4ee2268b1038a04": "9f56764b481a71c8f8036eeedbf00de9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e77db49e744abe42804a4e28eca15cc8",
".git/logs/refs/heads/main": "10445ac1b4dcbdd6e80e9b380f97c922",
".git/logs/refs/remotes/origin/main": "300c455a0e70f68f8d016b1d7279489a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "48d29ae5615c2bbd5f831542760df4fc",
".git/refs/remotes/origin/main": "bf8ccb40012907f79dbac55468d32229",
".git/index": "ec0a544b90f9bb4d36a1a47851684ac3",
".git/COMMIT_EDITMSG": "a7a4bdcd82190f1332b4e42868c1d0d7",
".git/FETCH_HEAD": "0d4e37796b0e410fb45bc25657a67193",
"assets/AssetManifest.json": "87d488276de8049a4bca57ecb0078aa8",
"assets/NOTICES": "b05391027760a207ac3f354acbd7895d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0e7c30ddeeddd687158455215431945e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/Images/intro_bg.jpg": "544c39309690a3eb3f24f78b23074a83",
"assets/lib/Images/login_logo.png": "41c5448a543996b07f8ebf80fc738e16",
"assets/lib/Images/album1.jpg": "1bc1abb9218bfc48a5bf20aec6620398",
"assets/lib/Images/album2.jpg": "24c6a5bbf1ddcd9c8e72292abc9b577d",
"assets/lib/Images/album3.jpg": "513dc2b75c250a7368e03e4f4928fae1",
"assets/lib/Images/shop_bg.jpg": "e2800031250b3b9fea741ebff058df54",
"assets/lib/Images/album4.jpg": "da5ee3c638e7d4e9ba64ad12004864b6",
"assets/lib/Images/album5.jpg": "40993f7d5790bd5f9b63dc62243ac4cb",
"assets/AssetManifest.bin": "e75ffd212a6bbb50978b7f10098f7825",
"assets/fonts/MaterialIcons-Regular.otf": "6688ea9338aaa28886acdb67053fea07",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
