import request from '@/plugins/axios/request'
import { apis } from '@/api/apis'

export function login(params: LoginParams) {
  return request.get<LoginResult>(apis.login, {
    params
  })
}
