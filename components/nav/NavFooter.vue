<template>
  <footer class="bg-primary body-font">
    <div
      class="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap"
    >
      <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
        <a
          class="flex items-center justify-center font-medium text-white title-font md:justify-start"
        >
          <LazyImageComponent responsive="width" :img-url="coverUrl" />
        </a>
        <p class="mt-2 text-sm text-gray-500">
          Malayan Colleges Laguna - Association of Computing Machinery Student
          Chapter Official Website
        </p>
      </div>
      <div
        class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left"
      >
        <div class="w-full px-4 lg:text-right lg:w-1/3 md:w-1/2">
          <h2
            class="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font"
          >
            Navigation
          </h2>
          <ul class="mb-10 list-none">
            <li>
              <NuxtLink to="/" class="text-gray-600 hover:text-secondary footer"
                >Dashboard</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/blogs"
                class="text-gray-600 hover:text-secondary footer"
                >Updates</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/events"
                class="text-gray-600 hover:text-secondary footer"
                >Events</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="w-full px-4 lg:text-right lg:w-1/3 md:w-1/2">
          <NuxtLink
            to="/about"
            class="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font footer"
          >
            About Us
          </NuxtLink>
          <ul class="mt-3 mb-10 list-none">
            <li>
              <NuxtLink
                :to="{ path: '/about', hash: '#members' }"
                class="text-gray-600 hover:text-secondary footer"
                >Executive Committee</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="{ path: '/about', hash: '#execomm' }"
                class="text-gray-600 hover:text-secondary footer"
                >Chapter Members</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="{ path: '/about', hash: '#bylaws' }"
                class="text-gray-600 hover:text-secondary footer"
                >Rules & Bylaws</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="w-full px-4 lg:text-right lg:w-1/3 md:w-1/2">
          <h2
            class="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font"
          >
            Contact Us
          </h2>
          <ul class="mb-10 list-none">
            <li>
              <a
                class="text-gray-600 hover:text-secondary"
                rel="noopener noreferrer"
                href="mailto:acm.mclstudchapter@gmail.com?subject=Concerns %26 Inquiries&body=%0D%0AReferred from MCL-ACM Official Website."
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
                class="text-gray-600 hover:text-secondary"
                href="https://www.facebook.com/acmMCL/"
                rel="noopener noreferrer"
                target="_blank"
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
                class="text-gray-600 hover:text-secondary"
                href="https://twitter.com/acm_MCL"
                rel="noopener noreferrer"
                target="_blank"
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
                class="text-gray-600 hover:text-secondary"
                href="https://www.instagram.com/acm_mcl/"
                rel="noopener noreferrer"
                target="_blank"
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
    <div class="bg-gray-200">
      <div
        class="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row"
      >
        <p class="text-sm text-center text-gray-500 sm:text-left">
          © 2020 MCL-ACM —
          <a
            href="https://www.facebook.com/bryan.donmarc/"
            rel="noopener noreferrer"
            target="_blank"
            class="ml-1 text-gray-600"
            >@bryan.donmarc</a
          >
        </p>
        <span
          class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start"
        >
          <span class="text-sm text-gray-500">built with </span>
          <a
            href="https://strapi.io/"
            rel="noopener noreferrer"
            target="_blank"
            class="ml-3 text-gray-500 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 244 244"
              class="w-5 h-5"
            >
              <g fill="currentColor" fill-rule="evenodd" class="strapi">
                <path
                  d="M161.893 165.833v-78.73a5.077 5.077 0 00-5.077-5.076H78.178V.76h159.815a5.077 5.077 0 015.078 5.077v159.996h-81.178z"
                />
                <path
                  d="M78.178.76v81.267H3.124a2.539 2.539 0 01-1.796-4.333L78.178.76zM161.893 240.966v-75.133h81.178l-76.844 76.927a2.539 2.539 0 01-4.334-1.794zM78.178 82.027h81.176a2.539 2.539 0 012.539 2.538v81.268H83.255a5.077 5.077 0 01-5.077-5.077v-78.73z"
                  opacity=".405"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://nuxtjs.org/"
            rel="noopener noreferrer"
            target="_blank"
            class="ml-3 text-gray-500 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 298"
              class="w-6 h-6"
            >
              <g fill="none">
                <path
                  class="nuxt-1"
                  fill="currentColor"
                  d="M227.921 82.074l-13.689 23.704-46.815-81.087-143.713 248.89h97.303c0 13.09 10.613 23.703 23.704 23.703H23.704A23.704 23.704 0 013.18 261.728L146.893 12.84a23.704 23.704 0 0141.057 0l39.97 69.234z"
                />
                <path
                  class="nuxt-2"
                  fill="currentColor"
                  d="M331.664 261.728l-90.054-155.95-13.689-23.704-13.689 23.704-90.044 155.95a23.704 23.704 0 0020.523 35.556h166.4a23.704 23.704 0 0020.533-35.556h.02zM144.711 273.58l83.21-144.099 83.19 144.1h-166.4z"
                />
                <path
                  class="nuxt-3"
                  fill="currentColor"
                  d="M396.05 285.432a23.7 23.7 0 01-20.524 11.852H311.11c13.091 0 23.704-10.613 23.704-23.704h40.662L260.099 73.748l-18.49 32.03-13.688-23.704 11.654-20.178a23.704 23.704 0 0141.057 0L396.05 261.728a23.704 23.704 0 010 23.704z"
                />
              </g>
            </svg>
          </a>

          <a
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
            class="ml-3 text-gray-600 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 51 30"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                fill="currentColor"
                class="tailwind"
              />
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    coverUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.group:hover {
  .nuxt-1 {
    color: #00c58e;
  }
  .nuxt-2 {
    color: #2f495e;
  }
  .nuxt-3 {
    color: #108775;
  }
  .strapi {
    color: #8e75ff;
  }
  .tailwind {
    color: #06b6d4;
  }
}
</style>
