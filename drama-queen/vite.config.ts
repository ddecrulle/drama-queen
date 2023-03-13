import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import fs from "fs";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

function anonyme(key: string) {
  const file = fs.readFileSync("public/env-config.js", "utf-8");
  const regex = new RegExp(
    "\\s*window\\._env_\\['" + key + "']\\s*=\\s*'(.*)'\\s*;$",
    "m"
  );
  try {
    const match = file.match(regex);
    return match[1];
  } catch {
    return undefined;
  }
}
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const getEnvVar = (key: string) => {
    return env[key] === "" ? anonyme(key) : env[key];
  };
  console.log(getEnvVar("VITE_QUEEN_URL"));
  return {
    plugins: [
      react(),
      federation({
        name: "drama-queen",
        remotes: {
          queen: getEnvVar("VITE_QUEEN_URL") + "/assets/remoteEntryQueen.js",
          queen_v2:
            getEnvVar("VITE_QUEEN_V2_URL") + "/assets/remoteEntryQueenV2.js",
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
