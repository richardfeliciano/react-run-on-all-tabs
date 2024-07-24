import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin: "http://localhost:8080",
    host: true,
    https: false,
    port: 8080,
    hmr: true,
    fs: {
      allow: [".."],
    },
  },
})
