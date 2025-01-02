/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './wockhaus/*.html', // Matches all HTML files in templates and subdirectories
    './wockhaus/js/*.js',   // Matches all JS files in static/js and subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "coffee"
    ],
  }
}

