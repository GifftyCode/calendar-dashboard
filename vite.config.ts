import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react/jsx-runtime": "react/jsx-runtime.js",
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
