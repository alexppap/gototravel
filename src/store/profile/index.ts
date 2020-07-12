// profile/index.ts
import { Module } from 'vuex'
import { getters } from './getters.ts'
import { mutations } from './mutations.ts'
import { ProfileState } from './types.ts'
import { RootState } from '../types.ts'

export const state: ProfileState = {
  city: '北京'
}
const namespaced: boolean = true
export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  mutations
}
