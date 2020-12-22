<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-150 ease-in-out"
    :class="{ scrolled: !view.atTopOfPage }"
  >
    <div class="px-4 py-2 mx-auto md:py-4 max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div
            class="flex-shrink-0"
            :class="{ invisible: view.atTopOfPage && this.$mq === 'sm' }"
          >
            <LazyImageComponent height="96" :img-url="logoUrl" />
          </div>
          <div class="hidden md:block">
            <div class="flex items-baseline ml-10 space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <nuxt-link
                to="/"
                class="px-3 py-2 text-sm font-medium text-white rounded-md navheader dashboard hover:bg-secondary hover:text-black"
                >Dashboard</nuxt-link
              >

              <nuxt-link
                to="/blogs"
                class="px-3 py-2 text-sm font-medium rounded-md text-secondary hover:bg-secondary hover:text-black"
                >Updates</nuxt-link
              >

              <nuxt-link
                to="/events"
                class="px-3 py-2 text-sm font-medium rounded-md text-secondary hover:bg-secondary hover:text-black"
                >Events</nuxt-link
              >

              <nuxt-link
                to="/about"
                class="px-3 py-2 text-sm font-medium rounded-md text-secondary hover:bg-secondary hover:text-black"
                >About Us</nuxt-link
              >
            </div>
          </div>
        </div>
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

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <div class="hidden md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 hover:text-white"
          >Dashboard</a
        >

        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Team</a
        >

        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Projects</a
        >

        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Calendar</a
        >

        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Reports</a
        >
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">
              Tom Cook
            </div>
            <div class="text-sm font-medium leading-none text-gray-400">
              tom@example.com
            </div>
          </div>
          <button
            class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: bell -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>
        <div class="px-2 mt-3 space-y-1">
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
            >Your Profile</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
            >Settings</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    logoUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else if (!this.view.atTopOfPage) {
        // user is at top of page
        this.view.atTopOfPage = true
      }
    },
  },
}
</script>

<style lang="scss">
.navheader.nuxt-link-exact-active {
  @apply bg-highlight;
}

.nuxt-link-active:not(.dashboard):not(.footer) {
  @apply bg-highlight;
}
</style>
