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
          '50': '#f5f5f7',
          '100': '#ececee',
          '200': '#cfcfd5',
          '300': '#b2b1bb',
          '400': '#797789',
          '500': '#3F3D56',
          '600': '#39374d',
          '700': '#2f2e41',
          '800': '#262534',
          '900': '#1f1e2a',
          'base': '#3f3d56',
        },
        'blue-gray': colors.blueGray,
        'amber': colors.amber,
      },//colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


