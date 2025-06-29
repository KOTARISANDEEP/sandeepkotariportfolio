/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0d1117',
        'dark-secondary': '#161b22',
        'dark-accent': '#21262d',
        'electric-blue': '#3b82f6',
        'neon-violet': '#a855f7',
        'soft-green': '#10b981',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'typewriter': 'typewriter 4s steps(40) 1s 1 normal both',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'typewriter': {
          '0%': { width: '0ch' },
          '100%': { width: '100%' },
        },
        'blink': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#3b82f6' },
        },
      },
    },
  },
  plugins: [],
};