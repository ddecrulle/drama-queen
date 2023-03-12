/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_QUEEN_URL: string;
  readonly VITE_QUEEN_V2_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
