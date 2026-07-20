/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        offWhite: '#F7F6F3',
        grey: '#e5e5e5',
        black: '#000000',
        notionBg: '#F7F6F3',
        notionText: '#37352F',
        notionGray: '#787774',
        notionBorder: '#E3E2E0',
        notionHover: '#EFEFEF',
        notionAccent: '#2383E2',
      },

      screens: {
        'sm': '600px',  
        'md': '700px',
        'lg': '1100px', 
      },
    },
  },
  
  plugins: [],
}
