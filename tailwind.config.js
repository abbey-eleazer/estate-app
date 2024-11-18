/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'sans':["Open Sans"],
      'serif':["Merriweather"]
    },
    colors: {
      'darkColor' : '#091638',
      'lightColor' : '#F3F3FA',
      'whiteColor' : '#FFFFFF',
      'lightBlue' : '#6E8AE9',
      'darkBlue' : '#1C3988',
    },
    container: {
      center : true,
      // width : '1440px',
      // padding : 'rem'
      
    }
  },
  plugins: [],
}