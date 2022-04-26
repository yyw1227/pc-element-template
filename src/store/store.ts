import { createStore } from 'vuex'
import SystemStore from '@/store/modules/system-store'
import UserStore from '@/store/modules/user-store'

const store = createStore({
  modules: {
    SystemStore,
    UserStore
  }
})
export default store
