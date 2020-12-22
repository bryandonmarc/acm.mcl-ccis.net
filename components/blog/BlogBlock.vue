<template>
  <div class="flex flex-col items-start px-12 py-6 lg:py-12 md:w-1/2">
    <span
      class="inline-block px-3 py-1 mb-4 text-sm font-medium tracking-widest uppercase bg-blue-100 rounded text-highlight"
      >{{ category }}</span
    >
    <nuxt-link
      :to="`/blogs/${slug}`"
      @click.native="incrementViews({ id, slug, views })"
    >
      <LazyImageComponent
        class="blog-block"
        aspect-ratio="3"
        crop="fill"
        responsive="width"
        :img-url="imgUrl"
      />

      <h2
        class="my-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font"
      >
        {{ title }}
      </h2>
    </nuxt-link>
    <p class="mb-8 leading-relaxed" v-html="description">
      {{ description }}
    </p>
    <div
      class="flex flex-wrap items-center w-full pb-4 mt-auto mb-4 border-b-2 border-gray-200"
    >
      <nuxt-link
        :to="`/blogs/${slug}`"
        @click.native="incrementViews({ id, slug, views })"
      >
        <a class="inline-flex items-center text-highlight"
          >Learn More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </nuxt-link>
      <span
        class="inline-flex items-center py-1 ml-auto text-sm leading-none text-gray-600"
      >
        <svg
          class="w-4 h-4 mr-1"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle></svg
        >{{ views }}
      </span>
    </div>
    <a class="inline-flex items-center">
      <LazyImageComponent
        height="100"
        width="100"
        crop="thumb"
        class="rounded-full shadow author-avatar"
        radius="max"
        :img-url="authorAvatar"
      />
      <span class="flex flex-col flex-grow pl-4">
        <span class="font-medium text-gray-900 title-font"
          >{{ author.name.firstname }} {{ author.name.lastname }}</span
        >
        <span class="text-sm text-gray-500">{{ author.title }}</span>
      </span>
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
    authorAvatar: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions('view', ['incrementViews']),
  },
}
</script>

<style lang="scss">
div.cld-image.blog-block {
  img {
    @apply object-cover object-center w-full rounded-t-lg;

    @screen lg {
      @apply h-64;
    }

    @screen md {
      @apply h-48;
    }
  }
}

div.cld-image.author-avatar {
  img {
    @apply w-12 h-12 rounded-full flex-shrink-0 object-cover object-center;
  }
}

br {
  display: block;
  content: '';
  margin: 10px 0 0;
}
</style>
