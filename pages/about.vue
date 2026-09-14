<template>
  <section
    class="max-w-6xl mx-auto px-4 py-12 sm:px-6 sm:py-20 space-y-12 sm:space-y-20 bg-gradient-to-b from-blue-50 to-white sm:rounded-3xl shadow-lg"
    aria-label="Bagian About Farhan"
  >
    <!-- Header About dengan Gradient Text -->
    <header class="text-center mb-16">
      <h2
        class="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 mb-6 animate-fade-slide-up"
        tabindex="0"
      >
        Tentang Saya
      </h2>
      <p
        class="text-gray-700 text-lg max-w-3xl mx-auto animate-fade-slide-up delay-100"
        tabindex="0"
      >
        Saya Farhan, mahasiswa Teknologi Informasi dengan minat kuat di bidang
        <span class="font-semibold text-blue-600">pengembangan aplikasi</span>,
        <span class="font-semibold text-blue-600">UI/UX</span>, dan
        <span class="font-semibold text-blue-600">Design </span>.
      </p>
    </header>

    <!-- Foto dengan efek shadow glow -->
    <div
      class="flex flex-col md:flex-row items-center gap-8 md:gap-24"
      aria-label="Foto dan deskripsi singkat"
    >
      <div
        class="w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-full overflow-hidden shadow-xl shadow-blue-400/50 hover:shadow-blue-600/70 transform transition-all duration-300 hover:scale-110 cursor-pointer"
        tabindex="0"
        aria-label="Foto Farhan"
      >
        <img
          src="/assets/images/abcd.jpg"
          alt="Foto Farhan"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="flex-1 space-y-8 text-gray-700 text-lg leading-relaxed animate-fade-slide-up delay-200">
        <p tabindex="0">
          Saya sedang menempuh pendidikan di Politeknik Negeri Padang, fokus pada
          pengembangan teknologi yang berdampak nyata. Selain programming,
          saya juga mendalami desain antarmuka dan pengalaman pengguna agar aplikasi
          yang saya buat mudah digunakan dan menarik.
        </p>
        <p tabindex="0">
          Dalam berbagai proyek, saya berkontribusi dengan membuat solusi inovatif,
          seperti deteksi kesegaran ikan berbasis citra dan game tradisional budaya lokal.
        </p>
      </div>
    </div>

    <!-- Cards Keahlian -->
    <div
      class="grid md:grid-cols-3 gap-6 sm:gap-12 max-w-5xl mx-auto"
      aria-label="Detail keahlian dan pengalaman"
    >
      <article
        class="flex items-start gap-4 sm:gap-6 bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition"
        tabindex="0"
      >
        <div class="flex shrink-0 items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full text-blue-600 text-4xl sm:text-5xl">
          <Icon name="mdi:school" />
        </div>
        <div>
          <h3 class="text-xl font-semibold text-blue-700 mb-2">Pendidikan</h3>
          <p>
            Mahasiswa TI Politeknik Negeri Padang dengan fokus pada pengembangan aplikasi dan teknologi inovatif.
          </p>
        </div>
      </article>



      <article
        class="flex items-start gap-4 sm:gap-6 bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition"
        tabindex="0"
      >
        <div class="flex shrink-0 items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full text-blue-600 text-4xl sm:text-5xl">
          <Icon name="mdi:lightbulb-on-outline" />
        </div>
        <div>
          <h3 class="text-xl font-semibold text-blue-700 mb-2">Visi & Motivasi</h3>
          <p>
            Menggunakan teknologi untuk memberikan solusi nyata dan memberdayakan
            masyarakat dengan inovasi berbasis AI dan aplikasi berkualitas.
          </p>
        </div>
      </article>
    </div>

    <!-- Tombol aksi dengan efek shadow dan scale -->
    <div
      class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-8 mt-12 sm:mt-16"
      aria-label="Tombol unduh CV dan LinkedIn"
    >

<a
  href="/files/cvfarhann.pdf"
  download
  class="px-6 sm:px-10 py-3 text-center bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
  tabindex="0"
  aria-label="Unduh CV Farhan"
>
  Unduh CV
</a>


      <a
        href="https://linkedin.com/in/Farhan ."
        target="_blank"
        rel="noopener noreferrer"
        class="px-6 sm:px-10 py-3 text-center border-2 border-blue-600 text-blue-600 rounded-full font-semibold shadow hover:bg-blue-50 transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        tabindex="0"
        aria-label="Kunjungi profil LinkedIn Farhan"
      >
        LinkedIn
      </a>
      <a
        href="https://www.figma.com/files/team/1280427529740062167/recents-and-sharing?fuid=1280427525990563829"
        target="_blank"
        rel="noopener noreferrer"
        class="px-6 sm:px-10 py-3 text-center border-2 border-blue-600 text-blue-600 rounded-full font-semibold shadow hover:bg-blue-50 transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        tabindex="0"
        aria-label="Kunjungi  figma "
      >
        figma
      </a>
      
    </div>
  </section>
</template>
