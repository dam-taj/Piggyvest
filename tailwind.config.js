/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'almostBlack': '#0c1825',
        'white': '#ffff',
        'veryLightBlue': '#ced3da',
        'lightRed': '#BBBBBB',
        'blue': '#0D79E3',
        'lightGray': 'grey',
        'dustyBlue': 'rgb(50, 177, 205)',
        'almostPink': 'rgb(249,249,249)',
        'lightPurple': '#F7F0FF',
        'darkPurple': '#7913E5',
        'veryDarkBlue': '#0c1825',
        'lightBlue': '',

      },
      fontFamily: {
        body: ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}


// npx tailwindcss -i ./tailwind/tailwind.css -o ./src/css/output.css --watch