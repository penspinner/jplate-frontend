const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // https://tailwindcss.com/docs/controlling-file-size#removing-unused-css
  purge: ['./src/**/*.tsx'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
