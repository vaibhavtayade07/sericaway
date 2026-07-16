/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#C89B5E',
          50: '#F7F0E6',
          100: '#EDDCC2',
          200: '#E0C89B',
          300: '#D5B67A',
          400: '#CEA86B',
          500: '#C89B5E',
          600: '#B08048',
          700: '#8C6637',
          800: '#6B4D28',
          900: '#4A341C',
        },
        surface: '#111111',
        card: '#161616',
        border: '#27272A',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}