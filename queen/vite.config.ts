import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    output: { publicPath: "auto" },
    plugins: [
      react(),
      federation({
        name: "queen",
        filename: "remoteEntryQueen.js",
        exposes: {
          "./App": "./src/App.tsx",
        },
        shared: ["react", "react-dom"],
      }),
      tsconfigPaths(),
    ],
    base: env.VITE_QUEEN_URL,
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
