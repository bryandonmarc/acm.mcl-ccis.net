const unionBy = require('lodash/unionBy')
const orderBy = require('lodash/orderBy')

export const state = () => ({
  events: [],
})

export const mutations = {
  setEvents: (state, { events }) => {
    state.events = unionBy(state.events, events, 'id')
  },
}

export const getters = {
  getEvents: (state) => {
    return orderBy(state.events, 'date', 'desc')
  },
  getEvent: (state) => (slug) => {
    return state.events.find((event) => event.slug === slug)
  },
}
