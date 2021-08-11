const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      'poppins': ['Poppins, sans-serif'],
    },
    extend: {
      colors: {
        'primary': {
          '50': '#f5f9f9',
          '100': '#ecf3f3',
          '200': '#cfe1e2',
          '300': '#b2ced0',
          '400': '#79aaad',
          '500': '#3f858a',
          '600': '#39787c',
          '700': '#2f6468',
          '800': '#265053',
          '900': '#1f4144',
          'base': '#00BFA6'
        },//primary
        'secondary': {
          '50': '#fbf5fb',
          '100': '#f7eaf7',
          '200': '#ebcbeb',
          '300': '#deacdf',
          '400': '#c66dc7',
          '500': '#ad2faf',
          '600': '#9c2a9e',
          '700': '#822383',
          '800': '#681c69',
          '900': '#551756'
        },//secondary
        'blue-gray':colors.blueGray,
        'amber':colors.amber,
      },//colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

