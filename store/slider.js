import { getSliderList } from '../http/requests/slider'
export const namespaced = true

export const state = () => ({
  items: [],
})

export const getters = {
  getSliderItems: (state) => state.items,
}

export const actions = {
  async loadSliderList({ state, commit }) {
    if (!state.items.length) {
      await getSliderList().then((response) => {
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
