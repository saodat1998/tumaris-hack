import { getManagerList, getTeamList } from '../http/requests/team'
export const namespaced = true

export const state = () => ({
  items: [],
  management_items: [],
})

export const getters = {
  getTeamItems: (state) => state.items,
  getManagementItems: (state) => state.management_items,
}

export const actions = {
  async loadTeamList({ state, commit }, type) {
    if (!state.items.length) {
      await getTeamList().then((response) => {
        commit('SET_ITEMS', response.data.payload.newspaper.data)
      })
    }
  },
  async loadManagementList({ state, commit }) {
    if (!state.management_items.length) {
      await getManagerList().then((response) => {
        commit('SET_MANAGEMENT_ITEMS', response.data.payload.newspaper.data)
      })
    }
  },
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_MANAGEMENT_ITEMS(state, items) {
    state.management_items = items
  },
}
