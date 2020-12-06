<template>
  <div class="fixed inset-0 overflow-hidden" :class="{ 'z-50': zIndexToggle }">
    <div class="absolute inset-0 overflow-hidden">
      <!--
      Background overlay, show/hide based on slide-over state.
    -->
      <transition
        enter-active-class="transition duration-500 ease-in-out "
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-500 ease-in-out "
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        @before-enter="enter"
        @after-leave="leave"
      >
        <div
          v-if="getMenuState"
          class="absolute inset-0 transition-opacity bg-gray-900 bg-opacity-75"
          @click.self="$store.commit('menu/toggleMenu')"
        ></div>
      </transition>
      <section class="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <!--
        Slide-over panel, show/hide based on slide-over state.
      -->
        <transition
          enter-active-class="transition duration-500 ease-in-out transform sm:duration-700"
          enter-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition duration-500 ease-in-out transform sm:duration-700"
          leave-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-if="getMenuState" class="relative w-screen max-w-md">
            <!--
          Close button, show/hide based on slide-over state.
        -->
            <transition
              enter-active-class="transition duration-500 ease-in-out "
              enter-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition duration-500 ease-in-out "
              leave-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <div
                v-if="getMenuState"
                class="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4"
              >
                <button
                  aria-label="Close panel"
                  class="text-gray-300 transition duration-150 ease-in-out hover:text-white"
                  @click="$store.commit('menu/toggleMenu')"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </transition>
            <div
              class="flex flex-col justify-between h-full py-6 space-y-6 overflow-y-scroll shadow-2xl bg-primary"
            >
              <div class="relative flex-1 px-4 sm:px-6">
                <div
                  class="overflow-hidden bg-white"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <nav class="px-2 pt-2 pb-3">
                    <a
                      href="#"
                      class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                      role="menuitem"
                      >Product</a
                    >
                    <a
                      href="#"
                      class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                      role="menuitem"
                      >Features</a
                    >
                    <a
                      href="#"
                      class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                      role="menuitem"
                      >Marketplace</a
                    >
                    <a
                      href="#"
                      class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                      role="menuitem"
                      >Company</a
                    >
                  </nav>
                </div>
              </div>
              <header class="flex flex-col items-center justify-center p-6">
                <img src="~assets/svg/mcl.svg" class="w-8/12 h-auto" />
                <h2 class="text-sm font-bold leading-7 text-white">
                  COVID-19 Case Tracker for Laguna
                </h2>
              </header>
              <!-- /End replace -->
            </div>
          </div>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      zIndexToggle: false,
    }
  },
  computed: {
    ...mapGetters('menu', ['getMenuState']),
  },
  methods: {
    enter() {
      this.zIndexToggle = true
    },
    leave() {
      this.zIndexToggle = false
    },
  },
}
</script>
