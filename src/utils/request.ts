import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import errorCode from './errorCode'
import store from '@/store/store'
import router from '@/router/router'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const request = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 30000
})

// request拦截器
request.interceptors.request.use(
  (config: any) => {
    // 是否需要设置 token
    const token = store.getters['UserStore/token']
    token && (config.headers['Authorization'] = `Bearer ${token}`)
    return config
  },
  (error) => {
    Promise.reject(error).then()
  }
)
// 响应拦截器
request.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    // 二进制数据则直接返回
    if (
      res.request.responseType === 'blob' ||
      res.request.responseType === 'arraybuffer'
    ) {
      return res.data
    }
    if (code === 401) {
      ElMessageBox.confirm(
        '登录状态已过期，您可以继续留在该页面，或者重新登录?',
        'Warning',
        {
          type: 'warning'
        }
      ).then(() => {
        store.dispatch('LogOut').then(() => {
          router.push('/login')
        })
      })
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 500) {
      ElMessage.error(msg)
      return { result: false }
    } else if (code !== 200) {
      ElMessage.error(msg)
      return { result: false }
    } else {
      res.data.result = true
      return res.data
    }
  },
  (error) => {
    let { message } = error
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

export default request
