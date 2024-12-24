/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,vue,js,ts,jsx,tsx}',
    './public/**/*.html',
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

