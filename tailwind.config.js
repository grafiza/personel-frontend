/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue-rgb': 'rgb(83,131,209)',
        'blue-rgb-hover': 'rgba(83,131,209,50)',
        'blue-rgb-2': 'rgb(52,104,147)',
        'lacivert-1':'rgb(41, 95, 152)',
        'lacivert-2':'rgb(26, 72, 112)',
        'mavi-1':'rgb(124, 147, 195)',
        'bej-1':'rgb(225, 215, 183)',
        'turuncu-1':'rgb(255, 127, 62)',
        'acik-gri':'rgb(243, 247, 236)'
      },
    },
  },
  plugins: [],
};
