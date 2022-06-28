// stores/counter.js
import { defineStore } from 'pinia'
import { getUserInfoRemote } from '@/api/remote/user'
type State = {
  userInfo: any
  token?: string
}
export const userStore = defineStore('user', {
  state: (): State => {
    return {
      userInfo: {},
      token: undefined
    }
  },
  getters: {
    userInfo: (state_: State) => state_.userInfo,
    token: (state_: State) => state_.token
  },
  actions: {
    async getUserInfo() {
      // 临时先写死token
      this.SET_TOKEN('96a4db05-c08a-4cce-bcc7-8a5276ef5842')
      const res = await getUserInfoRemote()
      this.SET_USERINFO(res.user)
      return res
    },
    SET_TOKEN(str: string) {
      this.token = str
    },
    SET_USERINFO(obj: any) {
      this.userInfo = Object.assign({}, this.userInfo, obj)
    }
  }
})
