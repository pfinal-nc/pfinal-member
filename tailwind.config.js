/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#effdf5',
          100: '#d9fbe8',
          200: '#b3f5d1',
          300: '#75edae',
          400: '#00dc82',
          500: '#00c16a',
          600: '#00a155',
          700: '#007f45',
          800: '#016538',
          900: '#0a5331',
          950: '#052e16',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
