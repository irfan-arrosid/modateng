/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: "#E0E0E0",
      "light-gray": "#868686",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#008ea7",
          secondary: "#FF6B6B",
          // 'accent': '#',
          neutral: "#333333",
          "base-100": "#ffffff",
          // 'info': '#',
          // 'success': '#',
          // 'warning': '#',
          // 'error': '#',
        },
      },
    ],
  },
};
