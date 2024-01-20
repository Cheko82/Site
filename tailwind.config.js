/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    colors: {
      neutral:        '#0a0a0a',
      foreground:     '#F7FFE5',
      background:     '#27272a',
      backgroundAlt:  '#202024',
      primary:        '#99BC85',
      secondary:      '#EBD9B4',
      disabled:       '#3A4D39',
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

