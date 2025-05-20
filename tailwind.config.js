/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'expedia': {
          blue: '#1668E3',
          darkblue: '#00153D',
          hover: '#0D4EAF',
          light: '#F0F3FF',
          gray: '#343B53',
          'light-gray': '#616161',
          yellow: '#FCC507'
        }
      }
    },
  },
  plugins: [],
};