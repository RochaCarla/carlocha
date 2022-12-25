import Markdown from '@pity/vite-plugin-react-markdown';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  publicDir: 'public',
  plugins: [react(), Markdown()],
});
