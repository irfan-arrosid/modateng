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
      'primary': '#007C91', //Use this color for important call-to-action buttons, headers, and elements that you want to stand out.
      'secondary': '#FF6B6B', // This color can be used for highlights, hover effects, and to add a vibrant touch to the design.
      'black': '#333333', // For legible text, use a dark gray color that provides good contrast against the background.
      'white': '#FFFFFF', // White is a classic background color that makes the content easy to read and helps other colors stand out.
      'gray': '#E0E0E0', // This light gray shade is perfect for backgrounds, dividing sections, and creating a clean, modern look.
    },
    fontFamily: {},
    extend: {},
  },
  plugins: [],
}

