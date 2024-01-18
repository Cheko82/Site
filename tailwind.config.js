/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    colors: {
      neutral:        '#0a0a0a',
      foreground:     '#84b584',
      background:     '#171717',
      backgroundAlt:  '#27272a',
      primary:        '#baffba',
      secondary:      '#536b4e',
      disabled:       '#3f503c',
    },
    extend: {
      fontFamily: {
        Pacifico: ["Pacifico", "sans-serif"],
        Plex: ["IBM Plex Mono", "monospace"]
      },
    },
  },
  plugins: [],
}

