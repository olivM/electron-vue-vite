module.exports = {
  purge: ['./index.html', './render/src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/typography'),],
}