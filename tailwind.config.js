/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ["Pacifico", "sans-serif"],
        Plex: ["IBM Plex Mono", "monospace"]
      },
    },
  },
  plugins: [],
}

