module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Oooh Baby', 'cursive'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
