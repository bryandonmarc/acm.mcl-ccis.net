const unionBy = require('lodash/unionBy')
const orderBy = require('lodash/orderBy')
const uniq = require('lodash/uniq')

export const state = () => ({
  posts: [],
  archive: [],
})

export const mutations = {
  setPosts: (state, { posts }) => {
    state.posts = unionBy(state.posts, posts, 'id')
  },
  setArchive: (state, { posts }) => {
    state.archive = posts
  },
}

export const getters = {
  getPosts: (state) => {
    return orderBy(state.posts, 'updated_at', 'desc')
  },
  getPost: (state) => (slug) => {
    return state.posts.find((post) => post.slug === slug)
  },
  getYear: (state) => {
    return uniq(
      state.archive.map((post) => new Date(post.created_at).getFullYear())
    )
  },
  getMonthByYear: (state) => (year) => {
    return uniq(
      state.archive
        .filter((post) => new Date(post.created_at).getFullYear() === year)
        .map((post) => new Date(post.created_at).getMonth())
    )
  },
}
