module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Great list of drink recipes - FunnyDrinks',
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge' },
      { name: 'google-site-verification', content: '41e-mGSkO6NBcSo7yRWjoPqMFIfTlVrvrcKcE32NkrM' },
      { hid: 'og:title', property: 'og:title', content: 'Great list of drink recipes - FunnyDrinks' },
      { hid: 'og:description', property: 'og:description', content: 'Find the best cocktails and recipes with best ingredients for their creation. Have fun! Funny drinks!' },
      { hid: 'og:url', property: 'og:url', content: 'https://otejporze.pl' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'FunnyDrinks' },
      { hid: 'og:image', property: 'og:image', content: 'https://otejporze.pl/img/og_image.png' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'description', name: 'description', content: 'Find the best cocktails and recipes with best ingredients for their creation. Have fun! Funny drinks!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dosis:600|Open+Sans&display=swap' }
    ],
    script: [
      process.env.NODE_ENV === 'production' && { src: '/js/hotjar.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#7614ff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/_main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/service',
    '~/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: 'UA-146400602-1'
    }],
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-PQFRB5D',
      layer: 'dataLayer',
      pageTracking: true
    }]
  ],
  /*
  ** Style resources module configuration
  */
  styleResources: {
    scss: [
      '@/assets/scss/_vars.scss',
      '@/assets/scss/_mixins.scss',
      '@/assets/scss/_transitions.scss'
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://otejporze.pl/api'
      : 'http://localhost:3000/api',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: ['~/api/index.js']
}
