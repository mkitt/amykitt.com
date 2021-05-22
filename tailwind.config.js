const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const partWhite = 'rgba(255, 255, 255, 0.4)'
const zeroWhite = 'rgba(255, 255, 255, 0)'

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'prime-1': '#858585',
        'prime-2': '#454545',
        'prime-3': '#7c7c7c',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        'auto-16': 'repeat(auto-fill, minmax(16rem, 1fr))',
        'auto-20': 'repeat(auto-fill, minmax(20rem, 1fr))',
      },
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      spacing: {
        30: '7.5rem',
        120: '30rem',
      },
    },
    // Overrides ...
    screens: {
      '!!': '0', // Similar to !important
      sm: '40em', // 640
      md: '48em', // 768
      lg: '64em', // 1024
      xl: '80em', // 1280
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const components = {
        html: { scrollBehavior: 'smooth' },
        '.screen-with-nav': { minHeight: 'calc(100vh - 10rem)' },
        '.scroll-is-disabled': { overflow: 'hidden' },
        '.span-4': { gridRowEnd: 'span 4' },
        '.span-5': { gridRowEnd: 'span 5' },
        '.span-6': { gridRowEnd: 'span 6' },
        '.span-9': { gridRowEnd: 'span 9' },
        '.tracer': { outline: '1px dotted blue' },
        '.tracer-magenta': { outline: '1px dotted magenta' },
        '.tile::after': {
          backgroundImage: `linear-gradient(45deg, ${partWhite} 0%, ${partWhite} 50%, ${zeroWhite} 50%, ${zeroWhite} 100%)`,
          bottom: 0,
          content: '""',
          left: 0,
          opacity: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          transition: 'opacity 0.25s',
          zIndex: 2,
        },
        '.tile:hover::after': {
          opacity: 1,
        },
      }
      addComponents(components)
    }),
  ],
}
