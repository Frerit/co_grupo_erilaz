import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#10b981',
          muted: 'rgba(16,185,129,0.12)',
          glow: 'rgba(16,185,129,0.06)',
        },
      },
      animation: {
        'float-a': 'floatA 5.5s ease-in-out infinite',
        'float-b': 'floatB 7s ease-in-out 1.2s infinite',
        'float-c': 'floatC 6.2s ease-in-out 0.6s infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'dash': 'dash 3s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        floatA: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(0.5deg)' },
        },
        floatB: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatC: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-0.5deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0deg)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        dash: {
          'to': { strokeDashoffset: '-24' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
