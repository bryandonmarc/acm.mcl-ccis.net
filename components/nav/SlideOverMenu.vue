<template>
  <div
    class="fixed inset-0 overflow-hidden"
    :class="[zIndexToggle ? 'z-50 block' : 'z-0 hidden']"
  >
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
          @click.self="toggleMenu"
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
                  @click="toggleMenu"
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
                  <div
                    class="flex flex-wrap flex-grow mt-10 text-center md:pl-20 md:mt-0 md:text-left sidemenu"
                  >
                    <div class="w-full px-4 lg:text-right lg:w-1/3 md:w-1/2">
                      <h2
                        class="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font"
                      >
                        Navigation
                      </h2>
                      <ul class="mb-10 list-none">
                        <li>
                          <NuxtLink
                            to="/"
                            class="text-gray-900 hover:text-black footer"
                            @click.native="toggleMenu"
                            >Dashboard</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink
                            to="/blogs"
                            class="text-gray-900 hover:text-black footer"
                            @click.native="toggleMenu"
                            >Updates</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink
                            to="/events"
                            class="text-gray-900 hover:text-black footer"
                            @click.native="toggleMenu"
                            >Events</NuxtLink
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="w-full px-4 lg:text-right lg:w-1/3 md:w-1/2">
                      <h2
                        class="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font footer"
                      >
                        About Us
                      </h2>
                      <ul class="mb-10 list-none">
                        <li>
                          <NuxtLink
                            :to="{ path: '/about', hash: '#members' }"
                            class="text-gray-900 hover:text-black footer"
                            @click.native="toggleMenu"
                            >Executive Committee</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink
                            :to="{ path: '/about', hash: '#execomm' }"
                            class="text-gray-900 hover:text-black footer"
                            @click.native="toggleMenu"
                            >Chapter Members</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink
                            :to="{ path: '/about', hash: '#bylaws' }"
                            class="text-gray-900 hover:text-black footer"
                            @click.native="toggleMenu"
                            >Rules & Bylaws</NuxtLink
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="w-full px-4 lg:text-right lg:w-1/3 md:w-1/2">
                      <h2
                        class="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font"
                      >
                        Contact Us
                      </h2>
                      <ul class="mb-10 list-none">
                        <li>
                          <a
                            class="text-gray-900 hover:text-black"
                            rel="noopener noreferrer"
                            href="mailto:acm.mclstudchapter@gmail.com?subject=Concerns %26 Inquiries&body=%0D%0AReferred from MCL-ACM Official Website."
                            @click="toggleMenu"
                          >
                            <span class="inline-flex items-center">
                              <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5 mr-2"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M464 64H48C21.504 64 0 85.504 0 112v288c0 26.496 21.504 48 48 48h416c26.496 0 48-21.504 48-48V112c0-26.496-21.504-48-48-48zm-56.512 32L256 215.616 104.512 96h302.976zM448 416H64V148.672l192 147.68L448 148.64V416z"
                                ></path>
                              </svg>
                              acm.mclstudchapter
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            class="text-gray-900 hover:text-black"
                            href="https://www.facebook.com/acmMCL/"
                            rel="noopener noreferrer"
                            target="_blank"
                            @click="toggleMenu"
                          >
                            <span class="inline-flex items-center">
                              <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5 mr-2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                ></path>
                              </svg>
                              @acmMCL
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            class="text-gray-900 hover:text-black"
                            href="https://twitter.com/acm_MCL"
                            rel="noopener noreferrer"
                            target="_blank"
                            @click="toggleMenu"
                          >
                            <span class="inline-flex items-center">
                              <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5 mr-2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                ></path>
                              </svg>
                              @acm_MCL
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            class="text-gray-900 hover:text-black"
                            href="https://www.instagram.com/acm_mcl/"
                            rel="noopener noreferrer"
                            target="_blank"
                            @click="toggleMenu"
                          >
                            <span class="inline-flex items-center">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5 mr-2"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  width="20"
                                  height="20"
                                  x="2"
                                  y="2"
                                  rx="5"
                                  ry="5"
                                ></rect>
                                <path
                                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                ></path>
                              </svg>
                              @acm_mcl
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"
              >
                <a
                  class="flex items-center justify-center font-medium text-white title-font md:justify-start"
                >
                  <div class="px-16">
                    <LazyImageComponent responsive="width" :img-url="logoUrl" />
                  </div>
                </a>
                <p class="text-sm text-gray-500">
                  Malayan Colleges Laguna - Association of Computing Machinery
                  Student Chapter Official Website
                </p>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    logoUrl: {
      type: String,
      required: true,
    },
  },
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
    ...mapMutations('menu', ['toggleMenu']),
  },
}
</script>

<style lang="css">
.sidemenu > div > .title-font {
  @apply border-b border-gray-300;
}
</style>
