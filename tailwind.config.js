/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'violet':'#5964E0',
        'light-violet':'#939BF4',
        'very-dark-blue':'#19202D',
        'midnight':'#121721',
        'grey':'#9DAEC2',
        'light-grey':'#F4F6F8',
        'dark-grey':'#6E8098',
      },
      backgroundImage: {
        'header-image': "url('./assets/desktop/bg-pattern-header.svg')",
      }
    },
  },
  plugins: [],
  darkMode:'class'
}

