<template>
  <div>
    <div v-for="year in getYear" :key="year">
      <div>
        <span>{{ year }}</span>
        <br />
        <span v-for="month in getMonthByYear(year)" :key="month">
          {{
            new Date(year, month, 0).toLocaleString('default', {
              month: 'long',
            })
          }}
          <br />
          first day:
          {{ new Date(year, month, 1).toISOString() }}
          <br />
          last day:
          {{ new Date(year, month + 1, 0, 23, 59, 59).toISOString() }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  async fetch() {
    // const dates = this.getArchive.map((post) => post.created_at).toString()
    this.setArchive(
      await this.$strapi.graphql({
        query: `
          query {
              posts(sort: "created_at:desc") {
                  created_at
              }
          }
        `,
      })
    )
  },
  computed: {
    ...mapGetters('post', ['getYear', 'getMonthByYear']),
  },
  methods: {
    ...mapMutations('post', ['setArchive', 'setPosts']),
  },
}
</script>
