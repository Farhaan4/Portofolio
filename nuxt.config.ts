export default defineNuxtConfig({
  css: ['@/assets/tailwind.css'],
  modules: ['@nuxt/icon'], // ✅ Menambahkan module Nuxt Icon

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
