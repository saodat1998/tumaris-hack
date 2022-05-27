import { getCertificationList } from '../http/requests/certification'
export const namespaced = true

export const state = () => ({
  items: [],
})

export const getters = {
  getCertificationItems: (state) => state.items,
}

export const actions = {
  async loadCertificationList({ state, commit }) {
    if (!state.items.length) {
      await getCertificationList().then((response) => {
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
