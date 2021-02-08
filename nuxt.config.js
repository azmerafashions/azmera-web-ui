export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'azmerafashions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      // brands: ['faGoogle', 'faLinkedin'],
      brands: true,
    },
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyANUWmGfy04NVQTOFmgmjhtbrYLgox9zUQ',
          authDomain: 'azmera-fashion.firebaseapp.com',
          databaseURL: 'https://azmera-fashion-default-rtdb.firebaseio.com',
          projectId: 'azmera-fashion',
          storageBucket: 'azmera-fashion.appspot.com',
          messagingSenderId: '74830920266',
          appId: '1:74830920266:web:76485f43318bfc8c8ec4b3',
        },
        services: {
          auth: true,
          firestore: true,
          storage: true,
        },
      },
    ],
    // [
    //   'nuxt-fontawesome',
    //   {
    //     component: 'fa',
    //     imports: [
    //       {
    //         set: '@fortawesome/free-solid-svg-icons',
    //         icons: ['fas'],
    //       },
    //       {
    //         set: '@fortawesome/free-brands-svg-icons',
    //         icons: ['fad'],
    //       },
    //       // please note this is PRO set in this example,
    //       // you must have it in your node_modules to actually import
    //     ],
    //   },
    // ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
