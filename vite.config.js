import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/3D-Apple/',
  plugins: [react(), sentryVitePlugin({
    org: "jsm-om",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})