/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    colors: {
      neutral:        '#0a0a0a',
      foreground:     '#ECE3CE',
      background:     '#27272a',
      backgroundAlt:  '#202024',
      primary:        '#9DBC98',
      secondary:      '#424769',
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

