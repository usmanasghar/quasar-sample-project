import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {quasar, transformAssetUrls} from '@quasar/vite-plugin';
import Components from 'unplugin-vue-components/vite';
import {QuasarResolver} from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
import StylelintPlugin from 'vite-plugin-stylelint';
import {VitePWA} from 'vite-plugin-pwa';
//import {hash} from './src/helpers/index.js'
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  plugins: [
    vue({
      template: {transformAssetUrls},
      reactivityTransform: true,
    }),

    viteCompression({algorithm: 'brotliCompress'}),

    quasar({
      autoImportComponentCase: 'kebab',
      sassVariables: 'src/assets/scss/variables.scss',
    }),

    StylelintPlugin({quiet: true, emitErrorAsWarning: true}),

    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [QuasarResolver()],
      dts: 'src/components.d.ts',
    }),

    VitePWA(),
  ],
  /*build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.js`,
        chunkFileNames: `[name]` + hash + `.js`,
        assetFileNames: `[name]` + hash + `.[ext]`
      }
    }
  },*/
  /*server: {
    proxy: {
      '/api': {
        // target: "https://development.api.shipvagoo.com/api",
        target:
          process.env.ENV === 'LOCAL'
            ? 'http://localhost/api'
            : 'https://development.api.shipvagoo.com/api',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },*/
}); 
