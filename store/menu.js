export const state = () => ({
  toggleMenuState: false,
})

export const mutations = {
  toggleMenu(state) {
    state.toggleMenuState = !state.toggleMenuState
  },
}

export const getters = {
  getMenuState: (state) => {
    return state.toggleMenuState
  },
}
