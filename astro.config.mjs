import { defineConfig } from 'astro/config';

export default defineConfig({
  server: { port: 4321, host: true },
  // The dev toolbar loads from an absolute node_modules path that the
  // preview sandbox blocks (403). Dev-only overlay, no effect on the site.
  devToolbar: { enabled: false },
});
