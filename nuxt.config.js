export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || 'Nuxt Content Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/i18n'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-i18n'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  publicRuntimeConfig: {
    nuxtLocale: process.env.NUXT_LOCALE || 'en'
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'fr',
        file: 'fr.js',
        iso: 'fr-FR',
        name: 'Français'
      },
      {
        code: 'es',
        file: 'es.js',
        iso: 'es-ES',
        name: 'Spanish'
      }
    ],
    vuei18n: {
      fallbackLocale: 'en'
    },
    defaultLocale: 'en',
    parsePages: false,
    seo: false,
    lazy: true,
    langDir: 'i18n/'
  }
}
