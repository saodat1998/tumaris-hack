export const namespaced = true

export const state = () => ({
  isMobile: false,
  width: '',
  innerWidth: '',
  innerHeight: '',
  height: '',
  pageYOffset: '',
  scrollY: '',
  scrollX: '',
})

export const getters = {
  getWidth: (state) => state.width,
  isMobile: (state) => state.isMobile,
  getPageYOffset: (state) => state.pageYOffset,
  getInnerWidth: (state) => state.innerWidth,
  getInnerHeight: (state) => state.innerHeight,
  getHeight: (state) => state.height,
  getScrollY: (state) => state.scrollY,
  getScrollX: (state) => state.scrollX,
}

export const actions = {
  checkWindow({ commit }) {
    if (process.browser) {
      commit('SET_WINDOW_CLIENT', window)
      commit('LOAD_DEVICE')
    }
  },
}

export const mutations = {
  SET_WINDOW_CLIENT(state, window) {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      state.height = window.height
      state.width = window.width
      state.innerWidth = window.innerWidth
      state.pageYOffset = window.pageYOffset
      state.innerHeight = window.innerHeight
      state.scrollX = window.scrollX
      state.scrollY = window.scrollY
    }
  },
  LOAD_DEVICE(state, window) {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      state.isMobile = state.innerWidth < 1001
    }
  },
}
