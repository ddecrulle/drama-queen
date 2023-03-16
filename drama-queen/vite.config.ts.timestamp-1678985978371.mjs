// vite.config.ts
import { defineConfig, loadEnv } from "file:///Users/dylan/Documents/Github/drama-queen-container/drama-queen/node_modules/vite/dist/node/index.js";
import federation from "file:///Users/dylan/Documents/Github/drama-queen-container/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import react from "file:///Users/dylan/Documents/Github/drama-queen-container/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsconfigPaths from "file:///Users/dylan/Documents/Github/drama-queen-container/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { VitePWA } from "file:///Users/dylan/Documents/Github/drama-queen-container/node_modules/vite-plugin-pwa/dist/index.mjs";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      federation({
        name: "drama-queen",
        remotes: {
          queen: {
            external: `Promise.resolve((window?._env_?.["VITE_QUEEN_URL"] || import.meta.env["VITE_QUEEN_URL"]) + "/entry.js")`,
            externalType: "promise"
          },
          queen_v2: {
            external: `Promise.resolve((window?._env_?.["VITE_QUEEN_V2_URL"] || import.meta.env["VITE_QUEEN_V2_URL"]) + "/assets/remoteEntry.js")`,
            externalType: "promise"
          }
        },
        // filename: "remoteEntry.js",
        // exposes: {
        //   "./App": "./src/App.tsx",
        // },
        shared: ["react", "react-dom"]
      }),
      tsconfigPaths(),
      VitePWA({
        /* enable sw on development */
        devOptions: {
          enabled: true
          /* other options */
        },
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
              type: "image/png"
            },
            {
              src: "/icons/icon-96x96.png",
              sizes: "96x96",
              type: "image/png"
            },
            {
              src: "/icons/icon-128x128.png",
              sizes: "128x128",
              type: "image/png"
            },
            {
              src: "/icons/icon-144x144.png",
              sizes: "144x144",
              type: "image/png"
            },
            {
              src: "/icons/icon-152x152.png",
              sizes: "152x152",
              type: "image/png"
            },
            {
              src: "/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/icons/icon-384x384.png",
              sizes: "384x384",
              type: "image/png"
            },
            {
              src: "/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png"
            }
          ]
        }
      })
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZHlsYW4vRG9jdW1lbnRzL0dpdGh1Yi9kcmFtYS1xdWVlbi1jb250YWluZXIvZHJhbWEtcXVlZW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9keWxhbi9Eb2N1bWVudHMvR2l0aHViL2RyYW1hLXF1ZWVuLWNvbnRhaW5lci9kcmFtYS1xdWVlbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZHlsYW4vRG9jdW1lbnRzL0dpdGh1Yi9kcmFtYS1xdWVlbi1jb250YWluZXIvZHJhbWEtcXVlZW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSBcIkBvcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCBcIlwiKTtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICByZWFjdCgpLFxuICAgICAgZmVkZXJhdGlvbih7XG4gICAgICAgIG5hbWU6IFwiZHJhbWEtcXVlZW5cIixcbiAgICAgICAgcmVtb3Rlczoge1xuICAgICAgICAgIHF1ZWVuOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogYFByb21pc2UucmVzb2x2ZSgod2luZG93Py5fZW52Xz8uW1wiVklURV9RVUVFTl9VUkxcIl0gfHwgaW1wb3J0Lm1ldGEuZW52W1wiVklURV9RVUVFTl9VUkxcIl0pICsgXCIvZW50cnkuanNcIilgLFxuICAgICAgICAgICAgZXh0ZXJuYWxUeXBlOiBcInByb21pc2VcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHF1ZWVuX3YyOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogYFByb21pc2UucmVzb2x2ZSgod2luZG93Py5fZW52Xz8uW1wiVklURV9RVUVFTl9WMl9VUkxcIl0gfHwgaW1wb3J0Lm1ldGEuZW52W1wiVklURV9RVUVFTl9WMl9VUkxcIl0pICsgXCIvYXNzZXRzL3JlbW90ZUVudHJ5LmpzXCIpYCxcbiAgICAgICAgICAgIGV4dGVybmFsVHlwZTogXCJwcm9taXNlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZmlsZW5hbWU6IFwicmVtb3RlRW50cnkuanNcIixcbiAgICAgICAgLy8gZXhwb3Nlczoge1xuICAgICAgICAvLyAgIFwiLi9BcHBcIjogXCIuL3NyYy9BcHAudHN4XCIsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHNoYXJlZDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gICAgICB9KSxcbiAgICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICAgIFZpdGVQV0Eoe1xuICAgICAgICAvKiBlbmFibGUgc3cgb24gZGV2ZWxvcG1lbnQgKi9cbiAgICAgICAgZGV2T3B0aW9uczoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgLyogb3RoZXIgb3B0aW9ucyAqL1xuICAgICAgICB9LFxuICAgICAgICBzdHJhdGVnaWVzOiBcImluamVjdE1hbmlmZXN0XCIsXG4gICAgICAgIHNyY0RpcjogXCJzcmNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwic3ctcGVhcmwuanNcIixcbiAgICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgICBuYW1lOiBcIkRyYW1hIFF1ZWVuXCIsXG4gICAgICAgICAgc2hvcnRfbmFtZTogXCJkcmFxdWVlblwiLFxuICAgICAgICAgIHRoZW1lX2NvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImJyb3dzZXJcIixcbiAgICAgICAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxuICAgICAgICAgIHNjb3BlOiBcIi9cIixcbiAgICAgICAgICBzdGFydF91cmw6IFwiL1wiLFxuICAgICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvaWNvbi03Mng3Mi5wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiNzJ4NzJcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvaWNvbi05Nng5Ni5wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiOTZ4OTZcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvaWNvbi0xMjh4MTI4LnBuZ1wiLFxuICAgICAgICAgICAgICBzaXplczogXCIxMjh4MTI4XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiL2ljb25zL2ljb24tMTQ0eDE0NC5wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiMTQ0eDE0NFwiLFxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcIi9pY29ucy9pY29uLTE1MngxNTIucG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjE1MngxNTJcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvaWNvbi0xOTJ4MTkyLnBuZ1wiLFxuICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiL2ljb25zL2ljb24tMzg0eDM4NC5wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiMzg0eDM4NFwiLFxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcIi9pY29ucy9pY29uLTUxMng1MTIucG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIG1vZHVsZVByZWxvYWQ6IGZhbHNlLFxuICAgICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgICAgbWluaWZ5OiBmYWxzZSxcbiAgICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVyxTQUFTLGNBQWMsZUFBZTtBQUNyWixPQUFPLGdCQUFnQjtBQUV2QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyxlQUFlO0FBR3hCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxLQUFLLE1BQU07QUFDakQsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzNDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxZQUNMLFVBQVU7QUFBQSxZQUNWLGNBQWM7QUFBQSxVQUNoQjtBQUFBLFVBQ0EsVUFBVTtBQUFBLFlBQ1IsVUFBVTtBQUFBLFlBQ1YsY0FBYztBQUFBLFVBQ2hCO0FBQUEsUUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFLQSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsQ0FBQztBQUFBLE1BQ0QsY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBO0FBQUEsUUFFTixZQUFZO0FBQUEsVUFDVixTQUFTO0FBQUE7QUFBQSxRQUVYO0FBQUEsUUFDQSxZQUFZO0FBQUEsUUFDWixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsVUFDYixrQkFBa0I7QUFBQSxVQUNsQixTQUFTO0FBQUEsVUFDVCxhQUFhO0FBQUEsVUFDYixPQUFPO0FBQUEsVUFDUCxXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsS0FBSztBQUFBLGNBQ0wsT0FBTztBQUFBLGNBQ1AsTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxLQUFLO0FBQUEsY0FDTCxPQUFPO0FBQUEsY0FDUCxNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsS0FBSztBQUFBLGNBQ0wsT0FBTztBQUFBLGNBQ1AsTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxLQUFLO0FBQUEsY0FDTCxPQUFPO0FBQUEsY0FDUCxNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsS0FBSztBQUFBLGNBQ0wsT0FBTztBQUFBLGNBQ1AsTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxLQUFLO0FBQUEsY0FDTCxPQUFPO0FBQUEsY0FDUCxNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsY0FBYztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
