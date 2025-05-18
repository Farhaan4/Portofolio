<template>
  <section class="max-w-7xl mx-auto p-6">
    <h2 class="text-4xl font-extrabold mb-10 text-center text-blue-700 animate-fade-in">
      Proyek Saya
    </h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        tabindex="0"
        @click="openProject(project.link)"
        @keydown.enter="openProject(project.link)"
        aria-label="Proyek {{ project.title }}"
      >
        <div class="h-48 overflow-hidden">
          <img
            :src="project.screenshots[0]"
            :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 text-blue-800">{{ project.title }}</h3>
          <p class="text-gray-700 mb-4">{{ project.description }}</p>
          <button
            class="inline-block px-5 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            @click.stop="openProject(project.link)"
            aria-label="Lihat detail proyek {{ project.title }}"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>

    <!-- Section Detail Proyek dengan galeri screenshot -->
    <section
      v-for="(project, index) in projects"
      :key="'detail-' + index"
      :id="project.link.slice(1)"
      class="mt-20 p-8 bg-blue-50 rounded-xl shadow-lg animate-fade-in"
    >
      <h3 class="text-3xl font-bold mb-6 text-blue-700">{{ project.title }}</h3>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Galeri gambar -->
        <div class="md:w-1/3 flex flex-col items-center">
          <img
            :src="project.screenshots[currentScreenshot[index]]"
            :alt="`Screenshot ${currentScreenshot[index] + 1} dari ${project.title}`"
            class="rounded-lg shadow-md object-cover max-h-64 w-full"
            loading="lazy"
          />
          <div class="mt-4 flex justify-between w-full px-6">
            <button
              class="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              @click="prevScreenshot(index)"
              :disabled="currentScreenshot[index] === 0"
              aria-label="Gambar sebelumnya"
            >
              Prev
            </button>
            <span class="text-gray-700 self-center">
              {{ currentScreenshot[index] + 1 }} / {{ project.screenshots.length }}
            </span>
            <button
              class="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              @click="nextScreenshot(index)"
              :disabled="currentScreenshot[index] === project.screenshots.length - 1"
              aria-label="Gambar berikutnya"
            >
              Next
            </button>
          </div>
        </div>

        <div class="md:w-2/3">
          <p class="text-gray-800 mb-4 leading-relaxed">
            {{ project.longDescription || project.description }}
          </p>
          <ul class="list-disc list-inside text-gray-700 mb-6">
            <li v-for="(feature, fIndex) in project.features || []" :key="fIndex">
              {{ feature }}
            </li>
          </ul>
          <button
            class="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            @click="scrollToTop"
            aria-label="Kembali ke daftar proyek"
          >
            Kembali ke Proyek
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { reactive } from "vue"

// Import gambar lokal
import ikan1 from '@/assets/images/logoIkan.png'
import ikan2 from '@/assets/images/homeikan.jpg'
import pacu1 from '@/assets/images/Game_Logo_Final.png'
import pacu2 from '@/assets/images/GameVisual.png'
import pacu3 from '@/assets/images/DisplayGame.jpg'
import produk1 from '@/assets/images/Login_Inventaris.png'
import produk2 from '@/assets/images/Daftar_Ruangan.png'
import produk3 from '@/assets/images/Navbar_Inventaris.png'
import spada1 from '@/assets/images/spada.jpg'
import Spada2 from '@/assets/images/spada2.jpg'
import Spada3 from '@/assets/images/spada4.jpg'
import gojek1 from '@/assets/images/gojek.jpg'
import gojek2 from '@/assets/images/gojek2.jpg'
import gojek3 from '@/assets/images/gojek3.jpg'
import babel1 from '@/assets/images/babel2.jpg'
import babel2 from '@/assets/images/babelsphere.jpg'


