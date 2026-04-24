/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkMain: '#1e2025',
        goldMain: '#ffc562',
      },
    },
  },
  plugins: [],
}