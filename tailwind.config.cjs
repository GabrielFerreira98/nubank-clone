module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      'home-page': "url('./src/assets/home-nubank.webp')",
      'believe-cover': "url('./src/assets/believe-cover.webp')",
      'nucommunity-cover': "url('./src/assets/nucommunity-cover.webp')",
      'information-central-cover': "url('./src/assets/information-central-cover.webp')"
    },
    colors: {
      'white': '#FFFFFF',
      'gray':{
        '500': 'rgba(17, 17, 17, 0.1)',
        '700': 'rgba(17, 17, 17, 0.2);',
        '900': 'rgba(17, 17, 17, 0.7)',
      },
      'purple': {
        '500': 'rgb(231, 214, 241)',
        '700': 'rgb(130, 10, 209)'
      } 
    }
  },
  plugins: [],
}