export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module'],
  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/theme.css'
  ]
});

