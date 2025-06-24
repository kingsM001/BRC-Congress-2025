// tailwind.config.js
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      gray: colors.gray,
      yellow: {
        400: '#facc15',
        500: '#eab308',
      },
      purple: {
        100: '#f3e8ff',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
      },
    },
    extend: {},
  },
  plugins: [],
}
