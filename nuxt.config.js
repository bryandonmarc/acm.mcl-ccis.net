require('dotenv').config()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'acm.mcl-ccis.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { 'http-equiv': 'Accept-CH', content: 'DPR, Viewport-Width, Width' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~~/node_modules/vue-rellax/lib/nuxt-plugin', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // https://bithacker.dev/use-express-with-nuxt-js
  serverMiddleware: [{ path: '/api', handler: '~/api/webhook.js' }],

  // Smooth-scrolling in Nuxt (https://stackoverflow.com/a/58333766)
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: () => {
            try {
              return (
                document.querySelector(to.hash).offsetTop + window.innerHeight
              )
            } catch (e) {
              return 0
            }
          },
          behavior: 'smooth',
        })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://strapi.nuxtjs.org/
    '@nuxtjs/strapi',
    // https://cloudinary.nuxtjs.org/
    '@nuxtjs/cloudinary',
    // https://github.com/vanhoofmaarten/nuxt-mq
    'nuxt-mq',
    // https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // https://dev.auth.nuxtjs.org/guide/
    '@nuxtjs/auth-next',
    // https://axios.nuxtjs.org/
    // '@nuxtjs/axios',
  ],

  strapi: {
    entities: ['authors', 'posts', 'home'],
    url: 'http://strapi.acm.mcl-ccis.net',
  },

  cloudinary: {
    cloudName: process.env.CLOUDNAME,
    secure: true,
    useComponent: true,
  },

  dotenv: {
    /* module options */
  },

  mq: {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },

  webfontloader: {
    google: {
      families: ['Inter:300,400,500,600&display=swap'],
    },
  },

  auth: {
    // Options
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
