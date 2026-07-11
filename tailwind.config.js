/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#6D5EF7',
          50: '#F0EEFE',
          100: '#DCD7FD',
          200: '#B9AFFB',
          300: '#9B8AF9',
          400: '#7D68F8',
          500: '#6D5EF7',
          600: '#5A4AE0',
          700: '#4838C9',
          800: '#3628B2',
          900: '#241A9B',
        },
        surface: '#111111',
        card: '#161616',
        border: '#27272A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}