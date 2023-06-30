/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        bg: '#F6F5F1',
        dua: '#dcd7c9',
        tiga: '#966844',
        empat: '#c2c8c6',
        lima: '#3f4e51',
        enam: '#2c3638',
        text: '#12294a',
        lain: '#81172c',
        ini: '#f7f6f8',
      },
      fontFamily: {
        lato: ['DM Sans'],
      },
      screens: {
        'xs': {'max': '639px'}
      },
    },
  },
  plugins: [],
}

