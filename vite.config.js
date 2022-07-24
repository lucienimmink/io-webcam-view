import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/io-webcam-view.js',
      formats: ['es']
    }
  }
})
