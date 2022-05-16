import type { ActionContext } from 'vuex'
import { getUserInfoRemote } from '@/api/remote/user'

const state = {
  userInfo_: {},
  token_: undefined
}

const getters = {
  userInfo: (state_: any) => state_.userInfo_,
  token: (state_: any) => state_.token_
}

const mutations = {
  SET_TOKEN(state_: any, str: string) {
    state_.token_ = str
  },
  SET_USERINFO(state_: any, obj: any) {
    state_.userInfo_ = Object.assign({}, state_.userInfo_, obj)
  }
}

const actions = {
  async getUserInfo({ commit }: ActionContext<any, any>) {
    // 临时先写死token
    commit('SET_TOKEN', '96a4db05-c08a-4cce-bcc7-8a5276ef5842')
    const res = await getUserInfoRemote()
    commit('SET_USERINFO', res.user)
    return res
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
