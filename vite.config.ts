import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: require.resolve("react"),
      "react-dom": require.resolve("react-dom"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-runtime"],
  },
  esbuild: {
    jsx: "automatic",
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
