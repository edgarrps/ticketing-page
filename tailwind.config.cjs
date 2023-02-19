/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        maxWidth: {
          'readable': '23ch',
        },
      },
    },
  plugins: [],
}