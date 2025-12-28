/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a1e3d',
        skyBlue: '#4dd0e1',
        sunsetOrange: '#ff9800',
        sunsetYellow: '#ffc107',
      },
    },
  },
  plugins: [],
}