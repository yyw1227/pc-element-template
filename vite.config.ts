import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://yjy.jkxx.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vuex'], // 自动导入vue、vue-router、vuex相关函数
      eslintrc: {
        enabled: false, // Default `false`需要注意的是，一旦生成配置文件之后，最好把改成false。否则这个文件每次会在重新加载的时候重新生成，这会导致eslint有时会找不到这个文件。
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [ElementPlusResolver()]
      // dts: './auto-imports.d.ts',
    }),
    viteMockServe({
      // ↓解析根目录下的mock文件夹
      mockPath: './src/utils/mock',
      localEnabled: true, // 开发打包开关
      prodEnabled: true, // 生产打包开关
      supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      watchFiles: true // 监视文件更改
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    DefineOptions(),
    PkgConfig(),
    OptimizationPersist()
  ],
  build: {
    outDir: 'build',
    assetsDir: 'static',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // 静态资源分类打包
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/assets/css/variables.scss';"
      }
    }
  }
})
