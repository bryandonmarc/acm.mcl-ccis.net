<template>
  <section class="overflow-hidden text-gray-700 body-font">
    <div
      class="max-w-screen-xl px-2 pt-4 pb-2 mx-2 my-6 border-b-2 border-gray-200 md:mb-0 md:mx-auto md:pt-8 lg:pt-16"
    >
      <span
        class="text-xl font-bold leading-10 tracking-widest text-gray-700 uppercase md:text-2xl sm:leading-none lg:text-3xl"
      >
        Updates
      </span>
    </div>

    <div class="container px-5 py-10 mx-auto md:pt-16">
      <div class="flex flex-wrap -m-12">
        <LazyBlogBlock
          v-for="post in getPosts"
          :id="post.id"
          :key="post.id"
          :slug="post.slug"
          :title="post.title"
          :description="
            post.description
              .replace(/(?:\r\n|\r|\n)/g, '<br \\>')
              .replace(/^(.{192}[^\s]*).*/, '$1') + '...'
          "
          :category="post.category"
          :views="post.views"
          :author="post.author"
          :img-url="
            post.mediaDynamic.find(
              (dynamic) => dynamic.__typename === 'ComponentMediaImage'
            ).image.url
          "
          :author-avatar="post.author.avatar.url"
        >
        </LazyBlogBlock>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  async fetch() {
    const ids = this.getPosts.map((post) => post.id).toString()
    this.setPosts(
      await this.$strapi.graphql({
        query: `
          query {
              posts(limit: 4, sort: "updated_at:desc", where: { id_nin: [${ids}] }) {
                  id
                  slug
                  title
                  description
                  category
                  views
                  author {
                      title
                      name {
                          firstname
                          lastname
                      }
                      avatar {
                          url
                      }
                  }
                  mediaDynamic {
                      __typename
                      ... on ComponentMediaImage {
                          image {
                              url
                          }
                      }
                  }
                  updated_at
              }
          }
        `,
      })
    )
  },
  computed: {
    ...mapGetters('post', ['getPosts']),
  },
  methods: {
    ...mapMutations('post', ['setPosts']),
  },
}
</script>
