import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@contexts": "/src/contexts",
      "@features": "/src/features",
      "@lib": "/src/lib",
      "@pages": "/src/pages",
      "@types": "/src/types"
    }
  }
});
