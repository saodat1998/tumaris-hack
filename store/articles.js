import { getList } from '../http/requests/articles'
export const namespaced = true

export const state = () => ({
  items: [],
})

export const getters = {
  getArticlesItems: (state) => state.items,
}

export const actions = {
  async loadArticlesList({ state, commit }) {
    if (!state.items.length) {
      await getList().then((response) => {
        commit('SET_ITEMS', response.data.payload.articles.data)
      })
    }
  },
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
}
