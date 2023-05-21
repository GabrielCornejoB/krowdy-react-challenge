import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/krowdy-react-challenge/",
  plugins: [react()],
  resolve: {
    alias: {
      "@utils": "/src/utils",
    },
  },
});
