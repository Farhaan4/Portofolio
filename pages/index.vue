<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 px-6 py-20">
    <div class="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-16 animate-fade-in">
      
      <!-- Teks -->
      <div class="text-center md:text-left space-y-6 flex-1">
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
          Hai, Saya <span class="text-blue-600">Farhan</span> 👋
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-xl">
          Saya seorang <span class="text-blue-600 font-semibold">Web & Mobile Developer</span> yang bersemangat membangun produk digital yang berdampak.
        </p>

        <div class="text-xl font-mono text-blue-500 animate-typing border-r-4 border-blue-600 w-max whitespace-nowrap overflow-hidden">
          Coding • UI/UX • Mobile • Backend
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
          <NuxtLink to="/projects">
            <button class="btn-glow">🚀 Proyek Saya</button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <button class="btn-outline-glow">✉️ Hubungi Saya</button>
          </NuxtLink>
        </div>
      </div>

      <!-- Foto -->
      <div class="flex-1 flex justify-center">
        <div class="relative group">
          <img
            :src="foto"
            alt="Foto Profil"
            class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-2xl transform group-hover:scale-110 transition duration-700"
          />
          <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-blue-600 px-4 py-1 rounded-full shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-700">
            🌟 Tersedia untuk Freelance
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import foto from '~/assets/images/profil.jpg' // Pastikan path gambar sudah benar
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

.animate-typing {
  animation: typing 3s steps(20) infinite alternate;
}

.btn-glow {
  @apply px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-xl;
}

.btn-outline-glow {
  @apply px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold rounded-full shadow-md transition transform hover:scale-105;
}
</style>
