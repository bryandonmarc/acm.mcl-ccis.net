// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#00214e',
        secondary: '#f1f2f4',
        accent: '#00b3a4',
        highlight: '#00a6d9',
      },
      screens: {
        '2xl': '1536px',
      },
    },
  },
}
