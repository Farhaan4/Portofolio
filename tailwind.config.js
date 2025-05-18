/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // biru navy
        secondary: '#38BDF8', // biru terang
        accent: '#F59E0B', // kuning oranye
        background: '#F3F4F6', // abu terang
        dark: '#111827', // hitam gelap
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        heading: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
      },
      animation: {
        fade: 'fadeIn 0.8s ease-in-out',
        bounceSlow: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
