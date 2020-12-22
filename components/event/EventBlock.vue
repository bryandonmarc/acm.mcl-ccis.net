<template>
  <div class="flex items-start h-full">
    <nuxt-link :to="`/events/${slug}`">
      <div class="flex flex-col flex-shrink-0 w-12 leading-none text-center">
        <span
          class="pb-2 mb-2 border-b-2"
          :class="[
            pastDate
              ? 'text-gray-500 border-red-200'
              : 'text-highlight border-highlight',
          ]"
          >{{
            new Date(date).toLocaleString('default', { month: 'short' })
          }}</span
        >
        <span
          class="text-xl title-font"
          :class="[pastDate ? 'text-gray-500' : 'text-gray-800 font-medium']"
          >{{ new Date(date).getDay() }}</span
        >
      </div>
    </nuxt-link>
    <div class="flex-grow pl-6">
      <span
        class="inline-block px-3 py-1 mb-2 text-xs font-medium tracking-widest uppercase rounded title-font"
        :class="[
          pastDate ? 'text-gray-500 bg-gray-100' : 'text-highlight bg-blue-100',
        ]"
      >
        {{ category.replace(/_/g, '-') }}
      </span>
      <nuxt-link :to="`/blogs/${slug}`">
        <h1
          class="mb-2 text-xl font-medium title-font"
          :class="[pastDate ? 'text-gray-600' : 'text-gray-900 ']"
        >
          {{ title }}
        </h1>
      </nuxt-link>
      <p class="mb-4 leading-relaxed text-gray-500">
        {{ startTime }} {{ endTime ? `— ${endTime}` : '' }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  computed: {
    pastDate() {
      const today = new Date().setHours(0, 0, 0, 0)
      const date = new Date(this.date).setHours(0, 0, 0, 0)

      return today > date
    },
  },
}
</script>
