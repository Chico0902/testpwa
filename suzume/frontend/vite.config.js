import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'BeFresh : 신선한 냉장고 재로를 위하여',
        short_name: 'BeFresh',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'favicomatic/favicon.ico',
            sizes: '32x32 24x24 16x16',
            type: 'image/png'
          },
          {
            src: 'favicomatic/apple-touch-icon-57x57.png',
            sizes: '57x57',
            type: 'image/png'
          },
          {
            src: 'favicomatic/apple-touch-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png'
          },
          {
            src: 'favicomatic/apple-touch-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'favicomatic/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png'
          },
          {
            src: 'favicomatic/프사192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicomatic/프사512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
