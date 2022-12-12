/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_IS_HTTPS: boolean
  readonly VITE_TOKEN_REFRESH: boolean
  readonly VITE_APP_FILE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
