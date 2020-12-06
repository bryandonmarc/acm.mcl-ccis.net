<template>
  <div>
    <div class="relative overflow-hidden bg-primary hero">
      <client-only>
        <Particles
          color="#E5E5E5"
          :particles-number="80"
          shape-type="triangle"
          :particle-size="3"
          movement-direction="none"
          lines-color="#E5E5E5"
          :line-linked="true"
          :move-speed="1"
          :hover-effect="true"
          hover-mode="grab"
          :click-effect="true"
          click-mode="repulse"
        />
      </client-only>
      <div class="max-w-screen-xl mx-auto z-50">
        <div class="relative pb-8">
          <!-- <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#" aria-label="Home" class="w-20 sm:w-24"> </a>
                  <div class="flex items-center -mr-2 md:hidden">
                    <button
                      id="main-menu"
                      type="button"
                      class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                      aria-label="Main menu"
                      aria-haspopup="true"
                      @click="$store.commit('menu/toggleMenu')"
                    >
                      <svg
                        class="w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div class="hidden md:block">
                <a
                  href="#"
                  class="font-medium transition duration-150 ease-in-out text-secondary hover:text-accent active:text-accent"
                  >Dashboard</a
                >
                <a
                  href="#"
                  class="ml-8 font-medium transition duration-150 ease-in-out text-secondary hover:text-accent active:text-accent"
                  >Report</a
                >
                <a
                  href="#"
                  class="ml-8 font-medium transition duration-150 ease-in-out text-secondary hover:text-accent active:text-accent"
                  >Map</a
                >
                <a
                  href="#"
                  class="ml-8 font-medium transition duration-150 ease-in-out text-secondary hover:text-accent active:text-accent"
                  >Hotlines</a
                >
                <a
                  v-if="pwa"
                  href="#"
                  class="px-4 py-2 ml-8 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadoww-full bg-accent hover:bg-accent focus:outline-none focus:border-accent focus:shadow-outline-indigo md:text-lg md:px-6"
                >
                  Install as App
                </a>
              </div>
            </nav>
          </div> -->

          <main
            class="max-w-screen-xl text-right px-4 mx-auto mt-4 sm:px-6 md:mt-6 lg:mt-12 lg:px-8 hero-body"
          >
            <mq-layout mq="md+">
              <span
                class="text-4xl font-extrabold leading-10 tracking-tight text-white md:text-5xl sm:leading-none lg:text-6xl"
              >
                Province of
                <br class="xl:hidden" />
              </span>
            </mq-layout>

            <span
              class="text-5xl font-extrabold leading-10 tracking-tight md:text-6xl text-accent sm:leading-none"
              >Laguna</span
            >
            <p
              class="mt-3 mb-1 ml-auto text-base italic text-secondary md:text-lg sm:max-w-xl lg:text-xl"
            >
              Last updated on {{ new Date().toDateString() }}
            </p>
            <!-- Buttons -->
            <!-- <div class="mt-5 sm:mt-8 sm:flex sm:justify-end">
                <div class="rounded-md shadow">
                  <a
                    href="#"
                    class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-accent hover:bg-accent focus:outline-none focus:border-accent focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md text-accent bg-secondary hover:text-accent hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-accent md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div> -->
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['pwa'],
}
</script>

<style lang="scss">
.hero {
  div[id^='particles-instance-'] {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
}
</style>
