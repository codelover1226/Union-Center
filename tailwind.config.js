const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'GTPressura-Bold': ['GTPressura-Bold', 'fallback-font-family'],
        'GTPressura-Light': ['GTPressura-Light', 'fallback-font-family'],
        'GTPressura': ['GTPressura', 'fallback-font-family'],
        'SctoGroteskA-Light': ['SctoGroteskA-Light', 'fallback-font-family'],
        'SctoGroteskADemo-Regular': ['SctoGroteskADemo-Regular', 'fallback-font-family'],
      }
    },
  },
  plugins: [],
});