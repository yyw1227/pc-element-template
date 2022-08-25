interface ResponseResult<T = any> {
  code: number
  message: string
  status: 'success' | 'error'
  data: T
}

interface LoginResult {
  id: number
  username: string
  phone: string | number
}
