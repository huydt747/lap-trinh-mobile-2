/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5669FF',
          blue: '#5669FF',
          cyan: '#00F8FF',
        },
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '48px',
      },
    },
  },
  plugins: [],
};