<template>
  <div>
    <LazyContent :content="getPost(slug)" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params }) {
    const slug = await params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
  computed: {
    ...mapGetters('post', ['getPost']),
  },
}
</script>
