import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three")) {
            return "three-core";
          }

          if (id.includes("@react-three/fiber") || id.includes("@react-three/drei")) {
            return "three-react";
          }

          if (id.includes("framer-motion")) {
            return "motion";
          }
        },
      },
    },
  },
})
