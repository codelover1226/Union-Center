const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#4A6297',
        'light-blue': '#6E92C4', 
        'main-bg': '#F3EBDD',
        'brown-bg': '#BC9067',
        'dark-bg': '#494243',
        'title-font-1': '#435060',
        'title-font-2': '#494243',
        'main-font': '#B0928A',
        'dark-font': '#212529'
      },
      fontFamily: {
        'GTPressura-Bold': ['GTPressura-Bold', 'fallback-font-family'],
        'GTPressura-Light': ['GTPressura-Light', 'fallback-font-family'],
        'GTPressura': ['GTPressura', 'fallback-font-family'],
        'SctoGroteskA-Light': ['SctoGroteskA-Light', 'fallback-font-family'],
        'SctoGroteskADemo-Regular': ['SctoGroteskADemo-Regular', 'fallback-font-family'],
        'custom-sans': ['Helvetica', 'Arial', 'sans-serif']
      },animation: {
        fadeIn: 'fadeIn 2s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
});