module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%)',
        'custom-gradient-h2': 'linear-gradient(270deg, #DF8908 50%, #B415FF 100%)',
        'custom-gradient-button': 'linear-gradient(270deg, #DF8908 50%, #B415FF 100%)',
        'custom-gradient-hover': 'linear-gradient(45deg, #3f0028, #582300)',
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  plugins: [],
}
