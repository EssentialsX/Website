import { MutationTree } from 'vuex/types/index'

export const state = () => ({
  pageTitle: '',
})

export type RoutingState = ReturnType<typeof state>

export const mutations: MutationTree<RoutingState> = {
  SET_PAGE_TITLE: (state, payload) => {
    state.pageTitle = payload
  },
}
