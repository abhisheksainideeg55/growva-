/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: '#fe5e3a',
          dark: '#e04a27',
          orange: '#e78c45',
          brown: '#8a5133',
          red: '#B90808',
          yellow: '#FFE175',
          lime: '#eef8d8',
          body: '#fffaf3',
          card: '#ffffff',
          darkbg: '#0c0c0c',
          title: '#282c32',
          text: '#0c0c0c',
          muted: '#737373',
          border: '#0C0C0C',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marqueeFast: 'marquee 15s linear infinite',
        marqueeReverse: 'marqueeReverse 25s linear infinite',
        float: 'float 5s ease-in-out infinite',
        floatSlow: 'floatSlow 4s ease-in-out infinite',
        spinSlow: 'spinSlow 20s linear infinite',
      }
    },
  },
  plugins: [],
}
