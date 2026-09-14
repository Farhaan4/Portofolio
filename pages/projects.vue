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
      class="mt-20 p-5 sm:p-8 bg-blue-50 rounded-xl shadow-lg animate-fade-in"
    >
      <h3 class="text-3xl font-bold mb-6 text-blue-700">{{ project.title }}</h3>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Galeri gambar -->
        <div class="md:w-1/3 flex flex-col items-center">
          <img
            :src="project.screenshots[currentScreenshot[index]]"
            :alt="`Screenshot ${currentScreenshot[index] + 1} dari ${project.title}`"
            class="w-full max-h-[70svh] md:max-h-96 rounded-lg bg-white object-contain shadow-md"
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
import ikan1 from '@/assets/images/LogoIkan.png'
import ikan2 from '@/assets/images/home.jpeg'
import ikan3 from '@/assets/images/result.jpeg'
import ikan4 from '@/assets/images/History.jpeg'
import ikan5 from '@/assets/images/resep.jpeg'
import ikan6 from '@/assets/images/artikel.jpg'
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
import AS2 from '@/assets/images/AS2.png'
import AS1 from '@/assets/images/AS1.png'
import undangan1 from '@/assets/images/undangan1.png'
import undangan2 from '@/assets/images/undangan2.png'
import undangan3 from '@/assets/images/undangan3.png'
import undangan4 from '@/assets/images/undangan4.png'
import undangan5 from '@/assets/images/undangan5.png'



const projects = [
  {
  title: "Deteksi Kesegaran Ikan",
  description: "Aplikasi mobile berbasis CNN untuk mendeteksi kesegaran ikan melalui citra mata dan insang.",
  longDescription: "Proyek ini menggunakan model Convolutional Neural Network (CNN) untuk menganalisis citra mata dan insang ikan guna menentukan tingkat kesegaran secara akurat. Model CNN dilatih menggunakan dataset citra ikan dan diintegrasikan ke dalam aplikasi mobile yang dibangun dengan Kotlin.",
  features: [
    "Klasifikasi tingkat kesegaran ikan berdasarkan gambar mata dan insang",
    "Model CNN yang ringan dan akurat untuk kebutuhan mobile",
    "Integrasi ke dalam aplikasi mobile berbasis Kotlin",
    "fitur artikel dan resep olahan ikan untuk edukasi pengguna",
    "Fitur riwayat deteksi dengan antarmuka yang sederhana dan intuitif",
  ],
  screenshots: [ikan1, ikan2, ikan3, ikan4, ikan5, ikan6],
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
    title: "Replikasi Design Gojek Menggunakan figma",
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

{
  title: "Website Undangan Digital",
  description: "Desain website undangan digital yang elegan, modern, dan responsif untuk menyampaikan informasi acara secara praktis dan menarik.",
  longDescription: "Website Undangan Digital adalah proyek desain UI/UX yang dibuat untuk menghadirkan undangan acara dalam bentuk website yang modern dan interaktif. Proyek ini dirancang menggunakan Figma dengan memperhatikan tampilan visual, kemudahan navigasi, serta pengalaman pengguna. Website menyediakan berbagai informasi penting seperti detail acara, lokasi, galeri foto, dan informasi lainnya dalam satu halaman yang mudah diakses melalui perangkat desktop maupun mobile.",
  features: [ "Desain UI/UX modern dan elegan untuk website undangan digital", 
  "Informasi acara yang tersusun secara jelas dan mudah dinavigasi", 
  "Desain responsif yang disesuaikan untuk perangkat desktop dan mobile", 
  "Galeri foto untuk menampilkan dokumentasi atau foto pasangan",
  "Informasi lokasi dan detail acara yang mudah diakses", 
  "Prototype interaktif menggunakan Figma untuk mensimulasikan pengalaman pengguna", ],
    screenshots: [undangan1, undangan2, undangan3, undangan4, undangan5],
    link: "#undangan-digital-figma",
  },

  {
  title: "Website Marketing untuk PT Adi Sanggoro",
description: "Website company profile dan marketing untuk PT Adi Sanggoro yang dilengkapi chatbot AI interaktif untuk membantu memberikan informasi mengenai layanan perusahaan.",
longDescription: "Website PT Adi Sanggoro merupakan proyek pengembangan website company profile dan marketing yang dirancang untuk memperkenalkan layanan AS.NET sebagai penyedia solusi jaringan, internet, IoT, dan teknologi. Website memiliki tampilan modern dan responsif dengan informasi mengenai perusahaan, layanan, klien, serta cakupan bisnis. Selain itu, website dilengkapi fitur AS.NET Assistant, yaitu chatbot interaktif yang membantu pengguna mendapatkan informasi mengenai layanan perusahaan secara lebih cepat dan mudah.",
features: [
  "Website company profile modern dan responsif untuk kebutuhan marketing PT Adi Sanggoro",
  "Informasi layanan perusahaan seperti Internet Service Provider, FTTH, Data Center, Hosting, Domain, dan solusi IoT",
  "Chatbot AI AS.NET Assistant untuk menjawab pertanyaan pengguna mengenai layanan perusahaan",
  "Antarmuka chatbot interaktif yang terintegrasi langsung ke dalam website",
  "Navigasi website yang terstruktur untuk memudahkan pengguna menemukan informasi",
  "Desain responsif yang dapat diakses melalui desktop maupun perangkat mobile",
],
screenshots: [AS1, AS2],
link: "#adi-sanggoro-website",
  },
  // Tambahkan proyek lain seperti sebelumnyaaaa
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
