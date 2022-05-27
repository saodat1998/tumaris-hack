import { getCoursesList } from '../http/requests/courses'
export const namespaced = true

export const state = () => ({
  items: [],
})

export const getters = {
  getCoursesItems: (state) => state.items,
}

export const actions = {
  async loadCoursesList({ state, commit }) {
    if (!state.items.length) {
      await getCoursesList().then((response) => {
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
