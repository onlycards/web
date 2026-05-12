import { resolve } from 'path'

import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export const createLibConfig = (packageRoot: string) =>
  defineConfig({
    plugins: [dts({ bundleTypes: true }), libInjectCss()],
    resolve: {
      alias: {
        '@': resolve(packageRoot, 'src'),
      },
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      lib: {
        formats: ['es'],
        fileName: 'index',
        entry: resolve(packageRoot, 'src/main.ts'),
      },
      rolldownOptions: {
        external: [
          'react',
          'react/jsx-runtime',
          '@onlycards/ui',
          '@onlycards/product',
          '@onlycards/service',
        ],
      },
    },
  })
