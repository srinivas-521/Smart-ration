import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Use Render's PORT environment variable or default to 3000
    host: '0.0.0.0', // Required for Render to detect the server
  },
});
