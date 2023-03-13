import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import fs from "fs";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const getEnvVar = (key: string) =>
    env[key] ??
    fs.readFile("public/env-config.js", "utf-8", function (err, data) {
      try {
        const match = data.match(/\s*window\._env_\[\\]\s*=\s*\"(.*)\"\s*;$/dm);
        return match[1];
      } catch (err) {
        return undefined;
      }
    });

  return {
    plugins: [
      react(),
      federation({
        name: "drama-queen",
        remotes: {
          queen_v2:
            getEnvVar("VITE_QUEEN_V2_URL") + "/assets/remoteEntryQueenV2.js",
          "queen-app": getEnvVar("VITE_QUEEN_CRA_URL") + "/entry.js",
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
