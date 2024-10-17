/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       'brandcolor' : '#17C2EC'
      }
    },
  

    container: {
      center: true,
       padding:{
        DEFAULT: '35px',
       }
    },
    fontFamily :{
      'Montserrat': ["Montserrat", "sans-serif;"],
    }
  },
  plugins: [],
}