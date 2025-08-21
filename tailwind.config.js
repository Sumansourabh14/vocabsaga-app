/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["PlayfairDisplay-Regular"],
        playfairBold: ["PlayfairDisplay-Bold"],
      },
    },
  },
  plugins: [],
};
