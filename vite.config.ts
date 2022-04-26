import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'
// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
      },
    }
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
      exclude: ['./node_modules']
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'vuex'], // 自动导入vue、vue-router、vuex相关函数
      eslintrc: {
        enabled: false, // Default `false`需要注意的是，一旦生成配置文件之后，最好把改成false。否则这个文件每次会在重新加载的时候重新生成，这会导致eslint有时会找不到这个文件。
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [ElementPlusResolver()],
      // dts: './auto-imports.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
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
        // assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
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
