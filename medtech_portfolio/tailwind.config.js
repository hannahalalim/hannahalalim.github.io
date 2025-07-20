/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#F8FAFC',
        white: '#FFFFFF',
        navy: '#223A5E',
        blue: '#4A6FA5',
        gray: '#E5E7EB',
        darkgray: '#374151',
        accent: '#4A6FA5',
        primary: '#223A5E',
      },
      fontFamily: {
        sans: ['Inter', 'Lato', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};

