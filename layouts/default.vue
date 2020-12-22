<template>
  <div>
    <LazyNavHeader :logo-url="getHome.logo.url" />
    <Nuxt />
    <LazyNavFooter :cover-url="getHome.cover.url" />
    <mq-layout mq="sm">
      <LazySlideOverMenu :logo-url="getHome.logo.url" />
    </mq-layout>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
const isEmpty = require('lodash/isEmpty')

export default {
  async fetch() {
    if (isEmpty(this.getHome)) {
      this.setHome(
        await this.$strapi.graphql({
          query: `
          query {
            home {
              title
              cover {
                url
              }
              logo {
                url
              }
            }
          }
      `,
        })
      )
    }
  },
  computed: {
    ...mapGetters('home', ['getHome']),
  },
  methods: {
    ...mapMutations('home', ['setHome']),
  },
}
</script>

<style>
/* font-family: 'Inter', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px; */

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<style lang="scss">
nav.scrolled {
  @apply shadow-2xl border-b-0 bg-primary;
}
</style>
