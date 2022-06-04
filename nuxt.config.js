export default {
  target: 'static',

  head: {
    title: 'wesseloud',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    base: '/wesseloud/'
  },

  css: [
    '~/assets/css/main.css'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/google-fonts'
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  googleFonts: {
    families: {
      Helvatica: true
    }
  },

  content: {},
  build: {}
}
