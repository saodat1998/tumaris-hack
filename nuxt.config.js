import { join } from 'path'
export default {
  server: {
    host: process.env.SERVER_IP,
    port: process.env.SERVER_PORT,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Coys',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    baseUrl: process.env.API_URL,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/mixins.js', ssr: true },
    { src: '~/plugins/mock.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    '~/components/navigation',
    '~/components/banners',
    '~/components/company',
    '~/components/sections',
    '~/components/card_blocks',
    '~/components/footer',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/router',
      {
        path: join(__dirname, 'router'),
        fileName: 'index.js',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    [
      'nuxt-i18n',
      {
        seo: true,
        locales: [
          {
            code: 'en',
            iso: 'en-EN',
            name: 'English',
            file: 'en.json',
          },
        ],
        detectBrowserLanguage: {
          useCookie: false,
          cookieKey: 'i18n_redirected',
        },
        defaultLocale: 'en',
        lazy: true,
        langDir: 'static/lang/',
        fallbackLocale: ['en', 'ru', 'uz'],
      },
    ],
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-tag-manager', { id: process.env.GTM_CODE }],
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true,
  },

  styleResources: {
    scss: ['@/assets/scss/_variables.scss', '@/assets/scss/breakpoints.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
    babel: { compact: true },
  },
}
