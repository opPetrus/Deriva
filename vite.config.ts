import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig(({mode}) => ({
  // O modo padrão preserva a execução local; Pages publica no caminho do repositório.
  base: mode === 'github-pages' ? '/Deriva/' : '/',
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {name: 'math', test: /node_modules.*katex/},
            {name: 'react-runtime', test: /node_modules.*(react|scheduler)/},
          ],
        },
      },
    },
  },
  server: {port: 5173, strictPort: true},
  preview: {port: 4173, strictPort: true},
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    restoreMocks: true,
    include: ['tests/**/*.test.{ts,tsx}'],
  },
}));
