import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "/frontend/static/",
    manifest: true,
    rollupOptions: {
      input: {
        key: "static/",
      },
    },
  },
});
