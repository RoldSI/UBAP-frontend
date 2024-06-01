/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridRow: {
        'span-full': '1 / -1',
      }
    },
  },
  plugins: [],
}

