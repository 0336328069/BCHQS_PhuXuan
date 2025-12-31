// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  ssr: false, // Static site - không cần SSR
  app: {
    // GitHub Pages với subpath: /BCHQS_PhuXuan/
    baseURL: '/BCHQS_PhuXuan/',
    buildAssetsDir: 'assets',
    cdnURL: '/BCHQS_PhuXuan/'
  },
  router: {
    base: '/BCHQS_PhuXuan/'
  },
  runtimeConfig: {
    public: {
      baseURL: '/BCHQS_PhuXuan/'
    }
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})

