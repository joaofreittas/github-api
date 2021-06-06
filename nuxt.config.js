export default {
  head: {
    title: 'github-api',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins: [
    '~/plugins/axios'
  ],
  components: true,
  buildModules: [],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.BASE_URL
  },
  build: {
    transpile: ['npm-package-name'],
  }
}
