/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "67dc943983f0ae6f85bc509db88edf4d"
  },
  {
    "url": "assets/css/0.styles.baa501a4.css",
    "revision": "cefff3f8c27847bd006c320ad3563c8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.6c618e17.js",
    "revision": "3e3e11bcc79775fe55f204c75a4316c6"
  },
  {
    "url": "assets/js/16.f868886d.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.4eaa7022.js",
    "revision": "3c4175db4605b72c0e07372b62b527a9"
  },
  {
    "url": "assets/js/18.393dbd29.js",
    "revision": "4dc9878951689875f62f246a270470a7"
  },
  {
    "url": "assets/js/19.7835ae59.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
  },
  {
    "url": "assets/js/2.1d208515.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.dc1baac4.js",
    "revision": "cc05a81c7c4333232e2cc4040e2f86d1"
  },
  {
    "url": "assets/js/21.8f600de3.js",
    "revision": "db576e20cadae122981706a1e41be3cc"
  },
  {
    "url": "assets/js/22.3fd74b31.js",
    "revision": "5f216df34ab50a562b98860c95d37888"
  },
  {
    "url": "assets/js/23.21098464.js",
    "revision": "15a71838d6accce6712499471625ae7b"
  },
  {
    "url": "assets/js/24.959555d5.js",
    "revision": "78ff3951e1a3af622aaaeb5a47768ae4"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.0bfa4a60.js",
    "revision": "6aae024752944990136abd4e4c568d35"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7359926ccbfd7af64bbaa17364ffda94"
  },
  {
    "url": "design/index.html",
    "revision": "f9f2b61509231022bb4e87ee453cc846"
  },
  {
    "url": "index.html",
    "revision": "c43593e84c219dda0bdf45652a9615b0"
  },
  {
    "url": "intro/index.html",
    "revision": "36707e182d17f04957566a1037ac3476"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f0b396656d0d44c3374a74bfb7932851"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "dec2cd7b2b280565f5c5a134ebc6b40a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c91bbf5fa0d179ee38ceaef4b1f886be"
  },
  {
    "url": "software/index.html",
    "revision": "973a81c22685433d4740d029badb9a7f"
  },
  {
    "url": "test/index.html",
    "revision": "6fe90f55222595dba8b3ce1a2583e3f0"
  },
  {
    "url": "use cases/index.html",
    "revision": "ce2fe169f154cab2748be4b68efbc4cf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
