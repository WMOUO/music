// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  future: {
    compatibilityVersion: 4,
  },
  dir: {
    app: 'app'
  },
  css: ['~/assets/css/main.css'],
  eslint: {
    config: {
      stylistic: true
    }
  },
})