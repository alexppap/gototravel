import { MutationTree } from 'vuex'

import { ProfileState } from './types'

export const mutations: MutationTree<ProfileState> = {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
  // profileLoaded (state, payload: User) {
  //   state.error = false;
  //   state.user = payload;
  // },
}
