import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  // Use the React plugin for Vite and configure Babel with the React compiler preset
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // Configure the development server to proxy API requests to the backend server
  server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
      }
    }
  }
})
