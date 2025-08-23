/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter_18pt-Regular"],
        interBold: ["Inter_18pt-Bold"],
        playfair: ["PlayfairDisplay-Regular"],
        playfairBold: ["PlayfairDisplay-Bold"],
      },
    },
  },
  plugins: [],
};
