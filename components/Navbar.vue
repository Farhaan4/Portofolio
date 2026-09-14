
<template>
  <nav class="sticky top-0 z-50 bg-white shadow-md">
    <div class="container relative mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
      <NuxtLink to="/" class="text-xl font-bold text-blue-600 sm:text-2xl">Portofolio</NuxtLink>
      <button class="rounded-lg p-2 text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 md:hidden" type="button" :aria-expanded="isMenuOpen" aria-controls="mobile-navigation" aria-label="Buka menu navigasi" @click="isMenuOpen = !isMenuOpen">
        <span class="text-2xl" aria-hidden="true">{{ isMenuOpen ? '×' : '☰' }}</span>
      </button>
      <ul class="hidden items-center gap-6 md:flex">
        <li v-for="item in menuItems" :key="item.to"><NuxtLink :to="item.to" class="text-gray-700 hover:text-blue-600">{{ item.label }}</NuxtLink></li>
      </ul>
      <ul v-if="isMenuOpen" id="mobile-navigation" class="absolute left-0 right-0 top-full space-y-1 border-t border-blue-100 bg-white px-4 py-3 shadow-md md:hidden">
        <li v-for="item in menuItems" :key="item.to"><NuxtLink :to="item.to" class="block rounded-lg px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600" @click="isMenuOpen = false">{{ item.label }}</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const menuItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang', to: '/about' },
  { label: 'Proyek', to: '/projects' },
  { label: 'Kontak', to: '/contact' },
]
</script>
