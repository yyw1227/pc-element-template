import request from '@/utils/request'
import { apis } from '@/api/apis'
/**
 * 获取用户信息
 */
export function getUserInfoRemote(): Promise<any> {
  return request.get(apis.userInfo)
}
