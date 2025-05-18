
<template>
  <nav class="bg-white shadow-md py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
      <NuxtLink to="/" class="text-2xl font-bold text-blue-600">Portofolio</NuxtLink>
      <ul class="flex space-x-6">
        <li><NuxtLink to="/" class="text-gray-700 hover:text-blue-600">Beranda</NuxtLink></li>
        <li><NuxtLink to="/about" class="text-gray-700 hover:text-blue-600">Tentang</NuxtLink></li>
        <li><NuxtLink to="/projects" class="text-gray-700 hover:text-blue-600">Proyek</NuxtLink></li>
        <li><NuxtLink to="/contact" class="text-gray-700 hover:text-blue-600">Kontak</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>
