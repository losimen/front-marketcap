/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/index.html',
    './src/*.vue',
    './src/components/**/*.vue',
    './src/pages/*.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
