import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        themePink: '#FF99DC',
        themeNavy: '#0D0D55',
        themeNeon: '#D9F103',
        themeLilac: '#D2C7FF',

        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'primary-accent': 'var(--primary-accent)',
        'foreground-accent': 'var(--foreground-accent)',
        'hero-background': 'var(--hero-background)'
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-0%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scale: {
          '0%, 100%': { transform: 'scale(.96)' },
          '50%': { transform: 'scale(1)' }
        },
        scaleInOut: {
          '0%, 100%': { transform: 'scale(.90)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      animation: {
        'spin-3d': 'spin3d 3s linear infinite',
        scaleInOut: 'scaleInOut 1.8s infinite',
        'slide-down': 'slide-down 0.5s ease-out forwards'
      },
      textShadow: {
        lg: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }
    },
    fontFamily: {
      text: ['CuerpoFont', 'sans-serif'],
      title: ['TituloFont', 'sans-serif'],
    },
  },
  plugins: []
}
export default config
