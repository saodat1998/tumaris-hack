import { getList } from '../http/requests/services'
export const namespaced = true

export const state = () => ({
  items: [],
})

export const getters = {
  getServicesItems: (state) => state.items,
}

export const actions = {
  async loadServicesList({ state, commit }) {
    if (!state.items.length) {
      await getList().then((response) => {
        commit('SET_ITEMS', response.data.payload.newspaper.data)
      })
    }
  },
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
}
