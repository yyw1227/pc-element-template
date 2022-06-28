{
  "name": {{{name}}},
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "check": "vue-tsc --noEmit --skipLibCheck",
    "preview": "vite preview"
  },
  "workspaces": [
    "internal/*"
  ],
  "dependencies": {
    "axios": "^0.24.0",
    "dayjs": "^1.10.7",
    "element-plus": "^2.1.10",
    "vue": "^3.2.25",
    "vue-router": "^4.0.14",
    "vuex": "^4.0.2",
    {{{store}}}
  },
  "devDependencies": {
    "@common/eslint-config": "workspace:*",
    "@types/node": "^17.0.26",
    "@vitejs/plugin-vue": "^2.3.1",
    "eslint": "^8.13.0",
    "mockjs": "^1.1.0",
    "sass": "^1.50.1",
    "typescript": "^4.5.4",
    "unplugin-auto-import": "^0.7.1",
    "unplugin-vue-components": "^0.19.3",
    "unplugin-vue-define-options": "^0.6.1",
    "vite": "^2.9.5",
    "vite-plugin-mock": "^2.9.6",
    "vite-plugin-optimize-persist": "^0.1.2",
    "vite-plugin-package-config": "^0.1.1",
    "vue-tsc": "^0.34.7"
  }
}
