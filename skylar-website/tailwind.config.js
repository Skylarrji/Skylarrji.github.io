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
        offWhite: 'EBEEF9',
        black: '000000',
        pastelPink: '#EC8BCB',
        pastelBlue: '#71A7E7',
        blue: {
          dark: '#1B4D73',
          grey: '#547A96',
        },
        tag: {
          lightBlue: '#DAEBFF',
          outlineBlue: '#72A7E6',
        },
      }


    },
  },
  plugins: [],
}