const projects = [
  {
  title: "Deteksi Kesegaran Ikan",
  description: "Aplikasi mobile berbasis CNN untuk mendeteksi kesegaran ikan melalui citra mata dan insang.",
  longDescription: "Proyek ini menggunakan model Convolutional Neural Network (CNN) untuk menganalisis citra mata dan insang ikan guna menentukan tingkat kesegaran secara akurat. Model CNN dilatih menggunakan dataset citra ikan dan diintegrasikan ke dalam aplikasi mobile yang dibangun dengan Kotlin.",
  features: [
    "Klasifikasi tingkat kesegaran ikan berdasarkan gambar mata dan insang",
    "Model CNN yang ringan dan akurat untuk kebutuhan mobile",
    "Fitur riwayat deteksi dengan antarmuka yang sederhana dan intuitif",
  ],
  screenshots: [ikan1, ikan2],
  link: "#deteksi-kesegaran-ikan",
},
  {
    title: "Game Pacu Jawi",
    description: "Game balap tradisional kerbau yang dikembangkan dengan konsep gameplay ala Mario Kart.",
    longDescription: "Game dengan grafis low-poly yang menghadirkan suasana balapan kerbau khas Minangkabau, lengkap dengan power-up dan track unik. Dibuat menggunakan Unity3D dan C#.",
    features: [
      "Mode single-player dan multiplayer lokal",
      "Power-up dan item seru selama balapan",
      "Track berbasis budaya lokal",
    ],
    screenshots: [pacu1, pacu2, pacu3],
    link: "#game-pacu-jawi",
  },
  {
  title: "Projek Base Learning - Sistem Inventaris Barang Di Labor TI",
  description: "Aplikasi manajemen inventaris berbasis web dengan Laravel dan MySQL.",
  longDescription: "Sistem ini dibangun menggunakan framework Laravel untuk mempermudah proses manajemen barang di laboratorium Teknik Informatika. Data disimpan dan diolah menggunakan database MySQL, memungkinkan pengelolaan barang yang efisien dan sistematis melalui antarmuka web yang user-friendly.",
  features: [
    "Fitur CRUD lengkap untuk data barang",
    "Manajemen ruangan dan kategori barang",
    "Autentikasi pengguna dan sistem keamanan dasar",
  ],
  screenshots: [produk1, produk2, produk3],
  link: "#manajemen-produk",
},

   {
    title: "Re-Design Web Spadati Menggunakan Figma",
    description: "Perancangan ulang UI/UX website SPADATI menggunakan Figma untuk tampilan lebih modern dan ramah pengguna.",
    longDescription: "Proyek ini berfokus pada perbaikan tampilan dan pengalaman pengguna dari website SPADATI. Desain ulang dibuat menggunakan Figma dengan memperhatikan konsistensi visual, kemudahan navigasi, dan responsivitas.",
    features: [
      "Desain responsif untuk berbagai perangkat",
      "Tampilan antarmuka yang modern dan intuitif",
      "Struktur halaman yang lebih efisien dan user-friendly",
    ],
    screenshots: [spada1, Spada2, Spada3],
    link: "#re-design-web-spadati",
  },
  {
    title: "Replikasi Design Gojek Menggunakan Figma",
    description: "Replikasi tampilan aplikasi Gojek menggunakan Figma untuk latihan UI design.",
    longDescription: "Dalam proyek ini, tampilan aplikasi Gojek direplikasi sebagai latihan desain antarmuka. Fokus diberikan pada kesesuaian layout, warna, icon, dan navigasi sesuai aplikasi asli.",
    features: [
      "Replikasi tampilan Gojek secara detail",
      "Latihan penggunaan Figma untuk UI/UX design",
      "Penerapan prinsip desain konsisten dan responsif",
    ],
    screenshots: [gojek1, gojek2, gojek3],
    link: "#replikasi-gojek-figma",
  },

{
  title: "Desain Figma Aplikasi BabelSphere",
  description: "Desain UI/UX aplikasi pembelajaran bahasa asing yang interaktif dan modern.",
  longDescription: "BabelSphere adalah konsep aplikasi mobile yang dirancang untuk membantu pengguna belajar berbagai bahasa asing dengan metode interaktif. Proyek ini dikembangkan sebagai bagian dari tugas mata kuliah Entrepreneurship, dan fokus pada desain antarmuka dan alur pengguna menggunakan Figma, tanpa implementasi aplikasi nyata.",
  features: [
    "Desain interaktif dengan Figma untuk pembelajaran bahasa asing",
    "Alur pengguna yang jelas mulai dari pemilihan bahasa hingga latihan harian",
    "Tampilan modern dengan pendekatan gamifikasi untuk meningkatkan keterlibatan pengguna",
  ],
    screenshots: [babel1, babel2, ],
    link: "#babelsphere--figma",
  },
  // Tambahkan proyek lain seperti sebelumnya
]

const currentScreenshot = reactive(
  projects.reduce((acc, _, i) => {
    acc[i] = 0
    return acc
  }, {})
)

function openProject(url) {
  if (url.startsWith("#")) {
    const el = document.querySelector(url)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  } else {
    window.open(url, "_blank")
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function prevScreenshot(projectIndex) {
  if (currentScreenshot[projectIndex] > 0) {
    currentScreenshot[projectIndex] -= 1
  }
}

function nextScreenshot(projectIndex) {
  if (currentScreenshot[projectIndex] < projects[projectIndex].screenshots.length - 1) {
    currentScreenshot[projectIndex] += 1
  }
}
</script>


<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.7s ease forwards;
}
</style>
