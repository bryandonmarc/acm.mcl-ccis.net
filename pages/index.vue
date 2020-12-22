<template>
  <div>
    <HeroSection :cover-url="home.cover.url" />
    <LazyBlogSection />
    <LazyEventSection />
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const home = await $strapi.graphql({
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

    return home
  },
  head() {
    return {
      title: this.home.title,
    }
  },
}
</script>
