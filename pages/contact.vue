<template>
  <section
    class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center px-4 py-16"
  >
    <div
      class="w-full max-w-4xl bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl animate-fade-in"
    >
      <h2 class="text-4xl font-bold text-center text-blue-700 mb-6">Hubungi Saya</h2>

      <!-- Form -->
      <form class="space-y-5" @submit.prevent="submitForm" novalidate>
        <input
          v-model.trim="name"
          type="text"
          placeholder="Nama"
          class="form-input"
          :class="{ 'border-red-500': errors.name }"
          required
          aria-invalid="errors.name ? 'true' : 'false'"
          aria-describedby="name-error"
        />
        <p v-if="errors.name" id="name-error" class="text-red-600 text-sm mt-1">
          {{ errors.name }}
        </p>

        <input
          v-model.trim="email"
          type="email"
          placeholder="Email"
          class="form-input"
          :class="{ 'border-red-500': errors.email }"
          required
          aria-invalid="errors.email ? 'true' : 'false'"
          aria-describedby="email-error"
        />
        <p v-if="errors.email" id="email-error" class="text-red-600 text-sm mt-1">
          {{ errors.email }}
        </p>

        <textarea
          v-model.trim="message"
          rows="5"
          placeholder="Pesan"
          class="form-input resize-none"
          :class="{ 'border-red-500': errors.message }"
          required
          aria-invalid="errors.message ? 'true' : 'false'"
          aria-describedby="message-error"
        ></textarea>
        <p v-if="errors.message" id="message-error" class="text-red-600 text-sm mt-1">
          {{ errors.message }}
        </p>

        <div class="text-center">
          <button
            type="submit"
            :disabled="loading"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading" class="inline-flex items-center gap-2">
              <svg
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Mengirim...
            </span>
            <span v-else>Kirim Pesan 🚀</span>
          </button>
        </div>
      </form>

      <!-- Social Media -->
      <div class="mt-10 text-center">
        <p class="text-lg text-gray-700 mb-4">Atau temui saya di platform berikut:</p>
        <div class="flex justify-center gap-6">
          <a
            href="https://github.com/Farhaan4"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="GitHub"
          >
            <Icon name="mdi:github" class="text-2xl" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/Farhan"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="LinkedIn"
          >
            <Icon name="mdi:linkedin" class="text-2xl" /> LinkedIn
          </a>
          <a
            href="mailto:farhanfarhan09679@gmail.com"
            class="social-link"
            aria-label="Email"
          >
            <Icon name="mdi:email-outline" class="text-2xl" /> Email
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Icon } from '@iconify/vue'

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const errors = reactive({
  name: '',
  email: '',
  message: '',
})

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validateForm() {
  errors.name = name.value ? '' : 'Nama wajib diisi.'
  errors.email = validateEmail(email.value) ? '' : 'Email tidak valid.'
  errors.message = message.value ? '' : 'Pesan wajib diisi.'

  return !errors.name && !errors.email && !errors.message
}

async function submitForm() {
  if (!validateForm()) return

  loading.value = true

  // Simulasi request kirim form (ganti dengan API call kalau ada)
  await new Promise((resolve) => setTimeout(resolve, 2000))

  alert(`Terima kasih, ${name.value}! Pesanmu sudah terkirim.`)

  // Reset form
  name.value = ''
  email.value = ''
  message.value = ''
  loading.value = false
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 0.7s ease-out;
}

.form-input {
  @apply w-full px-4 py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition;
}

.social-link {
  @apply flex items-center gap-2 px-4 py-2 rounded-full text-blue-600 font-medium hover:bg-blue-100 transition transform hover:scale-105;
}

.social-link svg {
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-link:hover svg {
  color: #1d4ed8;
  transform: scale(1.1);
}
</style>
