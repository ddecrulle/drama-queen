import { precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";
//import { getEnvVar } from "utils/env";

interface GlobalScope extends ServiceWorkerGlobalScope {
  _QUEEN_URL: string;
}

declare let self: GlobalScope;

console.log("Service Worker: install");

//self._QUEEN_URL = "https://queen.demo.insee.io";

importScripts(`./queen-service-worker.js`);

console.log("Service Worker: Queen install Finish");

clientsClaim();

//console.log(`getEnvVar("VITE_QUEEN_URL")`);

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", (event) => {
  console.log("Drama  sw : installing configuration..");
});

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
