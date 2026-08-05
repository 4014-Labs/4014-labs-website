import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

const deckSlashRedirect = {
  name: 'deck-slash-redirect',
  configureServer(server) {
    server.middlewares.use((request, response, next) => {
      const url = new URL(request.url, 'http://localhost');
      if (url.pathname !== '/deck') {
        next();
        return;
      }

      response.statusCode = 308;
      response.setHeader('Location', `/deck/${url.search}`);
      response.end();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((request, response, next) => {
      const url = new URL(request.url, 'http://localhost');
      if (url.pathname !== '/deck') {
        next();
        return;
      }

      response.statusCode = 308;
      response.setHeader('Location', `/deck/${url.search}`);
      response.end();
    });
  },
};

export default defineConfig({
  plugins: [deckSlashRedirect, react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'index.html'),
        deck: resolve(projectRoot, 'deck/index.html'),
      },
    },
  },
});
