const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
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
}
