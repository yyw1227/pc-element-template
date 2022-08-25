import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/system/login',
    method: 'get',
    response: ({ query }: any) => {
      return {
        code: 200,
        data: {
          name: 'vben'
        }
      }
    }
  }
] as MockMethod[]
