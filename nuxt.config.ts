// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  ssr: false, // Static site - không cần SSR
  app: {
    // Nếu deploy GitHub Pages với repo name là BCHQS, đổi thành '/BCHQS/'
    // Nếu deploy vào root domain (username.github.io), để '/'
    baseURL: '/',
    buildAssetsDir: 'assets'
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})

