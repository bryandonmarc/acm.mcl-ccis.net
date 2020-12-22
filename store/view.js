import murmurhash3 from '@/assets/murmurhash3_gc'

export const actions = {
  incrementViews: async (state, { id, slug, views }) => {
    const hash = murmurhash3.hash(slug)
    if (!window.$nuxt.$auth.$storage.getLocalStorage(hash)) {
      window.$nuxt.$auth.$storage.setLocalStorage(hash, true)
      await window.$nuxt.$strapi.$posts.update(id, { views: views + 1 })
    }
  },
}
