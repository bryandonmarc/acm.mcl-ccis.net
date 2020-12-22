<template>
  <main>
    <section class="text-gray-700 body-font">
      <header class="relative overflow-hidden">
        <mq-layout mq="sm">
          <LazyImageComponent
            v-rellax="rellax"
            class="w-screen content"
            responsive="width"
            :img-url="
              content.mediaDynamic.find(
                (dynamic) => dynamic.__typename === 'ComponentMediaImage'
              ).image.url
            "
          />
        </mq-layout>
        <mq-layout mq="md+">
          <LazyImageComponent
            v-rellax="rellax"
            class="w-screen content"
            responsive="width"
            crop="fill"
            aspect-ratio="3"
            :img-url="
              content.mediaDynamic.find(
                (dynamic) => dynamic.__typename === 'ComponentMediaImage'
              ).image.url
            "
          />
        </mq-layout>
        <div class="shadow-bottom"></div>
        <div
          class="absolute bottom-0 mb-4 ml-8 lg:mb-8 lg:ml-16 text-secondary"
        >
          <span
            class="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl lg:font-bold"
            style="text-shadow: 2px 3px 2px #000"
            >{{ content.title }}</span
          >
        </div>
      </header>
      <div class="container flex flex-col px-5 mx-auto">
        <div class="mx-auto lg:w-4/6">
          <div class="flex flex-col mt-10 sm:flex-row">
            <div class="text-center sm:w-1/3 sm:pr-8 sm:py-8">
              <div
                class="inline-flex items-center justify-center w-20 h-20 text-gray-400 rounded-full shadow-md"
              >
                <LazyImageComponent
                  responsive="width"
                  crop="thumb"
                  radius="max"
                  :img-url="content.author.avatar.url"
                />
              </div>
              <div
                class="flex flex-col items-center justify-center text-center"
              >
                <h2 class="mt-4 text-lg font-medium text-gray-900 title-font">
                  {{ content.author.name.firstname }}
                  {{ content.author.name.lastname }}
                </h2>
                <div class="w-12 h-1 mt-2 mb-4 rounded bg-highlight"></div>
                <p class="text-base text-gray-600">
                  {{ content.author.title }}
                </p>
              </div>
            </div>
            <div
              class="pt-4 mt-4 text-left border-t border-gray-300 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0"
            >
              <span
                class="inline-block px-3 py-1 mb-4 text-sm font-medium tracking-widest uppercase bg-blue-100 rounded text-highlight"
                >{{ content.category }}</span
              >
              <p
                class="mb-4 leading-relaxed md:text-lg"
                v-html="linkifyDescription"
              >
                {{ linkifyDescription }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import linkifyHtml from 'linkifyjs/html'

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rellax: {
        speed: -3,
      },
    }
  },
  computed: {
    linkifyDescription() {
      return linkifyHtml(
        this.content.description.replace(/(?:\r\n|\r|\n)/g, '<br \\>'),
        {
          attributes: {
            rel: 'noopener noreferrer',
          },
        }
      )
    },
  },
}
</script>

<style lang="css">
.linkified {
  @apply text-highlight;
}

.linkified:hover {
  @apply text-blue-600 underline;
}

.shadow-bottom {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: inset 0 -1000px 800px -800px #00214e;
}
</style>
