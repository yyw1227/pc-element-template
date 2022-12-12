import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import errorCode from './errorCode'
import pinia from '@/plugins/pinia'
import { useUserStore } from '@/stores/user'
import router from '@/router'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-button.css'
import 'element-plus/theme-chalk/el-message-box.css'
import { env } from '@/utils'

interface AxiosInstanceNew extends AxiosInstance {
  <T = any, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D>
  request<T = any, D = ResponseResult<T>>(
    config: AxiosRequestConfig
  ): Promise<D>
  get<T = any, D = ResponseResult<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<D>
  delete<T = any, D = ResponseResult<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<D>
  head<T = any, D = ResponseResult<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<D>
  post<T = any, D = ResponseResult<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<D>
  put<T = any, D = ResponseResult<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<D>
  patch<T = any, D = ResponseResult<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<D>
}
// 创建axios实例
const service: AxiosInstanceNew = axios.create({
  baseURL: '',
  // 超时
  timeout: 30000
})
const store = useUserStore(pinia)
// request拦截器
service.interceptors.request.use(
  (config: any) => {
    // 是否需要设置 token
    const token = store.token
    token && (config.headers['Authorization'] = `Bearer ${token}`)
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error).then()
  }
)
let isRefreshing = false
let requests: any[] = []
async function refreshToken(response: { config: any }) {
  if (!response.config.url.includes('/auth/refresh')) {
    const { config } = response
    if (!isRefreshing) {
      isRefreshing = true
      const access_token = await store.refreshTokenAction()
      isRefreshing = false

      // token 刷新后将数组的方法重新执行
      requests.forEach(cb => cb(access_token))
      requests = [] // 重新请求完清空

      config.headers.Authorization = `Bearer ${access_token}`
      return service(config)
    } else {
      // 返回未执行 resolve 的 Promise
      return new Promise(resolve => {
        // 用函数形式将 resolve 存入，等待刷新后再执行
        requests.push((token: string) => {
          config.headers.Authorization = `Bearer ${token}`
          resolve(service(config))
        })
      })
    }
  }
  return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
}
// 响应拦截器
service.interceptors.response.use(
  res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    if (
      res.request.responseType === 'blob' ||
      res.request.responseType === 'arraybuffer'
    ) {
      return res.data
    }
    if (code === 401) {
      if (env.VITE_TOKEN_REFRESH) {
        // 若开启自动刷新token
        return refreshToken(res)
      } else {
        ElMessageBox.confirm(
          '登录状态已过期，您可以继续留在该页面，或者重新登录?',
          'Warning',
          {
            type: 'warning'
          }
        ).then(async () => {
          await store.logOut()
          router.push('/login').then()
        })
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
      }
    } else if (code === 500) {
      ElMessage.error(msg)
      return Promise.reject(msg)
    } else if (code !== 200) {
      ElMessage.error(msg)
      return Promise.reject(msg)
    } else {
      return res.data
    }
  },
  error => {
    let { message } = error
    if (error.response && error.response.status === 401) {
      if (env.VITE_TOKEN_REFRESH) {
        // 若开启自动刷新token
        return refreshToken(error)
      } else {
        ElMessageBox.confirm(
          '登录状态已过期，您可以继续留在该页面，或者重新登录?',
          'Warning',
          {
            type: 'warning'
          }
        ).then(async () => {
          await store.logOut()
          router.push('/login').then()
        })
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
      }
    }
    if (message === 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = `系统接口${message.slice(-3)}异常`
    }
    ElMessageBox.alert(message, '错误', {
      type: 'error'
    }).then()
    return Promise.reject(error)
  }
)
export default service
