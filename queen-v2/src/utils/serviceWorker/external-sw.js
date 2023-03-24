/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

const queenV2CacheName = 'queen-V2-cache';
console.log('"Loading Queen V2 SW into another SW"');

const queenV2PrecacheController = async () => {
  const cache = await caches.open(queenV2CacheName);
  const urlsToPrecache = self.__WB_MANIFEST.reduce(
    (_, { url }) => [..._, `${self._QUEEN_V2_URL}/${url}`],
    []
  );
  await cache.addAll(urlsToPrecache);
  cache
    .add(`${self._QUEEN_V2_URL}/keycloak.json`)
    .catch(() => cache.add(`${self._QUEEN_V2_URL}/oidc.json`))
    .catch(() => console.error('Failed to cache auth file'));
};

self.addEventListener('install', event => {
  console.log('QUEEN V2 sw : installing ...');
  event.waitUntil(queenV2PrecacheController());
});

self.addEventListener('activate', event => {
  console.log('QUEEN V2 sw : activating ...');
});
