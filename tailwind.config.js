/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },

      },
      colors: {
        'primary': "#1572D3",
        'secondary': "#484848"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('src/LandingPage/assets/backgroundlogo.png')",
        'landingpage3': "url('src/LandingPage3/assets/Audio.png)"

      }
    },
  },
  plugins: [],
}