/* ============================================================
   READMICAL Service Worker (오프라인 + 자동 갱신)
   ★ 문장/단어 데이터(data.js)나 코드를 고칠 때마다
     아래 VERSION 숫자를 +1 하고 커밋하세요. (v1 → v2 → v3 …)
     그래야 학생 앱이 다음에 열 때 최신본을 자동으로 받습니다.
   ============================================================ */
const VERSION = 'v5';
const CACHE = 'readmical-' + VERSION;
const ASSETS = ['./','./index.html','./data.js','./manifest.json','./icon-192.png','./icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;          // 외부(폰트 CDN 등)는 네트워크에 맡김
  e.respondWith(
    fetch(e.request).then(res => {                      // 온라인이면 최신 우선
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))  // 오프라인이면 캐시
  );
});
