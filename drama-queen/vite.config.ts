import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    output: { publicPath: "auto" },
    plugins: [
      react(),
      federation({
        name: "drama-queen",
        remotes: {
          queen: env.QUEEN_URL + "/assets/remoteEntryQueen.js",
          queen_v2: env.QUEEN_V2_URL + "/assets/remoteEntryQueenV2.js",
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
