import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import fs from "fs";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      federation({
        name: "drama-queen",
        remotes: {
          queen: {
            external: `Promise.resolve((window?._env_?.["VITE_QUEEN_URL"] || import.meta.env["VITE_QUEEN_URL"]) + "/entry.js")`,
            externalType: "promise",
          },
          queen_v2: {
            external: `Promise.resolve((window?._env_?.["VITE_QUEEN_V2_URL"] || import.meta.env["VITE_QUEEN_V2_URL"]) + "/assets/remoteEntry.js")`,
            externalType: "promise",
          },
        },
        // filename: "remoteEntry.js",
        // exposes: {
        //   "./App": "./src/App.tsx",
        // },
        shared: ["react", "react-dom"],
      }),
      tsconfigPaths(),
      VitePWA({
        strategies: "injectManifest",
        srcDir: "src",
        filename: "sw-pearl.js",
        manifest: {
          name: "Drama Queen",
          short_name: "draqueen",
          theme_color: "#fff",
          background_color: "#fff",
          display: "browser",
          orientation: "portrait",
          scope: "/",
          start_url: "/",
          icons: [
            {
              src: "/icons/icon-72x72.png",
              sizes: "72x72",
              type: "image/png",
            },
            {
              src: "/icons/icon-96x96.png",
              sizes: "96x96",
              type: "image/png",
            },
            {
              src: "/icons/icon-128x128.png",
              sizes: "128x128",
              type: "image/png",
            },
            {
              src: "/icons/icon-144x144.png",
              sizes: "144x144",
              type: "image/png",
            },
            {
              src: "/icons/icon-152x152.png",
              sizes: "152x152",
              type: "image/png",
            },
            {
              src: "/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icons/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
            },
            {
              src: "/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
