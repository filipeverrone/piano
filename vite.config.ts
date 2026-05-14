import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@mui/material',
      '@mui/material/Box',
      '@mui/material/Stack',
      '@mui/material/Slider',
      '@mui/icons-material/VolumeDown',
      '@mui/icons-material/VolumeUp',
      '@emotion/react',
      '@emotion/styled',
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
