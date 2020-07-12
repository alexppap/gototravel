// profile/getters.ts
import { GetterTree } from 'vuex'
import { ProfileState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<ProfileState, RootState> = {
  change (state) {
    try {
      if (localStorage.city) {
        state.city = localStorage.city
      }
    } catch (e) {}
  }
}
