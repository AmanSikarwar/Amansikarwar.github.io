'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js": "0d6f6e1050f06e3af2de0fb432a72c43",
"version.json": "a5c13b31997eb9db54e98e9a50af66cb",
"assets/assets/avatar.png": "e179430b3f95859d6e6290940afe025a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "596c1e749a66ddbff06d1ab461e3e3de",
"assets/AssetManifest.json": "0e0797f10abd722401b5e2925cb67d49",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/NOTICES": "4f9e8d84c36ac113cb118dba9a85d019",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9aff35c9e286b538dce3a02f8f1c38a5",
"/": "9aff35c9e286b538dce3a02f8f1c38a5",
"manifest.json": "199ef2ef67e5f8cb801ddeff655bbd1f",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "65ec5e5407194f8c0f037eb5961781f7",
".git/refs/heads/debug": "480566386de2b5aad2a177371c681c9a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "65ec5e5407194f8c0f037eb5961781f7",
".git/refs/remotes/origin/debug": "480566386de2b5aad2a177371c681c9a",
".git/objects/pack/pack-070b68405027c70a5107029d5c1f277293a32222.pack": "798c6b355306ad2f74c02206c5b28fcc",
".git/objects/pack/pack-070b68405027c70a5107029d5c1f277293a32222.idx": "b61c655bacc49290349a5f23d526e7ea",
".git/objects/93/162128d6b014e8d21d0d4153e42988af844f61": "4f06719c57e101e12ae12e01285f197f",
".git/objects/b7/28120e7ee16e4bb43267e5dca2728f8291d486": "76becbdab02b4ea4561e5266ed544129",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/d2/2a7fb9b1f9277db14001c6d37da1c8c6782bbc": "4dc2b5d0612f3392290cc6089542db48",
".git/objects/0a/3352683530dd6ae3f1d141c7f0175a772a3210": "a866a3e9a24a6065918fcd981578cbc1",
".git/objects/0a/420ab44a36fc7143bfc2af6d3186f7f28ce740": "9fbae9750ee4a306e890e4ceed54bfb0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/f8/ddc8ff9970ccdbe2b4331accb97296dfe23ab6": "728148735dbb539524788d0924ce6051",
".git/objects/e8/99e48ad512531942eb6f5febcff835e5cc32a2": "0e0bf626b3759ec310b479a670809340",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/a2/fcd3a1041bec34513d6db0df2cf4bd3a64182c": "1d46eb10e5456421e826650d6b8eab1a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ee/f15af62ac61db5a6cc2d75ff92f0511bc3249d": "1d109b32438a5707f24a1fef46e41456",
".git/objects/ee/c249add4d1956f1b638c21d6b47d9bb0171346": "58e68e54ebae769359cf4e1d358dbef7",
".git/objects/20/d0a1a7a32ce7cbb470a99e347f72914e92c958": "4224b375fa017faa02e139f1dcb6a621",
".git/objects/20/126bfa423631dcb3f6d25c22e3393c58a67ec9": "7f545fc928dd56aa7d0a7acd9e89eeb0",
".git/objects/ab/9b4628762d3a5de57d8ac1ee483dd169a4e5bd": "d7b5432ff99413490347cad452648667",
".git/objects/ab/31ac4556b032fe7161c87860c8b312c40304bd": "a689e2579853a71ef76aae0eacd624c3",
".git/objects/82/3f4f90035c1250570660a6f2dc11c8729fce94": "f787d188f6c079097162384850f4346e",
".git/objects/8b/dc5155ea7b589d4d624afa61be39c8b43978f7": "baa05b6abfc0b8abd282d067c17e2bdd",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/fd/ec172368b25fc4edf4cc2dba60d1529981b358": "ad185a7110764c3682054fffec42590b",
".git/objects/05/fc4d5e18f73365d46dfd995c03dbeb5d482dfb": "a22c296f983448cf833ebc4f8c9cedef",
".git/objects/ff/3171836b19534049c13824e702b100fae5b1cc": "e880329e0533a9e9c175898fc250ddaf",
".git/objects/ff/0ff5019b67762f2345cf7040a5cc9d0a1975e5": "10d08f37507cbb13b6fc1b90d71ed25b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/6c/590d537553fdf42539bcf1dbc466f048a78c76": "f92697e6be6ff3c600668ccbf04618cb",
".git/objects/be/986ba64e04f6ba9e4e69fd3260cea527f7d172": "38a8ae69e87ea422945a9e49326561c9",
".git/objects/6f/711317676caf5628656c743705b03a9e1c202a": "2a4acddf1093e35df0f11d05ffd433f6",
".git/objects/5f/d9e4c632e8dea1d4f2c1acdbc09ec178469bc3": "2341fb9992a6efeae2f53cb142b93013",
".git/objects/b8/2b70f6256a1953cad8a1b922347ae4e7ddfda6": "0899cddf39f89bb4622c945606f4cb99",
".git/objects/4c/2bfd996f18c993f068ed1376715e6022985cc0": "6c535d7719754d9b56c79129afbe5955",
".git/objects/57/059e16923d52823cf5995ccfcd3493ebada572": "a2b6efcad33c3ee1039f427f11c58fc2",
".git/objects/2d/3d0e981e74b37e3cf5816bcf42d18146315eab": "6763594d35bcfdf42ac2c795b937de0c",
".git/objects/13/1a23456880d83a71b295a099c59f204a6e5445": "5255b93932c3a99b176d6013179e0a91",
".git/packed-refs": "3b6064db87390f7a4e0c34430f502a07",
".git/logs/refs/remotes/origin/HEAD": "14ce7cd149a53b1d114dfbd72d68225a",
".git/logs/refs/remotes/origin/main": "d09996e439b92405e58dd8bf097dd864",
".git/logs/refs/remotes/origin/debug": "577415f5599b02787b434dbee0139ff1",
".git/logs/refs/heads/main": "527ae5e84df1a4607d94a143cade8355",
".git/logs/refs/heads/debug": "83593b74bb2e22232f9538ed9bf0485b",
".git/logs/HEAD": "e0aca91d5e9d489c0240bd7ba499076b",
".git/COMMIT_EDITMSG": "3fcc0fce105f0b09a748d7f6f0d2ee9c",
".git/HEAD": "c20196553b5260d78fe45c90015265ce",
".git/FETCH_HEAD": "159799158a4dec57cc978d3121d2649d",
".git/config": "f188eceae2d8308de305c16c6049b239",
".git/ORIG_HEAD": "26f415750609c061603b6354151f2a81",
".git/index": "4e318a68706c67150b7b678fcfaeb8c6",
"README.md": "0e5777a3e2b5806c46c8549f571ece59",
"LICENSE": "0cc098a7d4e31dd93ff1f3938c062633",
"%1B%1B%1B": "7a6a7de5921fb4c74d341c1e448e08c2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
