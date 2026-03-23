import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  preview: {
    host: true,
    port: 4173,
    allowedHosts: ["orcestra.com.br", "www.orcestra.com.br"]
  }
}
