import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // vite.config.js
  build: {
    rollupOptions: {
      output: {
        // Renomeia o arquivo de saída do pacote BsGithub para 'react-icons-bs.js'
        'react-icons-bs.js': 'BsGithub.js',
        // Renomeia o arquivo de saída do pacote FaLinkedin para 'react-icons-fa.js'
        'react-icons-fa.js': 'FaLinkedin.js',
      },
    },
  },
})
