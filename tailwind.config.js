module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        newblue: {
          light: '#375179',
          DEFAULT: '#69A2A2',
          dark:'#2B2B2B'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
