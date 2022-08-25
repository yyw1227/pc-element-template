/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_IS_HTTPS: boolean
  readonly VITE_TOKEN_REFRESH: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
