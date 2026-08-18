import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.{ts,tsx}'],
  external: ['react', 'react-dom', 'next'],
  format: ['cjs', 'esm'],
  bundle: true,
  target: 'es2022',
  outDir: 'dist',
  splitting: false,
  sourcemap: true,
  dts: true,
})
