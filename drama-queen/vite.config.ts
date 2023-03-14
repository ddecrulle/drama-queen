import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import fs from "fs";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

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
            external: `Promise.resolve((window?._env_?.["VITE_QUEEN_URL"] || env["VITE_QUEEN_URL"]) + "/assets/remoteEntryQueen.js")`,
            externalType: "promise",
          },
          queen_v2: {
            external: `Promise.resolve((window?._env_?.["VITE_QUEEN_V2_URL"] || env["VITE_QUEEN_V2_URL"]) + "/assets/remoteEntryQueenV2.js")`,
            externalType: "promise",
          },
        },
        shared: ["react", "react-dom"],
      }),
      tsconfigPaths(),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
