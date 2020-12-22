export const state = () => ({
  home: {},
})

export const mutations = {
  setHome: (state, { home }) => {
    state.home = home
  },
}

export const getters = {
  getHome: (state) => {
    return state.home
  },
}
