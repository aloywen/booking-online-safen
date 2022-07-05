module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '5rem'
      },
      fontFamily: {
        'primary': 'Montserrat, sans-serif',
        'secondary': 'Roboto, sans-serif'
      },
      colors: {
        'primary': '#00B4D8',
        'secondary': '#807676',
        'third': '#B4FE98'
      }
    },
  },
  plugins: [],
}
