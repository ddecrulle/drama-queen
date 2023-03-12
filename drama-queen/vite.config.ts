import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const getEnvVar = (key: string) => {
    if (typeof window !== "undefined") {
      return env[key] || (!window as any)?._env_?.[key];
    }
    return env[key];
  };
  return {
    plugins: [
      react(),
      federation({
        name: "drama-queen",
        remotes: {
          queen: getEnvVar("VITE_QUEEN_URL") + "/assets/remoteEntryQueen.js",
          queen_v2:
            getEnvVar("VITE_QUEEN_V2_URL") + +"/assets/remoteEntryQueenV2.js",
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
