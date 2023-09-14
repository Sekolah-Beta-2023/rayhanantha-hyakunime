export default {
  publicRuntimeConfig: {
    appName: process.env.APP_NAME,
    description: 'Book your favorite Anime here',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Aniboks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js', type: 'module' },
      { src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js', type: 'nomodule' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  scss: [
    '@/assets/scss/main.scss',
    '@/assets/scss/animation.scss'
  ],

  js: [
    '@/assets/js/main.js'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  tailwindcss: {
    scssPath: '~/assets/scss/_tailwind.scss',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {
      plugins: [require('daisyui')],
      daisyui: {
        themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "@", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
      },
    },
    injectPosition: 'first',
    viewer: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Router Configuration
  router: {
    // Add your repo name /<-repository-name->/
    base: '/aniboks',
    routerNameSplitter: '/',
  },

  server: {
    port: 8000,
  }
}
