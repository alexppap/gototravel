import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types.ts'
import { profile } from './profile/index.ts'
// import state from './state'
// import mutations from './mutations'

Vue.use(Vuex)
// export default new Vuex.Store({
//   state,
//   mutations
// })
const store: StoreOptions<RootState> = {
  state: {
    city: '1.0.0' // a simple property
  },
  modules: {
    profile
  }
}
export default new Vuex.Store<RootState>(store)
