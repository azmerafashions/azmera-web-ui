module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        whiteGray: '#f5f5f5',
        primary: '#152ae6',
        secondary: '#0e1ead',
      },
    },
  },
  variants: {
    extend: {
      margin: ['hover', 'focus'],
    },
  },
  plugins: [],
}
