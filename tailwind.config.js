/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#E8841A',
        gold: '#C9922A',
        charcoal: '#2C2416',
        brown: '#6B4C2A',
        cream: '#FAF6F0',
        beige: '#F2EBE0',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}