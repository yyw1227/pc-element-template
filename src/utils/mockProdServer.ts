import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import type { MockMethod } from 'vite-plugin-mock'

const modules = import.meta.glob(['@/mock/*.ts', '!@/mock/test.ts'], {
  eager: true
}) // 导入mock文件并排除test测试文件

const mockModules = [] as MockMethod[]
Object.values(modules).forEach(module => {
  mockModules.push(...(module as { default: MockMethod[] }).default)
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
