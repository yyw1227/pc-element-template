import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'counter',
  state: () => ({
    token: '',
    counter: 0
  }),
  getters: {
    doubleCount: state => state.counter * 2
  },
  actions: {
    async logOut() {
      this.token = ''
      console.log('logOut')
    },
    setToken(token: string) {
      this.token = ''
    },
    async refreshTokenAction() {
      console.log('refreshTokenAction')
      const token = 'xxxx'
      this.setToken(token)
      return token
    }
  }
})
