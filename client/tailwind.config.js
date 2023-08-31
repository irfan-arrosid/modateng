/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      'gray': '#E0E0E0',
      'light-gray': '#868686',
    },
    fontFamily: {},
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        myTheme: {
          'primary': '#008ea7',
          'secondary': '#FF6B6B',
          // 'accent': '#',
          'neutral': '#333333',
          'base-100': '#ffffff',
          // 'info': '#',
          // 'success': '#',
          // 'warning': '#',
          // 'error': '#',
        }
      }
    ],
  },
}

