<template>
  <div class="flex flex-col min-h-screen font-sans bg-white text-gray-800">
    <Navbar />
    <main class="flex-grow">
      <NuxtPage />  <!-- Menampilkan halaman yang sesuai dengan routing -->
    </main>
   
  </div>
</template>

<script setup>
import Navbar from '@/components/navbar.vue'
/*import Footer from '@/components/footer.vue'*/
</script>
<style scoped>
/* Membuat footer tetap di bawah */
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>
