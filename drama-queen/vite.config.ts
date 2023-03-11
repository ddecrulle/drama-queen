import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "drama-queen",
      remotes: {
        queen: "http://localhost:5001/assets/remoteEntry.js",
        queen_v2: "http://localhost:5002/assets/remoteEntry.js",
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
});
