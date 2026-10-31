/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#090909',
          secondary: '#111111',
          card: '#191919',
          elevated: '#202020',
          border: '#303030',
          surface: '#151515',
        },
        crimson: {
          DEFAULT: '#D7192D',
          glow: '#4A0711',
          surface: '#251014',
          hover: '#b51425',
          dark: '#8E101E',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A6A6A6',
          muted: '#737373',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        condensed: ['Oswald', 'Bebas Neue', 'Impact', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pop': 'pop 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'subtle-pulse': 'subtlePulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'scale(1) translateY(0)', boxShadow: '0 0 0 0 rgba(215, 25, 45, 0)' },
          '50%': { transform: 'scale(1.08) translateY(4px)', boxShadow: '0 0 20px 4px rgba(215, 25, 45, 0.45)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.65' },
        }
      }
    },
  },
  plugins: [],
}
