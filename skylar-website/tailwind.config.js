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
        transparentWhite: 'rgba(255, 255, 255, 0.80)',
        offWhite: '#EBEEF9',
        grey: '#e5e5e5',
        black: '#000000',
        pastelPurple: '#898EFF',
        pastelBlue: '#71A7E7',
        blue: {
          dark: '#1B4D73',
          grey: '#547A96',
        },
        tagBlue: '#72A7E6',
      },
    },
  },
  
  plugins: [],
}
