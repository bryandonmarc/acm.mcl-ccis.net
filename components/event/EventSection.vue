<template>
  <section class="text-gray-700 body-font">
    <div
      class="max-w-screen-xl px-2 pt-4 pb-2 mx-2 my-6 border-b-2 border-gray-200 md:mb-0 md:mx-auto md:pt-8 lg:pt-16"
    >
      <span
        class="text-xl font-bold leading-10 tracking-widest text-gray-700 uppercase md:text-2xl sm:leading-none lg:text-3xl"
      >
        EVENTS
      </span>
    </div>

    <div class="container px-5 py-10 mx-auto md:pt-16">
      <div class="flex flex-wrap -mx-4 -my-8">
        <div class="px-4 py-8 lg:w-1/3">
          <LazyEventBlock
            v-for="event in getEvents"
            :id="event.id"
            :key="event.id"
            :slug="event.post.slug"
            :date="event.date"
            :title="event.title"
            :category="event.category"
            :startTime="event.startTime"
            :endTime="event.endTime"
          >
          </LazyEventBlock>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  async fetch() {
    const ids = this.getEvents.map((event) => event.id).toString()
    this.setEvents(
      await this.$strapi.graphql({
        query: `
            query {
              events(limit: 3, sort: "date:desc", where: { id_nin: [${ids}] }) {
                id
                title
                category
                date
                post {
                  slug
                }
                startTime
                endTime
              }
            }
        `,
      })
    )
  },
  computed: {
    ...mapGetters('event', ['getEvents']),
  },
  methods: {
    ...mapMutations('event', ['setEvents']),
  },
}
</script>
